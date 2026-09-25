/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

const DatePickerSelector = 'ix-date-picker';
const getDateObj = async (page: Page) => {
  return await page.$$eval(DatePickerSelector, (elements) => {
    return Promise.all(elements.map((elem) => elem.getCurrentDate()));
  });
};

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-date-picker></ix-date-picker>`);
  const datePicker = page.locator(DatePickerSelector);
  await expect(datePicker).toHaveClass(/hydrated/);
});

regressionTest('translation', async ({ mount, page }) => {
  await mount(
    `<ix-date-picker from="2023/01/01" locale="de"></ix-date-picker>`
  );

  const header = page.getByText('Januar').nth(0);
  await expect(header).toHaveCount(1);
});

regressionTest.describe('date picker tests single', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-date-picker min-date="2024/10/10" from="2024/10/10" single-selection></ix-date-picker>`
    );
  });

  regressionTest('select disabled date with enter', async ({ page }) => {
    const datePicker = page.locator(DatePickerSelector);
    await expect(datePicker).toHaveClass(/hydrated/);

    await page.getByText(/^9$/).focus();
    await page.keyboard.press('Enter');

    const currentDate = datePicker.evaluate(
      (element: HTMLIxDatePickerElement) => element.getCurrentDate()
    );

    await expect(currentDate).resolves.toEqual({
      from: '2024/10/10',
      to: undefined,
      isoFrom: '2024-10-10',
      isoTo: undefined,
    });
  });

  regressionTest('select disabled date with click', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    await page.getByText(/^9$/).click({ force: true });

    expect((await getDateObj(page))[0]).toEqual({
      from: '2024/10/10',
      to: undefined,
      isoFrom: '2024-10-10',
      isoTo: undefined,
    });
  });
});

regressionTest.describe('date picker tests single', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-date-picker from="2023/09/05" single-selection></ix-date-picker>`
    );
  });

  regressionTest('date is selected', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    expect((await getDateObj(page))[0]).toEqual({
      from: '2023/09/05',
      to: undefined,
      isoFrom: '2023-09-05',
      isoTo: undefined,
    });
  });

  regressionTest('select different date', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');
    await page.getByText(/^19$/).click();

    expect((await getDateObj(page))[0]).toEqual({
      from: '2023/09/19',
      to: undefined,
      isoFrom: '2023-09-19',
      isoTo: undefined,
    });
  });

  regressionTest('select different date in next month', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    await page.locator('ix-icon-button').nth(1).click();
    await page.getByText(/^31$/).click();

    expect((await getDateObj(page))[0]).toEqual({
      from: '2023/10/31',
      to: undefined,
      isoFrom: '2023-10-31',
      isoTo: undefined,
    });
  });

  regressionTest(
    'select different date in previous month',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      await page.locator('ix-icon-button').nth(0).click();
      await page
        .locator('.calendar-item:not(.week-number)')
        .getByText(/^31$/)
        .nth(0)
        .click();

      expect((await getDateObj(page))[0]).toEqual({
        from: '2023/08/31',
        to: undefined,
        isoFrom: '2023-08-31',
        isoTo: undefined,
      });
    }
  );

  regressionTest(
    'select different date from specific month',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');
      const monthSelection = page.getByLabel('Select month');

      await expect(monthSelection).toBeVisible();
      await monthSelection.click();

      const itemJanuary = monthSelection.getByRole('menuitem', {
        name: 'January',
      });

      await expect(itemJanuary).toBeVisible();
      await itemJanuary.click();

      const yearSelection = page.getByLabel('Select year');
      await expect(yearSelection).toBeVisible();
      await yearSelection.click();

      const item2021 = yearSelection.getByRole('menuitem', {
        name: /2021/,
      });

      await expect(item2021).toBeVisible();
      await item2021.click();

      await page.getByText(/^1$/).nth(0).click();

      expect((await getDateObj(page))[0]).toEqual({
        from: '2021/01/01',
        to: undefined,
        isoFrom: '2021-01-01',
        isoTo: undefined,
      });
    }
  );

  regressionTest(
    'select different date fires dateChange event',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      const eventPromise = page.evaluate(() => {
        return new Promise((f) => {
          document.addEventListener('dateChange', (data) => f(data));
        });
      });

      await page.getByText(/^19$/).click();

      expect(await eventPromise).toBeTruthy();
    }
  );

  regressionTest(
    'keeps previous date and throws console error when invalid date string is provided',
    async ({ page }) => {
      const datePicker = page.locator('ix-date-picker');

      const currentDateOld = datePicker.evaluate(
        (element: HTMLIxDatePickerElement) => element.getCurrentDate()
      );

      await expect(currentDateOld).resolves.toEqual({
        from: '2023/09/05',
        to: undefined,
        isoFrom: '2023-09-05',
        isoTo: undefined,
      });

      const errors: string[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errors.push(message.text());
        }
      });

      await datePicker.evaluate((element: HTMLElement) => {
        element.setAttribute('from', 'Aug 6, 2014');
      });

      const currentDate = datePicker.evaluate(
        (element: HTMLIxDatePickerElement) => element.getCurrentDate()
      );

      await expect(currentDate).resolves.toEqual({
        from: '2023/09/05',
        to: undefined,
        isoFrom: '2023-09-05',
        isoTo: undefined,
      });

      expect(errors).toContain(
        `the input "Aug 6, 2014" can't be parsed as format yyyy/LL/dd`
      );
    }
  );
});

