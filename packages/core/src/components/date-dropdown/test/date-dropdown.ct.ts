/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Page } from '@playwright/test';
import {
  calendarDayCell,
  createDropdownPickerAccessor,
  dateChangeDetail,
  formatDateRange,
  formatDateTime,
  Mount,
  MountAttributes,
  mountHydrated,
  PENDING_SELECTION_DISMISSALS,
  recordEvents,
  regressionTest,
  tabUntilFocused,
} from '@utils/test';
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

      const dateRangeRegex = /\d{4}\/\d{2}\/\d{2} - \d{4}\/\d{2}\/\d{2}/;

      const button = dateDropdown.getByRole('button', {
        name: dateRangeRegex,
      });

      await expect(button).toBeVisible();
      await expect(dateDropdown).toHaveText(dateRangeRegex);

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
        isoFrom: startDate.toISODate(),
        isoTo: endDate.toISODate(),
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
        isoFrom: today.minus({ day: 7 }).toISODate(),
        isoTo: today.toISODate(),
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
      isoFrom: startDate.toISODate(),
      isoTo: endDate.toISODate(),
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

  const monthMarch = monthContainer.getByRole('menuitem', {
    name: 'March',
  });

  await monthMarch.click();

  await expect(yearContainer).toHaveText(/2020/);
  await expect(monthContainer).toHaveText(/March/);
});

regressionTest(
  're-selecting the same range moves the month dropdown back to the range year',
  async ({ mount, page }) => {
    // Without require confirmation picking a range closes the dropdown
    await mount(
      `<ix-date-dropdown locale="en" require-confirmation></ix-date-dropdown>`
    );
    const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
    await expect(dateDropdown).toHaveClass(/hydrated/);

    const rangeOptions: DateDropdownOption[] = [
      {
        id: 'fixed',
        label: 'Fixed range',
        from: '2024/02/16',
        to: '2024/02/20',
      },
      {
        id: 'other',
        label: 'Other range',
        from: '2024/05/01',
        to: '2024/05/31',
      },
    ];

    await dateDropdown.evaluate(
      (el, [dateRangeOptions]) => {
        const elementToTest = el as HTMLIxDateDropdownElement;

        elementToTest.dateRangeId = 'fixed';
        elementToTest.dateRangeOptions = dateRangeOptions;
      },
      [rangeOptions]
    );

    await dateDropdown.getByTestId('date-dropdown-trigger').click();

    const datepicker = dateDropdown
      .getByTestId('date-dropdown')
      .locator('ix-date-picker');

    // Navigate the calendar away from the year the range sits in.
    const yearContainer = datepicker.getByRole('button', {
      name: 'Select year',
    });
    await yearContainer.click();
    await yearContainer
      .getByRole('menuitem', { name: '2020', exact: true })
      .click();
    await expect(yearContainer).toHaveText(/2020/);

    // Re-selecting the already selected range only moves the calendar back.
    await dateDropdown.getByRole('button', { name: /Fixed range/ }).click();

    const monthContainer = datepicker.getByRole('button', {
      name: 'Select month',
    });
    await monthContainer.click();

    await expect(yearContainer).toHaveText(/2024/);
    await expect(
      monthContainer.getByRole('menuitem', { name: 'February' })
    ).toHaveAttribute('checked', '');
  }
);

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

regressionTest(
  'locale-dependent format produces correct isoFrom/isoTo',
  async ({ mount, page }) => {
    await mount(
      `<ix-date-dropdown locale="de" format="dd MMMM yyyy"></ix-date-dropdown>`
    );
    const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
    await expect(dateDropdown).toHaveClass(/hydrated/);

    await dateDropdown.evaluate((el: HTMLIxDateDropdownElement) => {
      el.from = '05 März 2023';
      el.to = '10 März 2023';
    });

    const range = await dateDropdown.evaluate((el: HTMLIxDateDropdownElement) =>
      el.getDateRange()
    );

    expect(range.from).toBe('05 März 2023');
    expect(range.to).toBe('10 März 2023');
    expect(range.isoFrom).toBe('2023-03-05');
    expect(range.isoTo).toBe('2023-03-10');
  }
);

