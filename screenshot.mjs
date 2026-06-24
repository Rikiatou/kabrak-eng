import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT = path.join(process.cwd(), 'public', 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const shots = [
  { name: 'kabrak-store.png', url: 'https://kabrak-store.kabrakeng.com', selector: null, login: false },
  { name: 'kabrak-optic-pro.png', url: 'https://kabrakopticpro.com', selector: null, login: false },
  { name: 'kabrak-exchange.png', url: 'https://exchange.kabrakeng.com', selector: null, login: false },
  { name: 'kabrak-beauty.png', url: 'https://beautyspa.kabrakeng.com', selector: null, login: false },
  { name: 'kabrak-retail-erp.png', url: 'https://kabrak-supermarket-erp-frontend.vercel.app', selector: null, login: false },
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const shot of shots) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
    try {
      console.log(`Capturing ${shot.name}...`);
      await page.goto(shot.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000); // let animations finish

      const outPath = path.join(OUT, shot.name);
      await page.screenshot({ path: outPath, type: 'png' });

      const size = fs.statSync(outPath).size;
      console.log(`  OK: ${shot.name} (${(size / 1024).toFixed(0)} KB)`);
      results.push({ name: shot.name, ok: true, size });
    } catch (err) {
      console.log(`  FAIL: ${shot.name} — ${err.message}`);
      results.push({ name: shot.name, ok: false, error: err.message });
    }
    await page.close();
  }

  await browser.close();
  console.log('\n=== Results ===');
  results.forEach(r => {
    console.log(r.ok ? `✓ ${r.name} (${r.size} bytes)` : `✗ ${r.name}: ${r.error}`);
  });
}

run().catch(console.error);