regressionTest.describe('date picker tests range', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-date-picker from="2023/09/05" to="2023/09/10"></ix-date-picker>`
    );
  });

  regressionTest('range is selected', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    expect((await getDateObj(page))[0]).toEqual({
      from: '2023/09/05',
      to: '2023/09/10',
      isoFrom: '2023-09-05',
      isoTo: '2023-09-10',
    });
  });

  regressionTest('select different range', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    await page.getByText(/^12$/).click();
    await page.getByText(/^17$/).click();

    expect((await getDateObj(page))[0]).toEqual({
      from: '2023/09/12',
      to: '2023/09/17',
      isoFrom: '2023-09-12',
      isoTo: '2023-09-17',
    });
  });

  regressionTest.describe('date picker range undefined values test', () => {
    regressionTest(
      'dateSelect event with undefined from and to values',
      async ({ mount, page }) => {
        await mount(`<ix-date-picker></ix-date-picker>`);

        await page.waitForSelector('ix-date-time-card');

        const dateSelectEventPromise = page.evaluate(() => {
          return new Promise((resolve) => {
            document.addEventListener('dateSelect', (event) => {
              resolve((event as CustomEvent).detail);
            });
          });
        });

        await page.getByText('Done').click();

        const eventDetail = await dateSelectEventPromise;
        expect(eventDetail).toEqual({
          from: undefined,
          to: undefined,
          isoFrom: undefined,
          isoTo: undefined,
        });
      }
    );
  });

  regressionTest('select range spanning over 2 months', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    await page.getByText(/^28$/).click();
    await page.locator('ix-icon-button').nth(1).click();
    await page.getByText(/^5$/).click();

    expect((await getDateObj(page))[0]).toEqual({
      from: '2023/09/28',
      to: '2023/10/05',
      isoFrom: '2023-09-28',
      isoTo: '2023-10-05',
    });
  });

  regressionTest(
    'select different range fires dateChange and dateRangeChange event',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

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
    }
  );

  regressionTest('done click fires dateSelect event', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    const dateSelectEventPromise = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('dateSelect', (data) => f(data));
      });
    });

    await page.getByText('Done').click();

    expect(await dateSelectEventPromise).toBeTruthy();
  });
});

regressionTest.describe('locale support', () => {
  regressionTest(
    'locale-dependent format produces localized from value',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="05 März 2023" locale="de" format="dd MMMM yyyy" single-selection></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datePicker = page.locator(DatePickerSelector);
      const currentDate = datePicker.evaluate(
        (element: HTMLIxDatePickerElement) => element.getCurrentDate()
      );

      const result = await currentDate;
      expect(result.from).toContain('März');
      expect(result.isoFrom).toBe('2023-03-05');
      expect(result.isoTo).toBeUndefined();
    }
  );

  regressionTest(
    'isoFrom remains ISO regardless of locale',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2023/09/05" locale="ja" single-selection></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datePicker = page.locator(DatePickerSelector);
      const result = await datePicker.evaluate(
        (element: HTMLIxDatePickerElement) => element.getCurrentDate()
      );

      expect(result.isoFrom).toBe('2023-09-05');
      expect(result.isoTo).toBeUndefined();
    }
  );

  regressionTest(
    'numeric-only format produces same output regardless of locale',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2023/09/05" locale="ru" single-selection></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datePicker = page.locator(DatePickerSelector);
      const result = await datePicker.evaluate(
        (element: HTMLIxDatePickerElement) => element.getCurrentDate()
      );

      expect(result.from).toBe('2023/09/05');
      expect(result.isoFrom).toBe('2023-09-05');
    }
  );
});

regressionTest.describe('runtime locale and format updates', () => {
  regressionTest(
    'locale change re-parses from value that was invalid under the previous locale',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="05 March 2023" locale="de" format="dd MMMM yyyy" single-selection></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datePicker = page.locator(DatePickerSelector);

      // "March" is not a German month name, so nothing is selected yet
      await expect(
        datePicker.evaluate((element: HTMLIxDatePickerElement) =>
          element.getCurrentDate()
        )
      ).resolves.toEqual({
        from: undefined,
        to: undefined,
        isoFrom: undefined,
        isoTo: undefined,
      });

      await datePicker.evaluate((element: HTMLElement) => {
        element.setAttribute('locale', 'en');
      });

      await expect(
        datePicker.evaluate((element: HTMLIxDatePickerElement) =>
          element.getCurrentDate()
        )
      ).resolves.toEqual({
        from: '05 March 2023',
        to: undefined,
        isoFrom: '2023-03-05',
        isoTo: undefined,
      });
    }
  );

  regressionTest(
    'locale change re-parses from and to of a range',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="05 March 2023" to="10 March 2023" locale="de" format="dd MMMM yyyy"></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datePicker = page.locator(DatePickerSelector);

      await expect(
        datePicker.evaluate((element: HTMLIxDatePickerElement) =>
          element.getCurrentDate()
        )
      ).resolves.toEqual({
        from: undefined,
        to: undefined,
        isoFrom: undefined,
        isoTo: undefined,
      });

      await datePicker.evaluate((element: HTMLElement) => {
        element.setAttribute('locale', 'en');
      });

      await expect(
        datePicker.evaluate((element: HTMLIxDatePickerElement) =>
          element.getCurrentDate()
        )
      ).resolves.toEqual({
        from: '05 March 2023',
        to: '10 March 2023',
        isoFrom: '2023-03-05',
        isoTo: '2023-03-10',
      });
    }
  );

  regressionTest(
    'locale change invalidates a from value that no longer parses',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="05 March 2023" locale="en" format="dd MMMM yyyy" single-selection></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datePicker = page.locator(DatePickerSelector);

      await expect(
        datePicker.evaluate((element: HTMLIxDatePickerElement) =>
          element.getCurrentDate()
        )
      ).resolves.toMatchObject({ isoFrom: '2023-03-05' });

      await datePicker.evaluate((element: HTMLElement) => {
        element.setAttribute('locale', 'de');
      });

      await expect(
        datePicker.evaluate((element: HTMLIxDatePickerElement) =>
          element.getCurrentDate()
        )
      ).resolves.toEqual({
        from: undefined,
        to: undefined,
        isoFrom: undefined,
        isoTo: undefined,
      });
    }
  );

  regressionTest(
    'format change re-parses from value immediately',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="05.09.2023" single-selection></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datePicker = page.locator(DatePickerSelector);

      // Does not match the default format yyyy/LL/dd
      await expect(
        datePicker.evaluate((element: HTMLIxDatePickerElement) =>
          element.getCurrentDate()
        )
      ).resolves.toEqual({
        from: undefined,
        to: undefined,
        isoFrom: undefined,
        isoTo: undefined,
      });

      await datePicker.evaluate((element: HTMLElement) => {
        element.setAttribute('format', 'dd.LL.yyyy');
      });

      await expect(
        datePicker.evaluate((element: HTMLIxDatePickerElement) =>
          element.getCurrentDate()
        )
      ).resolves.toEqual({
        from: '05.09.2023',
        to: undefined,
        isoFrom: '2023-09-05',
        isoTo: undefined,
      });
    }
  );

  regressionTest(
    'locale change translates the header without leaving the browsed month',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="05 September 2023" locale="en" format="dd MMMM yyyy" single-selection></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datePicker = page.locator(DatePickerSelector);
      const monthLabel = datePicker.locator(
        '.month-selector [slot="button-label"]'
      );

      await expect(monthLabel).toHaveText('September');

      await page.locator('ix-icon-button').nth(1).click();
      await expect(monthLabel).toHaveText('October');

      await datePicker.evaluate((element: HTMLElement) => {
        element.setAttribute('locale', 'de');
      });

      // Translated, but still on the month the user navigated to
      await expect(monthLabel).toHaveText('Oktober');
    }
  );
});

regressionTest.describe('keyboard navigation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-date-input embedded value="2023/09/05"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').focus();
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('[data-calendar-day="5"]')).toBeFocused();
  });

  regressionTest('Home moves focus to first day of week', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('Home');
    await expect(page.locator('[data-calendar-day="4"]')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/09/04');
  });

  regressionTest('End moves focus to last day of week', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('End');
    await expect(page.locator('[data-calendar-day="10"]')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/09/10');
  });

  regressionTest('PageUp navigates to previous month', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('PageUp');
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/08/05');
  });

  regressionTest('PageDown navigates to next month', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('PageDown');
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/10/05');
  });

  regressionTest(
    'Shift+PageUp navigates to previous year',
    async ({ page }) => {
      const dateInputElement = page.locator('ix-date-input');
      await page.keyboard.press('Shift+PageUp');
      await page.keyboard.press('Enter');
      await expect(dateInputElement).toHaveAttribute('value', '2022/09/05');
    }
  );

  regressionTest('Shift+PageDown navigates to next year', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('Shift+PageDown');
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2024/09/05');
  });
});

regressionTest.describe('month dropdown min/max range', () => {
  const openMonthDropdown = async (page: Page) => {
    await page.waitForSelector('ix-date-time-card');
    const monthSelection = page.getByLabel('Select month');

    await expect(monthSelection).toBeVisible();
    await monthSelection.click();

    return monthSelection;
  };

  const expectMonths = async (
    monthSelection: ReturnType<Page['getByLabel']>,
    enabled: string[],
    disabled: string[]
  ) => {
    for (const name of enabled) {
      await expect(
        monthSelection.getByRole('menuitem', { name })
      ).not.toHaveClass(/disabled-item/);
    }

    for (const name of disabled) {
      await expect(monthSelection.getByRole('menuitem', { name })).toHaveClass(
        /disabled-item/
      );
    }
  };

  regressionTest(
    'enables the month a single-month range sits in',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2026/07/06" min-date="2026/07/05" max-date="2026/07/15" locale="en" single-selection></ix-date-picker>`
      );

      const monthSelection = await openMonthDropdown(page);

      await expectMonths(monthSelection, ['July'], ['June', 'August']);
    }
  );

  regressionTest(
    'enables both months a two-month range spans',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2026/07/06" min-date="2026/07/05" max-date="2026/08/15" locale="en" single-selection></ix-date-picker>`
      );

      const monthSelection = await openMonthDropdown(page);

      await expectMonths(
        monthSelection,
        ['July', 'August'],
        ['June', 'September']
      );
    }
  );

  regressionTest(
    'disables every month of a year outside the range',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2027/07/06" min-date="2026/07/05" max-date="2026/07/15" locale="en" single-selection></ix-date-picker>`
      );

      const monthSelection = await openMonthDropdown(page);

      await expectMonths(
        monthSelection,
        [],
        ['January', 'June', 'July', 'August', 'December']
      );
    }
  );

  regressionTest(
    'rebuilds the month list when `from` moves to another year after load',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2027/07/06" min-date="2026/07/05" max-date="2026/08/15" locale="en" single-selection></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      await page
        .locator(DatePickerSelector)
        .evaluate((element) => element.setAttribute('from', '2026/07/06'));

      const monthSelection = await openMonthDropdown(page);

      await expectMonths(
        monthSelection,
        ['July', 'August'],
        ['June', 'September']
      );
    }
  );

  regressionTest(
    'year boundary - enables the months from the range start to the end of the first year',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2026/04/06" min-date="2026/03/31" max-date="2027/01/31" locale="en" single-selection></ix-date-picker>`
      );

      const monthSelection = await openMonthDropdown(page);

      await expectMonths(
        monthSelection,
        ['March', 'April', 'December'],
        ['January', 'February']
      );
    }
  );

  regressionTest(
    'enables the months up to the range end in the second year',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2027/01/06" min-date="2026/03/31" max-date="2027/01/31" locale="en" single-selection></ix-date-picker>`
      );

      const monthSelection = await openMonthDropdown(page);

      await expectMonths(
        monthSelection,
        ['January'],
        ['February', 'March', 'December']
      );
    }
  );
});

