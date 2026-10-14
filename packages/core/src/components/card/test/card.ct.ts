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

    const borderTopWidth = await card.evaluate((el) =>
      parseFloat(getComputedStyle(el).borderTopWidth)
    );
    expect(borderTopWidth).toBe(8);
  }
);

regressionTest(
  'filled status uses thick top border as strip',
  async ({ mount, page }) => {
    await mount(`<ix-card variant="danger" outline="false"></ix-card>`);
    const card = page.locator('ix-card');
    await expect(card).toHaveClass(/\bcard-danger\b/);
    await expect(card).not.toHaveClass(/\boutline\b/);

    const chrome = await card.evaluate((el) => {
      const style = getComputedStyle(el);
      return {
        borderTopWidth: parseFloat(style.borderTopWidth),
        borderTopColor: style.borderTopColor,
        borderSideWidth: parseFloat(style.borderLeftWidth),
      };
    });
    expect(chrome.borderTopWidth).toBe(8);
    expect(chrome.borderSideWidth).toBe(1);
    expect(chrome.borderTopColor).not.toBe('rgba(0, 0, 0, 0)');
  }
);

regressionTest('default width is 214', async ({ mount, page }) => {
  await mount(`<ix-card></ix-card>`);
  const card = page.locator('ix-card');
  await expect(card).toBeVisible();
  const width = await card.evaluate((el) => el.getBoundingClientRect().width);
  expect(width).toBe(214);
});

regressionTest('clickable enables host class', async ({ mount, page }) => {
  await mount(`<ix-card clickable></ix-card>`);
  const card = page.locator('ix-card');
  await expect(card).toHaveClass(/\bclickable\b/);
});

regressionTest(
  'selected status outline keeps status border matching strip',
  async ({ mount, page }) => {
    await mount(`
      <ix-card id="status" variant="danger" outline></ix-card>
      <ix-card id="selected" variant="danger" outline selected></ix-card>
      <ix-card id="default-selected" variant="default" outline selected></ix-card>
    `);
    const status = await page.locator('#status').evaluate((el) => ({
      left: getComputedStyle(el).borderLeftColor,
      top: getComputedStyle(el).borderTopColor,
    }));
    const selected = await page.locator('#selected').evaluate((el) => ({
      left: getComputedStyle(el).borderLeftColor,
      top: getComputedStyle(el).borderTopColor,
    }));
    const defaultSelected = await page
      .locator('#default-selected')
      .evaluate((el) => getComputedStyle(el).borderLeftColor);

    // Status selected: sides match top strip (status-strong), not accent
    expect(selected.left).toBe(status.left);
    expect(selected.left).toBe(selected.top);
    // Default selected still uses accent border
    expect(defaultSelected).not.toBe(status.left);
  }
);

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`<ix-card variant="default"><span>Content</span></ix-card>`);
  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
