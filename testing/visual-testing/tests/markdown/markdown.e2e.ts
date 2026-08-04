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

regressionTest.describe('markdown', () => {
  regressionTest('basic', async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 1100 });
    await page.goto('markdown/basic');

    await expect(page.locator('ix-markdown').locator('h1')).toHaveText(
      'Asset health report'
    );
    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
    });
  });
});
