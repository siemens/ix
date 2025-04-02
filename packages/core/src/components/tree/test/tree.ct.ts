/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator, Page } from '@playwright/test';
import { Mount, regressionTest } from '@utils/test';
import { TreeContext, TreeItem, TreeModel } from '../tree-model';

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

regressionTest('dropdown trigger', async ({ mount, page }) => {
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

regressionTest(
  'Detach tree, re-attach, and verify virtual scrolling functionality',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);

    let treeElement: HTMLIxTreeElement | undefined;

    await tree.evaluate((element: HTMLIxTreeElement) => {
      treeElement = element;
      const initializeTreeContext = (
        model: TreeModel<unknown>
      ): TreeContext => {
        const context: TreeContext = {};

        Object.keys(model).forEach((id) => {
          context[id] = {
            isExpanded: model[id].hasChildren,
            isSelected: false,
          };
        });

        return context;
      };

      element.context = initializeTreeContext(element.model);

      new Array(10).fill(0).forEach((_, index) => {
        const id = `Item-${index}`;
        treeElement!.model[id] = {
          id,
          data: {
            name: id,
          },
          hasChildren: false,
          children: [],
        };

        treeElement?.model.root.children.push(id);
      });

      const parent = element.parentElement;
      if (parent) {
        parent.removeChild(element);
      }
    });

    await expect(tree).not.toBeVisible();

    await page.evaluate(() => {
      const newDiv = document.createElement('div');
      newDiv.id = 'new-container';
      newDiv.style.height = 'inherit';

      document.querySelector('#mount > div')?.appendChild(newDiv);

      if (treeElement !== undefined) {
        newDiv.appendChild(treeElement);
      }
    });

    await page.waitForSelector('ix-tree');

    const newContainer = page.locator('#new-container');
    const reattachedTree = newContainer.locator('ix-tree');

    await expect(newContainer).toBeVisible();
    await expect(reattachedTree).toBeVisible();

    await reattachedTree.evaluate((element: HTMLIxTreeElement) => {
      element.scrollTo({ top: element.scrollHeight, behavior: 'instant' });
    });

    const lastItem = reattachedTree.locator('ix-tree-item').last();
    await expect(lastItem).toBeVisible();

    await reattachedTree.evaluate((element: HTMLIxTreeElement) => {
      element.scrollTo({ top: 0, behavior: 'instant' });
    });

    const firstItem = reattachedTree.locator('ix-tree-item').first();
    await expect(firstItem).toBeVisible();
  }
);
