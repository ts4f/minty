// Generates themes/*.json from src/palette.mjs and checks contrast first.
// Usage: npm run build

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { variants } from "../src/palette.mjs";
import { buildTheme } from "../src/theme.mjs";
import { checkContrast } from "./check-contrast.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "themes");
mkdirSync(outDir, { recursive: true });

let failed = false;
for (const variant of variants) {
  if (!checkContrast(variant)) failed = true;
  const theme = buildTheme(variant);
  writeFileSync(join(outDir, variant.file), JSON.stringify(theme, null, 2) + "\n");
  console.log(`wrote themes/${variant.file}`);
}

if (failed) {
  console.error("\nSome colors are below their contrast target. The theme was still written so you can look at it.");
  process.exit(1);
}
