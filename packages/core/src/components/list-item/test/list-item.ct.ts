/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-list>
      <ix-list-item label="Project Alpha" description="Updated today">
        <button slot="action" aria-label="Open project">Open</button>
      </ix-list-item>
    </ix-list>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-list-item label="Project Alpha">
      <button slot="action">Open</button>
    </ix-list-item>
  `);

  const item = page.locator('ix-list-item');
  await expect(item).toHaveClass(/\bhydrated\b/);
  await expect(item).toBeVisible();
  await expect(item).toHaveAttribute('role', 'listitem');
  await expect(item.locator('.label')).toHaveText('Project Alpha');
  await expect(item.locator('.label')).toBeVisible();
});

regressionTest(
  'keeps default slot content inline with standard content',
  async ({ mount, page }) => {
    await mount(`
    <ix-list-item label="Project Alpha">
      <span class="inline-extra">Extra</span>
    </ix-list-item>
  `);

    const item = page.locator('ix-list-item');
    const primaryAction = item.locator('.primary-action');
    const label = item.locator('.label');
    const extra = item.locator('.inline-extra');

    await expect(item).toHaveClass(/\bhydrated\b/);
    await expect(primaryAction).toHaveCSS('display', 'flex');
    await expect(label).toBeVisible();
    await expect(extra).toBeVisible();

    const labelRect = await label.boundingBox();
    const extraRect = await extra.boundingBox();

    expect(labelRect).not.toBeNull();
    expect(extraRect).not.toBeNull();

    const verticalOffset = Math.abs(
      (labelRect?.y ?? 0) - (extraRect?.y ?? Number.POSITIVE_INFINITY)
    );

    expect(verticalOffset).toBeLessThan(4);
  }
);

regressionTest(
  'focuses the primary action with the keyboard',
  async ({ mount, page }) => {
    await mount(`
    <div>
      <button id="before-list-item">Before list item</button>
      <ix-list-item label="Project Alpha"></ix-list-item>
    </div>
  `);

    const item = page.locator('ix-list-item');
    const primaryAction = item.locator('.primary-action');
    await expect(item).toHaveClass(/\bhydrated\b/);
    await expect(primaryAction).toHaveAttribute('tabindex', '0');
    await page.locator('#before-list-item').focus();
    await page.keyboard.press('Tab');

    await expect(primaryAction).toBeFocused();
  }
);

regressionTest(
  'renders standard content and custom content',
  async ({ mount, page }) => {
    await mount(`
    <div>
      <ix-list-item
        label="Standard label"
        description="Description"
        status="Online"
      ></ix-list-item>
      <ix-list-item label="Hidden fallback">
        <span class="custom-content">Custom content</span>
      </ix-list-item>
    </div>
  `);

    const items = page.locator('ix-list-item');
    await expect(items.nth(0).locator('.label')).toHaveText('Standard label');
    await expect(items.nth(0).locator('.description')).toHaveText(
      'Description'
    );
    await expect(items.nth(0).locator('ix-pill')).toContainText('Online');
    await expect(items.nth(1).locator('.custom-content')).toHaveText(
      'Custom content'
    );
    await expect(items.nth(1).locator('.label')).not.toBeVisible();
  }
);

regressionTest(
  'changes selection only when the checkbox is activated',
  async ({ mount, page }) => {
    await mount(
      `<ix-list-item label="Selectable" checkbox selected></ix-list-item>`
    );

    const item = page.locator('ix-list-item');
    const primaryAction = item.locator('.primary-action');
    const selectedChanges = await item.evaluateHandle((element) => {
      const details: boolean[] = [];
      element.addEventListener('selectedChange', (event) =>
        details.push((event as CustomEvent<boolean>).detail)
      );
      return details;
    });
    const itemClicks = await item.evaluateHandle((element) => {
      const count = { value: 0 };
      element.addEventListener('itemClick', () => count.value++);
      return count;
    });

    const checkbox = item.locator('ix-checkbox');

    await expect(primaryAction).not.toHaveAttribute('role', 'checkbox');
    await expect(primaryAction).not.toHaveAttribute('aria-checked', 'true');
    await expect(checkbox).toHaveAttribute('checked', '');
    await expect(checkbox).toHaveAttribute('aria-label', 'Select Selectable');
    await primaryAction.click();
    expect(await selectedChanges.evaluate((details) => details)).toEqual([]);
    await expect(primaryAction).toBeFocused();
    await checkbox.locator('button').click();

    expect(await selectedChanges.evaluate((details) => details)).toEqual([
      false,
    ]);
    expect(await itemClicks.evaluate((count) => count.value)).toBe(1);
    await expect(item).toHaveAttribute('selected', '');
  }
);

regressionTest(
  'emits itemClick for non-interactive item areas only',
  async ({ mount, page }) => {
    await mount(`
    <ix-list-item label="Project Alpha" checkbox>
      <span class="custom-content">Custom content</span>
      <button slot="action">Action</button>
    </ix-list-item>
  `);

    const item = page.locator('ix-list-item');
    const eventCounter = await item.evaluateHandle((element) => {
      const counter = { itemClick: 0 };
      element.addEventListener('itemClick', () => counter.itemClick++);
      return counter;
    });

    await item.locator('.primary-action').click();
    await item.locator('.custom-content').click();
    await item.locator('.item-surface').click({ position: { x: 2, y: 2 } });
    await item.locator('ix-checkbox button').click();
    await item.locator('[slot="action"]').click();

    expect(await eventCounter.evaluate((counter) => counter.itemClick)).toBe(3);
  }
);

regressionTest('shows actions by default', async ({ mount, page }) => {
  await mount(`
    <ix-list-item label="Project Alpha">
      <button slot="action">Action</button>
    </ix-list-item>
  `);

  await expect(page.locator('ix-list-item .action')).toHaveCSS(
    'visibility',
    'visible'
  );
});

regressionTest('aligns action slot content', async ({ mount, page }) => {
  await mount(`
    <div>
      <ix-list-item label="Centered action">
        <button slot="action">Action</button>
      </ix-list-item>
      <ix-list-item label="Start action" action-slot-alignment="start">
        <button slot="action">Action</button>
      </ix-list-item>
    </div>
  `);

  const items = page.locator('ix-list-item');
  await expect(items.nth(0)).toHaveAttribute(
    'action-slot-alignment',
    'center'
  );
  await expect(items.nth(0).locator('.action')).toHaveCSS(
    'align-items',
    'center'
  );
  await expect(items.nth(1).locator('.action')).toHaveCSS(
    'align-items',
    'start'
  );
});

regressionTest(
  'does not show the item pressed state for interactive controls',
  async ({ mount, page }) => {
    await mount(`
    <ix-list-item label="Project Alpha" checkbox>
      <button slot="action">Action</button>
    </ix-list-item>
  `);

    const itemSurface = page.locator('ix-list-item .item-surface');
    const controls = [
      page.locator('ix-list-item ix-checkbox button'),
      page.locator('ix-list-item [slot="action"]'),
    ];

    for (const control of controls) {
      await control.hover();
      const hoverBackground = await itemSurface.evaluate(
        (element) => getComputedStyle(element).backgroundColor
      );

      await page.mouse.down();
      await expect(itemSurface).toHaveCSS('background-color', hoverBackground);
      await page.mouse.up();
    }
  }
);

regressionTest(
  'reveals actions on hover and focus when configured',
  async ({ mount, page }) => {
    await mount(`
    <ix-list-item label="Project Alpha" action-on-hover>
      <button slot="action">Action</button>
    </ix-list-item>
  `);

    const item = page.locator('ix-list-item');
    const action = item.locator('.action');

    await expect(action).toHaveCSS('visibility', 'hidden');
    await item.hover();
    await expect(action).toHaveCSS('visibility', 'visible');

    await page.mouse.move(0, 0);
    await item.focus();
    await expect(action).toHaveCSS('visibility', 'visible');
  }
);

regressionTest(
  'disables the primary and action regions',
  async ({ mount, page }) => {
    await mount(`
    <ix-list-item label="Disabled" description="Unavailable" disabled>
      <button slot="action">Action</button>
    </ix-list-item>
  `);

    const item = page.locator('ix-list-item');
    const weakTextColor = await item.evaluate((element) =>
      getComputedStyle(element)
        .getPropertyValue('--theme-color-weak-text')
        .trim()
    );
    await expect(item.locator('.primary-action')).toBeDisabled();
    await expect(item.locator('.action')).toHaveAttribute('inert', '');
    await expect(item).toHaveAttribute('aria-disabled', 'true');
    await expect(item.locator('.label')).toHaveCSS('color', weakTextColor);
    await expect(item.locator('.description')).toHaveCSS(
      'color',
      weakTextColor
    );
  }
);

regressionTest('uses selected state colors', async ({ mount, page }) => {
  await mount(`<ix-list-item label="Selected" selected></ix-list-item>`);

  const item = page.locator('ix-list-item');
  const selectedColor = await item.evaluate((element) =>
    getComputedStyle(element)
      .getPropertyValue('--theme-color-ghost--selected')
      .trim()
  );

  await expect(item.locator('.item-surface')).toHaveCSS(
    'background-color',
    selectedColor
  );
});
