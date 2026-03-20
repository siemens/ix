/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { regressionTest } from '@utils/test';
import { expect } from '@playwright/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-category-filter></ix-category-filter>`);
  const categoryFilter = page.locator('ix-category-filter');
  await expect(categoryFilter).toHaveClass(/hydrated/);
});

regressionTest.describe('category-preview test', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(
      `
      <ix-category-filter></ix-category-filter>
      `
    );

    const categoryFilter = page.locator('ix-category-filter');
    await categoryFilter.evaluate((el: HTMLIxCategoryFilterElement) => {
      el.categories = [
        {
          key: 'ID_1',
          label: 'Vendor',
          values: ['Apple', 'MS', 'Siemens'],
        },
        {
          key: 'ID_2',
          label: 'Product',
          values: ['iPhone X', 'Windows', 'APS'],
        },
      ];
    });
  });

  regressionTest('add search token via Enter', async ({ page }) => {
    const token = 'Test';
    await page.waitForSelector('ix-category-filter');
    const input = page.locator('input').first();
    await input.click();
    await input.fill(token);
    await page.keyboard.press('Enter');
    const chip = page.locator('ix-filter-chip').first();
    await expect(chip).toContainText(token);
  });

  regressionTest('clear filter via reset button', async ({ page }) => {
    const categoryFilter = page.locator('ix-category-filter');
    const input = categoryFilter.locator('input').first();

    // Add a search token first
    await input.click();
    await input.fill('Test');
    await page.keyboard.press('Enter');

    // Verify chip exists
    const chip = page.locator('ix-filter-chip').first();
    await expect(chip).toContainText('Test');

    // Click reset button
    await page.locator('ix-icon-button').first().click();

    // Verify chips are cleared
    await expect(page.locator('ix-filter-chip')).toHaveCount(0);
  });
});

regressionTest.describe('focus behavior', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-category-filter></ix-category-filter>`);

    const categoryFilter = page.locator('ix-category-filter');
    await categoryFilter.evaluate((el: HTMLIxCategoryFilterElement) => {
      el.categories = [
        {
          key: 'ID_1',
          label: 'Vendor',
          values: ['Apple', 'MS', 'Siemens'],
        },
        {
          key: 'ID_2',
          label: 'Product',
          values: ['iPhone X', 'Windows', 'APS'],
        },
      ];
    });
  });

  regressionTest(
    'should not focus input when setting filterState programmatically',
    async ({ page }) => {
      const categoryFilter = page.locator('ix-category-filter');
      await categoryFilter.evaluate((el: HTMLIxCategoryFilterElement) => {
        el.filterState = [{ type: 'search', value: 'Test' }];
      });

      const input = page.locator('input').first();
      await expect(input).not.toBeFocused();
    }
  );

  regressionTest(
    'should focus input when adding token and input was already focused',
    async ({ page }) => {
      const input = page.locator('input').first();

      await input.click();
      await expect(input).toBeFocused();

      await input.fill('Test');
      await page.keyboard.press('Enter');

      await expect(input).toBeFocused();
    }
  );
});
