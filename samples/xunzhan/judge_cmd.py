"""读采集到的 JSON Lines，只对值得行动的情况开口。"""

from __future__ import annotations

import json
from pathlib import Path

from xunzhan.paths import die

RUNBOOK = {
    "disk.used_percent": {
        "symptom": "磁盘使用率越过阈值",
        "impact": "日志写不进去，发布复制制品也会失败",
        "first": "先找出大文件，确认是不是日志没轮转",
        "escalate": "超过临界值还在涨，或者清理后很快又满，就叫人一起看",
    }
}


def latest_metrics(path: Path) -> dict[tuple[str, str], dict]:
    latest: dict[tuple[str, str], dict] = {}
    try:
        lines = path.read_text(encoding="utf-8").splitlines()
    except FileNotFoundError:
        die(f"找不到指标文件 {path}")
    for line_number, line in enumerate(lines, start=1):
        if not line.strip():
            continue
        try:
            item = json.loads(line)
        except json.JSONDecodeError as exc:
            die(f"第 {line_number} 行不是合法 JSON：{exc}")
        if not isinstance(item, dict):
            die(f"第 {line_number} 行需要是 JSON 对象")
        host = str(item.get("host") or "")
        name = str(item.get("name") or "")
        if not host or not name or "value" not in item:
            die(f"第 {line_number} 行缺少 host、name 或 value")
        latest[(host, name)] = item
    return latest


def judge(latest: dict[tuple[str, str], dict], disk_crit: float) -> list[str]:
    alerts = []
    for (host, name), item in latest.items():
        if name != "disk.used_percent":
            continue
        value = float(item["value"])
        if value < disk_crit:
            continue
        book = RUNBOOK[name]
        alerts.append(
            "\n".join(
                [
                    f"ALERT {host} {name}={value:g}",
                    f"现象：{book['symptom']}",
                    f"影响：{book['impact']}",
                    f"第一步：{book['first']}",
                    f"升级：{book['escalate']}",
                ]
            )
        )
    return alerts


def run(args) -> int:
    if args.disk_crit <= 0:
        die("阈值要大于 0")
    latest = latest_metrics(Path(args.metrics))
    alerts = judge(latest, args.disk_crit)
    if not alerts:
        print("没有需要行动的告警")
        return 0
    print("\n\n".join(alerts))
    return 1
