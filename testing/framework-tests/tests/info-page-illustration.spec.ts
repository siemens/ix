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

test('renders slotted illustration instead of fallback icon', async ({
  page,
}) => {
  await page.goto('/preview/info-page-illustration');
  await waitForReadiness(page);

  const infoPage = page.locator('ix-info-page');
  await expect(infoPage.locator('svg[slot="image"]')).toBeVisible();
  await expect(infoPage.locator('ix-icon')).not.toBeVisible();
});
