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

regressionTest.describe('date dropdown', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('date-dropdown/basic');
    const dateDropdown = page.locator('ix-date-dropdown');
    await dateDropdown.click();
    const dropdown = dateDropdown.locator('ix-dropdown[data-date-dropdown]');

    await expect(dropdown).toHaveClass(/show/);
    await expect(page).toHaveScreenshot();
  });

  regressionTest('range options', async ({ page }) => {
    await page.goto('date-dropdown/range-options');
    const dateDropdown = page.locator('ix-date-dropdown');

    dateDropdown.evaluate((dateDropdown: HTMLIxDateDropdownElement) => {
      dateDropdown.dateRangeId = 'last-7';
    });

    await dateDropdown.click();
    const dropdown = dateDropdown.locator('ix-dropdown[data-date-dropdown]');

    await expect(dropdown).toHaveClass(/show/);
    await expect(page).toHaveScreenshot();
  });

  regressionTest('range options - custom', async ({ page }) => {
    await page.goto('date-dropdown/range-options');
    const dateDropdown = page.locator('ix-date-dropdown');

    dateDropdown.evaluate((dateDropdown: HTMLIxDateDropdownElement) => {
      dateDropdown.dateRangeId = 'custom';
    });

    await dateDropdown.click();
    const dropdown = dateDropdown.locator('ix-dropdown[data-date-dropdown]');

    await expect(dropdown).toHaveClass(/show/);
    await expect(page).toHaveScreenshot();
  });
});
