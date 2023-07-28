/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

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
