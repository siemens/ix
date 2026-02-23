/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

function getSplitButtonExample(props: {
  disableDropdownButton?: boolean;
  disableButton?: boolean;
  disabled?: boolean;
}) {
  return `
    <ix-split-button label="Test" aria-label-button="First button" aria-label-split-icon-button="dropdown button" ${
      props.disableDropdownButton ? ' disable-dropdown-button' : ''
    } ${props.disableButton ? ' disable-button' : ''} ${
      props.disabled ? ' disabled' : ''
    }>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    `;
}

regressionTest(
  'should disable only the dropdown trigger when disableDropdownButton is set',
  async ({ mount, page }) => {
    await mount(getSplitButtonExample({ disableDropdownButton: true }));

    const splitButton = page.locator('ix-split-button');
    const mainButton = splitButton.getByLabel('First button');
    const dropdownButton = splitButton.getByLabel('dropdown button');

    await expect(mainButton).not.toHaveClass(/disabled/);
    await expect(dropdownButton).toHaveClass(/disabled/);
  }
);

regressionTest(
  'should disable only the main button when disable-button is set',
  async ({ mount, page }) => {
    await mount(getSplitButtonExample({ disableButton: true }));

    const splitButton = page.locator('ix-split-button');
    const mainButton = splitButton.getByLabel('First button');
    const dropdownButton = splitButton.getByLabel('dropdown button');
    await expect(mainButton).toHaveClass(/disabled/);
    await expect(dropdownButton).not.toHaveClass(/disabled/);
  }
);

regressionTest(
  'should disable both buttons when disable is set',
  async ({ mount, page }) => {
    await mount(getSplitButtonExample({ disabled: true }));

    const splitButton = page.locator('ix-split-button');
    const mainButton = splitButton.getByLabel('First button');
    const dropdownButton = splitButton.getByLabel('dropdown button');
    await expect(mainButton).toHaveClass(/disabled/);
    await expect(dropdownButton).toHaveClass(/disabled/);
  }
);

regressionTest(
  'should disable both buttons when disable-dropdown-button and disable-button are set',
  async ({ mount, page }) => {
    await mount(
      getSplitButtonExample({
        disableDropdownButton: true,
        disableButton: true,
      })
    );

    const splitButton = page.locator('ix-split-button');
    const mainButton = splitButton.getByLabel('First button');
    const dropdownButton = splitButton.getByLabel('dropdown button');
    await expect(mainButton).toHaveClass(/disabled/);
    await expect(dropdownButton).toHaveClass(/disabled/);
  }
);

regressionTest(
  'provide valid aria-activedescendant',
  async ({ mount, page }) => {
    await mount(getSplitButtonExample({}));

    const splitButton = page.locator('ix-split-button');
    const dropdownButton = splitButton.getByLabel('dropdown button');

    await dropdownButton.click();
    await page.keyboard.press('ArrowDown');

    await expect(dropdownButton.locator('ix-dropdown')).toHaveClass(/show/);

    const activeDescendant = await dropdownButton.getAttribute(
      'aria-activedescendant'
    );

    const item1 = splitButton.getByRole('menuitem', { name: 'Item 1' });
    await expect(item1).toBeVisible();
    await expect(item1).toHaveAttribute('id', activeDescendant!);

    const dropdownItem1 = splitButton.locator('ix-dropdown-item', {
      hasText: /Item 1/,
    });
    await expect(dropdownItem1).toHaveClass(/ix-focused/);

    await page.keyboard.press('ArrowDown');
    const item2 = splitButton.getByRole('menuitem', { name: 'Item 1' });
    await expect(item2).toBeVisible();
    await expect(item2).toHaveAttribute('id', activeDescendant!);

    const dropdownItem2 = splitButton.locator('ix-dropdown-item', {
      hasText: /Item 2/,
    });
    await expect(dropdownItem2).toHaveClass(/ix-focused/);
  }
);
