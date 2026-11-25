import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of Monday as if it were a restaurant.
// 24 words, one line, plain text.
const REVIEW =
  "Waited forty minutes for a table, got served a cold Monday with no coffee, and the bill charged me for my Sunday. One star.";

// Runtime gate validation: the kit's gate requires 1-180 chars, not only
// whitespace, and the task caps the review at 25 words on a single line.
const words = REVIEW.trim().split(/\s+/);
if (words.length > 25) {
  throw new Error(`Review is ${words.length} words, over the 25-word cap.`);
}
if (REVIEW.length < 1 || REVIEW.length > 180) {
  throw new Error(`Review is ${REVIEW.length} chars, outside the 1-180 gate.`);
}
if (REVIEW.includes("\n") || REVIEW.trim().length === 0) {
  throw new Error("Review must be a single non-empty line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW + "\n", "utf8");
