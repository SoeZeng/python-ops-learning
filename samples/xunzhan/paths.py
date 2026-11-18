"""工作目录检查。工具必须知道自己被允许动哪一块地方。"""

from __future__ import annotations

import sys
from pathlib import Path


def die(message: str, code: int = 2) -> None:
    print(message, file=sys.stderr)
    raise SystemExit(code)


def require_work_root(raw: str | None, *, create: bool) -> Path:
    if raw is None or not str(raw).strip():
        die("请用 --root 指定一个专用工作目录")
    root = Path(raw).expanduser().resolve()
    if root == Path(root.anchor) or len(root.parts) < 3:
        die("拒绝在磁盘根目录或过浅的路径上操作")
    if root.exists() and not root.is_dir():
        die("工作目录的路径上已经有一个文件")
    if create:
        root.mkdir(parents=True, exist_ok=True)
    return root
