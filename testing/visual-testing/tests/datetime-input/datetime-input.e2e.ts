/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest.describe('datetime-input', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('datetime-input/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });

  regressionTest('dropdown open', async ({ page }) => {
    await page.goto('datetime-input/basic');

    const datetimeInput = page.locator('ix-datetime-input').first();
    await datetimeInput.getByRole('button', { name: 'Toggle calendar' }).click();
    await expect(datetimeInput.getByTestId('datetime-dropdown')).toHaveClass(
      /show/
    );

    await page.keyboard.press('Tab');
    await expect(datetimeInput.locator('input')).not.toBeFocused();
    await page.mouse.move(5, 5, { steps: 10 });

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });

  regressionTest('validation', async ({ page }) => {
    await page.goto('datetime-input/validation');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixels: 25,
    });
  });
});
