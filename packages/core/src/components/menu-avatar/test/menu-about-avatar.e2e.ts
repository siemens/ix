/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('menu-avatar', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('menu-avatar/test/basic');
    await page.locator('.burger-menu-button').click();
    await page.waitForSelector('.expanded');
    await page.locator('ix-menu-avatar').click();
    await page.waitForSelector('ix-dropdown.show');
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
