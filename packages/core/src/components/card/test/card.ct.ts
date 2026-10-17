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

regressionTest('renders with non-clickable base', async ({ mount, page }) => {
  await mount(`<ix-card></ix-card>`);
  const card = page.locator('ix-card');
  await expect(card).toHaveAttribute('hydrated', '');
  await expect(card).toHaveClass(/\boutline\b/);
  await expect(card).not.toHaveClass(/\bclickable\b/);
  await expect(card).toHaveClass(/\bcard-base\b/);
});

regressionTest(
  'outline status uses status border class',
  async ({ mount, page }) => {
    await mount(`<ix-card variant="danger" outline></ix-card>`);
    const card = page.locator('ix-card');
    await expect(card).toHaveClass(/\bcard-danger\b/);
    await expect(card).toHaveClass(/\boutline\b/);

    const chrome = await card.evaluate((el) => {
      const style = getComputedStyle(el);
      return {
        borderTopWidth: parseFloat(style.borderTopWidth),
        borderTopColor: style.borderTopColor,
        borderLeftColor: style.borderLeftColor,
      };
    });
    expect(chrome.borderTopWidth).toBe(4);
    expect(chrome.borderTopColor).not.toBe(chrome.borderLeftColor);
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
    expect(chrome.borderTopWidth).toBe(4);
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
  'outline status keeps border-3 sides; selected does not use accent',
  async ({ mount, page }) => {
    await mount(`
      <ix-card id="base" variant="base" outline></ix-card>
      <ix-card id="status" variant="danger" outline></ix-card>
      <ix-card id="selected" variant="danger" outline selected></ix-card>
      <ix-card id="base-selected" variant="base" outline selected></ix-card>
    `);
    const base = await page.locator('#base').evaluate((el) => ({
      left: getComputedStyle(el).borderLeftColor,
      top: getComputedStyle(el).borderTopColor,
    }));
    const status = await page.locator('#status').evaluate((el) => ({
      left: getComputedStyle(el).borderLeftColor,
      top: getComputedStyle(el).borderTopColor,
    }));
    const selected = await page.locator('#selected').evaluate((el) => ({
      left: getComputedStyle(el).borderLeftColor,
      top: getComputedStyle(el).borderTopColor,
    }));
    const baseSelected = await page
      .locator('#base-selected')
      .evaluate((el) => getComputedStyle(el).borderLeftColor);

    // Outline status: sides stay border-3; top is status color
    expect(status.left).toBe(base.left);
    expect(status.top).not.toBe(status.left);
    // Selected status outline: still border-3 sides, status top
    expect(selected.left).toBe(base.left);
    expect(selected.top).toBe(status.top);
    // Base selected uses accent border
    expect(baseSelected).not.toBe(base.left);
  }
);

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`<ix-card variant="base"><span>Content</span></ix-card>`);
  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
