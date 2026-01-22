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

test('group-header-suppressed', async ({ page }) => {
  await page.goto('/preview/group-header-suppressed');

  // Ugly and not the reliable way to wait for Stencil to be ready
  await waitForReadiness(page);

  await expect(page.locator('body')).toMatchAriaSnapshot({
    name: 'group-header-suppressed.aria-snapshot.yaml',
  });
});
