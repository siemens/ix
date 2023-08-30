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

test('renders', async ({ page, mount }) => {
  await mount(`<ix-slider></ix-slider>`);

  const slider = page.locator('ix-slider');
  await expect(slider).toHaveClass(/hydrated/);
});

test('should show tooltip by focus', async ({ page, mount }) => {
  await mount(`<ix-slider value="20"></ix-slider>`);

  const slider = page.locator('ix-slider');
  await expect(slider).toHaveClass(/hydrated/);

  const input = slider.locator('input');

  const tooltip = slider.locator('ix-tooltip');
  await input.focus();
  await expect(tooltip).toBeVisible();
  const left = (await tooltip.boundingBox()).x;

  await input.press('ArrowRight');
  await input.press('ArrowRight');

  await page.waitForTimeout(500);
  await expect(tooltip).toBeVisible();
  const leftAfterKeyboardNavigation = (await tooltip.boundingBox()).x;

  expect(leftAfterKeyboardNavigation).toBeGreaterThan(left);

  await input.blur();
  await page.waitForTimeout(500);
  await expect(tooltip).not.toBeVisible();
});
