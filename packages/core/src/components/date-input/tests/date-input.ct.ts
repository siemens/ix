/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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

const expectNoVisualValidation = async (dateInput: Locator, input: Locator) => {
  await expect(input).not.toHaveClass(/is-invalid/);
  await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
};

const waitForFormSubmit = (form: Locator) =>
  form.evaluate(
    (formElement) =>
      new Promise<boolean>((resolve) => {
        const handleSubmit = (event: Event) => {
          event.preventDefault();
          formElement.removeEventListener('submit', handleSubmit);
          resolve(true);
        };

        formElement.addEventListener('submit', handleSubmit);
      })
  );

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveClass(/hydrated/);
});

regressionTest(
  'select date by open calendar trigger',
  async ({ mount, page }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);

    const dateInput = await createDateInputAccessor(dateInputElement);
    await dateInput.openByCalender();

    await dateInput.selectDay(10);
    await expect(dateInputElement).toHaveAttribute('value', '2024/05/10');
  }
);

regressionTest('select date by focus', async ({ mount, page }) => {
  await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  await expect(dateInputElement).toHaveClass(/hydrated/);

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
  await expect(dateInputElement).toHaveClass(/hydrated/);

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
    ).toHaveText(/Datum nicht korrekt!/);
  }
);

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
  'programmatic invalid value does not show visual error before user interaction, shows after blur, setting valid value clears error',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = dateInput.getByRole('textbox');

    await dateInput.evaluate((el: HTMLIxDateInputElement) => {
      el.value = 'invalid-date';
    });
    await expect(input).not.toHaveClass(/is-invalid/);
    await expect(dateInput).not.toHaveClass(/ix-invalid/);

    await input.focus();
    await input.blur();
    await expect(input).toHaveClass(/is-invalid/);
    await expect(dateInput).toHaveClass(/ix-invalid/);

    await dateInput.evaluate((el: HTMLIxDateInputElement) => {
      el.value = '2024/05/05';
    });
    await expect(input).not.toHaveClass(/is-invalid/);
    await expect(dateInput).not.toHaveClass(/ix-invalid--validity-invalid/);
  }
);

