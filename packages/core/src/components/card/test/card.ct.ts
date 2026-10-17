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
  'outline status uses ::before strip over uniform chrome border',
  async ({ mount, page }) => {
    await mount(`<ix-card variant="danger" outline></ix-card>`);
    const card = page.locator('ix-card');
    await expect(card).toHaveClass(/\bcard-danger\b/);
    await expect(card).toHaveClass(/\boutline\b/);

    const chrome = await card.evaluate((el) => {
      const frame = el.shadowRoot!.querySelector('.card-chrome') as HTMLElement;
      const frameStyle = getComputedStyle(frame);
      const strip = getComputedStyle(el, '::before');
      return {
        borderTopWidth: parseFloat(frameStyle.borderTopWidth),
        borderLeftWidth: parseFloat(frameStyle.borderLeftWidth),
        borderTopColor: frameStyle.borderTopColor,
        borderLeftColor: frameStyle.borderLeftColor,
        stripContent: strip.content,
        stripHeight: parseFloat(strip.height),
        stripColor: strip.backgroundColor,
      };
    });
    expect(chrome.borderTopWidth).toBe(1);
    expect(chrome.borderLeftWidth).toBe(1);
    expect(chrome.borderTopColor).toBe(chrome.borderLeftColor);
    expect(chrome.stripContent).not.toBe('none');
    expect(chrome.stripHeight).toBe(4);
    expect(chrome.stripColor).not.toBe('rgba(0, 0, 0, 0)');
  }
);

regressionTest(
  'filled status uses ::before strip with uniform chrome border',
  async ({ mount, page }) => {
    await mount(`<ix-card variant="danger" outline="false"></ix-card>`);
    const card = page.locator('ix-card');
    await expect(card).toHaveClass(/\bcard-danger\b/);
    await expect(card).not.toHaveClass(/\boutline\b/);

    const chrome = await card.evaluate((el) => {
      const frame = el.shadowRoot!.querySelector('.card-chrome') as HTMLElement;
      const frameStyle = getComputedStyle(frame);
      const strip = getComputedStyle(el, '::before');
      return {
        borderTopWidth: parseFloat(frameStyle.borderTopWidth),
        borderSideWidth: parseFloat(frameStyle.borderLeftWidth),
        stripContent: strip.content,
        stripHeight: parseFloat(strip.height),
        stripColor: strip.backgroundColor,
      };
    });
    expect(chrome.borderTopWidth).toBe(1);
    expect(chrome.borderSideWidth).toBe(1);
    expect(chrome.stripContent).not.toBe('none');
    expect(chrome.stripHeight).toBe(4);
    expect(chrome.stripColor).not.toBe('rgba(0, 0, 0, 0)');
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
    const readChrome = (el: Element) => {
      const frame = el.shadowRoot!.querySelector('.card-chrome') as HTMLElement;
      const style = getComputedStyle(frame);
      return {
        left: style.borderLeftColor,
        top: style.borderTopColor,
        strip: getComputedStyle(el, '::before').backgroundColor,
      };
    };
    const base = await page.locator('#base').evaluate(readChrome);
    const status = await page.locator('#status').evaluate(readChrome);
    const selected = await page.locator('#selected').evaluate(readChrome);
    const baseSelected = await page
      .locator('#base-selected')
      .evaluate(readChrome);

    // Outline status: uniform border-3; status color is the ::before strip
    expect(status.left).toBe(base.left);
    expect(status.top).toBe(status.left);
    expect(status.strip).not.toBe(status.left);
    // Selected status outline: still border-3; same strip
    expect(selected.left).toBe(base.left);
    expect(selected.top).toBe(status.top);
    expect(selected.strip).toBe(status.strip);
    // Base selected uses accent border
    expect(baseSelected.left).not.toBe(base.left);
  }
);

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`<ix-card variant="base"><span>Content</span></ix-card>`);
  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
