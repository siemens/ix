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

regressionTest(
  'renders with non-clickable default',
  async ({ mount, page }) => {
    await mount(`<ix-card></ix-card>`);
    const card = page.locator('ix-card');
    await expect(card).toHaveAttribute('hydrated', '');
    await expect(card).toHaveClass(/\boutline\b/);
    await expect(card).not.toHaveClass(/\bclickable\b/);
    await expect(card).toHaveClass(/\bcard-default\b/);
  }
);

regressionTest(
  'outline status uses status border class',
  async ({ mount, page }) => {
    await mount(`<ix-card variant="danger" outline></ix-card>`);
    const card = page.locator('ix-card');
    await expect(card).toHaveClass(/\bcard-danger\b/);
    await expect(card).toHaveClass(/\boutline\b/);

    const stripHeightPx = await card.evaluate((el) => {
      const strip = el.shadowRoot?.querySelector(
        '.card-content'
      ) as HTMLElement;
      return strip
        ? parseFloat(getComputedStyle(strip, '::before').height)
        : NaN;
    });
    expect(stripHeightPx).toBe(8);
  }
);

regressionTest(
  'filled status enables strip via host classes',
  async ({ mount, page }) => {
    await mount(`<ix-card variant="danger" outline="false"></ix-card>`);
    const card = page.locator('ix-card');
    await expect(card).toHaveClass(/\bcard-danger\b/);
    await expect(card).not.toHaveClass(/\boutline\b/);

    const stripHeightPx = await card.evaluate((el) => {
      const strip = el.shadowRoot?.querySelector(
        '.card-content'
      ) as HTMLElement;
      return strip
        ? parseFloat(getComputedStyle(strip, '::before').height)
        : NaN;
    });
    expect(stripHeightPx).toBe(8);
  }
);

regressionTest(
  'default width is 214',
  async ({ mount, page }) => {
    await mount(`<ix-card></ix-card>`);
    const card = page.locator('ix-card');
    await expect(card).toBeVisible();
    const width = await card.evaluate((el) => el.getBoundingClientRect().width);
    expect(width).toBe(214);
  }
);

regressionTest('clickable enables host class', async ({ mount, page }) => {
  await mount(`<ix-card clickable></ix-card>`);
  const card = page.locator('ix-card');
  await expect(card).toHaveClass(/\bclickable\b/);
});

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`<ix-card variant="default"><span>Content</span></ix-card>`);
  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
