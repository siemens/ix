/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { focusWithKeyboard, regressionTest } from '@utils/test';

regressionTest.describe('list', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('list/basic');
    await expect(page.locator('ix-list')).toHaveAttribute('hydrated');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('additional actions', async ({ page }) => {
    await page.goto('list/basic');
    const firstItem = page.locator('ix-list-item').first();
    await expect(firstItem).toHaveAttribute('hydrated');
    await firstItem.hover();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('dragging', async ({ page }) => {
    await page.goto('list/basic');
    const items = page.locator('ix-list-item');
    const draggedItem = items.first();
    await expect(draggedItem).toHaveAttribute('hydrated');
    const gripperBounds = await draggedItem
      .locator('.drag-gripper')
      .boundingBox();
    const itemBounds = await draggedItem.boundingBox();
    const listBounds = await page.locator('ix-list').boundingBox();

    expect(gripperBounds).not.toBeNull();
    expect(itemBounds).not.toBeNull();
    expect(listBounds).not.toBeNull();
    const grabOffsetY =
      gripperBounds!.y + gripperBounds!.height / 2 - itemBounds!.y;
    const listBottom = listBounds!.y + listBounds!.height;
    await page.mouse.move(
      gripperBounds!.x + gripperBounds!.width / 2,
      gripperBounds!.y + gripperBounds!.height / 2
    );
    await page.mouse.down();
    await page.mouse.move(
      gripperBounds!.x + gripperBounds!.width / 2,
      listBottom + grabOffsetY + 24
    );

    await expect(draggedItem).toHaveClass(/\bpointer-dragging\b/);
    const draggedBounds = await draggedItem.boundingBox();
    expect(draggedBounds).not.toBeNull();
    expect(draggedBounds!.y).toBeGreaterThan(listBottom);

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
    await page.mouse.up();
  });
});

regressionTest('should show focus-visible outline', async ({ page }) => {
  await page.goto('list/basic');

  await focusWithKeyboard(page, page.locator('ix-list-item').first());

  expect(
    await page.screenshot({ fullPage: true, animations: 'disabled' })
  ).toMatchSnapshot();
});
