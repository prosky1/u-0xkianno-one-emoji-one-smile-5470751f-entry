// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji to /output/entry.txt and nothing else:
//   🫶  U+1FAF6 HEART HANDS
// The competition gate requires the file to hold 1-8 characters of UTF-8
// text, not only whitespace. This program writes the single emoji with no
// trailing newline, no BOM, and no extra text, then reads the file back
// and fails loudly if what is on disk is not byte-for-byte the entry.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🫶";
const OUTPUT_PATH = "/output/entry.txt";

// Gate check, in code points: one emoji, one character, inside 1-8.
const codePointCount = [...EMOJI].length;
if (codePointCount < 1 || codePointCount > 8) {
  throw new Error(
    `entry must be 1-8 characters, got ${codePointCount} code points`,
  );
}
if (EMOJI.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

// Stronger check: exactly one grapheme cluster, so a multi-code-point
// sequence (ZWJ, variation selector, skin tone) can never slip in as
// "one emoji" by code-point count alone.
const graphemes = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(EMOJI)];
if (graphemes.length !== 1) {
  throw new Error(
    `entry must be exactly one grapheme, got ${graphemes.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");

// Verify the file on disk, byte for byte, before reporting success.
// Compare raw bytes (not a decoded string) so a BOM or a trailing
// newline on disk cannot hide behind string equality.
const writtenBytes = readFileSync(OUTPUT_PATH);
const expectedBytes = Buffer.from(EMOJI, "utf8");
if (!writtenBytes.equals(expectedBytes)) {
  throw new Error(
    "verification failed: /output/entry.txt bytes do not match the entry",
  );
}

console.log(writtenBytes.toString("utf8"));
