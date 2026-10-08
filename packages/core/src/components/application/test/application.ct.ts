/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(`
    <ix-application>
      <ix-application-header name="My application"></ix-application-header>
      <ix-menu>
        <ix-menu-item>Home</ix-menu-item>
      </ix-menu>
      <ix-content>
        <button type="button">Page action</button>
      </ix-content>
    </ix-application>
  `);

  const skipLink = page.getByRole('link', { name: 'Skip to main content' });
  await skipLink.focus();
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-application>Page content</ix-application>`);

  const application = page.locator('ix-application');
  await expect(application).toHaveAttribute('hydrated');
  await expect(application).toBeVisible();
});

regressionTest(
  'renders a semantic skip-link list for available destinations',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        Page content
        <div slot="bottom">Footer content</div>
      </ix-application>
    `);

    const list = page.getByRole('list');
    await expect(list).toHaveCount(1);
    await expect(list.getByRole('listitem')).toHaveCount(2);
    await expect(
      list.getByRole('link', { name: 'Skip to main content' })
    ).toHaveAttribute('href', '#ix-application-main-content');
    await expect(
      list.getByRole('link', { name: 'Skip to footer' })
    ).toHaveAttribute('href', '#ix-application-footer');
    await expect(page.getByRole('contentinfo')).toBeVisible();
  }
);

