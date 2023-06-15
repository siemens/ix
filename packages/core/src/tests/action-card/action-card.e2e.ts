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

regressionTest.describe('action card: basic', () => {
  regressionTest('should not have visual regressions', async ({ page }) => {
    await page.goto('action-card/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('should have selected state', async ({ page }) => {
    await page.goto('action-card/selected');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
