import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('https://kabrak-store.kabrakeng.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  const text = (await page.textContent('body')).slice(0, 300).replace(/\n/g, ' ');
  console.log(text);
  await browser.close();
}
run().catch(console.error);
