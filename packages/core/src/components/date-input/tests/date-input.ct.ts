/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Locator, Page, expect } from '@playwright/test';
import { DateTime } from 'luxon';
import {
  analyzeWithOpenPicker,
  calendarDayCell,
  createDropdownPickerAccessor,
  formatDateTime,
  getFormValue,
  mountHydrated,
  PENDING_SELECTION_DISMISSALS,
  preventFormSubmission,
  recordEvents,
  regressionTest,
  tabUntilFocused,
  waitForRender,
} from '@utils/test';

const createDateInputAccessor = async (dateInput: Locator) => {
  const dateDropdown = dateInput.getByTestId('date-dropdown');

  const handle = {
    openByCalender: async () => {
      const trigger = dateInput.getByTestId('open-calendar');
      await trigger.click();
      await expect(dateDropdown).toHaveClass(/show/);
    },
    selectDay: async (day: number) => {
      const dayButton = dateInput
        .locator('ix-dropdown .calendar-item')
        .filter({ hasText: new RegExp(`^${day}$`) })
        .first();

      await expect(dayButton).toBeVisible();
      await dayButton.click();
    },
  };

  return handle;
};

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveAttribute('hydrated');
});

for (const value of ['2026/02/08', 'invalid-date', '']) {
  regressionTest(
    `clear resets required date input with value "${value}"`,
    async ({ mount, page, makeAxeBuilder }) => {
      await mount(`
        <form>
          <ix-date-input name="date" required label="Date"
            helper-text="Choose a date" invalid-text="A valid date is required">
          </ix-date-input>
          <button type="button">Clear</button>
        </form>
      `);
      const host = page.locator('ix-date-input');
      const input = host.getByRole('textbox');
      await expect(host).toHaveAttribute('hydrated');
      await input.fill(value);
      await input.focus();
      await input.blur();
      await expect
        .poll(() =>
          host.evaluate((el: HTMLIxDateInputElement) => el.isTouched())
        )
        .toBe(true);

      const events = await host.evaluateHandle((el) => {
        const values: string[] = [];
        el.addEventListener('valueChange', (event) => {
          values.push((event as CustomEvent<string>).detail);
        });
        document.querySelector('button')!.addEventListener('click', () => {
          (el as HTMLIxDateInputElement).clear();
        });
        return values;
      });

      await page.getByRole('button', { name: 'Clear', exact: true }).click();
      await expect(input).toHaveValue('');
      await expect(host).toHaveJSProperty('value', '');
      await expect
        .poll(() =>
          host.evaluate((el: HTMLIxDateInputElement) => el.isTouched())
        )
        .toBe(false);
      await expect(host).not.toHaveClass(/ix-invalid/);
      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(input).not.toHaveAttribute('data-ix-touched');
      await expect(input).not.toHaveAttribute('aria-invalid', 'true');
      await expect(input).not.toHaveAttribute('aria-errormessage');
      await expect(
        getInvalidText(host, 'A valid date is required')
      ).toBeHidden();
      await expect(getInvalidText(host, 'Choose a date')).toBeVisible();
      expect(
        await input.evaluate((el: HTMLInputElement) => el.validity.valueMissing)
      ).toBe(true);
      expect(await getFormValue(page.locator('form'), 'date', page)).toBeNull();
      await expect
        .poll(() => events.evaluate((values) => values))
        .toEqual(['']);
      expect((await makeAxeBuilder().analyze()).violations).toEqual([]);

      await page.getByRole('button', { name: 'Clear', exact: true }).click();
      await expect
        .poll(() => events.evaluate((values) => values))
        .toEqual(['', '']);
      await expect(host).not.toHaveClass(/ix-invalid/);

      await input.focus();
      await input.blur();
      await expect(host).toHaveClass(/ix-invalid--required/);
      await expect(
        getInvalidText(host, 'A valid date is required')
      ).toBeVisible();

      await host.evaluate((el: HTMLIxDateInputElement) => el.clear());
      await input.fill('invalid-date');
      await expect(input).toHaveClass(/is-invalid/);
      await expect(input).toHaveAttribute('aria-invalid', 'true');
      await input.fill('2026/02/09');
      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(
        getInvalidText(host, 'A valid date is required')
      ).toBeHidden();
    }
  );
}

