/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { test } from '@utils/test';

test.describe('ix-message-bar', () => {
  test.beforeEach(async ({ mount }) => {
    await mount(
      `<ix-message-bar type="danger" dismissible>Content</ix-message-bar>`
    );
  });

  test('emits closeAnimationCompleted event', async ({ page }) => {
    const messageBar = page.locator('ix-message-bar');
    const closeButton = messageBar.locator('[data-testid="close-btn"]');

    const onCloseAnimationCompleted = messageBar.evaluate((element) => {
      return new Promise<void>((resolve) => {
        element.addEventListener('closeAnimationCompleted', () => resolve());
      });
    });
    await closeButton.click();
    await onCloseAnimationCompleted;

    await expect(messageBar).not.toBeVisible();
  });
});
