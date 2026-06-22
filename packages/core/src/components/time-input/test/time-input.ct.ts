/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import {
  getFormValue,
  preventFormSubmission,
  regressionTest,
} from '@utils/test';

const expectNoVisualValidation = async (timeInput: any, input: any) => {
  await expect(input).not.toHaveClass(/is-invalid/);
  await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
  await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);
};

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(
    `<ix-time-input label="Time" value="09:10:11" format="HH:mm:ss"></ix-time-input>`
  );

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `<ix-time-input value="09:10:11" format="HH:mm:ss"></ix-time-input>`
  );
  const timeInputElement = page.locator('ix-time-input');
  await expect(timeInputElement).toHaveClass(/hydrated/);
});

regressionTest(
  'tab navigation into time input opens dropdown in keyboard mode',
  async ({ mount, page }) => {
    await mount(`
      <button type="button">Before</button>
      <ix-time-input value="09:10:11" format="HH:mm:ss"></ix-time-input>
    `);

    const timeInputElement = page.locator('ix-time-input');
    await expect(timeInputElement).toHaveClass(/hydrated/);

    const dropdown = timeInputElement.getByTestId('time-dropdown');

    await page.getByRole('button', { name: 'Before' }).focus();
    await page.keyboard.press('Tab');

    await expect(timeInputElement.locator('input')).toBeFocused();
    await expect(dropdown).toHaveClass(/show/);
  }
);

regressionTest(
  'select time by focus opens dropdown',
  async ({ mount, page }) => {
    await mount(
      `<ix-time-input value="09:10:11" format="HH:mm:ss"></ix-time-input>`
    );
    const timeInputElement = page.locator('ix-time-input');
    await expect(timeInputElement).toHaveClass(/hydrated/);

    const dropdown = timeInputElement.getByTestId('time-dropdown');
    await timeInputElement.locator('input').focus();
    await page.keyboard.press('ArrowDown');
    await expect(dropdown).toHaveClass(/show/);
  }
);

regressionTest(
  'select time by input closes dropdown on valid value',
  async ({ mount, page }) => {
    await mount(
      `<ix-time-input value="09:10:11" format="HH:mm:ss"></ix-time-input>`
    );
    const timeInputElement = page.locator('ix-time-input');
    await expect(timeInputElement).toHaveClass(/hydrated/);

    const dropdown = timeInputElement.getByTestId('time-dropdown');
    const iconButton = timeInputElement.locator(
      'ix-icon-button[data-testid="open-time-picker"]'
    );

    await iconButton.click();
    await expect(dropdown).toHaveClass(/show/);

    await timeInputElement.locator('input').fill('14:30:00');

    await expect(dropdown).not.toHaveClass(/show/);
    await expect(timeInputElement).toHaveAttribute('value', '14:30:00');
  }
);

regressionTest(
  'select time by input with invalid time shows error',
  async ({ mount, page }) => {
    await mount(
      `<ix-time-input value="09:10:11" format="HH:mm:ss"></ix-time-input>`
    );
    const timeInputElement = page.locator('ix-time-input');
    await expect(timeInputElement).toHaveClass(/hydrated/);

    const iconButton = timeInputElement.locator(
      'ix-icon-button[data-testid="open-time-picker"]'
    );
    await timeInputElement.locator('input').fill('invalid-time');
    await iconButton.click();
    await expect(timeInputElement).toHaveAttribute('value', 'invalid-time');

    await expect(
      timeInputElement
        .locator('ix-field-wrapper')
        .locator('ix-typography')
        .filter({ hasText: 'Time is not valid' })
    ).toHaveText(/Time is not valid/);
  }
);

regressionTest(
  'select time by input with invalid time - i18n',
  async ({ mount, page }) => {
    await mount(
      `<ix-time-input value="09:10:11" format="HH:mm:ss" i18n-error-time-unparsable="Zeit nicht korrekt!"></ix-time-input>`
    );
    const timeInputElement = page.locator('ix-time-input');
    await expect(timeInputElement).toHaveClass(/hydrated/);

    const iconButton = timeInputElement.locator(
      'ix-icon-button[data-testid="open-time-picker"]'
    );
    await timeInputElement.locator('input').fill('invalid-time');
    await iconButton.click();
    await expect(timeInputElement).toHaveAttribute('value', 'invalid-time');

    await expect(
      timeInputElement
        .locator('ix-field-wrapper')
        .locator('ix-typography')
        .filter({ hasText: 'Zeit nicht korrekt!' })
    ).toHaveText(/Zeit nicht korrekt!/);
  }
);

