/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
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
  await mount(`<ix-icon-toggle-button icon="rocket"></ix-icon-toggle-button>`, {
    icons: { iconRocket },
  });

  const button = page.locator('ix-icon-toggle-button');
  await expect(button).toHaveAttribute('hydrated');
  await expect(button.locator('ix-icon')).toBeVisible();
});

regressionTest(
  'defaults to a 32px host and 20px glyph',
  async ({ mount, page }) => {
    await mount(
      `<ix-icon-toggle-button icon="rocket"></ix-icon-toggle-button>`,
      {
        icons: { iconRocket },
      }
    );

    const button = page.locator('ix-icon-toggle-button');
    await expect(button).toHaveAttribute('hydrated');
    await expect(button).toHaveClass(/btn-icon-32/);
    await expect(button.locator('ix-icon')).toHaveClass(/size-20/);
  }
);

regressionTest(
  'size 24 keeps a 32px host and 24px glyph',
  async ({ mount, page }) => {
    await mount(
      `<ix-icon-toggle-button icon="rocket" size="24"></ix-icon-toggle-button>`,
      {
        icons: { iconRocket },
      }
    );

    const button = page.locator('ix-icon-toggle-button');
    await expect(button).toHaveAttribute('hydrated');
    await expect(button).toHaveClass(/btn-icon-32/);
    await expect(button.locator('ix-icon')).toHaveClass(/size-24/);
  }
);
