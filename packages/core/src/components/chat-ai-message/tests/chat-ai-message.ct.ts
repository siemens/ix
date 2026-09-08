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
  'ix-chat-ai-message renders slotted message content',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-ai-message>
        <h3>Text block example</h3>
        <p>Effective asset performance management improves uptime.</p>
      </ix-chat-ai-message>
    `);

    const message = page.locator('ix-chat-ai-message');

    await expect(message.locator('h3')).toContainText('Text block example');
    await expect(message.locator('p')).toContainText(
      'Effective asset performance management improves uptime.'
    );
    await expect(message.locator('.meta')).not.toBeVisible();
  }
);

regressionTest(
  'ix-chat-ai-message renders optional actions',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-ai-message>
        <p>Analyze alarms</p>
        <button slot="actions" aria-label="Copy">Copy</button>
        <button slot="actions" aria-label="Regenerate">Regenerate</button>
      </ix-chat-ai-message>
    `);

    const message = page.locator('ix-chat-ai-message');

    await expect(message).toHaveClass(/has-actions/);
    await expect(message.locator('.meta')).toBeVisible();
    await expect(message.locator('.actions')).toBeVisible();
    await expect(page.locator('button[slot="actions"]')).toHaveCount(2);
  }
);

regressionTest(
  'ix-chat-ai-message renders optional sources',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-ai-message>
        <p>Analyze alarms</p>
        <ix-pill slot="sources" outline variant="neutral">Sources</ix-pill>
      </ix-chat-ai-message>
    `);

    const message = page.locator('ix-chat-ai-message');

    await expect(message).toHaveClass(/has-sources/);
    await expect(message.locator('.meta')).toBeVisible();
    await expect(message.locator('.sources')).toBeVisible();
    await expect(page.locator('ix-pill[slot="sources"]')).toContainText(
      'Sources'
    );
  }
);
