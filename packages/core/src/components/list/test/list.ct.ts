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
    <ix-list aria-label="Projects">
      <ix-list-item label="Project Alpha"></ix-list-item>
      <ix-list-item label="Project Beta"></ix-list-item>
      <ix-list-item label="Project Gamma" disabled></ix-list-item>
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
