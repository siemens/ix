/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('should not change tab', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-settings>
          <ix-menu-settings-item label="Tab 1">Content 1</ix-menu-settings-item>
          <ix-menu-settings-item label="Tab 2">Content 2</ix-menu-settings-item>
        </ix-menu-settings>
      </ix-menu>
    `);

  const settings = page.locator('ix-menu-settings');
  const element = page.locator('ix-menu-item#settings');
  await element.click();

  const tabItems = page.locator('ix-tab-item');
  await expect(tabItems.first()).toHaveClass(/hydrated/);

  await settings.evaluate((e) => {
    e.addEventListener('tabChange', (event) => event.preventDefault());
  });

  await tabItems.last().click();

  await expect(tabItems.first()).toHaveAttribute('selected', 'true');
  await expect(tabItems.last()).not.toHaveAttribute('selected', 'true');
});