regressionTest(
  'date range options with locale produce correct ISO dates',
  async ({ mount, page }) => {
    await mount(
      `<ix-date-dropdown locale="de" format="dd MMMM yyyy"></ix-date-dropdown>`
    );
    const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
    await expect(dateDropdown).toHaveClass(/hydrated/);

    const options: DateDropdownOption[] = [
      {
        id: 'march',
        label: 'March 2023',
        from: '01 März 2023',
        to: '31 März 2023',
      },
    ];

    await dateDropdown.evaluate(
      (el, [opts]) => {
        const dropdown = el as HTMLIxDateDropdownElement;
        dropdown.dateRangeOptions = opts;
        dropdown.dateRangeId = 'march';
      },
      [options]
    );

    const range = await dateDropdown.evaluate((el: HTMLIxDateDropdownElement) =>
      el.getDateRange()
    );

    expect(range.isoFrom).toBe('2023-03-01');
    expect(range.isoTo).toBe('2023-03-31');
  }
);

regressionTest(
  'marks the trigger expanded while the dropdown is open',
  async ({ mount, page }) => {
    await mount(`<ix-date-dropdown></ix-date-dropdown>`);
    const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
    const trigger = dateDropdown.getByTestId('date-dropdown-trigger');
    const dropdown = dateDropdown.locator('[data-date-dropdown]');

    await expect(trigger).not.toHaveClass(/\bactive\b/);

    await trigger.click();
    await expect(dropdown).toBeVisible();
    await expect(trigger).toHaveClass(/\bactive\b/);
    await expect(trigger.locator('button')).toHaveAttribute(
      'aria-expanded',
      'true'
    );

    await page.keyboard.press('Escape');
    await expect(dropdown).not.toBeVisible();
    await expect(trigger).not.toHaveClass(/\bactive\b/);
  }
);

// Dates used by the confirmation and dateSelect tests. Picked and preset
// dates stay in the month of `initialFrom`, which the picker shows on open.
const initialFrom = DateTime.fromISO('2024-05-10');
const initialTo = initialFrom.plus({ days: 2 });
const pickedFrom = initialFrom.plus({ days: 10 });
const pickedTo = pickedFrom.plus({ days: 2 });
const presetFrom = initialFrom.minus({ days: 5 });
const presetTo = presetFrom.plus({ days: 2 });

const dayCell = (page: Page, date: DateTime) =>
  calendarDayCell(page.locator('ix-date-dropdown ix-date-picker'), date);

const rangeEvent = (id: string, from: DateTime, to: DateTime) => ({
  id,
  ...dateChangeDetail(from, to),
});

const expectSelectedDays = async (page: Page, dates: DateTime[]) => {
  for (const date of dates) {
    await expect(dayCell(page, date)).toHaveAttribute('aria-selected', 'true');
  }
};

const mountDateDropdown = (
  mount: Mount,
  page: Page,
  attributes: MountAttributes = {}
) =>
  mountHydrated(mount, page, DATE_DROPDOWN_SELECTOR, {
    from: formatDateTime(initialFrom),
    to: formatDateTime(initialTo),
    ...attributes,
  });

const dateDropdownAccessor = (page: Page) =>
  createDropdownPickerAccessor(page, {
    host: DATE_DROPDOWN_SELECTOR,
    trigger: (host) => host.getByTestId('date-dropdown-trigger'),
    dropdown: (host) => host.getByTestId('date-dropdown'),
  });

