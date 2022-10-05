/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'path';
import pkg from '../../package.json';

/** @type {import('rollup').RollupOptions} */
export default {
  input: path.join(__dirname, 'post-install.js'),
  output: [
    {
      dir: './dist/postinstall/',
      format: 'commonjs',
      preferConst: true,
    },
  ],
  external: Object.keys(pkg.dependencies),
  plugins: [],
};
/* eslint-enable */
