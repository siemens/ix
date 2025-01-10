/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator } from '@playwright/test';
import { test } from '@utils/test';

function selectController(select: Locator) {
  const input = select.locator('input');
  const dropdown = select.locator('ix-dropdown');
  const dropdownChevron = select.locator('ix-icon-button');

  const dropdownVisible = async () => {
    await expect(dropdown).toHaveClass(/show/);
  };

  return {
    async clickDropdownChevron() {
      await dropdownChevron.click();
      await dropdownVisible();
    },
    async fillInput(text: string) {
      await input.fill(text);
    },
    async focusInput() {
      await input.click();
      await expect(input).toBeFocused();
    },
    async arrowDown(skipDropdownCheck = false) {
      if (!skipDropdownCheck) {
        await dropdownVisible();
      }
      await select.page().keyboard.press('ArrowDown', { delay: 50 });
    },
    async arrowUp(skipDropdownCheck = false) {
      if (!skipDropdownCheck) {
        await dropdownVisible();
      }
      await select.page().keyboard.press('ArrowUp', { delay: 50 });
    },
    async pressEnter() {
      await select.page().keyboard.press('Enter');
    },
    async getDropdownItemsLocator(onlyVisible = false) {
      let selector = 'ix-select-item';

      if (onlyVisible) {
        selector += ':not(.d-none)';
      }

      await dropdownVisible();
      return select.locator(selector).all();
    },
    async getFocusDropdownItemLocator() {
      await dropdownVisible();

      const focusDropdownItem = select.locator(
        'ix-select-item .dropdown-item:focus-visible'
      );
      return focusDropdownItem;
    },

    async getAddItemDropdownItemLocator() {
      await dropdownVisible();

      const addItem = dropdown.locator('ix-dropdown-item.add-item');
      await expect(addItem).toBeVisible();
      return addItem;
    },

    async getItemCheckedLocator() {
      await dropdownVisible();
      return select.locator('ix-select-item .checkmark');
    },
  };
}

test.describe.configure({ mode: 'parallel', retries: 1, timeout: 2000 });

