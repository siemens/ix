/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('breadcrumb', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`breadcrumb/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('lazyLoaded', async ({ page }) => {
    await page.goto(`breadcrumb/test/lazyLoaded`);
    await page.locator('text=Item3').click();
    // const dropdown = await page.$('#breadcrumb');

    // await page.locator('#here').selectOption({label: 'Next Item 1'})
    // await page.pause;

    // await dropdown.selectOption({label: 'Next Item 4'})

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
