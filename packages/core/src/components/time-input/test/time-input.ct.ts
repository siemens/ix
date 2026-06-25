/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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

const expectNoVisualValidation = async (timeInput: Locator, input: Locator) => {
  await expect(input).not.toHaveClass(/is-invalid/);
  await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
  await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);
};

const waitForFormSubmit = (form: Locator) => {
  const submitPromise = form.evaluate(
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

  return submitPromise;
};

const setupFormSubmitTracking = (page: any, shouldPreventDefault: boolean) => {
  return page.evaluate((prevent: boolean) => {
    globalThis.__formSubmitted = false;
    const form = document.getElementById('form') as HTMLFormElement;
    const handleSubmit = (event: Event) => {
      if (prevent) {
        event.preventDefault();
      }
      globalThis.__formSubmitted = true;
    };
    form.addEventListener('submit', handleSubmit);
  }, shouldPreventDefault);
};

regressionTest.describe('accessibility', () => {
  regressionTest('default state', async ({ mount, makeAxeBuilder }) => {
    await mount(
      `<ix-time-input label="Time" value="09:10:11" format="HH:mm:ss"></ix-time-input>`
    );

    const results = await makeAxeBuilder().analyze();
    expect(results.violations).toEqual([]);
  });

  regressionTest(
    'invalid parse error state',
    async ({ mount, page, makeAxeBuilder }) => {
      await mount(
        `<ix-time-input label="Time" value="12:30:00" format="HH:mm:ss"></ix-time-input>`
      );

      await expect(page.locator('ix-time-input')).toHaveClass(/\bhydrated\b/);

      const input = page.locator('input');
      await input.fill('invalid-time');

      await page
        .locator('ix-time-input')
        .evaluate((el: HTMLIxTimeInputElement) => el.reportValidity());

      const accessibilityScanResults = await makeAxeBuilder().analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    }
  );

  regressionTest(
    'required missing error state',
    async ({ mount, page, makeAxeBuilder }) => {
      await mount(
        `<ix-time-input label="Time" required value="12:30:00" format="HH:mm:ss"></ix-time-input>`
      );

      await expect(page.locator('ix-time-input')).toHaveClass(/\bhydrated\b/);

      const input = page.locator('input');
      await input.fill('');

      await page
        .locator('ix-time-input')
        .evaluate((el: HTMLIxTimeInputElement) => el.reportValidity());

      const accessibilityScanResults = await makeAxeBuilder().analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    }
  );
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `<ix-time-input value="09:10:11" format="HH:mm:ss"></ix-time-input>`
  );
  const timeInputElement = page.locator('ix-time-input');
  await expect(timeInputElement).toHaveClass(/hydrated/);
});

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
  'initial invalid value does not show visual error before user interaction',
  async ({ mount, page }) => {
    await mount(
      `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
    );

    const timeInput = page.locator('ix-time-input');
    const input = page.locator('input');

    await input.fill('invalid-time');

    await expect(input).not.toHaveClass(/is-invalid/);
    await expect(timeInput).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'programmatic invalid value does not show visual error before user interaction, shows after blur, setting valid value clears error',
  async ({ mount, page }) => {
    await mount(
      `<ix-time-input value="09:10:11" format="HH:mm:ss"></ix-time-input>`
    );

    const timeInput = page.locator('ix-time-input');
    const input = page.locator('input');

    await input.fill('invalid-time');
    await expect(input).not.toHaveClass(/is-invalid/);
    await expect(timeInput).not.toHaveClass(/ix-invalid/);

    await input.focus();
    await input.blur();
    await expect(input).toHaveClass(/is-invalid/);
    await expect(timeInput).toHaveClass(/ix-invalid/);

    await input.fill('09:10:11');
    await expect(input).not.toHaveClass(/is-invalid/);
    await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);
  }
);

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

      const isInvalid = await timeInput.evaluate((el: HTMLIxTimeInputElement) =>
        el.reportValidity()
      );
      expect(isInvalid).toBe(false);
      await expect(input).toHaveClass(/is-invalid/);

      await timeInput.evaluateHandle((el: HTMLIxTimeInputElement) => {
        el.setAttribute('value', '09:10:11');
      });

      await expectNoVisualValidation(timeInput, input);
    }
  );
});

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

      const isValid = await timeInput.evaluate((el: HTMLIxTimeInputElement) =>
        el.reportValidity()
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

      // 12:00:00 is below minTime 13:00:00, so should be invalid
      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        return el.reportValidity();
      });

      await expect(input).toHaveClass(/is-invalid/);

      // Lower minTime to 10:00:00 → 12:00:00 becomes valid
      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.minTime = '10:00:00';
        el.maxTime = '17:30:00';
      });

      // Wait for revalidation to complete
      await page.waitForTimeout(200);
      await expectNoVisualValidation(timeInput, input);

      // Raise minTime back to 13:00:00 → 12:00:00 becomes invalid again
      await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
        el.minTime = '13:00:00';
      });

      // Wait for revalidation to complete
      await page.waitForTimeout(200);
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

regressionTest.describe('picker interaction with validation', () => {
  regressionTest(
    'clicking picker cells while empty does not show visual error before confirm',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input label="Required Time" format="HH:mm:ss" required value="12:30:00"></ix-time-input>`
      );

      const timeInputElement = page.locator('ix-time-input');
      const input = timeInputElement.locator('input');

      await input.fill('');
      await timeInputElement
        .locator('ix-icon-button[data-testid="open-time-picker"]')
        .click();

      await expect(page.locator('ix-time-picker')).toBeVisible();

      const hourButton = page.locator('ix-time-picker button').first();
      await hourButton.click();
      await expect(input).not.toHaveClass(/is-invalid/);
    }
  );
});

