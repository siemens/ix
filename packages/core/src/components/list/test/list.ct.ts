/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { iconDragGripper } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-list aria-label="Projects">
      <ix-list-item label="Project Alpha" tooltip-text=""></ix-list-item>
      <ix-list-item label="Project Beta" tooltip-text=""></ix-list-item>
      <ix-list-item label="Project Gamma" tooltip-text="" disabled></ix-list-item>
    </ix-list>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-list>
      <ix-list-item label="Project Alpha"></ix-list-item>
    </ix-list>
  `);

  const list = page.locator('ix-list');
  await expect(list).toHaveClass(/\bhydrated\b/);
  await expect(list).toBeVisible();
  await expect(list).toHaveAttribute('role', 'list');
  await expect(list.locator('ix-list-item')).toHaveAttribute(
    'role',
    'listitem'
  );
});

regressionTest('renders draggable grippers', async ({ mount, page }) => {
  await mount(
    `
      <ix-list draggable aria-label="Projects">
        <ix-list-item label="Project Alpha"></ix-list-item>
        <ix-list-item label="Project Beta" disabled></ix-list-item>
      </ix-list>
    `,
    { icons: { iconDragGripper } }
  );

  const grippers = page.locator('.drag-gripper');
  await expect(grippers).toHaveCount(2);
  await expect(grippers.first()).toBeVisible();
  await expect(grippers.first()).toHaveAttribute(
    'aria-label',
    'Reorder Project Alpha'
  );
  await expect(grippers.nth(1)).toBeDisabled();
});

regressionTest(
  'does not display grippers by default',
  async ({ mount, page }) => {
    await mount(`<ix-list><ix-list-item label="Project Alpha" /></ix-list>`);

    await expect(page.locator('.drag-gripper')).toBeHidden();
  }
);

regressionTest(
  'draggable list is accessible',
  async ({ mount, makeAxeBuilder }) => {
    await mount(
      `
        <ix-list draggable aria-label="Projects">
          <ix-list-item label="Project Alpha" tooltip-text=""></ix-list-item>
          <ix-list-item label="Project Beta" tooltip-text=""></ix-list-item>
        </ix-list>
      `,
      { icons: { iconDragGripper } }
    );

    const results = await makeAxeBuilder().analyze();
    expect(results.violations).toEqual([]);
  }
);

regressionTest(
  'reorders items with the pointer and emits itemOrderChange',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-list draggable>
          <ix-list-item label="Project Alpha"></ix-list-item>
          <ix-list-item label="Project Beta"></ix-list-item>
          <ix-list-item label="Project Gamma"></ix-list-item>
        </ix-list>
      `,
      { icons: { iconDragGripper } }
    );

    const list = page.locator('ix-list');
    const items = list.locator('ix-list-item');
    const eventPromise = list.evaluate(
      (element) =>
        new Promise<{ oldIndex: number; newIndex: number; label?: string }>(
          (resolve) => {
            element.addEventListener('itemOrderChange', (event: Event) => {
              const detail = (
                event as CustomEvent<{
                  item: HTMLIxListItemElement;
                  oldIndex: number;
                  newIndex: number;
                }>
              ).detail;
              resolve({
                oldIndex: detail.oldIndex,
                newIndex: detail.newIndex,
                label: detail.item.label,
              });
            });
          }
        )
    );
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
      targetBounds!.y + targetBounds!.height
    );
    await page.mouse.up();

    await expect(items.nth(0)).toHaveAttribute('label', 'Project Beta');
    await expect(items.nth(2)).toHaveAttribute('label', 'Project Alpha');
    expect(await eventPromise).toEqual({
      oldIndex: 0,
      newIndex: 2,
      label: 'Project Alpha',
    });
  }
);

