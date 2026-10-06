/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('ix-tooltip popover guards', () => {
  const pageErrors = (page: Page) => {
    const errors: Error[] = [];
    page.on('pageerror', (error) => errors.push(error));
    return errors;
  };

  const waitForHideCallback = (page: Page) =>
    page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 50)));

  regressionTest(
    'does not throw when hidePopover is missing after the tooltip is shown',
    async ({ mount, page }) => {
      const errors = pageErrors(page);
      await mount(`
        <ix-tooltip for=".test" hide-delay="0">tooltip</ix-tooltip>
        <ix-button class="test">button</ix-button>
      `);
      const tooltip = page.locator('ix-tooltip');
      const button = page.locator('ix-button');

      await button.hover();
      await expect(tooltip).toHaveClass(/visible/);

      await tooltip.evaluate(async (host) => {
        const dialog = host.shadowRoot?.querySelector('dialog');
        if (!dialog) {
          throw new Error('Expected tooltip dialog');
        }
        Object.defineProperty(dialog, 'hidePopover', {
          configurable: true,
          value: undefined,
        });
        await (host as HTMLIxTooltipElement).hideTooltip(0);
        await new Promise((resolve) => setTimeout(resolve, 50));
      });

      expect(errors.map((error) => error.message)).toEqual([]);
    }
  );

  regressionTest(
    'does not throw when the dialog is detached before hide',
    async ({ mount, page }) => {
      const errors = pageErrors(page);
      await mount(`
        <ix-tooltip for=".test" hide-delay="0">tooltip</ix-tooltip>
        <ix-button class="test">button</ix-button>
      `);
      const tooltip = page.locator('ix-tooltip');
      const button = page.locator('ix-button');

      await button.hover();
      await expect(tooltip).toHaveClass(/visible/);

      await tooltip.evaluate((host) => {
        host.shadowRoot?.querySelector('dialog')?.remove();
      });

      await page.mouse.move(0, 0);
      await waitForHideCallback(page);
      expect(errors.map((error) => error.message)).toEqual([]);
    }
  );

  regressionTest(
    'does not throw when switching between two triggers',
    async ({ mount, page }) => {
      const errors = pageErrors(page);
      await mount(`
        <ix-tooltip for=".test">tooltip</ix-tooltip>
        <ix-button class="test" id="a">A</ix-button>
        <ix-button class="test" id="b">B</ix-button>
      `);
      const tooltip = page.locator('ix-tooltip');
      await page.locator('#a').hover();
      await expect(tooltip).toHaveClass(/visible/);
      await page.locator('#b').hover();
      await expect(tooltip).toHaveClass(/visible/);
      expect(errors.map((error) => error.message)).toEqual([]);
    }
  );

  regressionTest(
    'does not throw when the tooltip is unmounted while visible',
    async ({ mount, page }) => {
      const errors = pageErrors(page);
      await mount(`
        <ix-tooltip for=".test">tooltip</ix-tooltip>
        <ix-button class="test">button</ix-button>
      `);
      const tooltip = page.locator('ix-tooltip');
      const button = page.locator('ix-button');

      await button.hover();
      await expect(tooltip).toHaveClass(/visible/);

      await tooltip.evaluate((host) => host.remove());
      await page.mouse.move(0, 0);
      await waitForHideCallback(page);
      expect(errors.map((error) => error.message)).toEqual([]);
    }
  );
});
