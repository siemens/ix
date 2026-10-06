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

regressionTest.describe('breadcrumb', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('breadcrumb/basic');

    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('lazyLoaded', async ({ page }) => {
    await page.goto('breadcrumb/lazyLoaded');
    const nextButton = page.getByRole('button', {
      name: 'Show Item3 next items',
    });
    await nextButton.click();
    await expect(
      nextButton.getByRole('menuitem', { name: 'Next Item 1' })
    ).toBeVisible();

    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
