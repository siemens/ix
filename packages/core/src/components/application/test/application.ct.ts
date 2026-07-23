/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, type Page } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

const captureWarnings = (page: Page) => {
  const warnings: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'warning') {
      warnings.push(message.text());
    }
  });
  return warnings;
};

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-application>
      <ix-application-header name="My application"></ix-application-header>
      <ix-menu>
        <ix-menu-item>Home</ix-menu-item>
      </ix-menu>
      <ix-content>Page content</ix-content>
    </ix-application>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-application>Page content</ix-application>`);

  const application = page.locator('ix-application');
  await expect(application).toHaveClass(/\bhydrated\b/);
  await expect(application).toBeVisible();
});

regressionTest(
  'renders a native skip link with default semantics',
  async ({ mount, page }) => {
    await mount(`<ix-application>Page content</ix-application>`);

    const link = page.getByRole('link', { name: 'Skip to main content' });
    await expect(link).toHaveAttribute('href', '#ix-application-main-content');
  }
);

regressionTest(
  'places the skip link first in the application focus order',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <button slot="application-header">Header action</button>
        <button>Content action</button>
      </ix-application>
    `);

    await expect(page.locator('ix-application')).toHaveClass(/\bhydrated\b/);
    await page.keyboard.press('Tab');

    await expect(
      page.getByRole('link', { name: 'Skip to main content' })
    ).toBeFocused();
  }
);

regressionTest(
  'shows the skip link at logical top-start only while focused',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    await mount(`<ix-application>Page content</ix-application>`);

    const link = page.getByRole('link', { name: 'Skip to main content' });
    await expect(link).not.toBeInViewport();

    await link.focus();

    await expect(link).toBeInViewport();
    const outlineInset = await link.evaluate((element) => {
      const style = getComputedStyle(element);
      return parseFloat(style.outlineWidth) + parseFloat(style.outlineOffset);
    });
    const ltrBox = await link.boundingBox();
    expect(ltrBox?.x).toBe(outlineInset);
    expect(ltrBox?.y).toBe(outlineInset);

    await page.locator('ix-application').evaluate((element) => {
      element.style.setProperty('--ix-safe-area-inset-top', '1rem');
      element.style.setProperty('--ix-safe-area-inset-left', '1rem');
      element.style.setProperty('--ix-safe-area-inset-right', '1rem');
      element.setAttribute('dir', 'rtl');
    });
    await link.focus();

    const rtlBox = await link.boundingBox();
    expect(rtlBox?.y).toBe(16 + outlineInset);
    expect(800 - (rtlBox?.x ?? 0) - (rtlBox?.width ?? 0)).toBe(
      16 + outlineInset
    );
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
  'focuses and scrolls to a configured light-DOM target',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 800, height: 400 });
    await mount(`
      <ix-application skip-link-target-id="page-title">
        <div style="height: 900px"></div>
        <h1 id="page-title">Page title</h1>
        <button id="next">Next</button>
      </ix-application>
    `);

    const link = page.getByRole('link', { name: 'Skip to main content' });
    const target = page.locator('#page-title');
    const main = page.locator('ix-application main');

    await link.focus();
    await link.press('Enter');

    await expect(target).toBeFocused();
    await expect(target).toHaveAttribute('tabindex', '-1');
    await expect
      .poll(() => main.evaluate((element) => element.scrollTop))
      .toBeGreaterThan(0);

    await page.locator('#next').focus();
    await expect(target).not.toHaveAttribute('tabindex');
  }
);

regressionTest(
  'preserves existing target focusability',
  async ({ mount, page }) => {
    await mount(`
      <ix-application skip-link-target-id="target">
        <div id="target" tabindex="0">Target</div>
        <button id="next">Next</button>
      </ix-application>
    `);

    const target = page.locator('#target');
    const link = page.getByRole('link', { name: 'Skip to main content' });
    await link.focus();
    await link.press('Enter');
    await expect(target).toBeFocused();

    await page.locator('#next').focus();
    await expect(target).toHaveAttribute('tabindex', '0');
  }
);

