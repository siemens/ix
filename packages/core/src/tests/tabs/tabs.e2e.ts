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

regressionTest.describe('tabs', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('tabs/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('rounded', async ({ page }) => {
    await page.goto('tabs/rounded');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('stretched', async ({ page }) => {
    await page.goto('tabs/stretched');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('tabs/overflow');

    (await page.waitForSelector('div.arrow.right')).click({ clickCount: 3 });

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
