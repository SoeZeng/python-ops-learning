"""把「记得要做的那几步」写成可以重复执行、失败会收回的步骤。"""

from __future__ import annotations

import json
import sys

from xunzhan.paths import die, require_work_root


class Step:
    def __init__(self, name: str, run, rollback=None, *, mutates: bool):
        self.name = name
        self._run = run
        self.rollback = rollback
        self.mutates = mutates

    def run(self, ctx: dict) -> None:
        self._run(ctx)


def run_python(ctx: dict) -> None:
    if sys.version_info < (3, 10):
        raise RuntimeError(f"需要 Python 3.10 或更高，当前是 {sys.version.split()[0]}")


def run_args(ctx: dict) -> None:
    port = ctx["port"]
    if not isinstance(port, int) or not 0 <= port <= 65535:
        raise RuntimeError("端口要在 0 到 65535 之间")


def run_dirs(ctx: dict) -> None:
    for name in ("app", "log", "tmp"):
        path = ctx["root"] / name
        if path.exists():
            continue
        path.mkdir()
        ctx["created_dirs"].append(path)


def rollback_dirs(ctx: dict) -> bool:
    removed = False
    for path in reversed(ctx["created_dirs"]):
        if path.is_dir():
            path.rmdir()
            removed = True
    ctx["created_dirs"].clear()
    return removed


def run_config(ctx: dict) -> None:
    path = ctx["root"] / "config.json"
    if path.exists():
        ctx["config_written"] = False
        return
    payload = {"name": "demo", "port": ctx["port"]}
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    ctx["config_written"] = True


def rollback_config(ctx: dict) -> bool:
    if not ctx.get("config_written"):
        return False
    path = ctx["root"] / "config.json"
    path.unlink(missing_ok=True)
    ctx["config_written"] = False
    return True


def run_smoke(ctx: dict) -> None:
    path = ctx["root"] / "config.json"
    if not path.is_file():
        raise RuntimeError("没有配置文件，无法做健康检查")
    data = json.loads(path.read_text(encoding="utf-8"))
    port = data.get("port")
    if not isinstance(port, int) or not 1 <= port <= 65535:
        raise RuntimeError(f"端口 {port} 不能提供服务")


def build_steps() -> list[Step]:
    return [
        Step("检查 Python", run_python, mutates=False),
        Step("检查参数", run_args, mutates=False),
        Step("准备目录", run_dirs, rollback_dirs, mutates=True),
        Step("渲染配置", run_config, rollback_config, mutates=True),
        Step("健康检查", run_smoke, mutates=False),
    ]


def rollback_done(done: list[Step], ctx: dict) -> None:
    for step in reversed(done):
        if step.rollback and step.rollback(ctx):
            print(f"回滚 {step.name}")


def run(args) -> int:
    if args.dry_run:
        root_path = require_work_root(args.root, create=False)
    else:
        root_path = require_work_root(args.root, create=True)
    ctx = {
        "root": root_path,
        "port": args.port,
        "created_dirs": [],
        "config_written": False,
    }
    done: list[Step] = []
    for step in build_steps():
        if args.dry_run and step.mutates:
            print(f"DRY-RUN {step.name}")
            continue
        if args.dry_run and step.name == "健康检查":
            print(f"DRY-RUN {step.name}")
            continue
        try:
            step.run(ctx)
        except Exception as exc:
            print(f"FAIL {step.name}：{exc}")
            rollback_done(done, ctx)
            return 1
        print(f"OK   {step.name}")
        done.append(step)
    return 0