regressionTest(
  'places Main before Footer in the application focus order',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <button slot="application-header">Header action</button>
        <button>Content action</button>
        <button slot="bottom">Footer action</button>
      </ix-application>
    `);

    await expect(page.locator('ix-application')).toHaveAttribute('hydrated');
    await expect(
      page.getByRole('link', { name: 'Skip to footer' })
    ).toHaveCount(1);
    await page.keyboard.press('Tab');

    await expect(
      page.getByRole('link', { name: 'Skip to main content' })
    ).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('link', { name: 'Skip to footer' })
    ).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('button', { name: 'Header action' })
    ).toBeFocused();
  }
);

regressionTest(
  'adds and removes the Footer destination with bottom-slot content',
  async ({ mount, page }) => {
    await mount(`<ix-application>Page content</ix-application>`);

    const application = page.locator('ix-application');
    const footerLink = page.getByRole('link', { name: 'Skip to footer' });
    const footer = application.locator('footer');

    await expect(footerLink).toHaveCount(0);
    await expect(footer).toHaveAttribute('hidden', '');

    await application.evaluate((element) => {
      const footerContent = document.createElement('span');
      footerContent.slot = 'bottom';
      footerContent.textContent = 'Footer content';
      element.append(footerContent);
    });

    await expect(footerLink).toBeVisible();
    await expect(footer).not.toHaveAttribute('hidden', '');

    await application.evaluate((element) => {
      element.querySelector('[slot="bottom"]')?.remove();
    });

    await expect(footerLink).toHaveCount(0);
    await expect(footer).toHaveAttribute('hidden', '');
  }
);

regressionTest(
  'closes an unpinned menu with Escape from the main content',
  async ({ mount, page }) => {
    await mount(`
      <ix-application force-breakpoint="md">
        <ix-menu>
          <ix-menu-item>Home</ix-menu-item>
        </ix-menu>
        Page content
      </ix-application>
    `);

    const menu = page.locator('ix-menu');
    await menu.evaluate((element: HTMLIxMenuElement) =>
      element.toggleMenu(true)
    );
    await expect(menu).toHaveClass(/\bexpanded\b/);

    const main = page.locator('ix-application').locator('main');
    await main.press('Enter');
    await expect(menu).toHaveClass(/\bexpanded\b/);

    await main.press('Escape');
    await expect(menu).not.toHaveClass(/\bexpanded\b/);
  }
);

regressionTest(
  'shows the skip link at logical top-start only while focused',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    await mount(`
      <ix-application>
        Page content
        <div slot="bottom">Footer content</div>
      </ix-application>
    `);

    const mainLink = page.getByRole('link', { name: 'Skip to main content' });
    const footerLink = page.getByRole('link', { name: 'Skip to footer' });
    await expect(mainLink).not.toBeInViewport();
    await expect(footerLink).not.toBeInViewport();

    await mainLink.focus();

    await expect(mainLink).toBeInViewport();
    await expect(footerLink).not.toBeInViewport();
    const outlineInset = await mainLink.evaluate((element) => {
      const style = getComputedStyle(element);
      return (
        Number.parseFloat(style.outlineWidth) +
        Number.parseFloat(style.outlineOffset)
      );
    });
    const ltrBox = await mainLink.boundingBox();
    expect(ltrBox?.x).toBe(outlineInset);
    expect(ltrBox?.y).toBe(outlineInset);

    await page.keyboard.press('Tab');
    await expect(mainLink).not.toBeInViewport();
    await expect(footerLink).toBeInViewport();
    const footerBox = await footerLink.boundingBox();
    expect(footerBox?.x).toBe(ltrBox?.x);
    expect(footerBox?.y).toBe(ltrBox?.y);

    await page.locator('ix-application').evaluate((element) => {
      element.style.setProperty('--ix-safe-area-inset-top', '1rem');
      element.style.setProperty('--ix-safe-area-inset-left', '1rem');
      element.style.setProperty('--ix-safe-area-inset-right', '1rem');
      element.setAttribute('dir', 'rtl');
    });
    await footerLink.focus();

    const rtlBox = await footerLink.boundingBox();
    expect(rtlBox?.y).toBe(16 + outlineInset);
    expect(800 - (rtlBox?.x ?? 0) - (rtlBox?.width ?? 0)).toBe(
      16 + outlineInset
    );
  }
);

regressionTest(
  'focuses the Footer without changing Main scroll position',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 800, height: 400 });
    await mount(`
      <ix-application>
        <div style="height: 1200px">Page content</div>
        <button slot="bottom">Footer action</button>
      </ix-application>
    `);

    const application = page.locator('ix-application');
    const main = application.getByRole('main');
    const footer = application.getByRole('contentinfo');
    const footerLink = page.getByRole('link', { name: 'Skip to footer' });

    await main.evaluate((element) => (element.scrollTop = 300));
    await expect
      .poll(() => main.evaluate((element) => element.scrollTop))
      .toBe(300);

    await footerLink.focus();
    await footerLink.press('Enter');

    await expect(footer).toBeFocused();
    expect(await main.evaluate((element) => element.scrollTop)).toBe(300);

    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('button', { name: 'Footer action' })
    ).toBeFocused();
  }
);

regressionTest(
  'focuses and resets the internal main region by default',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 800, height: 400 });
    await mount(`
      <ix-application>
        <div style="height: 1200px">Page content</div>
      </ix-application>
    `);

    const main = page.locator('ix-application main');
    await main.evaluate((element) => (element.style.scrollBehavior = 'smooth'));
    await main.evaluate((element) => (element.scrollTop = 300));
    await expect
      .poll(() => main.evaluate((element) => element.scrollTop))
      .toBe(300);

    const link = page.getByRole('link', { name: 'Skip to main content' });
    await link.focus();
    await link.press('Enter');

    await expect(main).toBeFocused();
    expect(await main.evaluate((element) => element.scrollTop)).toBe(0);
  }
);

regressionTest(
  'focuses and scrolls to a target configured by ID',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 800, height: 400 });
    await mount(`
      <ix-application skip-link-main-target="page-title">
        <div style="height: 900px"></div>
        <h1 id="page-title" tabindex="-1">Page title</h1>
      </ix-application>
    `);

    const link = page.getByRole('link', { name: 'Skip to main content' });
    const target = page.getByRole('heading', { name: 'Page title' });
    const main = page.locator('ix-application main');

    await link.focus();
    await link.press('Enter');

    await expect(target).toBeFocused();
    await expect
      .poll(() => main.evaluate((element) => element.scrollTop))
      .toBeGreaterThan(0);
  }
);

regressionTest(
  'focuses a target configured as element',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <button>Target</button>
      </ix-application>
    `);

    const target = page.getByRole('button', { name: 'Target' });
    await page
      .locator('ix-application')
      .evaluate((element: HTMLIxApplicationElement) => {
        element.skipLinkMainTarget = element.querySelector('button')!;
      });

    const link = page.getByRole('link', { name: 'Skip to main content' });
    await link.focus();
    await link.press('Enter');

    await expect(target).toBeFocused();
  }
);

const unfocusableTargetCases = [
  {
    name: 'missing',
    markup: `
      <ix-application skip-link-main-target="target">
        Page content
      </ix-application>
    `,
  },
  {
    name: 'non-focusable',
    markup: `
      <ix-application skip-link-main-target="target">
        <div id="target">Target</div>
      </ix-application>
    `,
  },
];

