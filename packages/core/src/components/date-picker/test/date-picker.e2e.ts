/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { regressionTest } from '@utils/test';
import { expect } from '@playwright/test';

regressionTest.describe('date picker', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`date-picker/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
