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

  await expect(tabs).toHaveClass(/\bhydrated\b/);
  await expect(tab).toHaveClass(/\bselected\b/);
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

  await expect(tabs).toHaveClass(/\bhydrated\b/);
  await expect(tab).toHaveClass(/\bselected\b/);
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

    await expect(tabs).toHaveClass(/\bhydrated\b/);
    await expect(firstTab).toHaveClass(/\bselected\b/);
    await expect(lastTab).not.toHaveClass(/\bselected\b/);
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

    await expect(tabs).toHaveClass(/\bhydrated\b/);
    await expect(firstTab).toHaveClass(/\bselected\b/);

    await secondTab.click();
    await lastTab.click();

    await expect(secondTab).toHaveClass(/\bselected\b/);
    await expect(lastTab).not.toHaveClass(/\bselected\b/);
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

    await expect(tabs).toHaveClass(/\bhydrated\b/);
    await expect(firstTab).toHaveClass(/\bselected\b/);
    await expect(lastTab).not.toHaveClass(/\bselected\b/);
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

    await expect(clickedTab).toBeInViewport();
    await expect(lastTab).not.toBeInViewport();
  }
);

regressionTest(
  'should scroll selected tab into view and fully visible inside narrow container',
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

    const tabs = page.locator('ix-tabs');
    const clickedTab = page.locator('ix-tab-item').nth(7);
    const firstTab = page.locator('ix-tab-item').nth(0);

    await expect(firstTab).toBeInViewport();
    await expect(clickedTab).not.toBeInViewport();

    await clickedTab.click();

    await expect(clickedTab).toBeInViewport();
    await expect(firstTab).not.toBeInViewport();

    const [tabBox, firstTabBox, containerBox] = await Promise.all([
      clickedTab.boundingBox(),
      firstTab.boundingBox(),
      tabs.evaluate((el) => {
        const container = el.shadowRoot?.querySelector('.tab-items');
        return container?.getBoundingClientRect();
      }),
    ]);

    expect(tabBox).not.toBeNull();
    expect(containerBox).not.toBeNull();
    expect(firstTabBox).not.toBeNull();

    const ARROW_WIDTH = 32;

    expect(tabBox!.x).toBeGreaterThanOrEqual(containerBox!.x + ARROW_WIDTH);

    expect(tabBox!.x + tabBox!.width).toBeLessThanOrEqual(
      containerBox!.x + containerBox!.width - ARROW_WIDTH
    );

    expect(firstTabBox!.x + firstTabBox!.width).toBeLessThan(
      containerBox!.x + ARROW_WIDTH
    );
  }
);

regressionTest(
  'dynamic tabs - should preserve default classes when adding custom classes during re-render',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs>
        <ix-tab-item>Item 1</ix-tab-item>
        <ix-tab-item>Item 2</ix-tab-item>
      </ix-tabs>
    `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      tabsElement!.innerHTML = `
        <ix-tab-item class="new">Item 1</ix-tab-item>
        <ix-tab-item class="new">Item 2</ix-tab-item>
      `;
    });

    const tabs = page.locator('ix-tab-item');

    for (const className of ['new', 'hydrated', 'bottom']) {
      await expect(tabs.nth(0)).toHaveClass(new RegExp(`\\b${className}\\b`));
      await expect(tabs.nth(1)).toHaveClass(new RegExp(`\\b${className}\\b`));
    }
    await expect(tabs.nth(0)).toHaveClass(/\bselected\b/);

    await tabs.nth(1).click();
    await expect(tabs.nth(0)).not.toHaveClass(/\bselected\b/);
    await expect(tabs.nth(1)).toHaveClass(/\bselected\b/);
  }
);

regressionTest(
  'dynamic tabs - should preserve top placement classes when adding custom classes',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs placement="top">
        <ix-tab-item>Item 1</ix-tab-item>
        <ix-tab-item>Item 2</ix-tab-item>
      </ix-tabs>
    `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      tabsElement!.innerHTML = `
        <ix-tab-item class="new">Item 1</ix-tab-item>
        <ix-tab-item class="new">Item 2</ix-tab-item>
      `;
    });

    const tabs = page.locator('ix-tab-item');

    for (const className of ['new', 'hydrated', 'top']) {
      await expect(tabs.nth(0)).toHaveClass(new RegExp(`\\b${className}\\b`));
      await expect(tabs.nth(1)).toHaveClass(new RegExp(`\\b${className}\\b`));
    }
  }
);

