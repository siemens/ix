/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('menu-about', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`menu-about/test/basic`);

    await page.locator('#aboutAndLegal').click();
    await page.waitForTimeout(500);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
