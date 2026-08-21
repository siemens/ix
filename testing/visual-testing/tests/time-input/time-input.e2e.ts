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

regressionTest.describe('time input', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('time-input/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });

  regressionTest('dropdown open', async ({ page }) => {
    await page.goto('time-input/basic');

    const timeInput = page.locator('ix-time-input').first();
    const input = timeInput.locator('input');
    await input.click();
    await expect(timeInput.getByTestId('time-dropdown')).toHaveClass(/show/);
    await expect(input).toBeFocused();
    await page.mouse.move(5, 5, { steps: 10 });

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('validation', async ({ page }) => {
    await page.goto('time-input/validation');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });
});
