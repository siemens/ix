/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
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

regressionTest('required', async ({ mount, page }) => {
  await mount(`<ix-field-label required>MyLabel</ix-field-label>`);
  const labelElement = page.locator('ix-field-label');
  await expect(labelElement).toHaveText('MyLabel *');
});

regressionTest('focus native input by label click', async ({ mount, page }) => {
  await mount(`
    <ix-field-label html-for="input">MyLabel</ix-field-label>
    <input data-testid="input" id="input" />
  `);
  const labelElement = page.locator('ix-field-label');
  await labelElement.click();

  const inputElement = page.getByTestId('input');
  await expect(inputElement).toBeFocused();
});

regressionTest.describe('click label', () => {
  ['ix-input', 'ix-number-input', 'ix-date-input', 'ix-textarea'].forEach(
    (selector) => {
      regressionTest(
        `focus ${selector} by external label click`,
        async ({ mount, page }) => {
          await mount(`
        <ix-field-label html-for="input">MyLabel</ix-field-label>
        <${selector} id="input"></${selector}>
      `);
          const labelElement = page.locator('ix-field-label');
          await labelElement.click();

          const component = page.locator(selector);
          const focusElement =
            selector !== 'ix-textarea'
              ? component.locator('input')
              : component.locator('textarea');
          await expect(focusElement).toBeFocused();
        }
      );

      regressionTest(
        `focus ${selector} by embedded label click`,
        async ({ mount, page }) => {
          await mount(`
        <${selector} label="MyLabel"></${selector}>
      `);

          const component = page.locator(selector);
          await expect(component).toHaveClass(/hydrated/);

          const labelElement = component
            .locator('ix-field-wrapper')
            .locator('ix-field-label');

          await labelElement.click();

          const focusElement =
            selector !== 'ix-textarea'
              ? component.locator('input')
              : component.locator('textarea');

          await expect(focusElement).toBeFocused();
        }
      );
    }
  );
});

regressionTest('valid color', async ({ mount, page }) => {
  await mount(`<ix-field-label>LabelValid</ix-field-label>`);

  const labelElement = page.locator('ix-field-label');

  await expect(labelElement).not.toHaveAttribute('is-invalid');
  await expect(labelElement.locator('ix-typography')).toHaveAttribute(
    'style',
    'color: var(--theme-color-soft-text);'
  );
});

regressionTest('invalid color', async ({ mount, page }) => {
  await mount(`<ix-field-label is-invalid>LabelInvalid</ix-field-label>`);

  const labelElement = page.locator('ix-field-label');

  await expect(labelElement).toHaveAttribute('is-invalid');
  await expect(labelElement.locator('ix-typography')).toHaveAttribute(
    'style',
    'color: var(--theme-color-alarm-text);'
  );
});

regressionTest('valid color with valid text field', async ({ mount, page }) => {
  await mount(`
    <ix-input label="label text">valid field</ix-input>
  `);

  const fieldElement = page.locator('ix-input');
  const labelElement = page.locator('ix-field-label');

  await expect(fieldElement).not.toHaveClass(/ix-invalid--required/);

  await expect(labelElement.locator('ix-typography')).toHaveAttribute(
    'style',
    'color: var(--theme-color-soft-text);'
  );
});

regressionTest(
  'invalid color with invalid text field',
  async ({ mount, page }) => {
    await mount(`
    <ix-input label="invalid label text" required>invalid field</ix-input>
  `);

    const fieldElement = page.locator('ix-input');
    const labelElement = page.locator('ix-field-label');

    await expect(fieldElement).toHaveClass(/ix-invalid--required/);

    await expect(labelElement.locator('ix-typography')).toHaveAttribute(
      'style',
      'color: var(--theme-color-alarm-text);'
    );
  }
);

regressionTest(
  'valid color with valid textarea field',
  async ({ mount, page }) => {
    await mount(`
    <ix-textarea label="label text">valid field</ix-textarea>
  `);

    const fieldElement = page.locator('ix-textarea');
    const labelElement = page.locator('ix-field-label');

    await expect(fieldElement).not.toHaveClass(/ix-invalid--required/);

    await expect(labelElement.locator('ix-typography')).toHaveAttribute(
      'style',
      'color: var(--theme-color-soft-text);'
    );
  }
);

regressionTest(
  'invalid color with invalid textarea field',
  async ({ mount, page }) => {
    await mount(`
    <ix-textarea label="invalid label text" required>valid field</ix-textarea>
  `);

    const fieldElement = page.locator('ix-textarea');
    const labelElement = page.locator('ix-field-label');

    await expect(fieldElement).not.toHaveClass(/ix-invalid--required/);

    await expect(labelElement.locator('ix-typography')).toHaveAttribute(
      'style',
      'color: var(--theme-color-alarm-text);'
    );
  }
);
