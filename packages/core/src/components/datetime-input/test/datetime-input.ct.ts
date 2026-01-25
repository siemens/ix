/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Locator, expect } from '@playwright/test';
import {
  getFormValue,
  preventFormSubmission,
  regressionTest,
} from '@utils/test';

const createDateTimeInputAccessor = async (dateTimeInput: Locator) => {
  return {
    openByCalendar: async () => {
      const trigger = dateTimeInput.getByTestId('open-datetime-picker');
      await trigger.click();
    },
    selectDay: async (day: number) => {
      const dayButton = dateTimeInput.locator(
        `ix-date-picker .calendar-item[date-calender-day]`
      ).filter({ hasText: new RegExp(`^${day}$`) });
      await dayButton.click();
    },
    selectTime: async (hour: number, minute: number, second: number) => {
      await dateTimeInput
        .locator(`[data-element-container-id="hour-${hour}"]`)
        .click();
      await dateTimeInput
        .locator(`[data-element-container-id="minute-${minute}"]`)
        .click();
      await dateTimeInput
        .locator(`[data-element-container-id="second-${second}"]`)
        .click();
    },
    confirm: async () => {
      const confirmButton = dateTimeInput.locator('ix-datetime-picker .btn-select-date');
      await confirmButton.click();
    },
  };
};

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);
  const dateTimeInputElement = page.locator('ix-datetime-input');
  await expect(dateTimeInputElement).toHaveClass(/hydrated/);
});

regressionTest('displays initial value correctly', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);
  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveValue('2024/05/05 09:10:11');
});

regressionTest('handles empty initial state', async ({ mount, page }) => {
  await mount(`<ix-datetime-input placeholder="Select date and time"></ix-datetime-input>`);
  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveValue('');
  await expect(input).toHaveAttribute('placeholder', 'Select date and time');
});

regressionTest(
  'select date and time by open calendar trigger',
  async ({ mount, page }) => {
    await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);
    const dateTimeInputElement = page.locator('ix-datetime-input');
    await expect(dateTimeInputElement).toHaveClass(/hydrated/);

    const dateTimeInput = await createDateTimeInputAccessor(dateTimeInputElement);
    await dateTimeInput.openByCalendar();

    await dateTimeInput.selectDay(15);
    await dateTimeInput.selectTime(14, 30, 45);
    await dateTimeInput.confirm();

    await expect(dateTimeInputElement).toHaveAttribute('value', '2024/05/15 14:30:45');
    await expect(dateTimeInputElement.getByTestId('datetime-dropdown')).not.toHaveClass(/show/);
  }
);

regressionTest('calendar button toggles picker', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const dropdown = page.locator('ix-dropdown[data-testid="datetime-dropdown"]');
  const calendarButton = page.locator('ix-icon-button[data-testid="open-datetime-picker"]');

  await calendarButton.click();
  await expect(dropdown).toHaveClass(/show/);

  await calendarButton.click();
  await expect(dropdown).not.toHaveClass(/show/);
});

regressionTest('calendar button hidden when readonly', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11" readonly></ix-datetime-input>`);

  const calendarButton = page.locator('ix-icon-button[data-testid="open-datetime-picker"]');
  await expect(calendarButton).toHaveClass(/calendar-hidden/);
});

regressionTest('calendar button disabled when disabled', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11" disabled></ix-datetime-input>`);

  const input = page.locator('ix-datetime-input input');
  const calendarButton = page.locator('ix-icon-button[data-testid="open-datetime-picker"]');

  await expect(input).toBeDisabled();
  await expect(calendarButton).toHaveClass(/calendar-hidden/);
});

regressionTest('select date and time by input', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);
  const dateTimeInputElement = page.locator('ix-datetime-input');
  await expect(dateTimeInputElement).toHaveClass(/hydrated/);

  const dateTimeInput = await createDateTimeInputAccessor(dateTimeInputElement);
  await dateTimeInputElement.locator('input').focus();
  await expect(dateTimeInputElement.getByTestId('datetime-dropdown')).toHaveClass(/show/);

  await dateTimeInputElement.locator('input').fill('2025/10/10 14:30:45');

  await expect(dateTimeInputElement.getByTestId('datetime-dropdown')).not.toHaveClass(/show/);
  await expect(dateTimeInputElement).toHaveAttribute('value', '2025/10/10 14:30:45');

  await dateTimeInput.openByCalendar();

  await expect(dateTimeInputElement.locator('.calendar-item.selected')).toHaveText('10');
  await expect(
    dateTimeInputElement.locator('[data-element-container-id="hour-14"].selected')
  ).toBeVisible();
});

