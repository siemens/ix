/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

type HTMLIxTimeInputElement = HTMLElement & {
  value: string;
  locale: string;
  format: string;
  minTime: string;
  maxTime: string;
};

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

  regressionTest('invalid time should show error state', async ({ page }) => {
    await page.locator('input').fill('invalid-time');

    await expect(page.locator('input')).toHaveClass(/is-invalid/);

    await expect(page.locator('ix-field-wrapper')).toContainText(
      'Time is not valid'
    );
  });

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

      await expect(input).toHaveClass(/is-invalid/);
      await expect(fieldWrapper).toContainText('Time is not valid');

      await iconButton.click();

      await expect(dropdown).not.toHaveClass(/show/);

      await expect(input).toHaveClass(/is-invalid/);
      await expect(fieldWrapper).toContainText('Time is not valid');

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

      await timeInput.evaluateHandle((el) => {
        el.setAttribute('value', 'invalid-time');
      });

      await expect(input).toHaveClass(/is-invalid/);

      await timeInput.evaluateHandle((el) => {
        el.setAttribute('value', '09:10:11');
      });

      await expect(input).not.toHaveClass(/is-invalid/);
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
    'out-of-range initial value should be invalid',
    async ({ page }) => {
      await expect(page.locator('input')).toHaveClass(/is-invalid/);
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

      await expect(input).toHaveClass(/is-invalid/);

      await timeInput.evaluateHandle((el) => {
        el.setAttribute('min-time', '10:00:00');
        el.setAttribute('max-time', '17:30:00');
      });

      await expect(input).not.toHaveClass(/is-invalid/);

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

// ---------------------------------------------------------------------------
// Locale validation — Japanese 12h meridiem through the real component
// ---------------------------------------------------------------------------

regressionTest.describe('time-input locale validation — Japanese 12h', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-time-input
        value="02:30 午後"
        format="hh:mm a"
        locale="ja"
      ></ix-time-input>`
    );
  });

  regressionTest('accepts Japanese PM value as valid', async ({ page }) => {
    await expect(page.locator('input')).toHaveValue('02:30 午後');
    await expect(page.locator('input')).not.toHaveClass(/is-invalid/);
  });

  regressionTest('accepts Japanese AM value as valid', async ({ page }) => {
    await page.locator('input').fill('09:30 午前');
    await expect(page.locator('input')).not.toHaveClass(/is-invalid/);
  });

  regressionTest(
    'rejects Japanese meridiem when locale is changed to English',
    async ({ page }) => {
      const timeInput = page.locator('ix-time-input');
      await timeInput.evaluate((el) => {
        (el as HTMLIxTimeInputElement).locale = 'en';
      });
      await expect(page.locator('input')).toHaveClass(/is-invalid/);
    }
  );

  regressionTest('rejects completely invalid string', async ({ page }) => {
    await page.locator('input').fill('not-a-time');
    await expect(page.locator('input')).toHaveClass(/is-invalid/);
  });
});

// ---------------------------------------------------------------------------
// Locale picker sync — value forwarded to ix-time-picker
// ---------------------------------------------------------------------------

regressionTest.describe('time-input locale picker sync', () => {
  regressionTest(
    'valid Japanese value syncs to picker (selected hour visible)',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input
          value="02:30 午後"
          format="hh:mm a"
          locale="ja"
        ></ix-time-input>`
      );

      await page
        .locator('ix-icon-button[data-testid="open-time-picker"]')
        .click();

      await expect(
        page.locator('ix-time-picker [data-element-container-id="hour-2"]')
      ).toHaveClass(/selected/);
      await expect(
        page.locator('ix-time-picker [data-element-container-id="minute-30"]')
      ).toHaveClass(/selected/);
    }
  );

  regressionTest(
    'invalid value does not break picker (picker still opens)',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input
          value="02:30 午後"
          format="hh:mm a"
          locale="ja"
        ></ix-time-input>`
      );

      await page.locator('input').fill('bad-time');
      await page
        .locator('ix-icon-button[data-testid="open-time-picker"]')
        .click();

      await expect(
        page.locator('ix-dropdown[data-testid="time-dropdown"]')
      ).toHaveClass(/show/);
    }
  );
});

// ---------------------------------------------------------------------------
// Locale event emission — valueChange carries the localized string
// ---------------------------------------------------------------------------

regressionTest.describe('time-input locale event emission', () => {
  regressionTest(
    'valueChange emits the localized Japanese string on input',
    async ({ mount, page }) => {
      await mount(
        `<ix-time-input
          value="09:30 午前"
          format="hh:mm a"
          locale="ja"
        ></ix-time-input>`
      );

      const valueChangePromise = page.evaluate(() => {
        return new Promise((resolve) => {
          document
            .querySelector('ix-time-input')
            ?.addEventListener('valueChange', (event) => {
              resolve((event as CustomEvent).detail);
            });
        });
      });

      await page.locator('input').fill('02:30 午後');
      expect(await valueChangePromise).toBe('02:30 午後');
    }
  );
});

// ---------------------------------------------------------------------------
// Locale constraint validation — minTime/maxTime with Japanese meridiem
// ---------------------------------------------------------------------------

regressionTest.describe(
  'time-input locale constraints — Japanese 12h min/max',
  () => {
    regressionTest.beforeEach(async ({ mount }) => {
      await mount(
        `<ix-time-input
          value="02:30 午後"
          format="hh:mm a"
          locale="ja"
          min-time="12:00 午後"
          max-time="05:00 午後"
        ></ix-time-input>`
      );
    });

    regressionTest(
      'value within Japanese constraints is valid',
      async ({ page }) => {
        await expect(page.locator('input')).not.toHaveClass(/is-invalid/);
      }
    );

    regressionTest('value below minTime is invalid', async ({ page }) => {
      const timeInput = page.locator('ix-time-input');
      await timeInput.evaluate((el) => {
        (el as HTMLIxTimeInputElement).minTime = '03:00 午後';
      });
      await expect(page.locator('input')).toHaveClass(/is-invalid/);
    });

    regressionTest('value above maxTime is invalid', async ({ page }) => {
      const timeInput = page.locator('ix-time-input');
      await timeInput.evaluate((el) => {
        (el as HTMLIxTimeInputElement).maxTime = '02:00 午後';
      });
      await expect(page.locator('input')).toHaveClass(/is-invalid/);
    });

    regressionTest(
      'updating constraints to include value clears invalid state',
      async ({ page }) => {
        const timeInput = page.locator('ix-time-input');

        await timeInput.evaluate((el) => {
          (el as HTMLIxTimeInputElement).minTime = '03:00 午後';
        });
        await expect(page.locator('input')).toHaveClass(/is-invalid/);

        await timeInput.evaluate((el) => {
          (el as HTMLIxTimeInputElement).minTime = '12:00 午後';
        });
        await expect(page.locator('input')).not.toHaveClass(/is-invalid/);
      }
    );
  }
);
