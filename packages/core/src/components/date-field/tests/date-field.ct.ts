/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Locator, expect } from '@playwright/test';
import { test } from '@utils/test';

const createDateFieldAccessor = async (dateField: Locator) => {
  const handle = {
    openByCalender: async () => {
      const trigger = dateField.getByTestId('open-calendar');
      await trigger.click();
    },
    selectDay: async (day: number) => {
      const dayButton = dateField
        .locator('ix-dropdown')
        .filter({ hasText: day.toString() })
        .getByText(day.toString());
      await dayButton.click();
    },
  };

  return handle;
};

test('renders', async ({ mount, page }) => {
  await mount(`<ix-date-field value="2024/05/05"></ix-date-field>`);
  const dateFieldElement = page.locator('ix-date-field');
  await expect(dateFieldElement).toHaveClass(/hydrated/);
});

test('select date by open calendar trigger', async ({ mount, page }) => {
  await mount(`<ix-date-field value="2024/05/05"></ix-date-field>`);
  const dateFieldElement = page.locator('ix-date-field');
  await expect(dateFieldElement).toHaveClass(/hydrated/);

  const dateField = await createDateFieldAccessor(dateFieldElement);
  await dateField.openByCalender();

  await dateField.selectDay(10);
  await expect(dateFieldElement).toHaveAttribute('value', '2024/05/10');
});

test('select date by focus', async ({ mount, page }) => {
  await mount(`<ix-date-field value="2024/05/05"></ix-date-field>`);
  const dateFieldElement = page.locator('ix-date-field');
  await expect(dateFieldElement).toHaveClass(/hydrated/);

  const dateField = await createDateFieldAccessor(dateFieldElement);
  await dateFieldElement.locator('input').focus();

  await dateField.selectDay(10);
  await expect(dateFieldElement).toHaveAttribute('value', '2024/05/10');
  await expect(dateFieldElement.getByTestId('date-dropdown')).not.toHaveClass(
    /show/
  );
});

test('select date by input', async ({ mount, page }) => {
  await mount(`<ix-date-field value="2024/05/05"></ix-date-field>`);
  const dateFieldElement = page.locator('ix-date-field');
  await expect(dateFieldElement).toHaveClass(/hydrated/);

  const dateField = await createDateFieldAccessor(dateFieldElement);
  await dateFieldElement.locator('input').focus();
  await expect(dateFieldElement.getByTestId('date-dropdown')).toHaveClass(
    /show/
  );
  await dateFieldElement.locator('input').fill('2025/10/10');

  await expect(dateFieldElement.getByTestId('date-dropdown')).not.toHaveClass(
    /show/
  );
  await expect(dateFieldElement).toHaveAttribute('value', '2025/10/10');

  await dateField.openByCalender();

  await expect(dateFieldElement.locator('.calendar-item.selected')).toHaveText(
    '10'
  );
});

test('select date by input with invalid date', async ({ mount, page }) => {
  await mount(`<ix-date-field value="2024/05/05"></ix-date-field>`);
  const dateFieldElement = page.locator('ix-date-field');
  await expect(dateFieldElement).toHaveClass(/hydrated/);

  const dateField = await createDateFieldAccessor(dateFieldElement);
  await dateFieldElement.locator('input').fill('2025/10/10/10');
  await dateField.openByCalender();
  await expect(dateFieldElement).toHaveAttribute('value', '2025/10/10/10');

  await expect(
    dateFieldElement
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
    `<ix-date-field value="2024/05/05" i18n-error-date-unparsable="Datum nicht korrekt!"></ix-date-field>`
  );
  const dateFieldElement = page.locator('ix-date-field');
  await expect(dateFieldElement).toHaveClass(/hydrated/);

  const dateField = await createDateFieldAccessor(dateFieldElement);
  await dateFieldElement.locator('input').fill('2025/10/10/10');
  await dateField.openByCalender();
  await expect(dateFieldElement).toHaveAttribute('value', '2025/10/10/10');

  await expect(
    dateFieldElement
      .locator('ix-field-wrapper')
      .locator('ix-typography')
      .filter({ hasText: 'Datum nicht korrekt!' })
  ).toHaveText('Datum nicht korrekt!');
});

test('required', async ({ mount, page }) => {
  await mount(`<ix-date-field required label="MyLabel"></ix-date-field>`);
  const dateFieldElement = page.locator('ix-date-field');
  await expect(dateFieldElement).toHaveAttribute('required');

  await expect(dateFieldElement.locator('ix-field-label')).toHaveText(
    'MyLabel *'
  );

  await expect(dateFieldElement).toHaveClass(/ix-invalid--required/);
});
