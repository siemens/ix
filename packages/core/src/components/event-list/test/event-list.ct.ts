/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import 'jest';
import { regressionTest } from '@utils/test';
import { expect, Page } from '@playwright/test';

const anyItemHasAnimatedStyle = (page: Page) =>
  page.evaluate(() => {
    const items = document.querySelectorAll('ix-event-list-item');
    return Array.from(items).some(
      (item) => (item as HTMLElement).style.opacity !== ''
    );
  });

regressionTest(
  'does not animate list when animated is false (default)',
  async ({ mount, page }) => {
    await mount(`
      <ix-event-list>
        <ix-event-list-item item-color="color-primary">Item 1</ix-event-list-item>
      </ix-event-list>
    `);

    await page.evaluate(() => {
      const list = document.querySelector('ix-event-list');
      const item = document.createElement('ix-event-list-item');
      item.textContent = 'Item 2';
      list!.appendChild(item);
    });

    await expect(page.locator('ix-event-list-item').nth(1)).toHaveClass(
      /hydrated/
    );

    expect(await anyItemHasAnimatedStyle(page)).toBe(false);
  }
);

regressionTest(
  'animates list items when animated is true',
  async ({ mount, page }) => {
    await mount(`
      <ix-event-list animated>
        <ix-event-list-item item-color="color-primary">Item 1</ix-event-list-item>
      </ix-event-list>
    `);

    await page.evaluate(() => {
      const list = document.querySelector('ix-event-list');
      const item = document.createElement('ix-event-list-item');
      item.textContent = 'Item 2';
      list!.appendChild(item);
    });

    await expect(page.locator('ix-event-list-item').nth(1)).toHaveClass(
      /hydrated/
    );

    await page.waitForFunction(() => {
      const items = document.querySelectorAll('ix-event-list-item');
      return Array.from(items).some(
        (item) => (item as HTMLElement).style.opacity !== ''
      );
    });
    expect(await anyItemHasAnimatedStyle(page)).toBe(true);
  }
);

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-event-list>
      <ix-event-list-item item-color="color-primary">Event 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Event 2</ix-event-list-item>
      <ix-event-list-item item-color="color-primary" selected>Event 3</ix-event-list-item>
    </ix-event-list>
  `);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-event-list>
      <ix-event-list-item item-color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
  `);

  const eventList = page.locator('ix-event-list');
  await expect(eventList).toHaveClass(/hydrated/);
});

regressionTest('check if items still clickable', async ({ mount, page }) => {
  await mount(`
    <ix-event-list>
      <ix-event-list-item item-color="color-primary" selected>Text 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
  `);

  await expect(page.locator('ix-event-list')).toHaveClass(/hydrated/);
  const firstEventListItem = page.locator('ix-event-list-item').first();
  const secondEventListItem = page.locator('ix-event-list-item').nth(1);
  const thirdEventListItem = page.locator('ix-event-list-item').last();

  const clickCountHandle = await page.evaluateHandle(() => {
    return { count: 0 };
  });

  await firstEventListItem.evaluate((eventListItem, clickCountHandle) => {
    eventListItem.addEventListener('click', () => {
      clickCountHandle.count++;
    });
  }, clickCountHandle);

  await firstEventListItem.click();
  await secondEventListItem.click();
  await thirdEventListItem.click();

  //Check if still clickable
  await firstEventListItem.click();
  expect((await clickCountHandle.jsonValue()).count).toBe(2);

  clickCountHandle.dispose();
});

regressionTest(
  'should dynamically add an item and verify all list items have correct height',
  async ({ mount, page }) => {
    const itemHeight = 60;

    await mount(`
    <ix-event-list item-height="${itemHeight}">
      <ix-event-list-item item-color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
  `);

    await page.evaluate(() => {
      const eventListItem = document.createElement('ix-event-list-item');
      eventListItem.textContent = 'Newly added item';

      const eventList = document.querySelector('ix-event-list');
      if (eventList) {
        eventList.appendChild(eventListItem);
      }
    });

    const eventListItems = page.locator('ix-event-list-item');
    const lastItem = eventListItems.last();
    await expect(eventListItems).toHaveCount(5);
    await expect(lastItem).toHaveJSProperty('offsetHeight', itemHeight);

    const heights = await eventListItems.evaluateAll((items) =>
      items.map((item) => (item instanceof HTMLElement ? item.offsetHeight : 0))
    );

    heights.forEach((height) => {
      expect(height).toBe(itemHeight);
    });
  }
);
