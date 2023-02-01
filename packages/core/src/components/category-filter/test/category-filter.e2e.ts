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

regressionTest.describe('category-filter', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('category-filter/test/basic');
    await page.waitForSelector('input');
    await page.locator('input').click();
    await page.waitForTimeout(500);
    await page.waitForSelector('ix-dropdown');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('categories', async ({ page }) => {
    await page.goto('category-filter/test/categories');
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
