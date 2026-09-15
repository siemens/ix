/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-content-header
      header-title="Production line overview"
      header-subtitle="Plant 1"
    >
      <ix-pill slot="header">Online</ix-pill>
      <ix-button variant="tertiary">Edit</ix-button>
    </ix-content-header>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-content-header
      header-title="Content title"
      header-subtitle="Subtitle"
    ></ix-content-header>
  `);

  const header = page.locator('ix-content-header');
  await expect(header).toHaveClass(/\bhydrated\b/);
  await expect(header).toHaveAttribute('text-overflow', 'wrap');
  await expect(header).toHaveJSProperty('textOverflow', 'wrap');
  await expect(page.getByText('Content title', { exact: true })).toBeVisible();
  await expect(page.getByText('Subtitle', { exact: true })).toBeVisible();
});

regressionTest(
  'updates overflow behavior when textOverflow changes at runtime',
  async ({ mount, page }) => {
    const title = 'A title that switches between wrapping and truncation';

    await mount(`
      <ix-content-header
        style="width: 14rem"
        header-title="${title}"
      ></ix-content-header>
    `);

    const header = page.locator('ix-content-header');
    await expect(header).toHaveClass(/\bhydrated\b/);
    const titleText = header.getByText(title, { exact: true });
    const getHeight = () =>
      titleText.evaluate((element) => element.getBoundingClientRect().height);

    const wrappedHeight = await getHeight();

    await header.evaluate((element: HTMLIxContentHeaderElement) => {
      element.textOverflow = 'ellipsis';
    });

    await expect(header).toHaveAttribute('text-overflow', 'ellipsis');
    await expect(titleText).not.toHaveAttribute('title');
    await expect.poll(getHeight).toBeLessThan(wrappedHeight);

    await header.evaluate((element: HTMLIxContentHeaderElement) => {
      element.textOverflow = 'wrap';
    });

    await expect(header).toHaveAttribute('text-overflow', 'wrap');
    await expect(titleText).not.toHaveAttribute('title');
    await expect.poll(getHeight).toBe(wrappedHeight);
  }
);

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
