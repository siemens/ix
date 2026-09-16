/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { svelte } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

const previewPath = path.join(
  __dirname,
  'node_modules',
  'html-test-app',
  'src',
  'preview-examples'
);

const targetPath = path.join(__dirname, 'src', 'preview-examples');

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Copy the styles from the preview-examples folder to the src folder.
  // Unlike vue-test-app these copies are gitignored -- this app only ports a
  // handful of examples, so committing the full css set would be noise.
  fs.readdirSync(previewPath)
    .filter((f) => f.endsWith('.css'))
    .forEach((file) => {
      fs.copyFileSync(
        path.join(previewPath, file),
        path.join(targetPath, file)
      );
    });

  return {
    plugins: [svelte()],
  };
});
