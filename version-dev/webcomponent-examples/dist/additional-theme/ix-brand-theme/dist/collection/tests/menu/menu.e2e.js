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
test('should render menu items with a[href]', async ({ mount, page }) => {
  await mount(`
  <ix-basic-navigation>
    <ix-menu>
      <a href="#link1">
        <ix-menu-item>Link 1</ix-menu-item>
      </a>
      <ix-menu-category label="Sub">
        <a href="#link2">
          <ix-menu-item>Link 2</ix-menu-item>
        </a>
        <a href="#link3">
          <ix-menu-item active>Link 3</ix-menu-item>
        </a>
        <a href="#link4">
          <ix-menu-item>Link 4</ix-menu-item>
        </a>
        <a href="#link5">
          <ix-menu-item>Link 5</ix-menu-item>
        </a>
      </ix-menu-category>
    </ix-menu>
  </ix-basic-navigation>`);
  const basicNavigationElement = page.locator('ix-basic-navigation');
  const category = page.locator('ix-menu-category');
  await category.click();
  const link1 = page.getByText('Link 1', { exact: true });
  await expect(link1).toBeVisible();
  const link2 = page.getByText('Link 1', { exact: true });
  await expect(link2).toBeVisible();
  await link2.hover();
  await page.waitForTimeout(1000);
  expect(await basicNavigationElement.screenshot({
    animations: 'disabled',
  })).toMatchSnapshot();
});
//# sourceMappingURL=menu.e2e.js.map
