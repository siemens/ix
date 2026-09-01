/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('menu-about', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('menu-about/basic');

    await page.locator('#aboutAndLegal').click();
    await page.waitForTimeout(500);

    //Click is needed otherwise tab item is still hovered
    await page.getByText('Tab 1').click();
    await page.mouse.move(0, 0);
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
