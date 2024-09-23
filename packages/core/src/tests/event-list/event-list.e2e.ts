/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

const basicUrl = 'event-list/basic';
const compactUrl = 'event-list/compact';
const chevronUrl = 'event-list/chevron';
const customHeightUrl = 'event-list/custom-height';

async function pressTab(page: Page, count: number) {
  for (let i = 0; i < count; i++) {
    await page.keyboard.press('Tab');
  }
}

regressionTest.describe('event-list', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto(basicUrl);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('compact', async ({ page }) => {
    await page.goto(compactUrl);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('chevron', async ({ page }) => {
    await page.goto(chevronUrl);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('custom-height', async ({ page }) => {
    await page.goto(customHeightUrl);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('hover', async ({ page }) => {
    await page.goto(basicUrl);
    await (await page.waitForSelector('text="Text 3"')).hover();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('outline', async ({ page }) => {
    await page.goto(basicUrl);
    await pressTab(page, 2);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('outline selected', async ({ page }) => {
    await page.goto(basicUrl);
    await pressTab(page, 3);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('outline compact', async ({ page }) => {
    await page.goto(compactUrl);
    await pressTab(page, 2);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('outline compact selected', async ({ page }) => {
    await page.goto(compactUrl);
    await pressTab(page, 3);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