regressionTest(
  'clear preserves consumer validation and closes the calendar',
  async ({ mount, page }) => {
    await mount(`
      <ix-date-input class="ix-invalid" label="Date"
        invalid-text="Consumer error" value="2026/02/08"></ix-date-input>
    `);
    const host = page.locator('ix-date-input');
    await expect(host).toHaveAttribute('hydrated');
    const dateInput = await createDateInputAccessor(host);
    await dateInput.openByCalender();
    await host.evaluate((el: HTMLIxDateInputElement) => el.clear());
    await expect(host.getByTestId('date-dropdown')).not.toHaveClass(/show/);
    await expect(host).toHaveClass(/\bix-invalid\b/);
    await expect(getInvalidText(host, 'Consumer error')).toBeVisible();
    await expect(host.getByRole('textbox')).toHaveAttribute(
      'aria-invalid',
      'true'
    );
    await dateInput.openByCalender();
    await dateInput.selectDay(10);
    await expect(host.getByRole('textbox')).not.toHaveValue('');
  }
);

regressionTest(
  'select date by open calendar trigger',
  async ({ mount, page }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveAttribute('hydrated');

    const dateInput = await createDateInputAccessor(dateInputElement);
    await dateInput.openByCalender();

    await dateInput.selectDay(10);
    await expect(dateInputElement).toHaveAttribute('value', '2024/05/10');
  }
);

regressionTest('select date by focus', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveAttribute('hydrated');

  const dateDropdown = dateInputElement.getByTestId('date-dropdown');
  const dateInput = await createDateInputAccessor(dateInputElement);
  await dateInputElement.locator('input').focus();
  await page.keyboard.press('ArrowDown');
  await expect(dateDropdown).toHaveClass(/show/);

  await dateInput.selectDay(10);
  await expect(dateInputElement).toHaveAttribute('value', '2024/05/10');
  await expect(dateDropdown).not.toHaveClass(/show/);
});

regressionTest('select date by input', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveAttribute('hydrated');

  const dateInput = await createDateInputAccessor(dateInputElement);
  await dateInput.openByCalender();
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

regressionTest(
  'select date by input with invalid date',
  async ({ mount, page }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveAttribute('hydrated');

    const dateInput = await createDateInputAccessor(dateInputElement);
    await dateInputElement.locator('input').fill('2025/10/10/10');
    await dateInput.openByCalender();
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');

    await expect(
      dateInputElement
        .locator('ix-field-wrapper')
        .locator('ix-typography')
        .filter({ hasText: 'Date is not valid' })
    ).toHaveText(/Date is not valid/);
  }
);

regressionTest(
  'select date by input with invalid date - i18n',
  async ({ mount, page }) => {
    await mount(
      `<ix-date-input value="2024/05/05" i18n-error-date-unparsable="Datum nicht korrekt!"></ix-date-input>`
    );
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveAttribute('hydrated');

    const dateInput = await createDateInputAccessor(dateInputElement);
    await dateInputElement.locator('input').fill('2025/10/10/10');
    await dateInput.openByCalender();
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');

    await expect(
      dateInputElement
        .locator('ix-field-wrapper')
        .locator('ix-typography')
        .filter({ hasText: 'Datum nicht korrekt!' })
    ).toHaveText(/Datum nicht korrekt!/);
  }
);

regressionTest(
  'emits ixChange on blur only when the value changed',
  async ({ mount, page }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveAttribute('hydrated');
    const input = dateInputElement.locator('input');
    const events = await recordEvents(dateInputElement, ['ixChange']);

    await input.focus();
    await input.blur();

    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.value = '2024/06/06';
    });
    await expect(input).toHaveValue('2024/06/06');
    await input.focus();
    await input.blur();
    expect(await events()).toEqual([]);

    await input.fill('2024/07/07');
    await input.blur();
    await expect
      .poll(events)
      .toEqual([{ type: 'ixChange', detail: '2024/07/07' }]);
  }
);

const getInvalidText = (dateInput: Locator, text: string) =>
  dateInput
    .locator('ix-field-wrapper')
    .locator('ix-typography')
    .filter({ hasText: text });

