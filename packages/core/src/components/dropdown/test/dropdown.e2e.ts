/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('dropdown', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`dropdown/test/basic`);

    await page.locator('cw-button').click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });
});
