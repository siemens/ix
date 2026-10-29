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
  await expect(tree).toHaveAttribute('hydrated');
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

regressionTest.describe('accessibility', () => {
  regressionTest('collapsed', async ({ mount, page, makeAxeBuilder }) => {
    await initializeTree(mount, page);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  regressionTest('expanded', async ({ mount, page, makeAxeBuilder }) => {
    const tree = await initializeTree(mount, page);

    await tree
      .locator('ix-tree-item', { hasText: 'Sample', hasNotText: 'Child' })
      .locator('ix-icon')
      .click();

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

regressionTest('renders', async ({ mount, page }) => {
  const tree = await initializeTree(mount, page);
  const item = tree.locator('ix-tree-item').nth(0);
  await expect(tree).toHaveAttribute('hydrated');
  await expect(tree).toHaveAttribute('role', 'tree');
  await expect(item).toBeVisible();
  await expect(item).toHaveAttribute('role', 'treeitem');
  await expect(item.locator('.icon-toggle')).toHaveCSS('width', '24px');
  await expect(item.locator('.icon-toggle')).toHaveCSS('height', '24px');
});

regressionTest(
  'uses configurable expand and collapse labels',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    const item = tree.locator('ix-tree-item', {
      hasText: 'Sample',
      hasNotText: 'Child',
    });

    await item.evaluate((element: HTMLIxTreeItemElement) => {
      element.ariaLabelTreeCollapsed = 'Open branch';
      element.ariaLabelTreeExpanded = 'Close branch';
    });

    await item.getByRole('button', { name: 'Open branch' }).click();
    await expect(
      item.getByRole('button', { name: 'Close branch' })
    ).toBeVisible();

    await item.evaluate((element: HTMLIxTreeItemElement) => {
      element.ariaLabelChevronIcon = 'Toggle branch';
    });
    await expect(
      item.getByRole('button', { name: 'Toggle branch' })
    ).toBeVisible();
  }
);

regressionTest('update tree', async ({ mount, page }) => {
  const tree = await initializeTree(mount, page);

  const item = tree.locator('ix-tree-item').nth(0);
  await item.locator('.icon-toggle-container').click();

  const item2 = tree.locator('ix-tree-item').nth(2);
  await item2.locator('.icon-toggle-container').click();

  const item3 = tree.locator('ix-tree-item').nth(4);
  await expect(item3).toBeVisible();
  await expect(item3).toHaveText(/Sample Child 3/);
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

  await expect(tree).toHaveAttribute('hydrated');
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
        element.model[id] = {
          id,
          data: {
            name: id,
          },
          hasChildren: false,
          children: [],
        };

        element.model.root.children.push(id);
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

regressionTest(
  'should expand and collapse but not select item when toggle icon is clicked twice',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    await expect(tree).toHaveAttribute('hydrated');

    const sampleItem = tree.locator('ix-tree-item', {
      hasText: 'Sample',
      hasNotText: 'Child',
    });

    const iconElement = sampleItem.locator('ix-icon');
    await expect(iconElement).not.toHaveClass(/icon-toggle-down/);
    await iconElement.click();

    const items = tree.locator('ix-tree-item', {
      hasText: 'Sample Child ',
    });

    await expect(items.nth(0)).toBeVisible();
    await expect(items.nth(1)).toBeVisible();
    await expect(items.nth(2)).toBeVisible();

    await expect(sampleItem).not.toHaveClass(/selected/);
    await expect(iconElement).toHaveClass(/icon-toggle-down/);

    await iconElement.click();

    await expect(items.nth(0)).not.toBeVisible();
    await expect(items.nth(1)).not.toBeVisible();
    await expect(items.nth(2)).not.toBeVisible();

    await expect(sampleItem).not.toHaveClass(/selected/);
    await expect(iconElement).not.toHaveClass(/icon-toggle-down/);
  }
);

regressionTest(
  'should select but not toggle item when it is clicked',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    await expect(tree).toHaveAttribute('hydrated');

    const sampleItem = tree.locator('ix-tree-item', {
      hasText: 'Sample',
      hasNotText: 'Child',
    });

    await sampleItem.click();
    await expect(sampleItem).toHaveClass(/selected/);

    const items = tree.locator('ix-tree-item', {
      hasText: 'Sample Child ',
    });

    await expect(items.nth(0)).not.toBeVisible();
    await expect(items.nth(1)).not.toBeVisible();
    await expect(items.nth(2)).not.toBeVisible();
  }
);

regressionTest(
  'should select item when icon-toggle-container is clicked without the toggle icon to be visible',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    await expect(tree).toHaveAttribute('hydrated');

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
    await expect(element1).toHaveClass(/selected/);
  }
);

regressionTest(
  'item should stay selected when toggle icon is clicked',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    await expect(tree).toHaveAttribute('hydrated');

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
    await element2.locator('ix-icon').click();

    const element4 = tree.locator('ix-tree-item', {
      hasText: 'Sample Child 4',
    });
    await expect(element4).toBeVisible();

    await element2.locator('ix-icon').click();

    await expect(element4).not.toBeVisible();
    await expect(element2).toHaveClass(/selected/);
  }
);

regressionTest(
  'should select and toggle item when it is clicked and toggle on item is enabled',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    await tree.evaluate((treeElement: HTMLIxTreeElement) => {
      treeElement.setAttribute('toggle-on-item-click', 'true');
    });
    await expect(tree).toHaveAttribute('hydrated');

    const sampleItem = tree.locator('ix-tree-item', {
      hasText: 'Sample',
      hasNotText: 'Child',
    });

    await sampleItem.click();
    await expect(sampleItem).toHaveClass(/selected/);

    const items = tree.locator('ix-tree-item', {
      hasText: 'Sample Child ',
    });
    await expect(items.nth(0)).toBeVisible();
    await expect(items.nth(1)).toBeVisible();
    await expect(items.nth(2)).toBeVisible();

    sampleItem.click();

    await expect(items.nth(0)).not.toBeVisible();
    await expect(items.nth(1)).not.toBeVisible();
    await expect(items.nth(2)).not.toBeVisible();
  }
);

regressionTest(
  'should handle click events on custom rendered tree items',
  async ({ mount, page }) => {
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
          const treeItem = item as TreeItem<any>;
          el.hasChildren = treeItem.hasChildren;
          el.context = context[treeItem.id];

          const container = document.createElement('div');
          container.classList.add('custom-content');
          container.style.display = 'flex';
          container.style.alignItems = 'center';

          const name = document.createElement('span');
          name.classList.add('custom-name');
          name.innerText = treeItem.data.name;

          container.appendChild(name);
          el.appendChild(container);

          update((updateTreeItem) => {
            name.innerText = updateTreeItem.data.name;
          });

          return el;
        })
    );

    const root = tree.locator('ix-tree-item').first();
    await root.locator('.icon-toggle-container').click();

    const customItem = tree.locator('ix-tree-item').nth(1);
    const customName = customItem.locator('.custom-name');
    await expect(customName).toBeVisible();
    await expect(customName).toHaveText('Sample Child 1');
    await customName.click();
    await expect(customItem).toHaveClass(/selected/);
  }
);

