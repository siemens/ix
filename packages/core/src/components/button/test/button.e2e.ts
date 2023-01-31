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

regressionTest.describe('button: basic', () => {
  regressionTest('should not have visual regressions', async ({ page }) => {
    await page.goto('button/test/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('should have an hover effect', async ({ page }) => {
    await page.goto('button/test/basic');

    const bodyElement = await page.waitForSelector('body');

    await page.evaluate((body) => {
      body.querySelectorAll('button').forEach((b) => b.classList.add('hover'));
    }, bodyElement);

    await page.waitForSelector('ix-button > button.hover');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.04,
    });
  });

  regressionTest('should have an active effect', async ({ page }) => {
    await page.goto('button/test/basic');

    const bodyElement = await page.waitForSelector('body');

    await page.evaluate((body) => {
      body.querySelectorAll('button').forEach((b) => b.classList.add('active'));
    }, bodyElement);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
