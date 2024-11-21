/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { getFormValue, preventFormSubmission, regressionTest } from '@utils/test';

regressionTest('form-ready', async ({ mount, page }) => {
  await mount(
    `<form><ix-radio name="my-radio" value="Test"></ix-radio></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const radio = page.locator('ix-radio');
  await radio.click();

  const formData = await getFormValue(formElement, 'my-radio', page);
  expect(formData).toBe('Test');
});

regressionTest('form-ready with default value', async ({ mount, page }) => {
  await mount(`<form><ix-radio name="my-radio"></ix-radio></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const radio = page.locator('ix-radio');
  await radio.click();

  const formData = await getFormValue(formElement, 'my-radio', page);
  expect(formData).toBe('on');
});

regressionTest(`form-ready default active`, async ({ mount, page }) => {
  await mount(
    `<form><ix-radio name="my-field-name" checked></ix-radio></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});
