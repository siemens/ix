/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import { componentUsagePlugin } from './tools/component-usage';

const __dirname = path.resolve();

const previewPath = path.join(__dirname, 'src', 'preview-examples');

const entryPoints = fs
  .readdirSync(previewPath)
  .filter((f) => f.endsWith('.html'));

const input: Record<string, string> = {};

entryPoints.forEach((file) => {
  const name = file.replace('.html', '');
  const entryPath = path.join(previewPath, file);
  input[name] = entryPath;
});

const additionalTheme = {
  css: 'corporate-theme/dist/css/brand-theme.css',
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: './',
    root: './src',
    publicDir: 'public',
    define: {
      __THEME__: JSON.stringify(additionalTheme),
    },
    build: {
      target: 'es2022',
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
    plugins: [componentUsagePlugin()],
  };
});
