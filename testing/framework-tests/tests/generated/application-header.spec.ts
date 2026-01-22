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

test('application-header', async ({ page }) => {
  await page.goto('/preview/application-header');

  // Ugly and not the reliable way to wait for Stencil to be ready
  await waitForReadiness(page);

  await expect(page.locator('body')).toMatchAriaSnapshot({
    name: 'application-header.aria-snapshot.yaml',
  });
});