test.describe('arrow key navigation', () => {
  test.describe('ArrowDown', () => {
    test('input -> slotted item', async ({ mount, page }) => {
      await mount(`
        <ix-select>
          <ix-select-item value="1" label="Item 1"></ix-select-item>
          <ix-select-item value="2" label="Item 2"></ix-select-item>
        </ix-select>
      `);

      const select = page.locator('ix-select');
      const selectCtrl = selectController(select);

      await selectCtrl.focusInput();
      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      const dropdownItems = await selectCtrl.getDropdownItemsLocator();
      const focusItem = await selectCtrl.getFocusDropdownItemLocator();

      expect(dropdownItems).toHaveLength(2);
      await expect(focusItem).toBeFocused();
      await expect(focusItem).toHaveText('Item 2');
    });

    test('slot -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1"></ix-select-item>
          <ix-select-item value="2" label="Item 2"></ix-select-item>
        </ix-select>
      `);

      const selectCtrl = selectController(page.locator('ix-select'));

      await selectCtrl.focusInput();
      await selectCtrl.fillInput('New Item');
      await page.keyboard.press('Enter');

      await selectCtrl.clickDropdownChevron();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      const dropdownItems = await selectCtrl.getDropdownItemsLocator();
      const focusItem = await selectCtrl.getFocusDropdownItemLocator();

      expect(dropdownItems).toHaveLength(3);
      await expect(focusItem).toBeFocused();
      await expect(focusItem).toHaveText('New Item');
    });

    test('input -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
     `);

      const selectCtrl = selectController(page.locator('ix-select'));

      await selectCtrl.focusInput();
      await selectCtrl.fillInput('New Item');

      await selectCtrl.arrowDown();

      const visibleDropdownItems =
        await selectCtrl.getDropdownItemsLocator(true);
      expect(visibleDropdownItems).toHaveLength(0);

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();
      await expect(addItem).toHaveText('New Item');
      await expect(addItem).toBeFocused();
    });

    test('input -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
      `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('New Item');
      await page.keyboard.down('Enter');
      await selectCtrl.clickDropdownChevron();
      await selectCtrl.arrowDown();

      const items = await selectCtrl.getDropdownItemsLocator();
      expect(items).toHaveLength(1);

      const focusItem = await selectCtrl.getFocusDropdownItemLocator();
      await expect(focusItem).toBeFocused();
      await expect(focusItem).toHaveText('New Item');
    });

    test('slot -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1"></ix-select-item>
          <ix-select-item value="2" label="Item 2"></ix-select-item>
        </ix-select>
      `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item');

      expect(await selectCtrl.getDropdownItemsLocator()).toHaveLength(2);

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      await expect(
        await selectCtrl.getAddItemDropdownItemLocator()
      ).toBeFocused();
    });

    test('dynamic item -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1"></ix-select-item>
        </ix-select>
      `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item 2');
      await page.keyboard.press('Enter');

      await selectCtrl.clickDropdownChevron();
      await expect(await selectCtrl.getItemCheckedLocator()).toBeVisible();

      await selectCtrl.fillInput('');
      await selectCtrl.fillInput('I');

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      await expect(
        await selectCtrl.getAddItemDropdownItemLocator()
      ).toBeFocused();
    });

    test('wrap - dynamic item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1"></ix-select-item>
        </ix-select>
     `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item 2');
      await page.keyboard.press('Enter');

      await selectCtrl.clickDropdownChevron();

      expect(await selectCtrl.getDropdownItemsLocator()).toHaveLength(2);

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      const itemsBeforeNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsBeforeNavigation.at(1)).toHaveText('Item 2');
      await expect(itemsBeforeNavigation.at(0)).not.toBeFocused();
      await expect(itemsBeforeNavigation.at(1)).toBeFocused();

      await selectCtrl.arrowDown();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsAfterNavigation.at(0)).toHaveText('Item 1');
      await expect(itemsAfterNavigation.at(0)).toBeFocused();
      await expect(itemsAfterNavigation.at(1)).not.toBeFocused();
    });

    test('wrap - add item -> slot', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1"></ix-select-item>
        </ix-select>
     `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('I');

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      await expect(addItem).toBeFocused();

      await selectCtrl.arrowDown();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsAfterNavigation.at(0)).toHaveText('Item 1');
      await expect(itemsAfterNavigation.at(0)).toBeFocused();
    });

    test('wrap - add item -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
     `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item 1');
      await page.keyboard.press('Enter');

      await selectCtrl.clickDropdownChevron();
      await expect(await selectCtrl.getItemCheckedLocator()).toBeVisible();

      await selectCtrl.fillInput('');
      await selectCtrl.fillInput('I');

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      await expect(addItem).toBeFocused();

      await selectCtrl.arrowDown();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsAfterNavigation.at(0)).toHaveText('Item 1');
      await expect(itemsAfterNavigation.at(0)).toBeFocused();
    });
  });

  test.describe('ArrowUp', () => {
    test('dynamic item -> slot', async ({ mount, page }) => {
      await mount(`
          <ix-select editable>
            <ix-select-item value="1" label="Item 1"></ix-select-item>
          </ix-select>
        `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('I');
      await page.keyboard.press('Enter');

      await selectCtrl.clickDropdownChevron();
      await selectCtrl.getItemCheckedLocator();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      const itemsBeforeNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsBeforeNavigation.at(1)).toHaveText('I');
      await expect(itemsBeforeNavigation.at(1)).toBeFocused();

      await selectCtrl.arrowUp();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsAfterNavigation.at(0)).toHaveText('Item 1');
      await expect(itemsAfterNavigation.at(0)).toBeFocused();
    });

    test('add item -> slot', async ({ mount, page }) => {
      await mount(`
          <ix-select editable>
            <ix-select-item value="1" label="Item 1"></ix-select-item>
          </ix-select>
        `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('I');

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      await expect(addItem).toBeFocused();

      await selectCtrl.arrowUp();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsAfterNavigation.at(0)).toHaveText('Item 1');
      await expect(itemsAfterNavigation.at(0)).toBeFocused();
    });

    test('add item -> dynamic item', async ({ mount, page }) => {
      await mount(`
          <ix-select editable></ix-select>
       `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item 1');
      await selectCtrl.pressEnter();

      await selectCtrl.clickDropdownChevron();
      await expect(await selectCtrl.getItemCheckedLocator()).toBeVisible();

      await selectCtrl.fillInput('');
      await selectCtrl.fillInput('I');

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      await expect(addItem).toBeFocused();

      await selectCtrl.arrowUp();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsAfterNavigation.at(0)).toHaveText('Item 1');
      await expect(itemsAfterNavigation.at(0)).toBeFocused();
    });

    test('wrap - slot -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable>
          <ix-select-item value="1" label="Item 1"></ix-select-item>
        </ix-select>
     `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item 2');
      await page.keyboard.press('Enter');

      await selectCtrl.clickDropdownChevron();

      expect(await selectCtrl.getDropdownItemsLocator()).toHaveLength(2);

      await selectCtrl.arrowDown();

      const itemsBeforeNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsBeforeNavigation.at(0)).toHaveText('Item 1');
      await expect(itemsBeforeNavigation.at(0)).toBeFocused();
      await expect(itemsBeforeNavigation.at(1)).not.toBeFocused();

      await selectCtrl.arrowUp();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsAfterNavigation.at(1)).toHaveText('Item 2');
      await expect(itemsAfterNavigation.at(0)).not.toBeFocused();
      await expect(itemsAfterNavigation.at(1)).toBeFocused();
    });

    test('wrap - slot -> add-item', async ({ mount, page }) => {
      await mount(`
          <ix-select editable>
            <ix-select-item value="1" label="Item 1"></ix-select-item>
          </ix-select>
       `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('I');

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      await selectCtrl.arrowDown();

      const itemsBeforeNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsBeforeNavigation.at(0)).toHaveText('Item 1');
      await expect(itemsBeforeNavigation.at(0)).toBeFocused();

      await selectCtrl.arrowUp();

      await expect(addItem).toBeFocused();
    });

    test('wrap - dynamic item -> add item', async ({ mount, page }) => {
      await mount(`
          <ix-select editable></ix-select>
       `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item 1');
      await page.keyboard.press('Enter');

      await selectCtrl.clickDropdownChevron();
      await expect(await selectCtrl.getItemCheckedLocator()).toBeVisible();

      await selectCtrl.fillInput('');
      await selectCtrl.fillInput('I');

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      await selectCtrl.arrowDown();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(itemsAfterNavigation.at(0)).toHaveText('Item 1');
      await expect(itemsAfterNavigation.at(0)).toBeFocused();

      await selectCtrl.arrowUp();

      await expect(addItem).toBeFocused();
    });
  });
});
