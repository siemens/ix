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

regressionTest('renders', async ({ page, mount }) => {
  await mount(`<ix-slider></ix-slider>`);

  const slider = page.locator('ix-slider');
  await expect(slider).toHaveClass(/hydrated/);
});

regressionTest('should show tooltip by focus', async ({ page, mount }) => {
  await mount(`<ix-slider value="20"></ix-slider>`);

  const slider = page.locator('ix-slider');
  await expect(slider).toHaveClass(/hydrated/);

  const input = slider.locator('input');

  const tooltip = slider.locator('ix-tooltip');
  await input.focus();
  await expect(tooltip).toBeVisible();
  const left = (await tooltip.boundingBox())?.x;

  if (!left) {
    throw new Error('Tooltip bounding box is x is undefined.');
  }

  await input.press('ArrowRight');
  await input.press('ArrowRight');

  await page.waitForTimeout(500);
  await expect(tooltip).toBeVisible();
  const leftAfterKeyboardNavigation = (await tooltip.boundingBox())?.x;

  expect(leftAfterKeyboardNavigation).toBeGreaterThan(left);

  await input.blur();
  await page.waitForTimeout(500);
  await expect(tooltip).not.toBeVisible();
});

regressionTest(
  'should show tooltip while mouse drags slider handle',
  async ({ page, mount }) => {
    await mount(`<ix-slider value="20"></ix-slider>`);

    const slider = page.locator('ix-slider');
    await expect(slider).toHaveClass(/hydrated/);

    const tooltip = slider.locator('ix-tooltip');

    await expect(tooltip).not.toBeVisible();

    const box = await slider.boundingBox();

    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + box.width / 3, box.y + box.height / 3);
      await expect(tooltip).toBeVisible();
    } else {
      throw new Error('Slider bounding box is null.');
    }

    await page.mouse.up();
    await expect(tooltip).not.toBeVisible();
  }
);
