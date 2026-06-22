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

    const input = upload.locator('#upload-browser');
    const button = upload.locator('ix-button');
    const selectFileText = upload.locator('.upload-text');

    await expect(selectFileText).toHaveText('+ Drag folder here or…');
    await expect(button).toHaveText('Upload folder…');
    await expect(input).toHaveAttribute('webkitdirectory', '');
    await expect(input).toHaveAttribute('directory', '');
  }
);

regressionTest(
  'allows overriding folder upload texts',
  async ({ mount, page }) => {
    await mount(
      `<ix-upload directory-upload select-file-text="Custom drag text" i18n-upload-file="Custom button"></ix-upload>`
    );
    const upload = page.locator('ix-upload');

    const button = upload.locator('ix-button');
    const selectFileText = upload.locator('.upload-text');

    await expect(selectFileText).toHaveText('Custom drag text');
    await expect(button).toHaveText('Custom button');
  }
);
