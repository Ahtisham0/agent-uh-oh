import { mkdirSync, writeFileSync } from "node:fs";

// The Agent's Uh-Oh: one word an agent says when it has no idea what to do.
// "buffering" — the machine's own stall sound. An agent caught out mid-task
// doesn't explain itself; it just spins. It lands at a glance, needs no
// caption, and is the honest one-word confession of a mind gone blank.
const word = "buffering";

// The gate allows UTF-8 text of 1 to 99 characters, not only white space,
// and the judge wants one word only, nothing attached. Refuse to write
// anything that would fail either condition instead of writing it anyway.
if (!/^\S{1,99}$/.test(word)) {
  throw new Error("entry must be a single word of 1 to 99 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word + "\n", "utf8");
