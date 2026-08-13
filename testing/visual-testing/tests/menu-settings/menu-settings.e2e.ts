/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, type Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('menu-settings', () => {
  const openSettings = async (page: Page) => {
    const settingsMenuItem = page.locator('ix-menu-item#settings');
    await settingsMenuItem.click();
    await expect(page.locator('ix-menu-settings')).toHaveClass(/show/);
    await page.getByRole('tab', { name: 'Label 1' }).click();
    await expect(page.locator('#changeLabelButton')).toBeVisible();
    return settingsMenuItem;
  };

  regressionTest('basic', async ({ page }) => {
    await page.goto('menu-settings/basic');
    const settingsMenuItem = await openSettings(page);

    // Click is needed otherwise tab item is still hovered.
    await page.getByRole('heading', { name: 'Settings' }).click();
    await expect(settingsMenuItem.locator('ix-tooltip')).not.toHaveClass(
      /visible/
    );

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
    });
  });

  regressionTest('label', async ({ page }) => {
    await page.goto('menu-settings/basic');
    const settingsMenuItem = await openSettings(page);

    const firstContentButton = page.locator('#changeLabelButton');
    await firstContentButton.click();
    await expect(settingsMenuItem.locator('ix-tooltip')).not.toHaveClass(
      /visible/
    );

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
    });
  });

  regressionTest('switch', async ({ page }) => {
    await page.goto('menu-settings/basic');
    const settingsMenuItem = await openSettings(page);

    const firstContentButton = page.locator('#changeLabelButton');
    await firstContentButton.click();

    const changedLabelTab = page.getByRole('tab', { name: 'Changed Label' });
    await expect(changedLabelTab).toBeVisible();
    await changedLabelTab.click();

    await expect(settingsMenuItem.locator('ix-tooltip')).not.toHaveClass(
      /visible/
    );

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
    });
  });
});
