import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('group', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`group/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });
});
