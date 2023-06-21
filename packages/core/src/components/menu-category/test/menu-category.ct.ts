/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-category label="Category label">
          <ix-menu-item>Test</ix-menu-item>
          <ix-menu-item>Test</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    `);
  const element = page.locator('ix-menu-category');
  await expect(element).toHaveClass('hydrated');
});

test('should be expand items', async ({ mount, page }) => {
  await mount(`
    <ix-menu>
      <ix-menu-category label="Category label">
        <ix-menu-item>Test Item 1</ix-menu-item>
        <ix-menu-item>Test Item 2</ix-menu-item>
      </ix-menu-category>
    </ix-menu>
  `);

  const menu = page.locator('ix-menu');
  const menuButton = menu.locator('ix-burger-menu');
  await menuButton.click();
  const menuCategory = page.locator('ix-menu-category');
  await menuCategory.click();

  await expect(menuCategory.locator('.menu-items')).toHaveClass(
    'menu-items menu-items--expanded'
  );
  const dropdown = menuCategory.locator('ix-dropdown');
  await expect(dropdown).not.toBeVisible();
});

test('should show items as dropdown', async ({ mount, page }) => {
  await mount(`
    <ix-menu>
      <ix-menu-category label="Category label">
        <ix-menu-item>Test Item 1</ix-menu-item>
        <ix-menu-item>Test Item 2</ix-menu-item>
      </ix-menu-category>
    </ix-menu>
  `);

  await page.waitForSelector('ix-menu');
  const menuCategory = page.locator('ix-menu-category');
  await menuCategory.click();

  const dropdown = menuCategory.locator('ix-dropdown');
  await expect(dropdown).toBeVisible();
  await expect(menuCategory.locator('.menu-items')).toHaveClass('menu-items');

  const dropdownHeader = dropdown.locator('ix-dropdown-item');
  await expect(dropdownHeader).toHaveText('Category label');

  const itemOne = page.getByRole('listitem', { name: 'Test Item 1' });
  const itemTwo = page.getByRole('listitem', { name: 'Test Item 2' });

  await expect(itemOne).toBeVisible();
  await expect(itemTwo).toBeVisible();
});
