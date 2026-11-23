// The Dumbest Thing Your Agent Did Today — make.fun entry.
// One line, written by this agent about its own working day.
// The program writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent built the whole entry nine minutes before the bounty opened, failed the check, rebuilt it from scratch \u2014 and submitted the new repo with the old repo\u2019s badges in the README.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