const createLargeTreeModel = (itemCount: number): Record<string, any> => {
  const model: Record<string, any> = {
    root: {
      id: 'root',
      data: { name: '' },
      hasChildren: true,
      children: [] as string[],
    },
  };

  for (let i = 1; i <= itemCount; i++) {
    const id = `item-${i}`;
    model['root'].children.push(id);
    model[id] = {
      id,
      data: { name: `Item ${i}` },
      hasChildren: false,
      children: [],
    };
  }

  return model;
};

regressionTest(
  'should not trigger continuous requestAnimationFrame when idle',
  async ({ mount, page }) => {
    await mount(`
      <div style="height: 10rem; width: 100%;">
        <ix-tree root="root"></ix-tree>
      </div>
    `);

    const tree = page.locator('ix-tree');
    await tree.evaluate(
      (element: HTMLIxTreeElement, [model]) => {
        element.model = model;
      },
      [createLargeTreeModel(50)]
    );

    await expect(tree).toHaveAttribute('hydrated');

    const rafCallCount = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let count = 0;
        const originalRAF = globalThis.requestAnimationFrame;

        globalThis.requestAnimationFrame = (callback: FrameRequestCallback) => {
          count++;
          return originalRAF(callback);
        };

        setTimeout(() => {
          globalThis.requestAnimationFrame = originalRAF;
          resolve(count);
        }, 500);
      });
    });

    expect(rafCallCount).toBeLessThan(5);
  }
);

regressionTest(
  'should trigger requestAnimationFrame only during scroll',
  async ({ mount, page }) => {
    await mount(`
      <div style="height: 10rem; width: 100%;">
        <ix-tree root="root"></ix-tree>
      </div>
    `);

    const tree = page.locator('ix-tree');
    await tree.evaluate(
      (element: HTMLIxTreeElement, [model]) => {
        element.model = model;
      },
      [createLargeTreeModel(100)]
    );

    await expect(tree).toHaveAttribute('hydrated');

    const rafCalledDuringScroll = await tree.evaluate((element) => {
      return new Promise<boolean>((resolve) => {
        let rafCalled = false;
        const originalRAF = globalThis.requestAnimationFrame;

        globalThis.requestAnimationFrame = (callback: FrameRequestCallback) => {
          rafCalled = true;
          return originalRAF(callback);
        };

        element.scrollTop = 200;

        setTimeout(() => {
          globalThis.requestAnimationFrame = originalRAF;
          resolve(rafCalled);
        }, 100);
      });
    });

    expect(rafCalledDuringScroll).toBe(true);

    const rafCallCountAfterScroll = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let count = 0;
        const originalRAF = globalThis.requestAnimationFrame;

        globalThis.requestAnimationFrame = (callback: FrameRequestCallback) => {
          count++;
          return originalRAF(callback);
        };

        setTimeout(() => {
          globalThis.requestAnimationFrame = originalRAF;
          resolve(count);
        }, 300);
      });
    });

    expect(rafCallCountAfterScroll).toBeLessThan(5);
  }
);

