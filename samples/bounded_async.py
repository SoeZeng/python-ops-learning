"""协程负责调度，信号量负责把同时打出去的请求数压住。"""

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


async def check_one(host: dict, sem: asyncio.Semaphore) -> str:
    async with sem:
        return await asyncio.to_thread(check_sync, host)


async def run_checks(hosts: list[dict], limit: int = 2):
    sem = asyncio.Semaphore(limit)
    started = time.perf_counter()
    results = await asyncio.gather(*(check_one(host, sem) for host in hosts))
    return list(results), time.perf_counter() - started


def main() -> int:
    lines, elapsed = asyncio.run(run_checks(HOSTS, limit=2))
    print("\n".join(lines))
    print(f"耗时 {elapsed:.2f} 秒")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
