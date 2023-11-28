/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

const DATE_TIME_PICKER_SELECTOR = 'ix-datetime-picker-rework';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-datetime-picker-rework></ix-datetime-picker-rework>`);
  const datePicker = page.locator(DATE_TIME_PICKER_SELECTOR);
  await expect(datePicker).toHaveClass(/hydrated/);
});

test.describe('datetime picker tests single', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(
      `
      <ix-datetime-picker-rework
        range="false"
        from="1990/03/29"
        date-format="yyyy/LL/dd"
        time="09:10:12"
        time-format="HH:mm:ss"
        week-start-index="1"
      ></ix-datetime-picker-rework>
      `
    );
  });

  test('increment time units', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    const timeChangeEvent = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('timeChange', (data) => f(data));
      });
    });

    const incrementButtons = (
      await page.$$('ix-icon-button:has(svg title:has-text("chevron-up"))')
    ).slice(0, 3);

    for (const button of incrementButtons) {
      await button.click();
    }

    expect(await timeChangeEvent).toBeTruthy;
  });

  test('change date', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    const dateChangeEvent = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('dateChange', (data) => f(data));
      });
    });

    await page.getByText(/^17$/).click();

    expect(await dateChangeEvent).toBeTruthy;
  });
});
