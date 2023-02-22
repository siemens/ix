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

regressionTest.describe('menu-avatar', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('menu-avatar/test/basic');
    await page.locator('ix-burger-menu').click();
    await page.waitForSelector('.expanded');
    await page.locator('ix-menu-avatar').click();
    await page.waitForSelector('ix-dropdown.show');
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('image', async ({ page }) => {
    await page.goto('menu-avatar/test/image');
    await page.locator('ix-burger-menu').click();
    await page.waitForSelector('.expanded');
    await page.locator('ix-menu-avatar').click();
    await page.waitForSelector('ix-dropdown.show');
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('initials', async ({ page }) => {
    await page.goto('menu-avatar/test/initials');
    await page.locator('ix-burger-menu').click();
    await page.waitForSelector('.expanded');
    await page.locator('ix-menu-avatar').click();
    await page.waitForSelector('ix-dropdown.show');
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
