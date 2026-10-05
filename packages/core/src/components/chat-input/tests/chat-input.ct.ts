/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { iconCircleStop, iconSendRightFilled } from '@siemens/ix-icons/icons';
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

function getSubmitButtonIcon(element: Element) {
  return (element as HTMLIxIconButtonElement).icon;
}

regressionTest('renders', async ({ mount, page }) => {
  await mount('<ix-chat-input></ix-chat-input>');
  await expect(page.locator('ix-chat-input')).toHaveClass(/\bhydrated\b/);
});

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount('<ix-chat-input></ix-chat-input>');
  const accessibilityScanResults = await makeAxeBuilder()
    .include('ix-chat-input')
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest(
  'ix-chat-input emits valueChange when text is entered',
  async ({ mount, page }) => {
    await mount('<ix-chat-input></ix-chat-input>');

    const chatInput = page.locator('ix-chat-input');
    await chatInput.evaluate((element) => {
      const testElement = element as ValueChangeTestElement;
      testElement.__valueChange = undefined;
      element.addEventListener('valueChange', ((event: CustomEvent<string>) => {
        testElement.__valueChange = event.detail;
      }) as EventListener);
    });

    await chatInput.locator('textarea').fill('Show pump status');

    await expect(chatInput).toHaveAttribute('value', 'Show pump status');
    const emittedValue = await chatInput.evaluate(
      (element) => (element as ValueChangeTestElement).__valueChange
    );
    expect(emittedValue).toBe('Show pump status');
  }
);

regressionTest(
  'ix-chat-input disables submit button while prompt is empty',
  async ({ mount, page }) => {
    await mount('<ix-chat-input></ix-chat-input>');

    const submitButton = page
      .locator('ix-chat-input')
      .locator('ix-icon-button.submit-button');

    await expect(submitButton).toHaveClass(/disabled/);
  }
);

regressionTest(
  'ix-chat-input emits promptSubmit on submit button click',
  async ({ mount, page }) => {
    await mount('<ix-chat-input value="Analyze alarms"></ix-chat-input>');

    await page.evaluate(() => {
      globalThis.__promptSubmitValue = undefined;
      document
        .querySelector('ix-chat-input')
        ?.addEventListener('promptSubmit', ((event: CustomEvent<string>) => {
          globalThis.__promptSubmitValue = event.detail;
        }) as EventListener);
    });

    await page
      .locator('ix-chat-input')
      .locator('ix-icon-button.submit-button')
      .click();

    const submittedValue = await page.evaluate(
      () => globalThis.__promptSubmitValue
    );
    expect(submittedValue).toBe('Analyze alarms');
  }
);

regressionTest(
  'ix-chat-input emits promptSubmit on Enter but not Shift Enter',
  async ({ mount, page }) => {
    await mount('<ix-chat-input value="Analyze alarms"></ix-chat-input>');

    await page.evaluate(() => {
      globalThis.__promptSubmitValue = undefined;
      document
        .querySelector('ix-chat-input')
        ?.addEventListener('promptSubmit', ((event: CustomEvent<string>) => {
          globalThis.__promptSubmitValue = event.detail;
        }) as EventListener);
    });

    const textarea = page.locator('ix-chat-input').locator('textarea');
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
  'ix-chat-input does not render default slot actions',
  async ({ mount, page }) => {
    await mount('<ix-chat-input></ix-chat-input>');

    const chatInput = page.locator('ix-chat-input');

    await expect(chatInput.locator('.left-actions ix-icon-button')).toHaveCount(
      0
    );
    await expect(
      chatInput.locator('.right-actions ix-icon-button')
    ).toHaveCount(1);
  }
);

regressionTest(
  'ix-chat-input switches the submit action icon for the processing state',
  async ({ mount, page }) => {
    await mount('<ix-chat-input value="Analyze alarms"></ix-chat-input>');

    const chatInput = page.locator('ix-chat-input');
    const submitButton = chatInput.locator('ix-icon-button.submit-button');

    await expect
      .poll(() => submitButton.evaluate(getSubmitButtonIcon))
      .toBe(iconSendRightFilled);

    await chatInput.evaluate((element) => {
      (element as HTMLIxChatInputElement).state = 'processing';
    });

    await expect
      .poll(() => submitButton.evaluate(getSubmitButtonIcon))
      .toBe(iconCircleStop);
  }
);

regressionTest(
  'ix-chat-input shows a soft character limit warning from the threshold',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-input max-length="10" character-limit-warning-threshold="0.9" value="123456789"></ix-chat-input>'
    );

    const chatInput = page.locator('ix-chat-input');

    await expect(chatInput.locator('.character-limit')).toContainText(
      "You're nearing the limit (9 / 10 characters)"
    );
    expect(await chatInput.locator('textarea').getAttribute('maxlength')).toBe(
      '10'
    );
  }
);

regressionTest(
  'ix-chat-input supports a translated soft character limit warning',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-input
        max-length="10"
        character-limit-warning-threshold="0.9"
        i18n-character-limit-warning="{limit} Zeichen, {current} eingegeben"
        value="123456789"
      ></ix-chat-input>
    `);

    const chatInput = page.locator('ix-chat-input');

    await expect(chatInput.locator('.character-limit')).toContainText(
      '10 Zeichen, 9 eingegeben'
    );
  }
);

regressionTest(
  'ix-chat-input supports a translated soft character limit warning with custom placeholders',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-input
        max-length="10"
        character-limit-warning-threshold="0.9"
        i18n-character-limit-warning="Warning a limit is near!"
        value="123456789"
      ></ix-chat-input>
    `);

    const chatInput = page.locator('ix-chat-input');

    await expect(chatInput.locator('.character-limit')).toContainText(
      'Warning a limit is near!'
    );
  }
);

