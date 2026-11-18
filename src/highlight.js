const PYTHON =
  /("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(#.*?$)|(\b(?:False|None|True|and|as|assert|async|await|break|class|continue|def|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b)|(\b\d+(?:\.\d+)?\b)/gm;

const JSON_RE =
  /("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(?:true|false|null)\b|-?\b\d+(?:\.\d+)?\b/g;

function pushText(nodes, text) {
  if (text) nodes.push({ type: "text", text });
}

export function highlight(code, lang) {
  if (lang === "python") return tokenize(code, PYTHON, pythonType);
  if (lang === "json" || lang === "jsonl") return tokenize(code, JSON_RE, jsonType);
  return [{ type: "text", text: code }];
}

function tokenize(code, pattern, typeOf) {
  const nodes = [];
  let last = 0;
  for (const match of code.matchAll(pattern)) {
    const start = match.index ?? 0;
    pushText(nodes, code.slice(last, start));
    nodes.push({ type: typeOf(match), text: match[0] });
    last = start + match[0].length;
  }
  pushText(nodes, code.slice(last));
  return nodes;
}

function pythonType(match) {
  if (match[1]) return "str";
  if (match[2]) return "com";
  if (match[3]) return "kw";
  return "num";
}

function jsonType(match) {
  if (match[1]) return "kw";
  if (match[3]) return "str";
  if (match[0] === "true" || match[0] === "false" || match[0] === "null") return "kw";
  return "num";
}
