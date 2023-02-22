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

regressionTest.describe('dropdown', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('dropdown/test/basic');

    await page.locator('ix-button').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('dropdown/test/overflow');

    const menuHandle = await page.waitForSelector('.dropdown-menu.show');

    page.evaluate((menuElement) => {
      menuElement.scrollTop = 9999;
      menuElement.classList.add('__SCROLLED__');
    }, menuHandle);

    await page.waitForSelector('.dropdown-menu.show.__SCROLLED__');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.02,
    });
  });

  regressionTest('tigger events', async ({ page }) => {
    await page.goto('dropdown/test/trigger-events');

    await page.locator('input').focus();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('disabled', async ({ page }) => {
    await page.goto('dropdown/test/disabled');

    await page.locator('ix-button').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });
});
