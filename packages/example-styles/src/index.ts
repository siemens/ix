/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __packageRoot = path.resolve(__dirname, '..');

export function copyPreviewStyles(dest: string) {
  fs.copySync(path.join(__packageRoot, 'css'), dest);
}
