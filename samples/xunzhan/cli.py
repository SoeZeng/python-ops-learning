"""四个工具加一个判断命令。约定同一套退出码。"""

from __future__ import annotations

import argparse

EPILOG = """退出码
  0  没有严重问题，或发布、部署成功
  1  有严重巡检项、健康检查失败，或出现需要行动的告警
  2  参数、清单或路径不合法

只对自己有权维护的目录、账号和机器使用。清单由你提供，工具不会扫描网段。
""".strip()


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="xunzhan",
        description="巡栈练习工具链：巡检、部署、发布、采集。",
        epilog=EPILOG,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    sub = parser.add_subparsers(dest="cmd", required=True)

    inspect = sub.add_parser("inspect", help="按清单巡检")
    inspect.add_argument("--hosts", help="主机清单 JSON，默认用练习清单")
    inspect.add_argument("--workers", type=int, default=4, help="并发数，1 到 32")
    inspect.add_argument("--disk-warn", type=float, default=80)
    inspect.add_argument("--disk-crit", type=float, default=90)
    inspect.add_argument("--strict", action="store_true", help="警告也让退出码变成 1")
    inspect.add_argument("--json", action="store_true", help="向标准输出打印 JSON")

    deploy = sub.add_parser("deploy", help="在指定目录准备一份练习环境")
    deploy.add_argument("--root", required=True, help="专用工作目录")
    deploy.add_argument("--port", type=int, default=8080)
    deploy.add_argument("--dry-run", action="store_true", help="只打印会做的事")

    publish = sub.add_parser("publish", help="切换版本指针")
    publish.add_argument("--root", required=True)
    publish.add_argument("--version", required=True)
    publish.add_argument("--artifact", required=True)
    publish.add_argument("--env", choices=("staging", "prod"), default="staging")
    publish.add_argument("--yes", action="store_true", help="确认对生产环境执行")
    publish.add_argument("--fail-health", action="store_true", help="演习：健康检查失败并回滚指针")

    collect = sub.add_parser("collect", help="追加写入指标 JSON Lines")
    collect.add_argument("--out", required=True)
    collect.add_argument("--count", type=int, default=1)
    collect.add_argument("--interval", type=float, default=0)
    collect.add_argument("--disk-path", default="/")

    judge = sub.add_parser("judge", help="根据指标判断要不要行动")
    judge.add_argument("--metrics", required=True)
    judge.add_argument("--disk-crit", type=float, default=90)
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    if args.cmd == "inspect":
        from xunzhan.inspect_cmd import run
    elif args.cmd == "deploy":
        from xunzhan.deploy_cmd import run
    elif args.cmd == "publish":
        from xunzhan.publish_cmd import run
    elif args.cmd == "collect":
        from xunzhan.collect_cmd import run
    elif args.cmd == "judge":
        from xunzhan.judge_cmd import run
    else:
        parser.error(f"未知命令 {args.cmd}")
    return run(args)
