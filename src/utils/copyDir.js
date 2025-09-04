/**
 * Utility: copyDir
 *
 * Purpose:
 *   - Recursively copy a template directory to target project folder.
 *
 * How it helps:
 *   - Lets CLI clone boilerplate templates into user’s project.
 *   - Reusable utility for all scaffolds.
 */

import fs from "fs";
import path from "path";

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

export { copyDir };
