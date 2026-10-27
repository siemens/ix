/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Page } from '@playwright/test';
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

for (const effectAllowed of ['copyLink', 'move'] as const) {
  regressionTest(
    `emits filesChanged when the drag source only allows ${effectAllowed}`,
    async ({ mount, page }) => {
      await mount(`
        <div draggable="true">report.xlsx</div>
        <ix-upload></ix-upload>
      `);
      const upload = page.locator('ix-upload');
      await expect(upload).toHaveAttribute('hydrated');

      const dragSource = page.getByText('report.xlsx');
      await dragSource.evaluate((source, effectAllowed) => {
        source.addEventListener('dragstart', (event) => {
          if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = effectAllowed;
          }
        });
      }, effectAllowed);

      const filesChangedEvents = await upload.evaluateHandle((elm) => {
        const events: Event[] = [];
        elm.addEventListener('filesChanged', (event) => events.push(event));
        return events;
      });

      await dragSource.dragTo(upload.locator('.file-upload-area'));

      await expect
        .poll(() => filesChangedEvents.evaluate((events) => events.length))
        .toBe(1);
    }
  );
}

const dragOverWithFiles = async (
  page: Page,
  fileCount: number,
  withText: boolean
) => {
  const dataTransfer = await page.evaluateHandle(
    ({ fileCount, withText }) => {
      const dataTransfer = new DataTransfer();
      for (let i = 0; i < fileCount; i++) {
        dataTransfer.items.add(new File(['content'], `report-${i}.xlsx`));
      }
      if (withText) {
        dataTransfer.items.add('report.xlsx', 'text/plain');
      }
      return dataTransfer;
    },
    { fileCount, withText }
  );

  await page
    .locator('ix-upload .file-upload-area')
    .dispatchEvent('dragover', { dataTransfer });
};

regressionTest(
  'accepts a single file dragged together with text data',
  async ({ mount, page }) => {
    await mount(`<ix-upload></ix-upload>`);
    await expect(page.locator('ix-upload')).toHaveAttribute('hydrated');

    await dragOverWithFiles(page, 1, true);

    await expect(page.locator('ix-upload .file-upload-area')).toHaveClass(
      /file-over/
    );
  }
);

regressionTest(
  'rejects multiple files when multiple is not set',
  async ({ mount, page }) => {
    await mount(`<ix-upload></ix-upload>`);
    await expect(page.locator('ix-upload')).toHaveAttribute('hydrated');

    await dragOverWithFiles(page, 2, false);

    await expect(page.locator('ix-upload .file-upload-area')).not.toHaveClass(
      /file-over/
    );
  }
);
