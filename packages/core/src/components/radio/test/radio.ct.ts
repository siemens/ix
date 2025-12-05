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
  const label = radioElement.locator('label');

  const checkedChange$ = radioElement.evaluate((element: HTMLElement) => {
    (element as any).disabled = undefined as any;
    return new Promise<void>((resolve) => {
      element.addEventListener('checkedChange', () => resolve());
    });
  });

  await radioElement.click();
  await checkedChange$;

  await expect(radioElement).not.toHaveClass(/disabled/);

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

test('Clicking label (including padding) checks the radio', async ({
  mount,
  page,
}) => {
  await mount(`<ix-radio label="Test"></ix-radio>`);
  const radio = page.locator('ix-radio');
  const label = radio.locator('label');
  const box = await label.boundingBox();
  await page.mouse.click(box!.x + 2, box!.y + 2);

  await label.waitFor({ state: 'visible' });
  await expect(radio).toHaveAttribute('aria-checked', 'true');
});

test.describe('accessibility & click handling', () => {
  test('should be directly clickable via accessible role with label', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-radio label="Small" value="small"></ix-radio>`);
    const radio = page.getByRole('radio', { name: 'Small' });
    await expect(radio).toHaveAttribute('aria-checked', 'false');
    await radio.click();
    await expect(radio).toHaveAttribute('aria-checked', 'true');
  });

  test('should respect disabled state when clicking host element', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-radio label="Disabled Option" disabled></ix-radio>`);
    const radio = page.getByRole('radio', { name: 'Disabled Option' });
    await expect(radio).toHaveAttribute('aria-checked', 'false');
    await expect(radio).toHaveAttribute('aria-disabled', 'true');
    await radio.click({ force: true });
    await expect(radio).toHaveAttribute('aria-checked', 'false');
  });

  test('should emit checkedChange event when clicked via host', async ({
    mount,
    page,
  }) => {
    await mount(`
      <ix-radio-group>
        <ix-radio label="Option 1" value="opt1"></ix-radio>
        <ix-radio label="Option 2" value="opt2"></ix-radio>
      </ix-radio-group>
    `);

    const radio1 = page.getByRole('radio', { name: 'Option 1' });
    const radio2 = page.getByRole('radio', { name: 'Option 2' });

    await expect(radio1).toHaveAttribute('aria-checked', 'false');
    await expect(radio2).toHaveAttribute('aria-checked', 'false');

    await radio1.click();
    await expect(radio1).toHaveAttribute('aria-checked', 'true');
    await expect(radio2).toHaveAttribute('aria-checked', 'false');

    await radio2.click();
    await expect(radio1).toHaveAttribute('aria-checked', 'false');
    await expect(radio2).toHaveAttribute('aria-checked', 'true');
  });

  test('radio should not toggle back to unchecked when clicked again', async ({
    mount,
    page,
  }) => {
    await mount(`<ix-radio label="No Toggle"></ix-radio>`);
    const radio = page.getByRole('radio', { name: 'No Toggle' });
    await radio.click();
    await expect(radio).toHaveAttribute('aria-checked', 'true');
    await radio.click();
    await expect(radio).toHaveAttribute('aria-checked', 'true');
  });
});

regressionTest('validation works when noValidate is not set (default)',
  async ({ mount, page }) => {
    await mount(
      `
      <form>
        <ix-radio label="Accept Terms" value="terms" required></ix-radio>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const radio = page.locator('ix-radio');
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await expect(radio).not.toHaveClass(/ix-invalid/);
    await submitButton.click();
    await expect(radio).toHaveClass(/ix-invalid--required/);
    await expect(radio).toHaveClass(/ix-invalid/);
    await radio.click();
    await expect(radio).not.toHaveClass(/ix-invalid--required/);
    await expect(radio).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest('noValidate=true disables validation',
  async ({ mount, page }) => {
    await mount(
      `
      <form novalidate>
        <ix-radio label="Accept Terms" value="terms" required></ix-radio>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const radio = page.locator('ix-radio');
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await submitButton.click();
    await expect(radio).not.toHaveClass(/ix-invalid--required/);
    await expect(radio).not.toHaveClass(/ix-invalid/);
    await radio.focus();
    await page.keyboard.press('Tab');

    await expect(radio).not.toHaveClass(/ix-invalid--required/);
    await expect(radio).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest('validation with named radio group when noValidate is not set',
  async ({ mount, page }) => {
    await mount(
      `
      <form>
        <ix-radio label="Option 1" name="options" value="option1" required></ix-radio>
        <ix-radio label="Option 2" name="options" value="option2" required></ix-radio>
        <ix-radio label="Option 3" name="options" value="option3" required></ix-radio>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const radio1 = page.locator('ix-radio').nth(0);
    const radio2 = page.locator('ix-radio').nth(1);
    const radio3 = page.locator('ix-radio').nth(2);
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await submitButton.click();
    await expect(radio1).toHaveClass(/ix-invalid--required/);
    await expect(radio2).toHaveClass(/ix-invalid--required/);
    await expect(radio3).toHaveClass(/ix-invalid--required/);
    await radio1.click();
    await expect(radio1).not.toHaveClass(/ix-invalid/);
    await expect(radio2).not.toHaveClass(/ix-invalid/);
    await expect(radio3).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest('noValidate=true disables validation for named radio group',
  async ({ mount, page }) => {
    await mount(
      `
      <form novalidate>
        <ix-radio label="Option 1" name="options" value="option1" required></ix-radio>
        <ix-radio label="Option 2" name="options" value="option2" required></ix-radio>
        <ix-radio label="Option 3" name="options" value="option3" required></ix-radio>
        <button type="submit">Submit</button>
      </form>
    `
    );

    const form = page.locator('form');
    const radio1 = page.locator('ix-radio').nth(0);
    const radio2 = page.locator('ix-radio').nth(1);
    const radio3 = page.locator('ix-radio').nth(2);
    const submitButton = page.locator('button[type="submit"]');

    await preventFormSubmission(form);
    await submitButton.click();
    await expect(radio1).not.toHaveClass(/ix-invalid--required/);
    await expect(radio1).not.toHaveClass(/ix-invalid/);
    await expect(radio2).not.toHaveClass(/ix-invalid--required/);
    await expect(radio3).not.toHaveClass(/ix-invalid--required/);
    await radio1.focus();
    await page.keyboard.press('Tab');

    await expect(radio1).not.toHaveClass(/ix-invalid/);
    await expect(radio2).not.toHaveClass(/ix-invalid/);
  }
);

regressionTest('validation behavior with blur when noValidate is not set',
  async ({ mount, page }) => {
    await mount(
      `
      <form>
        <ix-radio label="Accept Terms" value="terms" required></ix-radio>
        <input type="text" placeholder="Next field" />
      </form>
    `
    );

    const radio = page.locator('ix-radio');
    await radio.focus();
    await page.keyboard.press('Tab');
    await expect(radio).toHaveClass(/ix-invalid--required/);
    await expect(radio).toHaveClass(/ix-invalid/);
  }
);

regressionTest('no validation on blur when noValidate=true',
  async ({ mount, page }) => {
    await mount(
      `
      <form novalidate>
        <ix-radio label="Accept Terms" value="terms" required></ix-radio>
        <input type="text" placeholder="Next field" />
      </form>
    `
    );

    const radio = page.locator('ix-radio');
    await radio.focus();
    await page.keyboard.press('Tab');
    await expect(radio).not.toHaveClass(/ix-invalid--required/);
    await expect(radio).not.toHaveClass(/ix-invalid/);
  }
);
