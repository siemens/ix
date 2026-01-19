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

const waitForScrollAnimations = async (page: Page) => {
  await page.evaluate(() => {
    // Check if scroll position has changed by less than 0.5px
    const isScrollStable = (
      currentScrollTop: number,
      lastScrollTop: number
    ) => {
      const scrollDiff = Math.abs(currentScrollTop - lastScrollTop);

      return scrollDiff < 0.5;
    };

    // Schedule next stability check or resolve if stable for 5 frames
    const scheduleStabilityCheck = (
      element: Element,
      currentScrollTop: number,
      stableCount: number,
      resolve: () => void
    ) => {
      const newStableCount = stableCount + 1;

      if (newStableCount >= 5) {
        resolve();
        return;
      }

      requestAnimationFrame(() =>
        checkScrollStable(element, currentScrollTop, newStableCount, resolve)
      );
    };

    // Recursively check if scroll position is stable across frames
    const checkScrollStable = (
      element: Element,
      lastScrollTop: number,
      stableCount: number,
      resolve: () => void
    ): void => {
      const currentScrollTop = element.scrollTop;

      if (isScrollStable(currentScrollTop, lastScrollTop)) {
        scheduleStabilityCheck(element, currentScrollTop, stableCount, resolve);
        return;
      }

      requestAnimationFrame(() =>
        checkScrollStable(element, currentScrollTop, 0, resolve)
      );
    };

    // Initialize stability check on next animation frame
    const startStabilityCheck = (element: Element, resolve: () => void) => {
      requestAnimationFrame(() =>
        checkScrollStable(element, element.scrollTop, 0, resolve)
      );
    };

    // Wait for element scroll to become stable
    const waitForStableScroll = (element: Element) => {
      return new Promise<void>((resolve) => {
        startStabilityCheck(element, resolve);
      });
    };

    const lists = document
      .querySelectorAll('ix-time-picker')[0]
      .shadowRoot!.querySelectorAll('.element-list');

    return Promise.all(Array.from(lists).map(waitForStableScroll));
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
          timePicker?.addEventListener('timeSelect', (event) => {
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
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      // Change seconds
      await page.keyboard.press('Tab');
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
    'selected values should remain top-aligned after scrolling through all columns',
    async ({ page }) => {
      await page.waitForSelector('ix-date-time-card');

      const firstPicker = page.locator('ix-time-picker').first();
      await firstPicker.locator('[data-element-container-id="hour-9"]').focus();

      for (let i = 0; i < 6; i++) {
        await page.keyboard.press('ArrowDown');
      }
      await page.keyboard.press('Tab');

      for (let i = 0; i < 2; i++) {
        await page.keyboard.press('ArrowUp');
      }
      await page.keyboard.press('Tab');

      for (let i = 0; i < 2; i++) {
        await page.keyboard.press('ArrowUp');
      }
      await page.keyboard.press('Tab');

      const checkScrollAlignment = async (locator: any) => {
        return await locator.evaluate((el: HTMLElement) => {
          const list = el.parentElement!;
          // Offset from time-picker.tsx elementListScrollToTop
          const scrollPositionOffset = 11;
          // Scrollposition calculation from time-picker.tsx elementListScrollToTop
          const expected =
            el.offsetTop -
            list.clientHeight / 2 +
            el.clientHeight -
            scrollPositionOffset;

          // <= 5 px tolerance
          return Math.abs(list.scrollTop - expected) <= 5;
        });
      };

      const hourColumn = firstPicker.locator(
        '[data-element-container-id="hour-9"]'
      );
      const minuteColumn = firstPicker.locator(
        '[data-element-container-id="minute-10"]'
      );
      const secondColumn = firstPicker.locator(
        '[data-element-container-id="second-11"]'
      );

      await waitForScrollAnimations(page);

      expect(await checkScrollAlignment(hourColumn)).toBe(true);
      expect(await checkScrollAlignment(minuteColumn)).toBe(true);
      expect(await checkScrollAlignment(secondColumn)).toBe(true);
    }
  );
});
