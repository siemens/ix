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

regressionTest.describe('category-filter', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('category-filter/basic');
    const categoryFilter = page.locator('ix-category-filter');
    const input = categoryFilter.locator('input');
    // Open via keyboard so focus moves into the dropdown (Active without field focus).
    await input.focus();
    await page.keyboard.press('ArrowDown');
    await expect(categoryFilter.locator('ix-dropdown')).toHaveClass(/show/);
    await expect(input).not.toBeFocused();
    await page.mouse.move(5, 5, { steps: 10 });

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('basic-no-icon', async ({ page }) => {
    await page.goto('category-filter/basic-no-icon');
    await page.locator('input').click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('categories', async ({ page }) => {
    await page.goto('category-filter/categories');
    await page.locator('input').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('category options', async ({ page }) => {
    await page.goto('category-filter/categories');
    await page.locator('input').first().click();
    await page.locator('.category-item').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('static operator', async ({ page }) => {
    await page.goto('category-filter/static-operator');
    await page.locator('input').first().click();
    await page.locator('.category-item').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest(
    'dropdown stays open after filter selection',
    async ({ page }) => {
      await page.goto('category-filter/categories');
      await page.locator('input').first().click();

      const vendorButton = page.getByRole('button', { name: 'Vendor' });
      await vendorButton.click();

      const filterButton = page.getByRole('button', { name: '= Apple' });
      await filterButton.click();

      await expect(page).toHaveScreenshot();
    }
  );

  regressionTest('dropdown opens on text input', async ({ page }) => {
    await page.goto('category-filter/categories');
    const categoryFilter = page.locator('ix-category-filter').first();
    const input = categoryFilter.locator('input');

    await input.focus();
    await input.fill('p');
    await expect
      .poll(async () =>
        categoryFilter.locator('ix-dropdown').evaluate((el) => el.show)
      )
      .toBe(true);
    await expect(page.getByRole('button', { name: 'Product' })).toBeVisible();
    await page.mouse.move(5, 5, { steps: 10 });

    await expect(page).toHaveScreenshot();
  });
});
