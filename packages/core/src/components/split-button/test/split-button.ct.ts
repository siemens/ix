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

regressionTest.only(
  'should disable only the dropdown trigger when disableDropdownButton is set',
  async ({ mount, page }) => {
    await mount(`
    <ix-split-button label="Test" disable-Dropdown-Button>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
  `);

    const splitButton = page.locator('ix-split-button');
    const mainButton = splitButton.locator('ix-button');
    const dropdownButton = splitButton.locator('ix-icon-button');
    await expect(mainButton).toHaveAttribute('tabindex', '0');
    await expect(dropdownButton).toHaveClass(/disabled/);
  }
);

regressionTest.only(
  'should disable only the main button when disable-button is set',
  async ({ mount, page }) => {
    await mount(`
    <ix-split-button label="Test" disable-button>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
  `);
    const splitButton = page.locator('ix-split-button');
    const mainButton = splitButton.locator('ix-button');
    const dropdownButton = splitButton.locator('ix-icon-button');
    await expect(mainButton).toHaveClass(/disabled/);
    await expect(dropdownButton).not.toHaveClass(/disabled/);
  }
);
