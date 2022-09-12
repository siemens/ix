import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('tile', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`tile/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
