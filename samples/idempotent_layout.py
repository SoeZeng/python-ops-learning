"""再跑一次也不会搞坏已经准备好的目录。锁用来避免两个人同时跑。"""

from __future__ import annotations

import argparse
import os
import sys
from pathlib import Path


def check_root(raw: str) -> Path:
    root = Path(raw).expanduser().resolve()
    if len(root.parts) < 3:
        print("请指定一个专用目录，不要用太浅的路径", file=sys.stderr)
        raise SystemExit(2)
    root.mkdir(parents=True, exist_ok=True)
    return root


def ensure_layout(root: Path) -> list[str]:
    created = []
    for name in ("app", "log", "tmp"):
        path = root / name
        if not path.exists():
            path.mkdir()
            created.append(name)
    config = root / "config.json"
    if not config.exists():
        config.write_text('{"name": "demo"}\n', encoding="utf-8")
        created.append("config.json")
    return created


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="幂等地准备目录")
    parser.add_argument("--root", required=True)
    args = parser.parse_args(argv)
    root = check_root(args.root)
    lock = root / ".lock"
    fd = None
    try:
        fd = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
        os.write(fd, str(os.getpid()).encode())
        created = ensure_layout(root)
        if created:
            print("新建 " + ", ".join(created))
        else:
            print("没有新文件")
        return 0
    except FileExistsError:
        print("已有一次运行还没结束", file=sys.stderr)
        return 2
    finally:
        if fd is not None:
            os.close(fd)
            lock.unlink(missing_ok=True)


if __name__ == "__main__":
    raise SystemExit(main())
