/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Locator, expect } from '@playwright/test';
import { getFormValue, preventFormSubmission, test } from '@utils/test';

const createDateInputAccessor = async (dateInput: Locator) => {
  const handle = {
    openByCalender: async () => {
      const trigger = dateInput.getByTestId('open-calendar');
      await trigger.click();
    },
    selectDay: async (day: number) => {
      const dayButton = dateInput
        .locator('ix-dropdown')
        .filter({ hasText: day.toString() })
        .getByText(day.toString());
      await dayButton.click();
    },
  };

  return handle;
};

test('renders', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveClass(/hydrated/);
});

test('select date by open calendar trigger', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveClass(/hydrated/);

  const dateInput = await createDateInputAccessor(dateInputElement);
  await dateInput.openByCalender();

  await dateInput.selectDay(10);
  await expect(dateInputElement).toHaveAttribute('value', '2024/05/10');
});

test('select date by focus', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveClass(/hydrated/);

  const dateInput = await createDateInputAccessor(dateInputElement);
  await dateInputElement.locator('input').focus();

  await dateInput.selectDay(10);
  await expect(dateInputElement).toHaveAttribute('value', '2024/05/10');
  await expect(dateInputElement.getByTestId('date-dropdown')).not.toHaveClass(
    /show/
  );
});

test('select date by input', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveClass(/hydrated/);

  const dateInput = await createDateInputAccessor(dateInputElement);
  await dateInputElement.locator('input').focus();
  await expect(dateInputElement.getByTestId('date-dropdown')).toHaveClass(
    /show/
  );
  await dateInputElement.locator('input').fill('2025/10/10');

  await expect(dateInputElement.getByTestId('date-dropdown')).not.toHaveClass(
    /show/
  );
  await expect(dateInputElement).toHaveAttribute('value', '2025/10/10');

  await dateInput.openByCalender();

  await expect(dateInputElement.locator('.calendar-item.selected')).toHaveText(
    '10'
  );
});

test('select date by input with invalid date', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveClass(/hydrated/);

  const dateInput = await createDateInputAccessor(dateInputElement);
  await dateInputElement.locator('input').fill('2025/10/10/10');
  await dateInput.openByCalender();
  await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');

  await expect(
    dateInputElement
      .locator('ix-field-wrapper')
      .locator('ix-typography')
      .filter({ hasText: 'Date is not valid' })
  ).toHaveText('Date is not valid');
});

test('select date by input with invalid date - i18n', async ({
  mount,
  page,
}) => {
  await mount(
    `<ix-date-input value="2024/05/05" i18n-error-date-unparsable="Datum nicht korrekt!"></ix-date-input>`
  );
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveClass(/hydrated/);

  const dateInput = await createDateInputAccessor(dateInputElement);
  await dateInputElement.locator('input').fill('2025/10/10/10');
  await dateInput.openByCalender();
  await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');

  await expect(
    dateInputElement
      .locator('ix-field-wrapper')
      .locator('ix-typography')
      .filter({ hasText: 'Datum nicht korrekt!' })
  ).toHaveText('Datum nicht korrekt!');
});

test('required', async ({ mount, page }) => {
  await mount(`<ix-date-input required label="MyLabel"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  const input = dateInputElement.locator('input');
  await expect(dateInputElement).toHaveAttribute('required');

  await expect(dateInputElement.locator('ix-field-label')).toHaveText(
    'MyLabel *'
  );

  await input.focus();
  await input.blur();

  await expect(dateInputElement).toHaveClass(/ix-invalid--required/);
});

test(`form-ready - ix-date-input`, async ({ mount, page }) => {
  await mount(
    `<form><ix-date-input name="my-field-name"></ix-date-input></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-date-input').locator('input');
  await input.fill('2024/05/05');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('2024/05/05');
});

test(`form-ready - ix-date-input initial value`, async ({ mount, page }) => {
  await mount(
    `<form><ix-date-input name="my-field-name" value="2024/12/12"></ix-date-input></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('2024/12/12');
});
