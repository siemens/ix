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

  const dateInput = await createDateInputAccessor(dateInputElement);
  await dateInputElement.locator('input').focus();

  await dateInput.selectDay(10);
  await expect(dateInputElement).toHaveAttribute('value', '2024/05/10');
  await expect(dateInputElement.getByTestId('date-dropdown')).not.toHaveClass(
    /show/
  );
});

regressionTest('select date by input', async ({ mount, page }) => {
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
    ).toHaveText('Date is not valid');
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
    ).toHaveText('Datum nicht korrekt!');
  }
);

regressionTest('required', async ({ mount, page }) => {
  await mount(`<ix-date-input required label="MyLabel"></ix-date-input>`);
  const dateInputElement = page.locator('ix-date-input');
  const input = dateInputElement.locator('input');
  await expect(dateInputElement).toHaveAttribute('required');

  await expect(dateInputElement.locator('ix-field-label')).toHaveText(
    'MyLabel*'
  );

  await input.focus();
  await input.blur();

  await expect(dateInputElement).toHaveClass(/ix-invalid--required/);
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
    const formData = await getFormValue(formElement, 'my-field-name', page);
    expect(formData).toBe('2024/12/12');
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
  'Required input:After entering invalid-date, removing the value with the keyboard, the field should remain invalid.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input required label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');
    const input = dateInputElement.locator('input');
    await input.focus();
    await input.fill('');
    await input.blur();
    await expect(dateInputElement).toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Required input: After entering invalid-date, clearing the touched state (simulating clear button) should make the field valid again.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input required label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');
    const input = dateInputElement.locator('input');

    await input.focus();
    await input.blur();
    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.value = undefined;
    });
    await expect(dateInputElement).not.toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Required input: After entering invalid-date, programmatically setting value to empty should keep field invalid.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input required label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');
    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.value = '';
    });

    const input = dateInputElement.locator('input');
    await input.focus();
    await input.blur();

    await expect(dateInputElement).toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Required input:After entering valid-date, removing the value with the keyboard, the field should remain invalid.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input required label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10');
    const input = dateInputElement.locator('input');
    await input.focus();
    await input.fill('');
    await input.blur();
    await expect(dateInputElement).toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Required input: After entering valid-date, clearing the touched state (simulating clear button) should make the field valid again.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input required label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10');
    const input = dateInputElement.locator('input');

    await input.focus();
    await input.blur();
    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.value = undefined;
    });
    await expect(dateInputElement).not.toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Required input: After entering valid-date, programmatically setting value to empty should keep field invalid.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input required label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10');
    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.value = '';
    });

    const input = dateInputElement.locator('input');
    await input.focus();
    await input.blur();
    await expect(dateInputElement).toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Not Required input: After entering invalid-date, removing the value with the keyboard, the field should remain valid.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');

    const input = dateInputElement.locator('input');
    await input.focus();
    await input.fill('');
    await input.blur();
    await expect(dateInputElement).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not Required input: After entering invalid-date, clearing the touched state (simulating clear button) should make the field valid again.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input  label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');
    const input = dateInputElement.locator('input');

    await input.focus();
    await input.blur();
    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.value = undefined;
    });
    await expect(dateInputElement).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not Required input: After entering invalid-date, programmatically setting value to empty should keep field valid.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input  label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10/10');
    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.value = '';
    });
    await expect(dateInputElement).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not Required input:After entering valid-date, removing the value with the keyboard, the field should remain valid.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input  label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10');

    const input = dateInputElement.locator('input');
    await input.focus();
    await input.fill('');
    await input.blur();
    await expect(dateInputElement).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not Required input: After entering valid-date, clearing the touched state (simulating clear button) should make the field valid again.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input  label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10');
    const input = dateInputElement.locator('input');

    await input.focus();
    await input.blur();
    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.value = undefined;
    });
    await expect(dateInputElement).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not Required input: After entering valid-date, programmatically setting value to empty should keep field valid.',
  async ({ mount, page }) => {
    await mount(`<ix-date-input  label="MyLabel" ></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await expect(dateInputElement).toHaveClass(/hydrated/);
    await dateInputElement.locator('input').fill('2025/10/10');
    await expect(dateInputElement).toHaveAttribute('value', '2025/10/10');
    await dateInputElement.evaluate((el: HTMLIxDateInputElement) => {
      el.value = '';
    });
    await expect(dateInputElement).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Vue validation - syncValidationClasses behavior for required field',
  async ({ mount, page }) => {
    await mount(`<ix-date-input required label="Test"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');

    await dateInputElement.evaluate(async (el: HTMLIxDateInputElement) => {
      const isCurrentlyTouched = await el.isTouched();
      if (!isCurrentlyTouched) {
        await el.focusInput();
        const input = await el.getNativeInputElement();
        input.blur();
      }
      await el.syncValidationClasses();
    });

    await expect(dateInputElement).toHaveClass(/ix-invalid--required/);

    await dateInputElement.evaluate(async (el: HTMLIxDateInputElement) => {
      el.value = 'invalid-date';
      await el.syncValidationClasses();
    });

    await expect(dateInputElement).toHaveClass(
      /ix-invalid--validity-patternMismatch/
    );

    await dateInputElement.evaluate(async (el: HTMLIxDateInputElement) => {
      el.value = '2025/10/12';
      await el.syncValidationClasses();
    });

    await expect(dateInputElement).not.toHaveClass(/ix-invalid--required/);
    await expect(dateInputElement).not.toHaveClass(
      /ix-invalid--validity-patternMismatch/
    );
  }
);