regressionTest('required', async ({ mount, page }) => {
  await mount(`<ix-date-input required label="MyLabel"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  const input = dateInputElement.getByRole('textbox');
  await expect(dateInputElement).toHaveAttribute('required');

  await expect(dateInputElement.locator('ix-field-label')).toHaveText(
    'MyLabel*'
  );

  await input.focus();
  await page.waitForTimeout(50);
  await input.blur();

  await expect(dateInputElement).toHaveClass(/ix-invalid--required/, {
    timeout: 5000,
  });
});

regressionTest(
  'novalidate form does not show validation feedback for a cleared required field',
  async ({ mount, page }) => {
    await mount(
      `<form novalidate><ix-date-input required invalid-text="Date is required"></ix-date-input></form>`
    );
    const dateInputElement = page.locator('ix-date-input');
    const input = dateInputElement.getByRole('textbox');

    await dateInputElement.evaluate((el: HTMLElement) => {
      el.addEventListener('validityStateChange', (event: Event) => {
        if ((event as CustomEvent<ValidityState>).detail?.valueMissing) {
          el.dataset.valueMissingEmitted = 'true';
        }
      });
    });

    await input.fill('2024/05/05');
    await input.blur();
    await input.fill('');
    await input.blur();

    // The event is still emitted so consumers can run their own validation
    await expect(dateInputElement).toHaveAttribute(
      'data-value-missing-emitted',
      'true'
    );
    await waitForRender(page);

    await expect(dateInputElement).not.toHaveClass(/ix-invalid/);
    await expect(
      getInvalidText(dateInputElement, 'Date is required')
    ).toBeHidden();
  }
);

regressionTest(
  'novalidate form leaves parse error feedback to the consumer',
  async ({ mount, page }) => {
    await mount(
      `<form novalidate><ix-date-input info-text="Info text"></ix-date-input></form>`
    );
    const host = page.locator('ix-date-input');
    const input = host.locator('input').first();
    const fieldWrapperText = (text: string) =>
      host
        .locator('ix-field-wrapper')
        .locator('ix-typography')
        .filter({ hasText: text });

    await host.evaluate((el: HTMLElement) => {
      el.addEventListener('validityStateChange', (event: Event) => {
        const { detail } = event as CustomEvent<Partial<ValidityState>>;
        if (detail?.patternMismatch || detail?.typeMismatch) {
          el.dataset.parseErrorEmitted = 'true';
        }
      });
    });

    await input.fill('abc');
    await input.blur();

    // The parse error is still reported so consumers can validate themselves
    await expect(host).toHaveAttribute('data-parse-error-emitted', 'true');

    await host.evaluate((el) => el.classList.add('ix-info'));
    await expect(fieldWrapperText('Info text')).toBeVisible();
    await expect(fieldWrapperText('Date is not valid')).toBeHidden();

    // Without `invalid-text` the built-in message is the fallback
    await host.evaluate((el) => el.classList.replace('ix-info', 'ix-invalid'));
    await expect(fieldWrapperText('Date is not valid')).toBeVisible();

    // An empty `invalid-text` opts out of the fallback
    await host.evaluate((el) => el.setAttribute('invalid-text', ''));
    await expect(fieldWrapperText('Date is not valid')).toBeHidden();

    await host.evaluate((el) =>
      el.setAttribute('invalid-text', 'Consumer error')
    );
    await expect(fieldWrapperText('Consumer error')).toBeVisible();
  }
);

regressionTest(
  'toggling required updates validation state immediately',
  async ({ mount, page }) => {
    await mount(
      `<ix-date-input invalid-text="Date is required"></ix-date-input>`
    );
    const dateInputElement = page.locator('ix-date-input');
    const input = dateInputElement.getByRole('textbox');

    await input.focus();
    await input.blur();
    await expect(dateInputElement).not.toHaveClass(/ix-invalid--required/);

    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.required = true;
    });
    await expect(dateInputElement).toHaveClass(/ix-invalid--required/);
    await expect(
      getInvalidText(dateInputElement, 'Date is required')
    ).toBeVisible();

    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.required = false;
    });
    await expect(dateInputElement).not.toHaveClass(/ix-invalid--required/);
    await expect(
      getInvalidText(dateInputElement, 'Date is required')
    ).toBeHidden();
  }
);

regressionTest(
  'toggling required only affects the changed instance',
  async ({ mount, page }) => {
    await mount(`
      <ix-date-input id="first" invalid-text="First is required"></ix-date-input>
      <ix-date-input id="second"></ix-date-input>
    `);
    const first = page.locator('#first');
    const second = page.locator('#second');

    for (const dateInput of [first, second]) {
      await dateInput.getByRole('textbox').focus();
      await dateInput.getByRole('textbox').blur();
    }

    await first.evaluate((el: HTMLIxDateInputElement) => {
      el.required = true;
    });
    await expect(first).toHaveClass(/ix-invalid--required/);
    await expect(second).not.toHaveClass(/ix-invalid--required/);

    // Removing another instance must keep this one's validation
    await second.evaluate((el) => el.remove());
    await first.evaluate((el: HTMLIxDateInputElement) => {
      el.required = false;
    });
    await expect(first).not.toHaveClass(/ix-invalid--required/);
    await expect(getInvalidText(first, 'First is required')).toBeHidden();
  }
);

regressionTest(
  'clears built-in feedback once the form opts out',
  async ({ mount, page }) => {
    await mount(`<form><ix-date-input></ix-date-input></form>`);
    const host = page.locator('ix-date-input');
    const input = host.getByRole('textbox');

    await input.fill('abc');
    await input.blur();
    await expect(getInvalidText(host, 'Date is not valid')).toBeVisible();

    await page
      .locator('form')
      .evaluate((form: HTMLFormElement) => (form.noValidate = true));
    await input.focus();
    await input.blur();

    await expect(host).not.toHaveClass(/ix-invalid/);
    await expect(getInvalidText(host, 'Date is not valid')).toBeHidden();
  }
);

regressionTest(
  'keeps required feedback after being moved in the DOM',
  async ({ mount, page }) => {
    await mount(`
      <div id="source">
        <ix-date-input required invalid-text="Date is required"></ix-date-input>
      </div>
      <div id="target"></div>
    `);
    const host = page.locator('ix-date-input');
    const input = host.getByRole('textbox');

    await input.focus();
    await input.blur();
    await expect(getInvalidText(host, 'Date is required')).toBeVisible();

    await host.evaluate((el) => {
      el.ownerDocument.getElementById('target')?.appendChild(el);
    });
    await expect(page.locator('#target ix-date-input')).toBeAttached();

    // Any class change re-evaluates the validation state
    await host.evaluate((el) => el.classList.add('ix-info'));
    await waitForRender(page);
    await expect(getInvalidText(host, 'Date is required')).toBeVisible();
  }
);

regressionTest(`form-ready - ix-date-input`, async ({ mount, page }) => {
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

regressionTest(
  `form-ready - ix-date-input initial value`,
  async ({ mount, page }) => {
    await mount(
      `<form><ix-date-input name="my-field-name" value="2024/12/12"></ix-date-input></form>`
    );

    const formElement = page.locator('form');
    preventFormSubmission(formElement);
    const componentValue = await page
      .locator('ix-date-input')
      .evaluate((el: HTMLIxDateInputElement) => el.value);
    const formData = await getFormValue(formElement, 'my-field-name', page);
    expect(formData).toBe(componentValue);
  }
);

regressionTest(
  'updating component value attribute updates validity',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await dateInput.evaluateHandle((el) => {
      el.setAttribute('value', 'invalid-date');
    });

    await expect(input).toHaveClass(/is-invalid/);

    await dateInput.evaluateHandle((el) => {
      el.setAttribute('value', '2024/05/05');
    });

    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'invalidText property takes precedence over i18n error message',
  async ({ mount, page }) => {
    await mount(
      `<ix-date-input value="2024/05/05" invalid-text="Custom error message"></ix-date-input>`
    );

    const dateInputElement = page.locator('ix-date-input');

    await expect(dateInputElement).toHaveAttribute('hydrated');
    await dateInputElement.locator('input').fill('invalid-date');
    await dateInputElement.locator('input').blur();
    await expect(
      dateInputElement
        .locator('ix-field-wrapper')
        .locator('ix-typography')
        .filter({ hasText: 'Custom error message' })
    ).toHaveText(/Custom error message/);
  }
);

regressionTest('locale-aware input parsing', async ({ mount, page }) => {
  await mount(
    `<ix-date-input locale="de" format="dd MMMM yyyy"></ix-date-input>`
  );

  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveAttribute('hydrated');

  const input = dateInputElement.locator('input');
  await input.fill('05 März 2023');
  await input.blur();

  await expect(input).not.toHaveClass(/is-invalid/);
  await expect(dateInputElement).toHaveAttribute('value', '05 März 2023');
});

regressionTest.describe('runtime locale and format updates', () => {
  const expectValueParsable = async (dateInput: Locator, parsable: boolean) => {
    await expect
      .poll(() =>
        dateInput.evaluate(async (el: HTMLIxDateInputElement) => {
          const { valid } = await el.getValidityState();
          return valid;
        })
      )
      .toBe(parsable);
  };

  const patchAttribute = (dateInput: Locator, name: string, value: string) =>
    dateInput.evaluate(
      (el, [attr, next]) => el.setAttribute(attr, next),
      [name, value]
    );

  regressionTest('locale', async ({ mount, page }) => {
    await mount(
      `<ix-date-input value="05 März 2023" locale="en" format="dd MMMM yyyy"></ix-date-input>`
    );

    const dateInput = page.locator('ix-date-input');
    await expect(dateInput).toHaveAttribute('hydrated');

    // "März" is unknown to the English locale
    await expectValueParsable(dateInput, false);

    await patchAttribute(dateInput, 'locale', 'de');

    await expectValueParsable(dateInput, true);
    await expect(dateInput.locator('input')).not.toHaveClass(/is-invalid/);
  });

  regressionTest('format', async ({ mount, page }) => {
    await mount(`<ix-date-input value="05.09.2023"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    await expect(dateInput).toHaveAttribute('hydrated');

    // Does not match the default format yyyy/LL/dd
    await expectValueParsable(dateInput, false);

    await patchAttribute(dateInput, 'format', 'dd.LL.yyyy');

    await expectValueParsable(dateInput, true);
    await expect(dateInput.locator('input')).not.toHaveClass(/is-invalid/);
  });

  regressionTest('reaches the nested picker', async ({ mount, page }) => {
    await mount(
      `<ix-date-input value="2023/09/05" locale="en"></ix-date-input>`
    );

    const dateInput = page.locator('ix-date-input');
    await expect(dateInput).toHaveAttribute('hydrated');

    const accessor = await createDateInputAccessor(dateInput);
    await accessor.openByCalender();

    // Weekday headers are rendered Monday-first, so index 1 is Tuesday
    const tuesdayHeader = dateInput.locator('ix-dropdown .week-day').nth(1);
    await expect(tuesdayHeader).toHaveText('Tue');

    await patchAttribute(dateInput, 'locale', 'de');

    await expect(tuesdayHeader).toHaveText('Die');
    // The numeric value still parses, so the selection is kept
    await expect(dateInput.locator('.calendar-item.selected')).toHaveText('5');
  });
});