regressionTest.describe('require confirmation', () => {
  const pickRange = async (page: Page, from: DateTime, to: DateTime) => {
    await dayCell(page, from).click();
    await dayCell(page, to).click();
  };

  regressionTest.beforeEach(async ({ mount, page }) => {
    await mountDateDropdown(mount, page, { 'require-confirmation': true });
  });

  regressionTest(
    'picking does not update the label or emit events',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      const events = await recordEvents(dateDropdown, [
        'dateRangeChange',
        'dateSelect',
      ]);

      await dateDropdownAccessor(page).open();
      await pickRange(page, pickedFrom, pickedTo);

      await expect(
        dateDropdown.getByTestId('date-dropdown-trigger')
      ).toContainText(formatDateRange(initialFrom, initialTo));
      expect(await events()).toEqual([]);
    }
  );

  regressionTest(
    'confirm is disabled until a different complete range is picked',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      const confirm = dateDropdown.getByRole('button', { name: 'Confirm' });

      await dateDropdownAccessor(page).open();
      await expect(confirm).toBeDisabled();

      await dayCell(page, pickedFrom).click();
      await expect(confirm).toBeDisabled();

      await dayCell(page, pickedTo).click();
      await expect(confirm).toBeEnabled();

      // Re-selecting the committed range leaves nothing to confirm
      await pickRange(page, initialFrom, initialTo);
      await expect(confirm).toBeDisabled();
    }
  );

  regressionTest('confirm applies the selection', async ({ page }) => {
    const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
    const events = await recordEvents(dateDropdown, [
      'dateRangeChange',
      'dateSelect',
    ]);

    await dateDropdownAccessor(page).open();
    await pickRange(page, pickedFrom, pickedTo);
    await dateDropdown.getByTestId('confirm').click();

    await dateDropdownAccessor(page).expectClosed();
    await expect(
      dateDropdown.getByTestId('date-dropdown-trigger')
    ).toContainText(formatDateRange(pickedFrom, pickedTo));

    const expected = rangeEvent('custom', pickedFrom, pickedTo);
    expect(await events()).toEqual([
      { type: 'dateRangeChange', detail: expect.objectContaining(expected) },
      { type: 'dateSelect', detail: expect.objectContaining(expected) },
    ]);
    expect(
      await dateDropdown.evaluate((el: HTMLIxDateDropdownElement) =>
        el.getDateRange()
      )
    ).toMatchObject(expected);
  });

  for (const dismissal of PENDING_SELECTION_DISMISSALS) {
    regressionTest(
      `${dismissal} discards the pending selection`,
      async ({ page }) => {
        const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
        const events = await recordEvents(dateDropdown, [
          'dateRangeChange',
          'dateSelect',
        ]);

        await dateDropdownAccessor(page).open();
        await pickRange(page, pickedFrom, pickedTo);
        await dateDropdownAccessor(page).dismiss(dismissal);

        await dateDropdownAccessor(page).expectClosed();
        await expect(
          dateDropdown.getByTestId('date-dropdown-trigger')
        ).toContainText(formatDateRange(initialFrom, initialTo));
        expect(await events()).toEqual([]);

        await dateDropdownAccessor(page).open();
        await expectSelectedDays(page, [initialFrom, initialTo]);
        await expect(dayCell(page, pickedFrom)).toHaveAttribute(
          'aria-selected',
          'false'
        );
      }
    );
  }

  regressionTest('confirm is reachable by keyboard', async ({ page }) => {
    const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);

    await dateDropdownAccessor(page).open();
    await pickRange(page, pickedFrom, pickedTo);
    await tabUntilFocused(page, 'Confirm');
    await page.keyboard.press('Enter');

    await dateDropdownAccessor(page).expectClosed();
    await expect(
      dateDropdown.getByTestId('date-dropdown-trigger')
    ).toContainText(formatDateRange(pickedFrom, pickedTo));
  });

  regressionTest(
    'predefined range is applied only on confirm',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      const options: DateDropdownOption[] = [
        {
          id: 'a',
          label: 'Range A',
          from: formatDateTime(presetFrom.minus({ days: 4 })),
          to: formatDateTime(presetFrom.minus({ days: 2 })),
        },
        {
          id: 'b',
          label: 'Range B',
          from: formatDateTime(presetFrom),
          to: formatDateTime(presetTo),
        },
      ];
      await dateDropdown.evaluate(
        (el: HTMLIxDateDropdownElement, dateRangeOptions) => {
          el.dateRangeOptions = dateRangeOptions;
        },
        options
      );
      const events = await recordEvents(dateDropdown, [
        'dateRangeChange',
        'dateSelect',
      ]);

      await dateDropdownAccessor(page).open();
      await dateDropdown.getByRole('button', { name: /Range B/ }).click();
      await expect(
        dateDropdown.getByTestId('date-dropdown-trigger')
      ).toContainText(formatDateRange(initialFrom, initialTo));
      await expectSelectedDays(page, [presetFrom, presetTo]);
      expect(await events()).toEqual([]);

      await dateDropdown.getByTestId('confirm').click();
      await expect(
        dateDropdown.getByTestId('date-dropdown-trigger')
      ).toContainText(formatDateRange(presetFrom, presetTo));

      const expected = rangeEvent('b', presetFrom, presetTo);
      expect(await events()).toEqual([
        { type: 'dateRangeChange', detail: expect.objectContaining(expected) },
        { type: 'dateSelect', detail: expect.objectContaining(expected) },
      ]);
    }
  );
});

