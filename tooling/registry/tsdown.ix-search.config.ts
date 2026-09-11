/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from 'node:path';
import process from 'node:process';
import { defineConfig } from 'tsdown';

const skillOutputDirectory = process.env.IX_SEARCH_OUT_DIR ?? '../../skills/ix';

export default defineConfig({
  entry: ['src/skill/search.mjs'],
  outDir: path.join(skillOutputDirectory, 'scripts'),
  format: 'esm',
  platform: 'node',
  alias: {
    minisearch: path.resolve(
      import.meta.dirname,
      'node_modules/minisearch/dist/es/index.js'
    ),
  },
  noExternal: ['minisearch'],
  inlineOnly: ['minisearch'],
  clean: false,
  sourcemap: false,
  banner: {
    js: `/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * GENERATED FILE - DO NOT EDIT.
 */`,
  },
});
