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

test('renders', async ({ mount, page }) => {
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

test('active-tab-label', async ({ mount, page }) => {
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

test('should not change tab', async ({ mount, page }) => {
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
