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
    await page.locator('input').click();

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
    const input = page.locator('input').first();

    await input.click();
    // Close deterministically to avoid click-toggle timing variance.
    await page.keyboard.press('Escape');
    await expect(page.locator('dialog')).toBeHidden();

    await input.fill('p');
    await expect(page.locator('dialog')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Product' })).toBeVisible();

    await categoryFilter.evaluate((node) => {
      const nativeInput = node.shadowRoot?.querySelector('input');
      if (nativeInput instanceof HTMLInputElement) {
        nativeInput.focus();
      }
    });
    await expect
      .poll(() =>
        categoryFilter.evaluate((node) => {
          const container = node.shadowRoot?.querySelector('.input-container');
          return container?.classList.contains('focus') ?? false;
        })
      )
      .toBe(true);

    await expect(page).toHaveScreenshot();
  });
});