regressionTest.describe('year dropdown sync', () => {
  regressionTest(
    'marks the new year as selected when `to` moves to another year after load',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2026/07/06" to="2026/07/20"></ix-date-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      await page
        .locator(DatePickerSelector)
        .evaluate((element) => element.setAttribute('to', '2028/03/12'));

      const yearSelection = page.getByLabel('Select year');
      await yearSelection.click();

      await expect(
        yearSelection.getByRole('menuitem', { name: '2028', exact: true })
      ).toHaveAttribute('checked', '');
      await expect(
        yearSelection.getByRole('menuitem', { name: '2026', exact: true })
      ).not.toHaveAttribute('checked', '');
    }
  );
});

regressionTest.describe('week start index', () => {
  const getColumnOfFirstDay = async (page: Page) => {
    return await page.$eval(DatePickerSelector, (picker) => {
      const cell = picker.shadowRoot?.querySelector('[data-calendar-day="1"]');
      const row = cell?.closest('[role="row"]');
      if (!cell || !row) {
        return -1;
      }
      return [...row.querySelectorAll('[role="gridcell"]')].indexOf(cell);
    });
  };

  const getColumnHeaders = async (page: Page) => {
    return await page.$eval(DatePickerSelector, (picker) =>
      [
        ...(picker.shadowRoot?.querySelectorAll('[role="columnheader"]') ?? []),
      ].map((header) => header.textContent?.trim() ?? '')
    );
  };

  /** Every day number in the grid, in the order it is rendered. */
  const getRenderedDays = async (page: Page) => {
    return await page.$eval(DatePickerSelector, (picker) =>
      [
        ...(picker.shadowRoot?.querySelectorAll('[data-calendar-day]') ?? []),
      ].map((cell) => Number(cell.getAttribute('data-calendar-day')))
    );
  };

  /** The cell count of each day row, the header row excluded. */
  const getRowWidths = async (page: Page) => {
    return await page.$eval(DatePickerSelector, (picker) =>
      [...(picker.shadowRoot?.querySelectorAll('[role="row"]') ?? [])]
        .map((row) => row.querySelectorAll('[role="gridcell"]').length)
        .filter((width) => width > 0)
    );
  };

  const getWeekNumbers = async (page: Page) => {
    return await page.$eval(DatePickerSelector, (picker) =>
      [...(picker.shadowRoot?.querySelectorAll('.week-number') ?? [])].map(
        (cell) => Number(cell.textContent?.trim())
      )
    );
  };

  regressionTest(
    'places the first day correctly by default',
    async ({ mount, page }) => {
      // 1 April 2026 is a Wednesday, the third column of a Monday-first grid.
      await mount(`<ix-date-picker from="2026/04/01"></ix-date-picker>`);

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);
      expect(await getColumnOfFirstDay(page)).toBe(2);
    }
  );

  regressionTest(
    'shifts the first day when the week starts later',
    async ({ mount, page }) => {
      // weekStartIndex 1 makes Tuesday the first column, so Wednesday moves to
      // the second.
      await mount(
        `<ix-date-picker from="2026/04/01" week-start-index="1"></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);
      expect(await getColumnOfFirstDay(page)).toBe(1);
    }
  );

  regressionTest(
    'places a month that starts on a Sunday',
    async ({ mount, page }) => {
      // Sunday is Luxon weekday 7, the value that used to index past the end of
      // the weekday-name array.
      await mount(
        `<ix-date-picker from="2026/03/01" week-start-index="1"></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);
      expect(await getColumnOfFirstDay(page)).toBe(5);
    }
  );

  regressionTest(
    'places the first day in a non-English locale',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2026/04/01" week-start-index="1" locale="de"></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);
      expect(await getColumnOfFirstDay(page)).toBe(1);
    }
  );

  regressionTest(
    'lines the day grid up with the column headers',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2026/04/01" week-start-index="1" locale="de"></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);

      const headers = await getColumnHeaders(page);
      expect(headers[0]).toBe('Die');

      // 1 April 2026 is a Wednesday, so it must sit under the Wednesday header.
      expect(headers[await getColumnOfFirstDay(page)]).toBe('Mit');
    }
  );

  regressionTest(
    'places the first day for a Sunday-first week',
    async ({ mount, page }) => {
      // weekStartIndex 6 is Sunday, the largest offset the wrap-around has to
      // handle. 1 September 2023 is a Friday, five columns along from Sunday.
      await mount(
        `<ix-date-picker from="2023/09/01" week-start-index="6" single-selection></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);
      expect(await getColumnOfFirstDay(page)).toBe(5);
    }
  );

  regressionTest(
    'rotates the weekday headers when the week start changes at runtime',
    async ({ mount, page }) => {
      // 1 September 2023 is a Friday: column 4 of a Monday-first grid, column 5
      // once the week starts on Sunday. The header under it has to stay the
      // same weekday, which only holds if the names are rebuilt with the grid.
      await mount(`<ix-date-picker from="2023/09/01"></ix-date-picker>`);

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);
      expect(await getColumnOfFirstDay(page)).toBe(4);

      const fridayHeader = (await getColumnHeaders(page))[4];

      await page
        .locator(DatePickerSelector)
        .evaluate((element: HTMLElement) =>
          element.setAttribute('week-start-index', '6')
        );

      await expect.poll(async () => await getColumnOfFirstDay(page)).toBe(5);

      const headers = await getColumnHeaders(page);
      expect(headers[5]).toBe(fridayHeader);
    }
  );

  regressionTest(
    'renders the whole month for a Sunday-first week',
    async ({ mount, page }) => {
      // December 2023 opens on a Friday, so a Sunday-first grid needs six rows.
      // Counting rows by ISO week number only found five and dropped every day
      // after the 24th.
      await mount(
        `<ix-date-picker from="2023/12/01" week-start-index="6"></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);

      expect(await getRenderedDays(page)).toEqual(
        Array.from({ length: 31 }, (_, index) => index + 1)
      );
    }
  );

  regressionTest(
    'renders no day past the end of a short month',
    async ({ mount, page }) => {
      // February 2026 has 28 days and opens on a Sunday, the case where the
      // day counter used to run on to a 31st that does not exist.
      await mount(
        `<ix-date-picker from="2026/02/01" week-start-index="6"></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);

      const days = await getRenderedDays(page);
      expect(days).toHaveLength(28);
      expect(Math.max(...days)).toBe(28);
    }
  );

  regressionTest(
    'keeps every row seven columns wide',
    async ({ mount, page }) => {
      // A short final row shifts nothing on screen, but it means the grid and
      // the headers stop agreeing about what column a weekday is.
      await mount(
        `<ix-date-picker from="2023/12/01" week-start-index="6"></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);

      expect(await getRowWidths(page)).toEqual([7, 7, 7, 7, 7, 7]);
    }
  );

  regressionTest(
    'numbers the weeks of a Sunday-first December into the new year',
    async ({ mount, page }) => {
      // The last row of December 2023 runs into January, so it carries week 1.
      // The old counter repeated a number here instead of wrapping.
      await mount(
        `<ix-date-picker from="2023/12/01" week-start-index="6" show-week-numbers></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);

      const weekNumbers = await getWeekNumbers(page);
      expect(weekNumbers).toEqual([48, 49, 50, 51, 52, 1]);
      expect(new Set(weekNumbers).size).toBe(weekNumbers.length);
    }
  );

  regressionTest(
    'lines a Sunday-first grid up with its headers',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2023/12/01" week-start-index="6" locale="en"></ix-date-picker>`
      );

      await expect(page.locator(DatePickerSelector)).toHaveClass(/hydrated/);

      const headers = await getColumnHeaders(page);
      expect(headers[0]).toBe('Sun');

      // 1 December 2023 is a Friday, six columns along from Sunday.
      expect(headers[await getColumnOfFirstDay(page)]).toBe('Fri');
    }
  );
});
