import { codeBlock } from "../blocks.js";
import checkResult from "../../samples/check_result.py?raw";
import scriptShape from "../../samples/script_shape.py?raw";
import dryRun from "../../samples/dry_run.py?raw";
import batchReport from "../../samples/batch_report.py?raw";
import inspectLevels from "../../samples/inspect_levels.py?raw";
import stopOrContinue from "../../samples/stop_or_continue.py?raw";
import idempotentLayout from "../../samples/idempotent_layout.py?raw";
import httpHealth from "../../samples/http_health.py?raw";
import tinyHealth from "../../samples/tiny_health.py?raw";
import configLayers from "../../samples/config_layers.py?raw";
import retryCall from "../../samples/retry_call.py?raw";
import pagedFetch from "../../samples/paged_fetch.py?raw";
import threadPool from "../../samples/thread_pool.py?raw";
import asyncInspect from "../../samples/async_inspect.py?raw";
import boundedAsync from "../../samples/bounded_async.py?raw";

const requestsSnippet = `import requests

def fetch_json(url, token=None, timeout=3.0):
    headers = {}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    response = requests.get(url, headers=headers, timeout=timeout)
    response.raise_for_status()
    return response.json()
`;

export const part1 = [
  {
    id: "how-to-learn",
    title: "先看清这条路",
    read: 8,
    practice: 15,
    summary: "确认你已有的基础够用，并按「跑通、改一个数、做自测」来走后面的课。",
    goals: [
      "知道这 27 课分别接住自动化、API、并发、工具链和可观测性",
      "在本机准备一个练习目录",
      "学会从页面下载示例并运行",
    ],
    blocks: [
      { type: "p", text: "你已经会写变量、判断、循环和函数，也见过列表和字典。后面不再从零讲语法，而是把这些东西用在值班会碰到的脚本上。" },
      { type: "p", text: "路径分成八段。先把一次检查写成数据结构，再写成能交付的脚本；然后是批量任务、HTTP、并发；接着把重复的部分收成一个小工具链，做出巡检、部署、发布和采集；最后用 SRE 的看法这些工具该留下什么记录、什么情况才该叫醒人。" },
      { type: "h", text: "每次只做三件事" },
      {
        type: "ol",
        items: [
          "把示例下载到练习目录，先原样跑通，看标准输出和退出码。",
          "只改一个数字或一个参数，再跑一次，确认输出跟着变。",
          "做页底的自测。答错就回到对应的小节，而不是把进度点亮了事。",
        ],
      },
      { type: "p", text: "练习不需要一批服务器。清单是你自己写的 JSON，部署和发布只碰你用参数指定的目录。工具不会扫描网段，也不会去读仓库以外的密钥。" },
      {
        type: "code",
        lang: "bash",
        filename: "终端",
        code: "python3 --version\nmkdir -p ~/xunzhan-lab\ncd ~/xunzhan-lab",
        output: "Python 3.10 或更高就可以。版本号低于 3.10 时，先升级解释器再继续。",
        download: null,
      },
      { type: "p", text: "页面右上角可以下载全部示例。解压后进入 `samples` 目录，单文件脚本直接 `python3 文件名.py`。到了工具链那几课，在同一个目录里运行 `python3 -m xunzhan inspect`。" },
      {
        type: "callout",
        tone: "keep",
        title: "进度存在这台浏览器",
        text: "点过「我跑通了这一课」和自测分数会留在本地。换浏览器或清掉站点数据之后需要重新点。",
      },
    ],
    exercise: {
      prompt: "在练习目录里运行 `python3 --version`，确认第一段数字大于等于 3.10。把版本号写在自己的笔记里。",
      hint: "macOS 上有时要写 python3，而不是 python。Windows 可以从 python.org 安装后重新打开终端。",
      solution: "输出类似 Python 3.12.3。只要主版本是 3、次版本大于等于 10，后面的示例都能跑。",
    },
    quiz: [
      {
        q: "还没有一批真实服务器时，怎么开始？",
        choices: ["先等申请到机器再学", "用本机目录和自己写的清单练习判断逻辑", "先扫描公司网段找机器"],
        answer: 1,
        why: "判断逻辑可以先用清单里的事实练熟。接真实探针时，只替换「读取事实」的那一层。",
      },
      {
        q: "一课做完的标志是什么？",
        choices: ["把页面滚到底", "原样跑通，并改过一个参数看到输出变化", "把代码复制进笔记软件"],
        answer: 1,
        why: "改一个参数是为了确认你知道哪个数在控制结果。",
      },
      {
        q: "示例工具适合对谁使用？",
        choices: ["任何扫到的 IP", "你有权维护的目录、账号和机器", "同事电脑上的默认口令"],
        answer: 1,
        why: "清单由你提供，目录由你指定。这是运维工具的边界，也是后面每一课的边界。",
      },
    ],
  },
  {
    id: "check-result",
    title: "用字典记下一次检查",
    read: 12,
    practice: 20,
    summary: "一次检查先变成结构化结果，后面才能筛选、计数和决定退出码。",
    goals: ["用字典表示名称、状态、细节和建议", "用列表推导留下需要人看的项", "让严重问题对应退出码 1"],
    blocks: [
      { type: "p", text: "打印一行「磁盘 93%」能看，但不能接着问：有几项要处理、要不要让脚本失败。先把结果放进字典，打印只是最后一步。" },
      { type: "p", text: "这里每项有四个键。`name` 是检查什么，`status` 用 `ok`、`warn`、`crit` 三个词，`detail` 是读到的事实，`suggestion` 是人接下来可以做的动作。正常时建议留空，避免报告里全是废话。" },
      codeBlock({
        filename: "check_result.py",
        code: checkResult,
        run: "python3 check_result.py",
        output: "OK    disk      已用 71.0%\nWARN  disk      已用 86.0%\nCRIT  disk      已用 93.0%\n需要处理 2 项\n\n退出码 1",
      }),
      { type: "p", text: "`needs_attention` 用列表推导留下状态不是 `ok` 的项。推导式就是把 `for` 和 `if` 收成一行，读的时候先看最左边要留下什么，再看从哪来、什么条件。" },
      { type: "p", text: "退出码给调用这个脚本的人用。人看文字，调度系统看退出码。有 `crit` 就返回 1，否则返回 0。`raise SystemExit(main())` 让 `main` 的返回值成为进程退出码。" },
      {
        type: "callout",
        tone: "pit",
        title: "别用一段话当结果",
        text: "如果函数只 return 一句中文，下一段代码就得去拆句子。状态用固定的三个英文词，中文放在 detail 和 suggestion 里。",
      },
    ],
    exercise: {
      prompt: "把 86 改成 79，再运行。数一数「需要处理」变成几项，退出码有没有变。",
      hint: "79 低于默认警告线 80，这一项会变成 ok。93 仍是 crit。",
      solution: "需要处理的项从 2 变成 1，退出码仍是 1，因为 93 还在。把 93 也降到 80 以下，退出码才会变成 0。",
    },
    quiz: [
      {
        q: "为什么建议在 ok 时留空？",
        choices: ["字典不能有空字符串", "正常项不需要催人动作，报告更好扫", "空字符串会让程序崩溃"],
        answer: 1,
        why: "建议是给人看的下一步。没有下一步时就别占一行。",
      },
      {
        q: "`needs_attention` 留下哪些项？",
        choices: ["只有 crit", "status 不是 ok 的项", "所有项"],
        answer: 1,
        why: "警告也要被人看见。它和严重问题的差别放在退出码里处理。",
      },
      {
        q: "三行结果里有一个 crit 时，进程退出码是？",
        choices: ["0", "1", "和警告的个数相同"],
        answer: 1,
        why: "示例里只要出现 crit 就返回 1。调用方不用解析中文也能知道有严重问题。",
      },
    ],
  },
  {
    id: "script-shape",
    title: "结果、日志、退出码",
    read: 12,
    practice: 15,
    summary: "给人看的结果走标准输出，过程日志走标准错误，严重问题用退出码表示。",
    goals: ["分清 stdout 和 stderr", "用 logging 留下开始和结束", "让退出码表达有没有严重项"],
    blocks: [
      { type: "p", text: "脚本一长，`print` 会混进两种内容：给人或下游程序读的结果，以及「我现在跑到哪了」的过程。结果留在标准输出，过程放到标准错误。" },
      { type: "p", text: "这样别人可以写 `python3 script_shape.py > report.txt`，文件里只有结果。日志仍出现在终端上。后面加 `--json` 时，标准输出就可以整段被另一个程序解析。" },
      codeBlock({
        filename: "script_shape.py",
        code: scriptShape,
        run: "python3 script_shape.py",
        output: "标准输出\nOK    disk      已用 71.0%\nCRIT  backup    最近 26 小时没有成功备份\n\n标准错误\nINFO 开始巡检\nINFO 结束\n\n退出码 1",
      }),
      {
        type: "table",
        caption: "这门课后面一直沿用的退出码",
        columns: ["码", "含义"],
        rows: [
          ["0", "没有严重问题"],
          ["1", "有严重问题，或者健康检查、告警要求行动"],
          ["2", "参数、路径、清单不合法，脚本还没真正开始干活"],
        ],
      },
      {
        type: "callout",
        tone: "keep",
        title: "看到 Traceback 先读最后一行",
        text: "异常从下往上最有用。最后一行是错误类型和原因，往上才是哪一行调用的。先把原因读完，再决定要不要看整段栈。",
      },
    ],
    exercise: {
      prompt: "运行 `python3 script_shape.py > /tmp/report.txt`。打开这个文件，再看终端上还剩什么。",
      hint: "重定向 `>` 只搬走标准输出。",
      solution: "文件里是两行检查结果。终端上剩下 INFO 开始和结束。退出码仍是 1，可以用 `echo $?` 查看。",
    },
    quiz: [
      {
        q: "过程日志应该写到哪里？",
        choices: ["和结果混在标准输出", "标准错误", "写进退出码"],
        answer: 1,
        why: "退出码只能表达类别。过程放在 stderr，结果才能被重定向或被下游解析。",
      },
      {
        q: "参数写错、脚本还没开始检查时，用哪个退出码？",
        choices: ["0", "1", "2"],
        answer: 2,
        why: "1 留给「检查做完了，而且有严重问题」。用法错误是另一类，调用方可以分别处理。",
      },
      {
        q: "backup 那一项是 crit 时，标准输出里还会有 disk 的 ok 行吗？",
        choices: ["会，两项都打印", "不会，遇到 crit 就停止打印", "只打印日志"],
        answer: 0,
        why: "这份脚本先收集结果再决定退出码。人需要看见全部项，而不只是第一件坏事。",
      },
    ],
  },
  {
    id: "dry-run",
    title: "演习运行和密钥",
    read: 14,
    practice: 20,
    summary: "用参数控制要不要真的写文件，并且拒绝在过浅的路径上动手。密钥留在环境里。",
    goals: ["给脚本加上 --root 和 --dry-run", "在写文件前检查路径深度", "知道令牌不进源码"],
    blocks: [
      { type: "p", text: "会写文件的脚本，第一次运行应该只告诉你它打算写什么。`--dry-run` 就是这个开关。确认路径对了，再去掉它真正执行。" },
      { type: "p", text: "工作目录必须由调用的人指定。路径解析之后如果太浅，比如直接是 `/tmp` 这种只有两段的位置，脚本直接退出 2。专用目录至少像 `/tmp/xunzhan-demo` 这样再深一层。" },
      codeBlock({
        filename: "dry_run.py",
        code: dryRun,
        run: "python3 dry_run.py --root /tmp/xunzhan-demo --dry-run",
        output: "DRY-RUN 将写入 /tmp/xunzhan-demo/notice.txt\n\n退出码 0，notice.txt 不会出现。去掉 --dry-run 再跑，文件内容是 published。",
      }),
      { type: "h", text: "密钥放在哪" },
      { type: "p", text: "令牌、密码、私钥不写进 `.py`，不写进要提交的 JSON。练习时用环境变量，例如 `OPS_TOKEN`。代码里只写 `os.environ.get(\"OPS_TOKEN\")`。仓库里可以留 `config.example.json`，里面用空字符串占位。" },
      {
        type: "callout",
        tone: "pit",
        title: "dry-run 的限度",
        text: "它保证的是「这次不写那个文件」。它不会替你证明生产环境一定安全。路径、权限、下游是否存在，仍要在真正执行前看一遍输出。",
      },
    ],
    exercise: {
      prompt: "先加 `--dry-run` 跑一遍，确认没有 `notice.txt`。再真正跑一遍，检查文件内容。最后用 `--root /tmp` 看它是否拒绝。",
      hint: "拒绝的那次退出码是 2，原因在标准错误。",
      solution: "演习时目录里没有 notice.txt。真正执行后文件内容是 `published` 加换行。`--root /tmp` 会提示路径太浅并退出 2。",
    },
    quiz: [
      {
        q: "第一次对一个新目录运行会写文件的脚本，应该？",
        choices: ["直接执行", "先加 --dry-run 看它准备写哪里", "把目录设成 /"],
        answer: 1,
        why: "先看路径。确认是你的练习目录，再去掉开关。",
      },
      {
        q: "令牌应该放在？",
        choices: ["脚本顶部的变量", "要提交的配置文件", "环境变量或本机的密钥管理，代码只读取名字"],
        answer: 2,
        why: "源码和示例配置会被复制、提交、贴到聊天里。令牌跟着它们走就会泄漏。",
      },
      {
        q: "`--root /tmp` 为什么被拒绝？",
        choices: ["Python 不能写 /tmp", "解析后的路径太浅，容易误伤一大片文件", "dry-run 和它冲突"],
        answer: 1,
        why: "工具要求一个专用目录。太浅的路径说明调用的人可能还没想清楚要动哪里。",
      },
    ],
  },
  {
    id: "batch",
    title: "批量做完再汇总",
    read: 12,
    practice: 20,
    summary: "同一件事做很多遍时，单项失败先记下来，其余继续，最后给总数。",
    goals: ["把一份清单映射成一份结果", "单项失败不影响其余项", "用汇总行加上退出码收尾"],
    blocks: [
      { type: "p", text: "批量任务的输入是一份清单，输出是同样顺序的结果加一行汇总。账单导出失败，不应该让你看不见空文件清理的结果。" },
      { type: "p", text: "示例里的清单先写在代码里，方便你看清循环。下一阶段会把清单挪到 JSON 文件。判断逻辑不用改，变的只是数据从哪读。" },
      codeBlock({
        filename: "batch_report.py",
        code: batchReport,
        run: "python3 batch_report.py",
        output: "OK    账单导出  处理了 1200 条\nOK    空文件清理  没有要处理的记录\nFAIL  报表投递  记录数不合法\n完成 3  失败 1\n\n退出码 1",
      }),
      { type: "p", text: "记录数是 0 时，结果仍是成功：没有要处理的记录。再跑一次也是这句话。这就是幂等的一种小形式，下一课还会专门做目录。" },
      { type: "p", text: "记录数小于 0 是这项输入不合法。把它记成失败并继续。如果这里直接抛异常，后面的任务就不会留下记录。" },
      {
        type: "callout",
        tone: "do",
        title: "和发布的差别先记住",
        text: "批量处理希望尽量做完并汇报。发布类步骤常常是「这一步失败，后面的步骤就不该发生」。下一课用同一份步骤演示两种策略。",
      },
    ],
    exercise: {
      prompt: "把报表投递的 `records` 改成 3，再运行，看退出码。然后再加一项你自己的任务。",
      hint: "只要还有一项 fail，退出码就是 1。",
      solution: "改成 3 之后三项都是 OK，汇总是「完成 3  失败 0」，退出码 0。新增的一项会出现在汇总前面的列表里。",
    },
    quiz: [
      {
        q: "报表投递失败时，空文件清理还会执行吗？",
        choices: ["会", "不会，遇到失败就 return", "只会在记录数为 0 时执行"],
        answer: 0,
        why: "handle 对每一项单独返回结果，main 再统一计数。",
      },
      {
        q: "记录数为 0 应该算？",
        choices: ["失败", "成功，而且没有新的副作用", "需要重试"],
        answer: 1,
        why: "没有工作可做，就报告这个事实。它不是错误。",
      },
      {
        q: "汇总行的作用是？",
        choices: ["代替退出码", "让人不用自己数失败项", "把清单写回文件"],
        answer: 1,
        why: "退出码仍负责告诉调度系统有没有失败。汇总行负责人在终端里一眼看完。",
      },
    ],
  },
  {
    id: "inspect-levels",
    title: "正常、警告、严重",
    read: 14,
    practice: 20,
    summary: "警告记下来但默认不让脚本失败；严重问题让退出码变成 1。严格模式可以把警告也算失败。",
    goals: ["给同一套判断套上 warn 和 crit 两条线", "默认退出码只因 crit 变成 1", "会解释 --strict 改变了什么"],
    blocks: [
      { type: "p", text: "磁盘 84% 和 93% 不该得到同一种反应。84% 要被人看见，发布仍可以继续；93% 应该挡住发布。所以状态分成三档，退出码默认只认识其中的严重档。" },
      codeBlock({
        filename: "inspect_levels.py",
        code: inspectLevels,
        run: "python3 inspect_levels.py",
        output: "WARN  disk        84%\n      记下，发布前再看一眼\nOK    memory      70%\nWARN  heartbeat   45 秒\n      记下，发布前再看一眼\n退出码 0  严格模式 1",
      }),
      { type: "p", text: "这次没有 crit，所以默认退出码是 0。`strict=True` 时，只要有 warn 也返回 1。有的团队在发布窗口用严格模式，日常巡检用默认模式。两种都要能说清楚。" },
      { type: "p", text: "心跳的警告线在示例里直接写成 42 秒，也就是 60 秒上限的七成。后面的巡检工具会把「七成」写进代码，你就不用在每份清单里手算。" },
      { type: "widget", name: "inspect" },
      { type: "p", text: "模拟器和后面的 `xunzhan inspect` 用同一套规则：磁盘达到警告线记 warn，达到严重线记 crit；心跳达到上限的 70% 记 warn，达到上限记 crit。有任何 crit，退出码就是 1。" },
    ],
    exercise: {
      prompt: "在模拟器里把 cron-1 的磁盘改成 70，把 worker-1 的心跳改成 10，再运行。看退出码。然后只把 api-1 的磁盘改成 85。",
      hint: "85 落在 80 和 90 之间，是警告。",
      solution: "三台都没有 crit 时退出码变成 0。只剩 85% 的磁盘时，主机状态是 warn，默认退出码仍是 0。这就是警告和严重的差别。",
    },
    quiz: [
      {
        q: "默认模式下，只有 warn、没有 crit，退出码是？",
        choices: ["0", "1", "2"],
        answer: 0,
        why: "示例把 1 留给严重问题。警告写在报告里。",
      },
      {
        q: "严格模式改变的是？",
        choices: ["把 ok 变成 warn", "让 warn 也导致退出码 1", "不再打印建议"],
        answer: 1,
        why: "阈值没变，变的是调用方要不要把警告当成失败。",
      },
      {
        q: "心跳 45 秒、上限 60 秒，按七成警告线会是？",
        choices: ["ok", "warn", "crit"],
        answer: 1,
        why: "42 秒开始警告，60 秒才到严重。45 落在中间。",
      },
    ],
  },
  {
    id: "stop-or-continue",
    title: "继续，还是停下",
    read: 10,
    practice: 15,
    summary: "巡检和批处理尽量做完；后面的步骤依赖前面成功时，失败就要停。",
    goals: ["用同一份步骤演示 continue 和 stop", "指出发布不该在切换失败后继续健康检查", "能为自己的脚本选一种策略"],
    blocks: [
      { type: "p", text: "上一课的巡检应该继续，因为你想看到所有机器。发布不是这样。版本没切换成功，就没有必要去做「切换之后」的健康检查，更不能把失败当成已经发布。" },
      codeBlock({
        filename: "stop_or_continue.py",
        code: stopOrContinue,
        run: "python3 stop_or_continue.py",
        output: "策略 continue\nOK   检查磁盘\nOK   备份配置\nFAIL 切换版本\n记录失败，继续\nOK   健康检查\n\n策略 stop\nOK   检查磁盘\nOK   备份配置\nFAIL 切换版本\n停止，不执行后续步骤",
      }),
      { type: "p", text: "注意 continue 那段仍会打印健康检查 OK。那行在这个练习里是假的：切换已经失败，健康检查却像成功了一样出现。这就是「失败后还继续」在发布里会骗人的地方。" },
      {
        type: "table",
        caption: "选策略",
        columns: ["任务", "失败时"],
        rows: [
          ["巡检、批量导出、采集", "记下这项，继续其余项，最后用退出码汇总"],
          ["部署、发布、迁移", "停下。后面的步骤默认依赖前面已经成功"],
        ],
      },
    ],
    exercise: {
      prompt: "把步骤里的失败从「切换版本」改到「备份配置」，再运行。看 stop 策略停在哪一行。",
      hint: "stop 会在第一次 fail 后 return。",
      solution: "stop 会在备份配置处停下，切换版本和健康检查都不会打印。continue 仍会把四步都走完，并在备份那一行写「记录失败，继续」。",
    },
    quiz: [
      {
        q: "十台机器的磁盘巡检，一台读失败了，应该？",
        choices: ["立即退出，不看剩下九台", "记下这台，继续看剩下的，最后汇总", "把失败改成 ok"],
        answer: 1,
        why: "巡检的价值是一份完整报告。一台失败不应把其余机器的事实藏起来。",
      },
      {
        q: "版本切换失败后还去做健康检查，问题是？",
        choices: ["健康检查可能针对旧状态，报告却看起来像发布后的结果", "健康检查一定更慢", "退出码不能是 1"],
        answer: 0,
        why: "步骤之间有依赖时，后面的成功不能代表前面已经成功。",
      },
      {
        q: "stop 策略在示例里用什么实现？",
        choices: ["遇到 fail 就 return", "把后面的步骤改成 ok", "删除清单"],
        answer: 0,
        why: "return 会带着已经完成的名字离开，后续循环不再执行。",
      },
    ],
  },
  {
    id: "idempotent",
    title: "再跑一次也要安全",
    read: 14,
    practice: 20,
    summary: "重复执行只补齐缺失的部分。锁用来避免两次运行叠在一起。",
    goals: ["写一个补齐目录和配置的函数", "第二次运行得到「没有新文件」", "用排他创建做一把简单的锁"],
    blocks: [
      { type: "p", text: "部署脚本会被人再跑一次，也会被定时任务重试。第二次应该发现目录和配置已经在，就停手，而不是覆盖别人改过的配置，或者把目录删掉重建。" },
      codeBlock({
        filename: "idempotent_layout.py",
        code: idempotentLayout,
        run: "python3 idempotent_layout.py --root /tmp/xunzhan-layout",
        output: "第一次：新建 app, log, tmp, config.json\n第二次：没有新文件\n\n如果 .lock 已经存在：标准错误写「已有一次运行还没结束」，退出码 2。",
      }),
      { type: "p", text: "锁用的是「创建时要求文件必须不存在」。两个进程同时创建，只有一个能成功。拿到锁的进程在 `finally` 里删掉它，没拿到的进程不能删，否则会把别人的锁清掉。" },
      { type: "p", text: "这把锁只防同一台机器上的重叠运行。它不跨机器，进程如果被杀掉且 `finally` 没跑到，锁文件会留下。练习里遇到「已有一次运行」，先确认没有进程还在，再决定要不要删 `.lock`。" },
      {
        type: "callout",
        tone: "keep",
        title: "已存在的配置不要覆盖",
        text: "示例发现 config.json 就跳过。手改过的端口不会被下一次运行冲掉。真要更新配置，就另做一个明确的步骤，而不是偷偷重写。",
      },
    ],
    exercise: {
      prompt: "对同一个目录跑两次。然后手动创建 `.lock`，再跑第三次。看完之后删掉这把练习锁，确认第四次又恢复正常。",
      hint: "锁文件在你传入的目录里，不在脚本旁边。",
      solution: "第二次打印「没有新文件」。第三次退出码 2，`.lock` 的内容保持你写进去的字。删掉锁之后可以再次运行。",
    },
    quiz: [
      {
        q: "第二次运行还删除并重建 app 目录，会有什么问题？",
        choices: ["没有问题，结果一样", "目录里后来放进去的文件会被清掉", "退出码会自动变成 0"],
        answer: 1,
        why: "幂等是「再跑一次结果仍对」，不是「每次都恢复到空白」。",
      },
      {
        q: "没拿到锁的进程可以删除锁文件吗？",
        choices: ["可以，这样自己就能继续", "不可以，那是别人还在运行的标记", "只有退出码为 0 时可以"],
        answer: 1,
        why: "示例里拿不到锁就退出 2，并在 finally 之外不去 unlink。",
      },
      {
        q: "config.json 已存在时，示例会？",
        choices: ["用新内容覆盖", "跳过，不修改", "退出 1"],
        answer: 1,
        why: "跳过才能保住手改。输出会是「没有新文件」，如果目录也已经在。",
      },
    ],
  },
  {
    id: "http",
    title: "不会挂住的 HTTP",
    read: 16,
    practice: 25,
    summary: "每次请求都带超时，把 HTTP 错误和网络错误变成能打印的失败，并带上令牌头。",
    goals: ["用标准库发 GET 并设置 timeout", "区分 HTTP 状态和连接失败", "对着本机练习服务看到 200 和 401"],
    blocks: [
      { type: "p", text: "运维脚本里最常见的外部调用就是 HTTP：健康检查、工单、发布系统、云平台。第一件要加上的不是重试，而是超时。没有超时的请求会把整个巡检挂住。" },
      { type: "p", text: "`urllib` 随 Python 自带，适合把调用的形状看清楚。工作里更常见的是 `requests`，参数几乎一一对应。两种都要认得。" },
      codeBlock({
        filename: "http_health.py",
        code: httpHealth,
        run: "python3 http_health.py http://127.0.0.1:8765/health --token practice",
        output: "{\"status\": \"ok\"}\n\n不带 --token 时打印 HTTP 401，退出码 1。",
      }),
      codeBlock({
        filename: "tiny_health.py",
        code: tinyHealth,
        run: "python3 tiny_health.py",
        output: "http://127.0.0.1:8765/health\n\n这个进程会一直占用终端。另开一个终端再跑 http_health.py。",
      }),
      { type: "p", text: "练习服务接受任意非空 Bearer 令牌，用来确认请求头带上了。真实接口会核对令牌是不是那一个。401 在这里表示「没带令牌」。404 表示路径不对。" },
      codeBlock({
        lang: "python",
        filename: "用 requests 时的同一件事",
        code: requestsSnippet,
        download: null,
        output: "pip install requests 之后可以替换。timeout 仍要写。raise_for_status() 会让 4xx 和 5xx 变成异常。",
      }),
      {
        type: "callout",
        tone: "pit",
        title: "timeout 是秒",
        text: "urllib 和 requests 的 timeout 都是秒，可以写 3 或 3.0。别把它当成毫秒，否则 3000 会让失败的请求干等接近一小时。",
      },
    ],
    exercise: {
      prompt: "先启动 tiny_health.py。请求一次带令牌，一次不带，一次把路径改成 /missing。记下三个退出码。",
      hint: "路径错误也是 HTTP 错误，信息在标准输出，退出码是 1。",
      solution: "带令牌得到 JSON 和退出码 0。不带令牌是 HTTP 401，错误路径是 HTTP 404，两次都是退出码 1。",
    },
    quiz: [
      {
        q: "超时参数最先防的是什么？",
        choices: ["JSON 解析失败", "对端一直不响应，脚本停在那里", "令牌写进代码"],
        answer: 1,
        why: "超时把「等下去」变成一次可以报告的失败。",
      },
      {
        q: "练习服务返回 401，表示？",
        choices: ["机器磁盘满了", "请求没有带上非空 Bearer 令牌", "应该立刻重试十次"],
        answer: 1,
        why: "这是认证头的问题。下一课再讲哪些状态值得重试。401 不在其中。",
      },
      {
        q: "`requests` 版本里 `raise_for_status()` 的作用是？",
        choices: ["自动加令牌", "让 4xx 和 5xx 变成异常", "把超时改成毫秒"],
        answer: 1,
        why: "不调用它的话，500 也会安静地返回一个 response，你可能接着去解析错误页面。",
      },
    ],
  },
  {
    id: "config-layers",
    title: "配置分四层",
    read: 12,
    practice: 15,
    summary: "命令行优先，然后是环境变量、配置文件，最后才是默认值。",
    goals: ["写出四层优先级", "用环境变量覆盖文件里的并发数", "让非法数字变成明确的错误"],
    blocks: [
      { type: "p", text: "同一个 `workers`，可能出现在四个地方。如果不规定谁赢，脚本会在某台机器上悄悄用错并发。规定要短，而且每次都一样：命令行，环境变量，配置文件，默认值。" },
      codeBlock({
        filename: "config_layers.py",
        code: configLayers,
        run: "python3 config_layers.py",
        output: "workers=4 来自默认值",
      }),
      { type: "p", text: "命令行适合这一次的临时决定。环境变量适合这台机器或这次任务的密钥和差异，例如 `XUNZHAN_WORKERS=8`。配置文件适合可以提交的、不含密钥的团队默认值。代码里的默认值只是兜底。" },
      {
        type: "code",
        lang: "bash",
        filename: "终端",
        code: "XUNZHAN_WORKERS=3 python3 config_layers.py\npython3 config_layers.py --workers 8",
        output: "第一行会打印 workers=3 来自环境变量。\n第二行会打印 workers=8 来自命令行。",
        download: null,
      },
      { type: "p", text: "读到的值要转成整数。转不成，就抛出一个写给人看的 `RuntimeError`，而不是把一串 ValueError 栈直接甩出去。调用这个函数的命令行脚本可以再决定把它变成退出码 2。" },
    ],
    exercise: {
      prompt: "写一个 `workers.json`，内容是 `{\"workers\": 2}`。分别试：只用配置文件、加上环境变量、再加上 `--workers 5`。",
      hint: "命令是 `python3 config_layers.py --config workers.json`。",
      solution: "三者分别来自配置文件、环境变量、命令行，数值是 2、环境变量里的数、5。命令行一直赢。",
    },
    quiz: [
      {
        q: "环境变量和配置文件都给了 workers，用哪个？",
        choices: ["配置文件", "环境变量", "两个数的平均数"],
        answer: 1,
        why: "环境变量比文件更靠近这一次运行。",
      },
      {
        q: "哪一层适合放令牌？",
        choices: ["要提交的配置文件", "代码里的默认值", "环境变量或本机密钥管理"],
        answer: 2,
        why: "令牌会变，也会泄漏。它不属于源码，也不属于团队共享的默认配置。",
      },
      {
        q: "`workers` 读到 `fast` 时应该？",
        choices: ["当成 4", "报「必须是整数」", "当成 0"],
        answer: 1,
        why: "悄悄用默认值会把配置错误藏起来。明确失败更容易改。",
      },
    ],
  },
  {
    id: "retry",
    title: "哪些失败值得再试",
    read: 14,
    practice: 15,
    summary: "超时、连接失败、429 和 5xx 可以有限次再试。其余 4xx 停下来改请求。",
    goals: ["把「能不能重试」写成单独的判断", "用指数退避拉开每次等待", "看到 404 不会进入等待"],
    blocks: [
      { type: "p", text: "重试是为了扛住短暂的抖动，不是为了把错误请求多打几遍。先判断这一次失败有没有机会在下一秒变好。" },
      codeBlock({
        filename: "retry_call.py",
        code: retryCall,
        run: "python3 retry_call.py",
        output: "结果 ok  调用 3 次  等待 [0.2, 0.4]",
      }),
      { type: "p", text: "示例用一个会失败两次的假请求代替网络，所以你能看见等待序列：0.2 秒，然后 0.4 秒。这就是指数退避，每次把基础等待乘二。真接到 HTTP 时，把 `do_request` 换成上一课的 `fetch_json`，并让它在超时或 5xx 时把状态交回来。" },
      { type: "widget", name: "retry" },
      {
        type: "callout",
        tone: "keep",
        title: "429 要看 Retry-After",
        text: "对方如果在响应头里告诉你等多久，就按那个等。自己的退避只是没有这个头时的备用。重试次数仍然要有上限。",
      },
    ],
    exercise: {
      prompt: "在 `retry_call.py` 的 `flaky` 里把成功条件改成 `calls[\"n\"] < 5`，tries 保持 3。运行并读最后的异常。",
      hint: "三次都失败时，函数会在循环结束后抛错。",
      solution: "输出变成异常：重试 3 次后仍失败。等待列表里仍是两次间隔，因为第三次之后不再睡。",
    },
    quiz: [
      {
        q: "HTTP 404 应该？",
        choices: ["按指数退避重试", "停下来检查路径或资源", "当成 200"],
        answer: 1,
        why: "资源不存在不会因为多等 0.4 秒就出现。",
      },
      {
        q: "示例里两次等待为什么是 0.2 和 0.4？",
        choices: ["固定每次 0.4", "基础等待 0.2，第二次乘二", "随机数"],
        answer: 1,
        why: "第 n 次失败后的等待是 base_delay 乘 2 的 n-1 次方。第一次失败后是 0.2，第二次后是 0.4。",
      },
      {
        q: "超时为什么可以重试？",
        choices: ["超时说明令牌错了", "可能是一次抖动，下一次请求有机会完成", "标准库要求必须重试"],
        answer: 1,
        why: "前提是次数有限。无限重试会把一次故障放大成持续流量。",
      },
    ],
  },
  {
    id: "paging-client",
    title: "分页与小客户端",
    read: 14,
    practice: 20,
    summary: "顺着 cursor 把页面取完，并给页数一个上限。每个 API 动作收成一个函数。",
    goals: ["写出带 cursor 的 fetch_all", "在页数过多时停下来", "能画出一个只有三个函数的小客户端"],
    blocks: [
      { type: "p", text: "运维 API 很少一次返回全部主机或全部发布记录。常见的是 `page` 加 `per_page`，或者返回一个 `cursor`，你带着它要下一页。cursor 这种方式不用自己算页码，但你必须防止它永远不变。" },
      codeBlock({
        filename: "paged_fetch.py",
        code: pagedFetch,
        run: "python3 paged_fetch.py",
        output: "api worker cron",
      }),
      { type: "p", text: "示例没有真的打网络。`fetch_page` 接收上一次的 cursor，返回这一页的条目和下一页的 cursor。`None` 表示结束。`fetch_all` 不关心条目是机器还是工单，它只负责把页缝起来。" },
      { type: "p", text: "页数上限是保险丝。如果接口总是返回同一个 cursor，循环会永远转。超过 20 页就抛错，让人去看是不是没有前进。这个数字按你的数据量改，但一定要有。" },
      { type: "h", text: "收成小客户端" },
      { type: "p", text: "一个发布系统用三个函数就够起步：`get_health(env)`、`list_releases(env)`、`create_release(env, version)`。每个函数负责一条路径、自己的超时，并返回已经解析的字典或列表。调用方不直接碰 `urlopen`。令牌从环境变量读，在函数里放进请求头。" },
      {
        type: "callout",
        tone: "do",
        title: "请求之间留出间隔",
        text: "批量拉取时，在页与页之间睡一小段，或者遵守限流响应。一个紧的 for 循环可以把本来健康的接口打满。分页函数是加这个间隔的地方。",
      },
    ],
    exercise: {
      prompt: "给练习目录加第三页：让 `p2` 返回 cursor `p3`，再加 `p3` 返回最后一台机器和 `None`。运行并看打印。",
      hint: "catalog 是一个字典，键是 cursor。",
      solution: "打印会按页的顺序多出一个名字。如果第三页的 cursor 写成一个永远存在的值，并且把 limit_pages 调小，就会撞上限错误。",
    },
    quiz: [
      {
        q: "cursor 一直不变时，上限的作用是？",
        choices: ["把重复项自动去重", "让循环停下来，避免脚本不结束", "把超时改大"],
        answer: 1,
        why: "去重解决不了「永远还有下一页」这个控制问题。",
      },
      {
        q: "小客户端的一个函数应该？",
        choices: ["包住一条 API 动作并返回解析后的数据", "打印所有日志然后不返回", "同时创建发布和删除主机"],
        answer: 0,
        why: "一个函数一件事，调用方才好在巡检或发布脚本里复用。",
      },
      {
        q: "`fetch_all` 为什么不自己写死 URL？",
        choices: ["URL 不合法", "翻页和「怎么要到一页」是两件事", "标准库不支持 URL"],
        answer: 1,
        why: "把 `fetch_page` 传进来之后，翻页逻辑可以用假数据测试，也可以接真实 HTTP。",
      },
    ],
  },
  {
    id: "when-concurrent",
    title: "先算清要等多久",
    read: 10,
    practice: 10,
    summary: "并发用来重叠等待。先估算串行要多久，再决定要不要上线程或协程。",
    goals: ["区分等待 IO 和自己算个不停", "用机器数、单次等待和并发数估算耗时", "知道并发会把限流一起放大"],
    blocks: [
      { type: "p", text: "十台机器，每台健康检查要等 300 毫秒。一台接一台是 3 秒。四台一起等，大约是 3 轮，0.9 秒。这段时间大部分花在等网络，而不是花在 Python 把 JSON 读出来。" },
      { type: "p", text: "等待网络、磁盘、子进程，用线程或协程来重叠。自己把 CPU 算满的活，线程帮不上忙，那是多进程的题目。这门课的巡检、HTTP、采集都是等待型，所以只学线程池和协程。" },
      { type: "widget", name: "concurrency" },
      { type: "p", text: "估算假设每台一样慢，而且并发槽一直是满的。真实接口会限流。你把并发从 4 调到 40，计算出来的时间会很短，对端却可能开始返回 429。下一课先把线程池跑通，再在后面给它加上限。" },
      {
        type: "callout",
        tone: "keep",
        title: "先留一个串行版本",
        text: "并发出错时更难读。函数先写成「检查一台」，串行调用能跑通，再把调用方式换成线程池。检查逻辑本身不用为了并发重写。",
      },
    ],
    exercise: {
      prompt: "在估算器里设 20 台、每台 500 毫秒、同时 5 个。口算一遍，看和页面是否一致。",
      hint: "轮数是机器数除以并发，向上取整。",
      solution: "20 / 5 = 4 轮，每轮 500 毫秒，一共 2 秒。串行是 10 秒。",
    },
    quiz: [
      {
        q: "健康检查这种任务慢，主要慢在？",
        choices: ["Python 的 for 循环本身", "等待对端响应", "打印文字"],
        answer: 1,
        why: "所以重叠等待才有收益。",
      },
      {
        q: "把并发调得很大，估算时间变短之后还要担心？",
        choices: ["退出码不能是 0", "对端限流，真实时间反而变差", "字典不能在线程里创建"],
        answer: 1,
        why: "并发放大的是流量，不只是速度。",
      },
      {
        q: "检查一台机器的函数，最好？",
        choices: ["里面直接开线程", "只检查一台，由外面决定串行还是并行", "只能返回字符串"],
        answer: 1,
        why: "调用方式会变，检查规则应该稳定。",
      },
    ],
  },
  {
    id: "thread-pool",
    title: "线程池重叠等待",
    read: 16,
    practice: 20,
    summary: "用线程池同时等多台机器，再按清单顺序输出结果。",
    goals: ["用 ThreadPoolExecutor 提交检查", "用 as_completed 收回结果", "把完成顺序调回输入顺序"],
    blocks: [
      { type: "p", text: "线程池维护固定数量的工人。你把「检查这一台」提交进去，工人在等待时，别的工人可以检查别的机器。池子比每台机器新开一个线程好控：机器有 100 台，工人仍可以只有 4 个。" },
      codeBlock({
        filename: "thread_pool.py",
        code: threadPool,
        run: "python3 thread_pool.py",
        output: "api-1 OK\nworker-1 OK\ncron-1 OK\ncache-1 OK\n耗时 0.21 秒左右\n\n四台各等 0.2 秒。串行大约要 0.8 秒。小数点后会有少量偏差。",
      }),
      { type: "p", text: "`as_completed` 谁先做完先给你谁。人读报告时，顺序一会儿一变会很难和清单对照。所以先把结果放进字典，再按 `HOSTS` 原来的顺序取出来。" },
      { type: "p", text: "示例用 `time.sleep` 假装网络等待。把 `check_one` 的函数体换成 `fetch_json`，外面的线程池不用改。记得每次请求仍有自己的超时。" },
      {
        type: "callout",
        tone: "pit",
        title: "别把工人数写成机器数那么大",
        text: "后面的工具把并发限制在 1 到 32。这是教学用的护栏，避免一个参数把下游打满。你的环境如果更小，默认 4 就够。",
      },
    ],
    exercise: {
      prompt: "把 `run_checks` 的 workers 改成 1，再运行，看耗时。然后改回 4。",
      hint: "workers=1 就是串行，四次 0.2 秒会叠起来。",
      solution: "workers 为 1 时耗时大约 0.8 秒，顺序仍是清单顺序。改回 4 之后回到 0.2 秒多一点。",
    },
    quiz: [
      {
        q: "`as_completed` 的顺序是？",
        choices: ["和提交顺序一致", "谁先完成谁先返回", "按名字排序"],
        answer: 1,
        why: "所以示例又按原清单取了一次，报告顺序才稳定。",
      },
      {
        q: "四台各等 0.2 秒、4 个工人，耗时更接近？",
        choices: ["0.8 秒", "0.2 秒", "0.2 乘 4 再乘 4"],
        answer: 1,
        why: "四次等待叠在同一段时间里。还要加上一点调度开销。",
      },
      {
        q: "检查函数里已经有 timeout 时，线程池？",
        choices: ["可以去掉单次超时", "仍要保留单次超时，池子只决定同时等几路", "会把 timeout 乘以工人数"],
        answer: 1,
        why: "池子管并发度，超时管每一路最多等多久。两件都要。",
      },
    ],
  },
  {
    id: "asyncio",
    title: "用协程调度同步函数",
    read: 16,
    practice: 20,
    summary: "async 负责调度。已经写好的同步检查，用 asyncio.to_thread 放进事件循环。",
    goals: ["读懂 async def、await 和 gather", "用 to_thread 包住 time.sleep 或 requests", "避免在协程里直接 time.sleep"],
    blocks: [
      { type: "p", text: "协程是另一套调度：一个事件循环在很多个「可以暂停的函数」之间切换。函数执行到 `await` 就让出，循环去推别的函数。它很适合大量等待，但要求被等待的操作真的会让出控制权。" },
      { type: "p", text: "`requests` 和 `time.sleep` 不会让出。若在 `async def` 里直接调用它们，整个循环都会停住，别的协程也动不了。你已经有同步函数时，用 `asyncio.to_thread` 把它放到线程里，事件循环就能继续调度别的任务。" },
      codeBlock({
        filename: "async_inspect.py",
        code: asyncInspect,
        run: "python3 async_inspect.py",
        output: "api-1 OK\nworker-1 OK\ncron-1 OK\ncache-1 OK\n耗时 0.21 秒左右",
      }),
      { type: "p", text: "`asyncio.gather` 同时推进多件任务，并按你传入的顺序给出结果。这一点和线程池的 `as_completed` 不同，报告顺序天然稳定。" },
      { type: "p", text: "`asyncio.run` 是入口，只在普通函数 `main` 里调用一次。不要在已经运行的循环里再 `asyncio.run`。" },
      {
        type: "callout",
        tone: "pit",
        title: "协程里要等待，就 await asyncio.sleep",
        text: "演示延迟时写 `await asyncio.sleep(0.2)`。`time.sleep(0.2)` 会把事件循环冻住。to_thread 是给那些还不能改成异步库的函数准备的。",
      },
    ],
    exercise: {
      prompt: "把 `check_sync` 里的等待改成 0.5 秒，运行一次。再把 gather 改成一个普通 for 循环，在循环里 `await asyncio.to_thread(...)`，比较耗时。",
      hint: "for 循环里的 await 会等完这一台再开始下一台。",
      solution: "gather 仍接近 0.5 秒。改成循环 await 之后接近 2 秒，因为四次等待又变成串行了。并发来自「一起创建任务」，不是来自函数写成了 async。",
    },
    quiz: [
      {
        q: "在 async 函数里直接 `time.sleep` 会？",
        choices: ["只暂停这一个任务", "把整个事件循环停住", "自动变成 to_thread"],
        answer: 1,
        why: "time.sleep 不懂得把控制权交回去。",
      },
      {
        q: "`asyncio.gather` 返回结果的顺序？",
        choices: ["完成顺序", "与传入任务的顺序一致", "随机"],
        answer: 1,
        why: "这让报告可以按清单输出，不必再手工排序。",
      },
      {
        q: "已有一个用 requests 写的同步函数时，最省事的接法是？",
        choices: ["重写整个项目", "用 asyncio.to_thread 调用它", "去掉 timeout"],
        answer: 1,
        why: "检查逻辑保持原样，调度交给事件循环和线程。请求很多、要更细的连接控制时，再考虑专门的异步 HTTP 库。",
      },
    ],
  },
  {
    id: "bounded",
    title: "给并发加上限",
    read: 14,
    practice: 15,
    summary: "用信号量限制同时打出去的检查数，并保留每一路自己的失败。",
    goals: ["用 Semaphore 把同时运行的同步函数压到 N 个", "观察到四台、上限 2 时耗时大约翻倍", "说出总超时和单次超时分别管什么"],
    blocks: [
      { type: "p", text: "能并发之后，下一件要写死的是「最多同时几个」。信号量就是这么多把钥匙：任务开始前拿走一把，结束时归还。没有钥匙的任务在 `async with` 那里等。" },
      codeBlock({
        filename: "bounded_async.py",
        code: boundedAsync,
        run: "python3 bounded_async.py",
        output: "api-1 OK\nworker-1 OK\ncron-1 OK\ncache-1 OK\n耗时 0.42 秒左右\n\n上限 2，每台 0.2 秒，所以大约两轮。",
      }),
      { type: "p", text: "和线程池的 `max_workers` 是同一类旋钮，只是放在协程这边。巡检工具选择了线程池，因为检查函数是同步的；你在这里看到的是同一件事的协程写法。两个都要会读。" },
      { type: "p", text: "还差两层保护。单次检查要有超时，这样一把钥匙不会被一台失联的机器一直拿走。整批任务也可以有一个总超时，到点就把还没完成的记成 crit，而不是让值班的人干等。一台抛了异常，应该变成这台机器的失败记录，`gather` 可以配合每台自己的 try，避免一台拖垮整批。" },
      {
        type: "callout",
        tone: "keep",
        title: "失败隔离",
        text: "并发之后，异常会从工人线程或任务里冒出来。抓住它，写成这台主机的 crit，其余主机的结果照常收集。巡检命令里就是这样做的。",
      },
    ],
    exercise: {
      prompt: "把 `limit` 改成 1 和 4 各跑一次，记下耗时。不用改检查函数。",
      hint: "limit=1 接近四次等待相加，limit=4 接近一次等待。",
      solution: "大约 0.8 秒和 0.2 秒。顺序始终是清单顺序，因为 gather 会按传入顺序给结果。",
    },
    quiz: [
      {
        q: "信号量在这里限制的是？",
        choices: ["清单的长度", "同一时刻真正执行的检查数", "退出码的最大值"],
        answer: 1,
        why: "任务可以先创建，但只有拿到钥匙的才会进入 to_thread。",
      },
      {
        q: "四台、每台 0.2 秒、上限 2，耗时更接近？",
        choices: ["0.2 秒", "0.4 秒", "0.8 秒"],
        answer: 1,
        why: "两轮，每轮两台一起等。",
      },
      {
        q: "一台检查抛了异常时，更合适的处理是？",
        choices: ["让整个程序直接退出，不记录其余机器", "把这台记成 crit，其余照常收结果", "把异常吞掉，状态写成 ok"],
        answer: 1,
        why: "这和「巡检要继续」是同一条原则，只是失败发生在并发任务里面。",
      },
    ],
  },
];
