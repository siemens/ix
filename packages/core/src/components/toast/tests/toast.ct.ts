/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';
import { toast } from './../../../public-api';

declare global {
  interface Window {
    toast: typeof toast;
  }
}

regressionTest('renders', async ({ mount, page }) => {
  await mount('');

  await page.evaluate(() => {
    window.toast({
      message: 'This is a toast message',
    });
  });

  const toast = page.locator('ix-toast');
  await expect(toast).toHaveClass(/hydrated/);
  await expect(toast).toBeVisible();
});

regressionTest(
  'should be visible through overlays',
  async ({ mount, page }) => {
    await mount(`
      <ix-application>
        <ix-application-header></ix-application-header>
        <ix-menu>
          <ix-menu-settings>
          </ix-menu-settings>
        </ix-menu>
      </ix-application>
    `);

    const settingsButton = page.getByRole('button', { name: 'Settings' });
    await settingsButton.click();

    // Wait for the menu to be visible
    await page.waitForTimeout(500);

    await page.evaluate(() => {
      window.toast({
        message: 'This is a toast message',
      });
    });

    const toast = page.locator('ix-toast');
    const closeToast = toast.locator('ix-icon-button');
    await expect(toast).toHaveClass(/hydrated/);

    await closeToast.click();
    await expect(toast).not.toBeVisible();
  }
);
