/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { test, expect } from '@playwright/test';

test.describe('breadcrumb', () => {
  test('breadcrumb', async ({ page }) => {
    await page.goto('/preview/breadcrumb');
    await expect(page.locator('ix-breadcrumb')).toBeVisible();
    await expect(page.locator('ix-breadcrumb-item').nth(0)).toHaveText(
      'Item 1'
    );
    await expect(page.locator('ix-breadcrumb-item').nth(1)).toHaveText(
      'Item 2'
    );
    await expect(page.locator('ix-breadcrumb-item').nth(2)).toHaveText(
      'Item 3'
    );
  });

  test('truncate', async ({ page }) => {
    await page.goto('/preview/breadcrumb-truncate');
    await expect(page.locator('ix-breadcrumb')).toBeVisible();
    await expect(page.locator('ix-breadcrumb-item').nth(0)).not.toBeVisible();
    await expect(page.locator('ix-breadcrumb-item').nth(1)).not.toBeVisible();
    await expect(page.locator('ix-breadcrumb-item').nth(2)).toBeVisible();
    await expect(page.locator('ix-breadcrumb-item').nth(3)).toHaveText(
      'Item 4'
    );
    await expect(page.locator('ix-breadcrumb-item').nth(4)).toHaveText(
      'Item 5'
    );

    const nextDropdownTrigger = page.locator('.previous-button');
    await nextDropdownTrigger.click();

    const dropdown = page.getByLabel('previous');
    await expect(dropdown).toHaveClass(/show/);
    await expect(dropdown.locator('ix-dropdown-item').nth(0)).toHaveText(
      'Item 1'
    );
    await expect(dropdown.locator('ix-dropdown-item').nth(1)).toHaveText(
      'Item 2'
    );
  });
});
