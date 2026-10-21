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

const welcome = `
  <ix-chat-welcome slot="welcome" heading="How can I help you today?">
    <ix-chat-prompt-suggestion slot="suggestions">Summarize open alarms</ix-chat-prompt-suggestion>
  </ix-chat-welcome>
`;

const welcomeHeading = { name: 'How can I help you today?' };

regressionTest(
  'shows the welcome slot while the chat has no messages',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat style="height: 32rem">
        ${welcome}
        <ix-chat-input slot="prompt"></ix-chat-input>
      </ix-chat>
    `);

    await expect(page.getByRole('heading', welcomeHeading)).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Summarize open alarms' })
    ).toBeVisible();
  }
);

regressionTest(
  'ignores whitespace and comments in the messages slot',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat style="height: 32rem">
        <!-- framework placeholder -->
        ${welcome}
      </ix-chat>
    `);

    await expect(page.getByRole('heading', welcomeHeading)).toBeVisible();
  }
);

regressionTest(
  'hides the welcome slot when the chat has messages',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat style="height: 32rem">
        ${welcome}
        <ix-chat-user-message message="Summarize open alarms"></ix-chat-user-message>
      </ix-chat>
    `);

    await expect(page.locator('ix-chat-user-message')).toBeVisible();
    await expect(page.getByRole('heading', welcomeHeading)).toBeHidden();
  }
);

regressionTest(
  'hides the welcome slot once a message is added and shows it again when all messages are removed',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat style="height: 32rem">
        ${welcome}
      </ix-chat>
    `);
    const chat = page.locator('ix-chat');
    const heading = page.getByRole('heading', welcomeHeading);

    await expect(heading).toBeVisible();

    await chat.evaluate((element) => {
      const message = document.createElement('ix-chat-user-message');
      message.message = 'Summarize open alarms';
      element.appendChild(message);
    });

    await expect(page.locator('ix-chat-user-message')).toBeVisible();
    await expect(heading).toBeHidden();

    await chat.evaluate((element) => {
      element.querySelector('ix-chat-user-message')?.remove();
    });

    await expect(heading).toBeVisible();
  }
);

regressionTest(
  'keeps the welcome slot hidden while messages remain',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat style="height: 32rem">
        ${welcome}
        <ix-chat-user-message message="First"></ix-chat-user-message>
        <ix-chat-ai-message>Second</ix-chat-ai-message>
      </ix-chat>
    `);
    const chat = page.locator('ix-chat');

    await chat.evaluate((element) => {
      element.querySelector('ix-chat-user-message')?.remove();
    });

    await expect(page.locator('ix-chat-ai-message')).toBeVisible();
    await expect(page.getByRole('heading', welcomeHeading)).toBeHidden();
  }
);

regressionTest(
  'accessibility with the welcome screen',
  async ({ mount, page, makeAxeBuilder }) => {
    await mount(`
      <ix-chat style="height: 32rem">
        ${welcome}
        <ix-chat-input slot="prompt"></ix-chat-input>
      </ix-chat>
    `);
    await expect(page.getByRole('heading', welcomeHeading)).toBeVisible();

    const results = await makeAxeBuilder().include('ix-chat').analyze();
    expect(results.violations).toEqual([]);
  }
);