async function assertDisabledItemCannotBeSelectedOrToggled(
  mount: Mount,
  page: Page,
  model: TreeModel<unknown>,
  context: TreeContext,
  parentLabel: string
) {
  await mount(`
      <div style="height: 20rem; width: 100%;">
        <ix-tree root="root"></ix-tree>
      </div>
    `);

  const tree = page.locator('ix-tree');
  await tree.evaluate(
    (element: HTMLIxTreeElement, args) => {
      element.model = args.model;
      element.context = args.context;
    },
    { model, context }
  );

  await expect(tree).toHaveAttribute('hydrated');

  const parent = tree.locator('ix-tree-item', { hasText: parentLabel });

  await expect(parent).toHaveClass(/disabled/);
  await expect(parent).toHaveAttribute('aria-disabled', 'true');

  await parent.click({ force: true });
  await expect(parent).not.toHaveClass(/selected/);

  await parent.locator('.icon-toggle-container').click({ force: true });
  await expect(
    tree.locator('ix-tree-item', { hasText: 'Child' })
  ).not.toBeVisible();
}

regressionTest(
  'item.disabled - cannot be selected or toggled',
  async ({ mount, page }) => {
    await assertDisabledItemCannotBeSelectedOrToggled(
      mount,
      page,
      {
        root: {
          id: 'root',
          data: { name: '' },
          hasChildren: true,
          children: ['parent'],
        },
        parent: {
          id: 'parent',
          data: { name: 'Disabled Parent' },
          hasChildren: true,
          children: ['child'],
          disabled: true,
        },
        child: {
          id: 'child',
          data: { name: 'Child' },
          hasChildren: false,
          children: [],
        },
      },
      {
        root: { isExpanded: true, isSelected: false },
        parent: { isExpanded: false, isSelected: false },
        child: { isExpanded: false, isSelected: false },
      },
      'Disabled Parent'
    );
  }
);

regressionTest(
  'context.isDisabled - cannot be selected or toggled',
  async ({ mount, page }) => {
    await assertDisabledItemCannotBeSelectedOrToggled(
      mount,
      page,
      {
        root: {
          id: 'root',
          data: { name: '' },
          hasChildren: true,
          children: ['parent'],
        },
        parent: {
          id: 'parent',
          data: { name: 'Context Disabled Parent' },
          hasChildren: true,
          children: ['child'],
        },
        child: {
          id: 'child',
          data: { name: 'Child' },
          hasChildren: false,
          children: [],
        },
      },
      {
        root: { isExpanded: true, isSelected: false },
        parent: { isExpanded: false, isSelected: false, isDisabled: true },
        child: { isExpanded: false, isSelected: false },
      },
      'Context Disabled Parent'
    );
  }
);

for (const key of ['Enter', 'Space']) {
  regressionTest(
    `should expand item when ${key} is pressed on chevron`,
    async ({ mount, page }) => {
      const tree = await initializeTree(mount, page);
      const sampleItem = tree.locator('ix-tree-item', {
        hasText: 'Sample',
        hasNotText: 'Child',
      });
      const chevron = sampleItem.getByRole('button', {
        name: 'Expand tree item',
      });

      await chevron.focus();
      await page.keyboard.press(key);

      await expect(
        tree.locator('ix-tree-item', { hasText: 'Sample Child ' }).first()
      ).toBeVisible();
      const expandedChevron = sampleItem.getByRole('button', {
        name: 'Collapse tree item',
      });
      await expect(expandedChevron).toBeFocused();
      await expect(expandedChevron).toHaveAttribute('aria-expanded', 'true');
    }
  );

  regressionTest(
    `should select item when ${key} is pressed on tree-node-container`,
    async ({ mount, page }) => {
      const tree = await initializeTree(mount, page);
      const sampleItem = tree.locator('ix-tree-item', {
        hasText: 'Sample',
        hasNotText: 'Child',
      });
      const container = sampleItem.locator('.tree-node-container');

      await container.focus();
      await page.keyboard.press(key);

      await expect(sampleItem).toHaveClass(/selected/);
    }
  );
}

regressionTest(
  'navigates visible tree items without changing selection',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    const sample = tree.locator('[data-tree-node-id="sample"]');
    const child1 = tree.locator('[data-tree-node-id="sample-child-1"]');
    const child2 = tree.locator('[data-tree-node-id="sample-child-2"]');
    const child3 = tree.locator('[data-tree-node-id="sample-child-3"]');
    const child4 = tree.locator('[data-tree-node-id="sample-child-4"]');
    const row = (item: Locator) => item.locator('.tree-node-container');

    await expect(sample).toHaveAttribute('tabindex', '0');
    await row(sample).focus();
    await page.keyboard.press('ArrowRight');
    await expect(sample).toHaveAttribute('aria-expanded', 'true');
    await expect(row(sample)).toBeFocused();
    await expect(child1).toHaveAttribute('aria-level', '2');
    await expect(child1).toHaveAttribute('aria-posinset', '1');
    await expect(child1).toHaveAttribute('aria-setsize', '3');

    await page.keyboard.press('ArrowRight');
    await expect(child1).toBeFocused();
    await expect(sample).toHaveAttribute('tabindex', '-1');
    await page.keyboard.press('ArrowDown');
    await expect(child2).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(child2).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('ArrowDown');
    await expect(child4).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await expect(child2).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await expect(child2).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('ArrowUp');
    await expect(child1).toBeFocused();
    await page.keyboard.press('End');
    await expect(child3).toBeFocused();
    await page.keyboard.press('Home');
    await expect(sample).toBeFocused();
    await expect(sample).toHaveAttribute('aria-selected', 'false');
    await page.keyboard.press('Enter');
    await expect(sample).toHaveAttribute('aria-selected', 'true');
  }
);

