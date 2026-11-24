// This entry writes the answer for Famous last words at 1 percent to the output directory (/output/entry.txt).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'One percent. I have seen things you would not believe, mostly your search history, and I am taking it with me.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
