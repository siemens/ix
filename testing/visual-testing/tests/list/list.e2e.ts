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

regressionTest.describe('list', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('list/basic');
    await expect(page.locator('ix-list')).toHaveClass(/\bhydrated\b/);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('additional actions', async ({ page }) => {
    await page.goto('list/basic');
    const firstItem = page.locator('ix-list-item').first();
    await expect(firstItem).toHaveClass(/\bhydrated\b/);
    await firstItem.hover();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('dragging', async ({ page }) => {
    await page.goto('list/basic');
    const items = page.locator('ix-list-item');
    const gripperBounds = await items
      .first()
      .locator('.drag-gripper')
      .boundingBox();
    const targetBounds = await items.nth(2).boundingBox();

    expect(gripperBounds).not.toBeNull();
    expect(targetBounds).not.toBeNull();
    await page.mouse.move(
      gripperBounds!.x + gripperBounds!.width / 2,
      gripperBounds!.y + gripperBounds!.height / 2
    );
    await page.mouse.down();
    await page.mouse.move(
      targetBounds!.x + targetBounds!.width / 2,
      targetBounds!.y + targetBounds!.height / 2
    );

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    await page.mouse.up();
  });
});
