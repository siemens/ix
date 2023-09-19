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

regressionTest.describe('time picker', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('time-picker/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('incrementTimeUnits', async ({ page }) => {
    const awaitedValues = [11, 12, 13];
    await page.goto('time-picker/basic');

    await page.waitForSelector('ix-date-time-card');

    const dateTimeCard = await page.$('ix-date-time-card');

    const incrementButtons = await dateTimeCard.$$(
      'div.clock div.time button.btn.btn-invisible-primary.btn-icon.btn-icon-16 ix-icon i.glyph.glyph-chevron-up'
    );
    const inputFields = await dateTimeCard.$$(
      'div.clock div.time input.form-control'
    );

    for (const button of incrementButtons) {
      await button.click();
    }

    for (const [index, field] of inputFields.entries()) {
      expect(await field.inputValue()).toEqual(awaitedValues[index].toString());
    }
  });

  regressionTest('decrementTimeUnits', async ({ page }) => {
    const awaitedValues = ['09', '10', '11'];
    await page.goto('time-picker/basic');

    await page.waitForSelector('ix-date-time-card');

    const dateTimeCard = await page.$('ix-date-time-card');

    const decrementButtons = await dateTimeCard.$$(
      'div.clock div.time button.btn.btn-invisible-primary.btn-icon.btn-icon-16 ix-icon i.glyph.glyph-chevron-down'
    );
    const inputFields = await dateTimeCard.$$(
      'div.clock div.time input.form-control'
    );

    for (const button of decrementButtons) {
      await button.click();
    }

    for (const [index, field] of inputFields.entries()) {
      expect(await field.inputValue()).toEqual(awaitedValues[index]);
    }
  });

  regressionTest('changeTimeUnits', async ({ page }) => {
    const awaitedValues = ['23', '59', '59'];
    await page.goto('time-picker/basic');

    await page.waitForSelector('ix-date-time-card');

    const dateTimeCard = await page.$('ix-date-time-card');

    const inputFields = await dateTimeCard.$$(
      'div.clock div.time input.form-control'
    );

    for (const [index, field] of inputFields.entries()) {
      await field.click();
      await field.type('10');
      await field.press('Enter');

      expect(await field.inputValue()).toEqual(awaitedValues[index]);
    }
  });

  regressionTest('currentTime', async ({ page }) => {
    const expectedTime = '10:11:12 AM';
    await page.goto('time-picker/basic');

    await page.waitForSelector('ix-date-time-card');
    const timePicker = page.locator('ix-time-picker').last();

    const currentTime = timePicker.evaluate((elm: HTMLIxTimePickerElement) =>
      elm.getCurrentTime()
    );

    expect(await currentTime).toEqual(expectedTime);
  });

  regressionTest('currentTimeWhenChangeToPM', async ({ page }) => {
    const expectedTime = '10:11:12 AM';
    await page.goto('time-picker/basic');

    await page.waitForSelector('ix-date-time-card');
    const timePicker = page.locator('ix-time-picker').last();

    const chevronUpButtonLocator = timePicker.locator(
      'div.columns.default-space button i.glyph-chevron-up'
    );

    await chevronUpButtonLocator.click();

    const tst = timePicker.evaluate((elm: HTMLIxTimePickerElement) =>
      elm.getCurrentTime()
    );

    expect(await tst).not.toEqual(expectedTime);
  });
});
