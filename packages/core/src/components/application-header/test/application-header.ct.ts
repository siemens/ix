/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test, viewPorts } from '@utils/test';
import { ApplicationLayoutContext } from '../../utils/application-layout/context';
import { ContextType } from '../../utils/context';

test('renders', async ({ mount, page }) => {
  page.setViewportSize({
    height: 500,
    width: 1400,
  });
  await mount(
    `
      <ix-basic-navigation application-name="test">
      </ix-basic-navigation>
    `
  );

  const header = page.locator('ix-basic-navigation ix-application-header');

  await expect(header).toBeVisible();
  await expect(header).toHaveClass(/breakpoint-lg/);
});

test('use brand logo if provided', async ({ mount, page }) => {
  await mount(``);
  await page.evaluate(() => {
    customElements.define(
      'ix-siemens-logo',
      class extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({ mode: 'open' });
          const wrapper = document.createElement('div');
          wrapper.innerText = `THE BRAND LOGO`;
          shadow.appendChild(wrapper);
        }
      }
    );
  });

  await page.evaluate(() => {
    const header = document.createElement('ix-application-header');
    header.name = 'Test';
    document.querySelector('#mount')!.appendChild(header);
  });

  const header = page.locator('ix-application-header');
  await expect(header).toBeVisible();

  const logo = page.locator('ix-application-header .logo');
  await expect(logo).toBeVisible();

  const customLogo = logo.locator('ix-siemens-logo');
  await expect(customLogo).toHaveText('THE BRAND LOGO');
});

test('use custom logo over brand logo', async ({ mount, page }) => {
  await mount(``);
  await page.evaluate(() => {
    customElements.define(
      'ix-siemens-logo',
      class extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({ mode: 'open' });
          const wrapper = document.createElement('div');
          wrapper.innerText = `THE BRAND LOGO`;
          shadow.appendChild(wrapper);
        }
      }
    );
  });

  await page.evaluate(() => {
    const alternativeLogo = document.createElement('div');
    alternativeLogo.innerText = 'CUSTOM LOGO';
    alternativeLogo.slot = 'logo';

    const header = document.createElement('ix-application-header');
    header.name = 'Test';

    header.appendChild(alternativeLogo);
    document.querySelector('#mount')?.appendChild(header);
  });

  const header = page.locator('ix-application-header');
  await expect(header).toBeVisible();

  const logo = page.locator('ix-application-header .logo');
  await expect(logo).toBeVisible();

  const customLogo = logo.getByText('THE BRAND LOGO');
  await expect(customLogo).not.toBeVisible();
});

test('not response inside map navigation', async ({ mount, page }) => {
  page.setViewportSize(viewPorts.sm);
  await mount(
    `
    <ix-map-navigation applicationName="Test">
      <div slot="logo">Test</div>
      <ix-menu>
        <ix-menu-item>Test</ix-menu-item>
      </ix-menu>
    </ix-map-navigation>
    `
  );
  const header = page.locator('ix-map-navigation ix-application-header');
  const burger = header.locator('ix-menu-expand-icon');

  await expect(burger).not.toBeVisible();
  await expect(header).toHaveClass(/breakpoint-md/);
});

