/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
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
  await expect(tooltip).toHaveClass(/visible/);
  const left = (await tooltip.locator('dialog').boundingBox())?.x;

  if (!left) {
    throw new Error('Tooltip bounding box is x is undefined.');
  }

  await input.press('ArrowRight');
  await input.press('ArrowRight');

  await page.waitForTimeout(500);
  await expect(tooltip).toHaveClass(/visible/);
  const leftAfterKeyboardNavigation = (
    await tooltip.locator('dialog').boundingBox()
  )?.x;

  expect(leftAfterKeyboardNavigation).toBeGreaterThan(left);

  await input.blur();
  await page.waitForTimeout(500);
  await expect(tooltip).not.toHaveClass(/visible/);
});

test('should show tooltip while mouse drags slider handle', async ({
  page,
  mount,
}) => {
  await mount(`<ix-slider value="20"></ix-slider>`);

  const slider = page.locator('ix-slider');
  await expect(slider).toHaveClass(/hydrated/);

  const tooltip = slider.locator('ix-tooltip');

  await expect(tooltip).not.toHaveClass(/visible/);

  const box = await slider.boundingBox();

  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 3, box.y + box.height / 3);
    await expect(tooltip).toHaveClass(/visible/);
  } else {
    throw new Error('Slider bounding box is null.');
  }

  await page.mouse.up();
  await expect(tooltip).not.toHaveClass(/visible/);
});

test('should not change value - prevent default', async ({ page, mount }) => {
  await mount(`<ix-slider value="20"></ix-slider>`);
  const slider = page.locator('ix-slider');
  await slider.evaluate((s) =>
    s.addEventListener('valueChange', (e) => e.preventDefault())
  );
  await page.mouse.click(100, 16);
  await expect(slider).toHaveAttribute('value', '20');
});
