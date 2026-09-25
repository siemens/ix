/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { regressionTest } from '@utils/test';
import { expect, Page } from '@playwright/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-category-filter></ix-category-filter>`);
  const categoryFilter = page.locator('ix-category-filter');
  await expect(categoryFilter).toHaveClass(/hydrated/);
});

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(`<ix-category-filter hide-icon></ix-category-filter>`);
  const categoryFilter = page.locator('ix-category-filter');
  await categoryFilter.evaluate((el: HTMLIxCategoryFilterElement) => {
    el.ariaLabelFilterInput = 'Filter input';
    el.ariaLabelResetButton = 'Clear filter';
  });

  const input = page.getByRole('textbox', { name: 'Filter input' });
  await input.fill('Test');
  await input.press('Enter');
  await expect(categoryFilter.locator('ix-filter-chip')).toContainText('Test');

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest.describe('scroll behavior', () => {
  const getPageScrollY = (page: Page) => page.evaluate(() => window.scrollY);

  regressionTest.beforeEach(async ({ mount }) => {
    await mount(`
      <div>
        <div style="height: 150vh"></div>
        <ix-category-filter aria-label-filter-input="Filter input"></ix-category-filter>
        <div style="height: 150vh"></div>
      </div>
    `);
  });

  regressionTest(
    'should not scroll the page when adding a token',
    async ({ page }) => {
      const categoryFilter = page.locator('ix-category-filter');
      await expect(categoryFilter).toHaveClass(/hydrated/);
      await categoryFilter.evaluate((el) =>
        el.scrollIntoView({ block: 'center' })
      );
      const scrollYBefore = await getPageScrollY(page);

      const input = page.getByRole('textbox', { name: 'Filter input' });
      await input.fill('Test');
      await input.press('Enter');
      await expect(categoryFilter.locator('ix-filter-chip')).toContainText(
        'Test'
      );

      expect(await getPageScrollY(page)).toBe(scrollYBefore);
      await expect(input).toBeFocused();
    }
  );

  regressionTest(
    'should not scroll the page when setting filterState programmatically',
    async ({ page }) => {
      const categoryFilter = page.locator('ix-category-filter');
      await expect(categoryFilter).toHaveClass(/hydrated/);
      await expect(categoryFilter).not.toBeInViewport();

      await categoryFilter.evaluate((el: HTMLIxCategoryFilterElement) => {
        el.filterState = { tokens: ['Test'], categories: [] };
      });
      await expect(categoryFilter.locator('ix-filter-chip')).toContainText(
        'Test'
      );

      expect(await getPageScrollY(page)).toBe(0);
    }
  );

  regressionTest(
    'should keep input visible when tokens overflow the container',
    async ({ page }) => {
      const categoryFilter = page.locator('ix-category-filter');
      await expect(categoryFilter).toHaveClass(/hydrated/);
      await categoryFilter.evaluate((el) => {
        el.style.width = '300px';
        el.scrollIntoView({ block: 'center' });
      });
      const scrollYBefore = await getPageScrollY(page);

      const input = page.getByRole('textbox', { name: 'Filter input' });
      for (let i = 0; i < 8; i++) {
        await input.fill(`Token ${i}`);
        await input.press('Enter');
      }
      const chips = categoryFilter.locator('ix-filter-chip');
      await expect(chips).toHaveCount(8);

      await expect(chips.first()).not.toBeInViewport();
      await expect(input).toBeInViewport({ ratio: 1 });
      expect(await getPageScrollY(page)).toBe(scrollYBefore);
    }
  );
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

  regressionTest('add token', async ({ page }) => {
    const token = 'Test';
    await page.waitForSelector('ix-category-filter');
    const input = page.locator('input').first();
    await input.click();
    await input.fill(token);
    await page.keyboard.press('Enter');
    const chip = page.locator('ix-filter-chip').first();
    await expect(chip).toContainText(token);
  });

  regressionTest('clear category-preview', async ({ page }) => {
    const categoryFilter = page.locator('ix-category-filter');
    await categoryFilter.locator('input').first().click();
    await categoryFilter.locator('.category-item').first().click();

    const categoryPreviewPromise = categoryFilter.evaluate(
      (element: HTMLIxCategoryFilterElement) => {
        return new Promise((resolve) => {
          function onCategoryChanged(event: CustomEvent) {
            resolve(event.detail);
          }

          element.addEventListener('categoryChanged', onCategoryChanged);
        });
      }
    );

    await page.locator('ix-icon-button').first().click();
    const categoryPreview = await categoryPreviewPromise;

    expect(categoryPreview).toEqual(null);
  });
});

regressionTest.describe('focus behavior', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-category-filter></ix-category-filter>`);

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

  regressionTest(
    'should not focus input when setting filterState programmatically',
    async ({ page }) => {
      const categoryFilter = page.locator('ix-category-filter');
      await categoryFilter.evaluate((el: HTMLIxCategoryFilterElement) => {
        el.filterState = {
          tokens: ['Test'],
          categories: [],
        };
      });

      const input = page.locator('input').first();
      await expect(input).not.toBeFocused();
    }
  );

  regressionTest(
    'should focus input when adding token programmatically and input was already focused',
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
