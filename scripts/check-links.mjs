import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const urls = JSON.parse(readFileSync(new URL('../url_map.json', import.meta.url), 'utf8')).urls;
const dist = new URL('../dist/', import.meta.url);

const missing = urls
  .map((entry) => {
    const path = new URL(entry.url).pathname;
    const file = path === '/' ? 'index.html' : join(path.slice(1), 'index.html');
    return { url: entry.url, file };
  })
  .filter((entry) => !existsSync(new URL(entry.file, dist)));

if (missing.length > 0) {
  console.error('Missing static routes:');
  for (const entry of missing) {
    console.error(`- ${entry.url} -> ${entry.file}`);
  }
  process.exit(1);
}

console.log(`OK: ${urls.length} audited URLs have static HTML output.`);
