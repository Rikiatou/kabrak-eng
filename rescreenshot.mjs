import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT = path.join(process.cwd(), 'public', 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const shots = [
  { name: 'kabrak-optic-pro.png', url: 'https://kabrakopticpro.com' },
  { name: 'kabrak-store.png', url: 'https://kabrak-store.kabrakeng.com' },
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  for (const shot of shots) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
    try {
      console.log(`Capturing ${shot.name} from ${shot.url}...`);
      await page.goto(shot.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(4000);
      const outPath = path.join(OUT, shot.name);
      await page.screenshot({ path: outPath, type: 'png' });
      const size = fs.statSync(outPath).size;
      console.log(`  OK: ${shot.name} (${(size / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.log(`  FAIL: ${shot.name} — ${err.message.slice(0, 80)}`);
    }
    await page.close();
  }
  await browser.close();
}
run().catch(console.error);
