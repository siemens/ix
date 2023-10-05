/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Page } from '@playwright/test';
import { test } from '@utils/test';

const DATETIME_INPUT_SELECTOR = 'ix-datetime-input';
const getDatetimeInputObj = (page: Page) => {
  return page.$eval(DATETIME_INPUT_SELECTOR, (el: HTMLIxDateInputElement) =>
    el.getCurrentInput()
  );
};

test.describe('datetime input tests single', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(`<ix-datetime-input range="false"></ix-datetime-input>`);
  });

  test('renders', async ({ page }) => {
    const dateInput = page.locator(DATETIME_INPUT_SELECTOR);
    await expect(dateInput).toHaveClass(/hydrated/);
  });

  test('no initial value', async ({ page }) => {
    expect(await getDatetimeInputObj(page)).toEqual({
      fromDate: undefined,
      toDate: undefined,
      fromTime: undefined,
      toTime: undefined,
    });
  });

  test('entered date and time are selected', async ({ page }) => {
    const testDate = '2023/02/15';
    const testTime = '12:34:45';

    await page.getByPlaceholder('YYYY/MM/DD').click();
    await page.getByPlaceholder('YYYY/MM/DD').fill(testDate);
    await page.getByPlaceholder('HH:mm:ss').fill(testTime);

    const month = page
      .locator('ix-button')
      .filter({ hasText: 'February 2023' });
    const day = page.getByText('15', { exact: true });

    await expect(month).toHaveClass(/hydrated/);
    await expect(day).toHaveClass(/selected/);
    expect(await getDatetimeInputObj(page)).toEqual({
      from: testDate,
      to: undefined,
      fromTime: testTime,
      toTime: undefined,
    });
  });

  test('selected date and time are entered in inputs', async ({ page }) => {
    await page.$eval(
      DATETIME_INPUT_SELECTOR,
      (el: HTMLIxDatetimeInputElement) => {
        el.fromDate = '2023/01/01';
        el.fromTime = '00:00:00';
      }
    );

    await page.getByPlaceholder('YYYY/MM/DD').click();
    await page.getByText('13', { exact: true }).click();
    await page
      .getByRole('button')
      .filter({ hasText: 'chevron-up' })
      .nth(2)
      .click();
    await page
      .getByRole('button')
      .filter({ hasText: 'chevron-up' })
      .nth(1)
      .click();
    await page
      .getByRole('button')
      .filter({ hasText: 'chevron-down' })
      .nth(1)
      .click();

    expect(await getDatetimeInputObj(page)).toBe({
      fromDate: '2023/01/13',
      toDate: undefined,
      fromTime: '23:01:01',
      toTime: undefined,
    });
  });
});
