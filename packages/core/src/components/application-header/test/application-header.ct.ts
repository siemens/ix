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
      <ix-application-header name="Test Application"></ix-application-header>
    `
  );

  const header = page.locator('ix-application-header');

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

          // Need to define a width and height otherwise component will be shown as hidden
          wrapper.style.height = '16px';
          wrapper.style.width = '4rem';
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
  await expect(header).toHaveClass(/hydrated/);
  await expect(header).toBeVisible();

  const companyLogo = page.locator('ix-application-header ix-siemens-logo');
  await expect(companyLogo).toBeVisible();
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
          // Need to define a width and height otherwise component will be shown as hidden
          wrapper.style.height = '16px';
          wrapper.style.width = '4rem';
          wrapper.innerText = `THE BRAND LOGO`;
          shadow.appendChild(wrapper);
        }
      }
    );
  });

  await page.evaluate(() => {
    const alternativeLogo = document.createElement('div');
    alternativeLogo.id = 'mylogo';
    alternativeLogo.innerText = 'CUSTOM LOGO';
    alternativeLogo.slot = 'logo';

    // Need to define a width and height otherwise component will be shown as hidden
    alternativeLogo.style.height = '16px';
    alternativeLogo.style.width = '4rem';

    const header = document.createElement(
      'ix-application-header'
    ) as HTMLIxApplicationHeader;
    header.name = 'Test';

    header.appendChild(alternativeLogo);
    document.querySelector('#mount')?.appendChild(header);
  });

  const header = page.locator('ix-application-header');
  await expect(header).toBeVisible();

  const customLogo = header.locator('#mylogo');
  await expect(customLogo).toBeVisible();

  const brandLogo = header.locator('ix-siemens-logo');
  await expect(brandLogo).not.toBeVisible();
});

test('use company logo property over brand logo', async ({ mount, page }) => {
  await mount(``);
  await page.evaluate(() => {
    customElements.define(
      'ix-siemens-logo',
      class extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({ mode: 'open' });
          const wrapper = document.createElement('div');

          // Need to define a width and height otherwise component will be shown as hidden
          wrapper.style.height = '16px';
          wrapper.style.width = '4rem';
          wrapper.innerText = `THE BRAND LOGO`;
          shadow.appendChild(wrapper);
        }
      }
    );
  });

  await page.evaluate(() => {
    const header = document.createElement('ix-application-header');
    header.companyLogo = 'MY CUSTOM IMAGE PATH';
    header.companyLogoAlt = 'MY CUSTOM IMAGE ALT TEXT';
    document.querySelector('#mount')!.appendChild(header);
  });

  const header = page.locator('ix-application-header');
  await expect(header).toBeVisible();

  const companyLogoImage = header.locator('.logo img');

  await expect(companyLogoImage).toHaveAttribute('src', 'MY CUSTOM IMAGE PATH');
  await expect(companyLogoImage).toHaveAttribute(
    'alt',
    'MY CUSTOM IMAGE ALT TEXT'
  );

  const brandLogo = header.locator('ix-siemens-logo');
  await expect(brandLogo).not.toBeVisible();
});

test('should show product icon', async ({ mount, page }) => {
  await mount(
    `<ix-application-header app-icon="app icon path" app-icon-alt="app icon alt"></ix-application-header>`
  );
  const header = page.locator('ix-application-header');
  await expect(header).toBeVisible();

  const companyLogoImage = header.locator('.app-icon img');
  await expect(companyLogoImage).toHaveAttribute('src', 'app icon path');
  await expect(companyLogoImage).toHaveAttribute('alt', 'app icon alt');
});

test.describe('cross app navigation', () => {
  test(`should show app switch icon`, async ({ page, mount }) => {
    await page.evaluate(() => {
      window.addEventListener('context-request', (evt: any) => {
        console.dir(evt.callback);
        evt.callback({
          hideHeader: false,
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
    await expect(application).toHaveClass(/hydrated/);
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

  test(`should show slotted secondary inside overflow`, async ({
    page,
    mount,
  }) => {
    await mount(
      `
      <ix-application-header name="Test">
        <ix-button slot="secondary">before avatar</ix-button>
        <ix-avatar></ix-avatar>
        <ix-button slot="secondary">after avatar</ix-button>
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
