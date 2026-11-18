"""巡检可以继续，发布类步骤失败就停。"""

from __future__ import annotations

STEPS = [
    ("检查磁盘", "ok"),
    ("备份配置", "ok"),
    ("切换版本", "fail"),
    ("健康检查", "ok"),
]


def run(policy: str) -> list[str]:
    done: list[str] = []
    print(f"策略 {policy}")
    for name, outcome in STEPS:
        if outcome == "fail":
            print(f"FAIL {name}")
            if policy == "stop":
                print("停止，不执行后续步骤")
                return done
            print("记录失败，继续")
            continue
        print(f"OK   {name}")
        done.append(name)
    return done


def main() -> int:
    run("continue")
    print("")
    run("stop")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
