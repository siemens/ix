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

regressionTest.describe('menu-settings', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('menu-settings/basic');
    const settings = page.locator('ix-menu-item#settings');
    await settings.click();
    await page.waitForTimeout(500);

    //Click is needed otherwise tab item is still hovered
    await page.getByText('First Label - ').click();
    await expect(settings.locator('ix-tooltip')).not.toHaveClass(/visible/);

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
    });
  });

  regressionTest('label', async ({ page }) => {
    await page.goto('menu-settings/basic');
    const settings = page.locator('ix-menu-item#settings');
    await settings.click();
    await page.waitForTimeout(500);

    await page.getByText('First Content').click();
    await expect(settings.locator('ix-tooltip')).not.toHaveClass(/visible/);

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
    });
  });

  regressionTest('switch', async ({ page }) => {
    await page.goto('menu-settings/basic');
    const settings = page.locator('ix-menu-item#settings');
    await settings.click();
    await page.waitForTimeout(500);

    await page.getByText('First Content').click();
    await page.getByText('Changed Label').click();

    await expect(settings.locator('ix-tooltip')).not.toHaveClass(/visible/);

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
    });
  });
});
