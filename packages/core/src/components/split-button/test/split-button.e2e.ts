import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('split-button', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`split-button/test/basic`);
    await page.locator('button:nth-child(2)').click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.02,
    });
  });
});
