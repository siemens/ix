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
  test('progress-indicator-circular-sizes - accessibility check', async ({ page }) => {
    await page.goto('/preview/progress-indicator-circular-sizes');

    // Ugly and not the reliable way to wait for Stencil to be ready
    await waitForReadiness(page);

    const accessibilityScanResults = await new AxeBuilder({ page } as any).disableRules(['page-has-heading-one']).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
}

test('progress-indicator-circular-sizes', async ({ page }) => {
  await page.goto('/preview/progress-indicator-circular-sizes');

  // Ugly and not the reliable way to wait for Stencil to be ready
  await waitForReadiness(page);

  await expect(page.locator('body')).toMatchAriaSnapshot({
    name: 'progress-indicator-circular-sizes.aria-snapshot.yaml',
  });
});
