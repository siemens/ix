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

test('should not change tab', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-settings>
          <ix-menu-settings-item tab-key="tab-1" label="Tab 1">Content 1</ix-menu-settings-item>
          <ix-menu-settings-item tab-key="tab-2" label="Tab 2">Content 2</ix-menu-settings-item>
        </ix-menu-settings>
      </ix-menu>
    `);

  const settings = page.locator('ix-menu-settings');
  const element = page.locator('ix-menu-item#settings');
  await element.click();

  const tabItems = page.locator('ix-tab-item');
  await expect(tabItems.first()).toHaveClass(/hydrated/);

  await settings.evaluate((e) => {
    e.addEventListener('tabChange', (event) => event.preventDefault());
  });

  await tabItems.last().click();

  await expect(tabItems.first()).toHaveClass(/\bselected\b/);
  await expect(tabItems.last()).not.toHaveClass(/\bselected\b/);
});

test('tabChange event should fire exactly once per tab click', async ({
  mount,
  page,
}) => {
  await mount(`
      <ix-menu>
        <ix-menu-settings>
          <ix-menu-settings-item tab-key="tab-1" label="Tab 1">Content 1</ix-menu-settings-item>
          <ix-menu-settings-item tab-key="tab-2" label="Tab 2">Content 2</ix-menu-settings-item>
        </ix-menu-settings>
      </ix-menu>
    `);

  const settings = page.locator('ix-menu-settings');
  const element = page.locator('ix-menu-item#settings');
  await element.click();

  const tabItems = page.locator('ix-tab-item');
  await expect(tabItems.first()).toHaveClass(/hydrated/);

  const eventPromise = settings.evaluate((e) => {
    return new Promise<string>((resolve) => {
      const handleTabChange = (event: Event) => {
        const detail = (event as CustomEvent<string>).detail;
        resolve(detail);
      };

      e.addEventListener('tabChange', handleTabChange);
    });
  });

  await tabItems.nth(1).click();

  const eventDetail = await eventPromise;
  expect(eventDetail).toBe('tab-2');
});

test('renders slotted tabs when suppressing legacy tabs', async ({
  mount,
  page,
}) => {
  await mount(`
      <ix-menu>
        <ix-menu-settings suppress-legacy-tabs>
          <ix-tabs active-tab-key="tab-1">
            <ix-tab-item tab-key="tab-1">Tab 1</ix-tab-item>
            <ix-tab-item tab-key="tab-2">Tab 2</ix-tab-item>
          </ix-tabs>
          <section role="tabpanel">Content 1</section>
        </ix-menu-settings>
      </ix-menu>
    `);

  const element = page.locator('ix-menu-item#settings');
  await element.click();

  const settings = page.locator('ix-menu-settings');
  await expect(settings).not.toHaveClass(/legacy-tabs/);
  await expect(page.getByRole('tab', { name: 'Tab 1' })).toBeVisible();
});
