import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log(`BROWSER CONSOLE: ${msg.type()} - ${msg.text()}`));
    page.on('pageerror', error => console.log(`BROWSER ERROR: ${error.message}`));

    try {
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 5000 });
    } catch (e) {
        console.log(`Failed to navigate: ${e.message}`);
    }

    await browser.close();
})();
