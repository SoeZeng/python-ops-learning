"""用字典描述一次检查，并筛出需要人看的项。"""

from __future__ import annotations


def check_disk(used_percent: float, warn: float = 80, crit: float = 90) -> dict:
    if used_percent >= crit:
        status = "crit"
        suggestion = "先清理或扩容，再继续发布"
    elif used_percent >= warn:
        status = "warn"
        suggestion = "安排清理，发布前再看一眼"
    else:
        status = "ok"
        suggestion = ""
    return {
        "name": "disk",
        "status": status,
        "detail": f"已用 {used_percent:.1f}%",
        "suggestion": suggestion,
    }


def needs_attention(results: list[dict]) -> list[dict]:
    return [item for item in results if item["status"] != "ok"]


def main() -> int:
    results = [check_disk(71), check_disk(86), check_disk(93)]
    for item in results:
        print(f"{item['status'].upper():4}  {item['name']:8}  {item['detail']}")
    print(f"需要处理 {len(needs_attention(results))} 项")
    if any(item["status"] == "crit" for item in results):
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
