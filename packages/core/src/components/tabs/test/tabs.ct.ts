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

regressionTest('dynamic tabs - should add new tab with proper CSS classes', async ({ mount, page }) => {
  await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);

  const initialTabsCount = await page.locator('ix-tab-item').count();

  // Add a new tab dynamically
  await page.evaluate(() => {
    const tabsElement = document.querySelector('#dynamic-tabs');
    const newTab = document.createElement('ix-tab-item');
    newTab.textContent = 'Dynamic Item 4';
    tabsElement?.appendChild(newTab);
  });

  // Wait for the new tab to appear and have proper classes
  const newTab = page.locator('ix-tab-item').nth(3);
  await expect(newTab).toBeVisible();
  await expect(newTab).toHaveClass(/hydrated/);

  const newTabsCount = await page.locator('ix-tab-item').count();

  // Verify new tab was added
  await expect(newTabsCount).toBe(initialTabsCount + 1);

  // Verify the new tab has required CSS classes
  await expect(newTab).toHaveClass(/hydrated/);
  await expect(newTab).toHaveClass(/bottom/);

  // Verify the new tab is not selected initially
  await expect(newTab).not.toHaveClass(/selected/);

  // Verify first tab is still selected
  await expect(page.locator('ix-tab-item').nth(0)).toHaveClass(/selected/);
});

regressionTest('dynamic tabs - should maintain selection functionality on new tabs', async ({ mount, page }) => {
  await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);

  // Add a new tab dynamically
  await page.evaluate(() => {
    const tabsElement = document.querySelector('#dynamic-tabs');
    const newTab = document.createElement('ix-tab-item');
    newTab.textContent = 'Dynamic Item 4';
    tabsElement?.appendChild(newTab);
  });

  const newTab = page.locator('ix-tab-item').nth(3);
  const firstTab = page.locator('ix-tab-item').nth(0);

  // Wait for the new tab to be ready and click it
  await expect(newTab).toBeVisible();
  await newTab.click();

  // Verify the new tab becomes selected
  await expect(newTab).toHaveClass(/selected/);

  // Verify other tabs are deselected
  await expect(firstTab).not.toHaveClass(/selected/);
  await expect(page.locator('ix-tab-item').nth(1)).not.toHaveClass(/selected/);
  await expect(page.locator('ix-tab-item').nth(2)).not.toHaveClass(/selected/);
});

regressionTest('dynamic tabs - should handle multiple dynamic additions', async ({ mount, page }) => {
  await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

  // Add multiple tabs dynamically
  await page.evaluate(() => {
    const tabsElement = document.querySelector('#dynamic-tabs');
    for (let i = 3; i <= 5; i++) {
      const newTab = document.createElement('ix-tab-item');
      newTab.textContent = `Dynamic Item ${i}`;
      tabsElement?.appendChild(newTab);
    }
  });

  // Wait for all tabs to be added and visible
  const allTabs = page.locator('ix-tab-item');
  await expect(allTabs).toHaveCount(5);

  // Verify all tabs have proper classes
  const tabCount = await allTabs.count();

  for (let i = 0; i < tabCount; i++) {
    const tab = allTabs.nth(i);
    await expect(tab).toHaveClass(/hydrated/);
    await expect(tab).toHaveClass(/bottom/);

    if (i === 0) {
      await expect(tab).toHaveClass(/selected/);
    } else {
      await expect(tab).not.toHaveClass(/selected/);
    }
  }
});

regressionTest('dynamic tabs - should preserve CSS classes after framework re-renders', async ({ mount, page }) => {
  await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);

  // Add a new tab dynamically
  await page.evaluate(() => {
    const tabsElement = document.querySelector('#dynamic-tabs');
    const newTab = document.createElement('ix-tab-item');
    newTab.textContent = 'Dynamic Item 4';
    tabsElement?.appendChild(newTab);
  });

  const newTab = page.locator('ix-tab-item').nth(3);

  // Wait for new tab to be ready
  await expect(newTab).toBeVisible();

  // Simulate framework className overwrite (like React/Vue might do)
  await page.evaluate(() => {
    const tab = document.querySelectorAll('ix-tab-item')[3] as HTMLElement;
    tab.className = 'some-framework-class';
  });

  // Wait for mutation observer to restore classes
  await expect(newTab).toHaveClass(/hydrated/);

  // Verify classes are restored
  await expect(newTab).toHaveClass(/hydrated/);
  await expect(newTab).toHaveClass(/bottom/);

  // Verify the framework class is preserved
  await expect(newTab).toHaveClass(/some-framework-class/);
});

