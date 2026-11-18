"""把教学示例打成一个压缩包，供学习站下载。"""

from pathlib import Path
import zipfile

root = Path("samples")
out = Path("public/xunzhan-samples.zip")
out.parent.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(out, "w", compression=zipfile.ZIP_DEFLATED) as archive:
    for path in sorted(root.rglob("*")):
        if not path.is_file():
            continue
        if "__pycache__" in path.parts or path.suffix == ".pyc":
            continue
        archive.write(path, path.as_posix())