regressionTest(
  'ix-chat-input shows an error when the character limit is reached',
  async ({ mount, page }) => {
    await mount('<ix-chat-input max-length="10"></ix-chat-input>');

    const chatInput = page.locator('ix-chat-input');
    const textarea = chatInput.locator('textarea');

    await textarea.fill('1234567890');

    await expect(textarea).toHaveValue('1234567890');
    const characterLimit = chatInput.locator('.character-limit');
    await expect(characterLimit).toHaveClass(/character-limit--hard/);
    await expect(characterLimit).toContainText(
      'Character limit reached (10 / 10 characters)'
    );
  }
);

regressionTest(
  'ix-chat-input supports a translated hard character limit message',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-input
        max-length="10"
        i18n-character-limit-reached="{current} von {limit} Zeichen erreicht"
      ></ix-chat-input>
    `);

    const chatInput = page.locator('ix-chat-input');
    const textarea = chatInput.locator('textarea');

    await textarea.fill('1234567890');

    await expect(chatInput.locator('.character-limit')).toContainText(
      '10 von 10 Zeichen erreicht'
    );
  }
);

regressionTest(
  'ix-chat-input renders slotted attachments with selected layout',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-input attachment-layout="scroll" style="width: 40rem; --ix-chat-input-max-width: 40rem">
        <ix-chat-attachment slot="attachments" file-name="file_01.txt"></ix-chat-attachment>
        <ix-chat-attachment slot="attachments" status="loading"></ix-chat-attachment>
      </ix-chat-input>
    `);

    const chatInput = page.locator('ix-chat-input');

    await expect(chatInput.locator('.attachments')).toHaveClass(
      /has-attachments/
    );
    await expect(chatInput.locator('.attachments')).toHaveClass(
      /attachments--scroll/
    );
    await expect(chatInput.locator('.attachments')).not.toHaveClass(
      /has-attachment-scrollbar/
    );
    await expect(
      page.locator('ix-chat-attachment[slot="attachments"]')
    ).toHaveCount(2);
  }
);

regressionTest(
  'ix-chat-input adds scrollbar spacing only when attachments are scrollable',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-input attachment-layout="scroll" style="width: 12rem; --ix-chat-input-max-width: 12rem">
        ${Array.from(
          { length: 8 },
          (_, index) =>
            `<ix-chat-attachment slot="attachments" file-name="file_${String(
              index + 1
            ).padStart(2, '0')}.txt"></ix-chat-attachment>`
        ).join('')}
      </ix-chat-input>
    `);

    const chatInput = page.locator('ix-chat-input');
    const attachments = chatInput.locator('.attachments');

    await expect(attachments).toHaveClass(/has-attachment-scrollbar/);
    await expect(attachments).toHaveCSS('padding-bottom', '4px');

    await chatInput.evaluate((element) => {
      element.style.width = '90rem';
      element.style.setProperty('--ix-chat-input-max-width', '90rem');
    });

    await expect(attachments).not.toHaveClass(/has-attachment-scrollbar/);
  }
);

regressionTest(
  'ix-chat-input does not render an attachment overflow dropdown',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-input style="width: 16rem; --ix-chat-input-max-width: 16rem">
        ${Array.from(
          { length: 10 },
          (_, index) =>
            `<ix-chat-attachment slot="attachments" file-name="file_${String(
              index + 1
            ).padStart(2, '0')}.txt"></ix-chat-attachment>`
        ).join('')}
      </ix-chat-input>
    `);

    const chatInput = page.locator('ix-chat-input');
    await expect(
      chatInput.locator('ix-dropdown-button.attachment-overflow')
    ).toHaveCount(0);
    await expect(
      page.locator('[data-attachment-overflow-generated]')
    ).toHaveCount(0);
    await expect(
      page.locator('ix-chat-attachment[slot="attachments"]')
    ).toHaveCount(10);
  }
);

regressionTest(
  'ix-chat-input renders slotted follow-up actions above the input',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-input>
        <button slot="follow-up" aria-label="Refresh follow-up prompts">Refresh</button>
        <ix-button slot="follow-up" variant="secondary">What are the risks if this insight is ignored?</ix-button>
        <ix-button slot="follow-up" variant="secondary">Show related insights from similar customer events.</ix-button>
      </ix-chat-input>
    `);

    const chatInput = page.locator('ix-chat-input');
    const followUp = chatInput.locator('.follow-up-prompts');

    await expect(chatInput).toHaveClass(/has-follow-up/);
    await expect(followUp).toBeVisible();
    await expect(page.locator('[slot="follow-up"]')).toHaveCount(3);
    await expect(
      page.locator('ix-button[slot="follow-up"]').first()
    ).toContainText('What are the risks if this insight is ignored?');
  }
);

regressionTest(`form-ready - ix-chat-input`, async ({ mount, page }) => {
  await mount(
    `<form><ix-chat-input name="my-field-name"></ix-chat-input></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-chat-input').locator('textarea');
  await input.fill('Some prompt');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name', page);
  expect(formData).toBe('Some prompt');
});
