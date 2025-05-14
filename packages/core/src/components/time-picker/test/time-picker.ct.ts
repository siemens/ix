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
        format="hh:mm:ss"
      >
      </ix-time-picker>
      <ix-time-picker
        time="10:11:12 AM"
        format="hh:mm:ss a"
      >
      </ix-time-picker>`
    );
  });

  regressionTest('should get correct time', async ({ page }) => {
    expect(await getTimeObjs(page)).toEqual(['09:10:11', '10:11:12 AM']);
  });

  regressionTest(
    'should change time selection by clicking',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      // First time picker - select 12 hour
      await page
        .locator('ix-time-picker')
        .first()
        .locator('[data-element-container-id="hour-12"]')
        .click();

      // Select 12 minute
      await page
        .locator('ix-time-picker')
        .first()
        .locator('[data-element-container-id="minute-12"]')
        .click();

      // Select 30 second
      await page
        .locator('ix-time-picker')
        .first()
        .locator('[data-element-container-id="second-30"]')
        .click();

      // Switch AM to PM in the second time picker
      await page
        .locator('ix-time-picker')
        .nth(1)
        .locator('[data-am-pm-id="PM"]')
        .click();

      expect(await getTimeObjs(page)).toEqual(['12:12:30', '10:11:12 PM']);
    }
  );

  regressionTest(
    'should fire timeChange event when time is changed',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      // Set up a listener for the timeChange event on the first time picker
      const timeChangePromise = page.evaluate(() => {
        return new Promise((resolve) => {
          const timePicker = document.querySelector('ix-time-picker');
          timePicker?.addEventListener('timeChange', (event) => {
            resolve(event.detail);
          });
        });
      });

      // Make a change to the first time picker
      await page
        .locator('ix-time-picker')
        .first()
        .locator('[data-element-container-id="hour-10"]')
        .click();

      // Wait for the event to be fired and get the event detail
      const eventDetail = await timeChangePromise;

      // Verify that we received the event with the correct time
      expect(eventDetail).toBe('10:10:11');
    }
  );

  regressionTest(
    'should change time selection when updating time attribute from outside',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      await page.$eval(TIME_PICKER_SELECTOR, (el: HTMLIxTimePickerElement) => {
        el.time = '10:11:15';
      });

      await page.$eval(TIME_PICKER_SELECTOR, (el: HTMLIxTimePickerElement) => {
        el.time = '11:12:15';
      });

      expect(['11:12:15', '10:11:12 AM']).toEqual(await getTimeObjs(page));
    }
  );

  regressionTest(
    'should fire timeSelect event when confirm button is clicked',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      // Set up a listener for the timeSelect event on the first time picker
      const timeSelectPromise = page.evaluate(() => {
        return new Promise((resolve) => {
          const timePicker = document.querySelector('ix-time-picker');
          timePicker.addEventListener('timeSelect', (event) => {
            resolve(event.detail);
          });
        });
      });

      // Click the "Confirm" button on the first time picker
      await page.locator('ix-time-picker').first().locator('ix-button').click();

      // Wait for the event to be fired and get the event detail
      const eventDetail = await timeSelectPromise;

      expect(eventDetail).toBe('09:10:11');
    }
  );

  regressionTest(
    'keyboard navigation should work correctly in the time picker',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      // Focus on the hour element in the second time picker
      const secondPicker = page.locator('ix-time-picker').nth(1);
      await secondPicker
        .locator('[data-element-container-id="hour-10"]')
        .focus();

      // Change hour
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      // Change minutes
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      // Change seconds
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      // Change time ref
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');

      expect(await getTimeObjs(page)).toEqual(['09:10:11', '11:12:13 PM']);
    }
  );

  regressionTest(
    'should update scroll position when time value is selected',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      // Get the first time picker
      const firstPicker = page.locator('ix-time-picker').first();

      // Get the initial scroll position of the hour list
      const initialScrollTop = await firstPicker
        .locator('[data-element-list-id="hour"]')
        .evaluate((el) => el.scrollTop);

      await firstPicker.locator('[data-element-container-id="hour-6"]').click();

      await page.waitForTimeout(100);

      const newScrollTop = await firstPicker
        .locator('[data-element-list-id="hour"]')
        .evaluate((el) => el.scrollTop);

      expect(newScrollTop).not.toEqual(initialScrollTop);

      // Verify the scroll follows the scrollPosition calculation
      const isScrollPositionCorrect = await firstPicker
        .locator('[data-element-list-id="hour"]')
        .evaluate((container) => {
          const selectedElement = container.querySelector(
            '[data-element-container-id="hour-6"]'
          ) as HTMLElement;
          const containerHeight = container.clientHeight;
          const elementHeight = selectedElement.clientHeight;

          // This should match the calculation in the elementListScrollToTop method
          const expectedScrollPosition =
            selectedElement.offsetTop -
            containerHeight / 2 +
            elementHeight / 2 -
            13;

          // Allow small differences due to rounding/margin
          return Math.abs(container.scrollTop - expectedScrollPosition) < 5;
        });

      expect(isScrollPositionCorrect).toBe(true);
    }
  );
});
