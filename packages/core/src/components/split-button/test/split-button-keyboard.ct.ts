/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator } from '@playwright/test';
import { regressionTest } from '@utils/test';

function splitButtonController(splitBtn: Locator) {
  const mainButton = splitBtn.locator('ix-button').first();
  const chevronButton = splitBtn.locator('ix-icon-button.anchor');
  const dropdown = splitBtn.locator('ix-dropdown');

  const dropdownVisible = async () => {
    const element = await dropdown.elementHandle();
    if (!element) {
      throw new Error('Dropdown has no open handle');
    }
    await element.waitForElementState('stable');
    await expect(dropdown).toBeVisible();
  };

  return {
    async clickMainButton() {
      await mainButton.click();
    },
    async clickChevron() {
      await chevronButton.click();
      await dropdownVisible();
    },
    async arrowDown(skipDropdownCheck = false) {
      if (!skipDropdownCheck) {
        await dropdownVisible();
      }
      await splitBtn.page().keyboard.press('ArrowDown', { delay: 50 });
    },
    async arrowUp(skipDropdownCheck = false) {
      if (!skipDropdownCheck) {
        await dropdownVisible();
      }
      await splitBtn.page().keyboard.press('ArrowUp', { delay: 50 });
    },
    async pressEnter() {
      await splitBtn.page().keyboard.press('Enter');
    },
    async getDropdownItemsLocator() {
      await dropdownVisible();
      return splitBtn.locator('ix-dropdown-item').all();
    },
    async getFocusedItemLocator() {
      await dropdownVisible();
      return splitBtn.locator('ix-dropdown-item:focus');
    },
  };
}

regressionTest(
  'ArrowDown cycles through dropdown items',
  async ({ mount, page }) => {
    await mount(`
      <ix-split-button>
        Action
        <ix-dropdown-item>Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
        <ix-dropdown-item>Item 3</ix-dropdown-item>
      </ix-split-button>
    `);

    const splitBtn = page.locator('ix-split-button');
    const ctrl = splitButtonController(splitBtn);

    await ctrl.clickChevron();
    await ctrl.arrowDown();
    await ctrl.arrowDown();

    const items = await ctrl.getDropdownItemsLocator();
    const focused = await ctrl.getFocusedItemLocator();

    expect(items).toHaveLength(3);
    await expect(focused).toHaveText('Item 3');
  }
);

regressionTest('ArrowUp cycles backwards', async ({ mount, page }) => {
  await mount(`
      <ix-split-button>
        Action
        <ix-dropdown-item>Item A</ix-dropdown-item>
        <ix-dropdown-item>Item B</ix-dropdown-item>
      </ix-split-button>
    `);

  const splitBtn = page.locator('ix-split-button');
  const ctrl = splitButtonController(splitBtn);

  await ctrl.clickChevron();
  await ctrl.arrowDown();
  await ctrl.arrowUp();

  const focused = await ctrl.getFocusedItemLocator();
  await expect(focused).toHaveText('Item A');
});

regressionTest(
  'Tab from dropdown item moves focus to next component',
  async ({ mount, page }) => {
    await mount(`
    <ix-split-button>
      Action
      <ix-dropdown-item>Item 1</ix-dropdown-item>
      <ix-dropdown-item>Item 2</ix-dropdown-item>
      <ix-dropdown-item>Item 3</ix-dropdown-item>
    </ix-split-button>
    <ix-button id="next">Next Component</ix-button>
  `);

    const splitBtn = page.locator('ix-split-button');
    const ctrl = splitButtonController(splitBtn);

    await ctrl.clickChevron();
    await ctrl.arrowDown();
    await ctrl.arrowDown();

    await page.keyboard.press('Tab');

    const nextButton = page.locator('#next');
    await expect(nextButton).toBeFocused();
  }
);
