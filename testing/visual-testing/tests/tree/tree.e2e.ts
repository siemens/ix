/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { focusWithKeyboard, regressionTest } from '@utils/test';

regressionTest.describe('tree', () => {
  regressionTest('should append item to tree', async ({ page }) => {
    await page.goto('tree/basic');

    const treeViewportHandle = await page.waitForSelector('ix-tree');

    await page.evaluate((tree) => {
      const model = tree.model;

      model['last-child'] = {
        id: 'last-child',
        children: [],
        hasChildren: false,
        data: { name: 'last-child' },
      };

      model['sample'].children.push('last-child');

      tree.model = { ...model };
    }, treeViewportHandle);

    await page.waitForTimeout(500);

    await page.evaluate((treeViewport) => {
      treeViewport.scrollTop = 32 * 999;
    }, treeViewportHandle);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('should keep scroll state', async ({ page }) => {
    await page.goto('tree/basic');

    const treeViewportHandle = await page.waitForSelector('ix-tree');

    await page.evaluate((treeViewport) => {
      treeViewport.scrollTop = 32 * 50;
    }, treeViewportHandle);

    await page.evaluate((tree) => {
      const model = tree.model;

      model['insert-below-50'] = {
        id: 'insert-below-50',
        children: [],
        hasChildren: false,
        data: { name: 'insert-below-50' },
      };

      const indexOfItem50 = tree.model.sample.children.findIndex(
        (id) => id === 'sample-child-50'
      );

      model['sample'].children.splice(indexOfItem50 + 1, 0, 'insert-below-50');

      tree.model = { ...model };
    }, treeViewportHandle);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('item overflow', async ({ page }) => {
    await page.goto('tree/overflow');

    page.setViewportSize({ width: 100, height: 100 });

    const treeViewportHandle = await page.waitForSelector('ix-tree');

    await page.evaluate((tree) => {
      const model = tree.model;

      model['sample-child-1'].data.name =
        'This is a very long text that should overflow';

      tree.model = { ...model };
    }, treeViewportHandle);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('disabled item', async ({ page }) => {
    await page.goto('tree/disabled');

    await page.waitForSelector('ix-tree');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest('should show focus-visible outline', async ({ mount, page }) => {
  const container = await mount(
    `<div style="padding: 0.5rem; width: 20rem; height: 8rem">
        <ix-tree root="root"></ix-tree>
      </div>`
  );

  await page.locator('ix-tree').evaluate((tree: HTMLIxTreeElement) => {
    tree.model = {
      root: {
        id: 'root',
        children: ['item-1', 'item-2'],
        hasChildren: true,
        data: { name: '' },
      },
      'item-1': {
        id: 'item-1',
        children: [],
        hasChildren: false,
        data: { name: 'Item 1' },
      },
      'item-2': {
        id: 'item-2',
        children: [],
        hasChildren: false,
        data: { name: 'Item 2' },
      },
    };
  });

  await focusWithKeyboard(page, page.locator('ix-tree-item').first());

  expect(
    await container.screenshot({ animations: 'disabled' })
  ).toMatchSnapshot();
});
