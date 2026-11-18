"""采集一小撮指标，按 JSON Lines 追加写入。默认只采有限次。"""

from __future__ import annotations

import json
import os
import shutil
import socket
import time
from datetime import datetime
from pathlib import Path

from xunzhan.paths import die


def gather_metrics(disk_path: str = "/") -> list[dict]:
    stamp = datetime.now().astimezone().isoformat(timespec="seconds")
    host = socket.gethostname()
    metrics = []
    try:
        load1, _, _ = os.getloadavg()
    except OSError:
        load1 = None
    if load1 is not None:
        metrics.append({"ts": stamp, "host": host, "name": "load.1m", "value": round(load1, 4)})
    usage = shutil.disk_usage(disk_path)
    percent = round(usage.used / usage.total * 100, 2)
    metrics.append(
        {
            "ts": stamp,
            "host": host,
            "name": "disk.used_percent",
            "value": percent,
            "labels": {"path": disk_path},
        }
    )
    return metrics


def append_metrics(path: Path, metrics: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as handle:
        for item in metrics:
            handle.write(json.dumps(item, ensure_ascii=False) + "\n")


def run(args) -> int:
    if args.count < 1:
        die("--count 至少为 1")
    if args.interval < 0:
        die("--interval 不能为负")
    out = Path(args.out).expanduser().resolve()
    if len(out.parts) < 3:
        die("请把结果写到一个明确的文件路径，不要写到过浅的位置")
    for index in range(args.count):
        if index > 0 and args.interval > 0:
            time.sleep(args.interval)
        append_metrics(out, gather_metrics(args.disk_path))
    print(f"已追加 {args.count} 次采集到 {out}")
    return 0
