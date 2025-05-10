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
import type { LiteralStringUnion } from './../../components/utils/type-helper';

type FormElementState = LiteralStringUnion<
  'info' | 'warning' | 'valid' | 'invalid'
>;

async function changeState(page: Page, state: FormElementState) {
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
    ) as NodeListOf<HTMLInputElement>;
    Array.from(elements).forEach((element) => {
      element.readOnly = true;
      element.setAttribute('readonly', '');
    });
  });
}

async function changeToDisabled(page: Page) {
  return page.evaluate(() => {
    const elements = document.querySelectorAll(
      '[data-field], ix-radio, ix-checkbox'
    ) as NodeListOf<HTMLInputElement>;
    Array.from(elements).forEach((element) => {
      element.disabled = true;
    });
  });
}

async function verifySlotContent(page: Page, slotName: string, expectedContent: string) {
  const content = await page
    .locator(`[data-field="input-with-slots"] div[slot="${slotName}"]`)
    .first()
    .innerText();
  expect(content).toBe(expectedContent);
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
  regressionTest('should display correct slot content', async ({ page }) => {
    await page.goto('form-fields/basic');

    await verifySlotContent(page, 'helper', 'Helper slot content');
    await verifySlotContent(page, 'info', 'Info slot content');
    await verifySlotContent(page, 'warning', 'Warning slot content');
    await verifySlotContent(page, 'valid', 'Valid slot content');
    await verifySlotContent(page, 'invalid', 'Invalid slot content');
  });
});
