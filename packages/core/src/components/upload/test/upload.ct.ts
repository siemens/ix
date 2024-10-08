/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test, expect } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-upload></ix-upload>`);
  const upload = page.locator('ix-upload');

  await expect(upload).toHaveClass(/hydrated/);
  await expect(upload).toBeVisible();
});

test('should not accessibility issues', async ({ page, mount }) => {
  await mount(`<ix-upload></ix-upload>`);

  await expect(page).toHaveNoA11yIssues();
});
