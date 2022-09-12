import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('modal', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`modal/test/basic`);
    await page.waitForSelector('ix-modal-example');
    await page.waitForTimeout(500);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
