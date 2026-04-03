/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-upload></ix-upload>`);
  const upload = page.locator('ix-upload');

  await expect(upload).toHaveClass(/hydrated/);
  await expect(upload).toBeVisible();
});

regressionTest(
  'enables folder upload when webkitdirectory is set',
  async ({ mount, page }) => {
    await mount(`<ix-upload webkitdirectory></ix-upload>`);
    const upload = page.locator('ix-upload');

    const inputAttributes = await upload.evaluate((element) => {
      const input = element.shadowRoot?.querySelector(
        '#upload-browser'
      ) as HTMLInputElement | null;

      if (!input) {
        return null;
      }

      return {
        buttonText: element.shadowRoot
          ?.querySelector('ix-button')
          ?.textContent?.trim(),
        hasWebkitdirectory: input.hasAttribute('webkitdirectory'),
        hasDirectory: input.hasAttribute('directory'),
      };
    });

    expect(inputAttributes).not.toBeNull();
    expect(inputAttributes?.buttonText).toBe('Upload folder…');
    expect(inputAttributes?.hasWebkitdirectory).toBe(true);
    expect(inputAttributes?.hasDirectory).toBe(true);
  }
);
