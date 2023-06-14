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

regressionTest.describe('card-list: basic', () => {
  regressionTest('should not have visual regressions', async ({ page }) => {
    await page.goto('card-list/basic');
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('layout scrolling', async ({ page }) => {
    await page.goto('card-list/layout-scroll');
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('layout scrolling end', async ({ page }) => {
    await page.goto('card-list/layout-scroll');

    await page.locator('#end').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
