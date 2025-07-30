/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  test,
} from '@utils/test';

regressionTest('form-ready', async ({ mount, page }) => {
  await mount(
    `<form><ix-radio name="my-radio" value="Test"></ix-radio></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const radio = page.locator('ix-radio');
  await radio.click();

  const formData = await getFormValue(formElement, 'my-radio', page);
  expect(formData).toBe('Test');
});

regressionTest('form-ready with default value', async ({ mount, page }) => {
  await mount(`<form><ix-radio name="my-radio"></ix-radio></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const radio = page.locator('ix-radio');
  await radio.click();

  const formData = await getFormValue(formElement, 'my-radio', page);
  expect(formData).toBe('on');
});

regressionTest(`form-ready default active`, async ({ mount, page }) => {
  await mount(
    `<form><ix-radio name="my-field-name" checked></ix-radio></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

regressionTest(`disabled = undefined`, async ({ mount, page }) => {
  await mount(`<ix-radio label="test"></ix-radio>`);

  const radioElement = page.locator('ix-radio');
  const nativeInput = radioElement.locator('input');
  const label = radioElement.locator('label');

  const checkedChange$ = radioElement.evaluate(
    (element: HTMLIxCheckboxElement) => {
      // Needed for testcase
      element.disabled = undefined as any;
      return new Promise<void>((resolve) => {
        element.addEventListener('checkedChange', () => resolve());
      });
    }
  );

  await radioElement.click();
  await checkedChange$;

  await expect(radioElement).not.toHaveClass(/disabled/);
  await expect(nativeInput).not.toBeDisabled();

  const disableLabelColor = 'rgba(245, 252, 255, 0.9)';
  await expect(label).toHaveCSS('color', disableLabelColor);
});

test('Radio button should not cause layout shift when checked', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-radio label="test"></ix-radio>
    <div id="element-below">This element should not move</div>
  `);

  await page.waitForSelector('ix-radio', { state: 'attached' });

  const initialBounds = await page.$eval('#element-below', (el) => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  });

  await page.click('ix-radio');

  await page.waitForFunction(() => {
    const radio = document.querySelector('ix-radio');
    return radio?.getAttribute('aria-checked') === 'true';
  });

  const newBounds = await page.$eval('#element-below', (el) => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  });

  expect(newBounds.top).toBeCloseTo(initialBounds.top, 0);
  expect(newBounds.left).toBeCloseTo(initialBounds.left, 0);
});
