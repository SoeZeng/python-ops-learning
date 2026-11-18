"""同步检查函数不动，用 asyncio.to_thread 放到事件循环旁边跑。"""

from __future__ import annotations

import asyncio
import time

HOSTS = [
    {"name": "api-1", "latency_s": 0.2},
    {"name": "worker-1", "latency_s": 0.2},
    {"name": "cron-1", "latency_s": 0.2},
    {"name": "cache-1", "latency_s": 0.2},
]


def check_sync(host: dict) -> str:
    time.sleep(host["latency_s"])
    return f"{host['name']} OK"


async def run_checks(hosts: list[dict]):
    started = time.perf_counter()
    results = await asyncio.gather(*(asyncio.to_thread(check_sync, host) for host in hosts))
    return list(results), time.perf_counter() - started


def main() -> int:
    lines, elapsed = asyncio.run(run_checks(HOSTS))
    print("\n".join(lines))
    print(f"耗时 {elapsed:.2f} 秒")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
