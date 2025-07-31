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

regressionTest.describe('expanding-search', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('expanding-search/basic');

    await page.locator('ix-expanding-search button').first().click();
    await page
      .locator('ix-expanding-search .input-container.expanded')
      .waitFor();
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('basic not expanded', async ({ page }) => {
    await page.goto('expanding-search/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('fullWidth', async ({ page }) => {
    await page.goto('expanding-search/fullWidth');

    await page.locator('ix-expanding-search button').click();
    await page
      .locator('ix-expanding-search .input-container.expanded')
      .waitFor();
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
