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
  'ix-prompt-input does not render default slot actions',
  async ({ mount, page }) => {
    await mount('<ix-prompt-input></ix-prompt-input>');

    const promptInput = page.locator('ix-prompt-input');

    await expect(
      promptInput.locator('.left-actions ix-icon-button')
    ).toHaveCount(0);
    await expect(
      promptInput.locator('.right-actions ix-icon-button')
    ).toHaveCount(1);
  }
);

regressionTest(
  'ix-prompt-input shows a soft character limit warning',
  async ({ mount, page }) => {
    await mount(
      '<ix-prompt-input character-limit="10" character-limit-mode="soft" value="123456789"></ix-prompt-input>'
    );

    const promptInput = page.locator('ix-prompt-input');

    await expect(promptInput.locator('.character-limit')).toContainText(
      "You're nearing the limit (9 / 10 characters)"
    );
    expect(
      await promptInput.locator('textarea').getAttribute('maxlength')
    ).toBeNull();
  }
);

regressionTest(
  'ix-prompt-input shows a hard character limit warning when input is blocked',
  async ({ mount, page }) => {
    await mount('<ix-prompt-input character-limit="10"></ix-prompt-input>');

    const promptInput = page.locator('ix-prompt-input');
    const textarea = promptInput.locator('textarea');

    await textarea.fill('1234567890');
    await expect(promptInput.locator('.character-limit')).toHaveCount(0);

    await textarea.press('1');

    await expect(textarea).toHaveValue('1234567890');
    await expect(promptInput.locator('.character-limit')).toContainText(
      'Character limit exceeded (10 / 10 characters)'
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