regressionTest(
  'initial invalid value does not show visual error before user interaction',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="invalid-date"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = dateInput.getByRole('textbox');

    await expect(input).not.toHaveClass(/is-invalid/);
    await expect(dateInput).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'invalidText property takes precedence over i18n error message',
  async ({ mount, page }) => {
    await mount(
      `<ix-date-input value="2024/05/05" invalid-text="Custom error message"></ix-date-input>`
    );

    const dateInputElement = page.locator('ix-date-input');

    await expect(dateInputElement).toHaveClass(/hydrated/);
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

regressionTest.describe('keyboard navigation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-date-input value="2023/09/05"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
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

regressionTest.describe('date-input validation scenarios', () => {
  regressionTest.describe('required field behavior', () => {
    regressionTest(
      'Required input: Invalid input > Removing value with keyboard > Stays invalid',
      async ({ page, mount }) => {
        await mount(`<ix-date-input required value=""></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.fill('invalid-date');
        await input.blur();

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expect(dateInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Required input: Enter invalid input > Remove touched state (clear) > Valid again',
      async ({ page, mount }) => {
        await mount(`<ix-date-input required value=""></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.fill('invalid-date');
        await input.blur();

        await dateInput.evaluate((el: HTMLIxDateInputElement) => el.clear());

        await expectNoVisualValidation(dateInput, input);
        await expect(input).toHaveValue('');
        await expect(dateInput).toHaveAttribute('value', '');
      }
    );

    regressionTest(
      'Required input: Invalid input > Programmatically setting to empty > Stays invalid (no immediate red, shows after blur)',
      async ({ page, mount }) => {
        await mount(
          `<ix-date-input required value="invalid-date"></ix-date-input>`
        );

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = '';
        });

        await expect(dateInput).not.toHaveClass(/ix-invalid--required/);

        await input.focus();
        await input.blur();

        await expect(dateInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Required input: Valid input > Removing value with keyboard > It is invalid',
      async ({ page, mount }) => {
        await mount(
          `<ix-date-input required value="2024/05/05"></ix-date-input>`
        );

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expect(dateInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Required input: Valid input > Remove touched state (clear) > Valid',
      async ({ page, mount }) => {
        await mount(
          `<ix-date-input required value="2024/05/05"></ix-date-input>`
        );

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.blur();

        await dateInput.evaluate((el: HTMLIxDateInputElement) => el.clear());

        await expectNoVisualValidation(dateInput, input);
        await expect(input).toHaveValue('');
        await expect(dateInput).toHaveAttribute('value', '');
      }
    );

    regressionTest(
      'Required input: Valid input > Programmatically setting to empty > It is invalid (no immediate red, shows after blur)',
      async ({ page, mount }) => {
        await mount(
          `<ix-date-input required value="2024/05/05"></ix-date-input>`
        );

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = '';
        });

        await expect(dateInput).toHaveAttribute('value', '');
        await expect(dateInput).not.toHaveClass(/ix-invalid--required/);

        await input.focus();
        await input.blur();

        await expect(dateInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Required input: Programmatically setting to empty > Error shows on form reportValidity',
      async ({ page, mount }) => {
        await mount(`
          <form id="form">
            <ix-date-input required value="2024/05/05"></ix-date-input>
          </form>
        `);

        const dateInput = page.locator('ix-date-input');

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = '';
        });

        await page.evaluate(() => {
          (document.getElementById('form') as HTMLFormElement).reportValidity();
        });

        await expect(dateInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Validation works after switching between required and non-required',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expect(dateInput).not.toHaveClass(/ix-invalid--required/);

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.required = true;
        });

        await expect(dateInput).toHaveClass(/ix-invalid--required/);

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.required = false;
        });

        await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
      }
    );
  });

  regressionTest.describe('optional field behavior', () => {
    regressionTest(
      'Not required input: Invalid input > Removing value with keyboard > Valid',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value=""></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.fill('invalid-date');
        await input.blur();

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expectNoVisualValidation(dateInput, input);
      }
    );

    regressionTest(
      'Not required input: Invalid input > Remove touched state (clear) > Valid',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value=""></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.fill('invalid-date');
        await input.blur();

        await dateInput.evaluate((el: HTMLIxDateInputElement) => el.clear());

        await expectNoVisualValidation(dateInput, input);
        await expect(input).toHaveValue('');
        await expect(dateInput).toHaveAttribute('value', '');
      }
    );

    regressionTest(
      'Not required input: Invalid input > Programmatically setting to empty > Valid',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value=""></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.fill('invalid-date');
        await input.blur();

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = '';
        });

        await expectNoVisualValidation(dateInput, input);
      }
    );

    regressionTest(
      'Not required input: Valid input > Removing value with keyboard > Valid',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expectNoVisualValidation(dateInput, input);
      }
    );

    regressionTest(
      'Not required input: Valid input > Remove touched state (clear) > Valid',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.blur();

        await dateInput.evaluate((el: HTMLIxDateInputElement) => el.clear());

        await expectNoVisualValidation(dateInput, input);
        await expect(input).toHaveValue('');
        await expect(dateInput).toHaveAttribute('value', '');
      }
    );

    regressionTest(
      'Not required input: Valid input > Programmatically setting to empty > Valid',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.blur();

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = '';
        });

        await expectNoVisualValidation(dateInput, input);
      }
    );
  });

  regressionTest.describe('novalidate form behavior', () => {
    regressionTest(
      'novalidate form suppresses validation for required field',
      async ({ page, mount }) => {
        await mount(`
          <form novalidate>
            <ix-date-input required value="2024/05/05"></ix-date-input>
          </form>
        `);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expectNoVisualValidation(dateInput, input);
      }
    );

    regressionTest(
      'novalidate form suppresses visual validation for invalid date input',
      async ({ page, mount }) => {
        await mount(`
          <form novalidate>
            <ix-date-input value="2024/05/05"></ix-date-input>
          </form>
        `);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await input.fill('2025/10/10/10');
        await input.blur();

        await expectNoVisualValidation(dateInput, input);
      }
    );

    regressionTest(
      'novalidate form: submit event fires even when required field is empty',
      async ({ page, mount }) => {
        await mount(`
          <form id="form" novalidate>
            <ix-date-input value="" required></ix-date-input>
            <button type="submit">Submit</button>
          </form>
        `);

        const submitPromise = waitForFormSubmit(page.locator('#form'));

        await page.locator('button[type="submit"]').click();
        const submitted = await submitPromise;
        expect(submitted).toBe(true);

        const dateInput = page.locator('ix-date-input');
        await expect(dateInput).not.toHaveClass(/ix-invalid/);
      }
    );

    regressionTest(
      'novalidate form: reportValidity() validates invalid date',
      async ({ page, mount }) => {
        await mount(`
          <form novalidate>
            <ix-date-input required value="invalid-date"></ix-date-input>
            <ix-date-input value="invalid-date"></ix-date-input>
          </form>
        `);

        const dateInputs = page.locator('ix-date-input');

        for (const index of [0, 1]) {
          const dateInput = dateInputs.nth(index);
          const input = dateInput.getByRole('textbox');

          const isValid = await dateInput.evaluate(
            (el: HTMLIxDateInputElement) => el.reportValidity()
          );

          expect(isValid).toBe(false);
          await expect(input).toHaveClass(/is-invalid/);
          await expect(dateInput).toHaveClass(/ix-invalid--validity-invalid/);
        }
      }
    );

    regressionTest(
      'novalidate form: reportValidity() error persists when value remains invalid, clears when fixed',
      async ({ page, mount }) => {
        await mount(`
          <form novalidate>
            <ix-date-input required></ix-date-input>
          </form>
        `);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = 'bad-date';
        });
        await dateInput.evaluate((el: HTMLIxDateInputElement) =>
          el.reportValidity()
        );
        await expect(input).toHaveClass(/is-invalid/);

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = 'still-bad-date';
        });
        await expect(input).toHaveClass(/is-invalid/);
        await expect(dateInput).toHaveClass(/ix-invalid--validity-invalid/);

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = '2024/05/05';
        });
        await expect(input).not.toHaveClass(/is-invalid/);
        await expect(dateInput).not.toHaveClass(/ix-invalid/);
      }
    );

    regressionTest(
      'novalidate form: emptying the field after reportValidity() switches error message to required',
      async ({ page, mount }) => {
        await mount(`
          <form novalidate>
            <ix-date-input required></ix-date-input>
          </form>
        `);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = 'bad-date';
        });
        await expect(input).not.toHaveClass(/is-invalid/);

        await dateInput.evaluate((el: HTMLIxDateInputElement) =>
          el.reportValidity()
        );
        await expect(input).toHaveClass(/is-invalid/);
        await expect(
          dateInput
            .locator('ix-field-wrapper')
            .locator('ix-typography')
            .filter({ hasText: 'Date is not valid' })
        ).toBeVisible();

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = '';
        });

        await expect(dateInput).toHaveClass(/ix-invalid--required/);
        await expect(dateInput).not.toHaveClass(/ix-invalid--validity-invalid/);

        await expect(
          dateInput
            .locator('ix-field-wrapper')
            .locator('ix-typography')
            .filter({ hasText: 'This field is required' })
        ).toBeVisible();
      }
    );
  });

  regressionTest.describe('reportValidity behavior', () => {
    regressionTest(
      'reportValidity returns false and shows error for invalid date without prior interaction',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value="invalid-date"></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await expect(input).not.toHaveClass(/is-invalid/);

        const isValid = await dateInput.evaluate((el: HTMLIxDateInputElement) =>
          el.reportValidity()
        );

        expect(isValid).toBe(false);
        await expect(input).toHaveClass(/is-invalid/);
        await expect(dateInput).toHaveClass(/ix-invalid--validity-invalid/);
      }
    );

    regressionTest(
      'reportValidity returns false and shows required error for empty required field',
      async ({ page, mount }) => {
        await mount(`<ix-date-input required></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');

        const isValid = await dateInput.evaluate((el: HTMLIxDateInputElement) =>
          el.reportValidity()
        );

        expect(isValid).toBe(false);

        await expect(dateInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'reportValidity returns true for a valid field',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        const isValid = await dateInput.evaluate((el: HTMLIxDateInputElement) =>
          el.reportValidity()
        );

        expect(isValid).toBe(true);
        await expect(input).not.toHaveClass(/is-invalid/);
        await expect(dateInput).not.toHaveClass(/ix-invalid/);
      }
    );

    regressionTest(
      'form.reportValidity() with invalid date (parse error) shows field and title red',
      async ({ page, mount }) => {
        await mount(`
          <form id="form">
            <ix-date-input value="invalid-date"></ix-date-input>
          </form>
        `);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        // No interaction — clean
        await expect(input).not.toHaveClass(/is-invalid/);

        await page.evaluate(() => {
          (document.getElementById('form') as HTMLFormElement).reportValidity();
        });

        await expect(input).toHaveClass(/is-invalid/);
        await expect(dateInput).toHaveClass(/ix-invalid--validity-invalid/);
      }
    );

    regressionTest(
      'after reportValidity() shows red, correcting value clears the error',
      async ({ page, mount }) => {
        await mount(`<ix-date-input value="invalid-date"></ix-date-input>`);

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await dateInput.evaluate((el: HTMLIxDateInputElement) =>
          el.reportValidity()
        );
        await expect(input).toHaveClass(/is-invalid/);

        await dateInput.evaluate((el: HTMLIxDateInputElement) => {
          el.value = '2024/05/05';
        });
        await expect(input).not.toHaveClass(/is-invalid/);
        await expect(dateInput).not.toHaveClass(/ix-invalid--validity-invalid/);
      }
    );

    regressionTest(
      'after reportValidity() shows red, clear() resets to pristine',
      async ({ page, mount }) => {
        await mount(
          `<ix-date-input required value="invalid-date"></ix-date-input>`
        );

        const dateInput = page.locator('ix-date-input');
        const input = dateInput.getByRole('textbox');

        await dateInput.evaluate((el: HTMLIxDateInputElement) =>
          el.reportValidity()
        );

        await expect(input).toHaveClass(/is-invalid/);

        await dateInput.evaluate((el: HTMLIxDateInputElement) => el.clear());
        await expect(input).not.toHaveClass(/is-invalid/);
        await expect(dateInput).not.toHaveClass(/ix-invalid/);
      }
    );
  });
});
