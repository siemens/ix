import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('flip-tile', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`flip-tile/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
