/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, test } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

test.describe('menu', () => {
  regressionTest(
    'basic md - no default icon on second level, scaling for popup window',
    async ({ page }) => {
      await page.setViewportSize(viewPorts.md);
      await page.goto('menu/basic');

      const category = page.locator('ix-menu-category');
      await category.click();

      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot();
    }
  );

  regressionTest(
    'basic lg - no default icon on second level, visible ellipsis for category',
    async ({ page }) => {
      await page.setViewportSize(viewPorts.lg);
      await page.goto('menu/basic');

      const category = page.locator('ix-menu-category');
      await category.click();

      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot();
    }
  );

  regressionTest(
    'link - should render menu items with a[href]',
    async ({ page }) => {
      await page.setViewportSize(viewPorts.lg);
      await page.goto('menu/link');

      const category = page.locator('ix-menu-category');
      await category.click();

      const link1 = page.getByText('Link 1');
      await expect(link1).toBeVisible();

      const link2 = page.getByText('Link 2');
      await expect(link2).toBeVisible();

      await link2.hover();

      await page.waitForTimeout(1000);

      await expect(page).toHaveScreenshot();
    }
  );

  regressionTest('toggle - check icon & functionality', async ({ page }) => {
    await page.setViewportSize(viewPorts.lg);
    await page.goto('menu/toggle');

    const category = page.locator('ix-menu-category');
    await category.click();

    const themeToggle = page.locator('#toggleTheme');
    await themeToggle.click();

    await page.waitForTimeout(10000);

    await expect(page).toHaveScreenshot();
  });

  regressionTest(
    'category open on expand when initially closed and activated',
    async ({ page }) => {
      await page.setViewportSize(viewPorts.lg);
      await page.goto('menu/active');

      const basicNavigationElement = page.locator('ix-basic-navigation');

      const category = page.locator('ix-menu-category');
      await category.click();
      await page.waitForTimeout(1000);

      const collapseButton = page.getByRole('button', {
        name: 'Double Chevron Left',
      });
      await collapseButton.click();
      await page.waitForTimeout(1000);

      const expandButton = page.getByRole('button', {
        name: 'Double Chevron Right',
      });
      await expandButton.click();
      await page.waitForTimeout(1000);

      expect(
        await basicNavigationElement.screenshot({
          animations: 'disabled',
        })
      ).toMatchSnapshot();
    }
  );

  regressionTest('show scrollbar on overflow on expand', async ({ page }) => {
    await page.setViewportSize(viewPorts.lg);
    await page.goto('menu/overflow');

    const menuItem = page.locator('ix-menu-item');
    await menuItem.nth(5).hover();
    await page.mouse.wheel(0, 400);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
