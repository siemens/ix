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

regressionTest.describe('group', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('group/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('with context menu', async ({ page }) => {
    await page.goto('group/context-menu');
    await page.locator('ix-icon-button').click();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.05,
    });
  });

  regressionTest('selected', async ({ page }) => {
    await page.goto('group/basic');
    await page.click("[id='group']");
    await page.hover("[id='group']");
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('item selected', async ({ page }) => {
    await page.goto('group/basic');
    await page.locator('.btn-expand-header .sc-ix-icon-h').click();
    await page.locator('text=Example text 1').first().click();
    await page.locator('text=Example text 1').first().hover();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  // ix-icon-button
});
