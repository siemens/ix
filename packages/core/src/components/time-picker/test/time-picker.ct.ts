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

const TIME_PICKER_SELECTOR = 'ix-time-picker';
const getTimeObjs = async (page: Page) => {
  return await page.$$eval(TIME_PICKER_SELECTOR, (elements) => {
    return Promise.all(elements.map((elem) => elem.getCurrentTime()));
  });
};

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-time-picker></ix-time-picker>`);
  const datePicker = page.locator(TIME_PICKER_SELECTOR);
  await expect(datePicker).toHaveClass(/hydrated/);
});

regressionTest.describe('time picker tests', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-time-picker
      time="09:10:11"
      >
      </ix-time-picker>
      <ix-time-picker
      time="10:11:12 AM"
      format="hh:mm:ss a"
      >
      </ix-time-picker>`
    );
  });

  regressionTest('get time', async ({ page }) => {
    expect(await getTimeObjs(page)).toEqual(['09:10:11', '10:11:12 AM']);
  });

  regressionTest('increment time units', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    // Slice is necessary, because on element is on Shadow-DOM
    const incrementButtons = (
      await page.$$('ix-icon-button.arrows:first-child')
    ).slice(0, 3);

    for (const button of incrementButtons) {
      await button.click();
    }

    expect(await getTimeObjs(page)).toEqual(['10:11:12', '10:11:12 AM']);
  });

  regressionTest('decrement time units', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    const decrementButtons = (
      await page.$$('ix-icon-button.arrows:last-child')
    ).slice(0, 3);

    for (const button of decrementButtons) {
      await button.click();
    }

    expect(await getTimeObjs(page)).toEqual(['08:09:10', '10:11:12 AM']);
  });

  regressionTest('maximum / minimum time units', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');
    const inputFields = await page
      .locator('ix-date-time-card')
      .locator('input')
      .all();

    for (const field of inputFields) {
      await field.type('100');
      await field.press('Enter');
    }

    expect(await getTimeObjs(page)).toEqual(['23:59:59', '12:59:59 PM']);
  });

  regressionTest('change time reference', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');
    const dateTimeCard = await page.$$('ix-date-time-card');

    const decrementButtons = await dateTimeCard[1].$$(
      'ix-icon-button.arrows:last-child'
    );
    await decrementButtons[3].click();

    expect(await getTimeObjs(page)).toEqual(['09:10:11', '10:11:12 PM']);
  });

  regressionTest(
    'select different time fires timeChange event',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      const timeChangeEvent = page.evaluate(() => {
        return new Promise((f) => {
          document.addEventListener('timeChange', (data) => f(data));
        });
      });

      const incrementButtons = (
        await page.$$('ix-icon-button.arrows:first-child')
      ).slice(0, 3);
      await incrementButtons[2].click();

      expect(await timeChangeEvent).toBeTruthy();
    }
  );

  regressionTest('change time from outside', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    await page.$eval(TIME_PICKER_SELECTOR, (el: HTMLIxTimePickerElement) => {
      el.time = '10:11:15';
    });

    await page.$eval(TIME_PICKER_SELECTOR, (el: HTMLIxTimePickerElement) => {
      el.time = '11:12:15';
    });

    expect(['11:12:15', '10:11:12 AM']).toEqual(await getTimeObjs(page));
  });
});
