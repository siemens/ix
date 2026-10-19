/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import {
  iconArrowRight,
  iconChevronRightSmall,
  iconDocument,
  iconOpenExternal,
} from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

const variants = [
  { icon: 'internal', name: iconChevronRightSmall },
  { icon: 'external', name: iconOpenExternal },
  { icon: 'file', name: iconDocument },
  { icon: 'action', name: iconArrowRight },
];
const positions = ['start', 'end'];
const icons = {
  iconArrowRight,
  iconChevronRightSmall,
  iconDocument,
  iconOpenExternal,
};

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(
    `
    <div>
      <ix-link-button url="https://ix.siemens.io/">IX home</ix-link-button>
      <ix-link-button disabled url="https://ix.siemens.io/">
        IX home disabled
      </ix-link-button>
      ${variants
        .flatMap(({ icon }) =>
          positions.map(
            (position) =>
              `<ix-link-button icon="${icon}" icon-position="${position}" url="/">${icon} ${position}</ix-link-button>`
          )
        )
        .join('')}
    </div>
  `,
    { icons }
  );

  await expect(page.locator('ix-link-button[icon] ix-icon svg')).toHaveCount(
    variants.length * positions.length
  );

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    '<ix-link-button url="https://ix.siemens.io/">IX home</ix-link-button>'
  );

  const linkButton = page.locator('ix-link-button');
  const link = linkButton.getByRole('link', { name: 'IX home' });

  await expect(linkButton).toHaveAttribute('hydrated');
  await expect(link).toHaveAttribute('href', 'https://ix.siemens.io/');
  await expect(link).not.toHaveAttribute('title');
  await expect(link).toHaveAttribute('aria-disabled', 'false');
  await expect(link).not.toHaveAttribute('tabindex');
  await expect(link.locator('ix-icon')).toHaveCount(0);
});

regressionTest('thickens the underline only on hover or active', async ({
  mount,
  page,
}) => {
  await mount(
    '<ix-link-button url="https://ix.siemens.io/">IX home</ix-link-button>'
  );

  const link = page.getByRole('link', { name: 'IX home' });
  const label = link.locator('.link');

  await expect(label).toHaveCSS('text-decoration-line', 'underline');
  await expect(label).toHaveCSS('text-decoration-thickness', 'auto');

  await link.hover();
  await expect(label).toHaveCSS('text-decoration-thickness', '2px');

  await page.mouse.move(1000, 1000);
  await expect(label).toHaveCSS('text-decoration-thickness', 'auto');

  await link.evaluate((element) => element.classList.add('active'));
  await expect(label).toHaveCSS('text-decoration-thickness', '2px');
});

regressionTest(
  'renders icon variants at both positions',
  async ({ mount, page }) => {
    await mount(
      `${variants
        .flatMap(({ icon }) =>
          positions.map(
            (position) =>
              `<ix-link-button icon="${icon}" icon-position="${position}" url="/">${icon} ${position}</ix-link-button>`
          )
        )
        .join('')}
     <ix-link-button icon="none" url="/">No icon</ix-link-button>`,
      { icons }
    );

    for (const { icon, name } of variants) {
      for (const position of positions) {
        const linkButton = page.locator(
          `ix-link-button[icon="${icon}"][icon-position="${position}"]`
        );
        const link = linkButton.getByRole('link', {
          name: `${icon} ${position}`,
        });
        const glyph = link.locator('ix-icon');

        await expect(linkButton).toHaveAttribute('hydrated');
        await expect(link).toHaveAttribute('href', '/');
        await expect(glyph).toHaveCount(1);
        await expect(glyph).toHaveJSProperty('name', name);
        await expect(glyph).toHaveClass(/size-16/);
        await expect(glyph).toHaveAttribute('aria-hidden', 'true');
        await expect(glyph).toHaveCSS(
          position === 'start' ? 'margin-right' : 'margin-left',
          '4px'
        );
        await expect(glyph).toHaveCSS(
          position === 'start' ? 'margin-left' : 'margin-right',
          '0px'
        );
        await expect(
          link.locator(
            position === 'start' ? 'ix-icon + .link' : '.link + ix-icon'
          )
        ).toHaveCount(1);
      }
    }

    await expect(
      page
        .locator('ix-link-button[icon="none"]')
        .getByRole('link', {
          name: 'No icon',
        })
        .locator('ix-icon')
    ).toHaveCount(0);

    await page.locator('body').evaluate((body) => {
      body.setAttribute('data-ix-density', 'compact');
    });
    await expect(
      page.locator(
        'ix-link-button[icon="external"][icon-position="start"] ix-icon'
      )
    ).toHaveCSS('margin-right', '2px');
    await expect(
      page.locator(
        'ix-link-button[icon="external"][icon-position="end"] ix-icon'
      )
    ).toHaveCSS('margin-left', '2px');
  }
);

regressionTest(
  'skips disabled link buttons during keyboard navigation',
  async ({ mount, page }) => {
    await mount(`
      <button>Previous</button>
      <ix-link-button disabled url="https://ix.siemens.io/">IX home</ix-link-button>
      <button>Next</button>
    `);

    const linkButton = page.locator('ix-link-button');
    const link = linkButton.getByRole('link', { name: 'IX home' });
    const previousButton = page.getByRole('button', { name: 'Previous' });
    const nextButton = page.getByRole('button', { name: 'Next' });

    await expect(linkButton).toHaveAttribute('hydrated');
    await expect(link).toHaveAttribute('aria-disabled', 'true');
    await expect(link).toHaveAttribute('tabindex', '-1');
    await expect(link).not.toHaveAttribute('href');

    await previousButton.focus();
    await page.keyboard.press('Tab');

    await expect(nextButton).toBeFocused();
  }
);
