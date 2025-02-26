/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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

regressionTest(
  'should be open when start-expanded ist set',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <ix-menu start-expanded>
          <ix-menu-item>Item</ix-menu-item>
        </ix-menu>
      </ix-application>
    `);
    await page
      .locator('ix-application')
      .evaluate(
        (menu: HTMLIxBasicNavigationElement) => (menu.breakpoints = ['lg'])
      );
    const menu = page.locator('ix-menu');

    await expect(menu).toHaveClass(/expanded/);
  }
);

regressionTest(
  'should be closed when start-expanded ist NOT set',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <ix-menu>
          <ix-menu-item>Item</ix-menu-item>
        </ix-menu>
      </ix-application>
    `);
    await page
      .locator('ix-application')
      .evaluate(
        (menu: HTMLIxBasicNavigationElement) => (menu.breakpoints = ['lg'])
      );
    const menu = page.locator('ix-menu');

    await expect(menu).not.toHaveClass(/expanded/);
  }
);

regressionTest(
  'should be closed after menu click when NOT pinned',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <ix-menu>
          <ix-menu-item>Item</ix-menu-item>
        </ix-menu>
      </ix-application>
    `);
    await page
      .locator('ix-application')
      .evaluate(
        (menu: HTMLIxBasicNavigationElement) => (menu.breakpoints = ['md'])
      );
    const menu = page.locator('ix-menu');
    const menuButton = menu.locator('ix-menu-expand-icon');
    await menuButton.click();

    await expect(menu).toHaveClass(/expanded/);
    await page.locator('ix-menu-item').click();
    await expect(menu).not.toHaveClass(/expanded/);
  }
);

regressionTest(
  'should stay open after menu click when pinned',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <ix-menu pinned>
          <ix-menu-item>Item</ix-menu-item>
        </ix-menu>
      </ix-application>
    `);
    await page
      .locator('ix-application')
      .evaluate(
        (menu: HTMLIxBasicNavigationElement) => (menu.breakpoints = ['md'])
      );
    const menu = page.locator('ix-menu');
    const menuButton = menu.locator('ix-menu-expand-icon');
    await menuButton.click();

    await expect(menu).toHaveClass(/expanded/);
    await page.locator('ix-menu-item').click();
    await expect(menu).toHaveClass(/expanded/);
  }
);

regressionTest('should not open settings', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-settings>
        </ix-menu-settings>
      </ix-menu>
    `);
  const element = page.locator('ix-menu');

  await element.evaluate((e) => {
    e.addEventListener('openSettings', (event) => event.preventDefault());
  });

  await clickSettingsButton(element, page);
  let settings = page.locator('ix-menu-settings');
  await expect(settings).not.toBeVisible();
});

regressionTest('should not open about', async ({ mount, page }) => {
  await mount(`
      <ix-menu>
        <ix-menu-about>
        </ix-menu-about>
      </ix-menu>
    `);
  const element = page.locator('ix-menu');

  await element.evaluate((e) => {
    e.addEventListener('openAbout', (event) => event.preventDefault());
  });

  const aboutButton = element.locator('ix-menu-item#aboutAndLegal');
  await aboutButton.click();

  let about = page.locator('ix-menu-about');
  await expect(about).not.toBeVisible();
});

regressionTest('should open and close settings', async ({ mount, page }) => {
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

regressionTest('should close settings by about', async ({ mount, page }) => {
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

regressionTest('should open and close about', async ({ mount, page }) => {
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

regressionTest('should close about by settings', async ({ mount, page }) => {
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

regressionTest('should close about by item click', async ({ mount, page }) => {
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

regressionTest(
  'should close menu by bottom icon click',
  async ({ mount, page }) => {
    await mount(`
    <ix-menu>
      <ix-menu-item>Random</ix-menu-item>
      <ix-menu-item slot="bottom">BottomMenuItem</ix-menu-item>
      <ix-menu-about>
      </ix-menu-about>
      <ix-menu-settings>
      </ix-menu-settings>
    </ix-menu>
  `);

    const element = page.locator('ix-menu');

    await page.locator('ix-menu ix-menu-expand-icon').click();
    await page.waitForSelector('ix-menu ix-menu-expand-icon.expanded');

    const innerMenu = element.locator('.menu');
    await expect(innerMenu).toHaveClass(/expanded/);

    const bottomMenu = element.locator('ix-menu-item[slot="bottom"]');
    await bottomMenu.click();

    await expect(innerMenu).not.toHaveClass(/expanded/);
    await expect(element).toBeVisible();
  }
);

regressionTest('should have correct aria label', async ({ mount, page }) => {
  await mount(`
    <ix-menu pinned>
      <ix-menu-item>Random</ix-menu-item>
    </ix-menu>
  `);

  const expandButton = page.locator('ix-menu').locator('ix-menu-expand-icon');

  await expect(expandButton).toHaveAttribute('aria-label', 'Expand sidebar');

  await expandButton.click();

  await expect(expandButton).toHaveAttribute('aria-label', 'Expand sidebar');
});

async function clickAboutButton(element: Locator, page: Page) {
  const aboutButton = element.locator('ix-menu-item#aboutAndLegal');
  await aboutButton.click();
  await page.waitForTimeout(1000);
}

async function clickSettingsButton(element: Locator, page: Page) {
  const settingsButton = element.locator('ix-menu-item#settings');
  await settingsButton.click();
  await page.waitForTimeout(1000);
}
