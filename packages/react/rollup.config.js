/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import typescript from '@rollup/plugin-typescript';
import path from 'path';
import pkg from './package.json';

/** @type {import('rollup').RollupOptions} */
export default {
  // eslint-disable-next-line no-undef
  input: path.join(__dirname, 'src/index.ts'),
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
    },
  ],
  external: Object.keys(pkg.dependencies),
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
};
/* eslint-enable */
