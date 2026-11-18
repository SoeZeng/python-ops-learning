"""运行示例脚本和巡栈工具链，确认教学代码的行为没有漂。"""

from __future__ import annotations

import json
import os
import subprocess
import sys
import tempfile
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SAMPLES = ROOT / "samples"
sys.path.insert(0, str(SAMPLES))

ENV = os.environ.copy()
ENV["PYTHONIOENCODING"] = "utf-8"
ENV.pop("XUNZHAN_WORKERS", None)
ENV.pop("OPS_TOKEN", None)

PASSED = 0


def ok(name: str) -> None:
    global PASSED
    PASSED += 1
    print(f"ok  {name}")


def run_py(script: str, args: list[str] | None = None, cwd: Path | None = None):
    command = [sys.executable, str(SAMPLES / script), *(args or [])]
    return subprocess.run(command, cwd=cwd or SAMPLES, env=ENV, capture_output=True, text=True)


def run_mod(*args: str, cwd: Path | None = None):
    command = [sys.executable, "-m", "xunzhan", *args]
    return subprocess.run(command, cwd=cwd or SAMPLES, env=ENV, capture_output=True, text=True)


def check(name: str, condition: bool, detail: str = "") -> None:
    if not condition:
        print(f"FAIL {name}")
        if detail:
            print(detail)
        raise SystemExit(1)
    ok(name)


def test_early_scripts() -> None:
    result = run_py("check_result.py")
    check("check_result exit", result.returncode == 1, result.stdout + result.stderr)
    check("check_result text", "需要处理 2 项" in result.stdout and "CRIT" in result.stdout)

    result = run_py("script_shape.py")
    check("script_shape exit", result.returncode == 1, result.stderr)
    check("script_shape streams", "CRIT" in result.stdout and "INFO 开始巡检" in result.stderr)

    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp) / "demo"
        dry = run_py("dry_run.py", ["--root", str(root), "--dry-run"])
        check("dry_run exit", dry.returncode == 0, dry.stderr)
        check("dry_run no file", dry.stdout.startswith("DRY-RUN") and not (root / "notice.txt").exists())
        real = run_py("dry_run.py", ["--root", str(root)])
        check("dry_run write", real.returncode == 0 and (root / "notice.txt").read_text(encoding="utf-8") == "published\n")
        shallow = run_py("dry_run.py", ["--root", "/tmp"])
        check("dry_run shallow", shallow.returncode == 2)

    result = run_py("batch_report.py")
    check("batch", result.returncode == 1 and "失败 1" in result.stdout and "报表投递" in result.stdout)

    result = run_py("inspect_levels.py")
    check(
        "levels",
        result.returncode == 0 and "退出码 0  严格模式 1" in result.stdout,
        result.stdout + result.stderr,
    )

    result = run_py("stop_or_continue.py")
    check(
        "stop policy",
        "记录失败，继续" in result.stdout and "停止，不执行后续步骤" in result.stdout and "健康检查" in result.stdout,
    )
    # 停下来的那一次，健康检查不应出现在 stop 段落后
    stop_part = result.stdout.split("策略 stop", 1)[1]
    check("stop skips", "健康检查" not in stop_part)

    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp) / "layout"
        first = run_py("idempotent_layout.py", ["--root", str(root)])
        second = run_py("idempotent_layout.py", ["--root", str(root)])
        check("idempotent first", first.returncode == 0 and first.stdout.strip() == "新建 app, log, tmp, config.json", first.stdout)
        check("idempotent second", second.returncode == 0 and second.stdout.strip() == "没有新文件")
        lock = root / ".lock"
        lock.write_text("held", encoding="utf-8")
        held = run_py("idempotent_layout.py", ["--root", str(root)])
        check("lock", held.returncode == 2 and "已有一次运行还没结束" in held.stderr)
        check("lock kept", lock.read_text(encoding="utf-8") == "held")


