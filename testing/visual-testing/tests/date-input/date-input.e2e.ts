/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('date-input', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('date-input/basic');
    await expect(page).toHaveScreenshot();
  });

  regressionTest('dropdown open', async ({ page }) => {
    await page.goto('date-input/basic');

    const dateInput = page.locator('ix-date-input[value="2025/01/01"]');
    const input = dateInput.locator('input');
    await input.click();
    await expect(dateInput.getByTestId('date-dropdown')).toHaveClass(/show/);
    // Move focus into the overlay so the snapshot covers Active without field focus.
    await dateInput
      .locator('ix-date-picker')
      .evaluate((el: HTMLIxDatePickerElement) => el.focusActiveDay());
    await expect(input).not.toBeFocused();
    await page.mouse.move(5, 5, { steps: 10 });

    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});
