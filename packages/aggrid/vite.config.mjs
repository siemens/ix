/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      // Include the directory where Rollup outputs the bundle
      include: ['dist/**'],
      // Force Vite to always reload on changes
      usePolling: true,
    },
  },
});