regressionTest.describe('time input validation scenarios', () => {
  regressionTest.describe('required field behavior', () => {
    regressionTest(
      'Required input: Invalid input > Removing value with keyboard > Stays invalid',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input label="Required Time" format="HH:mm:ss" required value="12:30:00"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.fill('invalid-time');
        await input.blur();

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expect(timeInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Required input: Enter invalid input > Remove touched state (clear) > Valid again',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.fill('invalid-time');
        await input.blur();

        await timeInput.evaluate((el: HTMLIxTimeInputElement) => el.clear());

        await expectNoVisualValidation(timeInput, input);
        await expect(input).toHaveValue('');
        await expect(timeInput).toHaveAttribute('value', '');
      }
    );

    regressionTest(
      'Required input: Invalid input > Programmatically setting to empty > Stays invalid (no immediate red, shows after blur)',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('');

        await expect(timeInput).not.toHaveClass(/ix-invalid--required/);

        await input.focus();
        await input.blur();

        await expect(timeInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Required input: Valid input > Removing value with keyboard > It is invalid',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expect(timeInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Required input: Valid input > Remove touched state (clear) > Valid',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.blur();

        await timeInput.evaluate((el: HTMLIxTimeInputElement) => el.clear());

        await expectNoVisualValidation(timeInput, input);
        await expect(input).toHaveValue('');
        await expect(timeInput).toHaveAttribute('value', '');
      }
    );

    regressionTest(
      'Required input: Valid input > Programmatically setting to empty > It is invalid (no immediate red, shows after blur)',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('');

        await expect(timeInput).not.toHaveClass(/ix-invalid--required/);

        await input.focus();
        await input.blur();

        await expect(timeInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Required input: Programmatically setting to empty > Error shows on form reportValidity',
      async ({ mount, page }) => {
        await mount(`
          <form id="form">
            <ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>
          </form>
        `);

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('');

        await page.evaluate(() => {
          (document.getElementById('form') as HTMLFormElement).reportValidity();
        });

        await expect(timeInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'Validation works after switching between required and non-required',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.selectText();
        await input.press('Delete');
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
      'clear() resets touched state until the next blur',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input label="Required Time" value="12:30:00" format="HH:mm:ss" required></ix-time-input>`
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
      'i18nErrorRequired customizes required error message',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input label="Required Time" value="12:30:00" format="HH:mm:ss" required i18n-error-required="Zeit ist erforderlich"></ix-time-input>`
        );
        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        const i18nErrorRequired = await timeInput.evaluate(
          (el: HTMLIxTimeInputElement) => el.i18nErrorRequired
        );
        await expect(i18nErrorRequired).toBe('Zeit ist erforderlich');

        await input.fill('');
        await input.blur();

        // Wait for async validation to complete
        await page.waitForTimeout(100);

        await expect(timeInput).toHaveClass(/ix-invalid--required/);
        await expect(page.locator('ix-field-wrapper')).toContainText(
          'Zeit ist erforderlich'
        );
      }
    );
  });

  regressionTest.describe('optional field behavior', () => {
    regressionTest(
      'Not required input: Invalid input > Removing value with keyboard > Valid',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.fill('invalid-time');
        await input.blur();

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expectNoVisualValidation(timeInput, input);
      }
    );

    regressionTest(
      'Not required input: Invalid input > Remove touched state (clear) > Valid',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.fill('invalid-time');
        await input.blur();

        await timeInput.evaluate((el: HTMLIxTimeInputElement) => el.clear());

        await expectNoVisualValidation(timeInput, input);
        await expect(input).toHaveValue('');
        await expect(timeInput).toHaveAttribute('value', '');
      }
    );

    regressionTest(
      'Not required input: Invalid input > Programmatically setting to empty > Valid',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input label="Optional Time" value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );
        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('invalid-time');
        await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
          return el.reportValidity();
        });

        await expect(input).toHaveClass(/is-invalid/);

        await input.fill('');

        await expectNoVisualValidation(timeInput, input);
      }
    );

    regressionTest(
      'Not required input: Valid input > Removing value with keyboard > Valid',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.selectText();
        await input.press('Delete');
        await input.blur();

        await expectNoVisualValidation(timeInput, input);
      }
    );

    regressionTest(
      'Not required input: Valid input > Remove touched state (clear) > Valid',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.blur();

        await timeInput.evaluate((el: HTMLIxTimeInputElement) => el.clear());

        await expectNoVisualValidation(timeInput, input);
        await expect(input).toHaveValue('');
        await expect(timeInput).toHaveAttribute('value', '');
      }
    );

    regressionTest(
      'Not required input: Valid input > Programmatically setting to empty > Valid',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.focus();
        await input.blur();

        await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
          el.value = '';
        });

        await expectNoVisualValidation(timeInput, input);
      }
    );
  });

  regressionTest.describe('novalidate form behavior', () => {
    regressionTest(
      'novalidate form suppresses validation for required field',
      async ({ mount, page }) => {
        await mount(
          `<form novalidate><ix-time-input label="Required Time" value="12:30:00" format="HH:mm:ss" required></ix-time-input></form>`
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
      'novalidate form suppresses visual validation for invalid time input',
      async ({ mount, page }) => {
        await mount(
          `<form novalidate><ix-time-input label="Required Time" value="12:30:00" format="HH:mm:ss" required></ix-time-input></form>`
        );
        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('invalid-time');
        await input.blur();

        await expect(input).not.toHaveClass(/is-invalid/);
        await expect(timeInput).not.toHaveClass(/ix-invalid--required/);
        await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);
      }
    );

    regressionTest(
      'novalidate form: reportValidity() overrides form validation suppression',
      async ({ mount, page }) => {
        await mount(
          `<form novalidate><ix-time-input label="Required Time" value="12:30:00" format="HH:mm:ss" required></ix-time-input></form>`
        );
        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('');

        await timeInput.evaluate((el: HTMLIxTimeInputElement) => {
          el.reportValidity();
        });

        await expect(timeInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'novalidate form: submit event fires even when required field is empty',
      async ({ mount, page }) => {
        await mount(`
          <form id="form" novalidate>
            <ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>
            <button type="submit">Submit</button>
          </form>
        `);

        const input = page.locator('input');
        await input.fill('');

        const submitPromise = waitForFormSubmit(page.locator('#form'));

        await page.locator('button[type="submit"]').click();
        const submitted = await submitPromise;
        expect(submitted).toBe(true);

        const timeInput = page.locator('ix-time-input');
        await expect(timeInput).not.toHaveClass(/ix-invalid/);
      }
    );

    regressionTest(
      'novalidate form: reportValidity() validates invalid time',
      async ({ mount, page }) => {
        await mount(`
          <form novalidate>
            <ix-time-input required value="invalid-time" format="HH:mm:ss"></ix-time-input>
            <ix-time-input value="invalid-time" format="HH:mm:ss"></ix-time-input>
          </form>
        `);

        const timeInputs = page.locator('ix-time-input');

        for (const index of [0, 1]) {
          const timeInput = timeInputs.nth(index);
          const input = timeInput.locator('input');

          // Verify the invalid value is set (TimeInput may auto-fill, so force it)
          await input.fill('invalid-time');

          const isValid = await timeInput.evaluate(
            (el: HTMLIxTimeInputElement) => el.reportValidity()
          );

          expect(isValid).toBe(false);
          await expect(input).toHaveClass(/is-invalid/);
          await expect(timeInput).toHaveClass(/ix-invalid--validity-invalid/);
        }
      }
    );

    regressionTest(
      'novalidate form: reportValidity() error persists when value remains invalid, clears when fixed',
      async ({ mount, page }) => {
        await mount(`
          <form novalidate>
            <ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>
          </form>
        `);

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('bad-time');
        await timeInput.evaluate((el: HTMLIxTimeInputElement) =>
          el.reportValidity()
        );
        await expect(input).toHaveClass(/is-invalid/);

        await input.fill('still-bad-time');
        await expect(input).toHaveClass(/is-invalid/);
        await expect(timeInput).toHaveClass(/ix-invalid--validity-invalid/);

        await input.fill('12:30:00');
        await expect(input).not.toHaveClass(/is-invalid/);
        await expect(timeInput).not.toHaveClass(/ix-invalid/);
      }
    );

    regressionTest(
      'novalidate form: emptying the field after reportValidity() switches error message to required',
      async ({ mount, page }) => {
        await mount(`
          <form novalidate>
            <ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>
          </form>
        `);

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('bad-time');
        await expect(input).not.toHaveClass(/is-invalid/);

        await timeInput.evaluate((el: HTMLIxTimeInputElement) =>
          el.reportValidity()
        );
        await expect(input).toHaveClass(/is-invalid/);
        await expect(
          timeInput
            .locator('ix-field-wrapper')
            .locator('ix-typography')
            .filter({ hasText: 'Time is not valid' })
        ).toBeVisible();

        await input.fill('');

        await expect(timeInput).toHaveClass(/ix-invalid--required/);
        await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);

        await expect(
          timeInput
            .locator('ix-field-wrapper')
            .locator('ix-typography')
            .filter({ hasText: 'Time is required' })
        ).toBeVisible();
      }
    );
  });

  regressionTest.describe('reportValidity behavior', () => {
    regressionTest(
      'reportValidity returns false and shows error for invalid time without prior interaction',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('invalid-time');
        await expect(input).not.toHaveClass(/is-invalid/);

        const isValid = await timeInput.evaluate((el: HTMLIxTimeInputElement) =>
          el.reportValidity()
        );

        expect(isValid).toBe(false);
        await expect(input).toHaveClass(/is-invalid/);
        await expect(timeInput).toHaveClass(/ix-invalid--validity-invalid/);
      }
    );

    regressionTest(
      'reportValidity returns false and shows required error for empty required field',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        // TimeInput auto-fills with current time, so clear it first
        await input.fill('');

        const isValid = await timeInput.evaluate((el: HTMLIxTimeInputElement) =>
          el.reportValidity()
        );

        expect(isValid).toBe(false);
        await expect(timeInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'reportValidity returns true for a valid field',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        const isValid = await timeInput.evaluate((el: HTMLIxTimeInputElement) =>
          el.reportValidity()
        );

        expect(isValid).toBe(true);
        await expect(input).not.toHaveClass(/is-invalid/);
        await expect(timeInput).not.toHaveClass(/ix-invalid/);
      }
    );

    regressionTest(
      'form.reportValidity() with invalid time (parse error) shows field and title red',
      async ({ mount, page }) => {
        await mount(`
          <form id="form">
            <ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>
          </form>
        `);

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('invalid-time');
        await expect(input).not.toHaveClass(/is-invalid/);

        await page.evaluate(() => {
          (document.getElementById('form') as HTMLFormElement).reportValidity();
        });

        await expect(input).toHaveClass(/is-invalid/);
        await expect(timeInput).toHaveClass(/ix-invalid--validity-invalid/);
      }
    );

    regressionTest(
      'after reportValidity() shows red, correcting value clears the error',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('invalid-time');
        await timeInput.evaluate((el: HTMLIxTimeInputElement) =>
          el.reportValidity()
        );
        await expect(input).toHaveClass(/is-invalid/);

        await input.fill('12:30:00');
        await expect(input).not.toHaveClass(/is-invalid/);
        await expect(timeInput).not.toHaveClass(/ix-invalid--validity-invalid/);
      }
    );

    regressionTest(
      'after reportValidity() shows red, clear() resets to pristine',
      async ({ mount, page }) => {
        await mount(
          `<ix-time-input required value="12:30:00" format="HH:mm:ss"></ix-time-input>`
        );

        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('invalid-time');
        await timeInput.evaluate((el: HTMLIxTimeInputElement) =>
          el.reportValidity()
        );

        await expect(input).toHaveClass(/is-invalid/);

        await timeInput.evaluate((el: HTMLIxTimeInputElement) => el.clear());
        await expect(input).not.toHaveClass(/is-invalid/);
        await expect(timeInput).not.toHaveClass(/ix-invalid/);
      }
    );
  });

  regressionTest.describe('validated form submission', () => {
    regressionTest(
      'validated form: submit is prevented when required field is empty',
      async ({ mount, page }) => {
        await mount(`
          <form id="form">
            <ix-time-input required format="HH:mm:ss"></ix-time-input>
            <button type="submit">Submit</button>
          </form>
        `);

        await setupFormSubmitTracking(page, false);
        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        // TimeInput auto-fills with current time, so clear it first
        await input.fill('');

        await page.locator('button[type="submit"]').click();

        const wasSubmitted = await page.evaluate(
          () => globalThis.__formSubmitted
        );
        expect(wasSubmitted).toBe(false);

        await expect(timeInput).toHaveClass(/ix-invalid--required/);
      }
    );

    regressionTest(
      'validated form: submit is prevented when field contains invalid time',
      async ({ mount, page }) => {
        await mount(`
          <form id="form">
            <ix-time-input value="12:30:00" format="HH:mm:ss"></ix-time-input>
            <button type="submit">Submit</button>
          </form>
        `);

        await setupFormSubmitTracking(page, false);
        const timeInput = page.locator('ix-time-input');
        const input = page.locator('input');

        await input.fill('invalid-time');

        await page.locator('button[type="submit"]').click();

        const wasSubmitted = await page.evaluate(
          () => globalThis.__formSubmitted
        );
        expect(wasSubmitted).toBe(false);

        await expect(timeInput).toHaveClass(/ix-invalid--validity-invalid/);
      }
    );

    regressionTest(
      'validated form: submit is allowed when field is valid',
      async ({ mount, page }) => {
        await mount(`
          <form id="form">
            <ix-time-input value="12:30:00" required format="HH:mm:ss"></ix-time-input>
            <button type="submit">Submit</button>
          </form>
        `);

        await setupFormSubmitTracking(page, true);
        const timeInput = page.locator('ix-time-input');

        await page.locator('button[type="submit"]').click();

        const wasSubmitted = await page.evaluate(
          () => globalThis.__formSubmitted
        );
        expect(wasSubmitted).toBe(true);

        await expect(timeInput).not.toHaveClass(/ix-invalid/);
      }
    );
  });
});
