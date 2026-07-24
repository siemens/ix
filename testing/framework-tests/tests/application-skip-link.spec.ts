/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from '@playwright/test';
import { waitForReadiness } from './utils';

test('application skip link uses the configured target', async ({ page }) => {
  await page.goto('/preview/application');
  await waitForReadiness(page);

  const target = page.locator('#main-content');
  const skipLink = page.getByRole('link', {
    name: 'Skip to main content',
  });

  await expect(skipLink).toHaveAttribute('href', '#main-content');
  await skipLink.focus();
  await skipLink.press('Enter');
  await expect(target).toBeFocused();
});