regressionTest(
  'keeps the pointer preview at the item position when drag starts',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-list draggable>
          <ix-list-item label="Project Alpha"></ix-list-item>
          <ix-list-item label="Project Beta"></ix-list-item>
          <ix-list-item label="Project Gamma"></ix-list-item>
        </ix-list>
      `,
      { icons: { iconDragGripper } }
    );

    const item = page.locator('ix-list-item').nth(2);
    const gripper = item.locator('.drag-gripper');
    await expect(page.locator('ix-list')).toHaveClass(/\bhydrated\b/);
    await expect(item).toHaveClass(/\bhydrated\b/);
    const itemBounds = await item.boundingBox();
    const gripperBounds = await gripper.boundingBox();

    expect(itemBounds).not.toBeNull();
    expect(gripperBounds).not.toBeNull();
    await page.mouse.move(
      gripperBounds!.x + gripperBounds!.width / 2,
      gripperBounds!.y + gripperBounds!.height / 2
    );
    await page.mouse.down();

    const previewBounds = await item.boundingBox();
    expect(previewBounds).not.toBeNull();
    expect(previewBounds!.y).toBeCloseTo(itemBounds!.y, 0);
    await page.mouse.up();
  }
);

regressionTest(
  'hides the keyboard focus indicator during pointer drag',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-list draggable>
          <ix-list-item label="Project Alpha"></ix-list-item>
          <ix-list-item label="Project Beta"></ix-list-item>
        </ix-list>
      `,
      { icons: { iconDragGripper } }
    );

    const primaryAction = page.locator('.primary-action').first();
    await primaryAction.focus();
    await primaryAction.press('ArrowLeft');

    const gripper = page.getByLabel('Reorder Project Alpha');
    await expect(gripper).toBeFocused();
    await expect
      .poll(() =>
        gripper.evaluate(
          (element) => getComputedStyle(element, '::after').display
        )
      )
      .not.toBe('none');

    const gripperBounds = await gripper.boundingBox();
    expect(gripperBounds).not.toBeNull();
    await page.mouse.move(
      gripperBounds!.x + gripperBounds!.width / 2,
      gripperBounds!.y + gripperBounds!.height / 2
    );
    await page.mouse.down();

    await expect
      .poll(() =>
        gripper.evaluate(
          (element) => getComputedStyle(element, '::after').display
        )
      )
      .toBe('none');
    await page.mouse.up();
  }
);

regressionTest(
  'reorders items with the keyboard and retains gripper focus',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-list draggable>
          <ix-list-item label="Project Alpha"></ix-list-item>
          <ix-list-item label="Project Beta"></ix-list-item>
          <ix-list-item label="Project Gamma"></ix-list-item>
        </ix-list>
      `,
      { icons: { iconDragGripper } }
    );

    const list = page.locator('ix-list');
    const items = list.locator('ix-list-item');
    const firstPrimaryAction = items.first().locator('.primary-action');
    await firstPrimaryAction.focus();
    await firstPrimaryAction.press('ArrowLeft');

    const firstGripper = page.getByLabel('Reorder Project Alpha');
    await expect(firstGripper).toBeFocused();
    await firstGripper.press('Space');
    await firstGripper.press('ArrowDown');
    await firstGripper.press('Enter');

    await expect(items.nth(0)).toHaveAttribute('label', 'Project Beta');
    await expect(items.nth(1)).toHaveAttribute('label', 'Project Alpha');
    await expect(firstGripper).toBeFocused();
  }
);

regressionTest(
  'restores keyboard order on Escape without emitting',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-list draggable>
          <ix-list-item label="Project Alpha"></ix-list-item>
          <ix-list-item label="Project Beta"></ix-list-item>
          <ix-list-item label="Project Gamma"></ix-list-item>
        </ix-list>
      `,
      { icons: { iconDragGripper } }
    );

    const list = page.locator('ix-list');
    const items = list.locator('ix-list-item');
    const eventCounter = await list.evaluateHandle((element) => {
      const counter = { count: 0 };
      element.addEventListener('itemOrderChange', () => counter.count++);
      return counter;
    });
    const gripper = page.getByLabel('Reorder Project Beta');
    await gripper.focus();
    await gripper.press('Space');
    await gripper.press('ArrowUp');
    await gripper.press('Escape');

    await expect(items.nth(0)).toHaveAttribute('label', 'Project Alpha');
    await expect(items.nth(1)).toHaveAttribute('label', 'Project Beta');
    expect(await eventCounter.evaluate((counter) => counter.count)).toBe(0);
  }
);

