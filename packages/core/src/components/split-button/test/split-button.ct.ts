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
  includeAriaLabels?: boolean;
}) {
  return `
    <ix-split-button label="Test" ${
      props.includeAriaLabels === false
        ? ''
        : 'aria-label-button="First button" aria-label-split-icon-button="dropdown button"'
    } ${
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
    const dropdownButton = splitButton.getByRole('button', {
      name: 'dropdown button',
    });

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
    const dropdownButton = splitButton.getByRole('button', {
      name: 'dropdown button',
    });
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
    const dropdownButton = splitButton.getByRole('button', {
      name: 'dropdown button',
    });
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
    const dropdownButton = splitButton.getByRole('button', {
      name: 'dropdown button',
    });
    await expect(mainButton).toHaveClass(/disabled/);
    await expect(dropdownButton).toHaveClass(/disabled/);
  }
);

regressionTest(
  'right dropdown trigger uses 20px glyph (Figma)',
  async ({ mount, page }) => {
    await mount(getSplitButtonExample({}));

    const dropdownIconButton = page.locator(
      'ix-split-button ix-dropdown-button ix-icon-button'
    );
    await expect(dropdownIconButton).toHaveClass(/hydrated/);
    await expect(dropdownIconButton).toHaveClass(/btn-icon-32/);
    await expect(dropdownIconButton.locator('ix-icon')).toHaveClass(/size-20/);
  }
);

regressionTest(
  'provide valid aria-activedescendant',
  async ({ makeAxeBuilder, mount, page }) => {
    await mount(getSplitButtonExample({ includeAriaLabels: false }));

    const splitButton = page.locator('ix-split-button');
    await splitButton.evaluate((element: HTMLIxSplitButtonElement) => {
      element.ariaLabelButton = 'First button';
      element.ariaLabelSplitIconButton = 'dropdown button';
    });
    const dropdownButton = splitButton.locator('ix-dropdown-button');

    await expect(dropdownButton).toHaveClass(/\bhydrated\b/);
    await expect(dropdownButton).toHaveAccessibleName('dropdown button');
    let accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);

    await dropdownButton.focus();
    await expect(dropdownButton).toBeFocused();
    await dropdownButton.press('Enter');
    await expect(dropdownButton).toBeFocused();

    await expect(dropdownButton.locator('ix-dropdown')).toHaveClass(/show/);
    await expect(dropdownButton).toHaveAttribute('aria-activedescendant', /.+/);

    const activeDescendant = await dropdownButton.getAttribute(
      'aria-activedescendant'
    );

    if (!activeDescendant) {
      throw new Error('Expected active descendant id');
    }

    const item1 = splitButton.getByRole('menuitem', { name: 'Item 1' });
    await expect(item1).toBeVisible();
    await expect(item1).toHaveAttribute('id', activeDescendant);

    const dropdownItem1 = splitButton.locator('ix-dropdown-item', {
      hasText: /Item 1/,
    });
    await expect(dropdownItem1).toHaveClass(/ix-focused/);

    await dropdownButton.press('ArrowDown');
    const item2 = splitButton.getByRole('menuitem', { name: 'Item 2' });
    await expect(item2).toBeVisible();
    await expect(item2).toHaveAttribute('id', /.+/);
    const item2Id = await item2.evaluate((element) => element.id);

    await expect(dropdownButton).toHaveAttribute(
      'aria-activedescendant',
      item2Id
    );

    const dropdownItem2 = splitButton.locator('ix-dropdown-item', {
      hasText: /Item 2/,
    });
    await expect(dropdownItem2).toHaveClass(/ix-focused/);

    accessibilityScanResults = await makeAxeBuilder()
      .disableRules(['aria-allowed-attr'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  }
);