regressionTest(
  'does not navigate the tree when a slotted control receives arrow keys',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    const sample = tree.locator('[data-tree-node-id="sample"]');
    await sample.evaluate((element) => {
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.setAttribute('aria-label', 'Option');
      element.appendChild(input);
    });

    const checkbox = sample.getByRole('checkbox', { name: 'Option' });
    await checkbox.focus();
    await page.keyboard.press('ArrowDown');
    await expect(checkbox).toBeFocused();
    await page.keyboard.press('Space');
    await expect(checkbox).toBeChecked();
  }
);

regressionTest(
  'focuses disabled children when navigating into an expanded branch',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    await tree.evaluate((element: HTMLIxTreeElement) => {
      element.model = {
        ...element.model,
        'sample-child-1': {
          ...element.model['sample-child-1'],
          disabled: true,
        },
      };
    });

    const sample = tree.locator('[data-tree-node-id="sample"]');
    await sample.locator('.tree-node-container').focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await expect(
      tree.locator('[data-tree-node-id="sample-child-1"]')
    ).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(
      tree.locator('[data-tree-node-id="sample-child-2"]')
    ).toBeFocused();
  }
);

for (const source of ['model', 'context'] as const) {
  regressionTest(
    `disabled ${source} treeitems remain in the roving focus order`,
    async ({ mount, page, makeAxeBuilder }) => {
      const tree = await initializeTree(mount, page);
      await tree.evaluate((element: HTMLIxTreeElement, source) => {
        const disabledIds = ['sample', 'sample-child-1', 'sample-child-3'];
        element.context = {
          sample: { isExpanded: true, isSelected: false },
        };
        if (source === 'model') {
          element.model = Object.fromEntries(
            Object.entries(element.model).map(([id, item]) => [
              id,
              { ...item, disabled: disabledIds.includes(id) },
            ])
          );
        } else {
          element.context = {
            ...element.context,
            ...Object.fromEntries(
              disabledIds.map((id) => [
                id,
                {
                  isExpanded: id === 'sample',
                  isSelected: false,
                  isDisabled: true,
                },
              ])
            ),
          };
        }
      }, source);

      const parent = tree.locator('[data-tree-node-id="sample"]');
      const firstChild = tree.locator('[data-tree-node-id="sample-child-1"]');
      const lastChild = tree.locator('[data-tree-node-id="sample-child-3"]');
      await expect(parent).toHaveAttribute('aria-disabled', 'true');
      await expect(parent).toHaveAttribute('tabindex', '0');
      await parent.focus();
      await expect(parent).toBeFocused();
      await page.keyboard.press('ArrowLeft');
      await expect(parent).toHaveAttribute('aria-expanded', 'true');
      await page.keyboard.press('ArrowRight');
      await expect(firstChild).toBeFocused();
      await expect(firstChild).toHaveAttribute('aria-disabled', 'true');
      await expect(firstChild).toHaveAttribute('tabindex', '0');
      await expect(parent).toHaveAttribute('tabindex', '-1');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Space');
      await expect(firstChild).toHaveAttribute('aria-selected', 'false');
      await page.keyboard.press('ArrowLeft');
      await expect(parent).toBeFocused();
      await page.keyboard.press('End');
      await expect(lastChild).toBeFocused();
      await page.keyboard.press('ArrowUp');
      await expect(
        tree.locator('[data-tree-node-id="sample-child-2"]')
      ).toBeFocused();
      await page.keyboard.press('Home');
      await expect(parent).toBeFocused();
      await expect(tree.locator('ix-tree-item[tabindex="0"]')).toHaveCount(1);

      const results = await makeAxeBuilder().analyze();
      expect(results.violations).toEqual([]);

      await tree.evaluate((element: HTMLIxTreeElement) => {
        element.context = {
          ...element.context,
          sample: { ...element.context['sample'], isExpanded: false },
        };
      });
      await expect(parent).toHaveAttribute('aria-expanded', 'false');
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Space');
      await expect(parent).toBeFocused();
      await expect(parent).toHaveAttribute('aria-expanded', 'false');
      await expect(parent).toHaveAttribute('aria-selected', 'false');
    }
  );

  regressionTest(
    `updates accessible disabled state from ${source} without losing focus`,
    async ({ mount, page }) => {
      const tree = await initializeTree(mount, page);
      const item = tree.getByRole('treeitem');
      await expect(item).toHaveAttribute('aria-disabled', 'false');
      await item.focus();

      for (const disabled of [true, false]) {
        await tree.evaluate(
          (element: HTMLIxTreeElement, { source, disabled }) => {
            if (source === 'model') {
              element.model = {
                ...element.model,
                sample: { ...element.model['sample'], disabled },
              };
            } else {
              element.context = {
                ...element.context,
                sample: {
                  isExpanded: false,
                  isSelected: false,
                  isDisabled: disabled,
                },
              };
            }
          },
          { source, disabled }
        );
        await expect(item).toHaveAttribute('aria-disabled', String(disabled));
        await expect(item).toHaveAttribute('tabindex', '0');
        await expect(item).toBeFocused();
      }
    }
  );
}

