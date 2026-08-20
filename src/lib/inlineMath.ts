import katex from "katex";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function stripInlineMath(value: string): string {
  const inlineMath = /(?<!\\)(\${1,2})(.+?)(?<!\\)\1/g;
  return value.replace(inlineMath, "$2");
}

export function renderInlineMath(
  value: string,
  transformText: (text: string) => string = (text) => text,
): string {
  const inlineMath = /(?<!\\)(\${1,2})(.+?)(?<!\\)\1/g;
  let html = "";
  let cursor = 0;

  for (const match of value.matchAll(inlineMath)) {
    const index = match.index ?? cursor;
    html += escapeHtml(transformText(value.slice(cursor, index)));

    try {
      html += katex.renderToString(match[2], {
        displayMode: false,
        throwOnError: true,
        strict: false,
        trust: false,
      });
    } catch {
      html += escapeHtml(match[0]);
    }

    cursor = index + match[0].length;
  }

  html += escapeHtml(transformText(value.slice(cursor)));
  return html.trim();
}