regressionTest('valid input closes dropdown', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const dateTimeInputElement = page.locator('ix-datetime-input');
  const input = dateTimeInputElement.locator('input');
  const calendarButton = page.locator('ix-icon-button[data-testid="open-datetime-picker"]');
  const dropdown = page.locator('ix-dropdown[data-testid="datetime-dropdown"]');

  await calendarButton.click();
  await expect(dropdown).toHaveClass(/show/);

  await input.fill('2025/10/10 14:30:45');
  await expect(dropdown).not.toHaveClass(/show/);
  await expect(dateTimeInputElement).toHaveAttribute('value', '2025/10/10 14:30:45');
});

regressionTest('invalid input shows error', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const input = page.locator('ix-datetime-input input');
  await input.fill('invalid-datetime');

  await expect(input).toHaveClass(/is-invalid/);
  await expect(page.locator('ix-field-wrapper')).toContainText('Date time is not valid');
});

regressionTest('select date and time by focus', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);
  const dateTimeInputElement = page.locator('ix-datetime-input');
  await expect(dateTimeInputElement).toHaveClass(/hydrated/);

  const dateTimeInput = await createDateTimeInputAccessor(dateTimeInputElement);
  await dateTimeInputElement.locator('input').focus();

  await dateTimeInput.selectDay(20);
  await dateTimeInput.selectTime(15, 45, 30);
  await dateTimeInput.confirm();

  await expect(dateTimeInputElement).toHaveAttribute('value', '2024/05/20 15:45:30');
  await expect(dateTimeInputElement.getByTestId('datetime-dropdown')).not.toHaveClass(/show/);
});

regressionTest('select date and time from picker', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const calendarButton = page.locator('ix-icon-button[data-testid="open-datetime-picker"]');
  await calendarButton.click();

  const dayButton = page
    .locator('ix-date-picker .calendar-item[date-calender-day]')
    .filter({ hasText: /^15$/ });
  await dayButton.click();

  await page.locator('ix-time-picker [data-element-container-id="hour-14"]').click();
  await page.locator('ix-time-picker [data-element-container-id="minute-30"]').click();
  await page.locator('ix-time-picker [data-element-container-id="second-45"]').click();

  await page.locator('ix-datetime-picker .btn-select-date').click();

  const dateTimeInput = page.locator('ix-datetime-input');
  await expect(dateTimeInput).toHaveAttribute('value', '2024/05/15 14:30:45');

  const dropdown = page.locator('ix-dropdown[data-testid="datetime-dropdown"]');
  await expect(dropdown).not.toHaveClass(/show/);
});

regressionTest('picker syncs with input value', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/15 14:30:45"></ix-datetime-input>`);

  const calendarButton = page.locator('ix-icon-button[data-testid="open-datetime-picker"]');
  await calendarButton.click();

  const selectedDay = page.locator('ix-date-picker .calendar-item.selected');
  await expect(selectedDay).toHaveText('15');

  const hourElement = page.locator('ix-time-picker [data-element-container-id="hour-14"]');
  const minuteElement = page.locator('ix-time-picker [data-element-container-id="minute-30"]');
  const secondElement = page.locator('ix-time-picker [data-element-container-id="second-45"]');

  await expect(hourElement).toHaveClass(/selected/);
  await expect(minuteElement).toHaveClass(/selected/);
  await expect(secondElement).toHaveClass(/selected/);
});

regressionTest('input changes reflect in picker', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const input = page.locator('ix-datetime-input input');
  const calendarButton = page.locator('ix-icon-button[data-testid="open-datetime-picker"]');

  await input.fill('2024/05/20 15:45:30');

  await calendarButton.click();

  const selectedDay = page.locator('ix-date-picker .calendar-item.selected');
  await expect(selectedDay).toHaveText('20');

  const hourElement = page.locator('ix-time-picker [data-element-container-id="hour-15"]');
  const minuteElement = page.locator('ix-time-picker [data-element-container-id="minute-45"]');
  const secondElement = page.locator('ix-time-picker [data-element-container-id="second-30"]');

  await expect(hourElement).toHaveClass(/selected/);
  await expect(minuteElement).toHaveClass(/selected/);
  await expect(secondElement).toHaveClass(/selected/);
});

regressionTest('invalid date format shows error', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const input = page.locator('ix-datetime-input input');
  await input.fill('2025/13/45 25:70:99');

  await expect(input).toHaveClass(/is-invalid/);
  await expect(page.locator('ix-field-wrapper')).toContainText('Date time is not valid');
});

regressionTest('validates minDate constraint', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input 
      value="2024/01/10 10:00:00" 
      min-date="2024/01/20"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveClass(/is-invalid/);
});

regressionTest('validates maxDate constraint', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input 
      value="2024/12/25 10:00:00" 
      max-date="2024/12/20"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveClass(/is-invalid/);
});

