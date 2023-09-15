/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest, test } from '@utils/test';

regressionTest.describe('modal', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('modal/basic');

    const modal = page.locator('ix-modal');
    const dialog = modal.locator('dialog');

    await expect(dialog).toBeVisible();
    await dialog.click({
      force: true,
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('icon', async ({ page }) => {
    await page.goto('modal/icon');

    const modal = page.locator('ix-modal');
    const dialog = modal.locator('dialog');

    await expect(dialog).toBeVisible();
    await dialog.click({
      force: true,
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

test('modal with dropdown', async ({ mount, page }) => {
  await mount(`
  <ix-modal>
    <ix-modal-header
      >Dialog title Dialog titleDialog titleDialog titleDialog titleDialog
      titleDialog title</ix-modal-header
    >
    <ix-modal-content>
      <ix-dropdown-button label="drop">
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
      </ix-dropdown-button>
    </ix-modal-content>
    <ix-modal-footer>
      <ix-button outline>Cancel</ix-button>
      <ix-button>Save</ix-button>
    </ix-modal-footer>
  </ix-modal>
    `);
  const modal = page.locator('ix-modal');
  await expect(modal).toHaveClass(/hydrated/);
  const dropdown = page.locator('ix-dropdown-button');
  await dropdown.click();

  const dropdownContent = dropdown.locator('ix-dropdown');

  await expect(dropdownContent).toHaveClass(/show/);

  await modal.evaluate((modal: HTMLIxModalElement) => modal.showModal());
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
