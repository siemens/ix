/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test } from '@utils/test';
import { expect } from '@playwright/test';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-category-filter></ix-category-filter>`);
  const categoryFilter = page.locator('ix-category-filter');
  await expect(categoryFilter).toHaveClass(/hydrated/);
});

test.describe('category-preview test', () => {
  test.beforeEach(async ({ mount, page }) => {
    await mount(
      `
      <ix-category-filter></ix-category-filter>
      `
    );

    const categoryFilter = page.locator('ix-category-filter');
    await categoryFilter.evaluate((el: HTMLIxCategoryFilterElement) => {
      el.categories = {
        ID_1: {
          label: 'Vendor',
          options: ['Apple', 'MS', 'Siemens'],
        },
        ID_2: {
          label: 'Product',
          options: ['iPhone X', 'Windows', 'APS'],
        },
      };
    });
  });

  test('clear category-preview', async ({ page }) => {
    await page.waitForSelector('ix-category-filter');
    await page.locator('input').first().click();
    await page.locator('.category-item').first().click();

    const categoryPreviewPromise = page.evaluate(() => {
      return new Promise((resolve) => {
        function onCategoryChanged(event) {
          resolve(event.detail);
        }

        document.addEventListener('categoryChanged', onCategoryChanged);
      });
    });

    await page.locator('ix-icon-button').first().click();
    const categoryPreview = await categoryPreviewPromise;

    expect(categoryPreview).toEqual(null);
  });
});
