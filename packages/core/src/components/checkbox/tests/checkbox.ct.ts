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

regressionTest(`form-ready`, async ({ mount, page }) => {
  await mount(`<form><ix-checkbox name="my-field-name"></ix-checkbox></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-checkbox').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

regressionTest(`form-ready with value`, async ({ mount, page }) => {
  await mount(
    `<form><ix-checkbox name="my-field-name" value="custom-value"></ix-checkbox></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  await page.locator('ix-checkbox').click();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('custom-value');
});

regressionTest(`form-ready default active`, async ({ mount, page }) => {
  await mount(
    `<form><ix-checkbox name="my-field-name" checked></ix-checkbox></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('on');
});

regressionTest(`disabled`, async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label" disabled></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox');
  await expect(checkboxElement).toBeDisabled();
});

regressionTest(`disabled = undefined`, async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label"></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox');
  const nativeInput = checkboxElement.locator('input');
  const label = checkboxElement.locator('ix-typography');

  const checkedChange$ = checkboxElement.evaluate(
    (element: HTMLIxCheckboxElement) => {
      // Needs to be tested because at runtime undefined assignment could happen
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      element.disabled = undefined as any;
      return new Promise<void>((resolve) => {
        element.addEventListener('checkedChange', () => resolve());
      });
    }
  );

  await checkboxElement.click();
  await checkedChange$;

  await expect(checkboxElement).not.toHaveClass(/disabled/);
  await expect(nativeInput).not.toBeDisabled();

  const checkboxLabelColor = 'rgba(245, 252, 255, 0.9)';
  await expect(label).toHaveCSS('color', checkboxLabelColor);
});

regressionTest(
  'label-less host size matches 24px active area',
  async ({
    mount,

    page,
  }) => {
    await mount(
      `<ix-checkbox aria-label="Accept" name="no-label"></ix-checkbox>`
    );
    const checkbox = page.locator('ix-checkbox');
    await expect(checkbox).toHaveClass(/label-less/);
    await expect(checkbox).toHaveCSS('width', '24px');
    await expect(checkbox).toHaveCSS('height', '24px');
  }
);

regressionTest(
  'default slot label is not label-less',
  async ({ mount, page }) => {
    await mount(
      `<ix-checkbox name="slot-label">Custom slot label text</ix-checkbox>`
    );
    const checkbox = page.locator('ix-checkbox');
    await expect(checkbox).not.toHaveClass(/label-less/);
    await expect(checkbox).toHaveText(/Custom slot label text/);
    await expect(checkbox.locator('ix-typography')).toBeVisible();
  }
);

regressionTest('label', async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label"></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox').locator('label');
  await expect(checkboxElement).toHaveText(/some label/);
});

regressionTest(
  'Checkbox should not cause layout shift when checked',
  async ({ mount, page }) => {
    await mount(`
    <ix-checkbox label="test"></ix-checkbox>
    <div id="element-below">This element should not move</div>
  `);

    const checkbox = page.locator('ix-checkbox');
    const elementBelow = page.locator('#element-below');

    await expect(checkbox).toHaveClass(/hydrated/);
    await expect(elementBelow).toBeVisible();
    await page.evaluate(() => document.fonts.ready);

    const initialBounds = await elementBelow.boundingBox();
    if (!initialBounds) {
      throw new Error('Expected element below checkbox to have a bounding box');
    }

    await checkbox.click();
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');

    const newBounds = await elementBelow.boundingBox();
    if (!newBounds) {
      throw new Error('Expected element below checkbox to remain visible');
    }

    expect(newBounds.y).toBeCloseTo(initialBounds.y, 0);
    expect(newBounds.x).toBeCloseTo(initialBounds.x, 0);
  }
);

test.describe('accessibility', () => {
  test('should expose aria-label for accessibility queries', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-checkbox label="Accept Terms"></ix-checkbox>`);
    const checkbox = page.getByRole('checkbox', { name: 'Accept Terms' });
    await expect(checkbox).toBeVisible();
    await checkbox.click();
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });
});