regressionTest('validates minDate with date boundary', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input 
      value="2024/01/19 23:59:59" 
      min-date="2024/01/20"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveClass(/is-invalid/);
});

regressionTest('validates maxDate with date boundary', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input 
      value="2024/12/20 23:59:59" 
      max-date="2024/12/20"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await expect(input).not.toHaveClass(/is-invalid/);
});

regressionTest('validates minDate with date-only format', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input 
      value="2024/01/15 10:00:00" 
      min-date="2024/01/20"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveClass(/is-invalid/);
});

regressionTest('required field validation', async ({ mount, page }) => {
  await mount(`<ix-datetime-input required label="Appointment"></ix-datetime-input>`);

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.locator('input');

  await expect(dateTimeInput).toHaveAttribute('required');
  await expect(dateTimeInput.locator('ix-field-label')).toHaveText('Appointment*');

  await input.focus();
  await input.blur();

  await expect(dateTimeInput).toHaveClass(/ix-invalid--required/);
});

regressionTest('recovers from invalid state', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const dateTimeInputElement = page.locator('ix-datetime-input');
  const input = dateTimeInputElement.locator('input');

  await input.fill('invalid-datetime');
  await expect(input).toHaveClass(/is-invalid/);

  await input.fill('2024/06/15 10:30:00');
  await expect(input).not.toHaveClass(/is-invalid/);
  await expect(dateTimeInputElement).toHaveAttribute('value', '2024/06/15 10:30:00');
});

regressionTest('form-ready - basic submission', async ({ mount, page }) => {
  await mount(`
    <form>
      <ix-datetime-input name="appointment-time"></ix-datetime-input>
    </form>
  `);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);

  const input = page.locator('ix-datetime-input input');
  await input.fill('2024/05/05 14:30:00');
  await input.blur();

  const formData = await getFormValue(formElement, 'appointment-time', page);
  expect(formData).toBe('2024/05/05 14:30:00');
});

regressionTest('form-ready - initial value', async ({ mount, page }) => {
  await mount(`
    <form>
      <ix-datetime-input 
        name="appointment-time" 
        value="2024/12/25 10:00:00"
      ></ix-datetime-input>
    </form>
  `);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);

  const formData = await getFormValue(formElement, 'appointment-time', page);
  expect(formData).toBe('2024/12/25 10:00:00');
});

regressionTest('updating value attribute updates validity', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = page.locator('input');

  await dateTimeInput.evaluateHandle((el) => {
    el.setAttribute('value', 'invalid-datetime');
  });
  await expect(input).toHaveClass(/is-invalid/);

  await dateTimeInput.evaluateHandle((el) => {
    el.setAttribute('value', '2024/06/10 12:30:45');
  });
  await expect(input).not.toHaveClass(/is-invalid/);
});

regressionTest('respects custom format props', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input 
      date-format="dd-MM-yyyy" 
      time-format="HH:mm:ss" 
      value="15-06-2024 14:30:45"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveValue('15-06-2024 14:30:45');
});

regressionTest('respects locale prop', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input 
      locale="de-DE" 
      value="2024/05/05 09:10:11"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveValue(/2024/);
});

regressionTest('shows default error message for invalid input', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const input = page.locator('ix-datetime-input input');
  await input.fill('invalid-datetime');

  await expect(page.locator('ix-field-wrapper')).toContainText('Date time is not valid');
});

regressionTest('invalidText takes precedence over i18n', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input 
      value="2024/05/05 09:10:11" 
      invalid-text="Custom error message"
      i18n-error-date-time-unparsable="i18n error message"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await input.fill('invalid-datetime');
  await input.blur();

  await expect(
    page
      .locator('ix-field-wrapper')
      .locator('ix-typography')
      .filter({ hasText: 'Custom error message' })
  ).toHaveText('Custom error message');
});

regressionTest('handles empty value', async ({ mount, page }) => {
  await mount(`<ix-datetime-input></ix-datetime-input>`);

  const calendarButton = page.locator('ix-icon-button[data-testid="open-datetime-picker"]');
  await calendarButton.click();

  const dropdown = page.locator('ix-dropdown[data-testid="datetime-dropdown"]');
  await expect(dropdown).toHaveClass(/show/);
});

regressionTest('handles rapid value changes', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);

  const input = page.locator('ix-datetime-input input');

  await input.fill('2024/01/01 00:00:00');
  await input.fill('2024/06/15 12:30:45');
  await input.fill('2024/12/31 23:59:59');

  await expect(input).toHaveValue('2024/12/31 23:59:59');
  await expect(input).not.toHaveClass(/is-invalid/);
});

