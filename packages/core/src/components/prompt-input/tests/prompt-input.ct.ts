/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
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

declare global {
  var __promptSubmitValue: string | undefined;
  var __actionClickValue: string | undefined;
}

type ValueChangeTestElement = HTMLElement & {
  __valueChange?: string;
};

regressionTest(
  'ix-prompt-input emits valueChange when text is entered',
  async ({ mount, page }) => {
    await mount('<ix-prompt-input></ix-prompt-input>');

    const promptInput = page.locator('ix-prompt-input');
    await promptInput.evaluate((element) => {
      const testElement = element as ValueChangeTestElement;
      testElement.__valueChange = undefined;
      element.addEventListener('valueChange', ((event: CustomEvent<string>) => {
        testElement.__valueChange = event.detail;
      }) as EventListener);
    });

    await promptInput.locator('textarea').fill('Show pump status');

    await expect(promptInput).toHaveAttribute('value', 'Show pump status');
    const emittedValue = await promptInput.evaluate(
      (element) => (element as ValueChangeTestElement).__valueChange
    );
    expect(emittedValue).toBe('Show pump status');
  }
);

regressionTest(
  'ix-prompt-input disables submit button while prompt is empty',
  async ({ mount, page }) => {
    await mount('<ix-prompt-input></ix-prompt-input>');

    const submitButton = page
      .locator('ix-prompt-input')
      .locator('ix-icon-button.submit-button');

    await expect(submitButton).toHaveClass(/disabled/);
  }
);

regressionTest(
  'ix-prompt-input emits promptSubmit on submit button click',
  async ({ mount, page }) => {
    await mount('<ix-prompt-input value="Analyze alarms"></ix-prompt-input>');

    await page.evaluate(() => {
      globalThis.__promptSubmitValue = undefined;
      document
        .querySelector('ix-prompt-input')
        ?.addEventListener('promptSubmit', ((event: CustomEvent<string>) => {
          globalThis.__promptSubmitValue = event.detail;
        }) as EventListener);
    });

    await page
      .locator('ix-prompt-input')
      .locator('ix-icon-button.submit-button')
      .click();

    const submittedValue = await page.evaluate(
      () => globalThis.__promptSubmitValue
    );
    expect(submittedValue).toBe('Analyze alarms');
  }
);

regressionTest(
  'ix-prompt-input emits promptSubmit on Enter but not Shift Enter',
  async ({ mount, page }) => {
    await mount('<ix-prompt-input value="Analyze alarms"></ix-prompt-input>');

    await page.evaluate(() => {
      globalThis.__promptSubmitValue = undefined;
      document
        .querySelector('ix-prompt-input')
        ?.addEventListener('promptSubmit', ((event: CustomEvent<string>) => {
          globalThis.__promptSubmitValue = event.detail;
        }) as EventListener);
    });

    const textarea = page.locator('ix-prompt-input').locator('textarea');
    await textarea.focus();
    await textarea.press('Shift+Enter');
    expect(await page.evaluate(() => globalThis.__promptSubmitValue)).toBe(
      undefined
    );

    await textarea.fill('Analyze alarms');
    await textarea.press('Enter');

    const submittedValue = await page.evaluate(
      () => globalThis.__promptSubmitValue
    );
    expect(submittedValue).toBe('Analyze alarms');
  }
);

regressionTest(
  'ix-prompt-input emits actionClick for default action buttons',
  async ({ mount, page }) => {
    await mount('<ix-prompt-input></ix-prompt-input>');

    await page.evaluate(() => {
      globalThis.__actionClickValue = undefined;
      document
        .querySelector('ix-prompt-input')
        ?.addEventListener('actionClick', ((event: CustomEvent<string>) => {
          globalThis.__actionClickValue = event.detail;
        }) as EventListener);
    });

    await page
      .locator('ix-prompt-input')
      .locator('.left-actions ix-icon-button')
      .click();
    expect(await page.evaluate(() => globalThis.__actionClickValue)).toBe(
      'start'
    );

    await page
      .locator('ix-prompt-input')
      .locator('.right-actions ix-icon-button')
      .first()
      .click();
    expect(await page.evaluate(() => globalThis.__actionClickValue)).toBe(
      'end'
    );
  }
);

regressionTest(`form-ready - ix-prompt-input`, async ({ mount, page }) => {
  await mount(
    `<form><ix-prompt-input name="my-field-name"></ix-prompt-input></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-prompt-input').locator('textarea');
  await input.fill('Some prompt');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('Some prompt');
});
