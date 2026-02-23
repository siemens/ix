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

const createAccessor = async (dateTimeInput: Locator) => {
  return {
    openByCalendar: async () => {
      // Calendar button is aria-hidden, so we select the first icon button
      const trigger = dateTimeInput.locator('ix-icon-button').first();
      await trigger.click();
      await dateTimeInput
        .getByRole('button', { name: /^hr:/ })
        .first()
        .waitFor({ state: 'visible', timeout: 5000 });
    },
    selectDay: async (day: number) => {
      // Day cells have aria-label like "4: 15" (month index: day)
      // Use getByLabel to find by aria-label (day cells are divs, not buttons)
      const dayCell = dateTimeInput.getByLabel(
        new RegExp(String.raw`^\d+: ${day}$`)
      );
      await dayCell.click();
    },
    selectTime: async (hour: number, minute: number, second: number) => {
      // Time buttons have aria-label like "hr: 14", "min: 30", "sec: 45"
      // getByRole pierces shadow DOM automatically
      await dateTimeInput.getByRole('button', { name: `hr: ${hour}` }).click();
      await dateTimeInput
        .getByRole('button', { name: `min: ${minute}` })
        .click();
      await dateTimeInput
        .getByRole('button', { name: `sec: ${second}` })
        .click();
    },
    confirm: async () => {
      // Confirm button has text from i18nDone (default: "Confirm")
      const confirmButton = dateTimeInput.getByRole('button', {
        name: 'Confirm',
      });
      await confirmButton.click();
    },
  };
};

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );
  const dateTimeInputElement = page.locator('ix-datetime-input');
  await expect(dateTimeInputElement).toHaveClass(/hydrated/);
});

regressionTest('displays initial value correctly', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );
  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  await expect(input).toHaveValue('2024/05/05 09:10:11');
});

regressionTest('handles empty initial state', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input placeholder="Select date and time"></ix-datetime-input>`
  );
  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  await expect(input).toHaveValue('');
  await expect(input).toHaveAttribute('placeholder', 'Select date and time');
});

regressionTest(
  'select date and time by open calendar trigger',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
    );
    const dateTimeInputElement = page.locator('ix-datetime-input');
    await expect(dateTimeInputElement).toHaveClass(/hydrated/);

    const dateTimeInput = await createAccessor(dateTimeInputElement);
    await dateTimeInput.openByCalendar();

    await dateTimeInput.selectDay(15);
    await dateTimeInput.selectTime(14, 30, 45);
    await dateTimeInput.confirm();

    await expect(dateTimeInputElement).toHaveAttribute(
      'value',
      '2024/05/15 14:30:45'
    );
    await expect(
      dateTimeInputElement.getByRole('button', { name: 'Confirm' })
    ).not.toBeVisible();
  }
);

regressionTest('calendar button toggles picker', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );

  const dateTimeInputElement = page.locator('ix-datetime-input');
  // Calendar button is aria-hidden, so we use CSS selector
  const calendarButton = dateTimeInputElement.locator('ix-icon-button').first();

  await calendarButton.click();
  await expect(
    dateTimeInputElement.getByRole('button', { name: 'Confirm' })
  ).toBeVisible();

  await calendarButton.click();
  await expect(
    dateTimeInputElement.getByRole('button', { name: 'Confirm' })
  ).not.toBeVisible();
});

regressionTest(
  'calendar button hidden when readonly',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11" readonly></ix-datetime-input>`
    );

    const dateTimeInputElement = page.locator('ix-datetime-input');
    const calendarButton = dateTimeInputElement
      .locator('ix-icon-button')
      .first();
    await expect(calendarButton).toHaveClass(/calendar-hidden/);
  }
);

regressionTest(
  'calendar button disabled when disabled',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11" disabled></ix-datetime-input>`
    );

    const dateTimeInputElement = page.locator('ix-datetime-input');
    const input = dateTimeInputElement.getByRole('textbox');
    const calendarButton = dateTimeInputElement
      .locator('ix-icon-button')
      .first();

    await expect(input).toBeDisabled();
    await expect(calendarButton).toHaveClass(/calendar-hidden/);
  }
);

regressionTest('select date and time by input', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );
  const dateTimeInputElement = page.locator('ix-datetime-input');
  await expect(dateTimeInputElement).toHaveClass(/hydrated/);

  const input = dateTimeInputElement.getByRole('textbox');
  await input.focus();
  await expect(
    dateTimeInputElement.getByRole('button', { name: 'Confirm' })
  ).toBeVisible();

  await input.fill('2025/10/10 14:30:45');

  await expect(dateTimeInputElement).toHaveAttribute(
    'value',
    '2025/10/10 14:30:45'
  );

  await expect(
    dateTimeInputElement.getByRole('button', { name: 'Confirm' })
  ).toBeVisible();

  // Use getByLabel to find by aria-label (day cells are divs, not buttons)
  const selectedDay = dateTimeInputElement.getByLabel(/^\d+: 10$/);
  await expect(selectedDay).toHaveClass(/selected/);

  const selectedHour = dateTimeInputElement.getByRole('button', {
    name: 'hr: 14',
  });
  await expect(selectedHour).toHaveClass(/selected/);
});

