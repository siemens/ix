/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('workflow-steps', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('workflow-steps/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('overflow', async ({ page }) => {
    await page.goto('workflow-steps/overflow');

    const stepItem = await page.waitForSelector('ix-workflow-step');

    await stepItem.click();

    for (let index = 0; index < 20; index++) {
      page.keyboard.press('ArrowRight');
    }
    await page.waitForTimeout(300);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
