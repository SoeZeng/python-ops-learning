"""等待 IO 时用线程池。报告按清单顺序输出，而不是按谁先做完。"""

from __future__ import annotations

import time
from concurrent.futures import ThreadPoolExecutor, as_completed

HOSTS = [
    {"name": "api-1", "latency_s": 0.2},
    {"name": "worker-1", "latency_s": 0.2},
    {"name": "cron-1", "latency_s": 0.2},
    {"name": "cache-1", "latency_s": 0.2},
]


def check_one(host: dict, sleep) -> str:
    sleep(host["latency_s"])
    return f"{host['name']} OK"


def run_checks(hosts: list[dict], workers: int = 4, sleep=time.sleep):
    started = time.perf_counter()
    found = {}
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(check_one, host, sleep): host["name"] for host in hosts}
        for future in as_completed(futures):
            name = futures[future]
            found[name] = future.result()
    lines = [found[host["name"]] for host in hosts]
    return lines, time.perf_counter() - started


def main() -> int:
    lines, elapsed = run_checks(HOSTS, workers=4)
    print("\n".join(lines))
    print(f"耗时 {elapsed:.2f} 秒")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
