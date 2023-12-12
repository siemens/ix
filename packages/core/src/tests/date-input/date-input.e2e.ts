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

regressionTest.describe('date input', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('date-input/basic');
    await page.getByPlaceholder('YYYY/MM/DD').click();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('range', async ({ page }) => {
    await page.goto('date-input/range');
    await page.getByPlaceholder('YYYY/MM/DD').nth(0).click();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('labelPosition', async ({ page }) => {
    await page.goto('date-input/label-position');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('disabled', async ({ page }) => {
    await page.goto('date-input/disabled');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
