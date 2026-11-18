"""一次检查的结果长什么样。后面的报告、退出码都靠这个结构。"""

from __future__ import annotations

from dataclasses import dataclass


@dataclass
class Check:
    name: str
    status: str
    detail: str
    suggestion: str = ""


@dataclass
class HostReport:
    host: str
    checks: list[Check]

    @property
    def status(self) -> str:
        return worst_status(check.status for check in self.checks)


def worst_status(statuses) -> str:
    order = {"ok": 0, "warn": 1, "crit": 2}
    found = "ok"
    for status in statuses:
        if order[status] > order[found]:
            found = status
    return found


def plain_number(value: float) -> str:
    number = float(value)
    if number.is_integer():
        return str(int(number))
    return f"{number:g}"
