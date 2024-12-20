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
      await select.page().keyboard.press('ArrowDown');
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
  };
}

test.describe.configure({ mode: 'parallel', retries: 1, timeout: 2000 });

test.describe('arrow key navigation', () => {
  test.describe('ArrowDown', () => {
    test('input -> slotted item', async ({ mount, page }) => {
      await mount(`
        <ix-select>
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
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
          <ix-select-item value="1" label="Item 1">Test</ix-select-item>
          <ix-select-item value="2" label="Item 2">Test</ix-select-item>
        </ix-select>
      `);

      const selectCtrl = selectController(page.locator('ix-select'));

      await selectCtrl.focusInput();

      await selectCtrl.fillInput('New Item');
      await page.keyboard.press('Enter');

      await selectCtrl.clickDropdownChevron();

      await selectCtrl.arrowDown();
      await selectCtrl.arrowDown(true);

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

      const addItem = await selectCtrl.getAddItemDropdownItemLocator();

      expect(visibleDropdownItems).toHaveLength(0);
      await expect(addItem).toBeFocused();
      await expect(addItem).toHaveText('New Item');
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

    // test('slot -> add item', async ({ mount, page }) => {
    //   await mount(`
    //     <ix-select editable>
    //       <ix-select-item value="1" label="Item 1">Test</ix-select-item>
    //       <ix-select-item value="2" label="Item 2">Test</ix-select-item>
    //     </ix-select>
    //   `);

    //   await page.waitForSelector('ix-select');
    //   const input = page.locator('ix-select input');
    //   await input.focus();
    //   await page.keyboard.down('I');
    //   await page.waitForSelector('.dropdown-item-icon');

    //   await expectFocusMoved('ArrowDown', '1', page);
    //   await expectFocusMoved('ArrowDown', 'odd', page);
    //   await page.keyboard.press('ArrowDown');

    //   const addItem = page.locator('.add-item');
    //   await expect(addItem).toBeFocused();
    // });

    // test('dynamic item -> add item', async ({ mount, page }) => {
    //   await mount(`
    //     <ix-select editable>
    //       <ix-select-item value="1" label="Item 1">Test</ix-select-item>
    //     </ix-select>
    //   `);

    //   const input = page.locator('ix-select input');
    //   await input.focus();
    //   await input.fill('Item 2');
    //   await page.keyboard.down('Enter');
    //   await page.locator('ix-icon-button').click();
    //   await page.waitForSelector('.checkmark');

    //   await input.clear();
    //   await input.fill('I');
    //   await page.waitForSelector('.add-item');

    //   await expectFocusMoved('ArrowDown', '1', page);
    //   await expectFocusMoved('ArrowDown', 'odd', page);
    //   await page.keyboard.down('ArrowDown');

    //   const addItem = page.locator('.add-item');
    //   await expect(addItem).toBeFocused();
    // });

    // test('wrap - dynamic item -> slot', async ({ mount, page }) => {
    //   await mount(`
    //     <ix-select editable>
    //       <ix-select-item value="1" label="Item 1">Test</ix-select-item>
    //     </ix-select>
    //  `);

    //   const input = page.locator('ix-select input');
    //   await input.focus();
    //   await input.fill('Item 2');
    //   await page.keyboard.press('Enter');
    //   await input.clear();

    //   await page.keyboard.down('ArrowDown');
    //   await page.waitForSelector('ix-dropdown');
    //   await page.keyboard.down('ArrowDown');

    //   const itemTwo = page.locator('ix-select-item').nth(1);
    //   await expect(itemTwo).toBeFocused();

    //   await expectFocusMoved('ArrowDown', '1', page);
    // });

    // test('wrap - add item -> slot', async ({ mount, page }) => {
    //   await mount(`
    //     <ix-select editable>
    //       <ix-select-item value="1" label="Item 1">Test</ix-select-item>
    //     </ix-select>
    //  `);

    //   const input = page.locator('ix-select input');
    //   await input.focus();
    //   await input.fill('I');
    //   await page.waitForSelector('.add-item');

    //   await page.keyboard.down('ArrowDown');
    //   await page.keyboard.down('ArrowDown');

    //   const addItem = page.locator('.add-item');
    //   await expect(addItem).toBeFocused();

    //   await expectFocusMoved('ArrowDown', '1', page);
    // });

    // test('wrap - add item -> dynamic item', async ({ mount, page }) => {
    //   await mount(`
    //     <ix-select editable></ix-select>
    //  `);

    //   const input = page.locator('ix-select input');
    //   await input.focus();
    //   await input.fill('Item 1');
    //   await page.keyboard.press('Enter');
    //   await page.locator('ix-icon-button').click();
    //   await page.waitForSelector('.checkmark');

    //   await input.clear();
    //   await input.fill('I');
    //   await page.waitForSelector('.add-item');

    //   await page.keyboard.down('ArrowDown');
    //   await page.keyboard.down('ArrowDown');

    //   const addItem = page.locator('.add-item');
    //   await expect(addItem).toBeFocused();

    //   await expectFocusMoved('ArrowDown', '1', page);
    // });
  });

  // test.describe('ArrowUp', () => {
  //   test('dynamic item -> slot', async ({ mount, page }) => {
  //     await mount(`
  //       <ix-select editable>
  //         <ix-select-item value="1" label="Item 1">Test</ix-select-item>
  //       </ix-select>
  //     `);

  //     const input = page.locator('ix-select input');
  //     await input.focus();
  //     await input.fill('I');
  //     await page.keyboard.down('Enter');
  //     await page.locator('ix-icon-button').click();
  //     await page.waitForSelector('.checkmark');

  //     await expectFocusMoved('ArrowDown', '1', page);
  //     await expectFocusMoved('ArrowDown', 'odd', page);
  //     await expectFocusMoved('ArrowUp', '1', page);
  //   });

  //   test('add item -> slot', async ({ mount, page }) => {
  //     await mount(`
  //       <ix-select editable>
  //         <ix-select-item value="1" label="Item 1">Test</ix-select-item>
  //       </ix-select>
  //     `);

  //     const input = page.locator('ix-select input');
  //     await input.focus();
  //     await input.fill('I');
  //     await page.waitForSelector('.add-item');

  //     await expectFocusMoved('ArrowDown', '1', page);
  //     await page.keyboard.down('ArrowDown');

  //     const addItem = page.locator('.add-item');
  //     await expect(addItem).toBeFocused();

  //     await expectFocusMoved('ArrowUp', '1', page);
  //   });

  //   test('add item -> dynamic item', async ({ mount, page }) => {
  //     await mount(`
  //       <ix-select editable></ix-select>
  //     `);

  //     const input = page.locator('ix-select input');
  //     await input.focus();
  //     await input.fill('Item 1');
  //     await page.keyboard.press('Enter');
  //     await page.locator('ix-icon-button').click();
  //     await page.waitForSelector('.checkmark');

  //     await input.clear();
  //     await input.fill('I');
  //     await page.waitForSelector('.add-item');

  //     await expectFocusMoved('ArrowDown', '1', page);
  //     await page.keyboard.down('ArrowDown');

  //     const addItem = page.locator('.add-item');
  //     await expect(addItem).toBeFocused();

  //     await expectFocusMoved('ArrowUp', '1', page);
  //   });

  //   test('wrap - slot -> dynamic item', async ({ mount, page }) => {
  //     await mount(`
  //       <ix-select editable>
  //         <ix-select-item value="1" label="Item 1">Test</ix-select-item>
  //       </ix-select>
  //    `);

  //     const input = page.locator('input');
  //     await input.focus();
  //     await input.fill('Item 2');
  //     await page.keyboard.press('Enter');
  //     await page.locator('ix-icon-button').click();
  //     await page.locator('input').clear();

  //     await page.keyboard.down('ArrowDown');
  //     await page.keyboard.down('ArrowUp');

  //     const itemTwo = page.locator('ix-select-item').last();
  //     await expect(itemTwo).toBeFocused();
  //   });

  //   test('wrap - slot -> add-item', async ({ mount, page }) => {
  //     await mount(`
  //       <ix-select editable>
  //         <ix-select-item value="1" label="Item 1">Test</ix-select-item>
  //       </ix-select>
  //    `);

  //     const input = page.locator('ix-select input');
  //     await input.focus();
  //     await input.fill('I');
  //     await page.waitForSelector('.add-item');

  //     await expectFocusMoved('ArrowDown', '1', page);
  //     await page.keyboard.down('ArrowUp');

  //     const addItem = page.locator('.add-item');
  //     await expect(addItem).toBeFocused();
  //   });

  //   test('wrap - dynamic item -> add item', async ({ mount, page }) => {
  //     await mount(`
  //       <ix-select editable></ix-select>
  //    `);

  //     const input = page.locator('ix-select input');
  //     await input.focus();
  //     await input.fill('Item 1');
  //     await page.keyboard.press('Enter');
  //     await page.locator('ix-icon-button').click();
  //     await page.waitForSelector('.checkmark');

  //     await input.clear();
  //     await input.fill('I');
  //     await page.waitForSelector('.add-item');

  //     await expectFocusMoved('ArrowDown', '1', page);
  //     await page.keyboard.down('ArrowUp');

  //     const addItem = page.locator('.add-item');
  //     await expect(addItem).toBeFocused();
  //   });
  // });
});
