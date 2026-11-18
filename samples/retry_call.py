"""超时和 5xx 可以重试。4xx 里除了 429，重试通常没有意义。"""

from __future__ import annotations

import time


def should_retry(status: int | None) -> bool:
    if status is None:
        return True
    if status == 429:
        return True
    return 500 <= status <= 599


def call_with_retry(do_request, tries: int = 3, base_delay: float = 0.2, sleep=time.sleep):
    if tries < 1:
        raise ValueError("tries 至少为 1")
    last_error: Exception | None = None
    for attempt in range(1, tries + 1):
        status = None
        try:
            status, body = do_request()
        except TimeoutError as exc:
            last_error = exc
        else:
            if status is not None and 200 <= status < 300:
                return body
            if status is not None and not should_retry(status):
                raise RuntimeError(f"HTTP {status} 不重试")
            last_error = RuntimeError(f"HTTP {status}")
        if attempt == tries:
            break
        sleep(base_delay * (2 ** (attempt - 1)))
    raise RuntimeError(f"重试 {tries} 次后仍失败") from last_error


def main() -> int:
    delays: list[float] = []
    calls = {"n": 0}

    def flaky():
        calls["n"] += 1
        if calls["n"] < 3:
            return 503, None
        return 200, {"status": "ok"}

    body = call_with_retry(flaky, tries=3, base_delay=0.2, sleep=delays.append)
    print(f"结果 {body['status']}  调用 {calls['n']} 次  等待 {delays}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
