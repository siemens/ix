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
    await page.goto('menu-avatar/basic');
    await page.locator('ix-burger-menu').click();
    await page.waitForSelector('.expanded');
    await page.locator('ix-menu-avatar').click();
    await page.waitForSelector('ix-dropdown.show');
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
  regressionTest('image', async ({ page }) => {
    await page.goto('menu-avatar/image');
    const menu = page.locator('ix-menu');
    await menu.locator('ix-burger-menu').click();
    expect(menu.locator('.menu.expand')).toBeDefined();
    const avatar = page.locator('ix-menu-avatar');
    await avatar.click();
    expect(avatar.locator('ix-dropdown').locator('.show')).toBeDefined();
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
  regressionTest('initials', async ({ page }) => {
    await page.goto('menu-avatar/initials');
    const menu = page.locator('ix-menu');
    await menu.locator('ix-burger-menu').click();
    expect(menu.locator('.menu.expand')).toBeDefined();
    const avatar = page.locator('ix-menu-avatar');
    await avatar.click();
    expect(avatar.locator('ix-dropdown').locator('.show')).toBeDefined();
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
//# sourceMappingURL=menu-about-avatar.e2e.js.map