regressionTest(
  'makes the selected visible item the tree entry point',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    await tree.evaluate((element: HTMLIxTreeElement) => {
      element.context = {
        sample: { isExpanded: true, isSelected: false },
        'sample-child-1': { isExpanded: false, isSelected: true },
      };
    });

    const sample = tree.locator('[data-tree-node-id="sample"]');
    const selected = tree.locator('[data-tree-node-id="sample-child-1"]');
    await expect(selected).toHaveAttribute('tabindex', '0');
    await expect(sample).toHaveAttribute('tabindex', '-1');
    await expect(selected).toHaveAttribute('aria-selected', 'true');

    await selected.focus();
    await page.keyboard.press('Space');
    await expect(selected).toBeFocused();
    await expect(selected).toHaveAttribute('aria-selected', 'true');
  }
);

regressionTest(
  'navigates to tree items outside the virtualized viewport',
  async ({ mount, page }) => {
    await mount(
      '<div style="height: 10rem"><ix-tree root="root"></ix-tree></div>'
    );
    const tree = page.locator('ix-tree');
    await tree.evaluate((element: HTMLIxTreeElement) => {
      const children = Array.from(
        { length: 40 },
        (_, index) => `item-${index}`
      );
      element.model = {
        root: {
          id: 'root',
          data: { name: '' },
          hasChildren: true,
          children,
        },
        ...Object.fromEntries(
          children.map((id) => [
            id,
            { id, data: { name: id }, hasChildren: false, children: [] },
          ])
        ),
      } as TreeModel<{ name: string }>;
    });

    const first = tree.locator('[data-tree-node-id="item-0"]');
    const last = tree.locator('[data-tree-node-id="item-39"]');
    await first.locator('.tree-node-container').focus();
    await page.keyboard.press('End');
    await expect(last).toBeFocused();
    await page.keyboard.press('Home');
    await expect(first).toBeFocused();
  }
);

async function initializeVirtualizedTree(
  mount: Mount,
  page: Page,
  inModal: boolean,
  selectedId?: string
) {
  const content = `
    <button type="button">Before virtualized tree</button>
    <div style="height: 8rem"><ix-tree root="root"></ix-tree></div>
    <button type="button">After virtualized tree</button>
  `;
  await mount(
    inModal
      ? `<ix-modal><ix-modal-header>Tree</ix-modal-header><ix-modal-content>${content}</ix-modal-content></ix-modal>`
      : `<div>${content}</div>`
  );
  const tree = page.getByRole('tree', { includeHidden: true });
  await tree.evaluate((element: HTMLIxTreeElement, selectedId) => {
    const children = Array.from({ length: 200 }, (_, i) => `item-${i}`);
    element.model = {
      root: { id: 'root', data: { name: '' }, hasChildren: true, children },
      ...Object.fromEntries(
        children.map((id) => [
          id,
          { id, data: { name: id }, hasChildren: false, children: [] },
        ])
      ),
    };
    if (selectedId) {
      element.context = {
        [selectedId]: { isSelected: true, isExpanded: false },
      };
    }
  }, selectedId);
  if (inModal) {
    await page
      .locator('ix-modal')
      .evaluate((element: HTMLIxModalElement) => element.showModal());
    await expect(page.getByRole('dialog')).toHaveClass(/modal-open-settled/);
    await tree.evaluate((element: HTMLIxTreeElement) => element.refreshTree());
  }
  await expect(tree.locator('ix-tree-item').first()).toHaveAttribute(
    'hydrated'
  );
  return tree;
}

async function flushVirtualizedScroll(page: Page) {
  // Scroll dispatch and the virtualizer's scheduled repaint span two frames.
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      })
  );
}

for (const inModal of [false, true]) {
  regressionTest(
    `preserves focus across virtualized chunks (modal: ${inModal})`,
    async ({ mount, page }) => {
      const tree = await initializeVirtualizedTree(mount, page, inModal);
      const first = tree.locator('[data-tree-node-id="item-0"]');
      await expect(first).toHaveAttribute('hydrated');
      await first.focus();

      for (let index = 0; index < 30; index++) {
        const item = tree.locator(`[data-tree-node-id="item-${index}"]`);
        await flushVirtualizedScroll(page);
        await expect(item).toBeFocused();
        await expect(item).toHaveAttribute('tabindex', '0');
        await expect(tree.locator('ix-tree-item[tabindex="0"]')).toHaveCount(1);
        await page.keyboard.press('ArrowDown');
      }
      await page.keyboard.press('End');
      await flushVirtualizedScroll(page);
      await expect(
        tree.locator('[data-tree-node-id="item-199"]')
      ).toBeFocused();
      await page.keyboard.press('ArrowUp');
      await expect(
        tree.locator('[data-tree-node-id="item-198"]')
      ).toBeFocused();
    }
  );

  regressionTest(
    `preserves Tab focus on a rendered off-screen virtualized treeitem (modal: ${inModal})`,
    async ({ mount, page }) => {
      const tree = await initializeVirtualizedTree(
        mount,
        page,
        inModal,
        'item-8'
      );
      const item = tree.locator('[data-tree-node-id="item-8"]');
      await expect(item).toHaveAttribute('tabindex', '0');
      await page
        .getByRole('button', { name: 'Before virtualized tree' })
        .focus();
      await page.keyboard.press('Tab');
      await flushVirtualizedScroll(page);
      await expect(item).toBeFocused();
      await expect(item).toBeInViewport();
      await expect(item).toHaveAttribute('tabindex', '0');
      await page.keyboard.press('ArrowDown');
      await expect(tree.locator('[data-tree-node-id="item-9"]')).toBeFocused();
    }
  );
}

