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

regressionTest.describe('basic', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('dropdown-button/test/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('dropdown-button-icon', async ({ page }) => {
    await page.goto('dropdown-button/test/dropdown-button-icon');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('dropdown should open', async ({ page }) => {
    await page.goto('dropdown-button/test/dropdown');

    const triggerHandle = await page.waitForSelector('.dropdown-button');
    await triggerHandle.click();

    await page.waitForSelector('.dropdown.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
