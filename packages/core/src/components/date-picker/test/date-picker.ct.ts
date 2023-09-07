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

const DATE_PICKER_SELECTOR = 'ix-date-picker';
const getDateObj = (page: Page) => {
  return page.$eval(DATE_PICKER_SELECTOR, (el: HTMLIxDatePickerElement) =>
    el.getCurrentDate()
  );
};

test('renders', async ({ mount, page }) => {
  await mount(`<ix-date-picker></ix-date-picker>`);
  const datePicker = page.locator(DATE_PICKER_SELECTOR);
  await expect(datePicker).toHaveClass(/hydrated/);
});

test.describe('date picker tests single', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-date-picker from="2023/09/05" range="false"></ix-date-picker>`
    );
  });

  test('date is selected', async ({ page }) => {
    expect(await getDateObj(page)).toEqual({
      from: '2023/09/05',
      to: undefined,
    });
  });

  test('select different date', async ({ page }) => {
    await page.getByText(/^19$/).click();

    expect(await getDateObj(page)).toEqual({
      from: '2023/09/19',
      to: undefined,
    });
  });

  test('select different date in next month', async ({ page }) => {
    // ">"-icon-button
    await page
      .locator('button')
      .filter({ has: page.locator('i') })
      .nth(1)
      .click();
    await page.getByText(/^31$/).click();

    expect(await getDateObj(page)).toEqual({
      from: '2023/10/31',
      to: undefined,
    });
  });

  test('select different date in previous month', async ({ page }) => {
    // "<"-icon-button
    await page
      .locator('button')
      .filter({ has: page.locator('i') })
      .nth(0)
      .click();
    await page.getByText(/^31$/).nth(1).click();

    expect(await getDateObj(page)).toEqual({
      from: '2023/08/31',
      to: undefined,
    });
  });

  test('select different date from specific month', async ({ page }) => {
    await page
      .locator('ix-button')
      .filter({ hasText: /^September 2023$/ })
      .locator('span')
      .click();
    await page
      .locator('div')
      .filter({ hasText: /^2021$/ })
      .first()
      .click();
    await page
      .locator('div')
      .filter({ hasText: /^January 2021$/ })
      .first()
      .click();
    await page.getByText(/^1$/).nth(1).click();

    expect(await getDateObj(page)).toEqual({
      from: '2021/01/01',
      to: undefined,
    });
  });

  test('select different date fires dateChange event', async ({ page }) => {
    const eventPromise = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('dateChange', (data) => f(data));
      });
    });

    await page.getByText(/^19$/).click();

    expect(await eventPromise).toBeTruthy();
  });
});

test.describe('date picker tests range', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-date-picker from="2023/09/05" to="2023/09/10"></ix-date-picker>`
    );
  });

  test('range is selected', async ({ page }) => {
    expect(await getDateObj(page)).toEqual({
      from: '2023/09/05',
      to: '2023/09/10',
    });
  });

  test('select different range', async ({ page }) => {
    await page.getByText(/^12$/).click();
    await page.getByText(/^17$/).click();

    expect(await getDateObj(page)).toEqual({
      from: '2023/09/12',
      to: '2023/09/17',
    });
  });

  test('select range spanning over 2 months', async ({ page }) => {
    await page.getByText(/^28$/).click();
    await page
      .locator('button')
      .filter({ has: page.locator('i') })
      .nth(1)
      .click();
    await page.getByText(/^5$/).click();

    expect(await getDateObj(page)).toEqual({
      from: '2023/09/28',
      to: '2023/10/05',
    });
  });

  test('select different range fires dateChange and dateRangeChange event', async ({ page }) => {
    const dateChangeEventPromise = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('dateChange', (data) => f(data));
      });
    });
    const dateRangeChangeEventPromise = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('dateRangeChange', (data) => f(data));
      });
    });

    await page.getByText(/^12$/).click();
    await page.getByText(/^17$/).click();

    expect(await dateChangeEventPromise).toBeTruthy();
    expect(await dateRangeChangeEventPromise).toBeTruthy();
  });

  test('done click fires dateSelect event', async ({ page }) => {
    const dateSelectEventPromise = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('dateSelect', (data) => f(data));
      });
    });

    await page.getByText('Done').click();

    expect(await dateSelectEventPromise).toBeTruthy();
  });
});
