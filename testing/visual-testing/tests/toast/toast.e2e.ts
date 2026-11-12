/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import type { ToastType } from '@siemens/ix';
import { regressionTest } from '@utils/test';

regressionTest.describe('toast', () => {
  regressionTest('headline and message', async ({ mount, page }) => {
    const types: ToastType[] = [
      'information',
      'success',
      'warning',
      'caution',
      'error',
      'danger',
      'critical',
    ];
    await mount(`
      <div class="toast-design" style="display: flex; flex-direction: column; gap: 16px; width: max-content; padding: 16px;">
        ${types
          .map(
            (type) => `
              <ix-toast type="${type}" toast-title="Toast headline" auto-close-delay="100000">
                Lorem ipsum dolor sit amet
              </ix-toast>
            `
          )
          .join('')}
      </div>
    `);

    await expect(page.getByRole('alert')).toHaveCount(types.length);
    for (const toast of await page.getByRole('alert').all()) {
      await expect(toast).toHaveAttribute('hydrated');
    }
    await page.locator('.toast-progress-bar').evaluateAll((bars) => {
      for (const bar of bars) {
        if (bar instanceof HTMLElement) {
          bar.style.animation = 'none';
          bar.style.transform = 'scaleX(0.65)';
        }
      }
    });

    await expect(page.locator('.toast-design')).toHaveScreenshot({
      animations: 'disabled',
    });
  });

  regressionTest('basic', async ({ page }) => {
    await page.goto('toast/basic');
    await page.waitForTimeout(200);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('position', async ({ page }) => {
    await page.goto('toast/position');
    await page.waitForTimeout(200);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('custom', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('toast/custom');
    await page.waitForTimeout(200);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
