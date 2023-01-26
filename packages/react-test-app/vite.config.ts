/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

const baseUrl = process.env.BASE_URL ?? '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: `${baseUrl}react-test-app/`,
  plugins: [
    react(),
    Pages({
      dirs: [
        { dir: './src/preview-examples', baseRoute: 'previews' },
        { dir: './src/blueprints', baseRoute: 'blueprints' },
      ],
    }),
  ],
});
