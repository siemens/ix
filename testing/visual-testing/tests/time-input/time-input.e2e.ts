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

regressionTest.describe('time input', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('time-input/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });

  regressionTest('validation', async ({ page }) => {
    await page.goto('time-input/validation');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });
});
