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

const __dirname = path.resolve();

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
        },
      },
      outDir: path.join(__dirname, 'dist'),
    },
    plugins: [],
  };
});
