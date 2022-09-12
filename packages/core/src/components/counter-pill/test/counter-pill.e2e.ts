import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('counter-pill', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`counter-pill/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
