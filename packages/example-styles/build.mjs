/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import path from 'path';

const __dirname = path.resolve();

console.log('Building...');
fs.copySync(path.join(__dirname, 'css'), path.join(__dirname, 'dist', 'css'));
console.log('Finished copy css to dist');
