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

regressionTest.describe('group', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('group/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('with context menu', async ({ page }) => {
    await page.goto('group/context-menu');
    await page.locator('ix-icon-button').click();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('selected', async ({ page }) => {
    await page.goto('group/basic');
    await page.click("[id='group']");
    await page.hover("[id='group']");
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('header overflow', async ({ page }) => {
    await page.goto('group/overflow');
    await page.click("[id='group']");
    await page.hover("[id='group']");
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('item selected', async ({ page }) => {
    await page.goto('group/basic');
    await page.locator('.btn-expand-header ix-icon').click();
    await page.locator('text=Example text 1').first().click();
    await page.locator('text=Example text 2').first().hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
  regressionTest('check if suppress header works', async ({ page }) => {
    await page.goto('group/suppressSelection');
    await page.locator('.btn-expand-header ix-icon').click();
    await page.locator('text=Example text 1').first().click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
