/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest, waitForOpenDropdownPanel } from '@utils/test';

regressionTest.describe('dropdown', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('dropdown/basic');

    await page.locator('ix-button').click();
    await waitForOpenDropdownPanel(page);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('checked', async ({ page }) => {
    await page.goto('dropdown/checked');

    await page.locator('ix-button').click();
    await waitForOpenDropdownPanel(page);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('dropdown/overflow');

    const host = page.locator('ix-dropdown.show').first();
    await expect(host).toBeVisible();
    const menuHandle = await host.elementHandle();
    if (!menuHandle) {
      throw new Error('dropdown host not found');
    }

    page.evaluate((menuElement) => {
      menuElement.scrollTop = 9999;
      menuElement.classList.add('__SCROLLED__');
    }, menuHandle);

    await expect(host).toHaveClass(/__SCROLLED__/);
    await expect(page).toHaveScreenshot();
  });

  regressionTest('disabled', async ({ page }) => {
    await page.goto('dropdown/disabled');

    await page.locator('ix-button').click();
    await waitForOpenDropdownPanel(page);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('handle multiple', async ({ page }) => {
    await page.goto('dropdown/multiple');

    await page.locator('#trigger-a').click();
    await waitForOpenDropdownPanel(page);

    await page.locator('#trigger-b').click();
    await waitForOpenDropdownPanel(page);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('zoom', async ({ page }) => {
    await page.goto('dropdown/basic');

    // Set the zoom
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.evaluate(() => {
      (document.body.style as any).zoom = '110%';
    });

    await page.locator('ix-button').click();
    await waitForOpenDropdownPanel(page);

    await expect(page).toHaveScreenshot();
  });

  regressionTest('centered overflow', async ({ page }) => {
    await page.goto('dropdown/centered-overflow');
    await waitForOpenDropdownPanel(page);

    const host = page.locator('ix-dropdown.show').first();
    await expect(host).toBeVisible();
    const menuHandle = await host.elementHandle();
    if (!menuHandle) {
      throw new Error('dropdown host not found');
    }

    await page.evaluate((menuElement) => {
      menuElement.scrollTop = 9999;
      menuElement.classList.add('__SCROLLED__');
    }, menuHandle);

    await expect(host).toHaveClass(/__SCROLLED__/);
    await expect(page).toHaveScreenshot();
  });
});
