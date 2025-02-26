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
    test(selector, async ({ mount, page }) => {
      await mount(`<${selector} required></${selector}>`);

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
