/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('menu-settings', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`menu-settings/test/basic`);
    await page.locator('li[title="Settings"]').click();
    await page.waitForTimeout(500);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
