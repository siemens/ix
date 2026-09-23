/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest(
  'chat nested controls and overlay trigger remain functional across density',
  async ({ mount, page }) => {
    await mount(`
      <div>
        <ix-button id="popover-trigger">Open details</ix-button>
        <ix-popover id="popover" trigger="popover-trigger">
          <ix-popover-content>Details</ix-popover-content>
        </ix-popover>
        <ix-chat id="chat" style="height: 280px;">
          <ix-chat-ai-message>System message</ix-chat-ai-message>
          <ix-chat-input slot="prompt" value="Ask a question"></ix-chat-input>
        </ix-chat>
        <ix-upload id="upload"></ix-upload>
        <ix-tree id="tree"></ix-tree>
      </div>
    `);

    const chatInput = page.locator('ix-chat-input .chat-input');
    const upload = page.locator('#upload');

    await expect(chatInput).toHaveCSS('min-height', '128px');
    await expect(upload).toHaveCSS('height', '64px');
    await page.getByRole('button', { name: 'Open details' }).click();
    await expect(page.locator('ix-popover-content')).toBeVisible();

    await page.locator('body').evaluate((body) => {
      body.setAttribute('data-ix-density', 'compact');
    });

    await expect(chatInput).toHaveCSS('min-height', '96px');
    await expect(upload).toHaveCSS('height', '48px');
    await expect(page.locator('ix-popover-content')).toBeVisible();
  }
);
