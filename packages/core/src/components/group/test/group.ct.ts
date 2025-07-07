/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-group></ix-group>`);
  const group = page.locator('ix-group');
  await expect(group).toHaveClass(/hydrated/);
});

regressionTest('hide expand icon initial', async ({ mount, page }) => {
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

regressionTest('show expand icon initial', async ({ mount, page }) => {
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

regressionTest(
  'suppress selection should not stop event propagation',
  async ({ mount, page }) => {
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
  }
);

regressionTest(
  'item prevent default selection item event',
  async ({ mount, page }) => {
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
      item.addEventListener('selectItem', (e) => e.preventDefault());
    });

    await groupItem.click();
    await expect(groupItem).not.toHaveClass(/hydrated selected/);
  }
);

regressionTest(
  'group header prevent default collapse/expand',
  async ({ mount, page }) => {
    await mount(`
    <ix-group>
      <ix-group-item>Item 1</ix-group-item>
      <ix-group-item>Item 2</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    const expandIcon = group.getByTestId('expand-collapsed-icon');

    await group.evaluate((item) => {
      item.addEventListener('collapsedChanged', (e) => e.preventDefault());
    });

    await expandIcon.click();

    await expect(group).toHaveAttribute('collapsed');
  }
);

regressionTest(
  'group header prevent default selection event',
  async ({ mount, page }) => {
    await mount(`
    <ix-group header="Test" sub-header="Test2">
      <ix-group-item>Item 1</ix-group-item>
      <ix-group-item>Item 2</ix-group-item>
    </ix-group>
  `);
    const group = page.locator('ix-group');
    const groupHeader = group.locator('.group-header');

    await group.evaluate((item) => {
      item.addEventListener('selectGroup', (e) => e.preventDefault());
    });

    await groupHeader.click();

    await expect(group).not.toHaveAttribute('selected');
  }
);