regressionTest(`form-ready - ix-time-input`, async ({ mount, page }) => {
  await mount(
    `<form><ix-time-input name="my-field-name" format="HH:mm:ss"></ix-time-input></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-time-input').locator('input');
  await input.fill('14:30:00');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('14:30:00');
});

regressionTest(
  `form-ready - ix-time-input initial value`,
  async ({ mount, page }) => {
    await mount(
      `<form><ix-time-input name="my-field-name" value="10:20:30" format="HH:mm:ss"></ix-time-input></form>`
    );

    const formElement = page.locator('form');
    preventFormSubmission(formElement);
    const componentValue = await page
      .locator('ix-time-input')
      .evaluate((el: HTMLIxTimeInputElement) => el.value);
    const formData = await getFormValue(formElement, 'my-field-name', page);
    expect(formData).toBe(componentValue);
  }
);

regressionTest.describe('time input validation scenarios', () => {
  regressionTest.describe('required field behavior', () => {
    regressionTest('required', async ({ mount, page }) => {
      await mount(
        `<ix-time-input required label="MyLabel" format="HH:mm:ss"></ix-time-input>`
      );

      const timeInputElement = page.locator('ix-time-input');
      const input = timeInputElement.locator('input');

      await expect(timeInputElement).toHaveAttribute('required');

      await expect(timeInputElement.locator('ix-field-label')).toHaveText(
        'MyLabel*'
      );

      // Clear the auto-filled default value before checking required state.
      await input.fill('');
      await input.focus();
      await page.waitForTimeout(50);
      await input.blur();

      await expect(timeInputElement).toHaveClass(/ix-invalid--required/, {
        timeout: 5000,
      });
    });

    regressionTest(
      'required: invalid value cleared with keyboard stays invalid after blur',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input label="Required Time" format="HH:mm:ss" required value="invalid-time"></ix-time-input>`
        );

        const timeInputElement = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.blur();
        await input.fill('');
        await input.blur();

        await expect(timeInputElement).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'required: clicking picker cells while empty does not show visual error before confirm',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input label="Required Time" format="HH:mm:ss" required></ix-time-input>`
        );

        const timeInputElement = page.locator('ix-time-input');
        const input = timeInputElement.locator('input');

        await input.fill('');
        await timeInputElement
          .locator('ix-icon-button[data-testid="open-time-picker"]')
          .click();

        await page
          .locator('ix-time-picker [data-element-container-id="hour-12"]')
          .click();
        await expectNoVisualValidation(timeInputElement, input);

        await page
          .locator('ix-time-picker [data-element-container-id="minute-30"]')
          .click();
        await expectNoVisualValidation(timeInputElement, input);

        await page
          .locator('ix-time-picker [data-element-container-id="second-45"]')
          .click();
        await expectNoVisualValidation(timeInputElement, input);
      }
    );
  });
});

regressionTest.describe('time input tests', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-time-input
        value="09:10:11"
        format="HH:mm:ss"
      >
      </ix-time-input>`
    );
  });

  regressionTest(
    'input updates should reflect in the picker',
    async ({ page }) => {
      await page
        .locator('ix-icon-button[data-testid="open-time-picker"]')
        .click();

      await page.locator('input').fill('10:30:45');

      const hourElement = await page.locator(
        'ix-time-picker [data-element-container-id="hour-10"]'
      );
      const minuteElement = await page.locator(
        'ix-time-picker [data-element-container-id="minute-30"]'
      );
      const secondElement = await page.locator(
        'ix-time-picker [data-element-container-id="second-45"]'
      );

      await expect(hourElement).toHaveClass(/selected/);
      await expect(minuteElement).toHaveClass(/selected/);
      await expect(secondElement).toHaveClass(/selected/);
    }
  );

  regressionTest(
    'clock icon click should open the dropdown',
    async ({ page }) => {
      await expect(
        page.locator('ix-dropdown[data-testid="time-dropdown"]')
      ).not.toHaveClass(/show/);

      await page
        .locator('ix-icon-button[data-testid="open-time-picker"]')
        .click();

      await expect(
        page.locator('ix-dropdown[data-testid="time-dropdown"]')
      ).toHaveClass(/show/);

      await expect(page.locator('ix-time-picker')).toBeVisible();
    }
  );

  regressionTest(
    'invalid time should show error state after blur',
    async ({ page }) => {
      const input = page.locator('input');

      await input.fill('invalid-time');
      await input.blur();

      await expect(input).toHaveClass(/is-invalid/);
      await expect(page.locator('ix-field-wrapper')).toContainText(
        'Time is not valid'
      );
    }
  );

  regressionTest(
    'selecting time in dropdown should update input value',
    async ({ page }) => {
      await page
        .locator('ix-icon-button[data-testid="open-time-picker"]')
        .click();

      await page
        .locator('ix-time-picker [data-element-container-id="hour-12"]')
        .click();
      await page
        .locator('ix-time-picker [data-element-container-id="minute-30"]')
        .click();
      await page
        .locator('ix-time-picker [data-element-container-id="second-45"]')
        .click();

      await page.locator('ix-time-picker ix-button').click();

      await expect(
        page.locator('ix-dropdown[data-testid="time-dropdown"]')
      ).not.toHaveClass(/show/);

      await expect(page.locator('input')).toHaveValue('12:30:45');
    }
  );

  regressionTest(
    'closing dropdown and reopening after entering invalid time does not break component',
    async ({ page }) => {
      const input = page.locator('input');
      const fieldWrapper = page.locator('ix-field-wrapper');
      const visibleInvalidText = fieldWrapper
        .locator('ix-typography:visible')
        .filter({ hasText: /is not valid/i });
      const dropdown = page.locator('ix-dropdown[data-testid="time-dropdown"]');
      const iconButton = page.locator(
        'ix-icon-button[data-testid="open-time-picker"]'
      );

      await input.click();

      await expect(dropdown).toHaveClass(/show/);

      await expect(page.locator('ix-time-picker')).toBeVisible();

      await input.fill('invalid-time');

      await iconButton.click();

      await expect(dropdown).not.toHaveClass(/show/);

      await expect(input).toHaveValue('invalid-time');

      await iconButton.click();

      await expect(dropdown).toHaveClass(/show/);

      await page
        .locator('ix-time-picker [data-element-container-id="second-30"]')
        .click();

      await page.locator('ix-time-picker ix-button').click();

      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(visibleInvalidText).toHaveCount(0);
    }
  );

  regressionTest(
    'updating component value attribute updates validity',
    async ({ page }) => {
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await timeInput.evaluateHandle((el: HTMLIxTimeInputElement) => {
        el.setAttribute('value', 'invalid-time');
      });

      await expectNoVisualValidation(timeInput, input);

      const isInvalid = await timeInput.evaluate(
        (el: HTMLIxTimeInputElement) => el.reportValidity()
      );
      expect(isInvalid).toBe(false);
      await expect(input).toHaveClass(/is-invalid/);

      await timeInput.evaluateHandle((el: HTMLIxTimeInputElement) => {
        el.setAttribute('value', '09:10:11');
      });

      await expectNoVisualValidation(timeInput, input);
    }
  );

  regressionTest(
    'invalidText property takes precedence over i18n error message',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input value="09:10:11" format="HH:mm:ss" invalid-text="Custom time error"></ix-time-input>`
      );

      const timeInputElement = page.locator('ix-time-input');

      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('invalid-time');
      await timeInputElement.locator('input').blur();
      await expect(
        timeInputElement
          .locator('ix-field-wrapper')
          .locator('ix-typography')
          .filter({ hasText: 'Custom time error' })
      ).toHaveText(/Custom time error/);
    }
  );
});

regressionTest.describe('time input min/max tests', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-time-input
        value="12:00:00"
        format="HH:mm:ss"
        min-time="13:00:00"
        max-time="17:30:00"
      >
      </ix-time-input>`
    );
  });

  regressionTest(
    'out-of-range initial value is internally invalid and shows error after blur',
    async ({ page }) => {
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await expectNoVisualValidation(timeInput, input);

      const isValid = await timeInput.evaluate(
        (el: HTMLIxTimeInputElement) => el.reportValidity()
      );

      expect(isValid).toBe(false);
      await expect(input).toHaveClass(/is-invalid/);
      await expect(page.locator('ix-field-wrapper')).toContainText(
        'Time is not valid'
      );
    }
  );

  regressionTest(
    'picker selection matches input when value is out of range',
    async ({ page }) => {
      await page
        .locator('ix-icon-button[data-testid="open-time-picker"]')
        .click();

      await expect(
        page.locator('ix-time-picker [data-element-container-id="hour-12"]')
      ).toHaveClass(/selected/);
    }
  );

  regressionTest(
    'updating min/max attributes should revalidate current value',
    async ({ page }) => {
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        return el.reportValidity();
      });

      await expect(input).toHaveClass(/is-invalid/);

      await timeInput.evaluateHandle((el) => {
        el.setAttribute('min-time', '10:00:00');
        el.setAttribute('max-time', '17:30:00');
      });

      await expectNoVisualValidation(timeInput, input);

      await timeInput.evaluateHandle((el) => {
        el.setAttribute('min-time', '13:00:00');
      });

      await expect(input).toHaveClass(/is-invalid/);
    }
  );

  regressionTest(
    'selecting a valid time should clear invalid state',
    async ({ page }) => {
      await page
        .locator('ix-icon-button[data-testid="open-time-picker"]')
        .click();
      await page
        .locator('ix-time-picker [data-element-container-id="hour-16"]')
        .click();
      await page
        .locator('ix-time-picker [data-element-container-id="minute-0"]')
        .click();
      await page
        .locator('ix-time-picker [data-element-container-id="second-0"]')
        .click();
      await page.locator('ix-time-picker ix-button').click();

      await expect(page.locator('input')).toHaveValue('16:00:00');
      await expect(page.locator('input')).not.toHaveClass(/is-invalid/);
    }
  );
});

