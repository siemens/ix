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
  var __attachmentRemoveClicked: boolean | undefined;
  var __attachmentRetryClicked: boolean | undefined;
  var __attachmentOverflowClicked: boolean | undefined;
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
    await expect(
      attachment.locator('ix-icon-button.remove-button')
    ).toHaveCount(1);
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
      page
        .locator('ix-chat-prompt-attachment')
        .nth(1)
        .locator('ix-icon-button.retry-button')
    ).toHaveCount(1);
  }
);

regressionTest(
  'ix-chat-prompt-attachment emits removeClick and retryClick',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-prompt-attachment status="failed" file-name="file_01.txt"></ix-chat-prompt-attachment>'
    );

    await page.evaluate(() => {
      globalThis.__attachmentRemoveClicked = false;
      globalThis.__attachmentRetryClicked = false;
      const attachment = document.querySelector('ix-chat-prompt-attachment');

      attachment?.addEventListener('removeClick', () => {
        globalThis.__attachmentRemoveClicked = true;
      });
      attachment?.addEventListener('retryClick', () => {
        globalThis.__attachmentRetryClicked = true;
      });
    });

    const attachment = page.locator('ix-chat-prompt-attachment');
    await attachment.locator('ix-icon-button.retry-button').click();
    await attachment.locator('ix-icon-button.remove-button').click();

    expect(await page.evaluate(() => globalThis.__attachmentRetryClicked)).toBe(
      true
    );
    expect(
      await page.evaluate(() => globalThis.__attachmentRemoveClicked)
    ).toBe(true);
  }
);

regressionTest(
  'ix-chat-prompt-attachment renders and emits overflow items',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-prompt-attachment overflow-count="4"></ix-chat-prompt-attachment>'
    );

    await page.evaluate(() => {
      globalThis.__attachmentOverflowClicked = false;
      document
        .querySelector('ix-chat-prompt-attachment')
        ?.addEventListener('overflowClick', () => {
          globalThis.__attachmentOverflowClicked = true;
        });
    });

    const attachment = page.locator('ix-chat-prompt-attachment');

    await expect(attachment).toContainText('+4 more');
    await expect(attachment).toHaveAttribute(
      'aria-label',
      'Show 4 more attachments'
    );

    await attachment.click();

    expect(
      await page.evaluate(() => globalThis.__attachmentOverflowClicked)
    ).toBe(true);
  }
);
