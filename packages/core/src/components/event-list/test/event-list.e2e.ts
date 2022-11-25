/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('event-list', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(`event-list/test/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('compact', async ({ page }) => {
    await page.goto(`event-list/test/compact`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('chevron', async ({ page }) => {
    await page.goto(`event-list/test/chevron`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('custom-height', async ({ page }) => {
    await page.goto(`event-list/test/custom-height`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
