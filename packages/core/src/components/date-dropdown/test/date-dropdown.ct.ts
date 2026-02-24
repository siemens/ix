/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';
import { DateTime } from 'luxon';
import { DateDropdownOption } from '../date-dropdown.types';

const DATE_DROPDOWN_SELECTOR = 'ix-date-dropdown';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-date-dropdown></ix-date-dropdown>`);
  const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
  await expect(dateDropdown).toHaveClass(/hydrated/);
});

regressionTest.describe('date dropdown tests', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-date-dropdown from="2023/11/01"></ix-date-dropdown>`);

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
        // TODO (IX-1870): refactor event signatures to match internal logic with undefined values
        from: undefined as any,
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

        elementToTest.dateRangeId = 'today';
        elementToTest.dateRangeOptions = dateRangeOptions;
      },
      [rangeOptions]
    );
  });

  regressionTest(
    'select different date interval and get date',
    async ({ page }) => {
      const dateDropdown = page.locator('ix-date-dropdown');
      await dateDropdown.click();

      const dropdown = dateDropdown.locator('#date-dropdown');
      await expect(dropdown).toHaveClass(/show/);

      const intervalOptionsButton = dateDropdown.getByRole('button', {
        name: /Last 7 days/,
      });
      await intervalOptionsButton.click();

      await page.keyboard.press('Escape');
      await expect(dateDropdown.locator('#date-dropdown')).not.toHaveClass(
        /show/
      );
      await expect(dateDropdown).toContainText('2026/02/17 - 2026/02/24');

      const selectedDateRange = await dateDropdown.evaluate(
        (el: HTMLIxDateDropdownElement) => el.getDateRange()
      );
      const endDate = DateTime.now();
      const startDate = endDate.minus({
        day: 7,
      });

      expect(selectedDateRange).toStrictEqual({
        from: startDate.toFormat('yyyy/LL/dd'),
        to: endDate.toFormat('yyyy/LL/dd'),
        id: 'last-7-days',
        label: 'Last 7 days',
      });
    }
  );

  regressionTest(
    'check if dateRangeChange event is fired',
    async ({ page }) => {
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
      const intervalOptionsButton = dateDropdown.getByRole('button', {
        name: /Last 7 days/,
      });
      await intervalOptionsButton.click();

      const dateRangeChangeEvent = await eventPromise;
      expect(JSON.parse(dateRangeChangeEvent)).toStrictEqual({
        from: today
          .minus({
            day: 7,
          })
          .toFormat(format),
        to: today.toFormat(format),
        id: 'last-7-days',
        label: 'Last 7 days',
      });
    }
  );

  regressionTest('check initial date', async ({ page }) => {
    const dateDropDownButton = page.locator(DATE_DROPDOWN_SELECTOR);
    await expect(dateDropDownButton).toHaveClass(/hydrated/);

    const initialSetDate = await dateDropDownButton.evaluate(
      (el: HTMLIxDateDropdownElement) => el.getDateRange()
    );

    const endDate = DateTime.now();
    const startDate = endDate;

    expect(initialSetDate).toEqual({
      from: startDate.toFormat('yyyy/LL/dd'),
      to: endDate.toFormat('yyyy/LL/dd'),
      id: 'today',
      label: 'Today',
    });
  });
});

regressionTest('set date from a button', async ({ mount, page }) => {
  await mount(
    `<ix-date-dropdown from="2024/02/16"></ix-date-dropdown><ix-button id="set-tomorrow"></ix-button>`
  );
  const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
  const setButton = page.locator('#set-tomorrow');
  await expect(dateDropdown).toHaveClass(/hydrated/);

  await setButton.click();

  await dateDropdown.evaluate((el: HTMLIxDateDropdownElement) => {
    el.from = '2024/02/17';
    el.to = '2024/02/27';
    return el.getDateRange();
  });
  const button = dateDropdown.locator('[data-date-dropdown-trigger]');
  await expect(button).toHaveText(/2024\/02\/17 \- 2024\/02\/27/);
});

regressionTest('select different year', async ({ mount, page }) => {
  await mount(`<ix-date-dropdown from="2024/02/16"></ix-date-dropdown>`);
  const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);

  await expect(dateDropdown).toHaveClass(/hydrated/);
  await expect(dateDropdown).toBeVisible();

  const dateDropdownTrigger = dateDropdown.getByTestId('date-dropdown-trigger');
  await dateDropdownTrigger.click();
  await expect(dateDropdownTrigger).toBeVisible();

  const datePickerDropdown = dateDropdown.getByTestId('date-dropdown');
  await expect(datePickerDropdown).toBeVisible();

  const datepicker = datePickerDropdown.locator('ix-date-picker');

  const yearContainer = datepicker.getByRole('button', { name: 'Select year' });
  await yearContainer.click();

  await expect(yearContainer).toHaveAttribute('aria-expanded', 'true');

  const year2020 = yearContainer.getByRole('menuitem', { name: '2020' });
  await year2020.click();

  const monthContainer = datepicker.getByRole('button', {
    name: 'Select month',
  });
  await monthContainer.click();
  await expect(monthContainer).toHaveAttribute('aria-expanded', 'true');

  const march2020 = monthContainer.getByRole('menuitem', {
    name: 'March 2020',
  });

  await march2020.click();

  await expect(yearContainer).toHaveText(/2020/);
  await expect(monthContainer).toHaveText(/March/);
});

regressionTest('disable', async ({ mount, page }) => {
  await mount(`<ix-date-dropdown disabled></ix-date-dropdown>`);
  const dateDropdown = page.locator('ix-date-dropdown');

  const trigger = page.locator('[data-date-dropdown-trigger]');
  await expect(trigger).toHaveAttribute('disabled');

  await dateDropdown.click();

  const dropdown = dateDropdown.locator('[data-date-dropdown]');
  await expect(dropdown).not.toBeVisible();
});

regressionTest(
  'close dropdown after disabled property = true',
  async ({ mount, page }) => {
    await mount(`<ix-date-dropdown></ix-date-dropdown>`);
    const dateDropdown = page.locator('ix-date-dropdown');
    await dateDropdown.click();
    await dateDropdown.evaluate((dd: HTMLIxDateDropdownElement) => {
      dd.disabled = true;
    });
    const dropdown = dateDropdown.locator('[data-date-dropdown]');
    await expect(dropdown).not.toBeVisible();
  }
);