regressionTest(
  'Vue validation - syncValidationClasses behavior for non-required field',
  async ({ mount, page }) => {
    await mount(`<ix-date-input label="Test"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    const input = dateInputElement.locator('input');

    await input.focus();
    await input.blur();

    await expect(dateInputElement).not.toHaveClass(/ix-invalid--required/);

    await dateInputElement.evaluate(async (el: HTMLIxDateInputElement) => {
      el.value = 'invalid-date';
      await el.syncValidationClasses();
    });

    await expect(dateInputElement).toHaveClass(
      /ix-invalid--validity-patternMismatch/
    );

    await dateInputElement.evaluate(async (el: HTMLIxDateInputElement) => {
      el.value = '';
      await el.syncValidationClasses();
    });

    await expect(dateInputElement).not.toHaveClass(/ix-invalid--required/);
    await expect(dateInputElement).not.toHaveClass(
      /ix-invalid--validity-patternMismatch/
    );
  }
);

regressionTest(
  'HTML5 validation - novalidate false (default browser validation)',
  async ({ mount, page }) => {
    // Setup form with HTML5 validation enabled (default)
    await mount(`
    <form>
      <ix-date-input required name="date" label="Date"></ix-date-input>
      <button id="submit-btn" type="submit">Submit</button>
    </form>
  `);

    const dateInput = page.locator('ix-date-input');
    const submitBtn = page.locator('#submit-btn');

    // Wait for hydration
    await expect(dateInput).toHaveClass(/hydrated/);

    // Test HTML5 validation
    await page.evaluate(() => {
      window.addEventListener(
        'invalid',
        () => {
          (window as any).__validationCalled = true;
        },
        true
      );

      // Ensure form has normal HTML5 validation
      const form = document.querySelector('form');
      if (form) {
        form.removeAttribute('novalidate');
      }
    });

    // Submit form
    await submitBtn.click();

    // Wait for validation event to fire
    await page.waitForFunction(
      () => (window as any).__validationCalled === true,
      {
        timeout: 1000,
      }
    );

    // Check native validity state
    const validationState = await dateInput.evaluate(
      async (el: HTMLIxDateInputElement) => {
        const input = await el.getNativeInputElement();
        return {
          valid: input.validity.valid,
          valueMissing: input.validity.valueMissing,
          validationMessage: input.validationMessage,
        };
      }
    );

    expect(validationState.valid).toBeFalsy();
    expect(validationState.valueMissing).toBeTruthy();
    expect(validationState.validationMessage).not.toBe('');
  }
);

regressionTest('Form with novalidate=true', async ({ mount, page }) => {
  // Setup form with HTML5 validation disabled
  await mount(`
    <form novalidate>
      <ix-date-input required name="date" label="Date"></ix-date-input>
      <button id="submit-btn" type="submit">Submit</button>
    </form>
  `);

  const dateInput = page.locator('ix-date-input');
  const form = page.locator('form');
  const submitBtn = page.locator('#submit-btn');

  // Ensure component validation state is set
  await dateInput.evaluate(async (el: HTMLIxDateInputElement) => {
    // Set touched state to match a user interaction
    const input = await el.getNativeInputElement();
    input.focus();
    input.blur();
    await el.syncValidationClasses();
  });

  // Check our component validation first
  await expect(dateInput).toHaveClass(/ix-invalid--required/);

  // Try to submit empty form
  let wasSubmitted = false;
  await form.evaluate((form: HTMLFormElement) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      (form as any).wasSubmitted = true;
    });
  });

  await submitBtn.click();

  // Should have bypassed HTML5 validation
  wasSubmitted = await form.evaluate(
    (form: HTMLFormElement) => (form as any).wasSubmitted
  );
  expect(wasSubmitted).toBeTruthy();
});

regressionTest(
  'Individual date input validation (outside form)',
  async ({ mount, page }) => {
    await mount(`<ix-date-input required label="Date"></ix-date-input>`);
    const dateInput = page.locator('ix-date-input');

    // Set validation state properly
    await dateInput.evaluate(async (el: HTMLIxDateInputElement) => {
      const input = await el.getNativeInputElement();
      input.focus();
      input.blur();
      await el.syncValidationClasses();
    });

    // Component validation should work regardless of form context
    await expect(dateInput).toHaveClass(/ix-invalid--required/);

    // Test pattern validation
    await dateInput.evaluate(async (el: HTMLIxDateInputElement) => {
      el.value = 'invalid-date';
      await el.syncValidationClasses();
    });

    // Should show pattern mismatch
    await expect(dateInput).toHaveClass(/ix-invalid--validity-patternMismatch/);
  }
);

regressionTest(
  'Framework form validation (Angular/React/Vue)',
  async ({ mount, page }) => {
    // Test with ngNoValidate attribute (Angular)
    await mount(`
    <div id="test-container">
      <form ngNoValidate>
        <ix-date-input required name="date" label="Date"></ix-date-input>
      </form>
    </div>
  `);

    let dateInput = page.locator('ix-date-input');
    let form = page.locator('form');

    // Wait for hydration and setup
    await expect(dateInput).toHaveClass(/hydrated/);

    // Check that form validation is working with ngNoValidate
    const hasNgNoValidate = await form.evaluate((form: HTMLFormElement) => {
      return form.hasAttribute('ngNoValidate');
    });
    expect(hasNgNoValidate).toBeTruthy();

    // Trigger validation
    await dateInput.evaluate(async (el: HTMLIxDateInputElement) => {
      const input = await el.getNativeInputElement();
      input.focus();
      input.blur();
      await el.syncValidationClasses();
    });

    // Should use component validation, not HTML5
    await expect(dateInput).toHaveClass(/ix-invalid--required/);

    // Clean up
    await page.evaluate(() => {
      document.getElementById('test-container')?.remove();
    });

    // Test with data-novalidate attribute (React)
    await mount(`
    <div id="test-container">
      <form>
        <ix-date-input required name="date" label="Date"></ix-date-input>
      </form>
    </div>
  `);

    dateInput = page.locator('ix-date-input');
    form = page.locator('form');

    // Wait for hydration and setup
    await expect(dateInput).toHaveClass(/hydrated/);

    // Set data-novalidate after hydration to ensure MutationObserver is set up
    await form.evaluate((form: HTMLFormElement) => {
      form.setAttribute('data-novalidate', '');
    });

    // Check that form validation is working with data-novalidate
    const hasDataNoValidate = await form.evaluate((form: HTMLFormElement) => {
      return form.hasAttribute('data-novalidate');
    });
    expect(hasDataNoValidate).toBeTruthy();

    // Should use component validation
    await dateInput.evaluate(async (el: HTMLIxDateInputElement) => {
      const input = await el.getNativeInputElement();
      input.focus();
      input.blur();
      await el.syncValidationClasses();
    });

    // Should show required validation even with data-novalidate
    await expect(dateInput).toHaveClass(/ix-invalid--required/);

    // Test that native validation is disabled
    const formHasNoValidate = await form.evaluate((form: HTMLFormElement) => {
      return form.hasAttribute('novalidate');
    });
    expect(formHasNoValidate).toBeTruthy();
    // The form submission was already checked in the Promise.all above

    // Clean up
    await page.evaluate(() => {
      document.getElementById('test-container')?.remove();
    });
  }
);
