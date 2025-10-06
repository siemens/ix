/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('avatar', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('avatar/basic');
    const avatar = page.locator('ix-avatar');
    await expect(avatar).toHaveScreenshot();
  });

  regressionTest('image', async ({ page }) => {
    await page.goto('avatar/image');

    const avatar = page.locator('ix-avatar');
    await expect(avatar).toHaveScreenshot();
  });

  regressionTest('initials', async ({ page }) => {
    await page.goto('avatar/initials');
    const avatar = page.locator('ix-avatar');
    await expect(avatar).toHaveScreenshot();
  });

  regressionTest('user-info', async ({ page }) => {
    await page.goto('avatar/user-info');

    const avatar = page.locator('ix-avatar');
    await avatar.click();

    await expect(page).toHaveScreenshot();
  });

  regressionTest('scrollbar', async ({ page }) => {
    await page.goto('avatar/scrollbar');

    const avatar = page.locator('ix-avatar');

    await avatar.click();
    await page.locator('ix-dropdown-item').last().hover();

    await expect(page).toHaveScreenshot();
  });
});
