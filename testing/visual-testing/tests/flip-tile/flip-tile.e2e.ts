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

regressionTest.describe('flip-tile', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('flip-tile/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('custom sizes', async ({ page }) => {
    await page.goto('flip-tile/custom-sizes');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
