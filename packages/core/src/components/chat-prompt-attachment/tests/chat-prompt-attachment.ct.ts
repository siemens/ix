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

declare global {
  var __attachmentClicked: boolean | undefined;
  var __attachmentRemoveClicked: boolean | undefined;
}

regressionTest(
  'ix-chat-prompt-attachment renders a default file attachment',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-prompt-attachment file-name="meeting_notes_summary_01.txt"></ix-chat-prompt-attachment>'
    );

    const attachment = page.locator('ix-chat-prompt-attachment');

    await expect(attachment.locator('.file-name__base')).toContainText(
      'meeting_notes_summary_01'
    );
    await expect(attachment.locator('.file-name__extension')).toContainText(
      '.txt'
    );
    await expect(attachment.locator('ix-chip')).toHaveCount(1);
    await expect(attachment.locator('ix-chip')).toHaveJSProperty(
      'closable',
      true
    );
  }
);

regressionTest(
  'ix-chat-prompt-attachment renders loading and failed states',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-prompt-attachment status="loading"></ix-chat-prompt-attachment>
      <ix-chat-prompt-attachment status="failed"></ix-chat-prompt-attachment>
    `);

    await expect(
      page.locator('ix-chat-prompt-attachment').first().locator('ix-spinner')
    ).toHaveCount(1);
    await expect(
      page.locator('ix-chat-prompt-attachment').first()
    ).toContainText('Uploading');

    await expect(
      page.locator('ix-chat-prompt-attachment').nth(1)
    ).toContainText('Upload failed');
    await expect(
      page.locator('ix-chat-prompt-attachment').nth(1).locator('ix-chip')
    ).toHaveAttribute('variant', 'alarm');
  }
);

regressionTest(
  'ix-chat-prompt-attachment emits attachmentClick only when preview is supported',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-prompt-attachment file-name="static_file.txt"></ix-chat-prompt-attachment>
      <ix-chat-prompt-attachment file-name="preview_file.txt" preview-supported></ix-chat-prompt-attachment>
    `);

    await page.evaluate(() => {
      globalThis.__attachmentClicked = false;
      document
        .querySelectorAll('ix-chat-prompt-attachment')
        .forEach((attachment) => {
          attachment.addEventListener('attachmentClick', () => {
            globalThis.__attachmentClicked = true;
          });
        });
    });

    const staticAttachment = page.locator('ix-chat-prompt-attachment').first();
    const previewAttachment = page.locator('ix-chat-prompt-attachment').nth(1);

    await staticAttachment.click();
    expect(await page.evaluate(() => globalThis.__attachmentClicked)).toBe(
      false
    );

    await previewAttachment.click();
    expect(await page.evaluate(() => globalThis.__attachmentClicked)).toBe(
      true
    );
  }
);

regressionTest(
  'ix-chat-prompt-attachment renders sent variant compactly',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-prompt-attachment file-name="file_01.pdf" variant="sent" hide-remove-button preview-supported></ix-chat-prompt-attachment>'
    );

    const attachment = page.locator('ix-chat-prompt-attachment');

    await expect(attachment.locator('ix-chip')).toHaveAttribute(
      'variant',
      'neutral'
    );
    await expect(attachment.locator('ix-chip')).toHaveJSProperty(
      'closable',
      false
    );
  }
);

regressionTest(
  'ix-chat-prompt-attachment emits removeClick from the chip close action',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-prompt-attachment file-name="file_01.txt"></ix-chat-prompt-attachment>'
    );

    await page.evaluate(() => {
      globalThis.__attachmentRemoveClicked = false;
      const attachment = document.querySelector('ix-chat-prompt-attachment');

      attachment?.addEventListener('removeClick', () => {
        globalThis.__attachmentRemoveClicked = true;
      });
    });

    const attachment = page.locator('ix-chat-prompt-attachment');
    await attachment.locator('ix-chip').locator('.chip-close').click();

    await expect
      .poll(() => page.evaluate(() => globalThis.__attachmentRemoveClicked))
      .toBe(true);
  }
);