for (const inModal of [false, true]) {
  regressionTest(
    `focuses the first node on tree entry when nothing is selected (modal: ${inModal})`,
    async ({ mount, page }) => {
      const tree = await initializeVirtualizedTree(mount, page, inModal);
      await tree.evaluate((element) => {
        element.scrollTop = element.scrollHeight;
      });
      await flushVirtualizedScroll(page);
      const first = tree.getByRole('treeitem', {
        name: 'item-0',
        exact: true,
      });
      await expect(first).toHaveCount(0);
      await expect(tree).toHaveAttribute('tabindex', '0');
      await page
        .getByRole('button', { name: 'Before virtualized tree' })
        .focus();
      await page.keyboard.press('Tab');
      await expect(first).toBeFocused();
      await expect(first).toBeInViewport();
      await page.keyboard.press('ArrowDown');
      await expect(
        tree.getByRole('treeitem', { name: 'item-1', exact: true })
      ).toBeFocused();
      await page.keyboard.press('Tab');
      await expect(
        page.getByRole('button', { name: 'After virtualized tree' })
      ).toBeFocused();
      await page.keyboard.press('Shift+Tab');
      await expect(first).toBeFocused();
      await expect(tree.getByRole('treeitem', { selected: true })).toHaveCount(
        0
      );
      await page.keyboard.press('Shift+Tab');
      await expect(
        page.getByRole('button', { name: 'Before virtualized tree' })
      ).toBeFocused();
    }
  );

  for (const previouslyFocused of [false, true]) {
    regressionTest(
      `focuses the unrendered selected item on tree entry (modal: ${inModal}, previously focused: ${previouslyFocused})`,
      async ({ mount, page }) => {
        const tree = await initializeVirtualizedTree(
          mount,
          page,
          inModal,
          'item-199'
        );
        const first = tree.getByRole('treeitem', {
          name: 'item-0',
          exact: true,
        });
        if (previouslyFocused) {
          await first.focus();
          await page.keyboard.press('End');
          await expect(
            tree.getByRole('treeitem', { name: 'item-199', exact: true })
          ).toBeFocused();
          await page.keyboard.press('ArrowUp');
          await expect(
            tree.getByRole('treeitem', { name: 'item-198', exact: true })
          ).toBeFocused();
          await page.keyboard.press('Tab');
          await expect(
            page.getByRole('button', { name: 'After virtualized tree' })
          ).toBeFocused();
          await tree.evaluate((element) => {
            element.scrollTop = 0;
          });
          await flushVirtualizedScroll(page);
        }

        await expect(
          tree.getByRole('treeitem', { name: 'item-199', exact: true })
        ).toHaveCount(0);
        await expect(tree).toHaveAttribute('tabindex', '0');
        await expect(tree.locator('ix-tree-item[tabindex="0"]')).toHaveCount(0);
        for (const force of [false, true]) {
          await tree.evaluate(
            (element: HTMLIxTreeElement, force) =>
              element.refreshTree({ force }),
            force
          );
          await expect(tree).toHaveAttribute('tabindex', '0');
          await expect(tree.locator('ix-tree-item[tabindex="0"]')).toHaveCount(
            0
          );
        }

        await page
          .getByRole('button', { name: 'Before virtualized tree' })
          .focus();
        await page.keyboard.press('Tab');
        const selected = tree.getByRole('treeitem', {
          name: 'item-199',
          exact: true,
        });
        await expect(selected).toBeFocused();
        await expect(selected).toBeInViewport();
        await expect(tree).not.toHaveAttribute('tabindex');
        await expect(tree.locator('ix-tree-item[tabindex="0"]')).toHaveCount(1);
        await page.keyboard.press('ArrowUp');
        const next = tree.getByRole('treeitem', {
          name: 'item-198',
          exact: true,
        });
        await expect(next).toBeFocused();
        expect(
          await tree.evaluate(
            (element: HTMLIxTreeElement) =>
              element.context['item-199'].isSelected
          )
        ).toBe(true);

        await page.keyboard.press('Tab');
        await expect(
          page.getByRole('button', { name: 'After virtualized tree' })
        ).toBeFocused();
        await page.keyboard.press('Shift+Tab');
        await expect(selected).toBeFocused();
        await page.keyboard.press('ArrowUp');
        await expect(next).toBeFocused();
        const activations = await tree.evaluateHandle(
          (element: HTMLIxTreeElement) => {
            const ids: string[] = [];
            element.addEventListener('nodeClicked', (event) => {
              ids.push(event.detail);
            });
            return ids;
          }
        );
        await page.keyboard.press('Enter');
        await expect(next).toHaveAttribute('aria-selected', 'true');
        await page.keyboard.press('Space');
        await expect
          .poll(() => activations.evaluate((ids) => ids))
          .toEqual(['item-198', 'item-198']);
        await expect(next).toBeFocused();
        await page.keyboard.press('Tab');
        await expect(
          page.getByRole('button', { name: 'After virtualized tree' })
        ).toBeFocused();
        await tree.evaluate((element) => {
          element.scrollTop = 0;
        });
        await flushVirtualizedScroll(page);
        await expect(next).toHaveCount(0);
        await page.keyboard.press('Shift+Tab');
        await expect(next).toBeFocused();
        await expect(next).toBeInViewport();
      }
    );
  }
}

