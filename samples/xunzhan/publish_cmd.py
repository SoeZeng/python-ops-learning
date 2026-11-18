"""切换版本指针。健康检查失败时只把指针拨回去，现场留着。"""

from __future__ import annotations

import re
import shutil
from pathlib import Path

from xunzhan.paths import die, require_work_root

VERSION_RE = re.compile(r"^\d+\.\d+\.\d+$")


def run(args) -> int:
    if args.env == "prod" and not args.yes:
        die("生产环境需要显式加上 --yes")
    if not VERSION_RE.match(args.version):
        die("版本号需要形如 1.2.0")
    artifact = Path(args.artifact).expanduser().resolve()
    if not artifact.is_file():
        die(f"制品不存在：{artifact}")
    root = require_work_root(args.root, create=True)
    releases = root / "releases"
    if releases.exists() and not releases.is_dir():
        die("releases 的位置上有一个文件")
    dest = releases / args.version
    if dest.exists():
        die(f"版本 {args.version} 已经存在，拒绝覆盖")
    dest.mkdir(parents=True)
    shutil.copy2(artifact, dest / "artifact")
    (dest / "VERSION").write_text(args.version + "\n", encoding="utf-8")

    pointer = root / "CURRENT"
    previous = pointer.read_text(encoding="utf-8").strip() if pointer.exists() else ""
    pointer.write_text(args.version + "\n", encoding="utf-8")

    artifact_ok = (dest / "artifact").stat().st_size > 0
    healthy = artifact_ok and not args.fail_health
    if healthy:
        print(f"已发布 {args.version}，CURRENT 指向它")
        return 0

    if previous:
        pointer.write_text(previous + "\n", encoding="utf-8")
    else:
        pointer.unlink(missing_ok=True)
    shown = previous or "无"
    print(f"健康检查失败，已回滚指针到 {shown}")
    print(f"现场保留在 {dest}")
    return 1
