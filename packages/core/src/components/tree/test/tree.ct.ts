/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator, Page } from '@playwright/test';
import { Mount, test } from '@utils/test';
import { TreeItem } from '../tree-model';

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

const initializeTree = async (mount: Mount, page: Page) => {
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

test('renders', async ({ mount, page }) => {
  const tree = await initializeTree(mount, page);
  const item = tree.locator('ix-tree-item').nth(0);
  await expect(tree).toHaveClass(/hydrated/);
  await expect(item).toBeVisible();
});

test('update tree', async ({ mount, page }) => {
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

test('dropdown trigger', async ({ mount, page }) => {
  const tree = await initializeTree(mount, page);

  await tree.evaluate(
    (t) =>
      ((t as HTMLIxTreeElement).renderItem = (
        _index,
        item,
        _dataList,
        context,
        update
      ) => {
        const el = document.createElement('ix-tree-item');
        const treeItem = item as TreeItem<unknown>;
        el.hasChildren = treeItem.hasChildren;
        el.context = context[treeItem.id];
        el.id = `trigger-${treeItem.id}`;

        const div = document.createElement('div');
        div.style.display = 'flex';

        const name = document.createElement('span');
        const dd = document.createElement('ix-dropdown');
        const ddItem = document.createElement('ix-dropdown-item');
        ddItem.innerHTML = 'Action 1';
        dd.trigger = `trigger-${treeItem.id}`;

        div.appendChild(name);
        div.appendChild(dd);
        dd.appendChild(ddItem);

        name.innerText = treeItem.id;

        el.appendChild(div);

        update((updateTreeItem) => {
          name.innerText = updateTreeItem.data.name;
        });

        return el;
      })
  );

  const root = tree.locator('ix-tree-item').first();
  await root.locator('.icon-toggle-container').click();

  const item1 = tree.locator('ix-tree-item').nth(1);
  const dropdown1 = item1.locator('ix-dropdown');
  await item1.click();
  await expect(dropdown1).toBeVisible();

  const item2 = tree.locator('ix-tree-item').nth(2);
  const dropdown2 = item2.locator('ix-dropdown');
  await item2.click();
  await expect(dropdown2).toBeVisible();
});

test('should expand and collapse but not select item when toggle icon is clicked twice', async ({
  mount,
  page,
}) => {
  const tree = await initializeTree(mount, page);
  await expect(tree).toHaveClass(/hydrated/);

  const iconElement = tree
    .locator('ix-tree-item', {
      hasText: 'Sample',
      hasNotText: 'Child',
    })
    .locator('ix-icon');
  await expect(iconElement).not.toHaveClass(/icon-toggle-down/);

  await iconElement.click();

  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 1',
    })
  ).toBeVisible();
  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 2',
    })
  ).toBeVisible();
  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 3',
    })
  ).toBeVisible();

  const sampleItemAfterFirstClick = tree.locator('ix-tree-item', {
    hasText: 'Sample',
    hasNotText: 'Child',
  });

  await expect(sampleItemAfterFirstClick).not.toHaveClass(/selected/);
  await expect(sampleItemAfterFirstClick.locator('ix-icon')).toHaveClass(
    /icon-toggle-down/
  );

  await iconElement.click();

  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 1',
    })
  ).not.toBeVisible();
  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 2',
    })
  ).not.toBeVisible();
  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 3',
    })
  ).not.toBeVisible();

  const sampleItemAfterSecondClick = tree.locator('ix-tree-item', {
    hasText: 'Sample',
    hasNotText: 'Child',
  });

  await expect(sampleItemAfterSecondClick).not.toHaveClass(/selected/);
  await expect(sampleItemAfterSecondClick.locator('ix-icon')).not.toHaveClass(
    /icon-toggle-down/
  );
});

test('should select item when it is clicked', async ({ mount, page }) => {
  const tree = await initializeTree(mount, page);
  await expect(tree).toHaveClass(/hydrated/);

  const sampleItem = tree.locator('ix-tree-item', {
    hasText: 'Sample',
    hasNotText: 'Child',
  });

  await sampleItem.click();
  await expect(sampleItem).toHaveClass(/selected/);
});

test('should select item when icon-toggle-container is clicked without the toggle icon to be visible', async ({
  mount,
  page,
}) => {
  const tree = await initializeTree(mount, page);
  await expect(tree).toHaveClass(/hydrated/);

  await tree
    .locator('ix-tree-item', {
      hasText: 'Sample',
      hasNotText: 'Child',
    })
    .locator('ix-icon')
    .click();

  const element1 = tree.locator('ix-tree-item', {
    hasText: 'Sample Child 1',
  });
  await expect(element1).not.toHaveClass(/selected/);
  await element1.locator('.icon-toggle-container').click();

  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 1',
    })
  ).toHaveClass(/selected/);
});

test('item should stay selected when toggle icon is clicked', async ({
  mount,
  page,
}) => {
  const tree = await initializeTree(mount, page);
  await expect(tree).toHaveClass(/hydrated/);

  await tree
    .locator('ix-tree-item', {
      hasText: 'Sample',
      hasNotText: 'Child',
    })
    .locator('ix-icon')
    .click();

  const element2 = tree.locator('ix-tree-item', {
    hasText: 'Sample Child 2',
  });

  await element2.click();
  await expect(element2).toHaveClass(/selected/);
  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 4',
    })
  ).toBeVisible();

  await element2.locator('ix-icon').click();

  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 4',
    })
  ).not.toBeVisible();

  await expect(
    tree.locator('ix-tree-item', {
      hasText: 'Sample Child 2',
    })
  ).toHaveClass(/selected/);
});
