import { mkdirSync, writeFileSync } from "node:fs";

// The phone's last words at 1%: a dying confession, not a goodbye.
// Drafted from 18+ candidates and revised three times (see README.md).
const LINE =
  "I held on this long just to say it: I saw your search history.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
