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

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`<ix-upload></ix-upload>`);

  const { violations } = await makeAxeBuilder().analyze();
  expect(violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-upload></ix-upload>`);
  const upload = page.locator('ix-upload');

  await expect(upload).toHaveAttribute('hydrated');
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

regressionTest(
  'accepts files dropped from a source that only allows copy or link',
  async ({ mount, page }) => {
    // Mirrors a drag from Chrome's Downloads panel, which never allows "move"
    await mount(`
      <div id="drag-source" draggable="true">report.xlsx</div>
      <ix-upload></ix-upload>
    `);
    const upload = page.locator('ix-upload');
    await expect(upload).toHaveAttribute('hydrated');

    await page.locator('#drag-source').evaluate((source) => {
      source.addEventListener('dragstart', (event) => {
        if (event.dataTransfer) {
          event.dataTransfer.effectAllowed = 'copyLink';
        }
      });
    });

    const filesChangedEvents = await upload.evaluateHandle((elm) => {
      const events: Event[] = [];
      elm.addEventListener('filesChanged', (event) => events.push(event));
      return events;
    });

    await page
      .locator('#drag-source')
      .dragTo(upload.locator('.file-upload-area'));

    // The browser cancels the drop when the requested drop effect is not allowed
    await expect
      .poll(() => filesChangedEvents.evaluate((events) => events.length))
      .toBe(1);
  }
);