def test_http_retry_page_config() -> None:
    from config_layers import resolve_workers
    from paged_fetch import fetch_all
    from retry_call import call_with_retry

    workers, source = resolve_workers(8, {"XUNZHAN_WORKERS": "3"}, {"workers": 2})
    check("config cli", workers == 8 and source == "命令行")
    workers, source = resolve_workers(None, {"XUNZHAN_WORKERS": "3"}, {"workers": 2})
    check("config env", workers == 3 and source == "环境变量")
    workers, source = resolve_workers(None, {}, {"workers": 2})
    check("config file", workers == 2 and source == "配置文件")
    workers, source = resolve_workers(None, {}, None)
    check("config default", workers == 4 and source == "默认值")

    shown = run_py("config_layers.py")
    check("config main", shown.returncode == 0 and shown.stdout.strip() == "workers=4 来自默认值", shown.stdout + shown.stderr)

    delays = []
    calls = {"n": 0}

    def flaky():
        calls["n"] += 1
        if calls["n"] < 3:
            return 503, None
        return 200, {"status": "ok"}

    body = call_with_retry(flaky, sleep=delays.append)
    check("retry success", body == {"status": "ok"} and delays == [0.2, 0.4])

    def missing():
        return 404, None

    try:
        call_with_retry(missing, sleep=delays.append)
    except RuntimeError as exc:
        check("retry 404", "不重试" in str(exc))
    else:
        check("retry 404", False)

    names = fetch_all(lambda cursor: ({None: (["api", "worker"], "p2"), "p2": (["cron"], None)}[cursor]))
    check("paging", names == ["api", "worker", "cron"])

    def stuck(_cursor):
        return ["x"], "same"

    try:
        fetch_all(stuck, limit_pages=3)
    except RuntimeError as exc:
        check("paging limit", "上限" in str(exc))
    else:
        check("paging limit", False)

    result = run_py("paged_fetch.py")
    check("paging main", result.stdout.strip() == "api worker cron")
    result = run_py("retry_call.py")
    check("retry main", "结果 ok  调用 3 次  等待 [0.2, 0.4]" in result.stdout)

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            if self.headers.get("Authorization") != "Bearer practice":
                self.send_response(401)
                self.end_headers()
                return
            if self.path != "/health":
                self.send_response(404)
                self.end_headers()
                return
            body = b'{"status":"ok"}'
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def log_message(self, fmt, *args):
            return

    server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        url = f"http://127.0.0.1:{server.server_port}/health"
        good = run_py("http_health.py", [url, "--token", "practice"])
        check("http ok", good.returncode == 0 and '"status": "ok"' in good.stdout, good.stdout + good.stderr)
        denied = run_py("http_health.py", [url])
        check("http 401", denied.returncode == 1 and "HTTP 401" in denied.stdout)
    finally:
        server.shutdown()


def test_concurrency() -> None:
    from async_inspect import run_checks as async_run
    from bounded_async import run_checks as bounded_run
    from thread_pool import HOSTS, run_checks
    import asyncio

    lines, elapsed = run_checks(HOSTS, workers=4)
    check("threads order", lines == [f"{host['name']} OK" for host in HOSTS])
    check("threads fast", 0.15 <= elapsed < 0.5, str(elapsed))

    lines, elapsed = asyncio.run(async_run(HOSTS))
    check("async order", lines[0] == "api-1 OK" and lines[-1] == "cache-1 OK")
    check("async fast", elapsed < 0.55, str(elapsed))

    _lines, elapsed = asyncio.run(bounded_run(HOSTS, limit=2))
    check("bounded", 0.35 <= elapsed < 0.9, str(elapsed))


def test_budget() -> None:
    from error_budget import error_budget

    report = error_budget(1_000_000, 200, 0.999)
    check("budget", report["allowed"] == 1000 and report["remaining"] == 800)
    result = run_py("error_budget.py")
    check("budget main", "剩余 800" in result.stdout and "烧掉了 20.0%" in result.stdout)


