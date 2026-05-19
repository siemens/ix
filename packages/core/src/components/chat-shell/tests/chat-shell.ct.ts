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
  'ix-chat-shell renders chat messages and prompt input',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-shell style="height: 32rem">
        <ix-chat-ai-message>
          <p>Effective asset performance management improves uptime.</p>
        </ix-chat-ai-message>
        <ix-chat-user-message message="Summarize the detailed discussion held with the customer"></ix-chat-user-message>
        <ix-prompt-input slot="prompt" value="Ask a follow-up"></ix-prompt-input>
      </ix-chat-shell>
    `);

    const shell = page.locator('ix-chat-shell');

    await expect(shell).toHaveClass(/has-prompt/);
    await expect(shell.locator('.messages')).toBeVisible();
    await expect(shell.locator('.prompt')).toBeVisible();
    await expect(page.locator('ix-chat-ai-message')).toContainText(
      'Effective asset performance management improves uptime.'
    );
    await expect(page.locator('ix-chat-user-message')).toContainText(
      'Summarize the detailed discussion held with the customer'
    );
    await expect(page.locator('ix-prompt-input[slot="prompt"]')).toHaveCount(1);
  }
);

regressionTest(
  'ix-chat-shell hides prompt layout when no prompt is assigned',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-shell style="height: 32rem">
        <ix-chat-ai-message>
          <p>Analyze alarms.</p>
        </ix-chat-ai-message>
      </ix-chat-shell>
    `);

    const shell = page.locator('ix-chat-shell');

    await expect(shell).not.toHaveClass(/has-prompt/);
    await expect(shell.locator('.messages')).toBeVisible();
    await expect(shell.locator('.prompt')).not.toBeVisible();
  }
);

regressionTest(
  'ix-chat-shell provides a scrollable message area',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-shell style="height: 20rem">
        <ix-chat-ai-message>
          <p>Analyze alarms.</p>
        </ix-chat-ai-message>
        <ix-prompt-input slot="prompt"></ix-prompt-input>
      </ix-chat-shell>
    `);

    await expect(page.locator('ix-chat-shell').locator('.messages')).toHaveCSS(
      'overflow-y',
      'auto'
    );
  }
);
