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

    const attachmentOverflow = page
      .locator('ix-chat-user-message')
      .locator('ix-dropdown-button.attachment-overflow');
    const promptAttachments = page
      .locator('ix-chat-input')
      .locator('.attachments');

    await expect(attachmentOverflow).toBeVisible();
    await attachmentOverflow.click();
    await expect(attachmentOverflow).toHaveAttribute('aria-expanded', 'true');
    await expect(promptAttachments).toHaveClass(/has-attachment-scrollbar/);
    await expect(
      page
        .locator('ix-chat-input')
        .locator('ix-dropdown-button.attachment-overflow')
    ).toHaveCount(0);
    await expect(
      page.locator('ix-dropdown-item[slot="attachment-overflow"]').first()
    ).toBeVisible();

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
    });
  });
});
