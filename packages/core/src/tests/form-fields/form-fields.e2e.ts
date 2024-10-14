/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

async function changeState(
  page: Page,
  state:
    | 'info'
    | 'warning'
    | 'valid'
    | 'invalid'
    | (string & Record<never, never>)
) {
  return page.evaluate(
    ([state]) => {
      const elements = document.querySelectorAll(
        '[data-field], ix-radio, ix-checkbox'
      );
      Array.from(elements).forEach((element) =>
        element.classList.add(`ix-${state}`)
      );
    },
    [state]
  );
}

async function changeToReadonly(page: Page) {
  return page.evaluate(() => {
    const elements = document.querySelectorAll(
      '[data-field], ix-radio, ix-checkbox'
    );
    Array.from(elements).forEach((element: HTMLInputElement) => {
      element.readOnly = true;
      element.setAttribute('readonly', '');
    });
  });
}

async function changeToDisabled(page: Page) {
  return page.evaluate(() => {
    const elements = document.querySelectorAll(
      '[data-field], ix-radio, ix-checkbox'
    );
    Array.from(elements).forEach((element: HTMLInputElement) => {
      element.disabled = true;
    });
  });
}

regressionTest.describe('form-fields', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('form-fields/basic');
    expect(await page.screenshot()).toMatchSnapshot();
  });

  ['info', 'warning', 'valid', 'invalid'].forEach((state) =>
    regressionTest(`state ${state}`, async ({ page }) => {
      await page.goto('form-fields/basic');

      await changeState(page, state);
      expect(await page.screenshot()).toMatchSnapshot();
    })
  );

  ['info', 'warning', 'valid', 'invalid'].forEach((state) =>
    regressionTest(`state ${state} with readonly`, async ({ page }) => {
      await page.goto('form-fields/basic');

      await changeToReadonly(page);
      await changeState(page, state);
      expect(await page.screenshot()).toMatchSnapshot();
    })
  );

  ['info', 'warning', 'valid', 'invalid'].forEach((state) =>
    regressionTest(`state ${state} with disabled`, async ({ page }) => {
      await page.goto('form-fields/basic');

      await changeToDisabled(page);
      await changeState(page, state);
      expect(await page.screenshot()).toMatchSnapshot();
    })
  );
});
