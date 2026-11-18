"""一个能交付的脚本：日志走标准错误，结果走标准输出，用退出码表示严重问题。"""

from __future__ import annotations

import logging
import sys

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s", stream=sys.stderr)
log = logging.getLogger("inspect")


def main() -> int:
    log.info("开始巡检")
    results = [
        {"name": "disk", "status": "ok", "detail": "已用 71.0%"},
        {"name": "backup", "status": "crit", "detail": "最近 26 小时没有成功备份"},
    ]
    for item in results:
        print(f"{item['status'].upper():4}  {item['name']:8}  {item['detail']}")
    critical = any(item["status"] == "crit" for item in results)
    log.info("结束")
    return 1 if critical else 0


if __name__ == "__main__":
    raise SystemExit(main())
