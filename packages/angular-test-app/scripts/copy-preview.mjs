/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from 'path';
import fs from 'fs';
import fsp from 'fs/promises';
const __dirname = path.resolve();

const previewPath = path.join(
  __dirname,
  'node_modules',
  'html-test-app',
  'src',
  'preview-examples'
);

(async () => {
  console.log('Copying preview styles to html-test-app...');
  const cssFiles = fs
    .readdirSync(previewPath)
    .filter((f) => f.endsWith('.css'));

  await Promise.all(
    cssFiles.map((cssFile) =>
      fsp.copyFile(
        path.join(previewPath, cssFile),
        path.join(__dirname, 'src', 'preview-examples', cssFile)
      )
    )
  );

  console.log('Done');
})();
