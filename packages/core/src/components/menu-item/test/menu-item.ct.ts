/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
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

regressionTest('show tooltip', async ({ mount, page }) => {
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

  await expect(menuItem1.locator('ix-tooltip')).toHaveClass(/visible/);
  await expect(menuItem1.locator('ix-tooltip')).toHaveText('Foo bar');
});

regressionTest('update item text', async ({ mount, page }) => {
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
  await expect(menuItem1.locator('ix-tooltip')).toHaveText('Foo bar');

  await menuItem1.evaluate(
    (item: HTMLIxMenuItemElement) => (item.innerText = 'Test123')
  );

  await menuItem1.hover();
  // Default tooltip delay is 1000ms waiting another 500 ms
  await page.waitForTimeout(1500);

  await expect(menuItem1.locator('ix-tooltip')).toHaveClass(/visible/);
  await expect(menuItem1.locator('ix-tooltip')).toHaveText('Test123');
});
