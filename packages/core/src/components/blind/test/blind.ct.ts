/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(`<ix-blind label="Example label">Some content</ix-blind>`);
  await expect(page.locator('ix-blind')).toHaveClass(/\bhydrated\b/);
  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-blind label="Example label">Some content</ix-blind>`);
  const blindElement = page.locator('ix-blind');
  await expect(blindElement).toHaveClass(/hydrated/);
});

regressionTest('focus outline and decorative icon', async ({ mount, page }) => {
  await mount(`<ix-blind label="Example label">Some content</ix-blind>`);

  const blindElement = page.locator('ix-blind');
  const headerButton = blindElement.locator('button.blind-header');
  const headerWrapper = blindElement.locator('.blind-header-wrapper');
  const collapseIcon = blindElement.locator('.collapse-icon');

  await expect(headerButton).toHaveAttribute('aria-controls');
  await expect(collapseIcon).toHaveAttribute('aria-hidden', 'true');

  await page.keyboard.press('Tab');

  await expect(headerButton).toBeFocused();
  await expect(headerWrapper).toHaveCSS('outline-style', 'solid');
  await expect(headerWrapper).toHaveCSS('outline-width', '1px');
});
