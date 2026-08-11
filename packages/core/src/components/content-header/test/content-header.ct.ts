/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(
    `<ix-content-header header-title="Content title"></ix-content-header>`
  );

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `<ix-content-header header-title="Content title"></ix-content-header>`
  );

  const element = page.locator('ix-content-header');
  await expect(element).toHaveClass(/\bhydrated\b/);
  await expect(element).toBeVisible();
});

const variants = [
  { variant: '', expected: 'primary', hasSecondaryClass: false },
  {
    variant: 'variant="secondary"',
    expected: 'secondary',
    hasSecondaryClass: true,
  },
];

for (const { variant, expected, hasSecondaryClass } of variants) {
  regressionTest(
    `renders header title as h2 for ${expected} variant`,
    async ({ mount, page }) => {
      await mount(
        `<ix-content-header ${variant} header-title="My Content Page"></ix-content-header>`
      );

      const heading = page.getByRole('heading', {
        level: 2,
        name: 'My Content Page',
      });
      await expect(heading).toBeVisible();

      const titleElement = page
        .locator('ix-content-header')
        .locator('h2.header-title');
      if (hasSecondaryClass) {
        await expect(titleElement).toHaveClass(/\bsecondary\b/);
      } else {
        await expect(titleElement).not.toHaveClass(/\bsecondary\b/);
      }
    }
  );
}

regressionTest(
  'does not render h2 when headerTitle is omitted',
  async ({ mount, page }) => {
    await mount(`<ix-content-header></ix-content-header>`);

    const heading = page.locator('ix-content-header').locator('h2');
    await expect(heading).toHaveCount(0);
  }
);
