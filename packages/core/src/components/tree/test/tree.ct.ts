/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

const defaultModel = {
  root: {
    id: 'root',
    data: {
      name: '',
    },
    hasChildren: true,
    children: ['sample'],
  },
  sample: {
    id: 'sample',
    data: {
      name: 'Sample',
    },
    hasChildren: true,
    children: ['sample-child-1', 'sample-child-2', 'sample-child-3'],
  },
  'sample-child-1': {
    id: 'sample-child-1',
    data: {
      name: 'Sample Child 1',
    },
    hasChildren: false,
    children: [],
  },
  'sample-child-2': {
    id: 'sample-child-2',
    data: {
      name: 'Sample Child 2',
    },
    hasChildren: true,
    children: ['sample-child-4'],
  },
  'sample-child-3': {
    id: 'sample-child-3',
    data: {
      name: 'Sample Child 3',
    },
    hasChildren: false,
    children: [],
  },
  'sample-child-4': {
    id: 'sample-child-4',
    data: {
      name: 'Sample Child 4',
    },
    hasChildren: false,
    children: [],
  },
};

const initializeTree = async (mount, page: Page) => {
  await mount(`
      <div style=" height: 20rem; width: 100%;">
        <ix-tree root="root"></ix-tree>
      </div>
    `);
  const tree = page.locator('ix-tree');

  await tree.evaluate(
    (element: HTMLIxTreeElement, [model]) => {
      element.model = model;
    },
    [defaultModel]
  );

  const item = tree.locator('ix-tree-item').nth(0);
  await expect(tree).toHaveClass(/hydrated/);
  await expect(item).toBeVisible();

  return tree;
};

const updateModel = async (tree: Locator, updatedModel: any) => {
  await tree.evaluate(
    (element: HTMLIxTreeElement, [model]) => {
      element.model = model;
    },
    [updatedModel]
  );
};

regressionTest('renders', async ({ mount, page }) => {
  const tree = await initializeTree(mount, page);
  const item = tree.locator('ix-tree-item').nth(0);
  await expect(tree).toHaveClass(/hydrated/);
  await expect(item).toBeVisible();
});

regressionTest('update tree', async ({ mount, page }) => {
  const tree = await initializeTree(mount, page);

  const item = tree.locator('ix-tree-item').nth(0);
  await item.locator('.icon-toggle-container').click();

  const item2 = tree.locator('ix-tree-item').nth(2);
  await item2.locator('.icon-toggle-container').click();

  const item3 = tree.locator('ix-tree-item').nth(4);
  await expect(item3).toBeVisible();
  await expect(item3).toHaveText('Sample Child 3');
  await expect(item3).toHaveCSS('padding-left', '16px');

  await updateModel(tree, {
    root: {
      id: 'root',
      data: {
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
      },
      hasChildren: true,
      children: ['sample-child-3', 'sample-child-4'],
    },
    'sample-child-3': {
      id: 'sample-child-3',
      data: {
        name: 'Sample Child 3',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-4': {
      id: 'sample-child-4',
      data: {
        name: 'Sample Child 4',
      },
      hasChildren: false,
      children: [],
    },
  });

  await expect(tree).toHaveClass(/hydrated/);
  await expect(item).toBeVisible();
  await expect(item2).toBeVisible();

  const newChildItem = tree.locator('ix-tree-item').nth(3);
  await expect(newChildItem).toBeVisible();
  await expect(newChildItem).toHaveCSS('padding-left', '32px');
});
