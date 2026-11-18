import { codeBlock } from "../blocks.js";
import errorBudget from "../../samples/error_budget.py?raw";
import modelPy from "../../samples/xunzhan/model.py?raw";
import reportPy from "../../samples/xunzhan/report.py?raw";
import pathsPy from "../../samples/xunzhan/paths.py?raw";
import cliPy from "../../samples/xunzhan/cli.py?raw";
import inspectCmd from "../../samples/xunzhan/inspect_cmd.py?raw";
import deployCmd from "../../samples/xunzhan/deploy_cmd.py?raw";
import publishCmd from "../../samples/xunzhan/publish_cmd.py?raw";
import collectCmd from "../../samples/xunzhan/collect_cmd.py?raw";
import judgeCmd from "../../samples/xunzhan/judge_cmd.py?raw";
import hostsJson from "../../samples/xunzhan/fixtures/hosts.json?raw";
import metricsJsonl from "../../samples/xunzhan/fixtures/metrics.jsonl?raw";

const inspectText = `== api-1  OK
OK    disk        已用 71.0%
OK    heartbeat   心跳 12 秒，上限 60 秒

== worker-1  CRIT
WARN  disk        已用 84.0%
      安排清理，发布前再看一眼
CRIT  heartbeat   心跳 480 秒，上限 120 秒
      先确认进程是否还在

== cron-1  CRIT
CRIT  disk        已用 93.0%
      先清理或扩容，再继续发布
WARN  heartbeat   心跳 45 秒，上限 60 秒
      心跳偏旧，看一眼采集是否延迟

主机 3  严重 2  警告 0  正常 1
检查 6  严重 2  警告 2  正常 2`;