regressionTest(
  'forwards weekStartIndex to the nested date picker',
  async ({ mount, page }) => {
    // weekStartIndex 6 is Sunday. 1 September 2023 is a Friday, five columns
    // along from Sunday, versus four in the Monday-first default.
    await mount(
      `<ix-date-input value="2023/09/01" week-start-index="6"></ix-date-input>`
    );
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveAttribute('hydrated');

    const dateInput = await createDateInputAccessor(dateInputElement);
    await dateInput.openByCalender();

    const column = await page.$eval('ix-date-picker', (picker) => {
      const cell = picker.shadowRoot?.querySelector('[data-calendar-day="1"]');
      const row = cell?.closest('[role="row"]');
      if (!cell || !row) {
        return -1;
      }
      return [...row.querySelectorAll('[role="gridcell"]')].indexOf(cell);
    });

    expect(column).toBe(5);
  }
);

regressionTest.describe('keyboard navigation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-date-input value="2023/09/05"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveAttribute('hydrated');
    await dateInputElement.locator('input').focus();
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('[data-calendar-day="5"]')).toBeFocused();
  });

  regressionTest('Home moves focus to first day of week', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('Home');
    await expect(page.locator('[data-calendar-day="4"]')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/09/04');
  });

  regressionTest('End moves focus to last day of week', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('End');
    await expect(page.locator('[data-calendar-day="10"]')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/09/10');
  });

  regressionTest('PageUp navigates to previous month', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('PageUp');
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/08/05');
  });

  regressionTest('PageDown navigates to next month', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('PageDown');
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/10/05');
  });

  regressionTest(
    'Shift+PageUp navigates to previous year',
    async ({ page }) => {
      const dateInputElement = page.locator('ix-date-input');
      await page.keyboard.press('Shift+PageUp');
      await page.keyboard.press('Enter');
      await expect(dateInputElement).toHaveAttribute('value', '2022/09/05');
    }
  );

  regressionTest('Shift+PageDown navigates to next year', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('Shift+PageDown');
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2024/09/05');
  });
});

