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

function assertNotNull<T>(value: T | null): asserts value is T {
  expect(value).not.toBeNull();
}

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

regressionTest(
  'synchronizes items after the list reconnects',
  async ({ mount, page }) => {
    await mount(`
      <div>
        <ix-list>
          <ix-list-item label="Project Alpha"></ix-list-item>
          <ix-list-item label="Project Beta"></ix-list-item>
        </ix-list>
      </div>
    `);

    const items = page.locator('ix-list-item');
    await expect(items.first()).toHaveAttribute('tabindex', '0');

    await page.evaluate(() => {
      const list = document.querySelector('ix-list');
      if (!list) {
        throw new Error('Expected ix-list to exist');
      }

      list.remove();
      document.querySelector('div')?.append(list);
    });

    await items.first().evaluate((element) => {
      element.setAttribute('disabled', '');
    });

    await expect(items.nth(1)).toHaveAttribute('tabindex', '0');
  }
);

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
  'keeps drag gripper pressed state through list item re-renders',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-list draggable aria-label="Projects">
          <ix-list-item label="Project Alpha"></ix-list-item>
          <ix-list-item label="Project Beta"></ix-list-item>
        </ix-list>
      `,
      { icons: { iconDragGripper } }
    );

    const item = page.locator('ix-list-item').first();
    const gripper = item.locator('.drag-gripper');

    await expect(item).toHaveClass(/\bhydrated\b/);
    await expect(gripper).toBeEnabled();
    await gripper.focus();
    await expect(gripper).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(item).toHaveClass(/\bdragging\b/);
    await expect(gripper).toHaveAttribute('aria-pressed', 'true');

    await item.evaluate((element) => {
      element.label = 'Project Alpha updated';
    });

    await expect(gripper).toHaveAttribute('aria-pressed', 'true');
    await page.keyboard.press('Escape');

    await expect(item).not.toHaveClass(/\bdragging\b/);
    await expect(gripper).toHaveAttribute('aria-pressed', 'false');
  }
);

regressionTest(
  'tabs from active item to drag gripper and reverse-tabs out of the list',
  async ({ mount, page }) => {
    await mount(
      `
        <div>
          <button id="before-list">Before list</button>
          <ix-list draggable aria-label="Projects">
            <ix-list-item label="Project Alpha"></ix-list-item>
            <ix-list-item label="Project Beta"></ix-list-item>
          </ix-list>
          <button id="after-list">After list</button>
        </div>
      `,
      { icons: { iconDragGripper } }
    );

    const firstGripper = page.getByLabel('Reorder Project Alpha');
    const firstPrimaryAction = page
      .locator('ix-list-item .primary-action')
      .first();

    await expect(firstGripper).toHaveAttribute('tabindex', '0');
    await page.locator('#before-list').focus();
    await page.keyboard.press('Tab');

    await expect(firstPrimaryAction).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(firstGripper).toBeFocused();

    await expect
      .poll(() =>
        firstGripper.evaluate(
          (element) => getComputedStyle(element, '::after').display
        )
      )
      .not.toBe('none');
    await expect(firstGripper).toHaveCSS('position', 'relative');
    await expect
      .poll(() =>
        firstGripper.evaluate(
          (element) => getComputedStyle(element, '::after').inset
        )
      )
      .not.toBe('0px');

    await firstPrimaryAction.focus();
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('#before-list')).toBeFocused();

    await firstGripper.focus();
    await page.keyboard.press('Tab');
    await expect(page.locator('#after-list')).toBeFocused();
  }
);

regressionTest(
  'roves to previous and next items from drag gripper with arrow keys',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-list draggable aria-label="Projects">
          <ix-list-item label="Project Alpha"></ix-list-item>
          <ix-list-item label="Project Beta"></ix-list-item>
          <ix-list-item label="Project Gamma"></ix-list-item>
        </ix-list>
      `,
      { icons: { iconDragGripper } }
    );

    const firstGripper = page.getByLabel('Reorder Project Alpha');
    const secondPrimaryAction = page
      .locator('ix-list-item .primary-action')
      .nth(1);
    const firstPrimaryAction = page
      .locator('ix-list-item .primary-action')
      .first();

    await firstGripper.focus();
    await firstGripper.press('ArrowDown');
    await expect(secondPrimaryAction).toBeFocused();

    await secondPrimaryAction.press('ArrowLeft');
    const secondGripper = page.getByLabel('Reorder Project Beta');
    await expect(secondGripper).toBeFocused();

    await secondGripper.press('ArrowUp');
    await expect(firstPrimaryAction).toBeFocused();
  }
);

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

    assertNotNull(gripperBounds);
    assertNotNull(targetBounds);
    await page.mouse.move(
      gripperBounds.x + gripperBounds.width / 2,
      gripperBounds.y + gripperBounds.height / 2
    );
    await page.mouse.down();
    await page.mouse.move(
      targetBounds.x + targetBounds.width / 2,
      targetBounds.y + targetBounds.height
    );
    await page.mouse.up();

    await expect(items.nth(0)).toHaveAttribute('label', 'Project Beta');
    await expect(items.nth(2)).toHaveAttribute('label', 'Project Alpha');
    await expect(page.getByLabel('Reorder Project Alpha')).not.toBeFocused();
    expect(await eventPromise).toEqual({
      oldIndex: 0,
      newIndex: 2,
      label: 'Project Alpha',
    });
  }
);