regressionTest.describe('time input validation', () => {
  regressionTest(
    'programmatic invalid value does not show visual error before blur, shows after blur, and clears when valid again',
    async ({ mount, page }) => {
      await mount(`<ix-time-input format="HH:mm:ss"></ix-time-input>`);

      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = 'invalid-time';
      });

      await expectNoVisualValidation(timeInput, input);

      const isValid = await timeInput.evaluate(
        (el: HTMLIxTimeInputElement) => el.reportValidity()
      );

      expect(isValid).toBe(false);
      await expect(input).toHaveClass(/is-invalid/);
      await expect(timeInput).toHaveClass(/ix-invalid/);

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = '12:30:00';
      });

      await expectNoVisualValidation(timeInput, input);
    }
  );

  regressionTest(
    'non-required: invalid value cleared with keyboard becomes valid',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Optional Time" format="HH:mm:ss"></ix-time-input>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await input.fill('invalid-time');
      await input.blur();
      await expect(input).toHaveClass(/is-invalid/);

      await input.fill('');
      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'non-required: invalid value cleared with keyboard stays valid after blur',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Optional Time" format="HH:mm:ss"></ix-time-input>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await input.fill('invalid-time');
      await input.blur();
      await expect(input).toHaveClass(/is-invalid/);

      await input.fill('');
      await input.blur();

      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);
    }
  );

  regressionTest(
    'non-required: invalid value programmatically set to empty becomes valid',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Optional Time" format="HH:mm:ss" value="invalid-time"></ix-time-input>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        return el.reportValidity();
      });

      await expect(input).toHaveClass(/is-invalid/);

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = '';
      });

      await expectNoVisualValidation(timeInput, input);
    }
  );

  regressionTest(
    'non-required: valid value removed with keyboard stays valid',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Optional Time" format="HH:mm:ss" value="12:30:00"></ix-time-input>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await input.fill('');
      await input.blur();

      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'required: invalid value cleared with clear() becomes valid again',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Required Time" format="HH:mm:ss" required value="invalid-time"></ix-time-input>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        return el.reportValidity();
      });

      await expect(timeInput).toHaveClass(/ix-invalid/);

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        return el.clear();
      });

      // Wait for async clear() operations to complete
      await page.waitForTimeout(100);

      // clear() should remove all validation classes
      await expect(input).toHaveValue('');
      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(timeInput).not.toHaveClass(/ix-invalid/);
    }
  );

  regressionTest(
    'clear() resets value, touched state, and error classes',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Required Time" format="HH:mm:ss" required value="invalid-time"></ix-time-input>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await input.blur();

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.clear();
      });

      await expect(input).toHaveValue('');
      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);
    }
  );

  regressionTest(
    'clear() resets touched state until the next blur',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Required Time" format="HH:mm:ss" required></ix-time-input>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await input.fill('');
      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        return el.reportValidity();
      });

      await expect(timeInput).toHaveClass(/ix-invalid--required/);

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        return el.clear();
      });

      await expect(input).toHaveValue('');
      await expectNoVisualValidation(timeInput, input);

      await input.focus();
      await input.blur();

      await expect(timeInput).toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'reportValidity() triggers immediate visual validation',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Required Time" format="HH:mm:ss" required></ix-time-input>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      // Clear auto-filled default value before calling reportValidity
      await input.fill('');

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.reportValidity();
      });

      await expect(timeInput).toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'reportValidity() shows invalid-format error for non-empty invalid value',
    async ({ mount, page }) => {
      await mount(`<ix-time-input format="HH:mm:ss"></ix-time-input>`);

      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = 'invalid-time';
      });

      await expectNoVisualValidation(timeInput, input);

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        return el.reportValidity();
      });

      await expect(input).toHaveClass(/is-invalid/);
      await expect(page.locator('ix-field-wrapper')).toContainText(
        'Time is not valid'
      );
    }
  );

  regressionTest(
    'novalidate form suppresses visual validation',
    async ({ mount, page }) => {
      await mount(
        `<form novalidate><ix-time-input label="Required Time" format="HH:mm:ss" required value="invalid-time"></ix-time-input></form>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await input.blur();

      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);
    }
  );

  regressionTest(
    'novalidate form suppresses required-empty visual validation',
    async ({ mount, page }) => {
      await mount(
        `<form novalidate><ix-time-input label="Required Time" format="HH:mm:ss" required></ix-time-input></form>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await input.fill('');
      await input.blur();

      await expect(input).not.toHaveClass(/is-invalid/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
      await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);
    }
  );

  regressionTest(
    'reportValidity() overrides novalidate suppression',
    async ({ mount, page }) => {
      await mount(
        `<form novalidate><ix-time-input label="Required Time" format="HH:mm:ss" required></ix-time-input></form>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      // Clear auto-filled default value before calling reportValidity
      await input.fill('');

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.reportValidity();
      });

      await expect(timeInput).toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'i18nErrorRequired customizes required error message',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Required Time" format="HH:mm:ss" required i18n-error-required="Zeit ist erforderlich"></ix-time-input>`
      );
      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      // Verify the i18n property is set correctly on the component
      const i18nErrorRequired = await timeInput.evaluate(
        (el: HTMLIxTimeInputElement) => el.i18nErrorRequired
      );
      await expect(i18nErrorRequired).toBe('Zeit ist erforderlich');

      // Clear auto-filled default value (TimeInput auto-fills with current time)
      await input.fill('');
      await input.blur();

      // Wait for async validation to complete
      await page.waitForTimeout(100);

      // Verify required validation class is applied
      await expect(timeInput).toHaveClass(/ix-invalid--required/);
      await expect(page.locator('ix-field-wrapper')).toContainText(
        'Zeit ist erforderlich'
      );
    }
  );

  regressionTest(
    'dynamic required toggle updates validation immediately for empty value',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Toggle Required" format="HH:mm:ss"></ix-time-input>`
      );

      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await input.fill('');
      await input.blur();

      await expect(timeInput).not.toHaveClass(/ix-invalid--required/);

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.required = true;
      });

      await expect(timeInput).toHaveClass(/ix-invalid--required/);

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.required = false;
      });

      await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'reportValidity() shows required error text for empty required field',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Required Time" format="HH:mm:ss" required></ix-time-input>`
      );

      const timeInput = page.locator('ix-time-input');
      const input = page.locator('input');

      await input.fill('');

      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.reportValidity();
      });

      await expect(timeInput).toHaveClass(/ix-invalid--required/);
      await expect(page.locator('ix-field-wrapper')).toContainText(
        'Time is required'
      );
    }
  );
});
