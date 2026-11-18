"""错误预算：这段时间里，SLO 还允许失败多少次。"""

from __future__ import annotations


def error_budget(total: int, failed: int, slo: float = 0.999) -> dict:
    if total < 0 or failed < 0 or failed > total:
        raise ValueError("请求数不合法")
    if not 0 < slo <= 1:
        raise ValueError("SLO 要在 0 和 1 之间")
    allowed = round(total * (1 - slo), 4)
    remaining = round(allowed - failed, 4)
    if allowed == 0:
        burn = 0 if failed == 0 else float("inf")
    else:
        burn = round(failed / allowed, 6)
    return {"allowed": allowed, "failed": failed, "remaining": remaining, "burn": burn}


def main() -> int:
    report = error_budget(1_000_000, 200, slo=0.999)
    print(f"允许失败 {report['allowed']:.0f}")
    print(f"已经失败 {report['failed']}")
    print(f"剩余 {report['remaining']:.0f}")
    print(f"烧掉了 {report['burn'] * 100:.1f}%")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
