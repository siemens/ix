/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-button>Content</ix-button>`);
  const button = page.locator('ix-button');
  await expect(button).toHaveClass(/hydrated/);
});

regressionTest('show icon', async ({ mount, page }) => {
  await mount(`<ix-button icon="rocket">Content</ix-button>`);
  const button = page.locator('ix-button');
  await expect(button.locator('ix-icon')).toBeVisible();
});

regressionTest('show spinner while loading', async ({ mount, page }) => {
  await mount(`<ix-button>Content</ix-button>`);
  const button = page.locator('ix-button');

  await expect(button.locator('ix-spinner')).not.toBeVisible();
  await button.evaluate((btn: HTMLIxButtonElement) => (btn.loading = true));
  await expect(button.locator('ix-spinner')).toBeVisible();
});

regressionTest(
  'replace icon with spinner while loading',
  async ({ mount, page }) => {
    await mount(`<ix-button icon="rocket">Content</ix-button>`);
    const button = page.locator('ix-button');

    await expect(button.locator('ix-spinner')).not.toBeVisible();
    await button.evaluate((btn: HTMLIxButtonElement) => (btn.loading = true));
    await expect(button.locator('ix-spinner')).toBeVisible();
    await expect(button.locator('ix-icon')).not.toBeVisible();
  }
);

regressionTest(
  'should not fire event when disabled',
  async ({ mount, page }) => {
    await mount(`<ix-button disabled>Content</ix-button>`);
    const button = page.locator('ix-button');

    await expect(button).toHaveClass(/hydrated/);
    await expect(button).toHaveCSS('pointer-events', 'none');
  }
);

regressionTest.describe('A11y', () => {
  regressionTest('disabled', async ({ mount, page }) => {
    await mount('<ix-button disabled>Content</ix-button>');
    const button = page.locator('button');
    await expect(button).toHaveAttribute('aria-disabled');
    await page.locator('ix-button').evaluate((btn: HTMLButtonElement) => {
      btn.disabled = false;
    });
    await expect(button).not.toHaveAttribute('aria-disabled');
  });
});
