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
      await expect(fieldWrapper).not.toContainText('Time is not valid');
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
    'Not Required input: After entering invalid-time, removing the value with the keyboard, the field should remain valid.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('25:99:99');
      await expect(timeInputElement).toHaveAttribute('value', '25:99:99');
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.fill('');
      await input.blur();
      await expect(timeInputElement).not.toHaveClass(/is-invalid/);
    }
  );

  regressionTest(
    'Not Required input: After entering invalid-time, clearing the touched state (simulating clear button) should make the field valid again.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('25:99:99');
      await expect(timeInputElement).toHaveAttribute('value', '25:99:99');
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.blur();
      await timeInputElement.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = undefined;
      });
      await expect(timeInputElement).not.toHaveClass(/is-invalid/);
    }
  );

  regressionTest(
    'Not Required input: After entering invalid-time, programmatically setting value to empty should keep field valid.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('25:99:99');
      await expect(timeInputElement).toHaveAttribute('value', '25:99:99');
      await timeInputElement.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = '';
      });
      await expect(timeInputElement).not.toHaveClass(/is-invalid/);
    }
  );

  regressionTest(
    'Not Required input: After entering valid-time, removing the value with the keyboard, the field should remain valid.',
    async ({ mount, page }) => {
      await mount(`<ix-time-input label="MyLabel"></ix-time-input>`);
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('12:34:56');
      await expect(timeInputElement).toHaveAttribute('value', '12:34:56');
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.fill('');
      await input.blur();
      await expect(timeInputElement).not.toHaveClass(/is-invalid/);
    }
  );

  regressionTest(
    'Not Required input: After entering valid-time, clearing the touched state (simulating clear button) should make the field valid again.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('12:34:56');
      await expect(timeInputElement).toHaveAttribute('value', '12:34:56');
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.blur();
      await timeInputElement.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = '';
      });
      await expect(timeInputElement).not.toHaveClass(/is-invalid/);
    }
  );

  regressionTest(
    'Not Required input: After entering valid-time, programmatically setting value to empty should keep field valid.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('12:34:56');
      await expect(timeInputElement).toHaveAttribute('value', '12:34:56');
      await timeInputElement.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = '';
      });
      await expect(timeInputElement).not.toHaveClass(/is-invalid/);
    }
  );
});

regressionTest.describe('required time input tests', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(`<ix-time-input required label="MyLabel"></ix-time-input>`);
  });

  regressionTest(
    'Required input: After entering invalid-time, removing the value with the keyboard, the field should remain invalid.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('25:99:99');
      await expect(timeInputElement).toHaveAttribute('value', '25:99:99');
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.fill('');
      await input.blur();
      await expect(timeInputElement).toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'Required input: After entering invalid-time, clearing the touched state (simulating clear button) should make the field valid again.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('25:99:99');
      await expect(timeInputElement).toHaveAttribute('value', '25:99:99');
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.blur();
      await timeInputElement.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = undefined;
      });
      await expect(timeInputElement).not.toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'Required input: After entering invalid-time, programmatically setting value to empty should keep field invalid.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('25:99:99');
      await expect(timeInputElement).toHaveAttribute('value', '25:99:99');
      await timeInputElement.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = '';
      });
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.blur();
      await expect(timeInputElement).toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'Required input: After entering valid-time, removing the value with the keyboard, the field should remain invalid.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('12:34:56');
      await expect(timeInputElement).toHaveAttribute('value', '12:34:56');
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.fill('');
      await input.blur();
      await expect(timeInputElement).toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'Required input: After entering valid-time, clearing the touched state (simulating clear button) should make the field valid again.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('12:34:56');
      await expect(timeInputElement).toHaveAttribute('value', '12:34:56');
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.blur();
      await timeInputElement.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = undefined;
      });
      await expect(timeInputElement).not.toHaveClass(/ix-invalid--required/);
    }
  );

  regressionTest(
    'Required input: After entering valid-time, programmatically setting value to empty should keep field invalid.',
    async ({ mount, page }) => {
      const timeInputElement = page.locator('ix-time-input');
      await expect(timeInputElement).toHaveClass(/hydrated/);
      await timeInputElement.locator('input').fill('12:34:56');
      await expect(timeInputElement).toHaveAttribute('value', '12:34:56');
      await timeInputElement.evaluate((el: HTMLIxTimeInputElement) => {
        el.value = '';
      });
      const input = timeInputElement.locator('input');
      await input.focus();
      await input.blur();
      await expect(timeInputElement).toHaveClass(/ix-invalid--required/);
    }
  );
});
