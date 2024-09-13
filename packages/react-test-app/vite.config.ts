/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

const previewPath = path.join(
  __dirname,
  'node_modules',
  'html-test-app',
  'src',
  'preview-examples'
);

// https://vitejs.dev/config/
export default defineConfig(() => {
  fs.readdirSync(previewPath)
    .filter((f) => f.endsWith('.css'))
    .forEach((file) => {
      fs.copyFileSync(
        path.join(previewPath, file),
        path.join(__dirname, 'src', 'preview-examples', file)
      );
    });

  throw Error('Error');
  return {
    plugins: [react()],
  };
});