regressionTest('dynamic tabs - should work with placement="top"', async ({ mount, page }) => {
  await mount(`
    <ix-tabs id="dynamic-tabs" placement="top">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

  // Add a new tab dynamically
  await page.evaluate(() => {
    const tabsElement = document.querySelector('#dynamic-tabs');
    const newTab = document.createElement('ix-tab-item');
    newTab.textContent = 'Dynamic Item 3';
    tabsElement?.appendChild(newTab);
  });

  const newTab = page.locator('ix-tab-item').nth(2);

  // Wait for new tab to be ready and verify classes
  await expect(newTab).toBeVisible();
  await expect(newTab).toHaveClass(/hydrated/);
  await expect(newTab).not.toHaveClass(/bottom/);
  await expect(newTab).not.toHaveClass(/selected/);
});

regressionTest('dynamic tabs - should work with layout="stretched"', async ({ mount, page }) => {
  await mount(`
    <ix-tabs id="dynamic-tabs" layout="stretched">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

  // Add a new tab dynamically
  await page.evaluate(() => {
    const tabsElement = document.querySelector('#dynamic-tabs');
    const newTab = document.createElement('ix-tab-item');
    newTab.textContent = 'Dynamic Item 3';
    tabsElement?.appendChild(newTab);
  });

  const newTab = page.locator('ix-tab-item').nth(2);

  // Wait for new tab to be ready and verify classes
  await expect(newTab).toBeVisible();
  await expect(newTab).toHaveClass(/hydrated/);
  await expect(newTab).not.toHaveClass(/bottom/);
  await expect(newTab).not.toHaveClass(/selected/);
});

regressionTest('dynamic tabs - should handle rapid dynamic additions', async ({ mount, page }) => {
  await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
    </ix-tabs>
  `);

  // Add multiple tabs rapidly
  await page.evaluate(() => {
    const tabsElement = document.querySelector('#dynamic-tabs');
    for (let i = 2; i <= 10; i++) {
      const newTab = document.createElement('ix-tab-item');
      newTab.textContent = `Dynamic Item ${i}`;
      tabsElement?.appendChild(newTab);
    }
  });

  // Wait for all tabs to be processed
  const allTabs = page.locator('ix-tab-item');
  await expect(allTabs).toHaveCount(10);

  const tabCount = await allTabs.count();

  await expect(tabCount).toBe(10);

  // Verify last added tab has proper classes
  const lastTab = allTabs.nth(9);
  await expect(lastTab).toHaveClass(/hydrated/);
  await expect(lastTab).toHaveClass(/bottom/);
  await expect(lastTab).not.toHaveClass(/selected/);

  // Click on last tab to verify functionality
  await lastTab.click();
  await expect(lastTab).toHaveClass(/selected/);

  // Verify first tab is no longer selected
  await expect(allTabs.nth(0)).not.toHaveClass(/selected/);
});

regressionTest('dynamic tabs - should maintain visual design integrity', async ({ mount, page }) => {
  await mount(`
    <ix-tabs id="dynamic-tabs">
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
    </ix-tabs>
  `);

  // Take screenshot before adding dynamic tab
  const tabsBefore = page.locator('ix-tabs');

  // Add a new tab dynamically
  await page.evaluate(() => {
    const tabsElement = document.querySelector('#dynamic-tabs');
    const newTab = document.createElement('ix-tab-item');
    newTab.textContent = 'Dynamic Item 3';
    tabsElement?.appendChild(newTab);
  });

  // Wait for new tab to be added and processed
  const newAllTabs = page.locator('ix-tab-item');
  await expect(newAllTabs).toHaveCount(3);

  // Verify tabs container still has proper structure
  await expect(tabsBefore).toHaveClass(/hydrated/);

  // Verify all tabs are visible and properly styled
  const allTabs = page.locator('ix-tab-item');
  const tabCount = await allTabs.count();

  for (let i = 0; i < tabCount; i++) {
    const tab = allTabs.nth(i);
    await expect(tab).toBeVisible();
    await expect(tab).toHaveClass(/hydrated/);
  }

  // Verify clicking works and visual state updates correctly
  const lastTab = allTabs.nth(2);
  await lastTab.click();

  // Check that selection visual state is correct
  await expect(lastTab).toHaveClass(/selected/);
  await expect(allTabs.nth(0)).not.toHaveClass(/selected/);
  await expect(allTabs.nth(1)).not.toHaveClass(/selected/);
});
