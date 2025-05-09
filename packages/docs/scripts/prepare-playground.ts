/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import path from 'path';

const __dirname = path.resolve();

const __node_modules = path.join(__dirname, 'node_modules');
const __generatedBuild = path.join(__node_modules, 'documentation', 'build');

async function main() {
  if (!fs.existsSync(__generatedBuild)) {
    throw Error('No generated build files found!');
  }

  await fs.copy(__generatedBuild, __dirname);
}

main();
