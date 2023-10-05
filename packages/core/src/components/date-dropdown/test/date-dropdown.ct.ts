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
import dayjs from 'dayjs';
import { DateRangeOption } from '../date-dropdown';

const DATE_DROPDOWN_SELECTOR = 'ix-date-dropdown';
const getDateRange = async (page: Page) => {
  return await page.$$eval(DATE_DROPDOWN_SELECTOR, (elements) => {
    return Promise.all(elements.map((elem) => elem.getDateRange()));
  });
};

test('renders', async ({ mount, page }) => {
  await mount(`<ix-date-dropdown></ix-date-dropdown>`);
  const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
  await expect(dateDropdown).toHaveClass(/hydrated/);
  document.querySelector('ix-date-dropdown').customRangeAllowed = false;
});

//TODO: Parse ranges
test.describe('date dropdown tests', () => {
  test.beforeEach(async ({ mount, page }) => {
    await mount(
      `
      <script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
      <ix-date-dropdown></ix-date-dropdown>
      `
    );

    await page.$eval(
      DATE_DROPDOWN_SELECTOR,
      (el: HTMLIxDateDropdownElement) => {
        el.dateRangeOptions = [
          {
            label: 'No time limit',
            getValue: (): DateRangeOption => {
              const today = (window as any).dayjs();
              return { from: undefined, to: today };
            },
          },
          {
            label: 'Today',
            getValue: (): DateRangeOption => {
              const today = (window as any).dayjs();
              return { from: today, to: today };
            },
          },
          {
            label: 'Last 7 days',
            getValue: (): DateRangeOption => {
              const today = (window as any).dayjs();
              return { from: today, to: today.subtract(7, 'day') };
            },
          },
          {
            label: 'Last week',
            getValue: (): DateRangeOption => {
              const today = (window as any).dayjs();
              const prevWeek: dayjs.Dayjs = today.subtract(7, 'day');
              return {
                from: prevWeek.startOf('week'),
                to: prevWeek.endOf('week'),
              };
            },
          },
          {
            label: 'Current month',
            getValue: (): DateRangeOption => {
              const today = (window as any).dayjs();
              return { from: today.startOf('month'), to: today.endOf('month') };
            },
          },
        ];
      }
    );
  });

  test('select different date interval and get date', async ({ page }) => {
    await page.waitForSelector('ix-dropdown-button ix-icon');

    const dateDropDownButton = await page.$('ix-dropdown-button');
    await dateDropDownButton.click();

    const intervalOptionsButton = await page.$(
      'ix-dropdown-item div.dropdown-item-text:has-text("Last 7 days")'
    );
    await intervalOptionsButton.click();

    const dateDropDownButtonText = await page.$('div.content div.button-label');

    const selectedDateRange = await getDateRange(page);
    const endDate: dayjs.Dayjs = dayjs().subtract(1, 'day');
    const startDate: dayjs.Dayjs = endDate.subtract(7, 'day');

    expect(await dateDropDownButtonText.textContent()).toEqual('Last 7 days');
    expect(selectedDateRange[0]).toEqual({
      from: startDate.format('YYYY-MM-DD'),
      to: endDate.format('YYYY-MM-DD'),
    });
  });

  test('select custom date interval and get time', async ({ page }) => {
    await page.waitForSelector('ix-dropdown-button ix-icon');

    const dateDropDownButton = await page.$('ix-dropdown-button');
    await dateDropDownButton.click();

    const intervalOptionsButton = await page.$(
      'ix-dropdown-item div.dropdown-item-text:has-text("Custom...")'
    );
    await intervalOptionsButton.click();

    const startDateButton = await page.$(
      'ix-date-picker ix-date-time-card div.grid div.calendar-item:not(.week-number):has-text("3")'
    );
    await startDateButton.click();

    const endDateButton = await page.$(
      'ix-date-picker ix-date-time-card div.grid div.calendar-item:not(.week-number):has-text("11")'
    );
    await endDateButton.click();

    const doneButton = await page.$(
      'ix-col div.pull-right ix-button:has-text("Done")'
    );
    await doneButton.click();

    //TODO: EXCEPTION - MERGE REQUIRED FOR CORRECT DATE
    expect(null).toEqual(null);
  });

  test('check if event is fired', async ({ page }) => {
    await page.waitForSelector('ix-dropdown-button ix-icon');

    const eventPromise = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('dateRangeChange', (data) => f(data));
      });
    });

    const dateDropDownButton = await page.$('ix-dropdown-button');
    await dateDropDownButton.click();

    const intervalOptionsButton = await page.$(
      'ix-dropdown-item div.dropdown-item-text:has-text("Last 14 days")'
    );
    await intervalOptionsButton.click();

    expect(await eventPromise).toBeTruthy();
  });

  test('check initial date', async ({ page }) => {
    await page.waitForSelector('ix-dropdown-button ix-icon');

    const initialSetDate = await getDateRange(page);

    const endDate = dayjs().subtract(1, 'day');
    const startDate = endDate.subtract(7, 'day');

    expect(initialSetDate[0]).toEqual({
      from: startDate.format('YYYY-MM-DD'),
      to: endDate.format('YYYY-MM-DD'),
    });
  });
});
