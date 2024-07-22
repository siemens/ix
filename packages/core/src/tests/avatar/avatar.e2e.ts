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
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  regressionTest('image', async ({ page }) => {
    await page.goto('avatar/image');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  regressionTest('initials', async ({ page }) => {
    await page.goto('avatar/initials');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  regressionTest('user-info', async ({ page }) => {
    await page.goto('avatar/user-info');

    const avatar = page.locator('ix-avatar');

    await avatar.click();

    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  regressionTest('scrollbar', async ({ page }) => {
    await page.goto('avatar/scrollbar');

    await page.locator('ix-avatar').click();
    await page.locator('ix-dropdown-item').last().hover();

    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});
