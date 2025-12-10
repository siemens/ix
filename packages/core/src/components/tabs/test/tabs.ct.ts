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

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);
  const tabs = page.locator('ix-tabs');
  const tab = page.locator('ix-tab-item').nth(0);

  await expect(tabs).toHaveClass(/hydrated/);
  await expect(tab).toHaveClass(/selected/);
});

regressionTest('should change tab', async ({ mount, page }) => {
  await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);
  const tabs = page.locator('ix-tabs');
  const tab = page.locator('ix-tab-item').nth(2);

  await tab.click();

  await expect(tabs).toHaveClass(/hydrated/);
  await expect(tab).toHaveClass(/selected/);
});

regressionTest(
  'should not change tab by tab click event',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);
    const tabs = page.locator('ix-tabs');
    const firstTab = page.locator('ix-tab-item').nth(0);
    const lastTab = page.locator('ix-tab-item').nth(2);

    lastTab.evaluate((tabElement) => {
      tabElement.addEventListener('tabClick', (event) =>
        event.preventDefault()
      );
    });

    await lastTab.click();

    await expect(tabs).toHaveClass(/hydrated/);
    await expect(firstTab).toHaveClass(/selected/);
    await expect(lastTab).not.toHaveClass(/selected/);
  }
);

regressionTest(
  'should not change tab by native click event on prevent default',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);
    const tabs = page.locator('ix-tabs');
    const firstTab = page.locator('ix-tab-item').nth(0);
    const secondTab = page.locator('ix-tab-item').nth(1);
    const lastTab = page.locator('ix-tab-item').nth(2);

    await lastTab.evaluate((lastTabElement) => {
      lastTabElement.addEventListener(
        'click',
        (event) => {
          event.preventDefault();
        },
        true
      );
    });

    await expect(tabs).toHaveClass(/hydrated/);
    await expect(firstTab).toHaveClass(/selected/);

    await secondTab.click();
    await lastTab.click();

    await expect(secondTab).toHaveClass(/selected/);
    await expect(lastTab).not.toHaveClass(/selected/);
  }
);

regressionTest(
  'should not change tab by tabs event',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);
    const tabs = page.locator('ix-tabs');
    const firstTab = page.locator('ix-tab-item').nth(0);
    const lastTab = page.locator('ix-tab-item').nth(2);

    tabs.evaluate((tabElement) => {
      tabElement.addEventListener('selectedChange', (event) =>
        event.preventDefault()
      );
    });

    await lastTab.click();

    await expect(tabs).toHaveClass(/hydrated/);
    await expect(firstTab).toHaveClass(/selected/);
    await expect(lastTab).not.toHaveClass(/selected/);
  }
);

regressionTest('should update layout on resize', async ({ mount, page }) => {
  await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
    `);
  const tabs = page.locator('ix-tabs');
  await page.setViewportSize({ width: 200, height: 100 });
  const arrowNext = tabs.locator('.arrow.right');
  await expect(arrowNext).toBeVisible();

  await page.setViewportSize({ width: 1000, height: 100 });
  await expect(arrowNext).not.toBeVisible();
});

regressionTest(
  'should scroll selected tab into view',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
      <ix-tab-item>Item 4</ix-tab-item>
      <ix-tab-item>Item 5</ix-tab-item>
      <ix-tab-item>Item 6</ix-tab-item>
    </ix-tabs>
  `);
    await page.setViewportSize({ width: 300, height: 100 });
    const clickedTab = page.locator('ix-tab-item').nth(3);
    const lastTab = page.locator('ix-tab-item').last();
    await clickedTab.click();
    await page.waitForTimeout(500);
    await expect(clickedTab).toBeInViewport();
    await expect(lastTab).not.toBeInViewport();
  }
);

regressionTest.only(
  'should scroll selected tab into view inside narrow container',
  async ({ mount, page }) => {
    await mount(`
    <div style="width: 350px; border: 1px solid #ccc; padding: 10px;">
      <ix-tabs style="width: 100%;">
        <ix-tab-item style="min-width: 100px;">Item 1</ix-tab-item>
        <ix-tab-item style="min-width: 100px;">Item 2</ix-tab-item>
        <ix-tab-item style="min-width: 100px;">Item 3</ix-tab-item>
        <ix-tab-item style="min-width: 100px;">Item 4</ix-tab-item>
        <ix-tab-item style="min-width: 100px;">Item 5</ix-tab-item>
        <ix-tab-item style="min-width: 100px;">Item 6</ix-tab-item>
        <ix-tab-item style="min-width: 100px;">Item 7</ix-tab-item>
        <ix-tab-item style="min-width: 100px;">Item 8</ix-tab-item>
        <ix-tab-item style="min-width: 100px;">Item 9</ix-tab-item>
        <ix-tab-item style="min-width: 100px;">Item 10</ix-tab-item>
      </ix-tabs>
    </div>
  `);
    await page.setViewportSize({ width: 400, height: 200 });

    await page.waitForTimeout(500);

    const clickedTab = page.locator('ix-tab-item').nth(7);
    const firstVisibleTab = page.locator('ix-tab-item').nth(0);

    await expect(firstVisibleTab).toBeInViewport();
    await expect(clickedTab).not.toBeInViewport();

    await clickedTab.click();
    await page.waitForTimeout(500);

    await expect(clickedTab).toBeInViewport();

    await expect(firstVisibleTab).not.toBeInViewport();
  }
);
