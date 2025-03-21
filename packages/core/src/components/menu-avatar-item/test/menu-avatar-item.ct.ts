/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

const html = String.raw;

regressionTest('Nested dropdowns', async ({ mount, page }) => {
  await mount(html`
    <ix-menu>
      <ix-menu-avatar>
        <ix-menu-avatar-item label="test" id="submenu-01"></ix-menu-avatar-item>
      </ix-menu-avatar>
    </ix-menu>
    <ix-dropdown trigger="submenu-01" id="d1">
      <ix-dropdown-item>SubMenuItem 1</ix-dropdown-item>
      <ix-dropdown-item>SubMenuItem 2</ix-dropdown-item>
      <ix-dropdown-item>SubMenuItem 3</ix-dropdown-item>
      <ix-dropdown-item id="submenu-02">SubMenuItem 4</ix-dropdown-item>
    </ix-dropdown>
    <ix-dropdown trigger="submenu-02" id="d2">
      <ix-dropdown-item>SubMenuItem 1</ix-dropdown-item>
      <ix-dropdown-item>SubMenuItem 2</ix-dropdown-item>
      <ix-dropdown-item>SubMenuItem 3</ix-dropdown-item>
      <ix-dropdown-item>SubMenuItem 4</ix-dropdown-item>
    </ix-dropdown>
  `);

  const menuAvatar = page.locator('ix-menu-avatar');
  await expect(menuAvatar).toBeVisible();
  await menuAvatar.click();

  await expect(menuAvatar.locator('ix-dropdown')).toBeVisible();

  const menuAvatarItem = menuAvatar.locator('ix-menu-avatar-item').nth(0);
  await menuAvatarItem.click();

  const dropdown1 = page.locator('#d1');
  const dropdown2 = page.locator('#d2');

  await expect(dropdown1).toBeVisible();

  const dropdown2Trigger = dropdown1
    .locator('ix-dropdown-item')
    .filter({ hasText: 'SubMenuItem 4' });
  await dropdown2Trigger.click();

  await expect(dropdown2).toBeVisible();
});
