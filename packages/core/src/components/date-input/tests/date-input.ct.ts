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
  'Required input: Invalid input > Removing value with keyboard > Stays invalid',
  async ({ page, mount }) => {
    await mount(
      `<ix-date-input required value="invalid-date"></ix-date-input>`
    );

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.selectText();
    await input.press('Delete');
    await input.blur();

    await expect(dateInput).toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Required input: Invalid input > Remove touched state > Valid again',
  async ({ page, mount }) => {
    await mount(`<ix-date-input required value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.selectText();
    await input.fill('invalid-date');
    await input.blur();

    await dateInput.evaluate((el: any) => el.reset());

    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Required input: Invalid input > Programmatically setting to empty > Stays invalid',
  async ({ page, mount }) => {
    await mount(
      `<ix-date-input required value="invalid-date"></ix-date-input>`
    );

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.blur();

    await dateInput.evaluate((el: any) => {
      el.value = '';
    });

    await expect(dateInput).toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Required input: Valid input > Removing value with keyboard > It is invalid',
  async ({ page, mount }) => {
    await mount(`<ix-date-input required value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.selectText();
    await input.press('Delete');
    await input.blur();

    await expect(dateInput).toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Required input: Valid input > Remove touched state > Valid',
  async ({ page, mount }) => {
    await mount(`<ix-date-input required value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.blur();

    await dateInput.evaluate((el: any) => el.reset());

    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Required input: Valid input > Programmatically setting to empty > It is invalid',
  async ({ page, mount }) => {
    await mount(`<ix-date-input required value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.blur();

    await dateInput.evaluate((el: any) => {
      el.value = '';
    });

    await expect(dateInput).toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'Not required input: Invalid input > Removing value with keyboard > Valid',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="invalid-date"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.selectText();
    await input.press('Delete');
    await input.blur();

    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not required input: Invalid input > Remove touched state > Valid again',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.selectText();
    await input.fill('invalid-date');
    await input.blur();

    await dateInput.evaluate((el: any) => el.reset());

    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not required input: Invalid input > Programmatically setting to empty > Valid',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="invalid-date"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.blur();

    await dateInput.evaluate((el: any) => {
      el.value = '';
    });

    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not required input: Valid input > Removing value with keyboard > Valid',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.selectText();
    await input.press('Delete');
    await input.blur();

    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not required input: Valid input > Remove touched state > Valid',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.blur();

    await dateInput.evaluate((el: any) => el.reset());

    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Not required input: Valid input > Programmatically setting to empty > Valid',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.blur();

    await dateInput.evaluate((el: any) => {
      el.value = '';
    });

    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'novalidate form suppresses validation for required field',
  async ({ page, mount }) => {
    await mount(`
      <form novalidate>
        <ix-date-input required value="2024/05/05"></ix-date-input>
      </form>
    `);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.selectText();
    await input.press('Delete');
    await input.blur();

    await expect(input).not.toHaveClass(/is-invalid/);
    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
  }
);

regressionTest(
  'novalidate form suppresses validation for non-required field',
  async ({ page, mount }) => {
    await mount(`
      <form novalidate>
        <ix-date-input value="2024/05/05"></ix-date-input>
      </form>
    `);

    const input = page.locator('input');

    await input.focus();
    await input.blur();

    await expect(input).not.toHaveClass(/is-invalid/);
  }
);

regressionTest(
  'Validation works after switching between required and non-required',
  async ({ page, mount }) => {
    await mount(`<ix-date-input value="2024/05/05"></ix-date-input>`);

    const dateInput = page.locator('ix-date-input');
    const input = page.locator('input');

    await input.focus();
    await input.selectText();
    await input.press('Delete');
    await input.blur();

    await expect(input).not.toHaveClass(/is-invalid/);
    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);

    await dateInput.evaluate((el: any) => {
      el.required = true;
    });

    await expect(dateInput).toHaveClass(/ix-invalid--required/);

    await dateInput.evaluate((el: any) => {
      el.required = false;
    });

    await expect(dateInput).not.toHaveClass(/ix-invalid--required/);
  }
);
