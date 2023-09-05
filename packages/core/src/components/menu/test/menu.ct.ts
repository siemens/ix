/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator, Page } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
        </ix-menu-about>
        <ix-menu-settings>
        </ix-menu-settings>
      </ix-menu>
    `);
  const element = page.locator('ix-menu');
  await expect(element).toHaveClass(/hydrated/);
  await expect(element).toHaveClass(/breakpoint-lg/);
});

test('should stay close after menu click when NOT pinned', async ({
  mount,
  page,
}) => {
  await mount(`
      <ix-basic-navigation>
        <ix-menu>
          <ix-menu-item>Item</ix-menu-item>
        </ix-menu>
      </ix-basic-navigation>
    `);
  const menu = page.locator('ix-menu');
  await menu.evaluate((menu: HTMLIxMenuElement) => {
    menu.breakpoints = ['md'];
  });
  const menuButton = menu.locator('ix-burger-menu');
  await menuButton.click();

  await expect(menu).toHaveClass(/expanded/);
  await page.locator('ix-menu-item').click();
  await expect(menu).not.toHaveClass(/expanded/);
});

test('should stay open after menu click when pinned', async ({
  mount,
  page,
}) => {
  await mount(`
      <ix-basic-navigation>
        <ix-menu pinned>
          <ix-menu-item>Item</ix-menu-item>
        </ix-menu>
      </ix-basic-navigation>
    `);
  const menu = page.locator('ix-menu');
  const menuButton = menu.locator('ix-burger-menu');
  await menuButton.click();

  await expect(menu).not.toHaveClass(/expanded/);

  await page.locator('ix-menu-item').click();

  await expect(menu).not.toHaveClass(/expanded/);
});

test('should open and close settings', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
        </ix-menu-about>
        <ix-menu-settings>
        </ix-menu-settings>
      </ix-menu>
    `);
  const element = page.locator('ix-menu');

  await clickSettingsButton(element, page);
  let settings = page.locator('ix-menu-settings');
  await expect(settings).toBeVisible();

  const closeButton = settings.getByRole('button');
  await closeButton.click();
  await expect(settings).not.toBeVisible();

  // Click same button twice
  await clickSettingsButton(element, page);
  await clickSettingsButton(element, page);
  await expect(settings).not.toBeVisible();
});

test('should close settings by about', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
        </ix-menu-about>
        <ix-menu-settings>
        </ix-menu-settings>
      </ix-menu>
    `);
  const element = page.locator('ix-menu');

  await clickSettingsButton(element, page);
  let about = page.locator('ix-menu-about');
  let settings = page.locator('ix-menu-settings');

  await clickAboutButton(element, page);
  await expect(about).toBeVisible();
  await expect(settings).not.toBeVisible();
});

test('should open and close about', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
        </ix-menu-about>
        <ix-menu-settings>
        </ix-menu-settings>
      </ix-menu>
    `);
  const element = page.locator('ix-menu');

  await clickAboutButton(element, page);
  let about = page.locator('ix-menu-about');
  await expect(about).toBeVisible();

  const closeButton = about.getByRole('button');
  await closeButton.click();
  await expect(about).not.toBeVisible();

  // Click same button twice
  await clickAboutButton(element, page);
  await clickAboutButton(element, page);
  await expect(about).not.toBeVisible();
});

test('should close about by settings', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
        </ix-menu-about>
        <ix-menu-settings>
        </ix-menu-settings>
      </ix-menu>
    `);
  const element = page.locator('ix-menu');

  await clickAboutButton(element, page);
  let about = page.locator('ix-menu-about');
  let settings = page.locator('ix-menu-settings');

  await clickSettingsButton(element, page);
  await expect(about).not.toBeVisible();
  await expect(settings).toBeVisible();
});

test('should close about by item click', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-item>Random</ix-menu-item>
        <ix-menu-about>
        </ix-menu-about>
        <ix-menu-settings>
        </ix-menu-settings>
      </ix-menu>
    `);
  const element = page.locator('ix-menu');

  await clickAboutButton(element, page);
  let about = page.locator('ix-menu-about');
  let settings = page.locator('ix-menu-settings');
  const menuItem = page.locator('ix-menu-item').filter({ hasText: 'Random' });

  await menuItem.click();
  await expect(about).not.toBeVisible();
  await expect(settings).not.toBeVisible();
});

async function clickAboutButton(element: Locator, page: Page) {
  const aboutButton = element.locator('#aboutAndLegal');
  await aboutButton.click();
  await page.waitForTimeout(1000);
}

async function clickSettingsButton(element: Locator, page: Page) {
  const settingsButton = element.locator('#settings');
  await settingsButton.click();
  await page.waitForTimeout(1000);
}
