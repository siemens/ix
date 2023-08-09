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

regressionTest.describe('blind', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('blind/basic');
    const blind = await page.waitForSelector('ix-blind');
    expect(await blind.screenshot()).toMatchSnapshot();
  });

  regressionTest('collapsed', async ({ page }) => {
    await page.goto('blind/basic');
    await page.locator('.blind-header').click();
    await page.waitForSelector('.blind-header.closed');
    await page.waitForTimeout(800);
    const blind = await page.waitForSelector('ix-blind');
    expect(await blind.screenshot()).toMatchSnapshot();
  });

  regressionTest('header-actions', async ({ page }) => {
    await page.goto('blind/header-actions');
    await page.locator('#context-menu').click();
    await page.waitForTimeout(800);
    await page.waitForSelector('ix-dropdown.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('variants', async ({ page }) => {
    await page.goto('blind/variants');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
