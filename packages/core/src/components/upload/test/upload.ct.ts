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
  'enables folder upload when directoryUpload is set',
  async ({ mount, page }) => {
    await mount(`<ix-upload directory-upload></ix-upload>`);
    const upload = page.locator('ix-upload');

    const attrs = await upload.evaluate((element) => {
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
        selectFileText: element.shadowRoot
          ?.querySelector('.upload-text')
          ?.textContent?.trim(),
        hasWebkitDirectory: input.hasAttribute('webkitdirectory'),
        hasDirectory: input.hasAttribute('directory'),
      };
    });

    expect(attrs).not.toBeNull();
    expect(attrs?.selectFileText).toBe('+ Drag folder here or…');
    expect(attrs?.buttonText).toBe('Upload folder…');
    expect(attrs?.hasWebkitDirectory).toBe(true);
    expect(attrs?.hasDirectory).toBe(true);
  }
);

regressionTest(
  'allows overriding folder upload texts',
  async ({ mount, page }) => {
    await mount(
      `<ix-upload directory-upload select-file-text="Custom drag text" i18n-upload-file="Custom button"></ix-upload>`
    );
    const upload = page.locator('ix-upload');

    const texts = await upload.evaluate((element) => {
      return {
        buttonText: element.shadowRoot
          ?.querySelector('ix-button')
          ?.textContent?.trim(),
        selectFileText: element.shadowRoot
          ?.querySelector('.upload-text')
          ?.textContent?.trim(),
      };
    });

    expect(texts?.selectFileText).toBe('Custom drag text');
    expect(texts?.buttonText).toBe('Custom button');
  }
);
