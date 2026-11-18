export const glossary = [
  { term: "退出码", text: "进程结束时交给调用方的整数。这门课里 0 是没有严重问题，1 是有严重问题或需要行动，2 是参数和路径还不合法。" },
  { term: "标准输出 / 标准错误", text: "结果走标准输出，方便重定向和被别的程序解析。过程日志走标准错误，避免混进 JSON。" },
  { term: "dry-run", text: "演习运行。会改文件的步骤只打印打算做什么。路径是否太浅，仍然要检查。" },
  { term: "幂等", text: "再执行一次，结果仍然正确，并且不会毁掉已经存在的东西。已有配置跳过，而不是覆盖。" },
  { term: "ok / warn / crit", text: "正常、警告、严重。默认只有严重让退出码变成 1。警告写在报告里，严格模式才把它当成失败。" },
  { term: "超时", text: "一次外部调用最多等待的时间，单位是秒。没有超时，一台失联的机器会把整个脚本挂住。" },
  { term: "退避", text: "重试之前的等待。指数退避让第一次等 0.2 秒、第二次等 0.4 秒。遇到 429 时优先遵守 Retry-After。" },
  { term: "cursor", text: "「下一页从哪继续」的记号。取分页数据时带着它请求，并设置页数上限，防止记号不前进时死循环。" },
  { term: "线程池", text: "固定数量的工人一起等待 IO。max_workers 决定同时几路。结果先收回来，再按清单顺序输出。" },
  { term: "协程", text: "可以在 await 处让出控制权的函数。事件循环同时推进很多个这样的函数。同步的 requests 要用 to_thread 包起来。" },
  { term: "信号量", text: "限制同时进入某一段代码的任务数。没有空位的任务在门口等，用来给并发加上限。" },
  { term: "SLI", text: "服务等级指标。你真正量到的数，例如请求成功率或延迟。" },
  { term: "SLO", text: "服务等级目标。给某个 SLI 在一段窗口里定的线，例如 30 天内 99.9% 的请求成功。" },
  { term: "错误预算", text: "目标允许的失败额度。预算还在，可以继续有风险的变更；预算用完，先稳住成功率。" },
  { term: "黄金信号", text: "延迟、流量、错误、饱和度。磁盘使用率属于饱和度。" },
  { term: "JSON Lines", text: "每行一个 JSON 对象。适合采集脚本追加写入，一行损坏不会毁掉整个文件。" },
  { term: "低基数标签", text: "指标标签只用取值很少的维度，例如环境和接口名。用户 ID 这种取值极多的信息放进日志。" },
  { term: "处置说明", text: "告警附上的四行：现象、影响、第一步、何时升级。第一步是要去做的检查，不是已经认定的原因。" },
];

export const cheats = [
  {
    title: "读一份 JSON 清单",
    code: `import json
from pathlib import Path

hosts = json.loads(Path("hosts.json").read_text(encoding="utf-8"))
for host in hosts:
    print(host["name"])`,
  },
  {
    title: "安全地拼路径",
    code: `from pathlib import Path

root = Path("/tmp/xunzhan-env")
target = root / "config.json"
target.write_text('{"port": 8080}\\n', encoding="utf-8")`,
  },
  {
    title: "读环境变量",
    code: `import os

token = os.environ.get("OPS_TOKEN")
if not token:
    raise SystemExit("请先设置 OPS_TOKEN")`,
  },
  {
    title: "带着超时取 JSON",
    code: `import json
import urllib.request

request = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
with urllib.request.urlopen(request, timeout=3) as response:
    data = json.loads(response.read().decode("utf-8"))`,
  },
  {
    title: "留下不是 ok 的项",
    code: `bad = [item for item in results if item["status"] != "ok"]
print(f"需要处理 {len(bad)} 项")`,
  },
  {
    title: "用退出码结束",
    code: `def main() -> int:
    return 1 if failed else 0

if __name__ == "__main__":
    raise SystemExit(main())`,
  },
];
