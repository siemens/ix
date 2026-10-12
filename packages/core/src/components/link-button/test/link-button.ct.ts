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

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <div>
      <ix-link-button url="https://ix.siemens.io/">IX home</ix-link-button>
      <ix-link-button disabled url="https://ix.siemens.io/">
        IX home disabled
      </ix-link-button>
    </div>
  `);

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

regressionTest(
  'renders icon variants at both positions',
  async ({ mount, page }) => {
    const variants = [
      { icon: 'internal', name: iconChevronRightSmall },
      { icon: 'external', name: iconOpenExternal },
      { icon: 'file', name: iconDocument },
      { icon: 'action', name: iconArrowRight },
    ];
    const positions = ['start', 'end'];

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
      {
        icons: {
          iconArrowRight,
          iconChevronRightSmall,
          iconDocument,
          iconOpenExternal,
        },
      }
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
