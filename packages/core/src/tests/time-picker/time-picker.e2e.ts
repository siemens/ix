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

regressionTest.describe('time picker', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('time-picker/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });

  regressionTest('formats', async ({ page }) => {
    await page.goto('time-picker/formats');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });

  regressionTest('interval', async ({ page }) => {
    await page.goto('time-picker/interval');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });
});
