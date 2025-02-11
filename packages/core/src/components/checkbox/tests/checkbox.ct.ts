/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getFormValue, preventFormSubmission, test } from '@utils/test';
import { expect } from '@playwright/test';

test(`form-ready`, async ({ mount, page }) => {
  await mount(`<form><ix-checkbox name="my-field-name"></ix-checkbox></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-checkbox').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

test(`form-ready with value`, async ({ mount, page }) => {
  await mount(
    `<form><ix-checkbox name="my-field-name" value="custom-value"></ix-checkbox></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-checkbox').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('custom-value');
});

test(`form-ready default active`, async ({ mount, page }) => {
  await mount(
    `<form><ix-checkbox name="my-field-name" checked></ix-checkbox></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

test(`disabled`, async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label" disabled></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox');
  await expect(checkboxElement).toBeDisabled();
});

test(`disabled = undefined`, async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label"></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox');
  const nativeInput = checkboxElement.locator('input');
  const label = checkboxElement.locator('ix-typography');

  const checkedChange$ = checkboxElement.evaluate(
    (element: HTMLIxCheckboxElement) => {
      // Needs to be tested because at runtime undefined assignment could happen
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      element.disabled = undefined as any;
      return new Promise<void>((resolve) => {
        element.addEventListener('checkedChange', () => resolve());
      });
    }
  );

  await checkboxElement.click();
  await checkedChange$;

  await expect(checkboxElement).not.toHaveClass(/disabled/);
  await expect(nativeInput).not.toBeDisabled();

  const checkboxLabelColor = 'rgba(245, 252, 255, 0.93)';
  await expect(label).toHaveCSS('color', checkboxLabelColor);
});

test('label', async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label"></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox').locator('label');
  await expect(checkboxElement).toHaveText('some label');
});
