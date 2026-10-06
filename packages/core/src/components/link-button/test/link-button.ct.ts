/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { expect } from '@playwright/test';
import {
  iconArrowRight,
  iconChevronRightSmall,
  iconDocument,
  iconOpenExternal,
} from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

const icons = {
  iconArrowRight,
  iconChevronRightSmall,
  iconDocument,
  iconOpenExternal,
};

regressionTest(
  'renders with the default icon at the start',
  async ({ mount, page }) => {
    await mount('<ix-link-button url="/link">Link text</ix-link-button>', {
      icons,
    });

    const linkButton = page.locator('ix-link-button');
    const link = linkButton.getByRole('link', { name: 'Link text' });
    await expect(linkButton).toHaveClass(/hydrated/);
    await expect
      .poll(() =>
        link
          .locator('ix-icon')
          .evaluate((element: HTMLIxIconElement) => element.name)
      )
      .toBe(iconChevronRightSmall);
    await expect(link.locator('ix-icon')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
    await expect(link.locator('ix-icon')).toBeVisible();
    await expect(link.locator('ix-icon + .link')).toHaveCount(1);
  }
);

regressionTest(
  'selects each icon and places it at either end',
  async ({ mount, page }) => {
    await mount(
      '<ix-link-button icon="none" icon-position="end" url="/link">Link text</ix-link-button>',
      { icons }
    );

    const linkButton = page.locator('ix-link-button');
    const link = linkButton.getByRole('link', { name: 'Link text' });
    await expect(link.locator('ix-icon')).toHaveCount(0);

    const variants = [
      ['internal', iconChevronRightSmall],
      ['external', iconOpenExternal],
      ['file', iconDocument],
      ['action', iconArrowRight],
    ] as const;

    for (const [variant, name] of variants) {
      await linkButton.evaluate((element: HTMLIxLinkButtonElement, icon) => {
        element.icon = icon;
      }, variant);
      await expect
        .poll(() =>
          link
            .locator('.link + ix-icon')
            .evaluate((element: HTMLIxIconElement) => element.name)
        )
        .toBe(name);

      await linkButton.evaluate((element: HTMLIxLinkButtonElement) => {
        element.iconPosition = 'start';
      });
      await expect(link.locator('ix-icon + .link')).toHaveCount(1);

      await linkButton.evaluate((element: HTMLIxLinkButtonElement) => {
        element.iconPosition = 'end';
      });
    }
  }
);

regressionTest(
  'keeps the link accessible without an icon',
  async ({ mount, page, makeAxeBuilder }) => {
    await mount(
      '<ix-link-button icon="none" url="/link">Link text</ix-link-button>'
    );

    await expect(
      page.locator('ix-link-button').getByRole('link', { name: 'Link text' })
    ).toBeVisible();
    const results = await makeAxeBuilder().analyze();
    expect(results.violations).toEqual([]);
  }
);
