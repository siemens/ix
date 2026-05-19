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
  'ix-chat renders chat messages and chat input',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat style="height: 32rem">
        <ix-chat-ai-message>
          <p>Effective asset performance management improves uptime.</p>
        </ix-chat-ai-message>
        <ix-chat-user-message message="Summarize the detailed discussion held with the customer"></ix-chat-user-message>
        <ix-chat-input slot="prompt" value="Ask a follow-up"></ix-chat-input>
      </ix-chat>
    `);

    const chat = page.locator('ix-chat');

    await expect(chat).toHaveClass(/has-prompt/);
    await expect(chat.locator('.messages')).toBeVisible();
    await expect(chat.locator('.prompt')).toBeVisible();
    await expect(page.locator('ix-chat-ai-message')).toContainText(
      'Effective asset performance management improves uptime.'
    );
    await expect(page.locator('ix-chat-user-message')).toContainText(
      'Summarize the detailed discussion held with the customer'
    );
    await expect(page.locator('ix-chat-input[slot="prompt"]')).toHaveCount(1);
  }
);

regressionTest(
  'ix-chat hides prompt layout when no prompt is assigned',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat style="height: 32rem">
        <ix-chat-ai-message>
          <p>Analyze alarms.</p>
        </ix-chat-ai-message>
      </ix-chat>
    `);

    const chat = page.locator('ix-chat');

    await expect(chat).not.toHaveClass(/has-prompt/);
    await expect(chat.locator('.messages')).toBeVisible();
    await expect(chat.locator('.prompt')).not.toBeVisible();
  }
);

regressionTest(
  'ix-chat provides a scrollable message area',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat style="height: 20rem">
        <ix-chat-ai-message>
          <p>Analyze alarms.</p>
        </ix-chat-ai-message>
        <ix-chat-input slot="prompt"></ix-chat-input>
      </ix-chat>
    `);

    await expect(page.locator('ix-chat').locator('.messages')).toHaveCSS(
      'overflow-y',
      'auto'
    );
  }
);
