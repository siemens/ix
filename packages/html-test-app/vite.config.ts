/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
const __dirname = path.resolve();

const previewPath = path.join(__dirname, 'src', 'preview-examples');

const entryPoints = fs
  .readdirSync(previewPath)
  .filter((f) => f.endsWith('.html'));

const input = {};

entryPoints.forEach((file) => {
  const name = file.replace('.html', '');
  const entryPath = path.join(previewPath, file);
  input[name] = entryPath;
});

const isBrandThemeExisting = fs.existsSync(
  path.join(
    __dirname,
    'public',
    'additional-theme',
    '@siemens/ix-brand-theme/package.json'
  )
);

let additionalTheme = {};

if (isBrandThemeExisting) {
  additionalTheme = {
    loader: '@siemens/ix-brand-theme/loader',
    css: '@siemens/ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css',
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    additionalTheme: JSON.stringify(additionalTheme),
  },
  build: {
    minify: false,
    rollupOptions: {
      input,
    },
    outDir: path.join(__dirname, 'dist'),
  },
  plugins: [],
});
