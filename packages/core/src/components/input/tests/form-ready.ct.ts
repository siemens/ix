/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  getFormValue,
  preventFormSubmission,
  regressionTest,
} from '@utils/test';
import { expect } from '@playwright/test';

regressionTest(`form-ready - ix-input`, async ({ mount, page }) => {
  await mount(`<form><ix-input name="my-field-name"></ix-input></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-input').locator('input');
  await input.fill('my example');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('my example');
});

regressionTest(`form-ready - ix-number-input`, async ({ mount, page }) => {
  await mount(
    `<form><ix-number-input name="my-field-name"></ix-number-input></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-number-input').locator('input');
  await input.fill('123');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('123');
});

regressionTest(`form-ready - ix-textarea`, async ({ mount, page }) => {
  await mount(`<form><ix-textarea name="my-field-name"></ix-textarea></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-textarea').locator('textarea');
  await input.fill('Some longer text');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('Some longer text');
});

//
regressionTest(
  `form-ready - ix-input with initial value`,
  async ({ mount, page }) => {
    await mount(
      `<form><ix-input name="my-field-name" value="initial value"></ix-input></form>`
    );

    const formElement = page.locator('form');
    preventFormSubmission(formElement);
    const formData = await getFormValue(formElement, 'my-field-name', page);
    expect(formData).toBe('initial value');
  }
);

regressionTest(
  `form-ready - ix-number-input with initial value`,
  async ({ mount, page }) => {
    await mount(
      `<form><ix-number-input name="my-field-name" value="1337"></ix-number-input></form>`
    );

    const formElement = page.locator('form');
    preventFormSubmission(formElement);
    const formData = await getFormValue(formElement, 'my-field-name', page);
    expect(formData).toBe('1337');
  }
);

regressionTest(
  `form-ready - ix-textarea with initial value`,
  async ({ mount, page }) => {
    await mount(
      `<form><ix-textarea name="my-field-name" value="initial value"></ix-textarea></form>`
    );

    const formElement = page.locator('form');
    preventFormSubmission(formElement);
    const formData = await getFormValue(formElement, 'my-field-name', page);
    expect(formData).toBe('initial value');
  }
);
