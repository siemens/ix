/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator, Page } from '@playwright/test';
import { iconGlobe, iconRocket } from '@siemens/ix-icons/icons';
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
        (menu: HTMLIxApplicationElement) => (menu.breakpoints = ['lg'])
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
        (menu: HTMLIxApplicationElement) => (menu.breakpoints = ['lg'])
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
        (menu: HTMLIxApplicationElement) => (menu.breakpoints = ['md'])
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
        (menu: HTMLIxApplicationElement) => (menu.breakpoints = ['md'])
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

  const closeButton = settings.getByRole('button', { name: 'Close Settings' });
  await closeButton.click();
  await expect(settings).not.toBeVisible();

  // Click same button twice
  await clickSettingsButton(element, page);
  await clickSettingsButton(element, page);
  await expect(settings).not.toBeVisible();
});

regressionTest(
  'should return focus to menu container when settings is closed with keyboard',
  async ({ mount, page }) => {
    await mount(`
      <ix-menu>
        <ix-menu-about>
        </ix-menu-about>
        <ix-menu-settings>
        </ix-menu-settings>
      </ix-menu>
    `);

    const menu = page.locator('ix-menu');
    const settingsButton = menu.locator('ix-menu-item#settings');
    const menuNavigation = menu.locator('.menu-navigation');
    const settings = page.locator('ix-menu-settings');

    await settingsButton.click();
    await expect(settings).toBeVisible();

    const closeButton = settings.getByRole('button', {
      name: 'Close Settings',
    });
    await closeButton.focus();
    await page.keyboard.press('Enter');

    await expect(settings).not.toBeVisible();
    await expect(menuNavigation).toBeFocused();
  }
);

regressionTest(
  'should return focus to menu container when about is closed with keyboard',
  async ({ mount, page }) => {
    await mount(`
      <ix-menu>
        <ix-menu-about>
        </ix-menu-about>
        <ix-menu-settings>
        </ix-menu-settings>
      </ix-menu>
    `);

    const menu = page.locator('ix-menu');
    const aboutButton = menu.locator('ix-menu-item#aboutAndLegal');
    const menuNavigation = menu.locator('.menu-navigation');
    const about = page.locator('ix-menu-about');

    await aboutButton.click();
    await expect(about).toBeVisible();

    const closeButton = about.getByRole('button', { name: 'Close About' });
    await closeButton.focus();
    await page.keyboard.press('Enter');

    await expect(about).not.toBeVisible();
    await expect(menuNavigation).toBeFocused();
  }
);

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

  const closeButton = about.getByRole('button', { name: 'Close About' });
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

regressionTest(
  'should collapse category when menu is programmatically collapsed',
  async ({ mount, page }) => {
    await mount(
      `
    <ix-application force-breakpoint="lg">
      <ix-menu>
        <ix-menu-category label="Top level Category" icon="rocket">
          <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
          <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    </ix-application>
  `,
      {
        icons: {
          iconGlobe,
          iconRocket,
        },
      }
    );

    const menu = page.locator('ix-menu');
    const menuExpandIcon = menu.locator('ix-menu-expand-icon');
    const menuCategory = page.locator('ix-menu-category');

    await menuExpandIcon.click();
    await expect(menu).toHaveClass(/expanded/);

    await menuCategory.click();
    await expect(menuCategory).toHaveClass(/expanded/);

    await menu.evaluate((element: HTMLIxMenuElement) => {
      element.expand = false;
    });

    await expect(menu).not.toHaveClass(/expanded/);
    await expect(menuCategory).not.toHaveClass(/expanded/);
  }
);

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