test.describe('cross app navigation', () => {
  test(`should show app switch icon`, async ({ page, mount }) => {
    await page.evaluate(() => {
      window.addEventListener('context-request', (evt: any) => {
        console.dir(evt.callback);
        evt.callback({
          hideHeader: false,
          host: null,
          sidebar: false,
          appSwitchConfig: {
            i18nAppSwitch: 'some other language',
            apps: [
              {
                id: '1',
                description: 'description 1',
                iconSrc: '',
                name: 'app name 1',
                target: '_blank',
                url: 'url-01',
              },
              {
                id: '2',
                description: 'description 2',
                iconSrc: '',
                name: 'app name 1',
                target: '_blank',
                url: 'url-02',
              },
            ],
            currentAppId: '2',
          },
        } as ContextType<typeof ApplicationLayoutContext>);
      });
    });
    const header = page.locator('ix-application-header');
    const appSwitchButton = header.locator('ix-icon-button.app-switch');
    await mount(
      `
        <ix-application-header name="test">
        </ix-application-header>
      `
    );
    await expect(header).toHaveClass(/hydrated/);
    await expect(appSwitchButton).toBeVisible();

    await appSwitchButton.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    const modalHeader = page.locator('ix-modal-header');
    await expect(modalHeader).toHaveText(/some other language/);

    const modalContent = page.locator('ix-modal-content');
    const appEntries = modalContent.locator('.AppEntry');

    await expect(appEntries).toHaveCount(2);
  });

  test(`should close modal after interaction with app`, async ({
    page,
    mount,
  }) => {
    await page.evaluate(() => {
      window.addEventListener('context-request', (evt: any) => {
        console.dir(evt.callback);
        evt.callback({
          hideHeader: false,
          host: null,
          sidebar: false,
          appSwitchConfig: {
            apps: [
              {
                id: '1',
                description: 'description 1',
                iconSrc: '',
                name: 'app name 1',
                target: '_self',
                url: '',
              },
              {
                id: '2',
                description: 'description 2',
                iconSrc: '',
                name: 'app name 1',
                target: '_self',
                url: '',
              },
            ],
            currentAppId: '2',
          },
        } as ContextType<typeof ApplicationLayoutContext>);
      });
    });
    const header = page.locator('ix-application-header');
    const appSwitchButton = header.locator('ix-icon-button.app-switch');
    await mount(
      `
        <ix-application-header name="test">
        </ix-application-header>
      `
    );
    await expect(header).toHaveClass(/hydrated/);
    await expect(appSwitchButton).toBeVisible();

    await appSwitchButton.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    const modalContent = page.locator('ix-modal-content');
    const appEntries = modalContent.locator('.AppEntry');

    await expect(appEntries).toHaveCount(2);

    const appEntry = appEntries.nth(0);
    await appEntry.click();

    await expect(dialog).not.toBeVisible();
  });

  test(`should show app switch apps (config async)`, async ({
    page,
    mount,
  }) => {
    await page.evaluate(() => {
      window.addEventListener('context-request', (evt: any) => {
        console.dir(evt.callback);
        evt.callback({
          hideHeader: false,
          host: null,
          sidebar: false,
          appSwitchConfig: undefined,
        } as ContextType<typeof ApplicationLayoutContext>);
      });
    });
    await mount(
      `
      <ix-application>
        <ix-application-header name="test">
        </ix-application-header>
      </ix-application>
      `
    );

    const application = page.locator('ix-application');
    const header = page.locator('ix-application-header');
    const appSwitchButton = header.locator('ix-icon-button.app-switch');

    await expect(header).toHaveClass(/hydrated/);
    await expect(appSwitchButton).not.toBeVisible();

    await application.evaluate((app) => {
      (app as any).appSwitchConfig = {
        i18nAppSwitch: 'some other language',
        apps: [
          {
            id: '1',
            description: 'description 1',
            iconSrc: '',
            name: 'app name 1',
            target: '_blank',
            url: 'url-01',
          },
          {
            id: '2',
            description: 'description 2',
            iconSrc: '',
            name: 'app name 1',
            target: '_blank',
            url: 'url-02',
          },
        ],
        currentAppId: '2',
      };
    });

    await appSwitchButton.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    const modalHeader = page.locator('ix-modal-header');
    await expect(modalHeader).toHaveText(/some other language/);

    const modalContent = page.locator('ix-modal-content');
    const appEntries = modalContent.locator('.AppEntry');

    await expect(appEntries).toHaveCount(2);
  });

  test(`should show app switch apps (apps async)`, async ({ page, mount }) => {
    await page.evaluate(() => {
      window.addEventListener('context-request', (evt: any) => {
        evt.callback({
          hideHeader: false,
          host: null,
          sidebar: false,
          appSwitchConfig: {
            i18nAppSwitch: 'some other language',
            i18nLoadingApps: 'LOADING APPS TEXT',
            apps: [],
            currentAppId: '2',
          },
        } as ContextType<typeof ApplicationLayoutContext>);
      });
    });
    await mount(
      `
      <ix-application>
        <ix-application-header name="test">
        </ix-application-header>
      </ix-application>
      `
    );

    const application = page.locator('ix-application');
    await application.evaluate((app) => {
      (app as any).appSwitchConfig = {
        i18nAppSwitch: 'some other language',
        i18nLoadingApps: 'LOADING APPS TEXT',
        apps: [],
        currentAppId: '2',
      };
    });

    const header = page.locator('ix-application-header');
    const appSwitchButton = header.locator('ix-icon-button.app-switch');

    await expect(header).toHaveClass(/hydrated/);
    await expect(appSwitchButton).toBeVisible();

    await appSwitchButton.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    const modalHeader = page.locator('ix-modal-header');
    await expect(modalHeader).toHaveText(/some other language/);

    const appSwitchModal = page.locator('ix-application-switch-modal');
    const appSwitchSpinner = appSwitchModal.getByText('LOADING APPS TEXT');

    await expect(appSwitchSpinner).toBeVisible();

    await application.evaluate((app) => {
      (app as any).appSwitchConfig = {
        i18nAppSwitch: 'some other language',
        i18nLoadingApps: 'LOADING APPS TEXT',
        apps: [
          {
            id: '1',
            description: 'description 1',
            iconSrc: '',
            name: 'app name 1',
            target: '_blank',
            url: 'url-01',
          },
          {
            id: '2',
            description: 'description 2',
            iconSrc: '',
            name: 'app name 1',
            target: '_blank',
            url: 'url-02',
          },
        ],
        currentAppId: '2',
      };
    });

    const modalContent = page.locator('ix-modal-content');
    const appEntries = modalContent.locator('.AppEntry');

    await expect(appEntries).toHaveCount(2);
  });

  test(`should show slotted components`, async ({ page, mount }) => {
    await mount(
      `
      <ix-application-header name="Test">
        <ix-button>before avatar</ix-button>
        <ix-avatar></ix-avatar>
        <ix-button>after avatar</ix-button>
      </ix-application-header>
      `
    );

    const avatar = page.locator('ix-avatar');
    const beforeAvatarButton = page.locator('ix-button').nth(0);
    const afterAvatarButton = page.locator('ix-button').nth(1);

    await expect(beforeAvatarButton).toBeVisible();
    await expect(afterAvatarButton).toBeVisible();
    await expect(avatar).toBeVisible();
  });

  test(`should show slotted components inside overflow`, async ({
    page,
    mount,
  }) => {
    await mount(
      `
      <ix-application-header name="Test">
        <ix-button>before avatar</ix-button>
        <ix-avatar></ix-avatar>
        <ix-button>after avatar</ix-button>
      </ix-application-header>
      `
    );

    await page.setViewportSize(viewPorts.sm);

    const avatar = page.locator('ix-avatar');

    const moreMenuButton = page.locator('.context-menu');

    const beforeAvatarButton = page
      .getByRole('button')
      .filter({ hasText: 'before avatar' });

    const afterAvatarButton = page
      .getByRole('button')
      .filter({ hasText: 'after avatar' });

    await expect(moreMenuButton).toBeVisible();
    await expect(avatar).toBeVisible();

    await expect(beforeAvatarButton).not.toBeVisible();
    await expect(afterAvatarButton).not.toBeVisible();

    await moreMenuButton.click();

    const dropdown = page.locator(
      'ix-application-header ix-dropdown[data-overflow-dropdown]'
    );
    await expect(dropdown).toBeVisible();

    const dropdownBeforeAvatarButton = page
      .locator('ix-application-header ix-button')
      .nth(0);
    const dropdownAfterAvatarButton = page
      .locator('ix-application-header ix-button')
      .nth(1);
    await expect(dropdownBeforeAvatarButton).toHaveText('before avatar');
    await expect(dropdownAfterAvatarButton).toHaveText('after avatar');
    await expect(dropdownBeforeAvatarButton).toBeVisible();
    await expect(dropdownAfterAvatarButton).toBeVisible();
  });

  (Object.keys(viewPorts) as Array<keyof typeof viewPorts>).forEach((key) => {
    test(`should display avatar with viewport ${key}`, async ({
      page,
      mount,
    }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(
        `
        <ix-application-header name="Test">
          <ix-avatar>
          </ix-avatar>
        </ix-application-header>
      `
      );
      const avatar = page.locator('ix-avatar');
      await expect(avatar).toBeVisible();

      await page.setViewportSize(viewPorts[key]);
      await expect(avatar).toBeVisible();
    });
  });
});