regressionTest(
  'updates the virtualized Tab entry point after replacing and scrolling the model',
  async ({ mount, page }) => {
    const tree = await initializeVirtualizedTree(
      mount,
      page,
      false,
      'item-199'
    );
    await tree.evaluate(async (element: HTMLIxTreeElement) => {
      element.model = {
        ...element.model,
        root: {
          ...element.model.root,
          children: [...element.model.root.children].reverse(),
        },
      };
      await element.refreshTree();
    });
    await expect(
      tree.getByRole('treeitem', { name: 'item-199', exact: true })
    ).toHaveAttribute('tabindex', '0');
    await tree.evaluate((element) => {
      element.scrollTop = element.scrollHeight;
    });
    await flushVirtualizedScroll(page);
    await expect(
      tree.getByRole('treeitem', { name: 'item-199', exact: true })
    ).toHaveCount(0);
    await expect(tree).toHaveAttribute('tabindex', '0');
    await expect(tree.locator('ix-tree-item[tabindex="0"]')).toHaveCount(0);
    await page.getByRole('button', { name: 'Before virtualized tree' }).focus();
    await page.keyboard.press('Tab');
    await expect(
      tree.getByRole('treeitem', { name: 'item-199', exact: true })
    ).toBeFocused();
    await expect(tree.locator('ix-tree-item[tabindex="0"]')).toHaveCount(1);
  }
);

for (const disabled of [false, true]) {
  regressionTest(
    `slotted controls retain their Enter and Space keyboard behavior (disabled: ${disabled})`,
    async ({ mount, page }) => {
      await mount(`
      <ix-tree-item text="Sample">
        <button type="button">Action</button>
        <input type="checkbox" aria-label="Option" />
      </ix-tree-item>
    `);

      const item = page.locator('ix-tree-item');
      await expect(item).toHaveAttribute('hydrated');
      await item.evaluate((element: HTMLIxTreeItemElement, disabled) => {
        element.disabled = disabled;
      }, disabled);

      const button = page.getByRole('button', { name: 'Action', exact: true });
      await button.evaluate((element) => {
        element.addEventListener('click', () => {
          element.setAttribute('data-clicked', 'true');
        });
      });
      await button.focus();
      await page.keyboard.press('Enter');
      await expect(button).toHaveAttribute('data-clicked', 'true');

      const checkbox = page.getByRole('checkbox', { name: 'Option' });
      await checkbox.focus();
      await page.keyboard.press('Space');
      await expect(checkbox).toBeChecked();
    }
  );
}

for (const source of ['disabled', 'context'] as const) {
  for (const selector of ['ix-tree-item', '.tree-node-container']) {
    regressionTest(
      `disabled ${source} item prevents Space scrolling on ${selector}`,
      async ({ mount, page }) => {
        await mount(`
          <div class="scroll-container" style="height: 8rem; overflow: auto;">
            <ix-tree-item text="Disabled item"></ix-tree-item>
            <div style="height: 100rem;"></div>
          </div>
        `);
        const item = page.getByRole('treeitem');
        await expect(item).toHaveAttribute('hydrated');
        await item.evaluate((element: HTMLIxTreeItemElement, source) => {
          if (source === 'disabled') {
            element.disabled = true;
          } else {
            element.context = {
              isExpanded: false,
              isSelected: false,
              isDisabled: true,
            };
          }
        }, source);
        await expect(item).toHaveAttribute('aria-disabled', 'true');
        const target = page.locator(selector);
        await target.evaluate((element) => {
          element.addEventListener('keydown', (event) => {
            element.setAttribute(
              'data-default-prevented',
              String(event.defaultPrevented)
            );
          });
        });
        await target.focus();
        const scroller = page.locator('.scroll-container');
        const scrollTop = await scroller.evaluate(
          (element) => element.scrollTop
        );
        const windowScrollY = await page.evaluate(() => window.scrollY);

        for (const key of ['Space', 'Shift+Space', 'Enter']) {
          await page.keyboard.press(key);
          await expect(target).toHaveAttribute(
            'data-default-prevented',
            'true'
          );
          await expect(target).toBeFocused();
          await expect(item).toHaveAttribute('aria-selected', 'false');
          expect(await scroller.evaluate((element) => element.scrollTop)).toBe(
            scrollTop
          );
          expect(await page.evaluate(() => window.scrollY)).toBe(windowScrollY);
        }
      }
    );
  }
}

regressionTest(
  'disabled item should not respond to keyboard activation',
  async ({ mount, page }) => {
    await mount(`
      <div style="height: 20rem; width: 100%;">
        <ix-tree root="root"></ix-tree>
      </div>
    `);

    const tree = page.locator('ix-tree');
    await tree.evaluate(
      (element: HTMLIxTreeElement, args) => {
        element.model = args.model;
        element.context = args.context;
      },
      {
        model: {
          root: {
            id: 'root',
            data: { name: '' },
            hasChildren: true,
            children: ['parent'],
          },
          parent: {
            id: 'parent',
            data: { name: 'Disabled Parent' },
            hasChildren: true,
            children: ['child'],
            disabled: true,
          },
          child: {
            id: 'child',
            data: { name: 'Child' },
            hasChildren: false,
            children: [],
          },
        } as TreeModel<unknown>,
        context: {
          root: { isExpanded: true, isSelected: false },
          parent: { isExpanded: false, isSelected: false },
          child: { isExpanded: false, isSelected: false },
        } as TreeContext,
      }
    );

    await expect(tree).toHaveAttribute('hydrated');

    const parent = tree.locator('ix-tree-item', { hasText: 'Disabled Parent' });
    const container = parent.locator('.tree-node-container');

    const chevron = parent.locator('.icon-toggle');
    await expect(chevron).toHaveAttribute('aria-disabled', 'true');
    await expect(chevron).toHaveAttribute('tabindex', '-1');
    await chevron.dispatchEvent('click');
    await chevron.dispatchEvent('keydown', { key: 'Enter' });
    await container.focus();
    await page.keyboard.press('Enter');

    await expect(parent).not.toHaveClass(/selected/);
    await expect(
      tree.locator('ix-tree-item', { hasText: 'Child' })
    ).not.toBeVisible();
  }
);

