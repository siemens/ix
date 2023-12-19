/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

regressionTest.describe('menu-about-news', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('menu-about-news/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('mobile', async ({ page }) => {
    await page.goto('menu-about-news/basic');
    page.setViewportSize(viewPorts.sm);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('z-index', async ({ page }) => {
    await page.goto('menu-about-news/basic');
    page.setViewportSize(viewPorts.sm);

    const burgerMenu = page.locator('ix-application-header ix-burger-menu');
    await burgerMenu.click();

    const settings = page.locator('ix-menu-item#settings');
    await settings.click();

    await page.waitForTimeout(500);

    await burgerMenu.click();
    await page.waitForSelector('ix-application-header ix-burger-menu.expanded');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
