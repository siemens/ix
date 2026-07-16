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
        <button slot="additional-actions" aria-label="More actions">More</button>
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
  'uses checkbox semantics and controlled selection',
  async ({ mount, page }) => {
    await mount(
      `<ix-list-item label="Selectable" checkbox selected></ix-list-item>`
    );

    const item = page.locator('ix-list-item');
    const primaryAction = item.locator('.primary-action');
    const selectedChange = item.evaluate(
      (element) =>
        new Promise<boolean>((resolve) => {
          element.addEventListener('selectedChange', (event) =>
            resolve((event as CustomEvent<boolean>).detail)
          );
        })
    );

    await expect(primaryAction).toHaveAttribute('role', 'checkbox');
    await expect(primaryAction).toHaveAttribute('aria-checked', 'true');
    await expect(item.locator('ix-checkbox')).toHaveAttribute('checked', '');
    await expect(item.locator('ix-checkbox')).toHaveAttribute('inert', '');
    await primaryAction.click();

    expect(await selectedChange).toBe(false);
    await expect(item).toHaveAttribute('selected', '');
  }
);

regressionTest(
  'emits itemClick for primary activation only',
  async ({ mount, page }) => {
    await mount(`
    <ix-list-item label="Project Alpha">
      <button slot="action">Action</button>
      <button slot="additional-actions">Additional action</button>
    </ix-list-item>
  `);

    const item = page.locator('ix-list-item');
    const eventCounter = await item.evaluateHandle((element) => {
      const counter = { itemClick: 0 };
      element.addEventListener('itemClick', () => counter.itemClick++);
      return counter;
    });

    await item.locator('.primary-action').click();
    await item.locator('[slot="action"]').click();
    await item.locator('[slot="additional-actions"]').click();

    expect(await eventCounter.evaluate((counter) => counter.itemClick)).toBe(1);
  }
);

regressionTest(
  'reveals additional actions on hover and focus',
  async ({ mount, page }) => {
    await mount(`
    <ix-list-item label="Project Alpha">
      <button slot="additional-actions">Additional action</button>
    </ix-list-item>
  `);

    const item = page.locator('ix-list-item');
    const additionalActions = item.locator('.additional-actions');

    await expect(additionalActions).toHaveCSS('visibility', 'hidden');
    await item.hover();
    await expect(additionalActions).toHaveCSS('visibility', 'visible');

    await page.mouse.move(0, 0);
    await item.focus();
    await expect(additionalActions).toHaveCSS('visibility', 'visible');
  }
);

regressionTest(
  'disables the primary and action regions',
  async ({ mount, page }) => {
    await mount(`
    <ix-list-item label="Disabled" disabled>
      <button slot="action">Action</button>
    </ix-list-item>
  `);

    const item = page.locator('ix-list-item');
    await expect(item.locator('.primary-action')).toBeDisabled();
    await expect(item.locator('.action')).toHaveAttribute('inert', '');
    await expect(item).toHaveAttribute('aria-disabled', 'true');
  }
);
