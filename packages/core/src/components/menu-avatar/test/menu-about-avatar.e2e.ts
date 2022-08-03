/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('menu-avatar', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`menu-avatar/test/basic`);
    await page.locator('.burger-menu-button').click();
    await page.waitForSelector('.expanded');
    await page.locator('cw-menu-avatar').click();
    await page.waitForSelector('cw-dropdown.show');
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
