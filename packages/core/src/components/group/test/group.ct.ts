/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-group></ix-group>`);
  const group = page.locator('ix-group');
  await expect(group).toHaveClass(/hydrated/);
});

test('hide expand icon initial', async ({ mount, page }) => {
  await mount(`
    <ix-group>
    </ix-group>
  `);
  const group = page.locator('ix-group');
  await expect(group).toHaveClass(/hydrated/);

  const expandIcon = group.getByTestId('expand-collapsed-icon');
  await expect(expandIcon).not.toBeVisible();

  await group.evaluate((group) => {
    const item = document.createElement('ix-group-item');
    group.appendChild(item);
  });

  await expect(expandIcon).toBeVisible();
});

test('show expand icon initial', async ({ mount, page }) => {
  await mount(`
    <ix-group>
      <ix-group-item>Item 1</ix-group-item>
    </ix-group>
  `);
  const group = page.locator('ix-group');
  await expect(group).toHaveClass(/hydrated/);

  const expandIcon = group.getByTestId('expand-collapsed-icon');
  await expect(expandIcon).toBeVisible();

  await group.evaluate((group) => {
    const item = group.querySelector('ix-group-item');
    if (item) {
      item.remove();
    }
  });

  await expect(expandIcon).not.toBeVisible();
});

test('suppress selection should not stop event propagation', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-group>
      <ix-group-item suppress-selection>Item 1</ix-group-item>
      <ix-group-item>Item 2</ix-group-item>
    </ix-group>
  `);
  const group = page.locator('ix-group');
  const expandIcon = group.getByTestId('expand-collapsed-icon');
  await expandIcon.click();

  const groupItem = page.locator('ix-group-item').first();
  await expect(group).toHaveClass(/hydrated/);

  await groupItem.evaluate((item) => {
    item.addEventListener('click', () => (item.innerHTML += 'Clicked'));
  });

  await groupItem.click();
  await expect(groupItem).toHaveText('Item 1Clicked');
});

test('prevent default', async ({ mount, page }) => {
  await mount(`
    <ix-group>
      <ix-group-item>Item 1</ix-group-item>
      <ix-group-item>Item 2</ix-group-item>
    </ix-group>
  `);
  const group = page.locator('ix-group');
  const expandIcon = group.getByTestId('expand-collapsed-icon');
  await expandIcon.click();

  const groupItem = page.locator('ix-group-item').first();
  await expect(group).toHaveClass(/hydrated/);

  await group.evaluate((item) => {
    item.addEventListener('selectedChanged', (e) => e.preventDefault());
  });

  await groupItem.click();
  await expect(groupItem).not.toHaveClass('/hydrated selected');
});
