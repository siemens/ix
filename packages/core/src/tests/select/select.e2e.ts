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

regressionTest.describe('select', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('select/basic');
    await page.locator('.chevron-down-container').click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('editable', async ({ page }) => {
    await page.goto('select/editable');
    await page.locator('.chevron-down-container').click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('mode-multiple', async ({ page }) => {
    await page.goto('select/mode-multiple');
    await page.locator('.chevron-down-container').click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('mode-multiple-overflow', async ({ page }) => {
    await page.goto('select/mode-multiple-overflow');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('mode-multiple-overflow scroll down', async ({ page }) => {
    await page.goto('select/mode-multiple-overflow');

    const inputHandle = await page.waitForSelector('div.chips');

    page.evaluate((menuElement) => {
      menuElement.scrollTop = 9999;
      menuElement.classList.add('__SCROLLED__');
    }, inputHandle);

    await page.waitForSelector('div.chips.__SCROLLED__');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('select/overflow');
    await page.locator('.chevron-down-container').click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('autoplacement', async ({ page }) => {
    await page.goto('select/autoplacement');
    await page.locator('.chevron-down-container').click();
    await page.waitForSelector('.dropdown-menu.show');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
