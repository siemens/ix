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

regressionTest.describe('content', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('content/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
  regressionTest('scroll and check', async ({ page }) => {
    await page.goto('content/scrollable');

    const label = page.locator('label[for="checkbox_07"]');
    await label.scrollIntoViewIfNeeded();
    await label.click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
