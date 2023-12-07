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

regressionTest.describe('dropdown', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('dropdown/basic');

    await page.locator('ix-button').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('dropdown/overflow');

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
    await page.goto('dropdown/trigger-events');

    await page.locator('input').focus();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('disabled', async ({ page }) => {
    await page.goto('dropdown/disabled');

    await page.locator('ix-button').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('handle multiple', async ({ page }) => {
    await page.goto('dropdown/multiple');

    await page.locator('#trigger-a').click();
    await page.waitForSelector('.dropdown-menu.show');

    await page.locator('#trigger-b').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('zoom', async ({ page }) => {
    await page.goto('dropdown/basic');

    // Set the zoom
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.evaluate(() => {
      (document.body.style as any).zoom = '110%';
    });

    await page.locator('ix-button').click();
    await page.waitForSelector('.dropdown-menu.show');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