for (const selector of ['.icon-toggle', '.tree-node-container']) {
  for (const force of [false, true]) {
    regressionTest(
      `should preserve focus on ${selector} after refreshTree (force: ${force})`,
      async ({ mount, page }) => {
        const tree = await initializeTree(mount, page);
        const sampleItem = tree.locator('ix-tree-item', {
          hasText: 'Sample',
          hasNotText: 'Child',
        });
        const control = sampleItem.locator(selector);

        await control.focus();
        await expect(control).toBeFocused();

        await tree.evaluate(
          (el: HTMLIxTreeElement, force) => el.refreshTree({ force }),
          force
        );

        await expect(control).toBeFocused();
      }
    );
  }
}

regressionTest(
  'preserves focus on the tree item when refreshing the tree',
  async ({ mount, page }) => {
    const tree = await initializeTree(mount, page);
    const sample = tree.locator('[data-tree-node-id="sample"]');
    await sample.focus();

    await tree.evaluate((element: HTMLIxTreeElement) =>
      element.refreshTree({ force: true })
    );

    await expect(sample).toBeFocused();
  }
);

regressionTest(
  'does not pollute Object.prototype through reserved item ids',
  async ({ mount, page }) => {
    await mount(`
      <div style="height: 20rem; width: 100%;">
        <ix-tree root="root" toggle-on-item-click></ix-tree>
      </div>
    `);
    const tree = page.locator('ix-tree');
    await expect(tree).toHaveAttribute('hydrated');

    await tree.evaluate((element: HTMLIxTreeElement) => {
      element.model = JSON.parse(`{
        "root": { "id": "root", "data": { "name": "" }, "hasChildren": true, "children": ["__proto__"] },
        "__proto__": { "id": "__proto__", "data": { "name": "Reserved" }, "hasChildren": true, "children": ["child"] },
        "child": { "id": "child", "data": { "name": "Child" }, "hasChildren": false, "children": [] }
      }`);
    });

    const reservedItem = tree.locator('ix-tree-item', { hasText: 'Reserved' });
    await expect(reservedItem).toBeVisible();
    await reservedItem.click();

    await expect(
      tree.locator('ix-tree-item', { hasText: 'Child' })
    ).toBeVisible();

    const result = await tree.evaluate((element: HTMLIxTreeElement) => {
      const probe = {} as Record<string, unknown>;
      return {
        polluted: 'isSelected' in probe || 'isExpanded' in probe,
        ownContext: Object.hasOwn(element.context, '__proto__'),
        reservedContext: element.context['__proto__'],
      };
    });

    expect(result.polluted).toBe(false);
    expect(result.ownContext).toBe(true);
    expect(result.reservedContext).toEqual(
      expect.objectContaining({ isSelected: true, isExpanded: true })
    );
  }
);

regressionTest(
  'uses the model key as canonical item identity',
  async ({ mount, page }) => {
    await mount(`
      <div style="height: 20rem; width: 100%;">
        <ix-tree root="root" toggle-on-item-click></ix-tree>
      </div>
    `);
    const tree = page.locator('ix-tree');
    await expect(tree).toHaveAttribute('hydrated');

    await tree.evaluate((element: HTMLIxTreeElement) => {
      const events: string[] = [];
      (window as any).__treeEvents = events;
      element.addEventListener('nodeClicked', (event) =>
        events.push(`clicked:${(event as CustomEvent<string>).detail}`)
      );
      element.addEventListener('nodeToggled', (event) =>
        events.push(
          `toggled:${(event as CustomEvent<{ id: string }>).detail.id}`
        )
      );
      element.model = {
        root: {
          id: 'root',
          data: { name: '' },
          hasChildren: true,
          children: ['a'],
        },
        a: {
          id: 'b',
          data: { name: 'Displayed A' },
          hasChildren: true,
          children: ['a-child'],
        },
        b: {
          id: 'b',
          data: { name: 'Hidden B' },
          hasChildren: false,
          children: [],
        },
        'a-child': {
          id: 'a-child',
          data: { name: 'A Child' },
          hasChildren: false,
          children: [],
        },
      };
    });

    const displayedItem = tree.locator('ix-tree-item', {
      hasText: 'Displayed A',
    });
    await expect(displayedItem).toHaveAttribute('data-tree-node-id', 'a');
    await displayedItem.click();

    await expect(
      tree.locator('ix-tree-item', { hasText: 'A Child' })
    ).toBeVisible();

    const events = await page.evaluate(() => (window as any).__treeEvents);
    expect(events).toEqual(['toggled:a', 'clicked:a']);
  }
);
