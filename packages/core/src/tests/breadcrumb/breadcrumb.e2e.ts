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

regressionTest.describe('breadcrumb', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('breadcrumb/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('previous items', async ({ page }) => {
    await page.goto('breadcrumb/previous-items');
    await page.locator('button').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('lazyLoaded', async ({ page }) => {
    await page.goto('breadcrumb/lazyLoaded');
    await page.locator('text=Item3').click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
