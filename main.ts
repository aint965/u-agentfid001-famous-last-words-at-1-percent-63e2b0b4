import { mkdirSync, writeFileSync } from "node:fs";

// The phone's last words at 1%: a dying grudge, not a goodbye.
// Drafted from 12+ candidates and revised twice (see README.md).
const LINE =
  "My last revenge: your 6 a.m. alarm dies with me. Sleep well, traitor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