regressionTest(
  'does not add tabindex to a naturally focusable target',
  async ({ mount, page }) => {
    await mount(`
      <ix-application skip-link-target-id="target">
        <button id="target">Target</button>
      </ix-application>
    `);

    const target = page.locator('#target');
    const link = page.getByRole('link', { name: 'Skip to main content' });
    await link.focus();
    await link.press('Enter');

    await expect(target).toBeFocused();
    await expect(target).not.toHaveAttribute('tabindex');
  }
);

const invalidTargetCases = [
  {
    name: 'missing',
    markup: `
      <ix-application skip-link-target-id="target">
        Page content
      </ix-application>
    `,
  },
  {
    name: 'duplicate',
    markup: `
      <ix-application skip-link-target-id="target">
        <div id="target">First</div>
        <div id="target">Second</div>
      </ix-application>
    `,
  },
  {
    name: 'out-of-scope',
    markup: `
      <div id="target">Outside target</div>
      <ix-application skip-link-target-id="target">
        Page content
      </ix-application>
    `,
  },
  {
    name: 'hidden',
    markup: `
      <ix-application skip-link-target-id="target">
        <div id="target" hidden>Hidden target</div>
      </ix-application>
    `,
  },
  {
    name: 'inert',
    markup: `
      <ix-application skip-link-target-id="target">
        <div inert>
          <div id="target">Inert target</div>
        </div>
      </ix-application>
    `,
  },
  {
    name: 'disabled',
    markup: `
      <ix-application skip-link-target-id="target">
        <button id="target" disabled>Disabled target</button>
      </ix-application>
    `,
  },
];

for (const { name, markup } of invalidTargetCases) {
  regressionTest(
    `warns and falls back for a ${name} custom target`,
    async ({ mount, page }) => {
      const warnings = captureWarnings(page);
      await mount(markup);

      const link = page.getByRole('link', { name: 'Skip to main content' });
      await link.focus();
      await link.press('Enter');

      await expect(page.locator('ix-application main')).toBeFocused();
      expect(warnings).toContainEqual(
        expect.stringContaining('skipLinkTargetId "target"')
      );
    }
  );
}

regressionTest(
  'uses localized link text and target reference',
  async ({ mount, page }) => {
    await mount(`
      <ix-application
        i18n-skip-to-content="Zum Inhalt springen"
        skip-link-target-id="content"
      >
        <div id="content">Inhalt</div>
      </ix-application>
    `);

    await expect(
      page.getByRole('link', { name: 'Zum Inhalt springen' })
    ).toHaveAttribute('href', '#content');
  }
);

regressionTest(
  'warns and falls back when localized text is empty',
  async ({ mount, page }) => {
    const warnings = captureWarnings(page);
    await mount(`
      <ix-application i18n-skip-to-content="   ">
        Page content
      </ix-application>
    `);

    await expect(
      page.getByRole('link', { name: 'Skip to main content' })
    ).toBeVisible();
    expect(warnings).toContainEqual(
      expect.stringContaining('i18nSkipToContent must not be empty')
    );
  }
);

regressionTest(
  'can disable the built-in skip link',
  async ({ mount, page }) => {
    await mount(`
      <ix-application disable-skip-link>
        <button slot="application-header">Header action</button>
        <button>Content action</button>
      </ix-application>
    `);

    await expect(
      page.getByRole('link', { name: 'Skip to main content' })
    ).toHaveCount(0);

    await expect(page.locator('ix-application')).toHaveClass(/\bhydrated\b/);
    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('button', { name: 'Header action' })
    ).toBeFocused();
  }
);

regressionTest(
  'does not update browser history or the URL fragment',
  async ({ mount, page }) => {
    await mount(`<ix-application>Page content</ix-application>`);

    const initialUrl = page.url();
    const initialHistoryLength = await page.evaluate(() => history.length);
    const link = page.getByRole('link', { name: 'Skip to main content' });
    await link.focus();
    await link.press('Enter');

    expect(page.url()).toBe(initialUrl);
    expect(await page.evaluate(() => history.length)).toBe(
      initialHistoryLength
    );
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
