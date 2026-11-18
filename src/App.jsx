import { useEffect, useState } from "react";
import { getLesson } from "./curriculum.js";
import { CheatsheetPage, GlossaryPage, Home, LessonPage, PathPage, Shell, ToolsPage } from "./pages.jsx";
import { useProgress } from "./progress.js";

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "path") return { name: "path" };
  if (parts[0] === "tools") return { name: "tools" };
  if (parts[0] === "glossary") return { name: "glossary" };
  if (parts[0] === "cheatsheet") return { name: "cheatsheet" };
  if (parts[0] === "lesson" && parts[1]) return { name: "lesson", id: decodeURIComponent(parts[1]) };
  return { name: "missing" };
}

export default function App() {
  const [route, setRoute] = useState(parseHash);
  const { progress, markDone, saveQuiz, reset } = useProgress();

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const lesson = route.name === "lesson" ? getLesson(route.id) : null;
    const titles = {
      home: "巡栈",
      path: "学习路径",
      tools: "四件工具",
      glossary: "词表",
      cheatsheet: "速查",
      missing: "没有这一页",
    };
    document.title = lesson ? `${lesson.title} · 巡栈` : `${titles[route.name] || "巡栈"} · 巡栈`;
    window.scrollTo(0, 0);
  }, [route]);

  let page = <Home progress={progress} />;
  if (route.name === "path") page = <PathPage progress={progress} onReset={reset} />;
  if (route.name === "tools") page = <ToolsPage />;
  if (route.name === "glossary") page = <GlossaryPage />;
  if (route.name === "cheatsheet") page = <CheatsheetPage />;
  if (route.name === "lesson") {
    page = <LessonPage id={route.id} progress={progress} onDone={markDone} onScore={saveQuiz} />;
  }
  if (route.name === "missing") {
    page = (
      <>
        <h1>没有这一页</h1>
        <p><a href="#/">回到起点</a></p>
      </>
    );
  }

  return (
    <Shell route={route} progress={progress}>
      {page}
    </Shell>
  );
}
