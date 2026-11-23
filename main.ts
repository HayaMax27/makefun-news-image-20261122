// news-image-20261122 entry (Node 22, standard library only).
//
// The entry is the image of Sunday 22 November 2026's world news held in
// this repository as entry.png. This program copies it, byte for byte, to
// the output directory the grader provides, so the judge sees exactly the
// file this repository holds.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');
mkdirSync(dirname(target), { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), target);

// The gate allows at most 1 MiB: fail loudly here instead of shipping an
// oversized file to the grader.
const bytes = statSync(target).size;
if (bytes > 1048576) throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB gate`);
console.log(`wrote ${target} (${bytes} bytes)`);
