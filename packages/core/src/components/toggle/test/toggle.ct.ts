/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-toggle></ix-toggle>`);
  const drawer = page.locator('ix-toggle');
  await expect(drawer).toHaveClass(/hydrated/);
  await expect(drawer).toBeVisible();
});

regressionTest('should toggle', async ({ mount, page }) => {
  await mount(`<ix-toggle></ix-toggle>`);
  const toggle = page.locator('ix-toggle');
  await expect(toggle).toHaveClass(/hydrated/);
  await toggle.click();

  const input = toggle.locator('input');
  await expect(input).toBeChecked();
});

regressionTest('should not toggle if disabled', async ({ mount, page }) => {
  await mount(`<ix-toggle disabled></ix-toggle>`);
  const toggle = page.locator('ix-toggle');
  await expect(toggle).toHaveClass(/hydrated/);
  await toggle.click({
    force: true,
  });

  const input = toggle.locator('input');
  await expect(input).not.toBeChecked();
});

regressionTest(
  'should be toggled ON after indeterminate',
  async ({ mount, page }) => {
    await mount(`<ix-toggle indeterminate></ix-toggle>`);
    const toggle = page.locator('ix-toggle');
    await expect(toggle).toHaveClass(/hydrated/);
    const input = toggle.locator('input');
    await expect(input).not.toBeChecked();

    await toggle.click();

    await expect(input).toBeChecked();
  }
);

regressionTest(`form-ready`, async ({ mount, page }) => {
  await mount(`<form><ix-toggle name="my-field-name"></ix-toggle></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-toggle').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

regressionTest(`form-ready with value`, async ({ mount, page }) => {
  await mount(
    `<form><ix-toggle name="my-field-name" value="custom-value"></ix-toggle></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-toggle').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('custom-value');
});

regressionTest(`form-ready default active`, async ({ mount, page }) => {
  await mount(
    `<form><ix-toggle name="my-field-name" checked></ix-toggle></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});
