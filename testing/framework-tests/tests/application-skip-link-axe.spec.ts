/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, test } from '@playwright/test';
import { createAxeBuilder, waitForReadiness } from './utils';

test('application skip link - accessibility check', async ({ page }) => {
  await page.goto('/preview/application');
  await waitForReadiness(page);

  const results = await createAxeBuilder(page)
    .include('ix-application')
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});
