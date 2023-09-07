/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';
regressionTest.describe('menu-settings', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('menu-settings/basic');
    await page.locator('#settings').click();
    await page.waitForTimeout(500);
    //Click is needed otherwise tab item is still hovered
    await page.getByText('Content test 1').click();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
//# sourceMappingURL=menu-settings.e2e.js.map
