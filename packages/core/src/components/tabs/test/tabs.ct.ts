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

regressionTest.describe('accessibility', () => {
  regressionTest('default', async ({ mount, makeAxeBuilder }) => {
    await mount(`
    <ix-tabs active-tab-key="tab-1">
      <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
      <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      <ix-tab-item tab-key="tab-3">Item 3</ix-tab-item>
    </ix-tabs>
  `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  regressionTest('closable tab', async ({ mount, makeAxeBuilder }) => {
    await mount(`
    <ix-tabs active-tab-key="tab-1">
      <ix-tab-item tab-key="tab-1" label="Item 1<">/ix-tab-item>
      <ix-tab-item tab-key="tab-2" closable label="Item 2"></ix-tab-item>
      <ix-tab-item tab-key="tab-3" label="Item 3"></ix-tab-item>
    </ix-tabs>
  `);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-tabs active-tab-key="tab-1">
      <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
      <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      <ix-tab-item tab-key="tab-3">Item 3</ix-tab-item>
    </ix-tabs>
  `);
  const tabs = page.locator('ix-tabs');
  const tab = page.locator('ix-tab-item').nth(0);

  await expect(tabs).toHaveClass(/\bhydrated\b/);
  await expect(tab).toHaveClass(/\bselected\b/);
});

regressionTest('should change tab', async ({ mount, page }) => {
  await mount(`
    <ix-tabs active-tab-key="tab-1">
      <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
      <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      <ix-tab-item tab-key="tab-3">Item 3</ix-tab-item>
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
    <ix-tabs active-tab-key="tab-1">
      <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
      <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      <ix-tab-item tab-key="tab-3">Item 3</ix-tab-item>
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
    <ix-tabs active-tab-key="tab-1">
      <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
      <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      <ix-tab-item tab-key="tab-3">Item 3</ix-tab-item>
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
    <ix-tabs active-tab-key="tab-1">
      <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
      <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      <ix-tab-item tab-key="tab-3">Item 3</ix-tab-item>
    </ix-tabs>
  `);
    const tabs = page.locator('ix-tabs');
    const firstTab = page.locator('ix-tab-item').nth(0);
    const lastTab = page.locator('ix-tab-item').nth(2);

    tabs.evaluate((tabElement) => {
      tabElement.addEventListener('tabChange', (event) =>
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
    <ix-tabs active-tab-key="tab-1">
      <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
      <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      <ix-tab-item tab-key="tab-3">Item 3</ix-tab-item>
    </ix-tabs>
    `);
  const tabs = page.locator('ix-tabs');

  await page.setViewportSize({ width: 200, height: 100 });

  await expect(tabs.locator('.overflow-shadow-container')).toHaveClass(
    /overflow-shadow(?!-)/
  );

  await page.setViewportSize({ width: 1000, height: 100 });

  await expect(tabs.locator('.overflow-shadow-container')).not.toHaveClass(
    /overflow-shadow(?!-)/
  );
});

regressionTest(
  'should scroll selected tab into view',
  async ({ mount, page }) => {
    await mount(`
    <ix-tabs active-tab-key="tab-1">
      <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
      <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      <ix-tab-item tab-key="tab-3">Item 3</ix-tab-item>
      <ix-tab-item tab-key="tab-4">Item 4</ix-tab-item>
      <ix-tab-item tab-key="tab-5">Item 5</ix-tab-item>
      <ix-tab-item tab-key="tab-6">Item 6</ix-tab-item>
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
          <ix-tab-item tab-key="tab-1" style="min-width: 100px;">Item 1</ix-tab-item>
          <ix-tab-item tab-key="tab-2" style="min-width: 100px;">Item 2</ix-tab-item>
          <ix-tab-item tab-key="tab-3" style="min-width: 100px;">Item 3</ix-tab-item>
          <ix-tab-item tab-key="tab-4" style="min-width: 100px;">Item 4</ix-tab-item>
          <ix-tab-item tab-key="tab-5" style="min-width: 100px;">Item 5</ix-tab-item>
          <ix-tab-item tab-key="tab-6" style="min-width: 100px;">Item 6</ix-tab-item>
          <ix-tab-item tab-key="tab-7" style="min-width: 100px;">Item 7</ix-tab-item>
          <ix-tab-item tab-key="tab-8" style="min-width: 100px;">Item 8</ix-tab-item>
          <ix-tab-item tab-key="tab-9" style="min-width: 100px;">Item 9</ix-tab-item>
          <ix-tab-item tab-key="tab-10" style="min-width: 100px;">Item 10</ix-tab-item>
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
        const container = el.shadowRoot?.querySelector('.tabs');
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
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      </ix-tabs>
    `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      tabsElement!.innerHTML = `
        <ix-tab-item tab-key="tab-1" class="new">Item 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2" class="new">Item 2</ix-tab-item>
      `;
    });

    const tabs = page.locator('ix-tab-item');

    for (const className of ['new', 'hydrated', 'bottom']) {
      await expect(tabs.nth(0)).toHaveClass(
        new RegExp(String.raw`\b${className}\b`)
      );
      await expect(tabs.nth(1)).toHaveClass(
        new RegExp(String.raw`\b${className}\b`)
      );
    }

    await tabs.nth(0).click();
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
        <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      </ix-tabs>
    `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      tabsElement!.innerHTML = `
        <ix-tab-item tab-key="tab-1" class="new">Item 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2" class="new">Item 2</ix-tab-item>
      `;
    });

    const tabs = page.locator('ix-tab-item');

    for (const className of ['new', 'hydrated', 'top']) {
      await expect(tabs.nth(0)).toHaveClass(
        new RegExp(String.raw`\b${className}\b`)
      );
      await expect(tabs.nth(1)).toHaveClass(
        new RegExp(String.raw`\b${className}\b`)
      );
    }
  }
);

regressionTest(
  'dynamic tabs - should preserve stretched layout classes when adding custom classes',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs layout="stretched">
        <ix-tab-item tab-key="tab-1">Item 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2">Item 2</ix-tab-item>
      </ix-tabs>
    `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      tabsElement!.innerHTML = `
        <ix-tab-item tab-key="tab-1" class="new">Item 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2" class="new">Item 2</ix-tab-item>
      `;
    });

    const tabs = page.locator('ix-tab-item');

    await expect(tabs.nth(0)).toHaveClass(/hydrated/);

    for (const className of ['new', 'hydrated', 'bottom', 'stretched']) {
      await expect(tabs.nth(0)).toHaveClass(
        new RegExp(String.raw`\b${className}\b`)
      );
      await expect(tabs.nth(1)).toHaveClass(
        new RegExp(String.raw`\b${className}\b`)
      );
    }
  }
);

regressionTest(
  'dynamic tabs - should handle disabled state and class changes',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1">Tab 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2">Tab 2</ix-tab-item>
      </ix-tabs>
    `);

    await page.evaluate(() => {
      const tabsElement = document.querySelector('ix-tabs');
      tabsElement!.innerHTML = `
        <ix-tab-item tab-key="tab-1" disabled class="new">Tab 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2" class="new">Tab 2</ix-tab-item>
      `;
    });

    const tabs = page.locator('ix-tab-item');

    for (const className of ['new', 'hydrated', 'bottom']) {
      await expect(tabs.nth(0)).toHaveClass(
        new RegExp(String.raw`\b${className}\b`)
      );
      await expect(tabs.nth(1)).toHaveClass(
        new RegExp(String.raw`\b${className}\b`)
      );
    }

    await expect(tabs.nth(0)).toHaveAttribute('disabled', '');
    await expect(tabs.nth(0)).toHaveClass(/\bdisabled\b/);

    await expect(tabs.nth(1)).not.toHaveAttribute('disabled');
    await expect(tabs.nth(1)).not.toHaveClass(/\bdisabled\b/);

    await expect(tabs.nth(0)).not.toHaveClass(/\bselected\b/);

    await tabs.nth(1).click();
    await expect(tabs.nth(0)).not.toHaveClass(/\bselected\b/);
    await expect(tabs.nth(1)).toHaveClass(/\bselected\b/);
  }
);

regressionTest(
  'should set active tab via activeTabKey prop',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs active-tab-key="tab-2">
        <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
        <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
      </ix-tabs>
    `);

    const secondTab = page.locator('ix-tab-item').nth(1);
    await expect(secondTab).toHaveClass(/\bselected\b/);
    await expect(page.locator('ix-tab-item').nth(0)).not.toHaveClass(
      /\bselected\b/
    );
  }
);

