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
      <ix-menu>
        <ix-menu-about>
          <ix-menu-about-item label="Tab 1">Content 1</ix-menu-about-item>
          <ix-menu-about-item label="Tab 2">Content 2</ix-menu-about-item>
        </ix-menu-about>
      </ix-menu>
    `);

  const element = page.locator('#aboutAndLegal');
  await element.click();

  await page.getByText('Content 1').click();

  const aboutAndLegal = page.locator('ix-menu-about');
  await expect(aboutAndLegal).toHaveClass(/hydrated/);
});

regressionTest('active-tab-label', async ({ mount, page }) => {
  await mount(`
    <ix-application>
      <ix-menu>
        <ix-menu-about active-tab-label="Tab 2">
          <ix-menu-about-item label="Tab 1">Content 1</ix-menu-about-item>
          <ix-menu-about-item label="Tab 2">Content 2</ix-menu-about-item>
        </ix-menu-about>
      </ix-menu>
    </ix-application>
    `);

  const element = page.locator('#aboutAndLegal');
  await element.click();

  const tabItems = page.locator('ix-tab-item');
  await expect(tabItems.first()).toHaveClass(/hydrated/);

  await expect(tabItems.first()).not.toHaveAttribute('selected', 'true');
  await expect(tabItems.last()).toHaveAttribute('selected', 'true');
});

regressionTest('should not change tab', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
          <ix-menu-about-item label="Tab 1">Content 1</ix-menu-about-item>
          <ix-menu-about-item label="Tab 2">Content 2</ix-menu-about-item>
        </ix-menu-about>
      </ix-menu>
    `);

  const about = page.locator('ix-menu-about');
  const element = page.locator('#aboutAndLegal');
  await element.click();

  const tabItems = page.locator('ix-tab-item');
  await expect(tabItems.first()).toHaveClass(/hydrated/);

  await about.evaluate((e) => {
    e.addEventListener('tabChange', (event) => event.preventDefault());
  });

  await tabItems.last().click();

  await expect(tabItems.first()).toHaveAttribute('selected', 'true');
  await expect(tabItems.last()).not.toHaveAttribute('selected', 'true');
});

regressionTest('tabChange event should fire exactly once per tab click', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
          <ix-menu-about-item label="Tab 1">Content 1</ix-menu-about-item>
          <ix-menu-about-item label="Tab 2">Content 2</ix-menu-about-item>
        </ix-menu-about>
      </ix-menu>
    `);

  const about = page.locator('ix-menu-about');
  const element = page.locator('#aboutAndLegal');
  await element.click();

  const tabItems = page.locator('ix-tab-item');
  await expect(tabItems.first()).toHaveClass(/hydrated/);

  // Track tabChange events
  await about.evaluate((e) => {
    (window as any).tabChangeEvents = [];
    (e as any).addEventListener('tabChange', (event: any) => {
      (window as any).tabChangeEvents.push(event.detail);
    });
  });

  // Click Tab 2 and verify exactly one event fires
  await tabItems.nth(1).click();
  await page.waitForTimeout(100);

  const events = await page.evaluate(() => (window as any).tabChangeEvents || []);
  expect(events).toHaveLength(1);
  expect(events[0]).toBe('Tab 2');
});
