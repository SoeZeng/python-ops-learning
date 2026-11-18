"""同一件事做很多遍：单项失败记下来，其余继续，最后给汇总。"""

from __future__ import annotations

JOBS = [
    {"name": "账单导出", "records": 1200},
    {"name": "空文件清理", "records": 0},
    {"name": "报表投递", "records": -1},
]


def handle(job: dict) -> dict:
    name = job["name"]
    records = job["records"]
    if records < 0:
        return {"name": name, "status": "fail", "detail": "记录数不合法"}
    if records == 0:
        return {"name": name, "status": "ok", "detail": "没有要处理的记录"}
    return {"name": name, "status": "ok", "detail": f"处理了 {records} 条"}


def main() -> int:
    results = [handle(job) for job in JOBS]
    failed = 0
    for item in results:
        label = "OK" if item["status"] == "ok" else "FAIL"
        print(f"{label:4}  {item['name']}  {item['detail']}")
        if item["status"] != "ok":
            failed += 1
    print(f"完成 {len(results)}  失败 {failed}")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
