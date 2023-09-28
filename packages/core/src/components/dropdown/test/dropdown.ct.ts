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

const DROPDOWN_SELECTOR = 'ix-dropdown';
const DROPDOWN_ITEM_SELECTOR = 'ix-dropdown-item';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-dropdown></ix-dropdown>`);
  const dropdown = page.locator(DROPDOWN_SELECTOR);

  await expect(dropdown).toHaveClass(/hydrated/);
});

test.describe('nested dropdown tests', () => {
  const button1Text = 'Triggerbutton1';
  const button2Text = 'Triggerbutton2';

  test.beforeEach(async ({ mount }) => {
    await mount(`
      <button id="trigger1">${button1Text}</button>
      <ix-dropdown trigger="trigger1">
        <button id="trigger2">${button2Text}</button>
        <ix-dropdown trigger="trigger2">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        </ix-dropdown>
      </ix-dropdown>
    `);
  });

  test('can open nested dropdown', async ({ page }) => {
    await page.getByText(button1Text).click();
    await page.getByText(button2Text).click();
    const nestedDropdownItem = page.locator(DROPDOWN_ITEM_SELECTOR);

    await expect(nestedDropdownItem).toHaveClass(/hydrated/);
  });
});
