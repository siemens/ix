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
  await expect(blindElement).toHaveAttribute('hydrated');
});

regressionTest(
  'collapsed outline and filled share the same host height',
  async ({ mount, page }) => {
    await mount(`
    <ix-blind outline="false" collapsed label="Filled"></ix-blind>
    <ix-blind collapsed label="Outline"></ix-blind>
  `);

    const filled = page.locator('ix-blind').nth(0);
    const outline = page.locator('ix-blind').nth(1);
    await expect(filled).toHaveAttribute('hydrated');
    await expect(outline).toHaveAttribute('hydrated');

    const [filledHeight, outlineHeight] = await Promise.all([
      filled.evaluate((element) => element.getBoundingClientRect().height),
      outline.evaluate((element) => element.getBoundingClientRect().height),
    ]);

    expect(outlineHeight).toBe(filledHeight);
  }
);

regressionTest(
  'outline class follows the outline prop',
  async ({ mount, page }) => {
    await mount(`
    <ix-blind label="Outline"></ix-blind>
    <ix-blind outline="false" label="Filled"></ix-blind>
    <ix-blind variant="danger" label="Danger"></ix-blind>
    <ix-blind variant="danger" outline="false" label="Danger filled"></ix-blind>
  `);

    const blinds = page.locator('ix-blind');
    await expect(blinds).toHaveCount(4);
    await expect(blinds.nth(0)).toHaveClass(/\boutline\b/);
    await expect(blinds.nth(0)).toHaveClass(/\bblind-base\b/);
    await expect(blinds.nth(1)).not.toHaveClass(/\boutline\b/);
    await expect(blinds.nth(1)).toHaveClass(/\bblind-base\b/);
    await expect(blinds.nth(2)).toHaveClass(/\boutline\b/);
    await expect(blinds.nth(2)).toHaveClass(/\bblind-danger\b/);
    await expect(blinds.nth(3)).not.toHaveClass(/\boutline\b/);
    await expect(blinds.nth(3)).toHaveClass(/\bblind-danger\b/);
  }
);

regressionTest(
  'outline status uses ::before strip over uniform chrome border',
  async ({ mount, page }) => {
    await mount(`<ix-blind variant="danger" label="Danger"></ix-blind>`);
    const blind = page.locator('ix-blind');
    await expect(blind).toHaveClass(/\bblind-danger\b/);
    await expect(blind).toHaveClass(/\boutline\b/);

    const chrome = await blind.evaluate((el) => {
      const frame = el.shadowRoot!.querySelector(
        '.blind-chrome'
      ) as HTMLElement;
      const frameStyle = getComputedStyle(frame);
      const strip = getComputedStyle(el, '::before');
      const hostRect = el.getBoundingClientRect();
      return {
        hostBorderLeftWidth: parseFloat(getComputedStyle(el).borderLeftWidth),
        borderTopWidth: parseFloat(frameStyle.borderTopWidth),
        borderLeftWidth: parseFloat(frameStyle.borderLeftWidth),
        borderTopColor: frameStyle.borderTopColor,
        borderLeftColor: frameStyle.borderLeftColor,
        stripContent: strip.content,
        stripWidth: parseFloat(strip.width),
        stripColor: strip.backgroundColor,
        stripLeft: parseFloat(strip.left),
        hostLeft: hostRect.left,
        frameLeft: frame.getBoundingClientRect().left,
      };
    });

    expect(chrome.hostBorderLeftWidth).toBe(0);
    expect(chrome.borderTopWidth).toBe(1);
    expect(chrome.borderLeftWidth).toBe(1);
    expect(chrome.borderTopColor).toBe(chrome.borderLeftColor);
    expect(chrome.stripContent).not.toBe('none');
    expect(chrome.stripWidth).toBe(4);
    expect(chrome.stripColor).not.toBe('rgba(0, 0, 0, 0)');
    expect(chrome.stripColor).not.toBe(chrome.borderLeftColor);
    // Strip starts at the host outer edge (covers chrome left border).
    expect(chrome.frameLeft).toBe(chrome.hostLeft);
    expect(chrome.stripLeft).toBe(0);
  }
);

regressionTest(
  'filled status uses ::before strip without chrome border',
  async ({ mount, page }) => {
    await mount(
      `<ix-blind variant="danger" outline="false" label="Danger"></ix-blind>`
    );
    const blind = page.locator('ix-blind');
    await expect(blind).toHaveClass(/\bblind-danger\b/);
    await expect(blind).not.toHaveClass(/\boutline\b/);

    const chrome = await blind.evaluate((el) => {
      const frame = el.shadowRoot!.querySelector(
        '.blind-chrome'
      ) as HTMLElement;
      const frameStyle = getComputedStyle(frame);
      const strip = getComputedStyle(el, '::before');
      return {
        hostBorderLeftWidth: parseFloat(getComputedStyle(el).borderLeftWidth),
        borderLeftWidth: parseFloat(frameStyle.borderLeftWidth),
        backgroundColor: frameStyle.backgroundColor,
        stripContent: strip.content,
        stripWidth: parseFloat(strip.width),
        stripColor: strip.backgroundColor,
      };
    });

    expect(chrome.hostBorderLeftWidth).toBe(0);
    expect(chrome.borderLeftWidth).toBe(0);
    expect(chrome.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    expect(chrome.stripContent).not.toBe('none');
    expect(chrome.stripWidth).toBe(4);
    expect(chrome.stripColor).not.toBe('rgba(0, 0, 0, 0)');
  }
);

regressionTest(
  'status and base blinds share the same header content inset',
  async ({ mount, page }) => {
    await mount(`
      <ix-blind id="base" label="Base"></ix-blind>
      <ix-blind id="status" variant="danger" label="Danger"></ix-blind>
    `);

    const readChevronLeft = (el: Element) => {
      const icon = el.shadowRoot!.querySelector(
        '.collapse-icon'
      ) as HTMLElement;
      return (
        icon.getBoundingClientRect().left - el.getBoundingClientRect().left
      );
    };

    const baseInset = await page.locator('#base').evaluate(readChevronLeft);
    const statusInset = await page.locator('#status').evaluate(readChevronLeft);
    expect(statusInset).toBe(baseInset);
  }
);

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-blind label="Example label">Some content</ix-blind>
    <ix-blind outline="false" label="Filled"></ix-blind>
    <ix-blind variant="danger" label="Danger"></ix-blind>
    <ix-blind variant="danger" outline="false" label="Danger filled"></ix-blind>
  `);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest(
  'header icons match the primary header text color',
  async ({ mount, page }) => {
    const variants = [
      'base',
      'danger',
      'warning',
      'caution',
      'information',
      'accent',
      'critical',
      'success',
      'neutral',
    ];

    await mount(
      [
        `<ix-blind outline="false" icon="bulb" label="filled"></ix-blind>`,
        ...variants.map(
          (variant) =>
            `<ix-blind variant="${variant}" icon="bulb" label="${variant}"></ix-blind>`
        ),
      ].join(''),
      { icons: { iconBulb } }
    );

    const blinds = page.locator('ix-blind');
    await expect(blinds).toHaveCount(variants.length + 1);

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
