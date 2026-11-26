/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { focusWithKeyboard, regressionTest } from '@utils/test';

regressionTest.describe('split-button', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('split-button/basic');

    const button = page.locator('ix-split-button').first();
    const dropdownButton = button.locator('ix-dropdown-button');
    await expect(dropdownButton).toBeVisible();
    await dropdownButton.click();
    await expect(button.locator('.dropdown-menu.show')).toBeVisible();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.02,
    });
  });
});

regressionTest('should show focus-visible outline', async ({ mount, page }) => {
  const container = await mount(
    `<div style="padding: 0.5rem; width: fit-content">
      <ix-split-button label="Split button"></ix-split-button>
    </div>`
  );

  await focusWithKeyboard(page, page.locator('ix-split-button'));

  expect(
    await container.screenshot({ animations: 'disabled' })
  ).toMatchSnapshot();
});
