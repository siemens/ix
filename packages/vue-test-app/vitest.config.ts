/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJSX()],
  test: {
    setupFiles: ['./src/tests/setup.ts'],
    exclude: ['tests/**/*.spec.ts', '**/node_modules/**'],
    browser: {
      enabled: true,
      provider: 'playwright',
      // https://vitest.dev/guide/browser/playwright
      instances: [{ browser: 'chromium' }],
    },
    typecheck: {
      tsconfig: './tsconfig.spec.json',
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
