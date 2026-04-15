/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('theme-system', () => {
  regressionTest('system - dark', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('theme-system/basic', {
      skipIxHydrationCheck: true,
    });
    expect(await page.screenshot()).toMatchSnapshot();
  });

  regressionTest('system - light', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('theme-system/basic', {
      skipIxHydrationCheck: true,
    });
    expect(await page.screenshot()).toMatchSnapshot();
  });
});
