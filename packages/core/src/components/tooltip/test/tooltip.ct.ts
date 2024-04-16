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

test.describe('a11y', () => {
  test('closes on ESC', async ({ mount, page }) => {
    await mount(`
      <ix-tooltip for=".test">tooltip</ix-tooltip>
      <ix-button class="test"></ix-button>
    `);
    const button = page.locator('ix-button');
    await button.hover();
    page.keyboard.down('Escape');
    const tooltip = page.locator('ix-tooltip');
    await expect(tooltip).not.toBeVisible();
  });
});

test('show tooltip after delay', async ({ mount, page }) => {
  await mount(`
    <ix-tooltip for=".test" show-delay="1000">tooltip</ix-tooltip>
    <ix-button class="test">button</ix-button>
  `);
  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();
  await expect(tooltip).not.toBeVisible();
  await page.waitForTimeout(1000);
  await expect(tooltip).toBeVisible();
});

test('hide tooltip after delay', async ({ mount, page }) => {
  await mount(`
    <div style="margin: 2rem">
      <ix-tooltip for=".test" hide-delay="1000">tooltip</ix-tooltip>
      <ix-button class="test">button</ix-button>
    </div>
  `);
  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();
  await expect(tooltip).toBeVisible();
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1000);
  await expect(tooltip).not.toBeVisible();
});
