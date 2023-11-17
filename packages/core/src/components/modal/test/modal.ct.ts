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

declare global {
  interface Window {
    showModal: any;
  }
}

test('closes on Escape key down', async ({ mount, page }) => {
  await mount(``);

  await page.evaluate(() => {
    return new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        import * as ix from 'http://127.0.0.1:8080/www/build/index.esm.js';
        window.showModal = ix.showModal;
      `;
      document.body.appendChild(script);
      resolve();
    });
  });

  await page.waitForTimeout(1000);

  await page.evaluate(() => {
    const elm = document.createElement('ix-modal');
    elm.innerHTML = `
      <ix-modal-header>Title</ix-modal-header>
      <ix-modal-content>Content</ix-modal-header>
    `;
    window.showModal({
      content: elm,
    });
  });
  const dialog = page.locator('ix-modal dialog');
  await expect(dialog).toBeVisible();
  await page.locator('ix-modal-content').click();
  await page.keyboard.down('Escape');

  await expect(dialog).not.toBeVisible();
});