regressionTest(
  'should emit tabChange event with tabKey on tab click',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
        <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
      </ix-tabs>
    `);

    const tabs = page.locator('ix-tabs');

    const eventPromise = tabs.evaluate((e) => {
      return new Promise<string>((resolve) => {
        e.addEventListener('tabChange', (event: any) => resolve(event.detail));
      });
    });

    await page.locator('ix-tab-item').nth(2).click();

    const detail = await eventPromise;
    expect(detail).toBe('tab-3');
  }
);

regressionTest(
  'should update active tab when activeTabKey changes programmatically',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
        <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
      </ix-tabs>
    `);

    await expect(page.locator('ix-tab-item').nth(0)).toHaveClass(
      /\bselected\b/
    );

    await page.evaluate(() => {
      document.querySelector('ix-tabs')!.activeTabKey = 'tab-3';
    });

    await expect(page.locator('ix-tab-item').nth(2)).toHaveClass(
      /\bselected\b/
    );
    await expect(page.locator('ix-tab-item').nth(0)).not.toHaveClass(
      /\bselected\b/
    );
  }
);

regressionTest(
  'should emit tabChange once and roll back when tab change is prevented',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
        <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
      </ix-tabs>
    `);

    const tabs = page.locator('ix-tabs');
    const thirdTab = page.locator('ix-tab-item').nth(2);

    const emitCount = tabs.evaluate((element) => {
      return new Promise<number>((resolve) => {
        let count = 0;

        element.addEventListener(
          'tabChange',
          (event) => {
            count += 1;
            event.preventDefault();
            resolve(count);
          },
          { once: true }
        );
      });
    });

    await thirdTab.click();

    expect(await emitCount).toBe(1);
    await expect(page.locator('ix-tab-item').nth(0)).toHaveClass(
      /\bselected\b/
    );
    await expect(thirdTab).not.toHaveClass(/\bselected\b/);
  }
);

regressionTest(
  'should render label prop in tab item',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs>
        <ix-tab-item tab-key="tab-1" label="First Label"></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Second Label"></ix-tab-item>
      </ix-tabs>
    `);

    await expect(page.locator('ix-tab-item').nth(0)).toContainText(
      'First Label'
    );
    await expect(page.locator('ix-tab-item').nth(1)).toContainText(
      'Second Label'
    );
  }
);