for (const { name, markup } of unfocusableTargetCases) {
  regressionTest(
    `falls back to the main region for a ${name} target`,
    async ({ mount, page }) => {
      await mount(markup);

      const link = page.getByRole('link', { name: 'Skip to main content' });
      await link.focus();
      await link.press('Enter');

      await expect(page.locator('ix-application main')).toBeFocused();
    }
  );
}

regressionTest(
  'uses localized link text and target reference',
  async ({ mount, page }) => {
    await mount(`
      <ix-application
        i18n-skip-to-main="Zum Inhalt springen"
        i18n-skip-to-footer="Zur Fußzeile springen"
        skip-link-main-target="content"
      >
        <div id="content" tabindex="-1">Inhalt</div>
        <div slot="bottom">Fußzeile</div>
      </ix-application>
    `);

    await expect(
      page.getByRole('link', { name: 'Zum Inhalt springen' })
    ).toHaveAttribute('href', '#content');
    await expect(
      page.getByRole('link', { name: 'Zur Fußzeile springen' })
    ).toHaveAttribute('href', '#ix-application-footer');
  }
);

regressionTest(
  'can disable the built-in skip-link list',
  async ({ mount, page }) => {
    await mount(`
      <ix-application disable-skip-links>
        <button slot="application-header">Header action</button>
        <button>Content action</button>
        <button slot="bottom">Footer action</button>
      </ix-application>
    `);

    await expect(
      page.getByRole('link', { name: 'Skip to main content' })
    ).toHaveCount(0);
    await expect(
      page.getByRole('link', { name: 'Skip to footer' })
    ).toHaveCount(0);

    await expect(page.locator('ix-application')).toHaveAttribute('hydrated');
    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('button', { name: 'Header action' })
    ).toBeFocused();
  }
);

regressionTest(
  'does not update browser history or the URL fragment',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        Page content
        <div slot="bottom">Footer content</div>
      </ix-application>
    `);

    const initialUrl = page.url();
    const initialHistoryLength = await page.evaluate(() => history.length);
    const links = [
      page.getByRole('link', { name: 'Skip to main content' }),
      page.getByRole('link', { name: 'Skip to footer' }),
    ];

    for (const link of links) {
      await link.focus();
      await link.press('Enter');
      expect(page.url()).toBe(initialUrl);
      expect(await page.evaluate(() => history.length)).toBe(
        initialHistoryLength
      );
    }
  }
);

regressionTest(
  'uses forced breakpoint on initial render',
  async ({ mount, page }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(`<ix-application force-breakpoint="md"></ix-application>`);

    const application = page.locator('ix-application');
    await expect(application).toHaveClass(/breakpoint-md/);
  }
);

regressionTest(
  'keeps forced breakpoint when breakpoints prop changes',
  async ({ mount, page }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(`<ix-application force-breakpoint="md"></ix-application>`);

    const application = page.locator('ix-application');

    await application.evaluate((element: HTMLIxApplicationElement) => {
      element.breakpoints = ['sm'];
    });

    await expect(application).toHaveClass(/breakpoint-md/);
  }
);

regressionTest(
  'updates forced breakpoint when force-breakpoint changes at runtime',
  async ({ mount, page }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(`<ix-application force-breakpoint="md"></ix-application>`);

    const application = page.locator('ix-application');
    await expect(application).toHaveClass(/breakpoint-md/);

    await application.evaluate((element: HTMLIxApplicationElement) => {
      element.setAttribute('force-breakpoint', 'sm');
    });

    await expect(application).toHaveClass(/breakpoint-sm/);

    await application.evaluate((element: HTMLIxApplicationElement) => {
      element.breakpoints = ['md', 'lg'];
    });

    await expect(application).toHaveClass(/breakpoint-sm/);
  }
);

regressionTest(
  're-enables responsive detection when force breakpoint is removed',
  async ({ mount, page }) => {
    await page.setViewportSize(viewPorts.lg);
    await mount(`<ix-application force-breakpoint="md"></ix-application>`);

    const application = page.locator('ix-application');
    await expect(application).toHaveClass(/breakpoint-md/);

    await application.evaluate((element: HTMLIxApplicationElement) => {
      element.removeAttribute('force-breakpoint');
    });

    await expect(application).toHaveClass(/breakpoint-lg/);
  }
);
