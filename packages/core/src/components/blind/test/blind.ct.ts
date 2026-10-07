/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { iconBulb } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-blind label="Example label">Some content</ix-blind>`);
  const blindElement = page.locator('ix-blind');
  await expect(blindElement).toHaveClass(/hydrated/);
});

regressionTest(
  'header icons match the primary header text color',
  async ({ mount, page }) => {
    const variants = [
      'filled',
      'outline',
      'alarm',
      'critical',
      'warning',
      'info',
      'success',
      'neutral',
      'primary',
    ];

    await mount(
      variants
        .map(
          (variant) =>
            `<ix-blind variant="${variant}" icon="bulb" label="${variant}"></ix-blind>`
        )
        .join(''),
      { icons: { iconBulb } }
    );

    const blinds = page.locator('ix-blind');
    await expect(blinds).toHaveCount(variants.length);

    for (const blind of await blinds.all()) {
      const colors = await blind.evaluate((element) => {
        const shadowRoot = element.shadowRoot!;
        const color = (selector: string) =>
          getComputedStyle(shadowRoot.querySelector(selector)!).color;

        return {
          collapseIcon: color('.collapse-icon'),
          headerIcon: color('.blind-header-title-icon'),
          headerText: color('.blind-header-title-label'),
        };
      });

      expect(colors.collapseIcon).toBe(colors.headerText);
      expect(colors.headerIcon).toBe(colors.headerText);
    }
  }
);
