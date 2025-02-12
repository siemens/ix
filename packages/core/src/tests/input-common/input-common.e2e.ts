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

regressionTest.describe('input components', () => {
  regressionTest(
    'should be hidden initially and displayed afterwards',
    async ({ page }) => {
      await page.goto('input-common/dynamic');

      const displayButton = page.getByRole('button', {
        name: 'Display inputs',
      });

      await displayButton.click();

      const inputContainer = page.locator('#input-container');
      await expect(inputContainer).toBeVisible();

      const numberInputContainer = page.locator('#number-input-container');
      await expect(numberInputContainer).toBeVisible();

      const dateInputContainer = page.locator('#date-input-container');
      await expect(dateInputContainer).toBeVisible();

      await expect(page).toHaveScreenshot();
    }
  );
});
