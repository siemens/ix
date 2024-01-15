/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
    <ix-tooltip for=".test">tooltip</ix-tooltip>
    <ix-button class="test">button</ix-button>
  `);
  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();

  await expect(tooltip).toHaveClass(/hydrated/);
  await expect(tooltip).toBeVisible();
});
