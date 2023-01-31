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

regressionTest.describe('input', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('input/test/basic');
    expect(await page.screenshot()).toMatchSnapshot();
  });

  regressionTest('hover', async ({ page }) => {
    await page.goto('input/test/basic');
    const input = await page.waitForSelector('input');
    await input.hover();
    expect(await page.screenshot()).toMatchSnapshot();
  });

  regressionTest('focus', async ({ page }) => {
    await page.goto('input/test/basic');
    const input = await page.waitForSelector('input');
    await input.focus();
    expect(await page.screenshot()).toMatchSnapshot();
  });

  regressionTest('with value', async ({ page }) => {
    await page.goto('input/test/basic');
    const input = await page.waitForSelector('input');
    await input.fill('Example content');
    expect(await page.screenshot()).toMatchSnapshot();
  });
});
