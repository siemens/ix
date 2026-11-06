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

regressionTest.describe('content-header', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('content-header/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
  regressionTest('secondary', async ({ page }) => {
    await page.goto('content-header/secondary');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
  regressionTest('responsive actions', async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 450 });
    await page.goto('content-header/responsive');
    await page.getByRole('button', { name: 'More actions' }).click();
    await expect(
      page.getByRole('menuitem', { name: 'Export production report' })
    ).toBeVisible();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
