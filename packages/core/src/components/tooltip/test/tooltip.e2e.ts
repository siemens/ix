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

regressionTest.describe('tooltip', () => {
  regressionTest('Long Text long words', async ({ page }) => {
    await page.goto('tooltip/test/basic');

    const tooltipTriggerHandler = await page.waitForSelector(
      '[data-tooltip="Test1"]'
    );

    await tooltipTriggerHandler.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.02,
    });
  });

  regressionTest('Short', async ({ page }) => {
    await page.goto('tooltip/test/basic');

    const tooltipTriggerHandler = await page.waitForSelector(
      '[data-tooltip="Test2"]'
    );

    await tooltipTriggerHandler.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.02,
    });
  });

  regressionTest('Long text short words', async ({ page }) => {
    await page.goto('tooltip/test/basic');

    const tooltipTriggerHandler = await page.waitForSelector(
      '[data-tooltip="Test3"]'
    );

    await tooltipTriggerHandler.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.02,
    });
  });
});
