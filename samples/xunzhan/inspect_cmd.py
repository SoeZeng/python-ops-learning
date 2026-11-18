"""按清单巡检。一台失败不会让后面的机器失去记录。"""

from __future__ import annotations

import json
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import shutil

from xunzhan.model import Check, HostReport, plain_number
from xunzhan.paths import die
from xunzhan.report import exit_code, format_json, format_text, log

DEFAULT_HOSTS = Path(__file__).resolve().parent / "fixtures" / "hosts.json"


def check_disk(host: dict, warn: float, crit: float) -> Check:
    if "disk_used_percent" in host:
        raw = host["disk_used_percent"]
    else:
        path = str(host.get("disk_path") or ".")
        try:
            usage = shutil.disk_usage(path)
        except OSError as exc:
            return Check("disk", "crit", f"读不到磁盘 {path}：{exc}", "先确认路径是否存在")
        raw = usage.used / usage.total * 100
    percent = round(float(raw), 1)
    detail = f"已用 {percent:.1f}%"
    if percent >= crit:
        return Check("disk", "crit", detail, "先清理或扩容，再继续发布")
    if percent >= warn:
        return Check("disk", "warn", detail, "安排清理，发布前再看一眼")
    return Check("disk", "ok", detail, "")


def check_heartbeat(host: dict) -> Check:
    if "heartbeat_age_s" not in host or "heartbeat_limit_s" not in host:
        return Check(
            "heartbeat",
            "crit",
            "清单里没有心跳数据",
            "补上采集，或标明这台机器不检查心跳",
        )
    age = float(host["heartbeat_age_s"])
    limit = float(host["heartbeat_limit_s"])
    if limit <= 0:
        return Check("heartbeat", "crit", "心跳上限不合法", "修正清单里的 heartbeat_limit_s")
    detail = f"心跳 {plain_number(age)} 秒，上限 {plain_number(limit)} 秒"
    if age >= limit:
        return Check("heartbeat", "crit", detail, "先确认进程是否还在")
    if age >= limit * 0.7:
        return Check("heartbeat", "warn", detail, "心跳偏旧，看一眼采集是否延迟")
    return Check("heartbeat", "ok", detail, "")


def inspect_host(host: dict, disk_warn: float, disk_crit: float) -> HostReport:
    name = str(host.get("name") or "未命名")
    checks = [check_disk(host, disk_warn, disk_crit), check_heartbeat(host)]
    return HostReport(name, checks)


def load_hosts(path: Path) -> list[dict]:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        die(f"找不到清单 {path}")
    except json.JSONDecodeError as exc:
        die(f"清单不是合法 JSON：{exc}")
    if not isinstance(data, list) or not data:
        die("清单需要是非空的 JSON 数组")
    names = [str(item.get("name")) for item in data if isinstance(item, dict)]
    if len(names) != len(data) or any(not name or name == "None" for name in names):
        die("每台机器都要有 name")
    if len(names) != len(set(names)):
        die("主机名不能重复")
    return data


def run_hosts(hosts: list[dict], *, workers: int, disk_warn: float, disk_crit: float) -> list[HostReport]:
    if not 1 <= workers <= 32:
        die("并发数请设在 1 到 32")
    if crit_not_above_warn(disk_warn, disk_crit):
        die("磁盘严重阈值必须高于警告阈值")
    order = [str(host["name"]) for host in hosts]
    found: dict[str, HostReport] = {}
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {
            pool.submit(inspect_host, host, disk_warn, disk_crit): str(host["name"]) for host in hosts
        }
        for future in as_completed(futures):
            name = futures[future]
            try:
                found[name] = future.result()
            except Exception as exc:
                found[name] = HostReport(
                    name,
                    [Check("inspect", "crit", f"检查过程出错：{exc}", "看标准错误里的日志")],
                )
    return [found[name] for name in order]


def crit_not_above_warn(warn: float, crit: float) -> bool:
    return crit <= warn


def run(args) -> int:
    path = Path(args.hosts) if args.hosts else DEFAULT_HOSTS
    hosts = load_hosts(path)
    log(f"开始巡检 {len(hosts)} 台，并发 {args.workers}")
    reports = run_hosts(
        hosts,
        workers=args.workers,
        disk_warn=args.disk_warn,
        disk_crit=args.disk_crit,
    )
    text = format_json(reports) if args.json else format_text(reports)
    sys_stdout_write(text)
    code = exit_code(reports, strict=args.strict)
    log(f"结束，退出码 {code}")
    return code


def sys_stdout_write(text: str) -> None:
    import sys

    sys.stdout.write(text)
