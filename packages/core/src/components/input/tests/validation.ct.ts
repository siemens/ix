/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test } from '@utils/test';
import { expect } from '@playwright/test';

test.describe('validation', () => {
  test.describe('ix-input', () => {
    test('validation class should persist if provided by user', async ({
      mount,
      page,
    }) => {
      await mount('<ix-input class="ix-invalid"></ix-input>');
      const input = page.locator('ix-input');
      const shadowDomInput = input.locator('input');

      await shadowDomInput.fill('my example');
      await shadowDomInput.blur();

      await expect(input).toHaveClass(/ix-invalid/);
    });

    test('min-length validation should be triggered', async ({
      mount,
      page,
    }) => {
      await mount('<ix-input min-length="3" value="123"></ix-input>');

      const input = page.locator('ix-input');
      const shadowDomInput = input.locator('input');

      await shadowDomInput.fill('12');
      await shadowDomInput.blur();

      await expect(input).toHaveClass(/ix-invalid/);
    });
  });

  test.describe('ix-number-input', () => {
    test('number input should NOT be invalid if value is zero (zero is valid)', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input required></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      await shadowDomInput.fill('0');
      await shadowDomInput.blur();

      await expect(ixInput).not.toHaveClass(/ix-invalid--required/);
    });

    test('number input should be invalid if value is empty and required', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input required></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      // Empty value should be invalid when required
      await shadowDomInput.fill('');
      await shadowDomInput.blur();
      await expect(ixInput).toHaveClass(/ix-invalid--required/);
    });

    test('number input should accept scientific notation', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      // Test positive scientific notation
      await shadowDomInput.fill('1E6');
      await shadowDomInput.blur();
      await expect(ixInput).not.toHaveClass(/ix-invalid/);

      // Test negative scientific notation
      await shadowDomInput.fill('1E-6');
      await shadowDomInput.blur();
      await expect(ixInput).not.toHaveClass(/ix-invalid/);

      // Test lowercase scientific notation
      await shadowDomInput.fill('2.5e3');
      await shadowDomInput.blur();
      await expect(ixInput).not.toHaveClass(/ix-invalid/);
    });

    test('number input should be valid when empty and not required', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      await shadowDomInput.fill('');
      await shadowDomInput.blur();
      await expect(ixInput).not.toHaveClass(/ix-invalid/);
    });

    test('number input should validate invalid text input', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input required></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      await shadowDomInput.fill('abc');
      await shadowDomInput.blur();

      await expect(ixInput).toHaveClass(/ix-invalid/);
    });

    test('increment by step', async ({ mount, page }) => {
      await mount(
        '<ix-number-input show-stepper-buttons step="3" value="5"></ix-number-input>'
      );

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');
      await expect(shadowDomInput).toHaveAttribute('step', '3');
      await expect(ixInput).toHaveAttribute('value', '5');

      const buttonPlus = ixInput.getByLabel('increment number');
      await buttonPlus.click();

      await expect(ixInput).toHaveAttribute('value', '8');
    });

    test('stepper buttons should handle undefined values', async ({
      mount,
      page,
    }) => {
      await mount('<ix-number-input show-stepper-buttons></ix-number-input>');

      const ixInput = page.locator('ix-number-input');
      const shadowDomInput = ixInput.locator('input');

      ixInput.evaluate((el) => {
        // @ts-ignore
        el.value = undefined;
      });

      const buttonPlus = ixInput.getByLabel('increment number');
      await buttonPlus.click();

      await expect(shadowDomInput).toHaveValue('1');
    });
  });
});

test.describe.configure({
  mode: 'parallel',
});

test.describe('prevent initial require validation', async () => {
  [
    'ix-input',
    'ix-number-input',
    'ix-date-input',
    'ix-select',
    'ix-textarea',
  ].forEach((selector) => {
    test(`${selector} - should not show validation on initial load`, async ({
      mount,
      page,
    }) => {
      const template =
        selector === 'ix-number-input'
          ? `<${selector} required value="undefined"></${selector}>`
          : `<${selector} required value=""></${selector}>`;

      await mount(template);

      const inputComponent = page.locator(selector);
      const input = inputComponent.locator(
        selector !== 'ix-textarea' ? 'input' : 'textarea'
      );

      await expect(inputComponent).toBeVisible();
      await expect(inputComponent).not.toHaveClass(/ix-invalid/);

      await input.focus();
      await input.blur();

      await expect(inputComponent).toHaveClass(/ix-invalid/);
    });
  });
});