regressionTest(
  'valid input keeps dropdown open (no auto-close)',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
    );

    const dateTimeInputElement = page.locator('ix-datetime-input');
    const input = dateTimeInputElement.getByRole('textbox');
    // Calendar button is aria-hidden, so we use CSS selector
    const calendarButton = dateTimeInputElement
      .locator('ix-icon-button')
      .first();

    await calendarButton.click();
    await expect(
      dateTimeInputElement.getByRole('button', { name: 'Confirm' })
    ).toBeVisible();

    await input.fill('2025/10/10 14:30:45');
    await expect(
      dateTimeInputElement.getByRole('button', { name: 'Confirm' })
    ).toBeVisible();
    await expect(dateTimeInputElement).toHaveAttribute(
      'value',
      '2025/10/10 14:30:45'
    );
  }
);

regressionTest('invalid input shows error', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  await input.fill('invalid-datetime');

  await expect(input).toHaveClass(/is-invalid/);
  await expect(dateTimeInput.getByText('Date time is not valid')).toBeVisible();
});

regressionTest('select date and time by focus', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );
  const dateTimeInputElement = page.locator('ix-datetime-input');
  await expect(dateTimeInputElement).toHaveClass(/hydrated/);

  const dateTimeInput = await createAccessor(dateTimeInputElement);
  const input = dateTimeInputElement.getByRole('textbox');
  await input.focus();

  await dateTimeInput.selectDay(20);
  await dateTimeInput.selectTime(15, 45, 30);
  await dateTimeInput.confirm();

  await expect(dateTimeInputElement).toHaveAttribute(
    'value',
    '2024/05/20 15:45:30'
  );
  await expect(
    dateTimeInputElement.getByRole('button', { name: 'Confirm' })
  ).not.toBeVisible();
});

regressionTest('select date and time from picker', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );

  const dateTimeInputElement = page.locator('ix-datetime-input');
  // Calendar button is aria-hidden, so we use CSS selector
  const calendarButton = dateTimeInputElement.locator('ix-icon-button').first();
  await calendarButton.click();

  // Use getByLabel to find by aria-label (day cells are divs, not buttons)
  const dayCell = dateTimeInputElement.getByLabel(/^\d+: 15$/);
  await dayCell.click();

  await dateTimeInputElement.getByRole('button', { name: 'hr: 14' }).click();
  await dateTimeInputElement.getByRole('button', { name: 'min: 30' }).click();
  await dateTimeInputElement.getByRole('button', { name: 'sec: 45' }).click();

  await page.getByRole('button', { name: 'Confirm' }).click();

  const dateTimeInput = page.locator('ix-datetime-input');
  await expect(dateTimeInput).toHaveAttribute('value', '2024/05/15 14:30:45');

  await expect(
    dateTimeInput.getByRole('button', { name: 'Confirm' })
  ).not.toBeVisible();
});

regressionTest('picker syncs with input value', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/15 14:30:45"></ix-datetime-input>`
  );

  const dateTimeInputElement = page.locator('ix-datetime-input');
  // Calendar button is aria-hidden, so we use CSS selector
  const calendarButton = dateTimeInputElement.locator('ix-icon-button').first();
  await calendarButton.click();

  // Use getByLabel to find by aria-label (day cells are divs, not buttons)
  const selectedDay = dateTimeInputElement.getByLabel(/^\d+: 15$/);
  await expect(selectedDay).toHaveClass(/selected/);

  const hourElement = dateTimeInputElement.getByRole('button', {
    name: 'hr: 14',
  });
  const minuteElement = dateTimeInputElement.getByRole('button', {
    name: 'min: 30',
  });
  const secondElement = dateTimeInputElement.getByRole('button', {
    name: 'sec: 45',
  });

  await expect(hourElement).toHaveClass(/selected/);
  await expect(minuteElement).toHaveClass(/selected/);
  await expect(secondElement).toHaveClass(/selected/);
});

regressionTest('input changes reflect in picker', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );

  const dateTimeInputElement = page.locator('ix-datetime-input');
  const input = dateTimeInputElement.getByRole('textbox');

  await input.fill('2024/05/20 15:45:30');

  await expect(dateTimeInputElement).toHaveAttribute(
    'value',
    '2024/05/20 15:45:30'
  );

  const selectedDay = dateTimeInputElement.getByLabel(/^\d+: 20$/);
  await selectedDay.waitFor({ state: 'visible', timeout: 5000 });

  await expect(selectedDay).toHaveClass(/selected/);

  const hourElement = dateTimeInputElement.getByRole('button', {
    name: 'hr: 15',
  });
  const minuteElement = dateTimeInputElement.getByRole('button', {
    name: 'min: 45',
  });
  const secondElement = dateTimeInputElement.getByRole('button', {
    name: 'sec: 30',
  });

  await expect(hourElement).toHaveClass(/selected/);
  await expect(minuteElement).toHaveClass(/selected/);
  await expect(secondElement).toHaveClass(/selected/);
});

