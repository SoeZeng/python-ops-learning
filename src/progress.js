import { useCallback, useEffect, useState } from "react";

const KEY = "xunzhan.v1";

function empty() {
  return { done: {}, quiz: {} };
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return empty();
    return {
      done: data.done && typeof data.done === "object" ? data.done : {},
      quiz: data.quiz && typeof data.quiz === "object" ? data.quiz : {},
    };
  } catch {
    return empty();
  }
}

export function formatWhen(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const text = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
  return `${text} 北京时间`;
}

export function useProgress() {
  const [progress, setProgress] = useState(empty);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const commit = useCallback((updater) => {
    setProgress((current) => {
      const next = updater(current);
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const markDone = useCallback(
    (id) => {
      commit((current) => {
        const done = { ...current.done };
        if (done[id]) delete done[id];
        else done[id] = new Date().toISOString();
        return { ...current, done };
      });
    },
    [commit],
  );

  const saveQuiz = useCallback(
    (id, correct, total) => {
      commit((current) => ({
        ...current,
        quiz: {
          ...current.quiz,
          [id]: { correct, total, at: new Date().toISOString() },
        },
      }));
    },
    [commit],
  );

  const reset = useCallback(() => {
    commit(() => empty());
  }, [commit]);

  return { progress, markDone, saveQuiz, reset };
}
