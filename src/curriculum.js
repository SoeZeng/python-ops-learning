import { part1 } from "./lessons/part1.js";
import { part2 } from "./lessons/part2.js";

export const stages = [
  { id: "start", index: "00", title: "先把路看清", blurb: "确认基础和练法", lessonIds: ["how-to-learn"] },
  { id: "bridge", index: "01", title: "把基础用在脚本里", blurb: "结果、日志、演习", lessonIds: ["check-result", "script-shape", "dry-run"] },
  { id: "auto", index: "02", title: "自动化任务", blurb: "批量、分级、停与继续、幂等", lessonIds: ["batch", "inspect-levels", "stop-or-continue", "idempotent"] },
  { id: "api", index: "03", title: "调用 API", blurb: "超时、配置、重试、分页", lessonIds: ["http", "config-layers", "retry", "paging-client"] },
  { id: "concurrent", index: "04", title: "线程与协程", blurb: "估算、线程池、协程、上限", lessonIds: ["when-concurrent", "thread-pool", "asyncio", "bounded"] },
  { id: "toolchain", index: "05", title: "收成工具链", blurb: "命令、报告、共用骨架", lessonIds: ["from-script-to-cli", "logs-and-json", "shared-skeleton"] },
  { id: "projects", index: "06", title: "四件小工具", blurb: "巡检、部署、发布、采集", lessonIds: ["tool-inspect", "tool-deploy", "tool-publish", "tool-collect"] },
  { id: "sre", index: "07", title: "SRE 与可观测性", blurb: "预算、信号、告警、串起来", lessonIds: ["slo", "three-signals", "alerts", "one-path"] },
];

export const tools = [
  { id: "inspect", name: "批量巡检", lesson: "tool-inspect", cmd: "python3 -m xunzhan inspect", text: "按你写的清单给出分级报告。有严重项时退出码是 1。" },
  { id: "deploy", name: "环境部署", lesson: "tool-deploy", cmd: "python3 -m xunzhan deploy --root …", text: "按步骤准备目录和配置。失败时只收回这次创建的文件。" },
  { id: "publish", name: "小型发布", lesson: "tool-publish", cmd: "python3 -m xunzhan publish --root …", text: "切换版本指针。健康检查失败时把指针拨回，现场留着。" },
  { id: "collect", name: "指标采集", lesson: "tool-collect", cmd: "python3 -m xunzhan collect --out …", text: "把磁盘和负载按 JSON Lines 追加写入，默认只采有限次。" },
];

const lessons = {};
for (const lesson of [...part1, ...part2]) {
  if (lessons[lesson.id]) throw new Error(`重复的课程 ${lesson.id}`);
  lessons[lesson.id] = lesson;
}

const listed = stages.flatMap((stage) => stage.lessonIds);
const known = new Set(listed);
if (known.size !== listed.length) throw new Error("阶段里有重复课程");
for (const id of listed) {
  if (!lessons[id]) throw new Error(`缺少课程 ${id}`);
}
for (const id of Object.keys(lessons)) {
  if (!known.has(id)) throw new Error(`课程没有放进阶段 ${id}`);
  const lesson = lessons[id];
  lesson.quiz.forEach((item, index) => {
    if (item.answer < 0 || item.answer >= item.choices.length) {
      throw new Error(`${id} 的第 ${index + 1} 题答案越界`);
    }
  });
}

export const lessonList = listed.map((id) => lessons[id]);

export function getLesson(id) {
  return lessons[id] || null;
}

export function neighbors(id) {
  const index = lessonList.findIndex((lesson) => lesson.id === id);
  if (index < 0) return { prev: null, next: null, number: 0, stage: null };
  return {
    prev: lessonList[index - 1] || null,
    next: lessonList[index + 1] || null,
    number: index + 1,
    stage: stages.find((stage) => stage.lessonIds.includes(id)) || null,
  };
}

export function nextLessonId(done) {
  const pending = lessonList.find((lesson) => !done[lesson.id]);
  return (pending || lessonList[lessonList.length - 1]).id;
}

export function stageStats(done) {
  return stages.map((stage) => {
    const finished = stage.lessonIds.filter((id) => done[id]).length;
    return { ...stage, total: stage.lessonIds.length, finished };
  });
}

export { lessons };
