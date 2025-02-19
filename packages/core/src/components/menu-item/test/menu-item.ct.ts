/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
    <ix-application>
      <ix-menu>
        <ix-menu-item>Foo bar</ix-menu-item>
        <ix-menu-item>Hello World</ix-menu-item>
      </ix-menu>
    </ix-application>
    `);
  const menuItem1 = page.locator('ix-menu-item').nth(0);
  const menuItem2 = page.locator('ix-menu-item').nth(1);
  await expect(menuItem1).toHaveClass('hydrated');
  await expect(menuItem2).toHaveClass('hydrated');

  await expect(menuItem1.locator('.tab-text').locator('slot')).toBeAttached();
});

test('show tooltip', async ({ mount, page }) => {
  await mount(`
    <ix-application>
      <ix-menu>
        <ix-menu-item>Foo bar</ix-menu-item>
        <ix-menu-item>Hello World</ix-menu-item>
      </ix-menu>
    </ix-application>
    `);
  const menuItem1 = page.locator('ix-menu-item').nth(0);
  const menuItem2 = page.locator('ix-menu-item').nth(1);
  await expect(menuItem1).toHaveClass('hydrated');
  await expect(menuItem2).toHaveClass('hydrated');

  await menuItem1.hover();
  // Default tooltip delay is 1000ms waiting another 500 ms
  await page.waitForTimeout(1500);

  await expect(page.locator('ix-tooltip').getByText('Foo Bar')).toBeVisible();
  await expect(page.locator('ix-tooltip').getByText('Foo Bar')).toHaveText(
    'Foo bar'
  );
});

test('update item text', async ({ mount, page }) => {
  await mount(`
    <ix-application>
      <ix-menu>
        <ix-menu-item>Foo bar</ix-menu-item>
        <ix-menu-item>Hello World</ix-menu-item>
      </ix-menu>
    </ix-application>
    `);
  const menuItem1 = page.locator('ix-menu-item').nth(0);
  const menuItem2 = page.locator('ix-menu-item').nth(1);
  await expect(menuItem1).toHaveClass('hydrated');
  await expect(menuItem2).toHaveClass('hydrated');

  await expect(menuItem1.locator('.tab-text').locator('slot')).toBeAttached();
  await expect(page.locator('ix-tooltip').getByText('Foo bar')).toHaveText(
    'Foo bar'
  );

  await menuItem1.evaluate(
    (item: HTMLIxMenuItemElement) => (item.innerText = 'Test123')
  );

  await menuItem1.hover();
  // Default tooltip delay is 1000ms waiting another 500 ms
  await page.waitForTimeout(1500);

  await expect(page.locator('ix-tooltip').getByText('Test123')).toBeVisible();
  await expect(page.locator('ix-tooltip').getByText('Test123')).toHaveText(
    'Test123'
  );
});
