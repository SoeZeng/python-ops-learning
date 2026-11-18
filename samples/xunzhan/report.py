"""同一次结果，给人一行行看，也给下游一段 JSON。"""

from __future__ import annotations

import json
import sys
from datetime import datetime

from xunzhan.model import HostReport

LABEL = {"ok": "OK", "warn": "WARN", "crit": "CRIT"}


def log(message: str) -> None:
    stamp = datetime.now().astimezone().strftime("%H:%M:%S")
    print(f"{stamp} {message}", file=sys.stderr)


def report_to_dict(report: HostReport) -> dict:
    return {
        "host": report.host,
        "status": report.status,
        "checks": [
            {
                "name": check.name,
                "status": check.status,
                "detail": check.detail,
                "suggestion": check.suggestion,
            }
            for check in report.checks
        ],
    }


def format_text(reports: list[HostReport]) -> str:
    lines: list[str] = []
    host_counts = {"ok": 0, "warn": 0, "crit": 0}
    check_counts = {"ok": 0, "warn": 0, "crit": 0}
    for report in reports:
        host_counts[report.status] += 1
        lines.append(f"== {report.host}  {LABEL[report.status]}")
        for check in report.checks:
            check_counts[check.status] += 1
            lines.append(f"{LABEL[check.status]:4}  {check.name:10}  {check.detail}")
            if check.suggestion:
                lines.append(f"      {check.suggestion}")
        lines.append("")
    check_total = sum(check_counts.values())
    lines.append(
        f"主机 {len(reports)}  严重 {host_counts['crit']}  警告 {host_counts['warn']}  正常 {host_counts['ok']}"
    )
    lines.append(
        f"检查 {check_total}  严重 {check_counts['crit']}  警告 {check_counts['warn']}  正常 {check_counts['ok']}"
    )
    return "\n".join(lines) + "\n"


def format_json(reports: list[HostReport]) -> str:
    payload = [report_to_dict(report) for report in reports]
    return json.dumps(payload, ensure_ascii=False, indent=2) + "\n"


def exit_code(reports: list[HostReport], *, strict: bool) -> int:
    statuses = [report.status for report in reports]
    if "crit" in statuses:
        return 1
    if strict and "warn" in statuses:
        return 1
    return 0