regressionTest('applies item gap and dividers', async ({ mount, page }) => {
  await mount(`
    <ix-list item-gap="8" has-divider>
      <ix-list-item label="Project Alpha"></ix-list-item>
      <ix-list-item label="Project Beta"></ix-list-item>
    </ix-list>
  `);

  const list = page.locator('ix-list');
  const firstItem = list.locator('ix-list-item').first();
  await expect(list.locator('.list')).toHaveCSS('gap', '8px');
  await expect
    .poll(() =>
      firstItem.evaluate((element) =>
        getComputedStyle(element).getPropertyValue(
          '--ix-list-item-divider-color'
        )
      )
    )
    .not.toBe('');
});

regressionTest(
  'moves focus and skips disabled items',
  async ({ mount, page }) => {
    await mount(`
    <ix-list>
      <ix-list-item label="Project Alpha"></ix-list-item>
      <ix-list-item label="Project Beta" disabled></ix-list-item>
      <ix-list-item label="Project Gamma"></ix-list-item>
    </ix-list>
  `);

    const items = page.locator('ix-list-item');
    await expect(page.locator('ix-list')).toHaveClass(/\bhydrated\b/);
    await expect(items.nth(0)).toHaveClass(/\bhydrated\b/);
    await expect(items.nth(2)).toHaveClass(/\bhydrated\b/);
    await items.nth(0).locator('.primary-action').focus();
    await items.nth(0).locator('.primary-action').press('ArrowDown');
    await expect(items.nth(2).locator('.primary-action')).toBeFocused();

    await items.nth(2).locator('.primary-action').press('Home');
    await expect(items.nth(0).locator('.primary-action')).toBeFocused();

    await items.nth(0).locator('.primary-action').press('End');
    await expect(items.nth(2).locator('.primary-action')).toBeFocused();
  }
);

regressionTest(
  'traverses active item actions and exits the list',
  async ({ mount, page }) => {
    await mount(`
    <div>
      <ix-list>
        <ix-list-item label="Project Alpha">
          <button slot="action">Persistent action</button>
          <button slot="additional-actions">Additional action</button>
        </ix-list-item>
        <ix-list-item label="Project Beta">
          <button slot="action">Inactive action</button>
        </ix-list-item>
      </ix-list>
      <button id="after-list">After list</button>
    </div>
  `);

    const firstItem = page.locator('ix-list-item').first();
    const primaryAction = firstItem.locator('.primary-action');
    const persistentAction = firstItem.locator('[slot="action"]');
    const additionalAction = firstItem.locator('[slot="additional-actions"]');

    await expect(page.locator('ix-list')).toHaveClass(/\bhydrated\b/);
    await expect(firstItem).toHaveClass(/\bhydrated\b/);
    await primaryAction.focus();
    await primaryAction.press('Tab');
    await expect(persistentAction).toBeFocused();

    await persistentAction.press('Tab');
    await expect(additionalAction).toBeFocused();

    await additionalAction.press('Shift+Tab');
    await expect(persistentAction).toBeFocused();

    await persistentAction.press('ArrowLeft');
    await expect(primaryAction).toBeFocused();

    await primaryAction.press('Tab');
    await persistentAction.press('Tab');
    await additionalAction.press('Tab');
    await expect(page.locator('#after-list')).toBeFocused();
  }
);

regressionTest(
  'updates focus order when items change dynamically',
  async ({ mount, page }) => {
    await mount(`
    <ix-list>
      <ix-list-item label="Project Alpha"></ix-list-item>
      <ix-list-item label="Project Beta"></ix-list-item>
    </ix-list>
  `);

    const items = page.locator('ix-list-item');
    await items.nth(0).focus();
    await items.nth(0).evaluate((item) => (item.disabled = true));

    await expect(items.nth(0)).toHaveAttribute('tabindex', '-1');
    await expect(items.nth(1)).toHaveAttribute('tabindex', '0');
  }
);