export const part2 = [
  {
    id: "from-script-to-cli",
    title: "收成一个命令入口",
    read: 14,
    practice: 20,
    summary: "四个工具共用一个程序，用子命令分开。先看目录，再看 argparse 怎么分发。",
    goals: ["认得 xunzhan 目录里每个文件的职责", "用子命令运行 inspect", "记住退出码 0、1、2"],
    blocks: [
      { type: "p", text: "单独的脚本适合学一个想法。真要反复用，就把入口收成一个命令：`python3 -m xunzhan inspect`。子命令共享退出码约定和路径检查，检查规则不用在每个文件里复制。" },
      {
        type: "code",
        lang: "text",
        filename: "samples/xunzhan",
        download: null,
        code: `cli.py           子命令和参数
model.py         检查结果的数据结构
report.py        给人看的文本，和给程序的 JSON
paths.py         工作目录能不能动
inspect_cmd.py   巡检
deploy_cmd.py    准备环境
publish_cmd.py   切换版本
collect_cmd.py   采集指标
judge_cmd.py     判断要不要行动
fixtures/        练习清单和制品`,
      },
      codeBlock({
        filename: "xunzhan/cli.py",
        code: cliPy,
        download: "xunzhan/cli.py",
        run: "python3 -m xunzhan --help",
        output: "帮助末尾写着退出码。inspect、deploy、publish、collect、judge 各是一个子命令。",
      }),
      { type: "p", text: "在 `samples` 目录运行。Python 会把当前目录放进导入路径，于是 `xunzhan` 这个包能被找到。下载全部示例后，进入解压出来的 `samples` 再执行下面的命令。" },
      {
        type: "code",
        lang: "bash",
        filename: "终端",
        download: null,
        code: "cd samples\npython3 -m xunzhan inspect\npython3 -m xunzhan inspect --json",
        output: "默认读取练习清单。文本报告在标准输出，开始和结束的日志在标准错误，退出码是 1。",
      },
    ],
    exercise: {
      prompt: "运行 `python3 -m xunzhan inspect --help`，找出哪个参数会让警告也变成退出码 1。",
      hint: "帮助里每个参数有一行说明。",
      solution: "`--strict`。它不改变阈值，只改变有 warn 时退出码是不是 1。",
    },
    quiz: [
      {
        q: "为什么用子命令，而不是四个互不相关的入口？",
        choices: ["Python 只能有一个文件", "退出码、路径检查和帮助可以放在一处", "子命令运行更快"],
        answer: 1,
        why: "巡检和发布的策略不同，但「用法错误是 2」这种约定应该相同。",
      },
      {
        q: "`python3 -m xunzhan` 要在哪个目录运行？",
        choices: ["任意目录", "能导入到 xunzhan 包的目录，练习时就是 samples", "必须是家目录"],
        answer: 1,
        why: "当前目录在模块搜索路径里时，包才找得到。",
      },
      {
        q: "参数不合法时，这套工具用退出码？",
        choices: ["0", "1", "2"],
        answer: 2,
        why: "1 留给做完之后的严重问题或需要行动的告警。",
      },
    ],
  },
  {
    id: "logs-and-json",
    title: "人读的和程序读的",
    read: 14,
    practice: 15,
    summary: "同一份结果打两遍：终端里的分段文本，以及 `--json` 的结构化输出。日志留在标准错误。",
    goals: ["读懂文本报告的主机行和检查行", "用 --json 让下游不必解析中文", "确认日志没有混进 JSON"],
    blocks: [
      { type: "p", text: "人需要扫读：哪台机器、哪项是严重、建议是什么。另一个程序需要稳定的字段。一份报告同时满足这两件事，就不要挤在同一种格式里。" },
      codeBlock({
        filename: "xunzhan/report.py",
        code: reportPy,
        download: "xunzhan/report.py",
        run: "python3 -m xunzhan inspect",
        output: `${inspectText}\n\n标准错误里还有带时间的「开始巡检」「结束，退出码 1」。时间会随你的时区变化。`,
      }),
      { type: "p", text: "`--json` 把同样的事实打成数组。每台机器有 `host`、`status` 和 `checks`。检查项仍是 name、status、detail、suggestion。标准输出只有这段 JSON，日志仍在标准错误，所以 `python3 -m xunzhan inspect --json > report.json` 得到的文件可以直接解析。" },
      {
        type: "callout",
        tone: "keep",
        title: "字段用固定英文，句子用中文",
        text: "status 只有 ok、warn、crit。建议可以是中文。下游用 status 做判断，不从句子里抠「严重」。",
      },
    ],
    exercise: {
      prompt: "把 JSON 报告重定向到文件，用 `python3 -c \"import json; print(json.load(open('report.json'))[1]['status'])\"` 打印第二台的状态。",
      hint: "第二台是 worker-1。命令要在 samples 目录执行，文件才会出现在当前目录。",
      solution: "打印 crit。若 JSON 文件里出现「开始巡检」，说明日志混进了标准输出，那就和 report.py 的约定不一致了。",
    },
    quiz: [
      {
        q: "文本报告里 worker-1 的主机状态为什么是 CRIT？",
        choices: ["磁盘是 WARN，所以主机也是 WARN", "它的检查里有一项 CRIT，主机取最严重的", "名字里带 worker"],
        answer: 1,
        why: "主机状态是各项里的最严重值。一项 crit 就让整台成为 crit。",
      },
      {
        q: "`--json` 时，开始巡检的日志在哪？",
        choices: ["混在 JSON 数组前面", "标准错误", "写进退出码"],
        answer: 1,
        why: "这样重定向标准输出才能得到合法 JSON。",
      },
      {
        q: "建议写在哪个字段？",
        choices: ["从 detail 里用逗号拆出来", "suggestion", "用退出码表示建议文本"],
        answer: 1,
        why: "detail 是事实，suggestion 是下一步。分开之后，没有建议的项可以留空。",
      },
    ],
  },
  {
    id: "shared-skeleton",
    title: "抽出共用骨架",
    read: 16,
    practice: 20,
    summary: "数据结构、退出码和「这个目录能不能动」从各个脚本里抽出来，四个工具一起用。",
    goals: ["读 HostReport 和 worst_status", "说明路径检查挡的是什么", "指出清单数据和真实探针要分开"],
    blocks: [
      { type: "p", text: "前面几课你已经写过字典、分级和路径拒绝。工具链把它们放进两个小文件。新工具要加检查项时，优先加在巡检命令里，而不是再发明一种结果格式。" },
      codeBlock({
        filename: "xunzhan/model.py",
        code: modelPy,
        download: "xunzhan/model.py",
        output: "Check 是一项。HostReport 是一台机器。status 属性取各项里最严重的状态。",
      }),
      codeBlock({
        filename: "xunzhan/paths.py",
        code: pathsPy,
        download: "xunzhan/paths.py",
        output: "require_work_root 拒绝磁盘根目录和过浅的路径。create=False 时不创建目录，给 dry-run 用。",
      }),
      { type: "p", text: "练习清单把磁盘使用率和心跳年龄写在 JSON 里，是为了在没有机房的时候也能学判断。`inspect_cmd.py` 里如果主机带了 `disk_used_percent`，就用这个数；如果没有，才去读 `disk_path` 指向的真实磁盘。替换探针时，只换读取事实的函数。" },
      { type: "p", text: "工作目录的检查放在部署和发布前面。巡检只读清单，不需要 `--root`。会创建文件的命令必须带 `--root`，而且不能是 `/` 或 `/tmp` 这种过浅的位置。" },
      {
        type: "callout",
        tone: "do",
        title: "库和命令的差别",
        text: "练习工具为了短，路径不合法时直接退出。若你以后把这些函数给别的程序导入，更合适的是抛出异常，由最外层的命令把异常变成退出码。",
      },
    ],
    exercise: {
      prompt: "读 `paths.py`，用 `python3 -m xunzhan deploy --root /tmp --dry-run` 验证过浅路径会被拒绝。再把 root 换成 `/tmp/xunzhan-env`。",
      hint: "拒绝的信息在标准错误，退出码是 2。dry-run 不应把目录创建出来。",
      solution: "`/tmp` 退出 2，并且不会出现新的业务目录。`/tmp/xunzhan-env` 配上 `--dry-run` 会打印将要做的步骤，目录本身不会被创建。",
    },
    quiz: [
      {
        q: "一台机器有 warn 和 crit 两项时，HostReport.status 是？",
        choices: ["warn", "crit", "ok"],
        answer: 1,
        why: "worst_status 取序数更大的那个。crit 高于 warn。",
      },
      {
        q: "练习清单里的 disk_used_percent 代表？",
        choices: ["工具扫描到的网段结果", "你提供的事实，用来练习判断", "必须和真实磁盘一致，否则程序崩溃"],
        answer: 1,
        why: "删掉这个字段并提供 disk_path 时，才会去读真实磁盘。",
      },
      {
        q: "deploy 的 dry-run 为什么调用 require_work_root(create=False)？",
        choices: ["为了在演习时也把目录建好", "演习要检查路径，但先不创建", "因为 /tmp 永远合法"],
        answer: 1,
        why: "路径太浅仍然要拒绝。通过检查之后，不该留下一个空目录。",
      },
    ],
  },
  {
    id: "tool-inspect",
    title: "批量机器巡检",
    read: 18,
    practice: 25,
    summary: "读一份主机清单，用有上限的线程池检查每台，按原顺序给出报告和退出码。",
    goals: ["准备一份自己的 hosts.json", "解释磁盘和心跳两条规则", "用 --workers 和 --strict 改变行为"],
    blocks: [
      { type: "p", text: "这是四件工具里的第一件。它回答：按我给的清单，现在有没有严重问题。它不发现清单以外的机器，也不登录任何地方。你把事实放进 JSON，或者让它读取本机磁盘路径。" },
      codeBlock({
        lang: "json",
        filename: "xunzhan/fixtures/hosts.json",
        code: hostsJson,
        download: "xunzhan/fixtures/hosts.json",
      }),
      codeBlock({
        filename: "xunzhan/inspect_cmd.py",
        code: inspectCmd,
        download: "xunzhan/inspect_cmd.py",
        run: "python3 -m xunzhan inspect --workers 4",
        output: inspectText,
      }),
      { type: "p", text: "心跳没有「七成」这个字段，警告线由上限乘 0.7 算出来。45 秒对 60 秒的上限是警告；480 秒对 120 秒的上限是严重。磁盘默认 80 警告、90 严重，可以用参数改。" },
      { type: "p", text: "并发用线程池，做完后按清单顺序组装。某台在检查过程中抛异常，会被记成一项 crit，其余机器继续。主机名重复直接退出 2，因为顺序字典没法表示两台同名机器。" },
      { type: "p", text: "要接到你有权维护的真实机器时，保持 `inspect_host` 的返回结构不变，只替换 `check_disk` 或 `check_heartbeat` 里面「事实从哪来」。例如心跳改成读你自己的采集文件。不要把工具改成扫描网段。" },
    ],
    exercise: {
      prompt: "复制练习清单，删掉 cron-1，把 worker-1 的心跳改成 10。运行默认模式和 `--strict`。",
      hint: "磁盘 84 仍是警告。默认模式看有没有 crit。",
      solution: "默认退出码变成 0，因为只剩警告。加上 `--strict` 后退出码变成 1。文本里仍能看见 WARN。",
    },
    quiz: [
      {
        q: "清单之外的机器会被巡检吗？",
        choices: ["会，工具会扫描本机网段", "不会，只检查清单里的名字", "只会在 --strict 时扫描"],
        answer: 1,
        why: "资产范围由你写的清单决定。",
      },
      {
        q: "as_completed 的完成顺序和报告顺序？",
        choices: ["报告按完成顺序", "报告按清单顺序重新排过", "报告按磁盘从高到低"],
        answer: 1,
        why: "完成顺序不稳定。稳定的是输入里的名字顺序。",
      },
      {
        q: "两台机器都叫 api-1 时？",
        choices: ["合并成一份报告", "退出码 2，提示主机名不能重复", "只保留第一台"],
        answer: 1,
        why: "名字是报告的键。重复说明清单本身需要先改。",
      },
    ],
  },
  {
    id: "tool-deploy",
    title: "环境部署自动化",
    read: 18,
    practice: 25,
    summary: "把准备环境写成步骤。失败时只收回自己创建的文件和空目录。",
    goals: ["在专用目录里做一次 dry-run 和一次真实部署", "用端口 0 看到健康检查失败后的回滚", "确认已有文件不会被删"],
    blocks: [
      { type: "p", text: "部署脚本要回答两个问题：步骤是否按顺序发生，失败时动过的东西能否收回。示例在一个空目录里检查 Python、检查端口、创建 app/log/tmp、写入 config.json，再读配置做健康检查。" },
      codeBlock({
        filename: "xunzhan/deploy_cmd.py",
        code: deployCmd,
        download: "xunzhan/deploy_cmd.py",
        run: "python3 -m xunzhan deploy --root /tmp/xunzhan-env --dry-run",
        output: "DRY-RUN 准备目录\nDRY-RUN 渲染配置\nDRY-RUN 健康检查\n\n检查 Python 和检查参数仍会真的执行，因为它们不写文件。目录不会被创建。",
      }),
      { type: "p", text: "端口 0 能通过参数检查，但健康检查拒绝它。这是演习失败的方法：你能看见回滚，又不用加一个「故意弄坏」的隐藏开关。端口 70000 会在参数检查就失败，此时还没有创建业务目录。" },
      {
        type: "code",
        lang: "text",
        filename: "端口 0 的回滚",
        download: null,
        code: `OK   检查 Python
OK   检查参数
OK   准备目录
OK   渲染配置
FAIL 健康检查：端口 0 不能提供服务
回滚 渲染配置
回滚 准备目录`,
      },
      { type: "p", text: "回滚只删除这次写出来的 config.json，以及这次新建的空目录。事先放在 app 里的文件会留下，因为那个目录不是这次创建的。已有的 config.json 也不会被覆盖，所以第二次部署不会冲掉你改过的端口。" },
      {
        type: "callout",
        tone: "pit",
        title: "不用递归删除来回滚",
        text: "rmtree 很快，也很容易删出练习目录。这里用 unlink 和 rmdir。目录非空就删不掉，这是故意的保护。",
      },
    ],
    exercise: {
      prompt: "选一个新的 `/tmp/你的名字-env`。先 dry-run，再以 `--port 8080` 真正部署。打开 config.json。把端口改成 9 后再部署一次，确认没有被改回 8080。",
      hint: "第二次应成功，且文件里的端口仍是 9。",
      solution: "第一次生成的配置端口是 8080。手改之后再次部署会跳过写入，端口保持 9。这说明脚本能重复执行，并且尊重已有配置。",
    },
    quiz: [
      {
        q: "dry-run 对「准备目录」会？",
        choices: ["创建目录再删掉", "只打印，不创建", "因为是演习所以跳过路径检查"],
        answer: 1,
        why: "会写磁盘的步骤在演习时只打印。路径太浅仍然会在更早的检查里被拒绝。",
      },
      {
        q: "健康检查失败后，事先放进 app 的 keep.txt 会？",
        choices: ["被回滚删掉", "留下来，因为那个目录不是这次创建的", "被写成配置"],
        answer: 1,
        why: "回滚清单只记录这次新建的路径。",
      },
      {
        q: "为什么用 `--port 0` 演习，而不是做一个总会成功的脚本？",
        choices: ["0 是唯一合法端口", "你需要看见失败和回滚，而不只是看见全绿", "端口 0 会扫描网卡"],
        answer: 1,
        why: "全绿的脚本证明不了回滚路径真的接上了。",
      },
    ],
  },
  {
    id: "tool-publish",
    title: "小型服务发布",
    read: 18,
    practice: 25,
    summary: "把制品放进版本目录，切换 CURRENT 指针，健康检查失败时只把指针拨回去。",
    goals: ["完成一次 staging 发布", "看到生产环境没有确认时会被拒绝", "用 --fail-health 观察回滚后现场还在"],
    blocks: [
      { type: "p", text: "小型发布不必先上一套编排系统。一个清晰的模型是：每个版本一个目录，一个 CURRENT 文件指向正在服务的版本。切换的是指针。失败时把指针写回上一版，有问题的目录留着，方便看里面到底是什么。" },
      codeBlock({
        filename: "xunzhan/publish_cmd.py",
        code: publishCmd,
        download: "xunzhan/publish_cmd.py",
        run: "python3 -m xunzhan publish --root /tmp/xunzhan-rel --version 1.2.0 --artifact xunzhan/fixtures/artifact.txt --env staging",
      }),
      { type: "widget", name: "release" },
      { type: "p", text: "模拟器和命令的规则一致。版本号先限定为 `1.2.0` 这种三位数字。已有的版本目录拒绝覆盖，避免一次重跑把正在排查的现场冲掉。`--env prod` 必须同时给 `--yes`，否则退出 2，并且什么都不创建。" },
      { type: "p", text: "`--fail-health` 是练习开关，用来看指针回滚。给同事日常用的版本可以把这个开关去掉，改成请求真实的 `/health`。回滚时只改 CURRENT。版本目录保留，是为了还能打开制品排查，而不是为了继续对外服务。" },
      {
        type: "callout",
        tone: "keep",
        title: "先发布到 staging",
        text: "同一个命令，用环境名把练习和生产分开。生产多一道明确确认。确认不是安全本身，它只是让「我真的要对生产做这件事」留在命令行历史里。",
      },
    ],
    exercise: {
      prompt: "在一个新的 root 里发布 1.2.0。再发布 1.3.0 并加上 `--fail-health`。看 CURRENT 和 releases 目录。然后不带 `--yes` 对 prod 发布 1.4.0。",
      hint: "制品可以用 xunzhan/fixtures/artifact.txt。",
      solution: "1.2.0 之后 CURRENT 是 1.2.0。失败的 1.3.0 会把指针拨回 1.2.0，同时留下 releases/1.3.0。prod 没有 --yes 时退出 2，1.4.0 不会出现。",
    },
    quiz: [
      {
        q: "健康检查失败后，版本目录为什么还留着？",
        choices: ["留着继续对外服务", "指针已经回到旧版，目录留下来给人排查", "因为删除需要退出码 0"],
        answer: 1,
        why: "对外指向由 CURRENT 决定。现场是证据。",
      },
      {
        q: "再次发布同一个版本号会？",
        choices: ["覆盖制品", "退出 2，拒绝覆盖", "自动变成下一个版本"],
        answer: 1,
        why: "覆盖会毁掉你可能正在看的那个目录。",
      },
      {
        q: "生产发布比 staging 多什么？",
        choices: ["必须加上 --yes，否则命令拒绝执行", "会扫描更多机器", "可以不带版本号"],
        answer: 0,
        why: "多的是一道明确确认，不是另一套发布逻辑。",
      },
    ],
  },
  {
    id: "tool-collect",
    title: "监控数据采集",
    read: 16,
    practice: 20,
    summary: "一次采集写成一行 JSON，追加到文件。默认只采有限次。",
    goals: ["写出一行里有时间、主机、指标名和值", "用 --count 控制次数", "说明哪些数适合当指标"],
    blocks: [
      { type: "p", text: "采集脚本的工作不是画图，而是稳定地留下数字。每一行一个 JSON 对象，这种格式叫 JSON Lines：追加方便，坏掉的一行也不会毁掉整个文件。" },
      codeBlock({
        filename: "xunzhan/collect_cmd.py",
        code: collectCmd,
        download: "xunzhan/collect_cmd.py",
        run: "python3 -m xunzhan collect --out /tmp/xunzhan-metrics.jsonl --count 2 --interval 0.2",
        output: "文件里每次采集至少有一行 disk.used_percent。系统提供 loadavg 时还会有 load.1m。数值随机器变化，字段不变。",
      }),
      { type: "p", text: "一行里有 `ts`、`host`、`name`、`value`。磁盘还有 `labels.path`，因为同一个指标可以来自不同路径。时间带时区偏移，后面的人不用猜这是哪一区的钟。" },
      { type: "p", text: "命令默认采 1 次，必须给出次数。它不会自己变成一个永远运行的进程。你要持续采集时，把 `--count` 和 `--interval` 交给一个你看得到的定时方式，而不是在忘记它之后让它无限写磁盘。" },
      { type: "p", text: "指标名用低基数的词：`disk.used_percent`、`load.1m`。用户 ID、订单号放进日志，不放进指标名或标签。否则每个用户一条曲线，存储和查询都会被撑满。这是可观测性里很具体的一条纪律，下一课会放到三种信号里一起看。" },
      {
        type: "callout",
        tone: "do",
        title: "追加，而不是每次清空",
        text: "采集的价值在于前后能比较。用追加写。要换文件时，换一个新的 --out，而不是让脚本默认覆盖历史。",
      },
    ],
    exercise: {
      prompt: "采 3 次，间隔 0。数一数 disk.used_percent 有几行。再采 1 次到同一个文件，确认行数增加而不是被替换。",
      hint: "可以用 python 读文件数有多少行包含这个名字。",
      solution: "第一次之后有 3 行磁盘指标。再跑一次变成 4 行。若第二次把文件缩短了，就违反了追加约定。",
    },
    quiz: [
      {
        q: "JSON Lines 相比一个大数组，更适合采集是因为？",
        choices: ["可以一行行追加，坏一行不影响别的行", "它不能表示数字", "它会自动画图"],
        answer: 0,
        why: "采集是持续的写入。追加和容错比一次写成漂亮数组更重要。",
      },
      {
        q: "用户 ID 更适合出现在？",
        choices: ["指标标签", "某次事件的日志里", "指标的名字里"],
        answer: 1,
        why: "指标标签要保持低基数。用户 ID 的取值几乎没有上限。",
      },
      {
        q: "示例为什么要求 --count，而不是默认永远跑？",
        choices: ["Python 不能循环", "练习命令应该在你预期的次数后结束", "磁盘指标只能读一次"],
        answer: 1,
        why: "永远运行的循环要配上你看得见的停止方式和磁盘预算。默认有限次更安全。",
      },
    ],
  },
  {
    id: "slo",
    title: "错误预算",
    read: 16,
    practice: 15,
    summary: "SLI 是你量的数，SLO 是你对这个数的目标。错误预算是目标允许的失败额度。",
    goals: ["用自己的话区分 SLI 和 SLO", "算出一段窗口里还允许失败多少次", "把预算和能不能发布连起来"],
    blocks: [
      { type: "p", text: "SRE 把可靠性当成服务的一项行为，而不是上线之后才想起来的口号。先选定一个用户能感知的指标，再给它一个时间窗口里的目标。没有目标的告警，只是一个数字在闪。" },
      { type: "p", text: "SLI，服务等级指标，是量出来的比例或延迟。例如「HTTP 请求里返回成功的比例」。SLO，服务等级目标，是你给这个指标定的线，例如「连续 30 天里 99.9% 的请求成功」。错误预算就是 100% 减去 SLO，再乘上这段时间的请求量：还允许失败多少次。" },
      codeBlock({
        filename: "error_budget.py",
        code: errorBudget,
        run: "python3 error_budget.py",
        output: "允许失败 1000\n已经失败 200\n剩余 800\n烧掉了 20.0%",
      }),
      { type: "widget", name: "budget" },
      { type: "p", text: "1,000,000 次请求、SLO 99.9%，允许失败 1,000 次。已经失败 200 次，还剩 800，烧掉了 20%。预算还在时，可以继续带有风险的发布，同时把新的失败算进同一扇窗口。预算用完，就先稳住成功率。" },
      { type: "p", text: "这个计算是教学用的四则运算。真实预算还要定清窗口从哪天到哪天、失败怎么计数、延迟的 SLI 用哪一个分位。先把「允许多少、已经用了多少」算对，再去接监控系统。" },
      {
        type: "callout",
        tone: "keep",
        title: "预算是发布讨论的输入",
        text: "它不代替巡检。巡检告诉你现在有没有严重项；预算告诉你这段时间还扛得住多少失败。两件一起看，才决定这次要不要发。",
      },
    ],
    exercise: {
      prompt: "在页面上把已失败改成 2400，看剩余。再用 Python 算总请求 50_000、SLO 0.99、失败 100 时的剩余。",
      hint: "允许失败 = 50000 × 0.01。",
      solution: "2400 次失败时剩余是 -1400，预算已经超支。第二题允许失败 500，剩余 400。",
    },
    quiz: [
      {
        q: "「30 天内 99.9% 的请求成功」是？",
        choices: ["SLI", "SLO", "一台机器的磁盘阈值"],
        answer: 1,
        why: "它是对某个指标下达的目标，并且带了窗口。SLI 是被这个目标衡量的那个比例本身。",
      },
      {
        q: "100 万请求、SLO 99.9%，允许失败多少次？",
        choices: ["999", "1000", "99.9"],
        answer: 1,
        why: "允许的失败比例是 0.1%，100 万的 0.1% 是 1000。",
      },
      {
        q: "预算已经是负数时，更合理的下一步是？",
        choices: ["继续加大发布频率，让预算自己恢复", "优先处理正在造成失败的问题，再恢复有风险的变更", "把 SLO 从报告里删掉"],
        answer: 1,
        why: "预算用完说明这段窗口的可靠性目标已经达不到。先止住失败来源。",
      },
    ],
  },
  {
    id: "three-signals",
    title: "三种信号",
    read: 14,
    practice: 15,
    summary: "日志记具体的事，指标记可聚合的数，链路记一次请求穿过了哪里。",
    goals: ["为同一次失败各举一种信号", "说出四个黄金信号", "让巡检工具自己也留下耗时和运行 ID"],
    blocks: [
      { type: "p", text: "可观测性是：系统出了你没预设的问题时，你仍能从外面把它问清楚。事先把问题全写成固定检查是做不到的，所以要留下三种可以事后追问的信号。" },
      {
        type: "table",
        caption: "三种信号",
        columns: ["信号", "记下什么", "适合的问题"],
        rows: [
          ["日志", "一件具体的事，带时间、级别和这次运行的 ID", "这次发布为什么在健康检查失败"],
          ["指标", "可加总、可画曲线的数字，标签保持低基数", "错误率这一小时是不是在升"],
          ["链路", "一次请求经过的步骤和每步耗时", "慢是慢在自己的代码还是慢在下游"],
        ],
      },
      { type: "p", text: "四个黄金信号把指标收成一组：延迟、流量、错误、饱和度。延迟看响应有多慢，流量看进来多少工作，错误看失败比例，饱和度看磁盘、队列、连接这些容量还剩多少。磁盘使用率就是饱和度的一种。" },
      { type: "p", text: "你的巡检工具自己也是一个小服务。一次运行生成一个 `run_id`，开始和结束的日志都带上它，并记下耗时和严重项个数。这些是工具的日志和指标。没有它们，工具失败时你只知道「脚本退出了 1」，不知道是等了 40 秒还是瞬间失败。" },
      {
        type: "code",
        lang: "python",
        filename: "一次运行的日志形状",
        download: null,
        code: `log.info("run_id=%s 开始 主机 %s", run_id, len(hosts))
# ... 检查 ...
log.info("run_id=%s 结束 耗时 %.2f 秒 严重 %s", run_id, elapsed, critical)`,
      },
      { type: "p", text: "链路在这套小工具里可以先不搭追踪系统。你只要在发布步骤的日志里按同一顺序写「检查、复制、切换、健康检查、回滚」，并带同一个 run_id，就已经能回答「停在哪一步」。主机数量和调用层次变多之后，再把这个 ID 传给正式的追踪系统。" },
    ],
    exercise: {
      prompt: "拿一次 `xunzhan inspect` 的标准错误，写出你还缺的三个字段：运行 ID、耗时、严重项个数。不必改代码，先写成你希望看到的两行日志。",
      hint: "现有日志已经有开始、结束和退出码。",
      solution: "例如「run_id=8f2 开始 主机 3」和「run_id=8f2 结束 耗时 0.03 秒 严重 2」。两行用同一个 ID，才能在很多并行运行里对上。",
    },
    quiz: [
      {
        q: "「过去一小时成功率」更适合来自？",
        choices: ["把所有日志打开人工数", "一个按状态计数的指标", "一台机器的主机名"],
        answer: 1,
        why: "比例需要聚合。指标就是为聚合准备的。日志用来追问具体哪一次。",
      },
      {
        q: "磁盘使用率属于四个黄金信号里的？",
        choices: ["流量", "饱和度", "链路"],
        answer: 1,
        why: "它描述容量还剩多少。链路不是这四个信号之一。",
      },
      {
        q: "run_id 的作用是？",
        choices: ["代替退出码", "把同一次运行的日志串起来", "提高并发上限"],
        answer: 1,
        why: "没有共同 ID 时，两个人同时巡检的日志会混在一起。",
      },
    ],
  },
  {
    id: "alerts",
    title: "告警要能行动",
    read: 16,
    practice: 20,
    summary: "只对需要人动手的情况开口。一条告警带上现象、影响、第一步和何时升级。",
    goals: ["用 judge 对练习指标做出一条告警", "说明为什么负载升高不一定要叫人", "写出四行就能用的处置说明"],
    blocks: [
      { type: "p", text: "采集到的数字会一直波动。告警如果跟着每一个波动响，人会把通知关掉。告警要对应一个动作：收到的人知道现象是什么、用户会有什么影响、第一件要做的事，以及什么情况下该把别人叫上。" },
      codeBlock({
        lang: "jsonl",
        filename: "xunzhan/fixtures/metrics.jsonl",
        code: metricsJsonl,
        download: "xunzhan/fixtures/metrics.jsonl",
      }),
      codeBlock({
        filename: "xunzhan/judge_cmd.py",
        code: judgeCmd,
        download: "xunzhan/judge_cmd.py",
        run: "python3 -m xunzhan judge --metrics xunzhan/fixtures/metrics.jsonl --disk-crit 90",
        output: "ALERT worker-1 disk.used_percent=91\n现象：磁盘使用率越过阈值\n影响：日志写不进去，发布复制制品也会失败\n第一步：先找出大文件，确认是不是日志没轮转\n升级：超过临界值还在涨，或者清理后很快又满，就叫人一起看\n\n退出码 1。阈值调到 99 时打印「没有需要行动的告警」，退出码 0。",
      }),
      { type: "p", text: "练习文件里 worker-1 先出现 93.5，后来又有一行 91.0。判断用最新的一行。负载指标也在文件里，但这条命令不告警它。不是每个数字都该叫醒人。磁盘满了会让发布和日志写入失败，所以它配得上一条动作说明。" },
      { type: "p", text: "真实环境里还要加「持续多久」。抖动一次就响，和持续 10 分钟再响，打扰程度完全不同。示例先把「说什么」写对。你加上持续时间时，仍要保留这四行：现象、影响、第一步、升级。" },
      {
        type: "callout",
        tone: "pit",
        title: "症状和猜测分开",
        text: "现象是「使用率 91%」。第一步里的「是不是日志没轮转」是要去验证的猜测，不是已经发生的事实。告警正文把这两句分开，接电话的人才不会把猜测当成结论。",
      },
    ],
    exercise: {
      prompt: "分别用 `--disk-crit 90` 和 `--disk-crit 99` 运行 judge。然后改练习文件，把最新的 91 改成 70，再跑一次 90 的阈值。",
      hint: "判断看的是同一主机同一指标的最后一行。",
      solution: "90 时退出码 1，99 时退出码 0。把最新值改成 70 后，90 的阈值也不再告警。更早的 93.5 不会覆盖最新样本。",
    },
    quiz: [
      {
        q: "worker-1 有 93.5 和后来的 91.0 时，告警里的数字是？",
        choices: ["93.5", "91", "两个都算严重所以相加"],
        answer: 1,
        why: "同一指标保留最新样本。91 仍超过 90，所以还是要告警。",
      },
      {
        q: "告警正文里「第一步」应该是？",
        choices: ["一个接电话的人能做的检查", "把服务重启十次", "把 SLO 改低"],
        answer: 0,
        why: "示例里的第一步是找出大文件、看日志是否没轮转。做完这一步才知道要不要升级。",
      },
      {
        q: "为什么 load.1m 在这份命令里不产生告警？",
        choices: ["负载不是数字", "还没有为它写一条值得行动的规则", "JSON Lines 不能保存它"],
        answer: 1,
        why: "没有行动说明的数字先留在文件里，不叫人。",
      },
    ],
  },
  {
    id: "one-path",
    title: "串成一条值班路径",
    read: 12,
    practice: 30,
    summary: "巡检、部署、发布、采集和判断是一条路径上的五个命令，而不是五份互不相关的脚本。",
    goals: ["按顺序在本机把五条命令跑通", "说出每一步的退出码会怎样挡住下一步", "列出你以后可以替换的两个接口"],
    blocks: [
      { type: "p", text: "到这里，你有的不是零散语法，而是一条能值一夜班的小路。清单进来，巡检先说有没有严重项。环境用部署命令准备。发布只切换指针。采集把数字追加下来。判断只在需要行动时开口。" },
      {
        type: "ol",
        items: [
          "inspect：严重项的退出码是 1。发布前你先看它。",
          "deploy：在专用目录准备环境。失败会收回这次创建的文件。",
          "publish：staging 通过之后，生产还要 --yes。健康检查失败只回滚指针。",
          "collect：把磁盘和负载按行写入文件。",
          "judge：读这些行，该叫人时退出 1，并给出四行处置说明。",
        ],
      },
      {
        type: "code",
        lang: "bash",
        filename: "一条可以照着做的顺序",
        download: null,
        code: `python3 -m xunzhan inspect
python3 -m xunzhan deploy --root /tmp/xunzhan-env --port 8080
python3 -m xunzhan publish --root /tmp/xunzhan-rel --version 1.2.0 \\
  --artifact xunzhan/fixtures/artifact.txt --env staging
python3 -m xunzhan collect --out /tmp/xunzhan-metrics.jsonl --count 1
python3 -m xunzhan judge --metrics xunzhan/fixtures/metrics.jsonl --disk-crit 90`,
      },
      { type: "p", text: "练习清单里本来就有严重项，所以第一条命令会以 1 结束。这是对的：有严重项时，你不该接着去按生产发布。你可以先改清单把严重项消掉，看到 inspect 变成 0，再走后面的命令。" },
      { type: "h", text: "以后替换哪两处" },
      { type: "p", text: "第一处是事实从哪来。把心跳和磁盘换成你有权读取的采集接口，返回值仍放进 Check。第二处是健康检查打到哪。发布命令里的演习开关换成对你自己的服务发一次带超时的 GET。令牌继续从环境变量读。" },
      { type: "p", text: "这两处都替换完，工具的外壳不用推翻：子命令、退出码、dry-run、指针回滚、JSON Lines 和四行告警仍然适用。SRE 要看的 SLI，可以从采集文件里的成功与失败计数长出来，再放进你已经算过的错误预算。" },
      {
        type: "callout",
        tone: "keep",
        title: "你现在能交付的东西",
        text: "一份会分级的巡检，一段失败能停下的部署，一次会回滚指针的发布，一个追加写指标的采集，和一条写得清第一步的告警。它们都只动你点名的目录和清单。",
      },
    ],
    exercise: {
      prompt: "按上面五条命令在本机跑一遍。给每一条记下退出码。然后把 inspect 的清单改到没有 crit，再确认退出码变成 0。",
      hint: "publish 的 root 和 deploy 的 root 用两个不同目录，避免把环境文件和版本目录混在一起。",
      solution: "原始练习清单的 inspect 是 1，judge 是 1。deploy、publish、collect 在参数正确时是 0。清单里不再有 crit 之后，inspect 变为 0。若 prod 没加 --yes，publish 是 2。",
    },
    quiz: [
      {
        q: "inspect 退出码为 1 时，更合适的下一步是？",
        choices: ["立刻对生产执行 publish --yes", "先看严重项，处理或明确接受之后再发布", "把退出码改成 0 再继续"],
        answer: 1,
        why: "退出码 1 就是路径上的红灯。绕过它，后面的自动化只是跑得更快的事故。",
      },
      {
        q: "采集和判断为什么分成两个命令？",
        choices: ["一个命令不能写文件", "采集负责留下数字，判断负责决定要不要叫人", "判断必须扫描网段"],
        answer: 1,
        why: "数字可以持续记。是不是叫醒人，是另一条可以单独改的规则。",
      },
      {
        q: "把工具接到真实环境时，优先替换的是？",
        choices: ["退出码的含义", "读取事实和健康检查的地址", "把 dry-run 删掉"],
        answer: 1,
        why: "外壳上的约定已经能用。变的是数据来源和要探测的服务。",
      },
    ],
  },
];