regressionTest.describe('dateSelect without require confirmation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mountDateDropdown(mount, page);
  });

  regressionTest('renders no footer buttons', async ({ page }) => {
    const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
    await dateDropdownAccessor(page).open();
    await expect(dateDropdown.locator('ix-confirmation-footer')).toHaveCount(0);
  });

  regressionTest(
    'closes and emits once a complete range is picked',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      const events = await recordEvents(dateDropdown, [
        'dateRangeChange',
        'dateSelect',
      ]);

      await dateDropdownAccessor(page).open();
      await dayCell(page, pickedFrom).click();
      await dateDropdownAccessor(page).expectOpen();
      await dayCell(page, pickedTo).click();

      await dateDropdownAccessor(page).expectClosed();
      await expect(
        dateDropdown.getByTestId('date-dropdown-trigger')
      ).toContainText(formatDateRange(pickedFrom, pickedTo));

      const expected = expect.objectContaining({
        id: 'custom',
        from: formatDateTime(pickedFrom),
        to: formatDateTime(pickedTo),
      });
      await expect.poll(events).toEqual([
        {
          type: 'dateSelect',
          detail: expect.objectContaining({ to: undefined }),
        },
        { type: 'dateRangeChange', detail: expected },
        { type: 'dateSelect', detail: expected },
      ]);
    }
  );

  regressionTest(
    'closes once a predefined range is picked',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      await dateDropdown.evaluate(
        (el: HTMLIxDateDropdownElement, dateRangeOptions) => {
          el.dateRangeOptions = dateRangeOptions;
        },
        [
          {
            id: 'a',
            label: 'Range A',
            from: formatDateTime(initialFrom),
            to: formatDateTime(initialTo),
          },
          {
            id: 'b',
            label: 'Range B',
            from: formatDateTime(presetFrom),
            to: formatDateTime(presetTo),
          },
        ]
      );

      await dateDropdownAccessor(page).open();
      await dateDropdown.getByRole('button', { name: /Range B/ }).click();

      await dateDropdownAccessor(page).expectClosed();
      await expect(
        dateDropdown.getByTestId('date-dropdown-trigger')
      ).toContainText(formatDateRange(presetFrom, presetTo));
    }
  );

  regressionTest(
    'shows a trailing separator while only the start date is picked',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);

      await dateDropdownAccessor(page).open();
      await dayCell(page, pickedFrom).click();

      await expect(
        dateDropdown.getByTestId('date-dropdown-trigger')
      ).toContainText(`${formatDateTime(pickedFrom)} -`);
    }
  );

  regressionTest(
    'emits dateSelect on pick and reverts an incomplete range on outside click',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      const events = await recordEvents(dateDropdown, [
        'dateRangeChange',
        'dateSelect',
      ]);

      await dateDropdownAccessor(page).open();
      await dayCell(page, pickedFrom).click();

      expect(await events()).toEqual([
        {
          type: 'dateSelect',
          detail: expect.objectContaining({
            id: 'custom',
            from: formatDateTime(pickedFrom),
          }),
        },
      ]);

      await dateDropdownAccessor(page).dismiss('outside click');
      await dateDropdownAccessor(page).expectClosed();
      await expect(
        dateDropdown.getByTestId('date-dropdown-trigger')
      ).toContainText(formatDateRange(initialFrom, initialTo));

      // The range is unchanged, so only dateSelect resolves the emitted partial
      const reverted = expect.objectContaining({
        from: formatDateTime(initialFrom),
        to: formatDateTime(initialTo),
      });
      await expect
        .poll(async () => (await events()).slice(1))
        .toEqual([{ type: 'dateSelect', detail: reverted }]);

      await dateDropdownAccessor(page).open();
      await expectSelectedDays(page, [initialFrom, initialTo]);
    }
  );

  regressionTest(
    'emits nothing when closed without a change',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      const events = await recordEvents(dateDropdown, [
        'dateRangeChange',
        'dateSelect',
      ]);

      await dateDropdownAccessor(page).open();
      await dateDropdownAccessor(page).dismiss('outside click');
      await dateDropdownAccessor(page).expectClosed();

      expect(await events()).toEqual([]);
    }
  );

  regressionTest(
    'emits only dateSelect when the same range is picked again',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      const events = await recordEvents(dateDropdown, [
        'dateRangeChange',
        'dateSelect',
      ]);

      await dateDropdownAccessor(page).open();
      await dayCell(page, initialFrom).click();
      await dayCell(page, initialTo).click();
      await dateDropdownAccessor(page).expectClosed();

      await expect.poll(events).toEqual([
        {
          type: 'dateSelect',
          detail: expect.objectContaining({ to: undefined }),
        },
        {
          type: 'dateSelect',
          detail: expect.objectContaining({
            from: formatDateTime(initialFrom),
            to: formatDateTime(initialTo),
          }),
        },
      ]);
    }
  );

  regressionTest(
    'emits nothing when the same date is picked again in single selection',
    async ({ mount, page }) => {
      await mountDateDropdown(mount, page, {
        'single-selection': true,
        to: undefined,
      });
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      const events = await recordEvents(dateDropdown, [
        'dateRangeChange',
        'dateSelect',
      ]);

      await dateDropdownAccessor(page).open();
      await dayCell(page, initialFrom).click();
      await dateDropdownAccessor(page).expectClosed();

      expect(await events()).toEqual([]);
    }
  );

  regressionTest(
    'does not emit dateSelect for programmatic changes',
    async ({ page }) => {
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);
      const events = await recordEvents(dateDropdown, [
        'dateRangeChange',
        'dateSelect',
      ]);

      await dateDropdown.evaluate(
        (el: HTMLIxDateDropdownElement, from) => {
          el.from = from;
        },
        formatDateTime(initialFrom.plus({ months: 1 }))
      );

      await expect
        .poll(async () => (await events()).map((event) => event.type))
        .toContain('dateRangeChange');
      expect((await events()).map((event) => event.type)).not.toContain(
        'dateSelect'
      );
    }
  );
});

