import { useMemo, useState } from "react";

function round(value, digits) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function formatDuration(ms) {
  if (ms >= 10000) return `${Math.round(ms / 1000)} 秒`;
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)} 秒`;
  return `${Math.round(ms)} 毫秒`;
}

export function Widget({ name }) {
  if (name === "concurrency") return <ConcurrencyLab />;
  if (name === "retry") return <RetryLab />;
  if (name === "budget") return <BudgetLab />;
  if (name === "release") return <ReleaseLab />;
  if (name === "inspect") return <InspectLab />;
  return null;
}

function ConcurrencyLab() {
  const [hosts, setHosts] = useState(12);
  const [latency, setLatency] = useState(300);
  const [workers, setWorkers] = useState(4);
  const serial = hosts * latency;
  const parallel = Math.ceil(hosts / Math.max(workers, 1)) * latency;
  const saved = serial - parallel;

  return (
    <section className="lab">
      <div className="lab-head">
        <p className="kicker">估算</p>
        <h3>串行要等多久</h3>
      </div>
      <div className="lab-grid">
        <label>
          机器数 {hosts}
          <input type="range" min="1" max="40" value={hosts} onChange={(event) => setHosts(Number(event.target.value))} />
        </label>
        <label>
          每台等待 {latency} 毫秒
          <input type="range" min="100" max="2000" step="100" value={latency} onChange={(event) => setLatency(Number(event.target.value))} />
        </label>
        <label>
          同时进行 {workers}
          <input type="range" min="1" max="20" value={workers} onChange={(event) => setWorkers(Number(event.target.value))} />
        </label>
      </div>
      <div className="bars" aria-label="耗时对比">
        <div>
          <span>一台接一台</span>
          <div className="bar-track">
            <div className="bar-fill serial" style={{ width: "100%" }} />
          </div>
          <strong>{formatDuration(serial)}</strong>
        </div>
        <div>
          <span>{workers} 路一起等</span>
          <div className="bar-track">
            <div className="bar-fill parallel" style={{ width: `${Math.max(4, (parallel / serial) * 100)}%` }} />
          </div>
          <strong>{formatDuration(parallel)}</strong>
        </div>
      </div>
      <p className="lab-note">
        少等约 {formatDuration(saved)}。这是按每台等待一样久、并发槽一直占满来估算的。接口如果限流，真实耗时会被拉长。
      </p>
    </section>
  );
}

const RETRY_CASES = [
  { id: "timeout", title: "连接超时", retry: true, why: "没有拿到明确拒绝。限次数再试，有机会是网络抖动。" },
  { id: "refused", title: "连接被拒绝", retry: true, why: "对端可能正在重启。次数要有上限。" },
  { id: "500", title: "HTTP 500", retry: true, why: "服务端自己失败了，过一小会儿可能恢复。" },
  { id: "429", title: "HTTP 429", retry: true, why: "对方要求慢下来。等待时优先遵守 Retry-After。" },
  { id: "404", title: "HTTP 404", retry: false, why: "资源不存在。同一个地址再请求，结果还是不存在。" },
  { id: "401", title: "HTTP 401", retry: false, why: "令牌不被接受。先更换令牌，再发下一次。" },
  { id: "400", title: "HTTP 400", retry: false, why: "请求本身不合法。先改请求内容。" },
];

function RetryLab() {
  const [picks, setPicks] = useState({});
  const [shown, setShown] = useState(false);
  const answered = RETRY_CASES.every((item) => picks[item.id]);
  const correct = RETRY_CASES.filter((item) => picks[item.id] === (item.retry ? "yes" : "no")).length;

  return (
    <section className="lab">
      <div className="lab-head">
        <p className="kicker">判断</p>
        <h3>这一次要不要再试</h3>
      </div>
      <ul className="retry-list">
        {RETRY_CASES.map((item) => {
          const picked = picks[item.id];
          const expected = item.retry ? "yes" : "no";
          const state = shown && picked ? (picked === expected ? "right" : "wrong") : "";
          return (
            <li key={item.id} className={state}>
              <p>{item.title}</p>
              <div className="segmented">
                <button type="button" aria-pressed={picked === "yes"} onClick={() => setPicks({ ...picks, [item.id]: "yes" })}>
                  再试
                </button>
                <button type="button" aria-pressed={picked === "no"} onClick={() => setPicks({ ...picks, [item.id]: "no" })}>
                  停
                </button>
              </div>
              {shown ? <p className="why">{item.why}</p> : null}
            </li>
          );
        })}
      </ul>
      <div className="lab-actions">
        <button type="button" disabled={!answered} onClick={() => setShown(true)}>
          对答案
        </button>
        {shown ? <span>答对 {correct} / {RETRY_CASES.length}</span> : null}
      </div>
    </section>
  );
}

function BudgetLab() {
  const [total, setTotal] = useState(1000000);
  const [failed, setFailed] = useState(200);
  const [slo, setSlo] = useState(99.9);
  const report = useMemo(() => {
    if (!Number.isFinite(total) || !Number.isFinite(failed) || !Number.isFinite(slo)) return null;
    if (total < 0 || failed < 0 || failed > total || slo <= 0 || slo > 100) return null;
    const allowed = round(total * (1 - slo / 100), 4);
    const remaining = round(allowed - failed, 4);
    const burn = allowed === 0 ? (failed === 0 ? 0 : Infinity) : failed / allowed;
    return { allowed, remaining, burn };
  }, [total, failed, slo]);

  const width = report && report.allowed > 0 ? Math.min(100, (failed / report.allowed) * 100) : failed > 0 ? 100 : 0;

  return (
    <section className="lab">
      <div className="lab-head">
        <p className="kicker">计算</p>
        <h3>这段时间还剩多少失败额度</h3>
      </div>
      <div className="preset-row">
        <button type="button" onClick={() => { setTotal(1000000); setFailed(200); setSlo(99.9); }}>
          还宽裕
        </button>
        <button type="button" onClick={() => { setTotal(1000000); setFailed(2400); setSlo(99.9); }}>
          已经超支
        </button>
      </div>
      <div className="lab-grid">
        <label>
          总请求
          <input type="number" min="0" value={total} onChange={(event) => setTotal(Number(event.target.value))} />
        </label>
        <label>
          已失败
          <input type="number" min="0" value={failed} onChange={(event) => setFailed(Number(event.target.value))} />
        </label>
        <label>
          SLO（%）
          <input type="number" min="0.1" max="100" step="0.1" value={slo} onChange={(event) => setSlo(Number(event.target.value))} />
        </label>
      </div>
      {report ? (
        <>
          <div className="bar-track budget">
            <div className={report.remaining < 0 ? "bar-fill over" : "bar-fill parallel"} style={{ width: `${width}%` }} />
          </div>
          <dl className="stats">
            <div>
              <dt>允许失败</dt>
              <dd>{formatCount(report.allowed)}</dd>
            </div>
            <div>
              <dt>剩余</dt>
              <dd>{formatCount(report.remaining)}</dd>
            </div>
            <div>
              <dt>已烧掉</dt>
              <dd>{Number.isFinite(report.burn) ? `${(report.burn * 100).toFixed(1)}%` : "没有额度"}</dd>
            </div>
          </dl>
          <p className="lab-note">
            {report.remaining < 0
              ? "额度已经用完。接下来优先稳住成功率，再考虑有风险的发布。"
              : "额度还在。发布可以继续，同时把失败数记进同一扇窗口。"}
          </p>
        </>
      ) : (
        <p className="lab-note">失败次数需要落在 0 和总请求之间，SLO 取 0 到 100 之间。</p>
      )}
    </section>
  );
}

function formatCount(value) {
  if (Number.isInteger(value)) return String(value);
  const rounded = round(value, 1);
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function ReleaseLab() {
  const fresh = () => ({
    releases: ["1.2.0", "1.3.0"],
    current: "1.3.0",
    log: ["练习环境已有 1.2.0 和 1.3.0，CURRENT 指向 1.3.0。"],
    code: null,
  });
  const [state, setState] = useState(fresh);
  const [version, setVersion] = useState("1.4.0");
  const [env, setEnv] = useState("staging");
  const [yes, setYes] = useState(false);
  const [failHealth, setFailHealth] = useState(false);

  function publish(event) {
    event.preventDefault();
    const nextVersion = version.trim();
    setState((prev) => {
      if (env === "prod" && !yes) {
        return { ...prev, code: 2, log: ["生产环境需要明确确认。指针保持不动。"] };
      }
      if (!/^\d+\.\d+\.\d+$/.test(nextVersion)) {
        return { ...prev, code: 2, log: ["版本号需要形如 1.4.0。指针保持不动。"] };
      }
      if (prev.releases.includes(nextVersion)) {
        return { ...prev, code: 2, log: [`版本 ${nextVersion} 已经存在，拒绝覆盖。`] };
      }
      const releases = [...prev.releases, nextVersion];
      const log = [
        `复制制品到 releases/${nextVersion}`,
        `记住上一版本 ${prev.current || "无"}`,
        `CURRENT 改为 ${nextVersion}`,
      ];
      if (failHealth) {
        log.push("健康检查失败");
        log.push(`回滚指针到 ${prev.current || "无"}，目录 ${nextVersion} 留着排查`);
        return { releases, current: prev.current, log, code: 1 };
      }
      log.push(`已发布 ${nextVersion}`);
      return { releases, current: nextVersion, log, code: 0 };
    });
  }

  const tree = ["releases/", ...state.releases.map((item) => `  ${item}/${item === state.current ? "    ← 指针" : ""}`), `CURRENT  ${state.current || "无"}`].join("\n");

  return (
    <section className="lab">
      <div className="lab-head">
        <p className="kicker">演习</p>
        <h3>切换版本指针</h3>
      </div>
      <form onSubmit={publish} className="release-form">
        <label>
          版本
          <input value={version} onChange={(event) => setVersion(event.target.value)} />
        </label>
        <label>
          环境
          <select value={env} onChange={(event) => setEnv(event.target.value)}>
            <option value="staging">staging</option>
            <option value="prod">prod</option>
          </select>
        </label>
        <label className="check">
          <input type="checkbox" checked={yes} onChange={(event) => setYes(event.target.checked)} />
          已确认生产变更
        </label>
        <label className="check">
          <input type="checkbox" checked={failHealth} onChange={(event) => setFailHealth(event.target.checked)} />
          健康检查失败
        </label>
        <div className="lab-actions">
          <button type="submit">发布</button>
          <button type="button" className="secondary" onClick={() => setState(fresh())}>
            重置环境
          </button>
        </div>
      </form>
      <div className="split-preview">
        <pre>{tree}</pre>
        <div>
          {state.code === null ? null : <p className={`exitcode code-${state.code}`}>退出码 {state.code}</p>}
          <ol className="run-log">
            {state.log.map((line, index) => (
              <li key={`${index}-${line}`}>{line}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const INSPECT_START = [
  { name: "api-1", disk: 71, heartbeat: 12, limit: 60 },
  { name: "worker-1", disk: 84, heartbeat: 480, limit: 120 },
  { name: "cron-1", disk: 93, heartbeat: 45, limit: 60 },
];

function diskStatus(value, warn, crit) {
  if (value >= crit) return "crit";
  if (value >= warn) return "warn";
  return "ok";
}

function heartbeatStatus(age, limit) {
  if (limit <= 0) return "crit";
  if (age >= limit) return "crit";
  if (age >= limit * 0.7) return "warn";
  return "ok";
}

function worst(left, right) {
  const order = { ok: 0, warn: 1, crit: 2 };
  return order[left] >= order[right] ? left : right;
}

function suggestionFor(kind, status) {
  if (status === "ok") return "";
  if (kind === "disk" && status === "crit") return "先清理或扩容，再继续发布";
  if (kind === "disk") return "安排清理，发布前再看一眼";
  if (status === "crit") return "先确认进程是否还在";
  return "心跳偏旧，看一眼采集是否延迟";
}

function InspectLab() {
  const [hosts, setHosts] = useState(INSPECT_START);
  const [warn, setWarn] = useState(80);
  const [crit, setCrit] = useState(90);
  const [report, setReport] = useState(null);

  function update(index, field, value) {
    setHosts((current) => current.map((host, hostIndex) => (hostIndex === index ? { ...host, [field]: value } : host)));
  }

  function run(event) {
    event.preventDefault();
    if (!(crit > warn)) {
      setReport({ error: "严重阈值需要高于警告阈值。" });
      return;
    }
    const rows = hosts.map((host) => {
      const diskState = diskStatus(host.disk, warn, crit);
      const heartbeatState = heartbeatStatus(host.heartbeat, host.limit);
      return { ...host, diskState, heartbeatState, status: worst(diskState, heartbeatState) };
    });
    const exitCode = rows.some((row) => row.status === "crit") ? 1 : 0;
    setReport({ rows, exitCode });
  }

  return (
    <section className="lab">
      <div className="lab-head">
        <p className="kicker">演习</p>
        <h3>三台机器，两道阈值</h3>
      </div>
      <form onSubmit={run}>
        <div className="lab-grid">
          <label>
            磁盘警告 %
            <input type="number" value={warn} onChange={(event) => setWarn(Number(event.target.value))} />
          </label>
          <label>
            磁盘严重 %
            <input type="number" value={crit} onChange={(event) => setCrit(Number(event.target.value))} />
          </label>
        </div>
        <div className="host-table">
          {hosts.map((host, index) => (
            <div key={host.name} className="host-edit">
              <strong>{host.name}</strong>
              <label>
                磁盘 %
                <input type="number" value={host.disk} onChange={(event) => update(index, "disk", Number(event.target.value))} />
              </label>
              <label>
                心跳秒
                <input type="number" value={host.heartbeat} onChange={(event) => update(index, "heartbeat", Number(event.target.value))} />
              </label>
              <label>
                上限秒
                <input type="number" value={host.limit} onChange={(event) => update(index, "limit", Number(event.target.value))} />
              </label>
            </div>
          ))}
        </div>
        <div className="lab-actions">
          <button type="submit">运行巡检</button>
          <button
            type="button"
            className="secondary"
            onClick={() => {
              setHosts(INSPECT_START);
              setWarn(80);
              setCrit(90);
              setReport(null);
            }}
          >
            恢复练习数据
          </button>
        </div>
      </form>
      {report?.error ? <p className="lab-note">{report.error}</p> : null}
      {report?.rows ? (
        <>
          <p className={`exitcode code-${report.exitCode}`}>退出码 {report.exitCode}</p>
          <ul className="inspect-result">
            {report.rows.map((row) => (
              <li key={row.name}>
                <div className="result-line">
                  <strong>{row.name}</strong>
                  <Status value={row.status} />
                </div>
                <p>
                  <Status value={row.diskState} /> 磁盘 已用 {Number(row.disk).toFixed(1)}%
                  {suggestionFor("disk", row.diskState) ? ` · ${suggestionFor("disk", row.diskState)}` : ""}
                </p>
                <p>
                  <Status value={row.heartbeatState} /> 心跳 {row.heartbeat} 秒，上限 {row.limit} 秒
                  {suggestionFor("heartbeat", row.heartbeatState) ? ` · ${suggestionFor("heartbeat", row.heartbeatState)}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}

function Status({ value }) {
  const label = value === "ok" ? "OK" : value === "warn" ? "WARN" : "CRIT";
  return <span className={`pill ${value}`}>{label}</span>;
}
