// Checks every syntax color against the editor background.
// Usage: npm run check   (also runs as part of npm run build)

import { fileURLToPath } from "node:url";
import { contrast } from "../src/color.mjs";
import { contrastTargets, variants } from "../src/palette.mjs";

export function checkContrast(variant) {
  const p = variant.palette;
  let ok = true;
  console.log(`\n${variant.name}  (background ${p.bg})`);
  for (const [key, target] of Object.entries(contrastTargets)) {
    const ratio = contrast(p[key], p.bg);
    const pass = ratio >= target;
    if (!pass) ok = false;
    console.log(`  ${pass ? "ok  " : "LOW "} ${key.padEnd(11)} ${p[key]}  ${ratio.toFixed(2)}  (target ${target})`);
  }
  return ok;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const results = variants.map(checkContrast);
  if (results.includes(false)) process.exit(1);
}
