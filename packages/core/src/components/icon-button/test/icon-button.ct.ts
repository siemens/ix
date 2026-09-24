/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { iconRocket } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(
    `<ix-icon-button icon="rocket" aria-label="Launch"></ix-icon-button>`,
    { icons: { iconRocket } }
  );

  const { violations } = await makeAxeBuilder().analyze();
  expect(violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-icon-button icon="rocket">Content</ix-icon-button>`, {
    icons: { iconRocket },
  });

  const button = page.locator('ix-icon-button');
  await expect(button).toHaveAttribute('hydrated');
  expect(button.allInnerTexts).not.toEqual('Content');

  await expect(button.locator('ix-icon')).toBeVisible();
});

regressionTest(
  'defaults to a 32px host and 20px glyph',
  async ({ mount, page }) => {
    await mount(`<ix-icon-button icon="rocket"></ix-icon-button>`, {
      icons: { iconRocket },
    });

    const button = page.locator('ix-icon-button');
    await expect(button).toHaveAttribute('hydrated');
    await expect(button).toHaveClass(/btn-icon-32/);
    await expect(button.locator('ix-icon')).toHaveClass(/size-20/);
  }
);

regressionTest(
  'size 24 keeps a 32px host and 24px glyph',
  async ({ mount, page }) => {
    await mount(`<ix-icon-button icon="rocket" size="24"></ix-icon-button>`, {
      icons: { iconRocket },
    });

    const button = page.locator('ix-icon-button');
    await expect(button).toHaveAttribute('hydrated');
    await expect(button).toHaveClass(/btn-icon-32/);
    await expect(button.locator('ix-icon')).toHaveClass(/size-24/);
  }
);

regressionTest(
  'forwards a custom property icon color',
  async ({ mount, page }) => {
    await mount(
      `<ix-icon-button
      icon="rocket"
      icon-color="--si-sys-color-text-danger"
      style="--si-sys-color-text-danger: rgb(1, 2, 3)"
    ></ix-icon-button>`,
      {
        icons: { iconRocket },
      }
    );

    await expect(page.locator('ix-icon-button ix-icon')).toHaveCSS(
      'color',
      'rgb(1, 2, 3)'
    );
  }
);

regressionTest('show spinner while loading', async ({ mount, page }) => {
  await mount(`<ix-icon-button icon="rocket"></ix-icon-button>`, {
    icons: { iconRocket },
  });
  const button = page.locator('ix-icon-button');

  await expect(button.locator('ix-spinner')).not.toBeVisible();
  await button.evaluate((btn: HTMLIxButtonElement) => (btn.loading = true));
  await expect(button.locator('ix-spinner')).toBeVisible();
});
