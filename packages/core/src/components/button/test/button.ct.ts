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

declare global {
  interface Window {
    submitCount: number;
  }
}

test('renders', async ({ mount, page }) => {
  await mount(`<ix-button>Content</ix-button>`);
  const button = page.locator('ix-button');
  await expect(button).toHaveClass(/hydrated/);
});

test('show icon', async ({ mount, page }) => {
  await mount(`<ix-button icon="rocket">Content</ix-button>`);
  const button = page.locator('ix-button');
  await expect(button.locator('ix-icon')).toBeVisible();
});

test('show spinner while loading', async ({ mount, page }) => {
  await mount(`<ix-button>Content</ix-button>`);
  const button = page.locator('ix-button');

  await expect(button.locator('ix-spinner')).not.toBeVisible();
  await button.evaluate((btn: HTMLIxButtonElement) => (btn.loading = true));
  await expect(button.locator('ix-spinner')).toBeVisible();
});

test('replace icon with spinner while loading', async ({ mount, page }) => {
  await mount(`<ix-button icon="rocket">Content</ix-button>`);
  const button = page.locator('ix-button');

  await expect(button.locator('ix-spinner')).not.toBeVisible();
  await button.evaluate((btn: HTMLIxButtonElement) => (btn.loading = true));
  await expect(button.locator('ix-spinner')).toBeVisible();
  await expect(button.locator('ix-icon')).not.toBeVisible();
});

test('should not fire event when disabled', async ({ mount, page }) => {
  await mount(`<ix-button disabled>Content</ix-button>`);
  const button = page.locator('ix-button');

  await expect(button).toHaveClass(/hydrated/);
  await expect(button).toHaveCSS('pointer-events', 'none');
});

test.describe('A11y', () => {
  test('disabled', async ({ mount, page }) => {
    await mount('<ix-button disabled>Content</ix-button>');
    const button = page.locator('button');
    await expect(button).toHaveAttribute('aria-disabled');
    await page.locator('ix-button').evaluate((btn: HTMLButtonElement) => {
      btn.disabled = false;
    });
    await expect(button).not.toHaveAttribute('aria-disabled');
  });
});

test('form can be submitted multiple times', async ({ mount, page }) => {
  await mount(`
    <form id="test-form">
      <input type="text" name="test-input" required minlength="1">
      <ix-button type="submit">Submit</ix-button>
    </form>
  `);

  await page.evaluate(() => {
    const form = document.getElementById('test-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      window.submitCount = (window.submitCount || 0) + 1;
    });
  });

  const button = page.locator('ix-button');
  const input = page.locator('input[name="test-input"]');

  for (let i = 0; i < 3; i++) {
    await input.fill('test');
    await button.click();
    const submitCount = await page.evaluate(() => window.submitCount);
    expect(submitCount).toBe(i + 1);
    await page.waitForTimeout(100);
  }

  await expect(button).not.toHaveAttribute('disabled');
  await expect(button).not.toHaveClass(/loading/);
});