const committed = DateTime.fromISO('2024-05-10');
const picked = committed.plus({ days: 10 });

const dateInputAccessor = (page: Page) =>
  createDropdownPickerAccessor(page, {
    host: 'ix-date-input',
    trigger: (host) => host.getByTestId('open-calendar'),
    dropdown: (host) => host.getByTestId('date-dropdown'),
  });

const dayCell = (page: Page, date: DateTime) =>
  calendarDayCell(page.locator('ix-date-input ix-date-picker'), date);

regressionTest.describe('require confirmation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mountHydrated(mount, page, 'ix-date-input', {
      value: formatDateTime(committed),
      'require-confirmation': true,
    });
  });

  regressionTest('confirm applies the picked date', async ({ page }) => {
    const dateInput = dateInputAccessor(page);
    const events = await recordEvents(dateInput.host, [
      'valueChange',
      'ixChange',
    ]);

    await dateInput.open();
    await dayCell(page, picked).click();

    await expect(dateInput.host.locator('input')).toHaveValue(
      formatDateTime(committed)
    );
    expect(await events()).not.toContainEqual(
      expect.objectContaining({ detail: formatDateTime(picked) })
    );

    await dateInput.host.getByTestId('confirm').click();

    await dateInput.expectClosed();
    await expect(dateInput.host.locator('input')).toHaveValue(
      formatDateTime(picked)
    );
    expect(await events()).toContainEqual({
      type: 'valueChange',
      detail: formatDateTime(picked),
    });
    expect(await events()).toContainEqual({
      type: 'ixChange',
      detail: formatDateTime(picked),
    });
  });

  regressionTest(
    'does not leak picker events to the host',
    async ({ page }) => {
      const dateInput = dateInputAccessor(page);
      const events = await recordEvents(dateInput.host, [
        'dateChange',
        'dateRangeChange',
        'dateSelect',
        'dateCancel',
      ]);

      await dateInput.open();
      await dayCell(page, picked).click();
      await dateInput.host.getByTestId('cancel').click();
      await dateInput.expectClosed();

      await dateInput.open();
      await dayCell(page, picked).click();
      await dateInput.host.getByTestId('confirm').click();
      await dateInput.expectClosed();

      await expect(dateInput.host.locator('input')).toHaveValue(
        formatDateTime(picked)
      );
      expect(await events()).toEqual([]);
    }
  );

  regressionTest(
    'footer is reachable and trapped by keyboard',
    async ({ page }) => {
      const dateInput = dateInputAccessor(page);

      await dateInput.open();
      await dayCell(page, picked).click();
      await tabUntilFocused(page, 'Confirm');

      // Focus stays trapped in the dropdown when tabbing past the footer
      await page.keyboard.press('Tab');
      await dateInput.expectOpen();
      await tabUntilFocused(page, 'Confirm');
      await page.keyboard.press('Enter');

      await dateInput.expectClosed();
      await expect(dateInput.host.locator('input')).toHaveValue(
        formatDateTime(picked)
      );
    }
  );

  for (const dismissal of PENDING_SELECTION_DISMISSALS) {
    regressionTest(
      `${dismissal} discards the picked date`,
      async ({ page }) => {
        const dateInput = dateInputAccessor(page);
        const events = await recordEvents(dateInput.host, [
          'valueChange',
          'ixChange',
        ]);

        await dateInput.open();
        await dayCell(page, picked).click();
        await dateInput.dismiss(dismissal);

        await dateInput.expectClosed();
        await expect(dateInput.host.locator('input')).toHaveValue(
          formatDateTime(committed)
        );
        expect(await events()).toEqual([]);

        await dateInput.open();
        await expect(dayCell(page, committed)).toHaveAttribute(
          'aria-selected',
          'true'
        );
        await expect(dayCell(page, picked)).toHaveAttribute(
          'aria-selected',
          'false'
        );
      }
    );
  }
});