regressionTest(
  'shows a separator and keeps the item in place until pointer drop',
  async ({ mount, page }) => {
    await mount(
      `
        <ix-list draggable drag-behavior="separator">
          <ix-list-item label="Project Alpha"></ix-list-item>
          <ix-list-item label="Project Beta"></ix-list-item>
          <ix-list-item label="Project Gamma"></ix-list-item>
        </ix-list>
      `,
      { icons: { iconDragGripper } }
    );

    const list = page.locator('ix-list');
    const listContainer = list.locator('.list');
    const items = list.locator('ix-list-item');
    const draggedItem = items.first();
    const gripperBounds = await draggedItem
      .locator('.drag-gripper')
      .boundingBox();
    const draggedItemBounds = await draggedItem.boundingBox();
    const nextItemBounds = await items.nth(1).boundingBox();
    const targetBounds = await items.nth(2).boundingBox();

    assertNotNull(gripperBounds);
    assertNotNull(draggedItemBounds);
    assertNotNull(nextItemBounds);
    assertNotNull(targetBounds);
    const initialScrollHeight = await listContainer.evaluate(
      (element) => element.scrollHeight
    );
    await list.evaluate(
      (element, maxHeight) => (element.style.maxHeight = `${maxHeight}px`),
      initialScrollHeight
    );
    await page.mouse.move(
      gripperBounds.x + gripperBounds.width / 2,
      gripperBounds.y + gripperBounds.height / 2
    );
    await page.mouse.down();

    const separator = list.locator('.ix-list-drag-placeholder');
    const initialSeparatorBounds = await separator.boundingBox();
    assertNotNull(initialSeparatorBounds);
    expect(initialSeparatorBounds.y).toBeCloseTo(
      (draggedItemBounds.y + draggedItemBounds.height + nextItemBounds.y) / 2,
      0
    );

    await page.mouse.move(
      targetBounds.x + targetBounds.width / 2,
      targetBounds.y + targetBounds.height
    );

    await expect(items.nth(0)).toHaveAttribute('label', 'Project Alpha');
    await expect(draggedItem).not.toHaveClass(/\bpointer-dragging\b/);
    await expect(separator).toHaveClass(/\bseparator\b/);
    await expect(separator).toHaveCSS('border-top-style', 'solid');
    expect(
      await listContainer.evaluate((element) => element.scrollHeight)
    ).toBe(initialScrollHeight);
    const currentDraggedItemBounds = await draggedItem.boundingBox();
    assertNotNull(currentDraggedItemBounds);
    expect(currentDraggedItemBounds.y).toBeCloseTo(draggedItemBounds.y, 0);

    await page.mouse.up();

    await expect(items.nth(0)).toHaveAttribute('label', 'Project Beta');
    await expect(items.nth(2)).toHaveAttribute('label', 'Project Alpha');
    await expect(separator).toHaveCount(0);
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

    assertNotNull(itemBounds);
    assertNotNull(gripperBounds);
    await page.mouse.move(
      gripperBounds.x + gripperBounds.width / 2,
      gripperBounds.y + gripperBounds.height / 2
    );
    await page.mouse.down();

    const previewBounds = await item.boundingBox();
    assertNotNull(previewBounds);
    expect(previewBounds.y).toBeCloseTo(itemBounds.y, 0);
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
    assertNotNull(gripperBounds);
    await page.mouse.move(
      gripperBounds.x + gripperBounds.width / 2,
      gripperBounds.y + gripperBounds.height / 2
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

regressionTest(
  'cancels keyboard reorder when Tab moves focus outside the list',
  async ({ mount, page }) => {
    await mount(
      `
        <div>
          <ix-list draggable>
            <ix-list-item label="Project Alpha"></ix-list-item>
            <ix-list-item label="Project Beta"></ix-list-item>
            <ix-list-item label="Project Gamma"></ix-list-item>
          </ix-list>
          <button id="after-list">After list</button>
        </div>
      `,
      { icons: { iconDragGripper } }
    );

    const list = page.locator('ix-list');
    const items = list.locator('ix-list-item');
    const gripper = items.nth(1).locator('.drag-gripper');
    await gripper.focus();
    await gripper.press('Space');
    await gripper.press('ArrowUp');
    await page.keyboard.press('Tab');

    await expect(page.locator('#after-list')).toBeFocused();
    await expect(items.nth(0)).toHaveAttribute('label', 'Project Alpha');
    await expect(items.nth(1)).toHaveAttribute('label', 'Project Beta');
    await expect(items.nth(1)).not.toHaveClass(/\bdragging\b/);
    await expect(gripper).toHaveAttribute('aria-pressed', 'false');

    await gripper.focus();
    await gripper.press('Space');
    await expect(gripper).toHaveAttribute('aria-pressed', 'true');
    await gripper.press('Escape');
  }
);

regressionTest('applies item gap and dividers', async ({ mount, page }) => {
  await mount(`
    <ix-list item-gap="8" has-divider>
      <ix-list-item label="Project Alpha"></ix-list-item>
      <ix-list-item label="Project Beta" has-divider="false"></ix-list-item>
    </ix-list>
  `);

  const list = page.locator('ix-list');
  const items = list.locator('ix-list-item');
  await expect(list.locator('.list')).toHaveCSS('gap', '8px');
  await expect(items.nth(0)).toHaveAttribute('has-divider', '');
  await expect
    .poll(() =>
      items
        .nth(0)
        .locator('.item-surface')
        .evaluate((element) => getComputedStyle(element).borderBottomColor)
    )
    .not.toBe('rgba(0, 0, 0, 0)');
  await expect(items.nth(1)).not.toHaveAttribute('has-divider', '');
  await expect(items.nth(1).locator('.item-surface')).toHaveCSS(
    'border-bottom-color',
    'rgba(0, 0, 0, 0)'
  );
});

regressionTest(
  'renders standalone separators and applies list gap around them',
  async ({ mount, page }) => {
    await mount(`
      <ix-list item-gap="8" aria-label="Projects">
        <ix-list-item label="Project Alpha"></ix-list-item>
        <ix-list-item-separator></ix-list-item-separator>
        <ix-list-item label="Project Beta"></ix-list-item>
      </ix-list>
    `);

    const list = page.locator('ix-list');
    const separator = list.locator('ix-list-item-separator');

    await expect(list.locator('.list')).toHaveCSS('gap', '8px');
    await expect(separator).toBeVisible();
    await expect(separator).toHaveAttribute('role', 'separator');
    await expect(separator).toHaveCSS('border-bottom-width', '1px');
    await expect(separator).toHaveCSS('border-bottom-style', 'solid');
  }
);

regressionTest(
  'applies item defaults and preserves item overrides',
  async ({ mount, page }) => {
    await mount(`
    <ix-list
      variant="ghost"
      disabled
      checkbox
      action-on-hover
      action-slot-alignment="start"
    >
      <ix-list-item label="Inherited"></ix-list-item>
      <ix-list-item
        label="Overridden"
        variant="outline"
        action-slot-alignment="center"
      ></ix-list-item>
      <ix-list-item
        label="Boolean overrides"
        disabled="false"
        checkbox="false"
        action-on-hover="false"
      ></ix-list-item>
    </ix-list>
  `);

    const list = page.locator('ix-list');
    const items = list.locator('ix-list-item');
    const inheritedItem = items.nth(0);
    const overriddenItem = items.nth(1);
    const booleanOverrides = items.nth(2);

    await expect(inheritedItem).toHaveAttribute('variant', 'ghost');
    await expect(inheritedItem).toHaveAttribute('disabled', '');
    await expect(inheritedItem).toHaveAttribute('checkbox', '');
    await expect(inheritedItem).toHaveAttribute('action-on-hover', '');
    await expect(inheritedItem).toHaveAttribute(
      'action-slot-alignment',
      'start'
    );
    await expect(overriddenItem).toHaveAttribute('variant', 'outline');
    await expect(overriddenItem).toHaveAttribute(
      'action-slot-alignment',
      'center'
    );
    await expect(booleanOverrides).not.toHaveAttribute('disabled', '');
    await expect(booleanOverrides).not.toHaveAttribute('checkbox', '');
    await expect(booleanOverrides).not.toHaveAttribute('action-on-hover', '');

    await overriddenItem.evaluate((item) => {
      item.disabled = false;
      item.checkbox = false;
      item.actionOnHover = false;
    });
    await list.evaluate((element) => {
      element.disabled = false;
      element.checkbox = false;
      element.actionOnHover = false;
      element.actionSlotAlignment = 'center';
    });
    await list.evaluate((element) => {
      element.disabled = true;
      element.checkbox = true;
      element.actionOnHover = true;
      element.actionSlotAlignment = 'start';
    });

    await expect(overriddenItem).not.toHaveAttribute('disabled', '');
    await expect(overriddenItem).not.toHaveAttribute('checkbox', '');
    await expect(overriddenItem).not.toHaveAttribute('action-on-hover', '');
    await expect(inheritedItem).toHaveAttribute(
      'action-slot-alignment',
      'start'
    );
    await expect(overriddenItem).toHaveAttribute(
      'action-slot-alignment',
      'center'
    );
  }
);

regressionTest(
  'applies item defaults to dynamic children and updates inherited values',
  async ({ mount, page }) => {
    await mount(`
    <ix-list variant="ghost">
      <ix-list-item label="Existing"></ix-list-item>
    </ix-list>
  `);

    const list = page.locator('ix-list');
    await list.evaluate((element) => {
      element.variant = 'outline';
      const item = document.createElement('ix-list-item');
      item.label = 'Dynamic';
      element.appendChild(item);
    });

    await expect(list.locator('ix-list-item').nth(0)).toHaveAttribute(
      'variant',
      'outline'
    );
    await expect(list.locator('ix-list-item').nth(1)).toHaveAttribute(
      'variant',
      'outline'
    );
  }
);

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
  'traverses active item actions with arrow keys and exits the list with Tab',
  async ({ mount, page }) => {
    await mount(`
    <div>
      <ix-list>
        <ix-list-item label="Project Alpha" action-on-hover>
          <div slot="action">
            <button>First action</button>
            <button>Second action</button>
          </div>
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
    const firstAction = firstItem.locator('[slot="action"] button').nth(0);
    const secondAction = firstItem.locator('[slot="action"] button').nth(1);

    await expect(page.locator('ix-list')).toHaveClass(/\bhydrated\b/);
    await expect(firstItem).toHaveClass(/\bhydrated\b/);
    await primaryAction.focus();
    await primaryAction.press('Tab');
    await expect(firstAction).toBeFocused();

    await firstAction.press('ArrowRight');
    await expect(secondAction).toBeFocused();

    await secondAction.press('ArrowLeft');
    await expect(firstAction).toBeFocused();

    await firstAction.press('ArrowLeft');
    await expect(primaryAction).toBeFocused();

    await primaryAction.press('Tab');
    await expect(firstAction).toBeFocused();
    await firstAction.press('Tab');
    await expect(page.locator('#after-list')).toBeFocused();
  }
);

regressionTest(
  'traverses the selection checkbox separately from the primary action',
  async ({ mount, page }) => {
    await mount(`
    <ix-list>
      <ix-list-item label="Project Alpha" checkbox></ix-list-item>
    </ix-list>
  `);

    const item = page.locator('ix-list-item');
    const primaryAction = item.locator('.primary-action');
    const checkboxButton = item.locator('ix-checkbox button');

    await expect(item).toHaveClass(/\bhydrated\b/);
    await primaryAction.focus();
    await primaryAction.press('Tab');

    await expect(checkboxButton).toBeFocused();
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

regressionTest(
  'ignores pointercancel from unrelated pointer or during keyboard reorder',
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

    await list.dispatchEvent('pointercancel', { pointerId: 999 });

    await expect(items.first()).toHaveClass(/\bdragging\b/);

    await firstGripper.press('Enter');

    await expect(items.nth(0)).toHaveAttribute('label', 'Project Beta');
    await expect(items.nth(1)).toHaveAttribute('label', 'Project Alpha');
  }
);
