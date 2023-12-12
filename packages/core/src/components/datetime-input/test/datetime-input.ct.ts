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
    await mount(`<ix-datetime-input></ix-datetime-input>`);
  });

  test('renders', async ({ page }) => {
    const datetimeInput = page.locator(DATETIME_INPUT_SELECTOR);
    await expect(datetimeInput).toHaveClass(/hydrated/);
  });

  test('no initial value', async ({ page }) => {
    expect(await getDatetimeInputObj(page)).toStrictEqual({
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
    expect(await getDatetimeInputObj(page)).toStrictEqual({
      fromDate: testDate,
      toDate: undefined,
      fromTime: testTime,
      toTime: undefined,
    });
  });

  test('selected date and time are entered in inputs', async ({ page }) => {
    const testDate = '2023/01/13';
    const testTime = '23:01:01';

    await page.$eval(
      DATETIME_INPUT_SELECTOR,
      (el: HTMLIxDatetimeInputElement) => {
        el.fromDate = '2023/01/01';
        el.fromTime = '00:00:00';
      }
    );

    await page
      .getByRole('button')
      .filter({ hasText: 'chevron-down-small' })
      .click();
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

    expect(await getDatetimeInputObj(page)).toStrictEqual({
      fromDate: testDate,
      fromTime: testTime,
      toDate: undefined,
      toTime: undefined,
    });
    await expect(page.getByPlaceholder('YYYY/MM/DD')).toHaveValue(testDate);
    await expect(page.getByPlaceholder('HH:mm:ss')).toHaveValue(testTime);
  });

  test('clear button clears inputs', async ({ page }) => {
    await page.getByPlaceholder('YYYY/MM/DD').fill('2023/01/01');
    await page.getByPlaceholder('HH:mm:ss').fill('00:00:00');
    await page.locator('.icon-button').first().click();

    expect(await getDatetimeInputObj(page)).toStrictEqual({
      fromDate: undefined,
      fromTime: undefined,
      toDate: undefined,
      toTime: undefined,
    });
  });
});

test.describe('datetime input tests range', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(`<ix-datetime-input range="true"></ix-datetime-input>`);
  });

  test('renders', async ({ page }) => {
    const datetimeInput = page.locator(DATETIME_INPUT_SELECTOR);
    await expect(datetimeInput).toHaveClass(/hydrated/);
  });

  test('no initial values', async ({ page }) => {
    expect(await getDatetimeInputObj(page)).toStrictEqual({
      fromDate: undefined,
      toDate: undefined,
      fromTime: undefined,
      toTime: undefined,
    });
  });

  test('entered dates and times are selected', async ({ page }) => {
    const testDate1 = '2023/02/15';
    const testTime1 = '12:34:45';
    const testDate2 = '2023/02/21';
    const testTime2 = '00:34:21';

    // first input
    await page
      .getByRole('button')
      .filter({ hasText: 'chevron-down-small' })
      .nth(0)
      .click();
    await page.getByPlaceholder('YYYY/MM/DD').nth(0).fill(testDate1);
    await page.getByPlaceholder('HH:mm:ss').nth(0).fill(testTime1);

    const month1 = page
      .locator('ix-button')
      .filter({ hasText: 'February 2023' })
      .nth(0);
    const day1 = page.getByText('15', { exact: true }).nth(0);
    await expect(month1).toHaveClass(/hydrated/);
    await expect(day1).toHaveClass(/selected/);

    // second input
    await page
      .getByRole('button')
      .filter({ hasText: 'chevron-down-small' })
      .nth(1)
      .click();
    await page.getByPlaceholder('YYYY/MM/DD').nth(1).fill(testDate2);
    await page.getByPlaceholder('HH:mm:ss').nth(1).fill(testTime2);

    const month2 = page
      .locator('ix-button')
      .filter({ hasText: 'February 2023' })
      .nth(1);
    const day2 = page.getByText('21', { exact: true }).nth(1);
    await expect(month2).toHaveClass(/hydrated/);
    await expect(day2).toHaveClass(/selected/);

    // overall value
    expect(await getDatetimeInputObj(page)).toStrictEqual({
      fromDate: testDate1,
      toDate: testDate2,
      fromTime: testTime1,
      toTime: testTime2,
    });
  });

  test('clear button clears first input', async ({ page }) => {
    await page.getByPlaceholder('YYYY/MM/DD').nth(0).fill('2023/01/01');
    await page.getByPlaceholder('HH:mm:ss').nth(0).fill('00:00:00');
    await page.getByPlaceholder('YYYY/MM/DD').nth(1).fill('2023/01/09');
    await page.getByPlaceholder('HH:mm:ss').nth(1).fill('00:00:00');
    await page.locator('.icon-button').first().click();

    expect(await getDatetimeInputObj(page)).toStrictEqual({
      fromDate: undefined,
      fromTime: undefined,
      toDate: '2023/01/09',
      toTime: '00:00:00',
    });
  });
});
