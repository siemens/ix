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

    const promptAttachments = page
      .locator('ix-chat-input')
      .locator('.attachments');

    await expect(promptAttachments).toHaveClass(/has-attachment-scrollbar/);

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
    });
  });

  regressionTest('input interrupt states', async ({ page }) => {
    await page.setViewportSize({ width: 640, height: 400 });
    await page.goto('chat/interrupt');

    await page
      .locator('ix-chat-input[state="interrupting"] ix-spinner')
      .waitFor();

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
    });
  });

  regressionTest('scroll to latest button', async ({ page }) => {
    await page.setViewportSize({ width: 640, height: 500 });
    await page.goto('chat/scroll-to-latest');

    const chat = page.locator('ix-chat');
    await chat.evaluate((element: HTMLIxChatElement) => element.scrollToTop());
    await expect(
      page.getByRole('button', { name: 'Scroll to latest' })
    ).toBeVisible();

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
    });
  });

  regressionTest('markdown in ai message', async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 760 });
    await page.goto('chat/markdown');

    await page.locator('ix-markdown ix-message-bar').waitFor();
    await page.locator('ix-markdown ix-button').waitFor();

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
    });
  });

  regressionTest('activity trace', async ({ page }) => {
    await page.setViewportSize({ width: 680, height: 520 });
    await page.goto('chat/activity-trace');

    await page
      .locator('ix-chat-trace-item[state="running"] ix-spinner')
      .waitFor();
    await page.getByText('Compressor C-12').waitFor();

    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
    });
  });
});
