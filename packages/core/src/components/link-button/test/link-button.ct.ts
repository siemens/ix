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
  await mount(
    '<ix-link-button url="https://ix.siemens.io/">IX home</ix-link-button>'
  );

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    '<ix-link-button url="https://ix.siemens.io/">IX home</ix-link-button>'
  );

  const linkButton = page.locator('ix-link-button');
  const link = linkButton.getByRole('link', { name: 'IX home' });

  await expect(linkButton).toHaveClass(/\bhydrated\b/);
  await expect(link).toHaveAttribute('href', 'https://ix.siemens.io/');
  await expect(link).not.toHaveAttribute('title');
});

regressionTest(
  'skips disabled link buttons during keyboard navigation',
  async ({ mount, page }) => {
    await mount(`
      <button>Previous</button>
      <ix-link-button disabled url="https://ix.siemens.io/">IX home</ix-link-button>
      <button>Next</button>
    `);

    const linkButton = page.locator('ix-link-button');
    const link = linkButton.locator('a');
    const previousButton = page.getByRole('button', { name: 'Previous' });
    const nextButton = page.getByRole('button', { name: 'Next' });

    await expect(linkButton).toHaveClass(/\bhydrated\b/);
    await expect(link).toHaveAttribute('aria-disabled', 'true');
    await expect(link).toHaveAttribute('tabindex', '-1');
    await expect(link).not.toHaveAttribute('href');

    await previousButton.focus();
    await page.keyboard.press('Tab');

    await expect(nextButton).toBeFocused();
  }
);
