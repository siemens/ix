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

const TIME_PICKER_SELECTOR = 'ix-time-picker';
const getTimeObjs = async (page: Page) => {
  return await page.$$eval(TIME_PICKER_SELECTOR, (elements) => {
    return Promise.all(elements.map((elem) => elem.getCurrentTime()));
  });
};

test('renders', async ({ mount, page }) => {
  await mount(`<ix-time-picker></ix-time-picker>`);
  const datePicker = page.locator(TIME_PICKER_SELECTOR);
  await expect(datePicker).toHaveClass(/hydrated/);
});

test.describe('date picker tests single', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-time-picker
      time="09:10:11"
      >
      </ix-time-picker>
      <ix-time-picker
      time="10:11:12 AM"
      format="hh:mm:ss A"
      >
      </ix-time-picker>`
    );
  });

  test('get date', async ({ page }) => {
    expect(await getTimeObjs(page)).toEqual(['09:10:11', '10:11:12 AM']);
  });

  test('increment time units', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    //Slice is necessary, because on element is on Shadow-DOM
    const incrementButtons = (
      await page.$$('ix-icon-button:has(svg title:has-text("chevron-up"))')
    ).slice(0, 3);

    for (const button of incrementButtons) {
      await button.click();
    }

    expect(await getTimeObjs(page)).toEqual(['10:11:12', '10:11:12 AM']);
  });

  test('decrement time units', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    const decrementButtons = (
      await page.$$('ix-icon-button:has(svg title:has-text("chevron-down"))')
    ).slice(0, 3);

    for (const button of decrementButtons) {
      await button.click();
    }

    expect(await getTimeObjs(page)).toEqual(['08:09:10', '10:11:12 AM']);
  });

  test('maximum / minimum time units', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');
    const dateTimeCard = await page.$('ix-date-time-card');

    const inputFields = await dateTimeCard.$$('input');

    for (const field of inputFields) {
      await field.type('100');
      await field.press('Enter');
    }

    expect(await getTimeObjs(page)).toEqual(['23:59:59', '10:11:12 AM']);
  });

  test('change time reference', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');
    const dateTimeCard = await page.$$('ix-date-time-card');

    const decrementButtons = await dateTimeCard[1].$$(
      'ix-icon-button:has(svg title:has-text("chevron-down"))'
    );
    await decrementButtons[3].click();

    expect(await getTimeObjs(page)).toEqual(['09:10:11', '10:11:12 PM']);
  });

  test('select different date fires dateChange event', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    const timeChangeEvent = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('timeChange', (data) => f(data));
      });
    });

    const incrementButtons = (
      await page.$$('ix-icon-button:has(svg title:has-text("chevron-up"))')
    ).slice(0, 3);
    await incrementButtons[2].click();

    expect(await timeChangeEvent).toBeTruthy();
  });
});
