/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
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

test('should change tab', async ({ mount, page }) => {
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

test('should not change tab by tab click event', async ({ mount, page }) => {
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
    tabElement.addEventListener('tabClick', (event) => event.preventDefault());
  });

  await lastTab.click();

  await expect(tabs).toHaveClass(/hydrated/);
  await expect(firstTab).toHaveClass(/selected/);
  await expect(lastTab).not.toHaveClass(/selected/);
});

test('should not change tab by native click event on prevent default', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-tabs>
      <ix-tab-item onClick={(event) => event.preventDefault()}>Item 1</ix-tab-item>
      <ix-tab-item onClick={(event) => event.preventDefault()}>Item 2</ix-tab-item>
      <ix-tab-item onClick={(event) => event.preventDefault()}>Item 3</ix-tab-item>
    </ix-tabs>
  `);
  const tabs = page.locator('ix-tabs');
  const firstTab = page.locator('ix-tab-item').nth(0);
  const lastTab = page.locator('ix-tab-item').nth(2);

  await lastTab.click();

  await expect(tabs).toHaveClass(/hydrated/);
  await expect(firstTab).toHaveClass(/selected/);
  await expect(lastTab).not.toHaveClass(/selected/);
});

test('should not change tab by tabs event', async ({ mount, page }) => {
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
});

test('should update layout on resize', async ({ mount, page }) => {
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

test('should scroll selected tab into view', async ({ mount, page }) => {
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
});
