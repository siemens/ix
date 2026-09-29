/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test, expect } from '@utils/test';
import { Locator } from '@playwright/test';
import { selectController } from './select-controller';

function getDropdownItem(items: Locator[], index: number) {
  const item = items.at(index);

  if (!item) {
    throw new Error(`Expected dropdown item at index ${index}`);
  }

  return item;
}

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
      await expect(focusItem).toHaveVisibleFocus(selectCtrl.getInputLocator());
      await expect(focusItem).toHaveText(/Item 2/);
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

      await selectCtrl.arrowDown();
      await selectCtrl.pressEnter();

      await selectCtrl.clickDropdownChevron();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      const dropdownItems = await selectCtrl.getDropdownItemsLocator();
      const focusItem = await selectCtrl.getFocusDropdownItemLocator();

      expect(dropdownItems).toHaveLength(3);
      await expect(focusItem).toHaveVisibleFocus(selectCtrl.getInputLocator());
      await expect(focusItem).toHaveText(/New Item/);
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
      await expect(addItem).toHaveVisibleFocus(selectCtrl.getInputLocator());
      await expect(addItem).toHaveText(/New Item/);
    });

    test('input -> add item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
      `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('New Item');
      await selectCtrl.arrowDown();
      await selectCtrl.pressEnter();
      await selectCtrl.clickDropdownChevron();
      await selectCtrl.arrowDown();

      const items = await selectCtrl.getDropdownItemsLocator();
      expect(items).toHaveLength(1);

      const focusItem = await selectCtrl.getFocusDropdownItemLocator();
      await expect(focusItem).toHaveVisibleFocus(selectCtrl.getInputLocator());
      await expect(focusItem).toHaveText(/New Item/);
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
      ).toHaveVisibleFocus(selectCtrl.getInputLocator());
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
      await selectCtrl.arrowDown();
      await selectCtrl.pressEnter();

      await selectCtrl.clickDropdownChevron();
      await selectCtrl.getItemCheckedLocator();

      await selectCtrl.fillInput('');
      await selectCtrl.fillInput('I');

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      await expect(
        await selectCtrl.getAddItemDropdownItemLocator()
      ).toHaveVisibleFocus(selectCtrl.getInputLocator());
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
      await selectCtrl.arrowDown();
      await selectCtrl.pressEnter();

      await selectCtrl.clickDropdownChevron();

      expect(await selectCtrl.getDropdownItemsLocator()).toHaveLength(2);

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      const itemsBeforeNavigation = await selectCtrl.getDropdownItemsLocator();
      const firstItemBeforeNavigation = getDropdownItem(
        itemsBeforeNavigation,
        0
      );
      const secondItemBeforeNavigation = getDropdownItem(
        itemsBeforeNavigation,
        1
      );

      await expect(secondItemBeforeNavigation).toHaveText(/Item 2/);
      await expect(firstItemBeforeNavigation).not.toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(secondItemBeforeNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );

      await selectCtrl.arrowDown();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      const firstItemAfterNavigation = getDropdownItem(itemsAfterNavigation, 0);
      const secondItemAfterNavigation = getDropdownItem(
        itemsAfterNavigation,
        1
      );

      await expect(firstItemAfterNavigation).toHaveText(/Item 1/);
      await expect(firstItemAfterNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(secondItemAfterNavigation).not.toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
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

      await expect(addItem).toHaveAttribute('ix-focus-visible');

      await selectCtrl.arrowDown();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      const firstItemAfterNavigation = getDropdownItem(itemsAfterNavigation, 0);

      await expect(firstItemAfterNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(firstItemAfterNavigation).toHaveText(/Item 1/);
    });

    test('wrap - add item -> dynamic item', async ({ mount, page }) => {
      await mount(`
        <ix-select editable></ix-select>
     `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item 1');
      await selectCtrl.arrowDown();
      await selectCtrl.pressEnter();

      await selectCtrl.clickDropdownChevron();
      await selectCtrl.getItemCheckedLocator();

      await selectCtrl.fillInput('');
      await selectCtrl.fillInput('I');

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      await expect(addItem).toHaveAttribute('ix-focus-visible');

      await selectCtrl.arrowDown();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      const firstItemAfterNavigation = getDropdownItem(itemsAfterNavigation, 0);

      await expect(firstItemAfterNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(firstItemAfterNavigation).toHaveText(/Item 1/);
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
      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();
      await selectCtrl.pressEnter();

      await selectCtrl.clickDropdownChevron();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      const itemsBeforeNavigation = await selectCtrl.getDropdownItemsLocator();
      const secondItemBeforeNavigation = getDropdownItem(
        itemsBeforeNavigation,
        1
      );

      await expect(secondItemBeforeNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(secondItemBeforeNavigation).toHaveText(/I/);

      await selectCtrl.arrowUp();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      const firstItemAfterNavigation = getDropdownItem(itemsAfterNavigation, 0);

      await expect(firstItemAfterNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(firstItemAfterNavigation).toHaveText(/Item 1/);
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

      await expect(addItem).toHaveAttribute('ix-focus-visible');

      await selectCtrl.arrowUp();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      const firstItemAfterNavigation = getDropdownItem(itemsAfterNavigation, 0);

      await expect(firstItemAfterNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(firstItemAfterNavigation).toHaveText(/Item 1/);
    });

    test('add item -> dynamic item', async ({ mount, page }) => {
      await mount(`
          <ix-select editable></ix-select>
       `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item 1');
      await selectCtrl.arrowDown();
      await selectCtrl.pressEnter();

      await selectCtrl.clickDropdownChevron();

      await selectCtrl.fillInput('');
      await selectCtrl.fillInput('I');

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown();

      await expect(addItem).toHaveAttribute('ix-focus-visible');

      await selectCtrl.arrowUp();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      await expect(getDropdownItem(itemsAfterNavigation, 0)).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(getDropdownItem(itemsAfterNavigation, 0)).toHaveText(
        /Item 1/
      );
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
      await selectCtrl.arrowDown();
      await selectCtrl.pressEnter();

      await selectCtrl.clickDropdownChevron();

      expect(await selectCtrl.getDropdownItemsLocator()).toHaveLength(2);

      await selectCtrl.arrowDown();

      const itemsBeforeNavigation = await selectCtrl.getDropdownItemsLocator();
      const firstItemBeforeNavigation = getDropdownItem(
        itemsBeforeNavigation,
        0
      );
      const secondItemBeforeNavigation = getDropdownItem(
        itemsBeforeNavigation,
        1
      );

      await expect(firstItemBeforeNavigation).toHaveText(/Item 1/);
      await expect(firstItemBeforeNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(secondItemBeforeNavigation).not.toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );

      await selectCtrl.arrowUp();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      const firstItemAfterNavigation = getDropdownItem(itemsAfterNavigation, 0);
      const secondItemAfterNavigation = getDropdownItem(
        itemsAfterNavigation,
        1
      );

      await expect(secondItemAfterNavigation).toHaveText(/Item 2/);
      await expect(firstItemAfterNavigation).not.toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(secondItemAfterNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
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
      const firstItemBeforeNavigation = getDropdownItem(
        itemsBeforeNavigation,
        0
      );

      await expect(firstItemBeforeNavigation).toHaveText(/Item 1/);
      await expect(firstItemBeforeNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );

      await selectCtrl.arrowUp();

      await expect(addItem).toHaveAttribute('ix-focus-visible');
    });

    test('wrap - dynamic item -> add item', async ({ mount, page }) => {
      await mount(`
          <ix-select editable></ix-select>
       `);

      const selectCtrl = selectController(page.locator('ix-select'));
      await selectCtrl.focusInput();
      await selectCtrl.fillInput('Item 1');
      await selectCtrl.arrowDown();
      await selectCtrl.pressEnter();

      await selectCtrl.clickDropdownChevron();

      await selectCtrl.fillInput('');
      await selectCtrl.fillInput('I');

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      await selectCtrl.arrowDown();

      const itemsAfterNavigation = await selectCtrl.getDropdownItemsLocator();
      const firstItemAfterNavigation = getDropdownItem(itemsAfterNavigation, 0);

      await expect(firstItemAfterNavigation).toHaveVisibleFocus(
        selectCtrl.getInputLocator()
      );
      await expect(firstItemAfterNavigation).toHaveText(/Item 1/);

      await selectCtrl.arrowUp();

      await expect(addItem).toHaveAttribute('ix-focus-visible');
    });
  });
});
