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
import { DateTime } from 'luxon';
import { DateDropdownOption } from '../date-dropdown';

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
});

test.describe('date dropdown tests', () => {
  test.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-date-dropdown></ix-date-dropdown>`);

    const today = DateTime.now();
    const format = 'yyyy/LL/dd';
    const prevWeek = today.minus({
      day: 7,
    });

    const dateDropdown = page.locator('ix-date-dropdown');

    const rangeOptions: DateDropdownOption[] = [
      {
        id: 'no-time',
        label: 'No time limit',
        from: undefined,
        to: today.toFormat(format),
      },
      {
        id: 'today',
        label: 'Today',
        from: today.toFormat(format),
        to: today.toFormat(format),
      },
      {
        id: 'last-7-days',
        label: 'Last 7 days',
        from: today
          .minus({
            day: 7,
          })
          .toFormat(format),
        to: today.toFormat(format),
      },
      {
        id: 'last-week',
        label: 'Last week',
        from: prevWeek.startOf('week').toFormat(format),
        to: prevWeek.endOf('week').toFormat(format),
      },
      {
        id: 'current-month',
        label: 'Current month',
        from: today.startOf('month').toFormat(format),
        to: today.endOf('month').toFormat(format),
      },
    ];

    await dateDropdown.evaluate(
      (el, [dateRangeOptions]) => {
        const elementToTest = el as HTMLIxDateDropdownElement;

        elementToTest.initialSelectedDateRangeName = 'today';
        elementToTest.customRangeAllowed = true;
        elementToTest.dateRangeOptions = dateRangeOptions;
      },
      [rangeOptions]
    );
  });

  test('select different date interval and get date', async ({ page }) => {
    const dateDropdown = page.locator('ix-date-dropdown');
    await dateDropdown.click();

    const intervalOptionsButton = dateDropdown.getByRole('button', {
      name: 'Last 7 days',
    });
    await intervalOptionsButton.click();

    const button = dateDropdown.locator('ix-button');
    await expect(button).toContainText(/Last 7 days/);

    const selectedDateRange = await dateDropdown.evaluate(
      (el: HTMLIxDateDropdownElement) => el.getDateRange()
    );
    const endDate = DateTime.now();
    const startDate = endDate.minus({
      day: 7,
    });

    expect(selectedDateRange).toEqual({
      from: startDate.toFormat('yyyy/LL/dd'),
      to: endDate.toFormat('yyyy/LL/dd'),
    });
  });

  test('select custom date interval and get time', async ({ page }) => {
    const dateDropDownButton = page.locator('ix-date-dropdown');
    await dateDropDownButton.click();

    const dropdown = dateDropDownButton.locator('ix-dropdown');
    await expect(dropdown).toHaveClass(/show/);

    const customItem = dateDropDownButton.getByText('Custom...');
    await customItem.click();

    const datepicker = dateDropDownButton.locator('ix-date-picker-rework');
    const startDay = datepicker
      .locator('[date-calender-day]')
      .getByText('3', { exact: true });
    const endDay = datepicker
      .locator('[date-calender-day]')
      .getByText('11', { exact: true });

    await startDay.click();
    await endDay.click();

    const dateDoneButton = dateDropDownButton.getByRole('button', {
      name: 'Done',
    });

    await dateDoneButton.click();

    const button = dateDropDownButton.locator('[data-date-dropdown-trigger]');
    await expect(button).toHaveText(/2023\/11\/03 \— 2023\/11\/11/);
  });

  test('check if dateRangeChange event is fired', async ({ page }) => {
    const today = DateTime.now();
    const format = 'yyyy/LL/dd';

    const dateDropdown = page.locator('ix-date-dropdown');
    await expect(dateDropdown).toHaveClass(/hydrated/);

    const eventPromise = dateDropdown.evaluate((e) => {
      return new Promise<any>((resolve) => {
        e.addEventListener('dateRangeChange', (event: any) =>
          // Using JSON.stringify to deserialize js object between chrome instance and test
          resolve(JSON.stringify(event.detail))
        );
      });
    });

    await dateDropdown.click();
    const intervalOptionsButton = page.locator(
      'ix-dropdown-item div.dropdown-item-text:has-text("Last 7 days")'
    );
    await intervalOptionsButton.click();

    const dateRangeChangeEvent = await eventPromise;
    expect(dateRangeChangeEvent).toEqual(
      JSON.stringify({
        from: today
          .minus({
            day: 7,
          })
          .toFormat(format),
        to: today.toFormat(format),
      })
    );
  });

  test('check if dateRangeSelect event is fired', async ({ page }) => {
    const dateDropdown = page.locator('ix-date-dropdown');
    await dateDropdown.click();

    const dropdown = dateDropdown.locator('ix-dropdown[data-date-dropdown]');
    await expect(dropdown).toHaveClass(/show/);

    const customItem = dateDropdown.getByText('Custom...');
    await customItem.click();

    const datepicker = dateDropdown.locator('ix-date-picker-rework');
    const startDay = datepicker
      .locator('[date-calender-day]')
      .getByText('3', { exact: true });
    const endDay = datepicker
      .locator('[date-calender-day]')
      .getByText('11', { exact: true });

    await startDay.click();
    await endDay.click();

    const dateDoneButton = dateDropdown.getByRole('button', {
      name: 'Done',
    });

    const eventPromise = dateDropdown.evaluate((elm) => {
      return new Promise<any>((resolve) => {
        elm.addEventListener('dateRangeSelect', (event: any) =>
          // Using JSON.stringify to deserialize js object between chrome instance and test
          resolve(JSON.stringify(event.detail))
        );
      });
    });

    await dateDoneButton.click();
    await expect(dropdown).not.toHaveClass(/show/);

    const button = dateDropdown.locator('[data-date-dropdown-trigger]');
    await expect(button).toHaveText(/2023\/11\/03 \— 2023\/11\/11/);

    const dateRangeSelectEvent = await eventPromise;
    expect(dateRangeSelectEvent).toEqual(
      JSON.stringify({
        from: '2023/11/03',
        to: '2023/11/11',
      })
    );
  });

  test('check initial date', async ({ page }) => {
    const dateDropDownButton = page.locator('ix-date-dropdown');
    await expect(dateDropDownButton).toHaveClass(/hydrated/);

    const initialSetDate = await getDateRange(page);

    const endDate = DateTime.now();
    const startDate = endDate;

    expect(initialSetDate[0]).toEqual({
      from: startDate.toFormat('yyyy/LL/dd'),
      to: endDate.toFormat('yyyy/LL/dd'),
    });
  });
});
