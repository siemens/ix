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

regressionTest.describe('toast', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('toast/basic');
    await page.waitForTimeout(200);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('position', async ({ page }) => {
    await page.goto('toast/position');
    await page.waitForTimeout(200);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('custom', async ({ page }) => {
    await page.goto('toast/custom');
    await page.waitForTimeout(200);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
