/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Locator, expect } from '@playwright/test';

export function selectController(select: Locator) {
  const input = select.locator('input');
  const dropdown = select.locator('ix-dropdown');
  const dropdownChevron = select.locator('ix-icon-button');

  const isDropdownVisible = async () => {
    const element = await dropdown.elementHandle();
    if (!element) {
      throw new Error('Dropdown has no open handle');
    }
    await element.waitForElementState('stable');
    await expect(dropdown).toBeVisible();
  };

  return {
    getDropdownLocator() {
      return dropdown;
    },
    getInputLocator() {
      return input;
    },
    async clickDropdownChevron() {
      await dropdownChevron.click();
      await isDropdownVisible();
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
        await isDropdownVisible();
      }
      await select.page().keyboard.press('ArrowDown', { delay: 50 });
    },
    async arrowUp(skipDropdownCheck = false) {
      if (!skipDropdownCheck) {
        await isDropdownVisible();
      }
      await select.page().keyboard.press('ArrowUp', { delay: 50 });
    },
    async pressEnter() {
      await select.page().keyboard.press('Enter');
    },
    async getDropdownItemsLocator(onlyVisible = false) {
      let selector = 'ix-select-item';

      if (onlyVisible) {
        selector += ':not([hidden])';
      }

      await isDropdownVisible();
      return select.locator(selector).all();
    },
    async getFocusDropdownItemLocator() {
      await isDropdownVisible();

      const focusDropdownItem = select.locator(
        'ix-select-item[ix-focus-visible]'
      );
      return focusDropdownItem;
    },

    async getAddItemDropdownItemLocator() {
      await isDropdownVisible();

      const addItem = select.locator('ix-dropdown-item.add-item');
      const addItemHandle = await addItem.elementHandle();

      if (!addItemHandle) {
        throw new Error('Dropdown has no open handle');
      }
      await addItemHandle.waitForElementState('stable');
      return addItem;
    },

    async getItemCheckedLocator() {
      await isDropdownVisible();
      const itemChecked = select.locator('ix-select-item .checkmark');
      const itemCheckedHandle = await itemChecked.elementHandle();

      if (!itemCheckedHandle) {
        throw new Error('Dropdown has no open handle');
      }

      expect(itemCheckedHandle.waitForElementState('stable'));

      return itemChecked;
    },
  };
}
