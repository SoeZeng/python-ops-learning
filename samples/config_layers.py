"""同一项配置：命令行优先，然后是环境变量、配置文件，最后才是默认值。"""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path


def resolve_setting(cli_value, env_value, file_value, default):
    if cli_value is not None:
        return cli_value, "命令行"
    if env_value not in (None, ""):
        return env_value, "环境变量"
    if file_value is not None:
        return file_value, "配置文件"
    return default, "默认值"


def resolve_workers(cli, env: dict, file_data: dict | None, default: int = 4):
    file_value = None if not file_data else file_data.get("workers")
    raw, source = resolve_setting(cli, env.get("XUNZHAN_WORKERS"), file_value, default)
    try:
        workers = int(raw)
    except (TypeError, ValueError) as exc:
        raise RuntimeError("workers 必须是整数") from exc
    if workers < 1:
        raise RuntimeError("workers 至少为 1")
    return workers, source


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="演示配置优先级")
    parser.add_argument("--workers", type=int)
    parser.add_argument("--config")
    args = parser.parse_args(argv)
    file_data = None
    if args.config:
        file_data = json.loads(Path(args.config).read_text(encoding="utf-8"))
    workers, source = resolve_workers(args.workers, os.environ, file_data)
    print(f"workers={workers} 来自{source}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
