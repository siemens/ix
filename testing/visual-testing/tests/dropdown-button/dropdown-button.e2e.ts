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

regressionTest.describe('basic', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('dropdown-button/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('dropdown-button-icon', async ({ page }) => {
    await page.goto('dropdown-button/dropdown-button-icon');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('dropdown should open', async ({ page }) => {
    await page.goto('dropdown-button/dropdown');

    const expanded = page.locator('#expanded');
    await expanded.click();

    await expect(expanded.locator('ix-dropdown')).toHaveClass(/show/);
    await expect(page.locator('#collapsed')).toHaveAttribute(
      'aria-expanded',
      'false'
    );

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest('should show focus-visible outline', async ({ mount, page }) => {
  const container = await mount(
    `<div style="padding: 0.5rem; width: fit-content">
      <ix-dropdown-button label="Dropdown button"></ix-dropdown-button>
    </div>`
  );

  await focusWithKeyboard(page, page.locator('ix-dropdown-button'));

  expect(
    await container.screenshot({ animations: 'disabled' })
  ).toMatchSnapshot();
});