regressionTest(
  'should emit tabClose event when closable tab close button is clicked',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1" label="Tab 1" closable></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
      </ix-tabs>
    `);

    const tabs = page.locator('ix-tabs');

    const eventPromise = tabs.evaluate((e) => {
      return new Promise<string>((resolve) => {
        e.addEventListener('tabClose', (event: any) =>
          resolve(event.detail.tabKey)
        );
      });
    });

    const closeButton = page
      .locator('ix-tab-item')
      .nth(0)
      .locator('ix-icon-button');
    await closeButton.click();

    const closedTabKey = await eventPromise;
    expect(closedTabKey).toBe('tab-1');
  }
);

regressionTest('tab re-selection algorithm', async ({ mount, page }) => {
  await mount(`
      <ix-tabs active-tab-key="tab-3">
        <ix-tab-item tab-key="tab-1">Tab 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2">Tab 2</ix-tab-item>
        <ix-tab-item tab-key="tab-3">Tab 3</ix-tab-item>
        <ix-tab-item tab-key="tab-4">Tab 4</ix-tab-item>
        <ix-tab-item tab-key="tab-5">Tab 5</ix-tab-item>
      </ix-tabs>
    `);

  await expect(page.locator('ix-tab-item').nth(2)).toHaveClass(/\bselected\b/);

  // Remove Tab 3, select Tab 4 as replacement
  await page.evaluate(() => {
    const tabs = document.querySelector('ix-tabs')!;
    tabs.innerHTML = `
        <ix-tab-item tab-key="tab-1">Tab 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2">Tab 2</ix-tab-item>
        <ix-tab-item tab-key="tab-4">Tab 4</ix-tab-item>
        <ix-tab-item tab-key="tab-5">Tab 5</ix-tab-item>
      `;
    tabs.activeTabKey = 'tab-4';
  });

  await expect(page.locator('ix-tab-item').nth(2)).toHaveClass(/\bselected\b/);

  // Select Tab 5, then remove it, select Tab 4
  await page.locator('ix-tab-item').nth(3).click();
  await expect(page.locator('ix-tab-item').nth(3)).toHaveClass(/\bselected\b/);

  await page.evaluate(() => {
    const tabs = document.querySelector('ix-tabs')!;
    tabs.innerHTML = `
        <ix-tab-item tab-key="tab-1">Tab 1</ix-tab-item>
        <ix-tab-item tab-key="tab-2">Tab 2</ix-tab-item>
        <ix-tab-item tab-key="tab-4">Tab 4</ix-tab-item>
      `;
    tabs.activeTabKey = 'tab-4';
  });

  await expect(page.locator('ix-tab-item').nth(2)).toHaveClass(/\bselected\b/);

  // Reduce to single tab
  await page.evaluate(() => {
    const tabs = document.querySelector('ix-tabs')!;
    tabs.innerHTML = `<ix-tab-item tab-key="tab-1">Tab 1</ix-tab-item>`;
    tabs.activeTabKey = 'tab-1';
  });

  await expect(page.locator('ix-tab-item').nth(0)).toHaveClass(/\bselected\b/);
});

regressionTest(
  'disabled tab should not be selectable by click',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Tab 2" disabled></ix-tab-item>
        <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
      </ix-tabs>
    `);

    const tab1 = page.locator('ix-tab-item').nth(0);
    const tab2 = page.locator('ix-tab-item').nth(1);
    const tab3 = page.locator('ix-tab-item').nth(2);

    await tab1.click();
    await expect(tab1).toHaveClass(/\bselected\b/);
    await expect(tab2).toHaveClass(/\bdisabled\b/);

    await tab2.dispatchEvent('click');
    await expect(tab1).toHaveClass(/\bselected\b/);
    await expect(tab2).not.toHaveClass(/\bselected\b/);

    await tab3.click();
    await expect(tab3).toHaveClass(/\bselected\b/);
    await expect(tab1).not.toHaveClass(/\bselected\b/);
  }
);

