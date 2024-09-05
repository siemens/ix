/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { copyPreviewStyles } from 'example-styles';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
  copyPreviewStyles(path.join(__dirname, 'src', 'preview-examples', 'styles'));

  return {
    plugins: [vue()],
  };
});
