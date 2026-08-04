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

regressionTest.describe('toggle', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('toggle/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  ['valid', 'info', 'warning', 'invalid'].forEach((state) => {
    regressionTest(`validation states - ${state}`, async ({ page }) => {
      await page.goto(`toggle/basic`);
      page
        .locator('ix-toggle')
        .evaluateAll(
          (elements: HTMLIxToggleElement[], state) =>
            elements.forEach((el) => el.classList.add('ix-' + state)),
          state
        );
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
    });
  });

  regressionTest('disabled', async ({ page }) => {
    await page.goto('toggle/disabled');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
