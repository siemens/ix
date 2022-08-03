/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('select', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`select/test/basic`);
    await page.locator('.chevron-down-container').click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('mode-multiple', async ({ page }) => {
    await page.goto(`select/test/mode-multiple`);
    await page.locator('.chevron-down-container').click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });
});