regressionTest(
  'should navigate with arrow keys when items are wrapped in anchor elements',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <ix-menu start-expanded>
          <a href="#link1">
            <ix-menu-item aria-label="link1">Link 1</ix-menu-item>
          </a>
          <a href="#link2">
            <ix-menu-item aria-label="link2">Link 2</ix-menu-item>
          </a>
          <a href="#link3">
            <ix-menu-item aria-label="link3">Link 3</ix-menu-item>
          </a>
        </ix-menu>
      </ix-application>
    `);

    await page
      .locator('ix-application')
      .evaluate((app: HTMLIxApplicationElement) => (app.breakpoints = ['lg']));

    const items = page.locator('ix-menu-item');
    await expect(items).toHaveCount(3);

    // Wait for roving tabindex to be initialised (set by rAF in componentDidLoad)
    await expect(items.first()).toHaveAttribute('aria-setsize', '3');

    // Tab through skip link and burger button to reach menu navigation container
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');

    await expect(items.nth(0)).toBeFocused();

    await page.keyboard.press('ArrowDown');
    await expect(items.nth(1)).toBeFocused();

    await page.keyboard.press('ArrowDown');
    await expect(items.nth(2)).toBeFocused();

    await page.keyboard.press('ArrowUp');
    await expect(items.nth(1)).toBeFocused();
  }
);

regressionTest(
  'should set tabindex=-1 on anchor wrappers around menu items',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <ix-menu start-expanded>
          <a href="#link1" id="anchor1">
            <ix-menu-item>Link 1</ix-menu-item>
          </a>
          <a href="#link2" id="anchor2">
            <ix-menu-item>Link 2</ix-menu-item>
          </a>
        </ix-menu>
      </ix-application>
    `);

    await page
      .locator('ix-application')
      .evaluate((app: HTMLIxApplicationElement) => (app.breakpoints = ['lg']));

    const anchor1 = page.locator('#anchor1');
    const anchor2 = page.locator('#anchor2');

    await expect(anchor1).toHaveAttribute('tabindex', '-1');
    await expect(anchor2).toHaveAttribute('tabindex', '-1');
  }
);

regressionTest(
  'should not warn "Menu already defined" when ix-menu is remounted after being removed',
  async ({ mount, page }) => {
    const consoleWarnings: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'warning') {
        consoleWarnings.push(msg.text());
      }
    });

    await mount(`<ix-menu><ix-menu-item>Item</ix-menu-item></ix-menu>`);
    await expect(page.locator('ix-menu')).toHaveClass(/\bhydrated\b/);

    await page.evaluate(() => {
      document.querySelector('ix-menu')?.remove();
    });

    await page.evaluate(() => {
      const menu = document.createElement('ix-menu');
      document.body.appendChild(menu);
    });

    await expect(page.locator('ix-menu')).toHaveClass(/\bhydrated\b/);

    expect(consoleWarnings).not.toContain('Menu already defined');
  }
);

regressionTest.describe('menu-avatar tooltip', () => {
  regressionTest(
    'should show no tooltip when no top(username) property is set',
    async ({ page, mount }) => {
      await mount(`
      <ix-menu>
        <ix-menu-avatar></ix-menu-avatar>
      </ix-menu>
    `);

      const menuAvatar = page.locator('ix-menu-avatar');
      await menuAvatar.hover();

      const tooltip = page.locator('ix-tooltip');
      await expect(tooltip).not.toBeAttached();
    }
  );

  regressionTest(
    'should show tooltip text with top(username) or tooltip-text',
    async ({ page, mount }) => {
      await mount(`
        <ix-menu>
          <ix-menu-avatar top="John Doe"></ix-menu-avatar>
        </ix-menu>
      `);

      const menuAvatar = page.locator('ix-menu-avatar');
      const button = menuAvatar.locator('button.avatar');

      await button.hover();

      const tooltip = page.locator('ix-tooltip');
      await expect(tooltip).toHaveClass(/hydrated/);
      await expect(tooltip).toHaveClass(/visible/);
      await expect(tooltip).toHaveText('John Doe');

      await menuAvatar.evaluate((element) =>
        element.setAttribute('tooltip-text', 'other text')
      );

      await button.hover();

      await expect(tooltip).toHaveClass(/hydrated/);
      await expect(tooltip).toHaveClass(/visible/);
      await expect(tooltip).toHaveText('other text');
    }
  );
});
