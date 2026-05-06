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

interface DateTimeInputElementWithEventFlag extends HTMLIxDatetimeInputElement {
  _changeEventFired?: boolean;
}

const createAccessor = async (dateTimeInput: Locator) => {
  const accessor = {
    openByCalendar: async () => {
      // Calendar button is aria-hidden, so we select the first icon button
      const trigger = dateTimeInput.locator('ix-icon-button').first();
      await trigger.click();
      const dropdown = dateTimeInput.locator('> ix-dropdown');
      await expect(dropdown).toBeVisible();
      await expect(dropdown).toHaveClass(/show/);
    },
    selectDay: async (day: number) => {
      // Day cells have aria-label like "15 May" (month index: day)
      // Use getByLabel to find by aria-label (day cells are divs, not buttons)
      const dayCell = dateTimeInput.getByRole('button', {
        name: new RegExp(String.raw`^${day}\s.+$`),
      });
      await dayCell.click();
    },
    selectTime: async (hour: number, minute: number, second?: number) => {
      // Time buttons have aria-label like "hr: 14", "min: 30", "sec: 45"
      // getByRole pierces shadow DOM automatically
      await dateTimeInput.getByRole('button', { name: `hr: ${hour}` }).click();
      await dateTimeInput
        .getByRole('button', { name: `min: ${minute}` })
        .click();
      if (second !== undefined) {
        await dateTimeInput
          .getByRole('button', { name: `sec: ${second}` })
          .click();
      }
    },
    confirm: async () => {
      // Confirm button has text from i18nDone (default: "Confirm")
      const confirmButton = dateTimeInput.getByRole('button', {
        name: 'Confirm',
      });
      await confirmButton.click();
    },
    expectCalendarToBeVisible: async () => {
      const dropdown = dateTimeInput.locator('> ix-dropdown');
      await expect(dropdown).toBeVisible();
      await expect(dropdown).toHaveClass(/show/);
    },
    expectToHaveErrorMessage: async (message: string) => {
      const input = dateTimeInput.getByRole('textbox');
      const errorMessageId = await input.evaluate((el) =>
        el.getAttribute('aria-errormessage')
      );

      expect(errorMessageId).toMatch(/ix-component-ix-field-wrapper-.*/g);
      await expect(dateTimeInput.locator(`#${errorMessageId}`)).toHaveText(
        message
      );
    },
  };
  return accessor;
};

/** `expectedDateFormat` is the date-only mask on `ix-datetime-picker` (`dateFormat`); `expectedTimeFormat` is `timeFormat`. */
const expectNestedDatetimePickerFormats = async (
  dateTimeInput: Locator,
  expectedDateFormat: string,
  expectedTimeFormat: string
) => {
  const picker = dateTimeInput.locator('ix-datetime-picker');
  const props = await picker.evaluate(
    (el: HTMLElement & { dateFormat?: string; timeFormat?: string }) => ({
      dateFormat: el.dateFormat,
      timeFormat: el.timeFormat,
    })
  );
  expect(props.dateFormat).toBe(expectedDateFormat);
  expect(props.timeFormat).toBe(expectedTimeFormat);
};

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-datetime-input value="2026/02/08 00:00:00"></ix-datetime-input>
  `);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

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
  await input.fill('2025/10/10 14:30:45');
  await expect(dateTimeInputElement).toHaveAttribute(
    'value',
    '2025/10/10 14:30:45'
  );

  await input.focus();
  await page.keyboard.press('ArrowDown');

  await expect(
    dateTimeInputElement.getByRole('button', { name: 'Confirm' })
  ).toBeVisible();

  // Use getByLabel to find by aria-label (day cells are divs, not buttons)
  const selectedDay = dateTimeInputElement.getByLabel(/^10\s.+$/);
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
  const dateTimeAccessor = await createAccessor(dateTimeInput);
  const input = dateTimeInput.getByRole('textbox');
  await input.fill('invalid-datetime');

  await expect(input).toHaveClass(/is-invalid/);
  await dateTimeAccessor.expectToHaveErrorMessage('Date time is not valid');
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

  await page.keyboard.press('ArrowDown');
  await dateTimeInput.expectCalendarToBeVisible();

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

  const dateTimeAccessor = await createAccessor(dateTimeInputElement);
  await dateTimeAccessor.openByCalendar();

  await dateTimeAccessor.selectDay(15);

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

regressionTest(
  'emits ixChange on blur when value changed',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input format="yyyy/LL/dd HH:mm:ss" value="2024/05/05 09:10:11"></ix-datetime-input>`
    );

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');

    const ixChangePromise = dateTimeInput.evaluate((el) => {
      return new Promise<string | undefined>((resolve) => {
        el.addEventListener(
          'ixChange',
          ((e: CustomEvent) => resolve(e.detail)) as EventListener,
          { once: true }
        );
      });
    });

    await input.focus();
    await input.fill('2024/06/20 16:45:00');
    await input.blur();

    const emittedValue = await ixChangePromise;
    expect(emittedValue).toBe('2024/06/20 16:45:00');
  }
);