regressionTest(
  'dynamic tabs - should preserve stretched layout classes when adding custom classes',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs layout="stretched">
        <ix-tab-item>Item 1</ix-tab-item>
        <ix-tab-item>Item 2</ix-tab-item>
      </ix-tabs>
    `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      tabsElement!.innerHTML = `
        <ix-tab-item class="new">Item 1</ix-tab-item>
        <ix-tab-item class="new">Item 2</ix-tab-item>
      `;
    });

    const tabs = page.locator('ix-tab-item');

    for (const className of ['new', 'hydrated', 'bottom', 'stretched']) {
      await expect(tabs.nth(0)).toHaveClass(new RegExp(`\\b${className}\\b`));
      await expect(tabs.nth(1)).toHaveClass(new RegExp(`\\b${className}\\b`));
    }
  }
);

regressionTest(
  'dynamic tabs - should preserve classes and reselect when reducing tab count with new class',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs placement="bottom" layout="stretched">
        <ix-tab-item>Tab 1</ix-tab-item>
        <ix-tab-item>Tab 2</ix-tab-item>
        <ix-tab-item>Tab 3</ix-tab-item>
      </ix-tabs>
    `);

    const thirdTab = page.locator('ix-tab-item').nth(2);
    await thirdTab.click();
    await expect(thirdTab).toHaveClass(/\bselected\b/);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      tabsElement!.innerHTML = `
        <ix-tab-item class="new">Tab 1</ix-tab-item>
        <ix-tab-item class="new">Tab 2</ix-tab-item>
      `;
    });

    const tabs = page.locator('ix-tab-item');

    for (const className of [
      'new',
      'hydrated',
      'bottom',
      'stretched',
      'selected',
    ]) {
      await expect(tabs.nth(1)).toHaveClass(new RegExp(`\\b${className}\\b`));
    }
  }
);

regressionTest(
  'dynamic tabs - should handle disabled state and class changes',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs>
        <ix-tab-item>Tab 1</ix-tab-item>
        <ix-tab-item>Tab 2</ix-tab-item>
      </ix-tabs>
    `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      tabsElement!.innerHTML = `
        <ix-tab-item disabled class="new">Tab 1</ix-tab-item>
        <ix-tab-item class="new">Tab 2</ix-tab-item>
      `;
    });

    const tabs = page.locator('ix-tab-item');

    for (const className of ['new', 'hydrated', 'bottom']) {
      await expect(tabs.nth(0)).toHaveClass(new RegExp(`\\b${className}\\b`));
      await expect(tabs.nth(1)).toHaveClass(new RegExp(`\\b${className}\\b`));
    }

    await expect(tabs.nth(0)).toHaveAttribute('disabled', '');
    await expect(tabs.nth(0)).toHaveClass(/\bdisabled\b/);
    await expect(tabs.nth(0)).toHaveClass(/\bselected\b/);

    await expect(tabs.nth(1)).not.toHaveAttribute('disabled');
    await expect(tabs.nth(1)).not.toHaveClass(/\bdisabled\b/);
    await expect(tabs.nth(1)).not.toHaveClass(/\bselected\b/);

    await tabs.nth(1).click();
    await expect(tabs.nth(0)).not.toHaveClass(/\bselected\b/);
    await expect(tabs.nth(1)).toHaveClass(/\bselected\b/);
  }
);

regressionTest('tab re-selection algorithm', async ({ mount, page }) => {
  await mount(`
      <ix-tabs>
        <ix-tab-item>Tab 1</ix-tab-item>
        <ix-tab-item>Tab 2</ix-tab-item>
        <ix-tab-item>Tab 3</ix-tab-item>
        <ix-tab-item>Tab 4</ix-tab-item>
        <ix-tab-item>Tab 5</ix-tab-item>
      </ix-tabs>
    `);

  await page.locator('ix-tab-item').nth(2).click();

  await page.evaluate(() => {
    document.querySelector('ix-tabs')!.innerHTML = `
        <ix-tab-item>Tab 1</ix-tab-item>
        <ix-tab-item>Tab 2</ix-tab-item>
        <ix-tab-item>Tab 4</ix-tab-item>
        <ix-tab-item>Tab 5</ix-tab-item>
      `;
  });

  await expect(page.locator('ix-tab-item').nth(2)).toHaveClass(/\bselected\b/);

  await page.locator('ix-tab-item').nth(3).click();

  await page.evaluate(() => {
    document.querySelector('ix-tabs')!.innerHTML = `
        <ix-tab-item>Tab 1</ix-tab-item>
        <ix-tab-item>Tab 2</ix-tab-item>
        <ix-tab-item>Tab 4</ix-tab-item>
      `;
  });

  await expect(page.locator('ix-tab-item').nth(2)).toHaveClass(/\bselected\b/);

  await page.locator('ix-tab-item').nth(1).click();

  await page.evaluate(() => {
    document.querySelector('ix-tabs')!.innerHTML =
      `<ix-tab-item>Tab 1</ix-tab-item>`;
  });

  await expect(page.locator('ix-tab-item').nth(0)).toHaveClass(/\bselected\b/);
});
