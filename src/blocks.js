export function codeBlock({ lang = "python", filename, code, output, run, download }) {
  const text = String(code).replace(/\n$/, "");
  return {
    type: "code",
    lang,
    filename,
    code: text,
    output,
    run,
    download: download === null ? undefined : download ?? filename,
  };
}

export function textBlock(type, text) {
  return { type, text };
}
