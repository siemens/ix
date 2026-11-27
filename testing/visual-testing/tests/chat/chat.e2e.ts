/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconRocket } from '@siemens/ix-icons/icons';
import { expect } from '@playwright/test';
import { focusWithKeyboard, regressionTest } from '@utils/test';

regressionTest.describe('chat', () => {
  regressionTest('overview', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1000 });
    await page.goto('chat/overview');

    await page.locator('ix-chat-user-message').first().hover();

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
    });
  });

  regressionTest('attachment overflow', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('chat/overflow');

    const promptAttachments = page
      .locator('ix-chat-input')
      .locator('.attachments');

    await expect(promptAttachments).toHaveClass(/has-attachment-scrollbar/);

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
    });
  });
});

regressionTest(
  'should show focus outline on chat input',
  async ({ mount, page }) => {
    const container = await mount(
      `<div style="padding: 0.5rem; width: fit-content">
      <ix-chat-input style="width: 30rem"></ix-chat-input>
    </div>`
    );

    await focusWithKeyboard(page, page.locator('ix-chat-input'));

    expect(
      await container.screenshot({ animations: 'disabled' })
    ).toMatchSnapshot();
  }
);

regressionTest(
  'should show focus-visible outline on user message',
  async ({ mount, page }) => {
    const container = await mount(
      `<div style="padding: 0.5rem; width: fit-content">
      <ix-chat-user-message message="Hello"><ix-icon-button slot="actions" variant="tertiary" icon="rocket" aria-label="Rocket"></ix-icon-button></ix-chat-user-message>
    </div>`,
      { icons: { iconRocket } }
    );

    const message = page.locator('ix-chat-user-message');
    // Host only becomes focusable once the actions slot is detected
    await expect(message).toHaveAttribute('tabindex', '0');
    await focusWithKeyboard(page, message);
    await expect(message).toBeFocused();

    expect(
      await container.screenshot({ animations: 'disabled' })
    ).toMatchSnapshot();
  }
);
