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

regressionTest.describe('checkbox-group', () => {
  regressionTest('direction column', async ({ page }) => {
    await page.goto(`checkbox-group/basic`);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('direction row', async ({ page }) => {
    await page.goto(`checkbox-group/basic`);
    const checkboxGroup = await page.locator('ix-checkbox-group');
    await checkboxGroup.evaluate((el: HTMLIxCheckboxGroupElement) => {
      el.direction = 'row';
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
