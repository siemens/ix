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

const DATE_INPUT_SELECTOR = 'ix-date-input';
const getDateInputObj = (page: Page) => {
  return page.$eval(DATE_INPUT_SELECTOR, (el: HTMLIxDateInputElement) =>
    el.getCurrentInput()
  );
};

test.describe('date input tests single', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(`<ix-date-input range="false"></ix-date-input>`);
  });

  test('renders', async ({ page }) => {
    const dateInput = page.locator(DATE_INPUT_SELECTOR);
    await expect(dateInput).toHaveClass(/hydrated/);
  });

  test('no initial value', async ({ page }) => {
    expect(await getDateInputObj(page)).toEqual({
      from: undefined,
      to: undefined,
    });
  });

  test('entered date is selected', async ({ page }) => {
    const testDate = '2023/02/15';

    await page.getByPlaceholder('YYYY/MM/DD').click();
    await page.getByPlaceholder('YYYY/MM/DD').fill(testDate);

    const month = page
      .locator('ix-button')
      .filter({ hasText: 'February 2023' });
    const day = page.getByText('15', { exact: true });

    await expect(month).toHaveClass(/hydrated/);
    await expect(day).toHaveClass(/selected/);
    expect(await getDateInputObj(page)).toEqual({
      from: testDate,
      to: undefined,
    });
  });

  test('selected date is entered in input', async ({ page }) => {
    await page.$eval(DATE_INPUT_SELECTOR, (el: HTMLIxDateInputElement) => {
      el.from = '2023/01/01';
    });

    await page.getByPlaceholder('YYYY/MM/DD').click();
    await page.getByText('13', { exact: true }).click();

    expect(await getDateInputObj(page)).toEqual({
      from: '2023/01/13',
      to: undefined,
    });
    expect(await page.locator('input').inputValue()).toEqual('2023/01/13');
  });

  test('clear button clears input', async ({ page }) => {
    await page.getByPlaceholder('YYYY/MM/DD').fill('2023/01/01');
    await page.locator('.icon-button').first().click();

    expect(await getDateInputObj(page)).toEqual({
      from: undefined,
      to: undefined,
    });
  });
});

test.describe('date input tests range', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(`<ix-date-input range="true"></ix-date-input>`);
  });

  test('renders', async ({ page }) => {
    const dateInput = page.locator(DATE_INPUT_SELECTOR);
    await expect(dateInput).toHaveClass(/hydrated/);
  });

  test('no initial value', async ({ page }) => {
    expect(await getDateInputObj(page)).toEqual({
      from: undefined,
      to: undefined,
    });
  });

  test('entered dates are selected', async ({ page }) => {
    const testDate1 = '2023/02/15';
    const testDate2 = '2023/02/21';

    await page.getByPlaceholder('YYYY/MM/DD').nth(0).click();
    await page.getByPlaceholder('YYYY/MM/DD').nth(0).fill(testDate1);
    await page.getByPlaceholder('YYYY/MM/DD').nth(1).fill(testDate2);

    const month = page
      .locator('ix-button')
      .filter({ hasText: 'February 2023' });
    const day1 = page.getByText('15', { exact: true });
    const day2 = page.getByText('21', { exact: true });

    await expect(month).toHaveClass(/hydrated/);
    await expect(day1).toHaveClass(/selected/);
    await expect(day2).toHaveClass(/selected/);
    expect(await getDateInputObj(page)).toEqual({
      from: testDate1,
      to: testDate2,
    });
  });

  test('selected dates are entered in inputs', async ({ page }) => {
    await page.$eval(DATE_INPUT_SELECTOR, (el: HTMLIxDateInputElement) => {
      el.from = '2023/01/01';
      el.to = '2023/01/01';
    });

    await page.locator('svg').filter({ hasText: 'chevron-down-small' }).click();
    await page.getByText('13', { exact: true }).click();
    await page.getByText('21', { exact: true }).click();

    expect(await getDateInputObj(page)).toEqual({
      from: '2023/01/13',
      to: '2023/01/21',
    });
    await expect(page.locator('input').nth(0)).toHaveValue('2023/01/13');
    await expect(page.locator('input').nth(1)).toHaveValue('2023/01/21');
  });

  test('clear button clears both inputs', async ({ page }) => {
    await page.getByPlaceholder('YYYY/MM/DD').nth(0).fill('2023/01/01');
    await page.getByPlaceholder('YYYY/MM/DD').nth(1).fill('2023/01/02');
    await page.locator('.icon-button').first().click();

    expect(await getDateInputObj(page)).toEqual({
      from: undefined,
      to: undefined,
    });
  });
});
