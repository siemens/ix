/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('basic navigation', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`basic-navigation/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('expanded', async ({ page }) => {
    await page.goto(`basic-navigation/test/basic`);
    await page.locator('.burger-menu-button').click();
    await page.waitForSelector('.burger-menu-button.expanded');
    await page.waitForTimeout(800);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
