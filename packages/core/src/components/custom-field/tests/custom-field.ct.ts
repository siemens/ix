/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-custom-field></ix-custom-field>`);
  const customFieldElement = page.locator('ix-custom-field');
  await expect(customFieldElement).toHaveClass(/hydrated/);
});

test('renders with label', async ({ mount, page }) => {
  await mount(`<ix-custom-field label="Label"><input /></ix-custom-field>`);
  const customFieldElement = page.locator('ix-custom-field');
  const fieldLabel = customFieldElement.locator('ix-field-label');
  const typography = fieldLabel.locator('label').locator('ix-typography');
  await expect(customFieldElement).toHaveClass(/hydrated/);
  await expect(fieldLabel).toHaveClass(/hydrated/);
  await expect(typography).toHaveClass(/typography-label/);
  await expect(fieldLabel.filter({ hasText: 'Label' })).toHaveText('Label');
});

test('renders with helper-text', async ({ mount, page }) => {
  await mount(
    `<ix-custom-field helper-text="Some helper text" invalid-text="Error"></ix-custom-field>`
  );
  const customFieldElement = page.locator('ix-custom-field');
  const fieldWrapper = customFieldElement.locator('ix-field-wrapper');
  await expect(customFieldElement).toHaveClass(/hydrated/);
  await expect(fieldWrapper).toHaveClass(/hydrated/);
  await expect(fieldWrapper.filter({ hasText: 'Some helper text' })).toHaveText(
    'Some helper text'
  );
});

test('renders with invalid-text', async ({ mount, page }) => {
  await mount(
    `<ix-custom-field helper-text="Some helper text" invalid-text="Error">
      <input class="ix-invalid" />
    </ix-custom-field>`
  );
  const customFieldElement = page.locator('ix-custom-field');
  const fieldWrapper = customFieldElement.locator('ix-field-wrapper');
  await expect(customFieldElement).toHaveClass(/hydrated/);
  await expect(fieldWrapper).toHaveClass(/hydrated/);
  await expect(fieldWrapper.filter({ hasText: 'Error' })).toHaveText('Error');
});

test('renders with invalid-text if on child is invalid', async ({
  mount,
  page,
}) => {
  await mount(
    `<ix-custom-field helper-text="Some helper text" invalid-text="Error">
      <input />
      <div data-testid="custom">Some custom</div>
    </ix-custom-field>`
  );
  const customFieldElement = page.locator('ix-custom-field');
  const fieldWrapper = customFieldElement.locator('ix-field-wrapper');
  await expect(customFieldElement).toHaveClass(/hydrated/);
  await expect(fieldWrapper).toHaveClass(/hydrated/);
  await expect(fieldWrapper.filter({ hasText: 'Some helper text' })).toHaveText(
    'Some helper text'
  );

  const custom = customFieldElement.getByTestId('custom');
  custom.evaluate((node) => node.classList.add('ix-invalid'));

  await expect(fieldWrapper.filter({ hasText: 'Error' })).toHaveText('Error');
});

test('renders with required label', async ({ mount, page }) => {
  await mount(
    `<ix-custom-field label="Label" required><input/></ix-custom-field>`
  );
  const customFieldElement = page.locator('ix-custom-field');
  const fieldLabel = customFieldElement.locator('ix-field-label');
  const typography = fieldLabel.locator('label').locator('ix-typography');
  await expect(customFieldElement).toHaveClass(/hydrated/);
  await expect(fieldLabel).toHaveClass(/hydrated/);
  await expect(typography).toHaveClass(/typography-label/);
  await expect(fieldLabel.filter({ hasText: 'Label*' })).toHaveText('Label*');
});
