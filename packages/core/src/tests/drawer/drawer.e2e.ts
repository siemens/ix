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

regressionTest.describe('drawer', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('drawer/basic');
    await page.locator('ix-button').click();
    await page.waitForTimeout(2000);
    expect(await page.screenshot()).toMatchSnapshot();
  });
});
