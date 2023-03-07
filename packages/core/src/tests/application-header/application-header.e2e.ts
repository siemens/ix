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

regressionTest.describe('application header: basic', () => {
  regressionTest('should not have visual regressions', async ({ page }) => {
    await page.goto('application-header/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest(
    'should not have visual regressions - svg',
    async ({ page }) => {
      await page.goto('application-header/basic-svg');
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    }
  );
});
