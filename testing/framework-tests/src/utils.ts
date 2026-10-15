/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { glob } from 'glob';
import path from 'node:path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const htmlPreviewPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'html-examples',
  'src',
  'preview-examples'
);

export async function resolveTestIds() {
  const files = await glob(path.join(htmlPreviewPath, '*.html'));
  return files.map((file) => path.basename(file, '.html'));
}
