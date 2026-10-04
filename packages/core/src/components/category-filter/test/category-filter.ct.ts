/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { regressionTest } from '@utils/test';
import { expect, Locator, Page } from '@playwright/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-category-filter></ix-category-filter>`);
  const categoryFilter = page.locator('ix-category-filter');
  await expect(categoryFilter).toHaveAttribute('hydrated');
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

  regressionTest(
    'should keep input visible when filterState tokens overflow the container',
    async ({ page }) => {
      const categoryFilter = page.locator('ix-category-filter');
      await expect(categoryFilter).toHaveClass(/hydrated/);
      await categoryFilter.evaluate((el) => {
        el.style.width = '300px';
        el.scrollIntoView({ block: 'center' });
      });
      const scrollYBefore = await getPageScrollY(page);

      await categoryFilter.evaluate((el: HTMLIxCategoryFilterElement) => {
        el.filterState = {
          tokens: Array.from({ length: 8 }, (_, i) => `Token ${i}`),
          categories: [],
        };
      });
      const chips = categoryFilter.locator('ix-filter-chip');
      await expect(chips).toHaveCount(8);

      const input = page.getByRole('textbox', { name: 'Filter input' });
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

regressionTest.describe('Home and End keys', () => {
  const skipCaretOnMac = process.platform === 'darwin';
  const skipCaretOnMacReason =
    'macOS maps Home/End to document scrolling instead of caret movement';

  async function setCategories(page: Page) {
    await page
      .locator('ix-category-filter')
      .evaluate((el: HTMLIxCategoryFilterElement) => {
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
  }

  async function typeIntoInput(page: Page, value: string) {
    const input = page.locator('ix-category-filter input').first();
    await input.click();
    await input.fill(value);
    return input;
  }

  async function moveCaretLeft(page: Page, count: number) {
    for (let i = 0; i < count; i++) {
      await page.keyboard.press('ArrowLeft');
    }
  }

  async function expectSelection(input: Locator, start: number, end: number) {
    await expect(input).toHaveJSProperty('selectionStart', start);
    await expect(input).toHaveJSProperty('selectionEnd', end);
  }

  function getDropdown(page: Page) {
    return page.locator('ix-category-filter ix-dropdown');
  }

  regressionTest.describe('dropdown closed', () => {
    const text = 'Vendor';
    let input: Locator;

    regressionTest.beforeEach(async ({ mount, page }) => {
      await mount(`<ix-category-filter></ix-category-filter>`);
      await setCategories(page);

      input = await typeIntoInput(page, text);
      await expect(getDropdown(page)).toBeVisible();

      await page.keyboard.press('Escape');
      await expect(getDropdown(page)).not.toBeVisible();
      await expect(input).toBeFocused();
    });

    regressionTest('Home and End move the caret', async ({ page }) => {
      regressionTest.skip(skipCaretOnMac, skipCaretOnMacReason);

      await page.keyboard.press('Home');
      await expectSelection(input, 0, 0);

      await page.keyboard.press('End');
      await expectSelection(input, text.length, text.length);
    });

    regressionTest(
      'Shift+Home selects from the caret to the start',
      async ({ page }) => {
        await moveCaretLeft(page, 3);
        await page.keyboard.press('Shift+Home');
        await expectSelection(input, 0, text.length - 3);
      }
    );

    regressionTest(
      'Shift+End selects from the caret to the end',
      async ({ page }) => {
        await moveCaretLeft(page, 3);
        await page.keyboard.press('Shift+End');
        await expectSelection(input, text.length - 3, text.length);
      }
    );

    regressionTest(
      'keeps focus in the input and the dropdown closed',
      async ({ page }) => {
        for (const key of ['Home', 'End', 'Shift+Home', 'Shift+End']) {
          await page.keyboard.press(key);
          await expect(input).toBeFocused();
          await expect(getDropdown(page)).not.toBeVisible();
        }
      }
    );
  });

  regressionTest.describe('dropdown open with categories', () => {
    const text = 'Vendor';
    let input: Locator;

    regressionTest.beforeEach(async ({ mount, page }) => {
      await mount(`<ix-category-filter></ix-category-filter>`);
      await setCategories(page);

      input = await typeIntoInput(page, text);
      await expect(getDropdown(page)).toBeVisible();
    });

    regressionTest('Home and End move the caret', async ({ page }) => {
      regressionTest.skip(skipCaretOnMac, skipCaretOnMacReason);

      await page.keyboard.press('Home');
      await expectSelection(input, 0, 0);

      await page.keyboard.press('End');
      await expectSelection(input, text.length, text.length);
    });

    regressionTest(
      'Shift+Home and Shift+End select from the caret',
      async ({ page }) => {
        await moveCaretLeft(page, 3);
        await page.keyboard.press('Shift+Home');
        await expectSelection(input, 0, text.length - 3);

        await page.keyboard.press('ArrowRight');
        await expectSelection(input, text.length - 3, text.length - 3);

        await page.keyboard.press('Shift+End');
        await expectSelection(input, text.length - 3, text.length);
      }
    );

    regressionTest(
      'keeps focus in the input and the dropdown open',
      async ({ page }) => {
        for (const key of ['Home', 'End', 'Shift+Home', 'Shift+End']) {
          await page.keyboard.press(key);
          await expect(input).toBeFocused();
          await expect(getDropdown(page)).toBeVisible();
        }
      }
    );
  });

  regressionTest.describe('dropdown open with suggestions only', () => {
    const text = 'Siemens';
    let input: Locator;

    regressionTest.beforeEach(async ({ mount, page }) => {
      await mount(`<ix-category-filter></ix-category-filter>`);
      await page
        .locator('ix-category-filter')
        .evaluate((el: HTMLIxCategoryFilterElement) => {
          el.suggestions = ['Apple', 'MS', 'Siemens'];
        });

      input = await typeIntoInput(page, text);
      await expect(getDropdown(page)).toBeVisible();
    });

    regressionTest('Home and End move the caret', async ({ page }) => {
      regressionTest.skip(skipCaretOnMac, skipCaretOnMacReason);

      await page.keyboard.press('Home');
      await expectSelection(input, 0, 0);

      await page.keyboard.press('End');
      await expectSelection(input, text.length, text.length);
    });

    regressionTest(
      'keeps focus in the input and the dropdown open',
      async ({ page }) => {
        for (const key of ['Home', 'End']) {
          await page.keyboard.press(key);
          await expect(input).toBeFocused();
          await expect(getDropdown(page)).toBeVisible();
        }
      }
    );
  });
});
