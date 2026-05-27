/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest(
  'ix-chat-user-message renders a user message from property',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-user-message message="Summarize the detailed discussion held with the customer"></ix-chat-user-message>'
    );

    const message = page.locator('ix-chat-user-message');

    await expect(message.locator('.message-text')).toContainText(
      'Summarize the detailed discussion held with the customer'
    );
    await expect(message.locator('.actions')).toHaveCount(1);
    await expect(message.locator('.actions')).not.toBeVisible();
  }
);

regressionTest(
  'ix-chat-user-message renders slotted message content',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-user-message><strong>Analyze alarms</strong></ix-chat-user-message>'
    );

    const message = page.locator('ix-chat-user-message');

    await expect(message.locator('strong')).toContainText('Analyze alarms');
  }
);

regressionTest(
  'ix-chat-user-message renders property and slotted message content together',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-user-message message="Analyze alarms"><span> and show trends</span></ix-chat-user-message>'
    );

    const message = page.locator('ix-chat-user-message');

    await expect(message.locator('.message-text')).toContainText(
      'Analyze alarms'
    );
    await expect(page.locator('ix-chat-user-message > span')).toContainText(
      'and show trends'
    );
  }
);

regressionTest(
  'ix-chat-user-message renders optional actions',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-user-message message="Analyze alarms" show-actions>
        <button slot="actions" aria-label="Copy">Copy</button>
        <button slot="actions" aria-label="Edit">Edit</button>
      </ix-chat-user-message>
    `);

    const message = page.locator('ix-chat-user-message');

    await expect(message.locator('.message-text')).toContainText(
      'Analyze alarms'
    );
    await expect(message).toHaveClass(/has-actions/);
    await expect(message.locator('.actions')).toBeVisible();
    await expect(page.locator('button[slot="actions"]')).toHaveCount(2);
  }
);

regressionTest(
  'ix-chat-user-message ignores whitespace from named slotted content',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-user-message message="Analyze alarms">
        <button slot="actions" aria-label="Copy">Copy</button>
        <button slot="actions" aria-label="Edit">Edit</button>
      </ix-chat-user-message>
    `);

    const message = page.locator('ix-chat-user-message');

    await expect(message.locator('.message-text')).toHaveText('Analyze alarms');
  }
);

regressionTest(
  'ix-chat-user-message reveals actions on hover',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-user-message message="Analyze alarms">
        <button slot="actions" aria-label="Copy">Copy</button>
      </ix-chat-user-message>
    `);

    const message = page.locator('ix-chat-user-message');
    const actions = message.locator('.actions');

    await expect(actions).not.toBeVisible();

    await message.hover();

    await expect(actions).toBeVisible();
  }
);

regressionTest(
  'ix-chat-user-message renders slotted attachments',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-user-message message="Analyze alarms">
        <ix-chat-prompt-attachment slot="attachments" file-name="file_01.pdf" variant="sent" hide-remove-button preview-supported></ix-chat-prompt-attachment>
      </ix-chat-user-message>
    `);

    await page.evaluate(() => {
      const attachment = document.querySelector('ix-chat-prompt-attachment');
      attachment?.addEventListener('attachmentClick', () => {
        attachment.setAttribute('data-clicked', 'true');
      });
    });

    const message = page.locator('ix-chat-user-message');
    const attachment = page.locator(
      'ix-chat-prompt-attachment[slot="attachments"]'
    );

    await expect(message).toHaveClass(/has-attachments/);
    await expect(message.locator('.attachments')).toBeVisible();
    await expect(attachment).toHaveCount(1);
    await expect(attachment).toHaveAttribute('variant', 'sent');

    await attachment.click();

    await expect(attachment).toHaveAttribute('data-clicked', 'true');
  }
);

regressionTest(
  'ix-chat-user-message toggles attachment overflow',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-user-message message="Analyze alarms" attachment-count="2">
        <ix-dropdown-item slot="attachment-overflow" label="File_01.jpg"></ix-dropdown-item>
        <ix-dropdown-item slot="attachment-overflow" label="File_02.pdf"></ix-dropdown-item>
      </ix-chat-user-message>
    `);

    const message = page.locator('ix-chat-user-message');
    const overflow = message.locator('ix-dropdown-button.attachment-overflow');
    const overflowItems = page.locator(
      'ix-dropdown-item[slot="attachment-overflow"]'
    );

    await expect(overflow).toContainText('Attachments (2)');
    await expect(overflow).toHaveAttribute('aria-expanded', 'false');
    await expect(overflowItems.first()).not.toBeVisible();

    await overflow.click();

    await expect(overflow).toHaveAttribute('aria-expanded', 'true');
    await expect(overflowItems.first()).toBeVisible();
  }
);