regressionTest('invalid date format shows error', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  await input.fill('2025/13/45 25:70:99');

  await expect(input).toHaveClass(/is-invalid/);
  await expect(dateTimeInput.getByText('Date time is not valid')).toBeVisible();
});

regressionTest('validates minDate constraint', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      value="2024/01/10 10:00:00"
      min-date="2024/01/20"
    ></ix-datetime-input>
  `);

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  await expect(input).toHaveClass(/is-invalid/);
});

regressionTest('validates maxDate constraint', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      value="2024/12/25 10:00:00"
      max-date="2024/12/20"
    ></ix-datetime-input>
  `);

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  await expect(input).toHaveClass(/is-invalid/);
});

regressionTest(
  'validates minDate with date boundary',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2024/01/19 23:59:59"
      min-date="2024/01/20"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    await expect(input).toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'validates maxDate with date boundary',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2024/12/20 23:59:59"
      max-date="2024/12/20"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'validates minDate with date-only format',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2024/01/15 10:00:00"
      min-date="2024/01/20"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    await expect(input).toHaveClass(/is-invalid/);
  }
);

regressionTest('required field validation', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input required label="Appointment"></ix-datetime-input>`
  );

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');

  await expect(dateTimeInput).toHaveAttribute('required');
  await expect(dateTimeInput.getByText('Appointment*')).toBeVisible();

  await input.focus();
  // Small delay between focus and blur
  await page.waitForTimeout(50);
  await input.blur();

  await expect(dateTimeInput).toHaveClass(/ix-invalid--required/, {
    timeout: 5000,
  });
});

regressionTest('recovers from invalid state', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );

  const dateTimeInputElement = page.locator('ix-datetime-input');
  const input = dateTimeInputElement.getByRole('textbox');

  await input.fill('invalid-datetime');
  await expect(input).toHaveClass(/is-invalid/);

  await input.fill('2024/06/15 10:30:00');
  await expect(input).not.toHaveClass(/is-invalid/);
  await expect(dateTimeInputElement).toHaveAttribute(
    'value',
    '2024/06/15 10:30:00'
  );
});

regressionTest('form-ready - basic submission', async ({ mount, page }) => {
  await mount(`
    <form>
      <ix-datetime-input name="appointment-time"></ix-datetime-input>
    </form>
  `);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
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

regressionTest(
  'updating value attribute updates validity',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
    );

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');

    await dateTimeInput.evaluateHandle((el) => {
      el.setAttribute('value', 'invalid-datetime');
    });
    await expect(input).toHaveClass(/is-invalid/);

    await dateTimeInput.evaluateHandle((el) => {
      el.setAttribute('value', '2024/06/10 12:30:45');
    });
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest('respects custom format props', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      date-format="dd-MM-yyyy"
      time-format="HH:mm:ss"
      value="15-06-2024 14:30:45"
    ></ix-datetime-input>
  `);

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  await expect(input).toHaveValue('15-06-2024 14:30:45');
});

regressionTest('respects locale prop', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      locale="de-DE"
      value="2024/05/05 09:10:11"
    ></ix-datetime-input>
  `);

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  await expect(input).toHaveValue(/2024/);
});

regressionTest(
  'shows default error message for invalid input',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
    );

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    await input.fill('invalid-datetime');

    await expect(
      dateTimeInput.getByText('Date time is not valid')
    ).toBeVisible();
  }
);

regressionTest(
  'invalidText takes precedence over i18n',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2024/05/05 09:10:11"
      invalid-text="Custom error message"
      i18n-error-date-time-unparsable="i18n error message"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    await input.fill('invalid-datetime');
    await input.blur();

    await expect(dateTimeInput.getByText('Custom error message')).toBeVisible();
  }
);

regressionTest('handles empty value', async ({ mount, page }) => {
  await mount(`<ix-datetime-input></ix-datetime-input>`);

  const dateTimeInputElement = page.locator('ix-datetime-input');
  // Calendar button is aria-hidden, so CSS selector is used
  const calendarButton = dateTimeInputElement.locator('ix-icon-button').first();
  await calendarButton.click();

  await expect(
    dateTimeInputElement.getByRole('button', { name: 'Confirm' })
  ).toBeVisible();
});

regressionTest('handles rapid value changes', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
  );

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');

  await input.fill('2024/01/01 00:00:00');
  await input.fill('2024/06/15 12:30:45');
  await input.fill('2024/12/31 23:59:59');

  await expect(input).toHaveValue('2024/12/31 23:59:59');
  await expect(input).not.toHaveClass(/is-invalid/);
});
