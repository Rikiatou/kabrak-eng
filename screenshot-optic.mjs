import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT = path.join(process.cwd(), 'public', 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const urls = [
  'https://kabrakoptic.com',
  'https://app.kabrakopticpro.com',
  'https://saoudia.kabrakoptic.com',
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  for (const url of urls) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
    try {
      console.log(`Trying ${url}...`);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(3000);
      const name = url.replace('https://', '').replace(/\./g, '-') + '.png';
      const outPath = path.join(OUT, name);
      await page.screenshot({ path: outPath, type: 'png' });
      const size = fs.statSync(outPath).size;
      console.log(`  OK: ${name} (${(size / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.log(`  FAIL: ${err.message.slice(0, 80)}`);
    }
    await page.close();
  }
  await browser.close();
}
run().catch(console.error);
