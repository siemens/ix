/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('closes on Escape key down', async ({ mount, page }) => {
  await mount(`
    <ix-modal>
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-header>
    </ix-modal>
    `);
  const modal = page.locator('ix-modal');
  await modal.evaluate((m: HTMLIxModalElement) => m.showModal());
  const dialog = page.locator('dialog');
  await expect(dialog).toBeVisible();
  await page.locator('ix-modal-content').click();
  await page.keyboard.down('Escape');
  expect(dialog).not.toBeVisible();
});
