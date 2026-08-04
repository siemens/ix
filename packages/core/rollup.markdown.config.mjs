/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const input = {
  index: 'src/markdown/index.ts',
  highlight: 'src/markdown/highlight.ts',
};

const javascript = {
  input,
  output: [
    {
      dir: 'dist/markdown',
      entryFileNames: '[name].js',
      chunkFileNames: 'chunks/[name]-[hash].js',
      format: 'esm',
      sourcemap: true,
    },
    {
      dir: 'dist/markdown',
      entryFileNames: '[name].cjs',
      chunkFileNames: 'chunks/[name]-[hash].cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({
      browser: true,
      exportConditions: ['browser', 'import', 'default'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.lib.json',
      compilerOptions: {
        declaration: false,
        declarationMap: false,
      },
    }),
  ],
};

const declarations = Object.entries(input).map(([name, source]) => ({
  input: source,
  output: {
    file: `dist/markdown/${name}.d.ts`,
    format: 'es',
  },
  plugins: [dts({ tsconfig: './tsconfig.lib.json' })],
}));

export default [javascript, ...declarations];
