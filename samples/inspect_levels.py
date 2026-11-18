"""ok / warn / crit，以及退出码。警告先记下，严重问题才让脚本失败。"""

from __future__ import annotations


def judge(name: str, value: float, warn: float, crit: float, unit: str) -> dict:
    if value >= crit:
        status = "crit"
        suggestion = "先处理再继续发布"
    elif value >= warn:
        status = "warn"
        suggestion = "记下，发布前再看一眼"
    else:
        status = "ok"
        suggestion = ""
    return {
        "name": name,
        "status": status,
        "detail": f"{value:.0f}{unit}",
        "suggestion": suggestion,
    }


def exit_code(results: list[dict], strict: bool = False) -> int:
    if any(item["status"] == "crit" for item in results):
        return 1
    if strict and any(item["status"] == "warn" for item in results):
        return 1
    return 0


def main() -> int:
    results = [
        judge("disk", 84, warn=80, crit=90, unit="%"),
        judge("memory", 70, warn=80, crit=90, unit="%"),
        judge("heartbeat", 45, warn=42, crit=60, unit=" 秒"),
    ]
    for item in results:
        print(f"{item['status'].upper():4}  {item['name']:10}  {item['detail']}")
        if item["suggestion"]:
            print(f"      {item['suggestion']}")
    code = exit_code(results)
    strict_code = exit_code(results, strict=True)
    print(f"退出码 {code}  严格模式 {strict_code}")
    return code


if __name__ == "__main__":
    raise SystemExit(main())
