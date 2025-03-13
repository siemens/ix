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

const DATE_PICKER_REWORK_SELECTOR = 'ix-date-picker';
const getDateObj = async (page: Page) => {
  return await page.$$eval(DATE_PICKER_REWORK_SELECTOR, (elements) => {
    return Promise.all(elements.map((elem) => elem.getCurrentDate()));
  });
};

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-date-picker></ix-date-picker>`);
  const datePicker = page.locator(DATE_PICKER_REWORK_SELECTOR);
  await expect(datePicker).toHaveClass(/hydrated/);
});

regressionTest('translation', async ({ mount, page }) => {
  await mount(`<ix-date-picker from="2023/01/01"></ix-date-picker>`);

  await page.$eval(
    DATE_PICKER_REWORK_SELECTOR,
    (el: HTMLIxDatePickerElement) => {
      el.locale = 'de';
    }
  );

  const header = page.getByText('Januar 2023').nth(0);
  await expect(header).toHaveCount(1);
});

regressionTest.describe('date picker tests single', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-date-picker min-date="2024/10/10" from="2024/10/10" range="false"></ix-date-picker>`
    );
  });

  regressionTest('select disabled date with enter', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    await page.getByText(/^9$/).focus();
    await page.keyboard.press('Enter');

    expect((await getDateObj(page))[0]).toEqual({
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
      `<ix-date-picker from="2023/09/05" range="false"></ix-date-picker>`
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
        await mount(`<ix-date-picker range="true"></ix-date-picker>`);

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
