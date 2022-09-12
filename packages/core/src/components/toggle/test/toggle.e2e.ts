import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('toggle', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`toggle/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
