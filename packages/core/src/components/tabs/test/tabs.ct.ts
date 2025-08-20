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

regressionTest(
  'dynamic tabs - should add new tab with proper CSS classes',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('#dynamic-tabs');
      const newTab = document.createElement('ix-tab-item');
      newTab.textContent = 'Dynamic Item 3';
      tabsElement?.appendChild(newTab);
    });

    const newTab = page.locator('ix-tab-item').nth(2);
    const firstTab = page.locator('ix-tab-item').nth(0);

    await expect(newTab).toHaveClass(/hydrated bottom/);
    await expect(newTab).not.toHaveClass(/selected/);
    await expect(firstTab).toHaveClass(/selected/);
  }
);

regressionTest(
  'dynamic tabs - should maintain selection functionality on new tabs',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('#dynamic-tabs');
      const newTab = document.createElement('ix-tab-item');
      newTab.textContent = 'Dynamic Item 3';
      tabsElement?.appendChild(newTab);
    });

    const newTab = page.locator('ix-tab-item').nth(2);
    const firstTab = page.locator('ix-tab-item').nth(0);

    await newTab.click();
    await expect(newTab).toHaveClass(/selected/);
    await expect(firstTab).not.toHaveClass(/selected/);
  }
);

regressionTest(
  'dynamic tabs - should handle multiple dynamic additions',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('#dynamic-tabs');
      for (let i = 3; i <= 5; i++) {
        const newTab = document.createElement('ix-tab-item');
        newTab.textContent = `Dynamic Item ${i}`;
        tabsElement?.appendChild(newTab);
      }
    });

    const allTabs = page.locator('ix-tab-item');
    await expect(allTabs).toHaveCount(5);

    await expect(allTabs.nth(0)).toHaveClass(/selected/);
    await expect(allTabs.nth(1)).not.toHaveClass(/selected/);
    await expect(allTabs.nth(4)).toHaveClass(/hydrated bottom/);
  }
);

regressionTest(
  'dynamic tabs - should preserve CSS classes after framework re-renders',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('#dynamic-tabs');
      const newTab = document.createElement('ix-tab-item');
      newTab.textContent = 'Dynamic Item 3';
      tabsElement?.appendChild(newTab);
    });

    const newTab = page.locator('ix-tab-item').nth(2);

    await page.evaluate(() => {
      const tab = document.querySelectorAll('ix-tab-item')[2] as HTMLElement;
      tab.className = 'some-framework-class';
    });

    await expect(newTab).toHaveClass(/hydrated/);
    await expect(newTab).toHaveClass(/bottom/);
    await expect(newTab).toHaveClass(/some-framework-class/);
  }
);

regressionTest(
  'dynamic tabs - should work with placement="top"',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs id="dynamic-tabs" placement="top">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('#dynamic-tabs');
      const newTab = document.createElement('ix-tab-item');
      newTab.textContent = 'Dynamic Item 3';
      tabsElement?.appendChild(newTab);
    });

    const newTab = page.locator('ix-tab-item').nth(2);
    await expect(newTab).toHaveClass(/hydrated top/);
  }
);

regressionTest(
  'dynamic tabs - should preserve classes when tab count reduces',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);

    await page.evaluate(() => {
      const tabs = document.querySelectorAll('ix-tab-item');
      tabs[2].remove();
    });

    const remainingTabs = page.locator('ix-tab-item');
    await expect(remainingTabs).toHaveCount(2);
    await expect(remainingTabs.nth(0)).toHaveClass(/hydrated bottom selected/);
    await expect(remainingTabs.nth(1)).toHaveClass(/hydrated bottom/);
  }
);

regressionTest(
  'dynamic tabs - should reselect first tab when selected tab is removed',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);

    const thirdTab = page.locator('ix-tab-item').nth(2);
    await thirdTab.click();
    await expect(thirdTab).toHaveClass(/selected/);

    await page.evaluate(() =>
      document.querySelectorAll('ix-tab-item')[2].remove()
    );

    const remainingTabs = page.locator('ix-tab-item');
    await expect(remainingTabs).toHaveCount(2);
    await expect(remainingTabs.nth(0)).toHaveClass(/hydrated bottom selected/);
  }
);

regressionTest(
  'dynamic tabs - should work with layout="stretched"',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs layout="stretched">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      const newTab = document.createElement('ix-tab-item');
      newTab.textContent = 'Dynamic Item 3';
      tabsElement?.appendChild(newTab);
    });

    const newTab = page.locator('ix-tab-item').nth(2);
    await expect(newTab).toHaveClass(/hydrated bottom stretched/);
  }
);