def test_toolchain() -> None:
    result = run_mod("inspect")
    check("inspect exit", result.returncode == 1, result.stdout + result.stderr)
    check("inspect order", result.stdout.index("api-1") < result.stdout.index("worker-1") < result.stdout.index("cron-1"))
    check("inspect summary", "主机 3  严重 2  警告 0  正常 1" in result.stdout)
    check("inspect advice", "先确认进程是否还在" in result.stdout and "先清理或扩容" in result.stdout)
    check("inspect log", "开始巡检" in result.stderr and "退出码 1" in result.stderr)

    listed = run_mod("inspect", "--json")
    data = json.loads(listed.stdout)
    check("inspect json", [item["host"] for item in data] == ["api-1", "worker-1", "cron-1"])
    check("inspect heartbeat", data[1]["checks"][1]["status"] == "crit")
    check("inspect disk", data[0]["checks"][0]["status"] == "ok" and data[2]["checks"][0]["status"] == "crit")

    with tempfile.TemporaryDirectory() as tmp:
        hosts = Path(tmp) / "warn.json"
        hosts.write_text(
            json.dumps(
                [
                    {
                        "name": "cache-1",
                        "disk_used_percent": 85,
                        "heartbeat_age_s": 10,
                        "heartbeat_limit_s": 60,
                    }
                ]
            ),
            encoding="utf-8",
        )
        normal = run_mod("inspect", "--hosts", str(hosts))
        strict = run_mod("inspect", "--hosts", str(hosts), "--strict")
        check("strict off", normal.returncode == 0, normal.stdout)
        check("strict on", strict.returncode == 1, strict.stdout)

        dup = Path(tmp) / "dup.json"
        dup.write_text(hosts.read_text(encoding="utf-8").replace("cache-1", "cache-1") + "", encoding="utf-8")
        # 两台同名
        dup.write_text(
            json.dumps(
                [
                    {"name": "a", "disk_used_percent": 1, "heartbeat_age_s": 1, "heartbeat_limit_s": 10},
                    {"name": "a", "disk_used_percent": 1, "heartbeat_age_s": 1, "heartbeat_limit_s": 10},
                ]
            ),
            encoding="utf-8",
        )
        bad = run_mod("inspect", "--hosts", str(dup))
        check("dup names", bad.returncode == 2 and "不能重复" in bad.stderr)

    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp) / "env"
        dry = run_mod("deploy", "--root", str(root), "--dry-run")
        check("deploy dry", dry.returncode == 0 and "DRY-RUN 准备目录" in dry.stdout and not root.exists(), dry.stdout + dry.stderr)
        bad_port = run_mod("deploy", "--root", str(root), "--port", "70000")
        check("deploy bad port", bad_port.returncode == 1 and "FAIL 检查参数" in bad_port.stdout, bad_port.stdout)
        check("deploy bad port clean", not (root / "config.json").exists())

        keep_root = Path(tmp) / "keep"
        (keep_root / "app").mkdir(parents=True)
        (keep_root / "app" / "keep.txt").write_text("stay\n", encoding="utf-8")
        rolled = run_mod("deploy", "--root", str(keep_root), "--port", "0")
        check("deploy rollback", rolled.returncode == 1 and "回滚 渲染配置" in rolled.stdout and "回滚 准备目录" in rolled.stdout, rolled.stdout)
        check("deploy keep", (keep_root / "app" / "keep.txt").read_text(encoding="utf-8") == "stay\n")
        check("deploy cleaned", not (keep_root / "config.json").exists() and not (keep_root / "log").exists())

        fresh = Path(tmp) / "fresh"
        made = run_mod("deploy", "--root", str(fresh), "--port", "8080")
        check("deploy ok", made.returncode == 0, made.stdout + made.stderr)
        config = json.loads((fresh / "config.json").read_text(encoding="utf-8"))
        check("deploy config", config["port"] == 8080)
        (fresh / "config.json").write_text(json.dumps({"name": "demo", "port": 9}) + "\n", encoding="utf-8")
        again = run_mod("deploy", "--root", str(fresh), "--port", "8080")
        check("deploy idempotent", again.returncode == 0)
        kept = json.loads((fresh / "config.json").read_text(encoding="utf-8"))
        check("deploy no overwrite", kept["port"] == 9)

        shallow = run_mod("deploy", "--root", "/tmp", "--dry-run")
        check("deploy shallow", shallow.returncode == 2)

    artifact = SAMPLES / "xunzhan" / "fixtures" / "artifact.txt"
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp) / "rel"
        denied = run_mod(
            "publish",
            "--root",
            str(root),
            "--version",
            "1.2.0",
            "--artifact",
            str(artifact),
            "--env",
            "prod",
        )
        check("publish prod guard", denied.returncode == 2 and not root.exists(), denied.stderr)
        bad_version = run_mod(
            "publish",
            "--root",
            str(root),
            "--version",
            "v1.2.0",
            "--artifact",
            str(artifact),
        )
        check("publish version", bad_version.returncode == 2)
        first = run_mod(
            "publish",
            "--root",
            str(root),
            "--version",
            "1.2.0",
            "--artifact",
            str(artifact),
            "--env",
            "staging",
        )
        check("publish first", first.returncode == 0 and (root / "CURRENT").read_text(encoding="utf-8").strip() == "1.2.0", first.stdout)
        drill = run_mod(
            "publish",
            "--root",
            str(root),
            "--version",
            "1.3.0",
            "--artifact",
            str(artifact),
            "--fail-health",
        )
        check("publish rollback", drill.returncode == 1, drill.stdout)
        check("publish pointer", (root / "CURRENT").read_text(encoding="utf-8").strip() == "1.2.0")
        check("publish scene", (root / "releases" / "1.3.0" / "VERSION").read_text(encoding="utf-8").strip() == "1.3.0")
        again = run_mod(
            "publish",
            "--root",
            str(root),
            "--version",
            "1.2.0",
            "--artifact",
            str(artifact),
        )
        check("publish no overwrite", again.returncode == 2 and "拒绝覆盖" in again.stderr)
        prod = run_mod(
            "publish",
            "--root",
            str(root),
            "--version",
            "1.4.0",
            "--artifact",
            str(artifact),
            "--env",
            "prod",
            "--yes",
        )
        check("publish prod", prod.returncode == 0 and (root / "CURRENT").read_text(encoding="utf-8").strip() == "1.4.0")

    with tempfile.TemporaryDirectory() as tmp:
        out = Path(tmp) / "nested" / "metrics.jsonl"
        collected = run_mod("collect", "--out", str(out), "--count", "2", "--interval", "0")
        check("collect", collected.returncode == 0 and out.is_file(), collected.stderr)
        rows = [json.loads(line) for line in out.read_text(encoding="utf-8").splitlines()]
        disks = [row for row in rows if row["name"] == "disk.used_percent"]
        check("collect rows", len(disks) == 2 and {"ts", "host", "name", "value"} <= set(disks[0]))

    metrics = SAMPLES / "xunzhan" / "fixtures" / "metrics.jsonl"
    judged = run_mod("judge", "--metrics", str(metrics), "--disk-crit", "90")
    check("judge alert", judged.returncode == 1 and "worker-1" in judged.stdout and "第一步" in judged.stdout, judged.stdout)
    check("judge latest", "91" in judged.stdout and "93.5" not in judged.stdout)
    quiet = run_mod("judge", "--metrics", str(metrics), "--disk-crit", "99")
    check("judge quiet", quiet.returncode == 0 and "没有需要行动的告警" in quiet.stdout)


def main() -> int:
    started = time.perf_counter()
    test_early_scripts()
    test_http_retry_page_config()
    test_concurrency()
    test_budget()
    test_toolchain()
    elapsed = time.perf_counter() - started
    print(f"\n{PASSED} passed in {elapsed:.1f}s")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
