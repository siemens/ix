/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('information-bar', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('information-bar/basic');

    const element = page.locator('information-bar');
    await element.evaluate((element: HTMLInformationBarElement) => {
      element.bar = [
        { count: 50, stripped: 2, icon: 'alarm', color: 'alarm' },
        {
          count: 50,
          stripped: 2,
          icon: 'warning-rhomb',
          color: 'critical',
        },
        { count: 5, stripped: 2, icon: 'warning', color: 'warning' },
        { count: 5, stripped: 2, icon: 'info', color: 'info' },
        { count: 5, stripped: 2, icon: 'question', color: 'unassigned' },
      ];
    });
    await page.waitForTimeout(500);
    expect(await page.screenshot()).toMatchSnapshot();
  });
});
