/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Page } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
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

const DragOperation = { Copy: 1, Link: 2, Move: 16 };

const dropOnUpload = async (
  page: Page,
  data: {
    files?: string[];
    items?: { mimeType: string; data: string }[];
    dragOperationsMask: number;
  }
) => {
  const box = await page.locator('ix-upload .file-upload-area').boundingBox();
  if (!box) {
    throw new Error('Drop area is not visible');
  }

  const devtools = await page.context().newCDPSession(page);
  for (const type of ['dragEnter', 'dragOver', 'drop'] as const) {
    await devtools.send('Input.dispatchDragEvent', {
      type,
      x: box.x + box.width / 2,
      y: box.y + box.height / 2,
      data: { items: [], ...data },
    });
  }
  await devtools.detach();
};

const recordFilesChanged = async (page: Page) => {
  const upload = page.locator('ix-upload');
  await expect(upload).toHaveAttribute('hydrated');

  return upload.evaluateHandle((elm) => {
    const fileNames: string[][] = [];
    elm.addEventListener('filesChanged', (event: Event) =>
      fileNames.push(
        (event as CustomEvent<File[]>).detail.map((file) => file.name)
      )
    );
    return fileNames;
  });
};

const createFile = (fileName: string) => {
  const filePath = regressionTest.info().outputPath(fileName);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, 'content');
  return filePath;
};

const dragSources = [
  {
    name: 'only allows copy or link',
    dragOperationsMask: DragOperation.Copy | DragOperation.Link,
  },
  { name: 'only allows move', dragOperationsMask: DragOperation.Move },
];

for (const { name, dragOperationsMask } of dragSources) {
  regressionTest(
    `emits filesChanged when the drag source ${name}`,
    async ({ mount, page }) => {
      await mount(`<ix-upload></ix-upload>`);
      const filesChanged = await recordFilesChanged(page);

      await dropOnUpload(page, {
        files: [createFile('report.xlsx')],
        dragOperationsMask,
      });

      await expect
        .poll(() => filesChanged.evaluate((fileNames) => fileNames))
        .toEqual([['report.xlsx']]);
    }
  );
}

regressionTest(
  'accepts a single file dragged together with text data',
  async ({ mount, page }) => {
    await mount(`<ix-upload></ix-upload>`);
    const filesChanged = await recordFilesChanged(page);

    await dropOnUpload(page, {
      files: [createFile('report.xlsx')],
      items: [{ mimeType: 'text/plain', data: 'report.xlsx' }],
      dragOperationsMask: DragOperation.Copy,
    });

    await expect
      .poll(() => filesChanged.evaluate((fileNames) => fileNames))
      .toEqual([['report.xlsx']]);
  }
);

regressionTest(
  'rejects multiple files when multiple is not set',
  async ({ mount, page }) => {
    await mount(`<ix-upload></ix-upload>`);
    const filesChanged = await recordFilesChanged(page);

    await dropOnUpload(page, {
      files: [createFile('report-1.xlsx'), createFile('report-2.xlsx')],
      dragOperationsMask: DragOperation.Copy,
    });

    expect(await filesChanged.evaluate((fileNames) => fileNames)).toEqual([]);
  }
);

regressionTest('rejects drags without files', async ({ mount, page }) => {
  await mount(`<ix-upload></ix-upload>`);
  const filesChanged = await recordFilesChanged(page);

  await dropOnUpload(page, {
    items: [
      { mimeType: 'text/plain', data: 'report.xlsx' },
      { mimeType: 'text/html', data: '<b>report.xlsx</b>' },
    ],
    dragOperationsMask: DragOperation.Copy,
  });

  expect(await filesChanged.evaluate((fileNames) => fileNames)).toEqual([]);
});
