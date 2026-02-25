import { chromium } from 'playwright';
import fs from 'fs';

const projects = [
    { name: 'imoveissc', url: 'https://www.imoveissc.com.br' },
    { name: 'dudafarage', url: 'https://dudafarage.com.br/lp' },
    { name: 'klammer', url: 'https://klammer.com.br/#agentes' }
];

(async () => {
    const browser = await chromium.launch();
    for (const project of projects) {
        const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
        const page = await context.newPage();
        console.log(`Taking screenshot of ${project.url}...`);
        try {
            await page.goto(project.url, { waitUntil: 'load', timeout: 30000 });
            await page.waitForTimeout(5000);
            await page.screenshot({ path: `./src/assets/projects/${project.name}.png` });
            console.log(`✅ Saved ${project.name}.png`);
        } catch (e) {
            console.log(`❌ Failed to screenshot ${project.url}: ${e.message}`);
        }
        await context.close();
    }
    await browser.close();
})();
