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

regressionTest.describe('event-list', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('event-list/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('compact', async ({ page }) => {
    await page.goto('event-list/compact');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('chevron', async ({ page }) => {
    await page.goto('event-list/chevron');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('custom-height', async ({ page }) => {
    await page.goto('event-list/custom-height');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('hover', async ({ page }) => {
    await page.goto('event-list/basic');
    await (await page.waitForSelector('text="Text 3"')).hover();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('outline', async ({ page }) => {
    await page.goto('event-list/basic');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('outline selected', async ({ page }) => {
    await page.goto('event-list/basic');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('outline compact', async ({ page }) => {
    await page.goto('event-list/compact');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('outline compact selected', async ({ page }) => {
    await page.goto('event-list/compact');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