regressionTest(
  'emits ixChange when datetime is picked',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input format="yyyy/LL/dd HH:mm:ss" value="2024/05/05 09:10:11"></ix-datetime-input>`
    );

    const dateTimeInputElement = page.locator('ix-datetime-input');
    const dateTimeAccessor = await createAccessor(dateTimeInputElement);

    const ixChangePromise = dateTimeInputElement.evaluate((el) => {
      return new Promise<string | undefined>((resolve) => {
        el.addEventListener(
          'ixChange',
          ((e: CustomEvent) => resolve(e.detail)) as EventListener,
          { once: true }
        );
      });
    });

    await dateTimeAccessor.openByCalendar();
    await dateTimeAccessor.selectDay(15);
    await dateTimeAccessor.selectTime(14, 30, 45);
    await dateTimeAccessor.confirm();

    const emittedValue = await ixChangePromise;
    expect(emittedValue).toBe('2024/05/15 14:30:45');
  }
);

regressionTest(
  'does not emit ixChange when picker closed without changes',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
    );

    const dateTimeInput = page.locator('ix-datetime-input');
    const calendarButton = dateTimeInput.locator('ix-icon-button').first();

    // Set up event listener that stores flag on the element itself
    await dateTimeInput.evaluate((el: DateTimeInputElementWithEventFlag) => {
      el._changeEventFired = false;
      el.addEventListener('ixChange', () => {
        el._changeEventFired = true;
      });
    });

    await calendarButton.click();
    await expect(
      dateTimeInput.getByRole('button', { name: 'Confirm' })
    ).toBeVisible();

    // Close picker without confirming (press Escape key)
    await page.keyboard.press('Escape');
    await expect(
      dateTimeInput.getByRole('button', { name: 'Confirm' })
    ).not.toBeVisible();

    // Wait a bit to ensure no event is fired
    await page.waitForTimeout(100);

    const eventFired = await dateTimeInput.evaluate(
      (el: DateTimeInputElementWithEventFlag) => el._changeEventFired
    );
    expect(eventFired).toBe(false);
  }
);

regressionTest(
  'does not emit ixChange on blur when value unchanged',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
    );

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');

    // Set up event listener that stores flag on the element itself
    await dateTimeInput.evaluate((el: DateTimeInputElementWithEventFlag) => {
      el._changeEventFired = false;
      el.addEventListener('ixChange', () => {
        el._changeEventFired = true;
      });
    });

    // Focus and blur without changing value
    await input.focus();
    await page.waitForTimeout(50);
    await input.blur();
    await page.waitForTimeout(100);

    const eventFired = await dateTimeInput.evaluate(
      (el: DateTimeInputElementWithEventFlag) => el._changeEventFired
    );
    expect(eventFired).toBe(false);
  }
);

regressionTest(
  'does not emit ixChange when picker opened and toggled via calendar button',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
    );

    const dateTimeInput = page.locator('ix-datetime-input');
    const calendarButton = dateTimeInput.locator('ix-icon-button').first();

    // Set up event listener that stores flag on the element itself
    await dateTimeInput.evaluate((el: DateTimeInputElementWithEventFlag) => {
      el._changeEventFired = false;
      el.addEventListener('ixChange', () => {
        el._changeEventFired = true;
      });
    });

    // Open picker
    await calendarButton.click();
    await expect(
      dateTimeInput.getByRole('button', { name: 'Confirm' })
    ).toBeVisible();

    // Close picker by clicking calendar button again (toggle off)
    await calendarButton.click();
    await expect(
      dateTimeInput.getByRole('button', { name: 'Confirm' })
    ).not.toBeVisible();

    // Wait to ensure no event is fired
    await page.waitForTimeout(100);

    const eventFired = await dateTimeInput.evaluate(
      (el: DateTimeInputElementWithEventFlag) => el._changeEventFired
    );
    expect(eventFired).toBe(false);
  }
);

regressionTest('picker syncs with input value', async ({ mount, page }) => {
  await mount(
    `<ix-datetime-input value="2024/05/15 14:30:45"></ix-datetime-input>`
  );

  const dateTimeInputElement = page.locator('ix-datetime-input');
  const dateTimeAccessor = await createAccessor(dateTimeInputElement);
  await dateTimeAccessor.openByCalendar();
  // Use getByLabel to find by aria-label (day cells are divs, not buttons)
  const selectedDay = dateTimeInputElement.getByRole('button', {
    name: '15 May',
  });
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
  const dateTimeAccessor = await createAccessor(dateTimeInputElement);
  const input = dateTimeInputElement.getByRole('textbox');

  await input.fill('2024/05/20 15:45:30');

  await expect(dateTimeInputElement).toHaveAttribute(
    'value',
    '2024/05/20 15:45:30'
  );

  await dateTimeAccessor.openByCalendar();

  const selectedDay = dateTimeInputElement.getByLabel('20 May');
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
  const dateTimeAccessor = await createAccessor(dateTimeInput);
  const input = dateTimeInput.getByRole('textbox');
  await input.fill('2025/13/45 25:70:99');

  await expect(input).toHaveClass(/is-invalid/);
  await dateTimeAccessor.expectToHaveErrorMessage('Date time is not valid');
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

regressionTest(
  'picker disables calendar days outside minDate and maxDate',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/25 14:00:00"
      min-date="2026/04/20"
      max-date="2026/04/29"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const acc = await createAccessor(dateTimeInput);

    await acc.openByCalendar();
    await expect(
      dateTimeInput.getByRole('button', { name: /^15\s.+/ })
    ).toHaveClass(/disabled/);
    await expect(
      dateTimeInput.getByRole('button', { name: /^30\s.+/ })
    ).toHaveClass(/disabled/);
  }
);

regressionTest(
  'picker confirm updates value with date and time bounds',
  async ({ mount, page }) => {
    await mount(`
      <ix-datetime-input
        value="2026/03/10 14:30:00"
        format="yyyy/LL/dd HH:mm:ss"
        min-date="2026/03/01"
        max-date="2026/03/31"
        min-time="09:00:00"
        max-time="18:00:00"
        label="Appointment"
      ></ix-datetime-input>
    `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await expectNestedDatetimePickerFormats(
      dateTimeInput,
      'yyyy/LL/dd',
      'HH:mm:ss'
    );
    await expect(input).toHaveValue('2026/03/10 14:30:00');
    await expect(dateTimeInput.getByText('Appointment')).toBeVisible();

    await acc.openByCalendar();
    await acc.selectDay(20);
    await acc.selectTime(16, 45, 30);
    await acc.confirm();

    await expect(dateTimeInput).toHaveAttribute('value', '2026/03/20 16:45:30');
    await expect(input).toHaveValue('2026/03/20 16:45:30');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'minTime and maxTime constrain time on every day',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/02/15 14:00:00"
      min-time="13:00:00"
      max-time="17:30:00"
      label="Meeting time"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await expectNestedDatetimePickerFormats(
      dateTimeInput,
      'yyyy/LL/dd',
      'HH:mm:ss'
    );
    await expect(dateTimeInput.getByText('Meeting time')).toBeVisible();
    await expect(input).not.toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 12', exact: true })
    ).toBeDisabled();
    await page.keyboard.press('Escape');
    await input.fill('2026/02/15 12:00:00');
    await expect(dateTimeInput).toHaveAttribute('value', '2026/02/15 12:00:00');
    await expect(input).toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await acc.selectTime(14, 30, 0);
    await acc.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '2026/02/15 14:30:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'minTime with non-zero minutes: typed value before min is invalid',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/28 14:00:00"
      min-time="13:10:00"
      max-time="17:30:00"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');

    await expect(input).not.toHaveClass(/is-invalid/);

    await input.fill('2026/04/28 13:05:00');
    await expect(input).toHaveClass(/is-invalid/);

    await input.fill('2026/04/28 13:10:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'minTime with non-zero minutes: hours before min hour disabled in picker',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/28 14:00:00"
      min-time="13:10:00"
      max-time="17:30:00"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const acc = await createAccessor(dateTimeInput);

    await acc.openByCalendar();

    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 12', exact: true })
    ).toBeDisabled();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 13', exact: true })
    ).not.toBeDisabled();
  }
);

regressionTest(
  'constraint-invalid value: picker time matches input after reopen',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/28 14:00:00"
      min-time="13:10:00"
      max-time="17:30:00"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await input.fill('2026/04/28 13:00:00');
    await expect(input).toHaveClass(/is-invalid/);
    await expect(input).toHaveValue('2026/04/28 13:00:00');

    await acc.openByCalendar();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 13', exact: true })
    ).toHaveClass(/selected/);
  }
);

regressionTest(
  'typed max-window edge: 17:30 valid, 17:31 and 18:00 invalid (13:10–17:30)',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/28 14:00:00"
      min-time="13:10:00"
      max-time="17:30:00"
      label="Preview parity"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    await expect(input).not.toHaveClass(/is-invalid/);

    await input.fill('2026/04/28 17:30:00');
    await expect(input).not.toHaveClass(/is-invalid/);

    await input.fill('2026/04/28 17:31:00');
    await expect(input).toHaveClass(/is-invalid/);

    await input.fill('2026/04/28 18:00:00');
    await expect(input).toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'picker: hour 18 disabled; confirm 17:30 valid (13:10–17:30)',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/28 14:00:00"
      min-time="13:10:00"
      max-time="17:30:00"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await acc.openByCalendar();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 18', exact: true })
    ).toBeDisabled();
    await acc.selectTime(17, 30, 0);
    await acc.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '2026/04/28 17:30:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'minTime and maxTime apply on another calendar day (May, no minDate)',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/05/01 14:00:00"
      min-time="13:10:00"
      max-time="17:30:00"
      label="Other day"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await expect(input).not.toHaveClass(/is-invalid/);
    await acc.openByCalendar();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 12', exact: true })
    ).toBeDisabled();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 18', exact: true })
    ).toBeDisabled();

    await acc.selectTime(16, 0, 0);
    await acc.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '2026/05/01 16:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'with hour 13 selected, minutes before 10 are disabled (13:10–17:30)',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/28 14:00:00"
      min-time="13:10:00"
      max-time="17:30:00"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const acc = await createAccessor(dateTimeInput);

    await acc.openByCalendar();
    await dateTimeInput
      .getByRole('button', { name: 'hr: 13', exact: true })
      .click();
    await expect(
      dateTimeInput.getByRole('button', { name: 'min: 5', exact: true })
    ).toBeDisabled();
    await expect(
      dateTimeInput.getByRole('button', { name: 'min: 10', exact: true })
    ).not.toBeDisabled();
  }
);

regressionTest(
  'minTime and maxTime apply on minDate and maxDate only',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/02/15 14:00:00"
      min-date="2026/02/01"
      max-date="2026/02/28"
      min-time="13:00:00"
      max-time="17:30:00"
      label="Availability"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await expectNestedDatetimePickerFormats(
      dateTimeInput,
      'yyyy/LL/dd',
      'HH:mm:ss'
    );
    await expect(dateTimeInput.getByText('Availability')).toBeVisible();
    await expect(input).not.toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await acc.selectTime(12, 0, 0);
    await acc.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '2026/02/15 12:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);

    await input.fill('2026/02/01 12:00:00');
    await expect(dateTimeInput).toHaveAttribute('value', '2026/02/01 12:00:00');
    await expect(input).toHaveClass(/is-invalid/);

    await input.fill('2026/02/28 18:00:00');
    await expect(dateTimeInput).toHaveAttribute('value', '2026/02/28 18:00:00');
    await expect(input).toHaveClass(/is-invalid/);
  }
);

regressionTest('minTime without maxTime', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      value="2026/02/15 23:00:00"
      min-time="13:00:00"
      label="Earliest start"
    ></ix-datetime-input>
  `);

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  const acc = await createAccessor(dateTimeInput);

  await expectNestedDatetimePickerFormats(
    dateTimeInput,
    'yyyy/LL/dd',
    'HH:mm:ss'
  );
  await expect(input).not.toHaveClass(/is-invalid/);

  await acc.openByCalendar();
  await expect(
    dateTimeInput.getByRole('button', { name: 'hr: 10', exact: true })
  ).toBeDisabled();
  await page.keyboard.press('Escape');
  await input.fill('2026/02/15 10:00:00');
  await expect(dateTimeInput).toHaveAttribute('value', '2026/02/15 10:00:00');
  await expect(input).toHaveClass(/is-invalid/);

  await acc.openByCalendar();
  await acc.selectTime(15, 0, 0);
  await acc.confirm();
  await expect(dateTimeInput).toHaveAttribute('value', '2026/02/15 15:00:00');
  await expect(input).not.toHaveClass(/is-invalid/);
});

