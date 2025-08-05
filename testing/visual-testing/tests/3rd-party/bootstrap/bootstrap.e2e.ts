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

regressionTest.describe('3rd-party:bootstrap', () => {
  regressionTest('html elements', async ({ page }) => {
    await page.goto('3rd-party/bootstrap/html-elements');
    await expect(page.locator('ix-button')).toBeVisible();
    await expect(page).toHaveScreenshot({
      fullPage: true,
    });
  });
});
