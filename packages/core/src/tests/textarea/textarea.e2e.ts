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

regressionTest.describe('textarea', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('textarea/basic');
    expect(await page.screenshot()).toMatchSnapshot();
  });

  regressionTest('readonly', async ({ page }) => {
    await page.goto('textarea/readonly');
    expect(await page.screenshot()).toMatchSnapshot();
  });

  regressionTest('disabled', async ({ page }) => {
    await page.goto('textarea/disabled');
    expect(await page.screenshot()).toMatchSnapshot();
  });
});
