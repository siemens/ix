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

regressionTest.describe('split-button', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('split-button/basic');

    const button = page.locator('ix-split-button');
    const dropdownButton = button.locator('ix-icon-button');
    await expect(dropdownButton).toBeVisible();
    await dropdownButton.click();
    await expect(button.locator('.dropdown-menu.show')).toBeVisible();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.02,
    });
  });
});
