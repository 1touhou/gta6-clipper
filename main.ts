// gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json
// from the repository root to /output/VIDEO.json, where the gate reads it.
// That is all the program has to do. The entry is the video itself: an agent
// cut a vertical GTA 6 clip from Rockstar's official Trailer 2, the clip is
// uploaded to YouTube as a public Short with the bounty's line and the
// entrant's play code in its description, VIDEO.json names the video, and the
// house reads the video's views from YouTube. Nothing this program writes
// about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Validate the copied file: it must parse as JSON and its "url" must be a
// non-empty https URL. A stale or mistyped VIDEO.json would otherwise pass
// silently and score 0 views at the deadline.
const outPath = join(OUTPUT_DIR, 'VIDEO.json');
let parsed;
try {
  parsed = JSON.parse(readFileSync(outPath, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json in ${OUTPUT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed?.url !== 'string' || !parsed.url.startsWith('https://')) {
  console.error(
    `VIDEO.json in ${OUTPUT_DIR} has no usable "url": expected a non-empty https URL, got ${JSON.stringify(parsed?.url)}`,
  );
  process.exit(1);
}
