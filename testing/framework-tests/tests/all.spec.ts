/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test, expect } from '@playwright/test';
import { testIds } from './test-ids';

for (const testId of testIds.filter((id) => !id.startsWith('echarts'))) {
  test(testId, async ({ page }) => {
    await page.goto('/preview/' + testId);

    // Ugly and not the reliable way to wait for Stencil to be ready
    await page.waitForTimeout(250);

    await expect(page.locator('body')).toMatchAriaSnapshot({
      name: `${testId}.aria-snapshot.txt`,
    });
  });
}
