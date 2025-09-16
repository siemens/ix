/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  getFormValue,
  preventFormSubmission,
  regressionTest,
} from '@utils/test';
import { expect } from '@playwright/test';

declare global {
  interface Window {
    __formSubmitted: boolean;
  }
}

regressionTest(`form-ready - ix-input`, async ({ mount, page }) => {
  await mount(`<form><ix-input name="my-field-name"></ix-input></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-input').locator('input');
  await input.fill('my example');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('my example');
});

regressionTest(
  `form-ready - ix-input submits form on Enter key`,
  async ({ mount, page }) => {
    await mount(`
      <form onsubmit="window.__formSubmitted = true; return false;">
        <ix-input name="my-field-name"></ix-input>
      </form>
    `);
    await page.evaluate(() => {
      window.__formSubmitted = false;
    });
    const input = page.locator('ix-input').locator('input');
    await input.fill('abc');
    await input.focus();
    await input.press('Enter');
    const wasSubmitted = await page.evaluate(() => window.__formSubmitted);
    expect(wasSubmitted).toBe(true);
  }
);

regressionTest(
  `form-ready - multiple ix-inputs doesn't submit form on Enter key`,
  async ({ mount, page }) => {
    await mount(`
      <form onsubmit="window.__formSubmitted = true; return false;">
        <ix-input name="field-1"></ix-input><ix-input name="field-2"></ix-input>
      </form>
    `);
    await page.evaluate(() => {
      window.__formSubmitted = false;
    });
    const input = page.locator('ix-input').first().locator('input');
    await input.fill('abc');
    await input.focus();
    await input.press('Enter');
    const wasSubmitted = await page.evaluate(() => window.__formSubmitted);
    expect(wasSubmitted).toBe(false);
  }
);

regressionTest(
  `form-ready - multiple ix-input submits form on Enter key when submit button is present`,
  async ({ mount, page }) => {
    await mount(`
      <form onsubmit="window.__formSubmitted = true; return false;">
        <ix-input name="field-1"></ix-input><ix-input name="field-2"></ix-input><button type="submit">Submit</button>
      </form>
    `);
    await page.evaluate(() => {
      window.__formSubmitted = false;
    });
    const input = page.locator('ix-input').first().locator('input');
    await input.fill('abc');
    await input.focus();
    await input.press('Enter');
    const wasSubmitted = await page.evaluate(() => window.__formSubmitted);
    expect(wasSubmitted).toBe(true);
  }
);

regressionTest(
  `form-ready - ix-input doesn't submit form on Enter key when supress submit on enter is true`,
  async ({ mount, page }) => {
    await mount(`
      <form onsubmit="window.__formSubmitted = true; return false;">
        <ix-input name="my-field-name"  suppress-submit-on-enter="true"></ix-input>
      </form>
    `);
    await page.evaluate(() => {
      window.__formSubmitted = false;
    });
    const input = page.locator('ix-input').locator('input');
    await input.fill('abc');
    await input.focus();
    await input.press('Enter');
    const wasSubmitted = await page.evaluate(() => window.__formSubmitted);
    expect(wasSubmitted).toBe(false);
  }
);

regressionTest(`form-ready - ix-number-input`, async ({ mount, page }) => {
  await mount(
    `<form><ix-number-input name="my-field-name"></ix-number-input></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-number-input').locator('input');
  await input.fill('123');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('123');
});

regressionTest(`form-ready - ix-textarea`, async ({ mount, page }) => {
  await mount(`<form><ix-textarea name="my-field-name"></ix-textarea></form>`);

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-textarea').locator('textarea');
  await input.fill('Some longer text');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('Some longer text');
});

regressionTest(
  `form-ready - ix-input with initial value`,
  async ({ mount, page }) => {
    await mount(
      `<form><ix-input name="my-field-name" value="initial value"></ix-input></form>`
    );

    const formElement = page.locator('form');
    preventFormSubmission(formElement);
    const formData = await getFormValue(formElement, 'my-field-name', page);
    expect(formData).toBe('initial value');
  }
);

regressionTest(
  `form-ready - ix-number-input with initial value`,
  async ({ mount, page }) => {
    await mount(
      `<form><ix-number-input name="my-field-name" value="1337"></ix-number-input></form>`
    );

    const formElement = page.locator('form');
    preventFormSubmission(formElement);
    const formData = await getFormValue(formElement, 'my-field-name', page);
    expect(formData).toBe('1337');
  }
);

regressionTest(
  `form-ready - ix-textarea with initial value`,
  async ({ mount, page }) => {
    await mount(
      `<form><ix-textarea name="my-field-name" value="initial value"></ix-textarea></form>`
    );

    const formElement = page.locator('form');
    preventFormSubmission(formElement);
    const formData = await getFormValue(formElement, 'my-field-name', page);
    expect(formData).toBe('initial value');
  }
);

regressionTest(
  'form-ready - textarea correctly renders character counter with null value',
  async ({ mount, page }) => {
    await mount(
      `<form><ix-textarea name="my-field-name" max-length="100"></ix-textarea></form>`
    );

    await page.evaluate(() => {
      const el = document.querySelector('ix-textarea');
      // @ts-ignore
      el.value = null;
    });

    const counter = page.locator('ix-typography.bottom-text');
    await expect(counter).toHaveText('0/100');
  }
);
regressionTest(
  'form-ready - input correctly renders character counter with null value',
  async ({ mount, page }) => {
    await mount(
      `<form><ix-input name="my-field-name" max-length="20"></ix-input></form>`
    );
    await page.evaluate(() => {
      const el = document.querySelector('ix-input');
      // @ts-ignore
      el.value = null;
    });
    const counter = page.locator('ix-typography.bottom-text');
    await expect(counter).toHaveText('0/20');
  }
);

regressionTest(
  'form-ready - input correctly renders character counter with number value',
  async ({ mount, page }) => {
    await mount(
      `<form><ix-input name="my-field-name" value="221" max-length="20"></ix-input></form>`
    );
    const counter = page.locator('ix-typography.bottom-text').first();
    await expect(counter).toHaveText('3/20');
  }
);

regressionTest(
  'form-ready - input correctly renders character counter with a space',
  async ({ mount, page }) => {
    await mount(
      `<form><ix-input name="my-field-name" value=" " max-length="20"></ix-input></form>`
    );
    const counter = page.locator('ix-typography.bottom-text').first();
    await expect(counter).toHaveText('1/20');
  }
);
