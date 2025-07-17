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

regressionTest.describe('radio-group', () => {
  regressionTest('direction column', async ({ page }) => {
    await page.goto(`radio-group/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('direction row', async ({ page }) => {
    await page.goto(`radio-group/basic`);
    const radioGroup = await page.locator('ix-radio-group');
    await radioGroup.evaluate((el: HTMLIxRadioGroupElement) => {
      el.direction = 'row';
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
