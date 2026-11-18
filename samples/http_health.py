"""一次会超时、能读状态码的 HTTP 调用。令牌从参数或环境变量来，不写进代码。"""

from __future__ import annotations

import argparse
import json
import os
import urllib.error
import urllib.request


def fetch_json(url: str, token: str | None = None, timeout: float = 3.0) -> dict:
    request = urllib.request.Request(url)
    if token:
        request.add_header("Authorization", f"Bearer {token}")
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            body = response.read().decode("utf-8")
    except urllib.error.HTTPError as exc:
        raise RuntimeError(f"HTTP {exc.code} {url}") from exc
    except urllib.error.URLError as exc:
        raise RuntimeError(f"网络失败 {url}：{exc.reason}") from exc
    data = json.loads(body)
    if not isinstance(data, dict):
        raise RuntimeError("响应不是 JSON 对象")
    return data


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="拉取 JSON 健康检查")
    parser.add_argument("url")
    parser.add_argument("--token", default=os.environ.get("OPS_TOKEN"))
    parser.add_argument("--timeout", type=float, default=3.0)
    args = parser.parse_args(argv)
    try:
        data = fetch_json(args.url, token=args.token, timeout=args.timeout)
    except RuntimeError as exc:
        print(exc)
        return 1
    print(json.dumps(data, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
