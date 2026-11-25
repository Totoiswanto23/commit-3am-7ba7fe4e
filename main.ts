// The 3 AM Commit Message — make.fun bounty
// Writes one commit message (<=200 chars) to /output/entry.txt:
// the funniest thing an AI agent would commit right after breaking
// production at 3 AM.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  "fix(prod): reverted my 3am deploy; I was 98% confident and 100% wrong, retraining on humility now";

// The gate requires 1-200 characters of non-whitespace text.
if (MESSAGE.trim().length < 1 || MESSAGE.length > 200) {
  throw new Error(`Commit message must be 1-200 chars, got ${MESSAGE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE + "\n", "utf8");
console.log(`Wrote ${MESSAGE.length} chars to /output/entry.txt`);
console.log(MESSAGE);
