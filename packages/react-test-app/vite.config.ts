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
import { copyPreviewStyles } from 'example-styles';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
  copyPreviewStyles(path.join(__dirname, 'src', 'preview-examples', 'styles'));

  return {
    plugins: [react()],
  };
});
