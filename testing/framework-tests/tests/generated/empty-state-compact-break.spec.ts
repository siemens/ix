/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test, expect } from '@playwright/test';
import { waitForReadiness } from '../utils';
import AxeBuilder from '@axe-core/playwright';

if (process.env.DO_ACCESSIBILITY_AUDIT) {
  test('empty-state-compact-break - accessibility check', async ({ page }) => {
    await page.goto('/preview/empty-state-compact-break');

    // Ugly and not the reliable way to wait for Stencil to be ready
    await waitForReadiness(page);

    const accessibilityScanResults = await new AxeBuilder({ page } as any).disableRules(['page-has-heading-one']).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
}

test('empty-state-compact-break', async ({ page }) => {
  await page.goto('/preview/empty-state-compact-break');

  // Ugly and not the reliable way to wait for Stencil to be ready
  await waitForReadiness(page);

  await expect(page.locator('body')).toMatchAriaSnapshot({
    name: 'empty-state-compact-break.aria-snapshot.yaml',
  });
});