regressionTest.describe('predefined range shows its start month', () => {
  // Spans two months, so the start month differs from the end month
  const spanFrom = DateTime.fromISO('2024-02-27');
  const spanTo = DateTime.fromISO('2024-03-02');

  const displayedMonth = (page: Page) =>
    page.locator(
      'ix-date-dropdown ix-date-picker .month-selector ix-typography'
    );

  const browseForward = async (page: Page, months: number) => {
    const next = page
      .locator('ix-date-dropdown ix-date-picker')
      .getByLabel('Change calendar view to next month');
    for (let i = 0; i < months; i++) {
      await next.click();
    }
  };

  const mountWithSpanOption = async (
    mount: Mount,
    page: Page,
    requireConfirmation: boolean
  ) => {
    await mountDateDropdown(mount, page, {
      'require-confirmation': requireConfirmation,
    });
    await page.locator(DATE_DROPDOWN_SELECTOR).evaluate(
      (el: HTMLIxDateDropdownElement, dateRangeOptions) => {
        el.dateRangeOptions = dateRangeOptions;
      },
      [
        {
          id: 'span',
          label: 'Span',
          from: formatDateTime(spanFrom),
          to: formatDateTime(spanTo),
        },
        {
          id: 'initial',
          label: 'Initial',
          from: formatDateTime(initialFrom),
          to: formatDateTime(initialTo),
        },
      ]
    );
  };

  regressionTest(
    'with require confirmation, every click shows the start month',
    async ({ mount, page }) => {
      await mountWithSpanOption(mount, page, true);
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);

      await dateDropdownAccessor(page).open();
      await dateDropdown.getByRole('button', { name: /^Span:/ }).click();
      await expect(displayedMonth(page)).toHaveText('February');

      // Clicking the shown range again changes no selection but still moves back
      await browseForward(page, 3);
      await expect(displayedMonth(page)).toHaveText('May');
      await dateDropdown.getByRole('button', { name: /^Span:/ }).click();
      await expect(displayedMonth(page)).toHaveText('February');
    }
  );

  regressionTest(
    'with require confirmation, re-selecting the committed range shows its start month',
    async ({ mount, page }) => {
      await mountWithSpanOption(mount, page, true);
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);

      await dateDropdownAccessor(page).open();
      await browseForward(page, 3);
      await expect(displayedMonth(page)).toHaveText('August');
      await dateDropdown.getByRole('button', { name: /^Initial:/ }).click();
      await expect(displayedMonth(page)).toHaveText('May');
    }
  );

  regressionTest(
    'a programmatic range change shows the start month',
    async ({ mount, page }) => {
      await mountWithSpanOption(mount, page, false);
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);

      await dateDropdown.evaluate(
        (el: HTMLIxDateDropdownElement, [from, to]) => {
          el.from = from;
          el.to = to;
        },
        [formatDateTime(spanFrom), formatDateTime(spanTo)]
      );

      await dateDropdownAccessor(page).open();
      await expect(displayedMonth(page)).toHaveText('February');
    }
  );

  regressionTest(
    'without require confirmation, reopening shows the start month',
    async ({ mount, page }) => {
      await mountWithSpanOption(mount, page, false);
      const dateDropdown = page.locator(DATE_DROPDOWN_SELECTOR);

      await dateDropdownAccessor(page).open();
      await dateDropdown.getByRole('button', { name: /^Span:/ }).click();
      await dateDropdownAccessor(page).expectClosed();

      await dateDropdownAccessor(page).open();
      await expect(displayedMonth(page)).toHaveText('February');
    }
  );
});
