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

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-icon-button icon="rocket">Content</ix-icon-button>`, {
    icons: { iconRocket },
  });

  const button = page.locator('ix-icon-button');
  await expect(button).toHaveClass(/hydrated/);
  expect(button.allInnerTexts).not.toEqual('Content');

  await expect(button.locator('ix-icon')).toBeVisible();
});

regressionTest(
  'forwards a custom property icon color',
  async ({ mount, page }) => {
    await mount(
      `<ix-icon-button
      icon="rocket"
      icon-color="--si-sys-text-danger"
      style="--si-sys-text-danger: rgb(1, 2, 3)"
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