regressionTest(
  'disabled tab should be skipped during keyboard navigation',
  async ({ mount, page }) => {
    await mount(`
      <ix-tabs active-tab-key="tab-1">
        <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
        <ix-tab-item tab-key="tab-2" label="Tab 2" disabled></ix-tab-item>
        <ix-tab-item tab-key="tab-3" label="Tab 3"></ix-tab-item>
      </ix-tabs>
    `);

    const tab1 = page.locator('ix-tab-item').nth(0);
    const tab3 = page.locator('ix-tab-item').nth(2);

    await tab1.click();
    await expect(tab1).toHaveClass(/\bselected\b/);

    await page.keyboard.press('ArrowRight');

    await expect(tab3).toHaveClass(/\bselected\b/);
    await expect(tab3).toBeFocused();

    await page.keyboard.press('ArrowLeft');

    await expect(tab1).toHaveClass(/\bselected\b/);
    await expect(tab1).toBeFocused();
  }
);

regressionTest(
  'disabled tab in overflow dropdown should not be selectable',
  async ({ mount, page }) => {
    await mount(`
      <div style="width: 200px;">
        <ix-tabs active-tab-key="tab-1">
          <ix-tab-item tab-key="tab-1" label="Tab 1"></ix-tab-item>
          <ix-tab-item tab-key="tab-2" label="Tab 2"></ix-tab-item>
          <ix-tab-item tab-key="tab-3" label="Tab 3" disabled></ix-tab-item>
          <ix-tab-item tab-key="tab-4" label="Tab 4"></ix-tab-item>
          <ix-tab-item tab-key="tab-5" label="Tab 5"></ix-tab-item>
        </ix-tabs>
      </div>
    `);

    const tabs = page.locator('ix-tabs');
    const overflowButton = tabs.locator('ix-dropdown-button.tabs-context-menu');

    await expect(overflowButton).toBeVisible();

    await overflowButton.click();

    const disabledItem = page.locator('ix-dropdown-item', {
      hasText: 'Tab 3',
    });
    await expect(disabledItem).toBeVisible();
    await expect(disabledItem).toHaveAttribute('disabled', '');

    await disabledItem.click({ force: true });
    await expect(page.locator('ix-tab-item').nth(0)).toHaveClass(
      /\bselected\b/
    );
  }
);
