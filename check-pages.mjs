import { chromium } from 'playwright';

const urls = [
  { name: 'store', url: 'https://kabrak-store.kabrakeng.com' },
  { name: 'optic', url: 'https://app.kabrakopticpro.com' },
  { name: 'exchange', url: 'https://exchange.kabrakeng.com' },
  { name: 'beauty', url: 'https://beautyspa.kabrakeng.com' },
  { name: 'retail', url: 'https://kabrak-supermarket-erp-frontend.vercel.app' },
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  for (const { name, url } of urls) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(2000);
      const title = await page.title();
      const h1 = await page.textContent('h1').catch(() => 'no h1');
      const bodyText = (await page.textContent('body')).slice(0, 200).replace(/\n/g, ' ');
      console.log(`\n[${name}] ${url}`);
      console.log(`  title: ${title}`);
      console.log(`  h1: ${h1}`);
      console.log(`  body: ${bodyText.slice(0, 150)}`);
    } catch (err) {
      console.log(`\n[${name}] FAIL: ${err.message.slice(0, 60)}`);
    }
    await page.close();
  }
  await browser.close();
}
run().catch(console.error);
