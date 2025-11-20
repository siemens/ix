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

regressionTest('label', async ({ mount, page }) => {
  await mount(`<ix-checkbox label="some label"></ix-checkbox>`);
  const checkboxElement = page.locator('ix-checkbox').locator('label');
  await expect(checkboxElement).toHaveText('some label');
});

test('Checkbox should not cause layout shift when checked', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-checkbox label="test"></ix-checkbox>
    <div id="element-below">This element should not move</div>
  `);

  await page.waitForSelector('ix-checkbox', { state: 'attached' });

  const initialBounds = await page.$eval('#element-below', (el) => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  });

  await page.click('ix-checkbox');

  await page.waitForFunction(() => {
    const checkbox = document.querySelector('ix-checkbox');
    return checkbox?.getAttribute('aria-checked') === 'true';
  });

  const newBounds = await page.$eval('#element-below', (el) => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  });

  expect(newBounds.top).toBeCloseTo(initialBounds.top, 0);
  expect(newBounds.left).toBeCloseTo(initialBounds.left, 0);
});

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

regressionTest(
  'validation works when noValidate is not set (default)',
  async ({ mount, page }) => {
    await mount(
      `
      <form>
        <ix-checkbox label="Accept Terms" value="terms" required></ix-checkbox>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const checkbox = page.locator('ix-checkbox');
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await expect(checkbox).not.toHaveClass(/ix-invalid/);
    await submitButton.click();
    await expect(checkbox).toHaveClass(/ix-invalid--required/);
    await expect(checkbox).toHaveClass(/ix-invalid/);
    await checkbox.click();
    await expect(checkbox).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'noValidate=true disables validation',
  async ({ mount, page }) => {
    await mount(
      `
      <form novalidate>
        <ix-checkbox label="Accept Terms" value="terms" required></ix-checkbox>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const checkbox = page.locator('ix-checkbox');
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await submitButton.click();
    await expect(checkbox).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox).not.toHaveClass(/ix-invalid/);
    await checkbox.focus();
    await page.keyboard.press('Tab');

    await expect(checkbox).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'validation behavior with blur when noValidate is not set',
  async ({ mount, page }) => {
    await mount(
      `
      <form>
        <ix-checkbox label="Accept Terms" value="terms" required></ix-checkbox>
        <input type="text" placeholder="Next field" />
      </form>
    `
    );

    const checkbox = page.locator('ix-checkbox');
    await checkbox.focus();
    await page.keyboard.press('Tab');
    await expect(checkbox).toHaveClass(/ix-invalid--required/);
    await expect(checkbox).toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'no validation on blur when noValidate=true',
  async ({ mount, page }) => {
    await mount(
      `
      <form novalidate>
        <ix-checkbox label="Accept Terms" value="terms" required></ix-checkbox>
        <input type="text" placeholder="Next field" />
      </form>
    `
    );

    const checkbox = page.locator('ix-checkbox');
    await checkbox.focus();
    await page.keyboard.press('Tab');
    await expect(checkbox).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'validation with named checkbox group when noValidate is not set',
  async ({ mount, page }) => {
    await mount(
      `
      <form>
        <ix-checkbox label="Option 1" name="options" value="option1" required></ix-checkbox>
        <ix-checkbox label="Option 2" name="options" value="option2" required></ix-checkbox>
        <ix-checkbox label="Option 3" name="options" value="option3" required></ix-checkbox>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const checkbox1 = page.locator('ix-checkbox').nth(0);
    const checkbox2 = page.locator('ix-checkbox').nth(1);
    const checkbox3 = page.locator('ix-checkbox').nth(2);
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await submitButton.click();
    await expect(checkbox1).toHaveClass(/ix-invalid--required/);
    await expect(checkbox2).toHaveClass(/ix-invalid--required/);
    await expect(checkbox3).toHaveClass(/ix-invalid--required/);
    await checkbox1.click();
    await expect(checkbox1).not.toHaveClass(/ix-invalid/);
    await expect(checkbox2).not.toHaveClass(/ix-invalid/);
    await expect(checkbox3).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'noValidate=true disables validation for named checkbox group',
  async ({ mount, page }) => {
    await mount(
      `
      <form novalidate>
        <ix-checkbox label="Option 1" name="options" value="option1" required></ix-checkbox>
        <ix-checkbox label="Option 2" name="options" value="option2" required></ix-checkbox>
        <ix-checkbox label="Option 3" name="options" value="option3" required></ix-checkbox>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const checkbox1 = page.locator('ix-checkbox').nth(0);
    const checkbox2 = page.locator('ix-checkbox').nth(1);
    const checkbox3 = page.locator('ix-checkbox').nth(2);
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await submitButton.click();
    await expect(checkbox1).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox1).not.toHaveClass(/ix-invalid/);
    await expect(checkbox2).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox3).not.toHaveClass(/ix-invalid--required/);
    await checkbox1.focus();
    await page.keyboard.press('Tab');

    await expect(checkbox1).not.toHaveClass(/ix-invalid/);
    await expect(checkbox2).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'validation with checkbox inside checkbox-group when noValidate is not set',
  async ({ mount, page }) => {
    await mount(
      `
      <form>
        <ix-checkbox-group label="Options">
          <ix-checkbox label="Option 1" name="grouped" value="option1" required></ix-checkbox>
          <ix-checkbox label="Option 2" name="grouped" value="option2" required></ix-checkbox>
        </ix-checkbox-group>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const checkboxGroup = page.locator('ix-checkbox-group');
    const checkbox1 = page.locator('ix-checkbox').nth(0);
    const checkbox2 = page.locator('ix-checkbox').nth(1);
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await submitButton.click();
    await expect(checkboxGroup).toHaveClass(/ix-invalid--required/);
    await expect(checkbox1).toHaveClass(/ix-invalid--required/);
    await expect(checkbox2).toHaveClass(/ix-invalid--required/);
    await checkbox1.click();
    await expect(checkboxGroup).not.toHaveClass(/ix-invalid/);
    await expect(checkbox1).not.toHaveClass(/ix-invalid/);
    await expect(checkbox2).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest(
  'noValidate=true disables validation for checkbox inside checkbox-group',
  async ({ mount, page }) => {
    await mount(
      `
      <form novalidate>
        <ix-checkbox-group label="Options">
          <ix-checkbox label="Option 1" name="grouped" value="option1" required></ix-checkbox>
          <ix-checkbox label="Option 2" name="grouped" value="option2" required></ix-checkbox>
        </ix-checkbox-group>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const checkboxGroup = page.locator('ix-checkbox-group');
    const checkbox1 = page.locator('ix-checkbox').nth(0);
    const checkbox2 = page.locator('ix-checkbox').nth(1);
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await submitButton.click();
    await expect(checkboxGroup).not.toHaveClass(/ix-invalid--required/);
    await expect(checkboxGroup).not.toHaveClass(/ix-invalid/);
    await expect(checkbox1).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox1).not.toHaveClass(/ix-invalid/);
    await expect(checkbox2).not.toHaveClass(/ix-invalid--required/);
    await expect(checkbox2).not.toHaveClass(/ix-invalid/);
  }
);
