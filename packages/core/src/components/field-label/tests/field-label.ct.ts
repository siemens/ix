/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Locator, expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-field-label>My Label</ix-field-label>`);
  const fieldLabelElement = page.locator('ix-field-label');
  await expect(fieldLabelElement).toHaveClass(/hydrated/);
  await expect(
    fieldLabelElement.locator('label').locator('ix-typography')
  ).toHaveClass(/typography-label/);
  await expect(fieldLabelElement.filter({ hasText: 'My Label' })).toHaveText(
    'My Label'
  );
});

test('required', async ({ mount, page }) => {
  await mount(`<ix-field-label required>MyLabel</ix-field-label>`);
  const labelElement = page.locator('ix-field-label');
  await expect(labelElement).toHaveText('MyLabel *');
});

test('htmlFor', async ({ mount, page }) => {
  await mount(`
    <ix-field-label html-for="input">MyLabel</ix-field-label>
    <input data-testid="input" id="input" />
  `);
  const labelElement = page.locator('ix-field-label');
  await labelElement.click();

  const inputElement = page.getByTestId('input');
  await expect(inputElement).toBeFocused();
});
