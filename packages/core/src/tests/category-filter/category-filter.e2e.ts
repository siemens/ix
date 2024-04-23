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

regressionTest.describe('category-filter', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('category-filter/basic');
    await page.locator('input').click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('categories', async ({ page }) => {
    await page.goto('category-filter/categories');
    await page.locator('input').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('category options', async ({ page }) => {
    await page.goto('category-filter/categories');
    await page.locator('input').first().click();
    await page.locator('.category-item').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('static operator', async ({ page }) => {
    await page.goto('category-filter/static-operator');
    await page.locator('input').first().click();
    await page.locator('.category-item').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
