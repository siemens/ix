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
    });
  });

  regressionTest('select disabled date with click', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    await page.getByText(/^9$/).click({ force: true });

    expect((await getDateObj(page))[0]).toEqual({
      from: '2024/10/10',
      to: undefined,
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
    });
  });

  regressionTest('select different date', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');
    await page.getByText(/^19$/).click();

    expect((await getDateObj(page))[0]).toEqual({
      from: '2023/09/19',
      to: undefined,
    });
  });

  regressionTest('select different date in next month', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    await page.locator('ix-icon-button').nth(1).click();
    await page.getByText(/^31$/).click();

    expect((await getDateObj(page))[0]).toEqual({
      from: '2023/10/31',
      to: undefined,
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
    });
  });

  regressionTest('select different range', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    await page.getByText(/^12$/).click();
    await page.getByText(/^17$/).click();

    expect((await getDateObj(page))[0]).toEqual({
      from: '2023/09/12',
      to: '2023/09/17',
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
        `<ix-date-picker from="2026/07/06" min-date="2026/07/05" max-date="2026/07/15" single-selection></ix-date-picker>`
      );

      const monthSelection = await openMonthDropdown(page);

      await expectMonths(monthSelection, ['July'], ['June', 'August']);
    }
  );

  regressionTest(
    'enables both months a two-month range spans',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2026/07/06" min-date="2026/07/05" max-date="2026/08/15" single-selection></ix-date-picker>`
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
        `<ix-date-picker from="2027/07/06" min-date="2026/07/05" max-date="2026/07/15" single-selection></ix-date-picker>`
      );

      const monthSelection = await openMonthDropdown(page);

      await expectMonths(
        monthSelection,
        [],
        ['January', 'June', 'July', 'August', 'December']
      );
    }
  );
});

regressionTest.describe('week start index', () => {
  // 2023-09-01 is a Friday, so the first row's leading blank cells are the only
  // thing that shifts when the week starts on a different day.
  const columnOfFirstDay = async (page: Page) => {
    await page.waitForSelector('ix-date-time-card');
    const firstWeek = page
      .locator('[role="row"]')
      .filter({ has: page.locator('[data-calendar-day="1"]') });
    const cells = firstWeek.locator('[role="gridcell"]');

    for (let index = 0; index < (await cells.count()); index++) {
      if ((await cells.nth(index).getAttribute('data-calendar-day')) === '1') {
        return index;
      }
    }

    return -1;
  };

  regressionTest(
    'places the first day for a Monday-first week',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2023/09/01" single-selection></ix-date-picker>`
      );

      expect(await columnOfFirstDay(page)).toBe(4);
    }
  );

  regressionTest(
    'places the first day for a Sunday-first week',
    async ({ mount, page }) => {
      await mount(
        `<ix-date-picker from="2023/09/01" week-start-index="6" single-selection></ix-date-picker>`
      );

      expect(await columnOfFirstDay(page)).toBe(5);
    }
  );

  regressionTest('is unaffected by the locale', async ({ mount, page }) => {
    await mount(
      `<ix-date-picker from="2023/09/01" week-start-index="6" locale="de" single-selection></ix-date-picker>`
    );

    expect(await columnOfFirstDay(page)).toBe(5);
  });
});
