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

regressionTest(
  'should disable only the dropdown trigger when disabled-icon is set',
  async ({ mount, page }) => {
    await mount(`
    <ix-split-button label="Test" disabled-icon="true">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
  `);

    const splitButton = page.locator('ix-split-button');
    const iconButton = splitButton.locator('ix-icon-button');
    await expect(iconButton).toHaveClass(/disabled/);
  }
);

regressionTest(
  'should disable only the main button when disabled-button is set',
  async ({ mount, page }) => {
    await mount(`
    <ix-split-button label="Test" disabled-button="true">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
  `);
    const splitButton = page.locator('ix-split-button');
    const mainButton = splitButton.locator('ix-button');
    await expect(mainButton).toHaveClass(/disabled/);
  }
);
