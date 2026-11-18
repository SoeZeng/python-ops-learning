import { useEffect, useState } from "react";
import { highlight } from "./highlight.js";
import { formatWhen } from "./progress.js";
import { cheats, glossary } from "./reference.js";
import { getLesson, lessonList, neighbors, nextLessonId, stageStats, stages, tools } from "./curriculum.js";
import { Widget } from "./widgets.jsx";

function Rich({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    return <span key={index}>{part}</span>;
  });
}

function CodeBlock({ block }) {
  const [copied, setCopied] = useState(false);
  const lines = block.code.split("\n").length;
  const [open, setOpen] = useState(lines <= 42);
  const nodes = highlight(block.code, block.lang);
  const download = block.download ? `${import.meta.env.BASE_URL}samples/${block.download}` : null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(block.code);
    } catch {
      const area = document.createElement("textarea");
      area.value = block.code;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <figure className="code-block">
      <figcaption className="code-bar">
        <span>{block.filename}</span>
        <span className="code-actions">
          <button type="button" onClick={copy}>{copied ? "已复制" : "复制"}</button>
          {download ? <a href={download} download>下载</a> : null}
        </span>
      </figcaption>
      <pre className={open ? undefined : "clamped"}>
        {nodes.map((node, index) => (
          <span key={index} className={node.type === "text" ? undefined : `token ${node.type}`}>{node.text}</span>
        ))}
      </pre>
      {lines > 42 ? (
        <div className="code-bar">
          <span>{lines} 行</span>
          <button type="button" onClick={() => setOpen((value) => !value)}>{open ? "收起" : "展开全文"}</button>
        </div>
      ) : null}
      {block.run || block.output ? (
        <figcaption className="code-foot">
          {block.run ? <span className="output-label">运行 {block.run}</span> : null}
          {block.output ? <span style={{ whiteSpace: "pre-wrap" }}>{block.output}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Blocks({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "p") return <p key={index}><Rich text={block.text} /></p>;
    if (block.type === "h") return <h2 key={index}>{block.text}</h2>;
    if (block.type === "ul") {
      return <ul key={index}>{block.items.map((item) => <li key={item}><Rich text={item} /></li>)}</ul>;
    }
    if (block.type === "ol") {
      return (
        <ol className="steps" key={index}>
          {block.items.map((item, itemIndex) => (
            <li key={item}><span className="n">{String(itemIndex + 1).padStart(2, "0")}</span><span><Rich text={item} /></span></li>
          ))}
        </ol>
      );
    }
    if (block.type === "callout") {
      return (
        <aside key={index} className={`callout ${block.tone || ""}`}>
          <p className="label">{block.title}</p>
          <p><Rich text={block.text} /></p>
        </aside>
      );
    }
    if (block.type === "table") {
      return (
        <div className="table-wrap" key={index}>
          <table>
            <caption>{block.caption}</caption>
            <thead>
              <tr>{block.columns.map((column) => <th key={column}>{column}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")}>{row.map((cell, cellIndex) => <td key={cellIndex}><Rich text={cell} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    if (block.type === "code") return <CodeBlock key={index} block={block} />;
    if (block.type === "widget") return <Widget key={index} name={block.name} />;
    return null;
  });
}

function Exercise({ exercise }) {
  const [hint, setHint] = useState(false);
  const [solution, setSolution] = useState(false);
  return (
    <section className="exercise">
      <h2>动手</h2>
      <p><Rich text={exercise.prompt} /></p>
      <div className="actions">
        <button type="button" className="secondary" onClick={() => setHint(true)}>看提示</button>
        <button type="button" className="secondary" onClick={() => setSolution(true)}>看一种做法</button>
      </div>
      {hint ? <p className="muted"><Rich text={exercise.hint} /></p> : null}
      {solution ? <p><Rich text={exercise.solution} /></p> : null}
    </section>
  );
}

function Quiz({ lesson, onScore }) {
  const [picked, setPicked] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const total = lesson.quiz.length;
  const answered = lesson.quiz.every((_, index) => picked[index] !== undefined);
  const correct = lesson.quiz.filter((item, index) => picked[index] === item.answer).length;

  return (
    <section className="quiz">
      <h2>自测</h2>
      {lesson.quiz.map((item, index) => (
        <fieldset key={item.q} className="quiz-item">
          <legend><Rich text={item.q} /></legend>
          <div className="choices">
            {item.choices.map((choice, choiceIndex) => {
              let mark = "";
              if (submitted && choiceIndex === item.answer) mark = "right";
              else if (submitted && picked[index] === choiceIndex) mark = "wrong";
              return (
                <label key={choice} className={mark}>
                  <input
                    type="radio"
                    name={`${lesson.id}-${index}`}
                    checked={picked[index] === choiceIndex}
                    onChange={() => setPicked({ ...picked, [index]: choiceIndex })}
                  />
                  <span><Rich text={choice} /></span>
                </label>
              );
            })}
          </div>
          {submitted ? <p className="why"><Rich text={item.why} /></p> : null}
        </fieldset>
      ))}
      <div className="actions">
        <button
          type="button"
          disabled={!answered}
          onClick={() => {
            setSubmitted(true);
            onScore(correct, total);
          }}
        >
          对答案
        </button>
        {submitted ? (
          <button
            type="button"
            className="secondary"
            onClick={() => {
              setSubmitted(false);
              setPicked({});
            }}
          >
            再做一次
          </button>
        ) : null}
        {submitted ? <span>答对 {correct} / {total}</span> : null}
      </div>
    </section>
  );
}

export function Shell({ route, progress, children }) {
  const [open, setOpen] = useState(false);
  const done = progress.done || {};
  useEffect(() => {
    setOpen(false);
  }, [route.name, route.id]);

  const current = (name, id) => (route.name === name && (!id || route.id === id) ? "page" : undefined);

  return (
    <div className="shell">
      <a className="skip" href="#content">跳到正文</a>
      <aside className={open ? "sidebar open" : "sidebar"}>
        <a className="brand" href="#/">
          <span className="lamp" aria-hidden="true" />
          <span>
            <strong>巡栈</strong>
            <small>PYTHON OPS NOTES</small>
          </span>
        </a>
        <button type="button" className="menu-toggle secondary" onClick={() => setOpen((value) => !value)}>
          {open ? "收起目录" : "打开目录"}
        </button>
        <div className="nav-body">
          <nav className="side-links" aria-label="栏目">
            <a href="#/" aria-current={current("home")}>起点</a>
            <a href="#/path" aria-current={current("path")}>路径</a>
            <a href="#/tools" aria-current={current("tools")}>四件工具</a>
            <a href="#/cheatsheet" aria-current={current("cheatsheet")}>速查</a>
            <a href="#/glossary" aria-current={current("glossary")}>词表</a>
          </nav>
          <nav className="lesson-nav" aria-label="课程">
            {stages.map((stage) => (
              <div key={stage.id}>
                <p className="stage-label">{stage.index} {stage.title}</p>
                {stage.lessonIds.map((id) => {
                  const lesson = getLesson(id);
                  const number = lessonList.findIndex((item) => item.id === id) + 1;
                  return (
                    <a key={id} href={`#/lesson/${id}`} aria-current={current("lesson", id)}>
                      <span>{String(number).padStart(2, "0")} {lesson.title}</span>
                      <span className={done[id] ? "dot on" : "dot"} aria-label={done[id] ? "已完成" : "未完成"} />
                    </a>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      </aside>
      <div className="main">
        <main id="content" className="sheet">{children}</main>
        <p className="footer-note">示例是教学代码。只对你有权操作的目录、账号和机器使用。学习记录保存在这台浏览器里。</p>
      </div>
    </div>
  );
}

export function Home({ progress }) {
  const doneCount = lessonList.filter((lesson) => progress.done[lesson.id]).length;
  const nextId = nextLessonId(progress.done);
  const next = getLesson(nextId);
  const stats = stageStats(progress.done);
  const zip = `${import.meta.env.BASE_URL}xunzhan-samples.zip`;

  return (
    <>
      <p className="kicker">从会写基础语法，到交出能值一夜班的小工具</p>
      <h1>巡栈</h1>
      <p className="lead">这条路径接住五件事：自动化脚本、运维里常见的 API、用线程和协程缩短等待、把它们收成自己的小工具链，以及用 SRE 的方式观察这些工具。</p>
      <div className="actions">
        <a className="button" href={`#/lesson/${next.id}`}>{doneCount ? `继续：${next.title}` : "从第 1 课开始"}</a>
        <a className="button secondary" href="#/tools">先看四件工具</a>
        <a className="button secondary" href={zip}>下载全部示例</a>
      </div>
      <p className="muted">已标记跑通 {doneCount} / {lessonList.length} 课。需要 Python 3.10 或更高，不需要先准备一批服务器。</p>

      <h2>你想学的，落在哪</h2>
      <div className="goal-list">
        <article className="goal"><b>自动化脚本</b><span>批量处理、巡检分级、失败时继续还是停下、重复执行也安全。</span></article>
        <article className="goal"><b>API 调用</b><span>超时、令牌、配置分层、重试、分页，并把接口收成小函数。</span></article>
        <article className="goal"><b>线程与协程</b><span>先估算串行要等多久，再用线程池或协程重叠等待，并给并发加上限。</span></article>
        <article className="goal"><b>小工具链</b><span>一个命令入口，四件工具：巡检、部署、发布、采集。</span></article>
        <article className="goal"><b>SRE / 可观测性</b><span>错误预算、三种信号、写得清第一步的告警，再把工具串成一条路径。</span></article>
      </div>

      <h2>每次只做三件事</h2>
      <ol className="rule-list">
        <li><span>原样跑通示例，看标准输出、标准错误和退出码。</span></li>
        <li><span>只改一个数字或参数，确认输出跟着变。</span></li>
        <li><span>做自测。答错就回到那一节，再决定要不要点「我跑通了」。</span></li>
      </ol>

      <h2>八段路径</h2>
      <div className="stage-board">
        {stats.map((stage) => (
          <a className="stage-card" key={stage.id} href={`#/lesson/${stage.lessonIds[0]}`}>
            <span className="index-no">{stage.index}</span>
            <span>
              <strong>{stage.title}</strong>
              <span className="muted" style={{ display: "block" }}>{stage.blurb}</span>
              <span className="track" aria-hidden="true"><span style={{ width: `${(stage.finished / stage.total) * 100}%` }} /></span>
            </span>
            <span className="muted">{stage.finished}/{stage.total}</span>
          </a>
        ))}
      </div>
    </>
  );
}

export function PathPage({ progress, onReset }) {
  const [query, setQuery] = useState("");
  const [armed, setArmed] = useState(false);
  const needle = query.trim();
  const visible = lessonList.filter((lesson) => {
    if (!needle) return true;
    return `${lesson.title} ${lesson.summary}`.includes(needle);
  });

  return (
    <>
      <p className="kicker">27 课</p>
      <h1>学习路径</h1>
      <div className="path-tools">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="筛选标题或摘要" aria-label="筛选课程" />
      </div>
      {stages.map((stage) => {
        const rows = visible.filter((lesson) => stage.lessonIds.includes(lesson.id));
        if (!rows.length) return null;
        return (
          <section key={stage.id}>
            <h2>{stage.index} {stage.title}</h2>
            {rows.map((lesson) => {
              const number = lessonList.findIndex((item) => item.id === lesson.id) + 1;
              const quiz = progress.quiz[lesson.id];
              const when = formatWhen(progress.done[lesson.id]);
              return (
                <a className="lesson-row" key={lesson.id} href={`#/lesson/${lesson.id}`}>
                  <span className="index-no">{String(number).padStart(2, "0")}</span>
                  <span>
                    <b>{lesson.title}</b>
                    <small style={{ display: "block" }}>{lesson.summary}</small>
                  </span>
                  <small>
                    {progress.done[lesson.id] ? `已跑通 ${when}` : "未标记"}
                    {quiz ? ` · 自测 ${quiz.correct}/${quiz.total}` : ""}
                  </small>
                </a>
              );
            })}
          </section>
        );
      })}
      <div className="actions">
        {armed ? (
          <button type="button" onClick={onReset}>确认清除这台浏览器里的记录</button>
        ) : (
          <button type="button" className="secondary" onClick={() => setArmed(true)}>清除学习记录</button>
        )}
      </div>
    </>
  );
}

export function LessonPage({ id, progress, onDone, onScore }) {
  const lesson = getLesson(id);
  if (!lesson) {
    return (
      <>
        <h1>没有这一课</h1>
        <p><a href="#/path">回到路径</a></p>
      </>
    );
  }
  const place = neighbors(id);
  const done = Boolean(progress.done[id]);
  return (
    <article className="prose">
      <p className="kicker">{place.stage.index} {place.stage.title} · 第 {String(place.number).padStart(2, "0")} 课</p>
      <h1>{lesson.title}</h1>
      <p className="lesson-meta">阅读大约 {lesson.read} 分钟 · 动手大约 {lesson.practice} 分钟</p>
      <p>{lesson.summary}</p>
      <h2>学完你可以</h2>
      <ul>{lesson.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
      <Blocks blocks={lesson.blocks} />
      <Exercise exercise={lesson.exercise} />
      <Quiz lesson={lesson} onScore={(correct, total) => onScore(lesson.id, correct, total)} />
      <div className="actions">
        <button type="button" onClick={() => onDone(lesson.id)}>{done ? "取消完成标记" : "我跑通了这一课"}</button>
        {progress.quiz[lesson.id] ? (
          <span className="muted">最近自测 {progress.quiz[lesson.id].correct}/{progress.quiz[lesson.id].total}</span>
        ) : null}
      </div>
      <nav className="pager">
        {place.prev ? (
          <a href={`#/lesson/${place.prev.id}`}><small>上一课</small>{place.prev.title}</a>
        ) : <span />}
        {place.next ? (
          <a href={`#/lesson/${place.next.id}`}><small>下一课</small>{place.next.title}</a>
        ) : <span />}
      </nav>
    </article>
  );
}

export function ToolsPage() {
  const zip = `${import.meta.env.BASE_URL}xunzhan-samples.zip`;
  return (
    <article className="prose">
      <p className="kicker">四件可以留下的工具</p>
      <h1>小工具链</h1>
      <p>在 <code>samples</code> 目录运行。四个子命令共用退出码：0 没有严重问题，1 需要处理，2 是用法或路径不对。</p>
      <div className="actions">
        <a className="button" href={zip}>下载全部示例</a>
        <a className="button secondary" href="#/lesson/from-script-to-cli">从命令入口那课看起</a>
      </div>
      <div className="tool-grid">
        {tools.map((tool) => (
          <a className="tool-card" key={tool.id} href={`#/lesson/${tool.lesson}`}>
            <span>{tool.cmd}</span>
            <h3>{tool.name}</h3>
            <p>{tool.text}</p>
          </a>
        ))}
      </div>
      <h2>一条路径</h2>
      <ol className="flow">
        <li><strong>hosts.json</strong>你自己写的机器和事实。工具不扫描网段。</li>
        <li><strong>inspect</strong>有严重项就先停下发布的念头。</li>
        <li><strong>deploy</strong>在专用目录准备环境，失败只收回这次创建的文件。</li>
        <li><strong>publish</strong>切换 CURRENT。健康检查失败时指针回到上一版，现场留着。</li>
        <li><strong>collect</strong>把指标按行追加到文件。</li>
        <li><strong>judge</strong>只在需要行动时开口，并写上第一步。</li>
      </ol>
      <h2>这套工具不做什么</h2>
      <ul>
        <li>不扫描网段，不猜测主机。</li>
        <li>不保存令牌。令牌由你放在环境变量里。</li>
        <li>不在过浅的目录上创建或删除文件。</li>
      </ul>
    </article>
  );
}

export function GlossaryPage() {
  return (
    <article>
      <p className="kicker">用到再查</p>
      <h1>词表</h1>
      <div className="goal-list">
        {glossary.map((item) => (
          <article key={item.term} className="term">
            <h2 style={{ margin: 0, fontSize: "1.35rem" }}>{item.term}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </article>
  );
}

export function CheatsheetPage() {
  return (
    <article>
      <p className="kicker">写脚本时回来看</p>
      <h1>速查</h1>
      <p>这些片段都只用标准库。完整脚本在各课里，可以下载后直接运行。</p>
      {cheats.map((item) => (
        <section key={item.title} className="cheat">
          <h2>{item.title}</h2>
          <pre>{item.code}</pre>
        </section>
      ))}
    </article>
  );
}