regressionTest('maxTime without minTime', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      value="2026/02/15 10:00:00"
      max-time="17:30:00"
      label="Latest end"
    ></ix-datetime-input>
  `);

  const dateTimeInput = page.locator('ix-datetime-input');
  const input = dateTimeInput.getByRole('textbox');
  const acc = await createAccessor(dateTimeInput);

  await expectNestedDatetimePickerFormats(
    dateTimeInput,
    'yyyy/LL/dd',
    'HH:mm:ss'
  );
  await expect(input).not.toHaveClass(/is-invalid/);

  await acc.openByCalendar();
  await expect(
    dateTimeInput.getByRole('button', { name: 'hr: 20', exact: true })
  ).toBeDisabled();
  await page.keyboard.press('Escape');
  await input.fill('2026/02/15 20:00:00');
  await expect(dateTimeInput).toHaveAttribute('value', '2026/02/15 20:00:00');
  await expect(input).toHaveClass(/is-invalid/);
});

regressionTest(
  'minTime and maxTime with dd-MM-yyyy HH:mm:ss',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      format="dd-MM-yyyy HH:mm:ss"
      value="15-02-2026 14:00:00"
      min-time="13:00:00"
      max-time="17:30:00"
      label="EU date layout"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await expectNestedDatetimePickerFormats(
      dateTimeInput,
      'dd-MM-yyyy',
      'HH:mm:ss'
    );
    await expect(input).not.toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 12', exact: true })
    ).toBeDisabled();
    await page.keyboard.press('Escape');
    await input.fill('15-02-2026 12:00:00');
    await expect(dateTimeInput).toHaveAttribute('value', '15-02-2026 12:00:00');
    await expect(input).toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await acc.selectTime(14, 30, 0);
    await acc.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '15-02-2026 14:30:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'minTime and maxTime on boundary days with dd-MM-yyyy HH:mm:ss',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      format="dd-MM-yyyy HH:mm:ss"
      value="15-02-2026 14:00:00"
      min-date="01-02-2026"
      max-date="28-02-2026"
      min-time="13:00:00"
      max-time="17:30:00"
      label="February window"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await expectNestedDatetimePickerFormats(
      dateTimeInput,
      'dd-MM-yyyy',
      'HH:mm:ss'
    );
    await expect(input).not.toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await acc.selectTime(12, 0, 0);
    await acc.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '15-02-2026 12:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);

    await input.fill('01-02-2026 12:00:00');
    await expect(dateTimeInput).toHaveAttribute('value', '01-02-2026 12:00:00');
    await expect(input).toHaveClass(/is-invalid/);

    await input.fill('28-02-2026 18:00:00');
    await expect(dateTimeInput).toHaveAttribute('value', '28-02-2026 18:00:00');
    await expect(input).toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'minTime and maxTime with yyyy-MM-dd HH:mm',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      format="yyyy-MM-dd HH:mm"
      value="2026-02-15 14:30"
      min-time="13:00"
      max-time="17:30"
      label="No seconds"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await expectNestedDatetimePickerFormats(
      dateTimeInput,
      'yyyy-MM-dd',
      'HH:mm'
    );
    await expect(input).not.toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 12', exact: true })
    ).toBeDisabled();
    await page.keyboard.press('Escape');
    await input.fill('2026-02-15 12:00');
    await expect(dateTimeInput).toHaveAttribute('value', '2026-02-15 12:00');
    await expect(input).toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await acc.selectTime(16, 0);
    await acc.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '2026-02-15 16:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  "minTime and maxTime with yyyy-MM-dd'T'HH:mm:ss",
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      format="yyyy-MM-dd'T'HH:mm:ss"
      value="2026-02-15T14:30:00"
      min-time="13:00:00"
      max-time="17:30:00"
      label="ISO-style T separator"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    const acc = await createAccessor(dateTimeInput);

    await expectNestedDatetimePickerFormats(
      dateTimeInput,
      'yyyy-MM-dd',
      'HH:mm:ss'
    );
    await expect(input).not.toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 12', exact: true })
    ).toBeDisabled();
    await page.keyboard.press('Escape');
    await input.fill('2026-02-15T12:00:00');
    await expect(dateTimeInput).toHaveAttribute('value', '2026-02-15T12:00:00');
    await expect(input).toHaveClass(/is-invalid/);

    await acc.openByCalendar();
    await acc.selectTime(16, 0, 0);
    await acc.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '2026-02-15T16:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'invalid time on minDate can be corrected in picker',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/02/01 12:00:00"
      format="yyyy/LL/dd HH:mm:ss"
      min-date="2026/02/01"
      max-date="2026/02/28"
      min-time="13:00:00"
      max-time="17:30:00"
      label="Opening day"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    await expectNestedDatetimePickerFormats(
      dateTimeInput,
      'yyyy/LL/dd',
      'HH:mm:ss'
    );
    await expect(input).toHaveClass(/is-invalid/);

    const dateTimeAccessor = await createAccessor(dateTimeInput);
    await dateTimeAccessor.openByCalendar();

    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 12', exact: true })
    ).toHaveClass(/selected/);

    await dateTimeAccessor.selectTime(14, 0, 0);
    await dateTimeAccessor.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '2026/02/01 14:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'typed middle day April 28: early and late time valid (Apr 27–29, 13:10–17:30)',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/28 14:00:00"
      min-date="2026/04/27"
      max-date="2026/04/29"
      min-time="13:10:00"
      max-time="17:30:00"
      label="Apr window"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');

    await input.fill('2026/04/28 12:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);

    await input.fill('2026/04/28 20:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'typed April min/max window: out-of-range dates and boundary asymmetric times',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/28 14:00:00"
      min-date="2026/04/27"
      max-date="2026/04/29"
      min-time="13:10:00"
      max-time="17:30:00"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');

    await input.fill('2026/04/26 14:00:00');
    await expect(input).toHaveClass(/is-invalid/);
    await input.fill('2026/04/30 14:00:00');
    await expect(input).toHaveClass(/is-invalid/);

    await input.fill('2026/04/28 14:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);

    await input.fill('2026/04/27 13:05:00');
    await expect(input).toHaveClass(/is-invalid/);
    await input.fill('2026/04/27 13:10:00');
    await expect(input).not.toHaveClass(/is-invalid/);
    await input.fill('2026/04/27 20:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);

    await input.fill('2026/04/29 12:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);
    await input.fill('2026/04/29 17:31:00');
    await expect(input).toHaveClass(/is-invalid/);
    await input.fill('2026/04/29 17:30:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'recovery by typing on April min/max boundary days',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/28 14:00:00"
      min-date="2026/04/27"
      max-date="2026/04/29"
      min-time="13:10:00"
      max-time="17:30:00"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');

    await input.fill('2026/04/27 13:05:00');
    await expect(input).toHaveClass(/is-invalid/);
    await input.fill('2026/04/27 14:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);

    await input.fill('2026/04/29 18:00:00');
    await expect(input).toHaveClass(/is-invalid/);
    await input.fill('2026/04/29 17:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'invalid time on maxDate corrected in picker (April)',
  async ({ mount, page }) => {
    await mount(`
    <ix-datetime-input
      value="2026/04/29 18:00:00"
      min-date="2026/04/27"
      max-date="2026/04/29"
      min-time="13:10:00"
      max-time="17:30:00"
      label="Last day"
    ></ix-datetime-input>
  `);

    const dateTimeInput = page.locator('ix-datetime-input');
    const input = dateTimeInput.getByRole('textbox');
    await expect(input).toHaveClass(/is-invalid/);

    const acc = await createAccessor(dateTimeInput);
    await acc.openByCalendar();
    await expect(
      dateTimeInput.getByRole('button', { name: 'hr: 18', exact: true })
    ).toHaveClass(/selected/);

    await acc.selectTime(17, 0, 0);
    await acc.confirm();
    await expect(dateTimeInput).toHaveAttribute('value', '2026/04/29 17:00:00');
    await expect(input).not.toHaveClass(/is-invalid/);
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
      format="dd-MM-yyyy HH:mm:ss"
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
    const dateTimeAccessor = await createAccessor(dateTimeInput);
    const input = dateTimeInput.getByRole('textbox');
    await input.fill('invalid-datetime');

    await dateTimeAccessor.expectToHaveErrorMessage('Date time is not valid');
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
    const dateTimeAccessor = await createAccessor(dateTimeInput);
    const input = dateTimeInput.getByRole('textbox');
    await input.fill('invalid-datetime');
    await input.blur();

    await dateTimeAccessor.expectToHaveErrorMessage('Custom error message');
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
