/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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

  regressionTest('uses the system elevation shadow', async ({ page }) => {
    await page.goto('menu-about-news/basic');
    const news = page.locator('ix-menu-about-news');
    await expect(news).toBeVisible();
    await expect(news).not.toHaveCSS('box-shadow', 'none');

    await news.evaluate((element) => {
      element.style.setProperty(
        '--si-sys-color-effects-shadow-4',
        '1px 2px 3px rgb(12, 34, 56)'
      );
    });

    await expect(news).toHaveCSS(
      'box-shadow',
      'rgb(12, 34, 56) 1px 2px 3px 0px'
    );
  });

  regressionTest('mobile', async ({ page }) => {
    await page.setViewportSize(viewPorts.sm);
    await page.goto('menu-about-news/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('z-index', async ({ page }) => {
    await page.setViewportSize(viewPorts.sm);
    await page.goto('menu-about-news/basic');

    const burgerMenu = page.locator(
      'ix-application-header ix-menu-expand-icon'
    );
    await burgerMenu.click();

    const about = page
      .locator('ix-menu')
      .getByRole('menuitem', { name: 'About & legal information' });
    await about.click();

    await page.waitForTimeout(500);

    await burgerMenu.click();
    await page.waitForSelector(
      'ix-application-header ix-menu-expand-icon.expanded'
    );

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
