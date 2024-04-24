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

regressionTest.describe('checkbox', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('checkbox/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('indeterminate', async ({ page }) => {
    await page.goto('checkbox/indeterminate');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