regressionTest(
  'renders no cancel button without require confirmation',
  async ({ mount, page }) => {
    await mountHydrated(mount, page, 'ix-date-input', {
      value: formatDateTime(committed),
    });
    const dateInput = dateInputAccessor(page);

    await dateInput.open();
    await expect(dateInput.host.getByTestId('cancel')).toHaveCount(0);
  }
);

regressionTest(
  'accessibility with require confirmation',
  async ({ mount, page, makeAxeBuilder }) => {
    await mount(
      `<ix-date-input label="Date" require-confirmation value="2024/05/10"></ix-date-input>`
    );
    const dateInput = dateInputAccessor(page);
    await expect(dateInput.host).toHaveAttribute('hydrated');
    await dateInput.open();

    const accessibilityScanResults = await analyzeWithOpenPicker(
      makeAxeBuilder,
      'ix-date-input',
      '[data-testid="open-calendar"]'
    );
    expect(accessibilityScanResults.violations).toEqual([]);
  }
);

regressionTest.describe('required while picking', () => {
  const nextMonthDay = DateTime.now().plus({ months: 1 }).set({ day: 15 });

  const pickNextMonthDay = async (page: Page) => {
    await page
      .locator('ix-date-input ix-date-picker')
      .getByRole('button', { name: 'Next month' })
      .click();
    await dayCell(page, nextMonthDay).click();
  };

  for (const requireConfirmation of [false, true]) {
    regressionTest(
      `picking does not mark the field touched (requireConfirmation: ${requireConfirmation})`,
      async ({ mount, page }) => {
        await mountHydrated(mount, page, 'ix-date-input', {
          required: true,
          'require-confirmation': requireConfirmation,
        });
        const dateInput = dateInputAccessor(page);
        const events = await recordEvents(dateInput.host, ['ixBlur']);

        await dateInput.open();
        await pickNextMonthDay(page);
        if (requireConfirmation) {
          expect(await events()).toEqual([]);
          await expect(dateInput.host).not.toHaveClass(/ix-invalid--required/);
          await dateInput.host.getByTestId('confirm').click();
        }

        await dateInput.expectClosed();
        await expect(dateInput.host.locator('input')).toHaveValue(
          formatDateTime(nextMonthDay)
        );
        await expect(dateInput.host).not.toHaveClass(/ix-invalid--required/);
      }
    );
  }

  regressionTest(
    'month navigation does not mark the field touched',
    async ({ mount, page }) => {
      await mountHydrated(mount, page, 'ix-date-input', { required: true });
      const dateInput = dateInputAccessor(page);
      const events = await recordEvents(dateInput.host, ['ixBlur']);

      await dateInput.open();
      await page
        .locator('ix-date-input ix-date-picker')
        .getByRole('button', { name: 'Next month' })
        .click();

      await dateInput.expectOpen();
      expect(await events()).toEqual([]);
      await expect(dateInput.host).not.toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'opening from the focused field does not mark it touched',
    async ({ mount, page }) => {
      await mountHydrated(mount, page, 'ix-date-input', { required: true });
      const dateInput = dateInputAccessor(page);
      await dateInput.host.locator('input').focus();
      const events = await recordEvents(dateInput.host, ['ixBlur']);

      await dateInput.open();

      await expect(dateInput.host.locator('input')).toBeFocused();
      expect(await events()).toEqual([]);
      await expect(dateInput.host).not.toHaveClass(/ix-invalid--required/);
    }
  );

  for (const dismissal of PENDING_SELECTION_DISMISSALS) {
    regressionTest(
      `${dismissal} without a date marks the field touched`,
      async ({ mount, page }) => {
        await mountHydrated(mount, page, 'ix-date-input', {
          required: true,
          'require-confirmation': true,
        });
        const dateInput = dateInputAccessor(page);
        const events = await recordEvents(dateInput.host, ['ixBlur']);

        await dateInput.open();
        await pickNextMonthDay(page);
        await dateInput.dismiss(dismissal);
        await dateInput.expectClosed();

        if (dismissal === 'escape') {
          // Escape returns focus to the field, it is left on the next Tab
          await expect(dateInput.host.locator('input')).toBeFocused();
          expect(await events()).toEqual([]);
          await page.keyboard.press('Tab');
        }

        await expect(dateInput.host).toHaveClass(/ix-invalid--required/);
        expect(await events()).toEqual([{ type: 'ixBlur', detail: null }]);
      }
    );
  }
});
