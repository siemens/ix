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
  'ix-chat-attachment renders a default file attachment',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-attachment file-name="meeting_notes_summary_01.txt"></ix-chat-attachment>'
    );

    const attachment = page.locator('ix-chat-attachment');

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
  'ix-chat-attachment truncates long file names with an ellipsis',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-attachment file-name="Long File Name of chat attachment with many details.txt"></ix-chat-attachment>'
    );

    const attachment = page.locator('ix-chat-attachment');
    const fileNameBase = attachment.locator('.file-name__base');
    const fileNameExtension = attachment.locator('.file-name__extension');
    const closeButton = attachment.locator('ix-chip').locator('.chip-close');

    await expect(fileNameBase).toContainText(
      'Long File Name of chat attachment with many details'
    );

    const getOverflowState = () =>
      fileNameBase.evaluate((element) => {
        const style = getComputedStyle(element);

        return {
          clientWidth: element.clientWidth,
          overflow: style.overflow,
          rectWidth: element.getBoundingClientRect().width,
          scrollWidth: element.scrollWidth,
          textOverflow: style.textOverflow,
          whiteSpace: style.whiteSpace,
        };
      });

    await expect
      .poll(async () => {
        const state = await getOverflowState();
        return state.scrollWidth > state.clientWidth && state.clientWidth > 0;
      })
      .toBe(true);

    const overflowState = await getOverflowState();
    expect(overflowState.overflow).toBe('hidden');
    expect(overflowState.textOverflow).toBe('ellipsis');
    expect(overflowState.whiteSpace).toBe('nowrap');

    await expect(fileNameExtension).toContainText('.txt');
    await expect(closeButton).toBeVisible();
  }
);

regressionTest(
  'ix-chat-attachment renders loading and failed states',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-attachment file-name="uploading_file.txt" status="loading"></ix-chat-attachment>
      <ix-chat-attachment file-name="failed_file.txt" status="failed"></ix-chat-attachment>
    `);

    await expect(
      page.locator('ix-chat-attachment').first().locator('ix-spinner')
    ).toHaveCount(1);
    await expect(page.locator('ix-chat-attachment').first()).toContainText(
      'uploading_file.txt'
    );

    await expect(page.locator('ix-chat-attachment').nth(1)).toContainText(
      'failed_file.txt'
    );
    await expect(
      page.locator('ix-chat-attachment').nth(1).locator('ix-chip')
    ).toHaveAttribute('variant', 'alarm');
  }
);

regressionTest(
  'ix-chat-attachment emits attachmentClick only when preview is supported',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-attachment file-name="static_file.txt"></ix-chat-attachment>
      <ix-chat-attachment file-name="preview_file.txt" preview-supported></ix-chat-attachment>
    `);

    await page.evaluate(() => {
      globalThis.__attachmentClicked = false;
      document.querySelectorAll('ix-chat-attachment').forEach((attachment) => {
        attachment.addEventListener('attachmentClick', () => {
          globalThis.__attachmentClicked = true;
        });
      });
    });

    const staticAttachment = page.locator('ix-chat-attachment').first();
    const previewAttachment = page.locator('ix-chat-attachment').nth(1);

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
  'ix-chat-attachment renders sent variant compactly',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-attachment file-name="file_01.pdf" variant="sent" hide-remove-button preview-supported></ix-chat-attachment>'
    );

    const attachment = page.locator('ix-chat-attachment');

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
  'ix-chat-attachment emits removeClick from the chip close action',
  async ({ mount, page }) => {
    await mount(
      '<ix-chat-attachment file-name="file_01.txt"></ix-chat-attachment>'
    );

    await page.evaluate(() => {
      globalThis.__attachmentRemoveClicked = false;
      const attachment = document.querySelector('ix-chat-attachment');

      attachment?.addEventListener('removeClick', () => {
        globalThis.__attachmentRemoveClicked = true;
      });
    });

    const attachment = page.locator('ix-chat-attachment');
    await attachment.locator('ix-chip').locator('.chip-close').click();

    await expect
      .poll(() => page.evaluate(() => globalThis.__attachmentRemoveClicked))
      .toBe(true);
  }
);
