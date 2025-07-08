/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('3rd-party:bootstrap', () => {
  regressionTest('html elements', async ({ page }, testInfo) => {
    await page.goto('3rd-party/bootstrap/html-elements');
    const dataIxColorSchema =
      testInfo.project.metadata?.['data-ix-color-schema'];

    if (dataIxColorSchema === 'light') {
      await page.evaluate(() => {
        document.body.setAttribute('data-ix-color-schema', 'light');
      });
    }

    await expect(page.locator('ix-button')).toBeVisible();
    await expect(page).toHaveScreenshot({
      fullPage: true,
    });
  });
});
