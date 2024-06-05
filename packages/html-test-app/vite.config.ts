/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs-extra';
import path from 'path';
import { defineConfig } from 'vite';

const resolve = import.meta.resolve!;
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

const additionalTheme = {
  loader: 'ix-brand-theme/loader',
  css: 'ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css',
};

const brandTheme = await resolve('@siemens/ix-brand-theme');

if (brandTheme) {
  const themeFolder = path.join(brandTheme, '..', '..');
  fs.copySync(
    themeFolder,
    path.join(__dirname, 'src', 'public', 'additional-theme')
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './src',
  publicDir: 'public',
  define: {
    __THEME__: JSON.stringify(additionalTheme),
  },
  build: {
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      input: {
        index: './src/index.html',
        ...input,
      },
    },
    outDir: path.join(__dirname, 'dist'),
  },
  plugins: [],
});
