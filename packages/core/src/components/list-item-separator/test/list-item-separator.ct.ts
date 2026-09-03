/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-list aria-label="Projects">
      <ix-list-item label="Project Alpha"></ix-list-item>
      <ix-list-item-separator></ix-list-item-separator>
      <ix-list-item label="Project Beta"></ix-list-item>
    </ix-list>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-list-item-separator></ix-list-item-separator>`);

  const separator = page.locator('ix-list-item-separator');
  await expect(separator).toHaveClass(/\bhydrated\b/);
  await expect(separator).toBeVisible();
  await expect(separator).toHaveAttribute('aria-hidden', 'true');
  await expect(separator).toHaveCSS('border-bottom-width', '1px');
  await expect(separator).toHaveCSS('border-bottom-style', 'solid');
});
