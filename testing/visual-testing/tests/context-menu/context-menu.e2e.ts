/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('context-menu', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('context-menu/basic');
    await expect(page.locator('ix-context-menu')).toHaveAttribute('hydrated');

    await page.mouse.click(120, 80, { button: 'right' });
    await expect(page.getByRole('menu')).toBeVisible();

    await expect(page).toHaveScreenshot();
  });
});
