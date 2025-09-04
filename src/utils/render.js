/**
 * Utility: renderTokens
 *
 * Purpose:
 *   - Replace placeholders in template files (e.g., __PROJECT_NAME__).
 *
 * How it helps:
 *   - Personalizes scaffolded project with user’s project name/type.
 *   - Keeps templates generic but customizable.
 */

import fs from "fs";
import path from "path";

function walkFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(p));
    else files.push(p);
  }
  return files;
}

function renderTokens(root, tokenMap) {
  const files = walkFiles(root);
  for (const f of files) {
    const buf = fs.readFileSync(f, "utf8");
    const rendered = Object.entries(tokenMap).reduce(
      (acc, [k, v]) => acc.replaceAll(`__${k}__`, v),
      buf
    );
    fs.writeFileSync(f, rendered, "utf8");
  }
}

export { renderTokens };
