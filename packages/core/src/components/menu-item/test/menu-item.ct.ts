/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator, Page } from '@playwright/test';
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

async function expectMenuItemToHaveTooltip(
  page: Page,
  menuItem: Locator,
  text: string
) {
  await menuItem.hover();
  // Default tooltip delay is 1000ms waiting another 500 ms
  await page.waitForTimeout(1500);

  await expect(menuItem.locator('ix-tooltip')).toHaveClass(/visible/);
  await expect(menuItem.locator('ix-tooltip')).toHaveText(text);
}

regressionTest('show tooltip', async ({ mount, page }) => {
  await mount(`
    <ix-application>
      <ix-menu>
        <ix-menu-item>Foo bar</ix-menu-item>
        <ix-menu-item label="Hello World"></ix-menu-item>
        <ix-menu-item tooltip-text="my tooltip">Foo bar</ix-menu-item>
        <ix-menu-item label="Hello World" tooltip-text="my other tooltip"></ix-menu-item>
      </ix-menu>
    </ix-application>
    `);
  const slotItem = page.locator('ix-menu-item').nth(0);
  const labelItem = page.locator('ix-menu-item').nth(1);
  const slotCustomTooltipItem = page.locator('ix-menu-item').nth(2);
  const labelCustomTooltipItem = page.locator('ix-menu-item').nth(3);
  await expect(slotItem).toHaveClass('hydrated');
  await expect(labelItem).toHaveClass('hydrated');
  await expect(slotCustomTooltipItem).toHaveClass('hydrated');
  await expect(labelCustomTooltipItem).toHaveClass('hydrated');

  await expectMenuItemToHaveTooltip(page, slotItem, 'Foo bar');
  await expectMenuItemToHaveTooltip(page, labelItem, 'Hello World');
  await expectMenuItemToHaveTooltip(page, slotCustomTooltipItem, 'my tooltip');
  await expectMenuItemToHaveTooltip(
    page,
    labelCustomTooltipItem,
    'my other tooltip'
  );
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
