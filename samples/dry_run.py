"""先打印将要写什么。加上 --dry-run 时不落文件。"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


def check_root(raw: str) -> Path:
    root = Path(raw).expanduser().resolve()
    if len(root.parts) < 3:
        print("请指定一个专用目录，不要用太浅的路径", file=sys.stderr)
        raise SystemExit(2)
    return root


def write_notice(root: Path, dry_run: bool) -> str:
    target = root / "notice.txt"
    if dry_run:
        return f"DRY-RUN 将写入 {target}"
    root.mkdir(parents=True, exist_ok=True)
    target.write_text("published\n", encoding="utf-8")
    return f"已写入 {target}"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="演示 dry-run")
    parser.add_argument("--root", required=True)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args(argv)
    root = check_root(args.root)
    print(write_notice(root, args.dry_run))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
