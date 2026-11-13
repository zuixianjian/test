// Scope qualified rules while preserving keyframes, declarations and nested media.
export function scopeCss(css, root = '.youth-island-plugin-root') {
  function boundary(start, target) {
    let quote = '', comment = false, depth = 0;
    for (let i = start; i < css.length; i++) {
      const c = css[i], next = css[i + 1];
      if (comment) { if (c === '*' && next === '/') { comment = false; i++; } continue; }
      if (quote) { if (c === '\\') i++; else if (c === quote) quote = ''; continue; }
      if (c === '/' && next === '*') { comment = true; i++; continue; }
      if (c === '"' || c === "'") { quote = c; continue; }
      if (target === '{' && c === '{') return i;
      if (target === '{' && c === '}') throw new Error('Unexpected closing brace in prototype CSS');
      if (c === '{') depth++;
      if (c === '}' && depth-- === 0) return i;
    }
    return css.length;
  }
  let output = '', cursor = 0;
  while (cursor < css.length) {
    const open = boundary(cursor, '{');
    if (open === css.length) { output += css.slice(cursor); break; }
    const close = boundary(open + 1, '}');
    const header = css.slice(cursor, open);
    const clean = header.replace(/\/\*[\s\S]*?\*\//g, '').trim();
    const body = css.slice(open + 1, close);
    if (/^@(media|supports|container|layer)\b/.test(clean)) output += header + '{' + scopeCss(body, root) + '}';
    else if (clean.startsWith('@')) output += header + '{' + body + '}';
    else {
      const selectors = clean.split(',').map(raw => {
        const selector = raw.trim();
        if (/^(:root|body|html)$/.test(selector)) return root;
        const host = selector.match(/^(body|html)((?:\.[\w-]+)+)(.*)$/);
        if (host) return `${host[1]}${host[2]} ${root}${host[3]}`;
        const fullscreen = selector.match(/^(\.is-fullscreen-mode)(.*)$/);
        if (fullscreen) return `body${fullscreen[1]} ${root}${fullscreen[2]}`;
        return `${root} ${selector.replace(/^(body|html)\s+/, '')}`;
      });
      output += '\n' + selectors.join(',\n') + '{' + body + '}';
    }
    cursor = close + 1;
  }
  return output;
}
