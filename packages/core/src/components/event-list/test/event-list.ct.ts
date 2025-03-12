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
import { test } from '@utils/test';
import { expect } from '@playwright/test';

test('renders', async ({ mount, page }) => {
  await mount(`
    <ix-event-list>
      <ix-event-list-item color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
  `);

  const eventList = page.locator('ix-event-list');
  await expect(eventList).toHaveClass(/hydrated/);
});

test('check if items still clickable', async ({ mount, page }) => {
  await mount(`
    <ix-event-list>
      <ix-event-list-item color="color-primary" selected>Text 1</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
  `);

  await page.waitForTimeout(500);
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

test('should add an item dynamically and verify its height', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-event-list item-height="60">
      <ix-event-list-item color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
    <ix-button id="add-button">Add</ix-button>
  `);

  const eventListItems = page.locator('ix-event-list-item');
  const addButton = page.locator('#add-button');

  // Ensure initial count is 4
  await expect(eventListItems).toHaveCount(4);

  await addButton.evaluate((buttonElement) => {
    buttonElement.addEventListener('click', () => {
      const eventListItem = document.createElement('ix-event-list-item');
      eventListItem.textContent = 'Text 5';
      eventListItem.setAttribute('color', 'color-primary');
      const eventList = document.querySelector('ix-event-list');
      if (eventList) {
        eventList.appendChild(eventListItem);
      }
    });
  });

  // Click add button
  await addButton.click();

  // Fetch the count and print it
  const itemCount = await page.evaluate(() => {
    return document.querySelectorAll('ix-event-list-item').length;
  });

  expect(itemCount).toBe(5);
});
