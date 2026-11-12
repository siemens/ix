/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { focusWithKeyboard, regressionTest } from '@utils/test';

regressionTest.describe('html-tags', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('html-tags/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest(
  'should show focus-visible outline on link',
  async ({ page }) => {
    await page.goto('html-tags/basic');

    await focusWithKeyboard(page, page.locator('a[href]').first());

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  }
);
