/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const path = require('path');

const folders = {
  './packages/angular-test-app/src/preview-examples/': ['.ts'],
  './packages/react-test-app/src/preview-examples/': ['.tsx'],
  './packages/vue-test-app/src/preview-examples/': ['.vue'],
  './packages/html-test-app/src/preview-examples/': ['.html'],
};

let allFileNames = new Set();
let fileNames = {};

for (let folder in folders) {
  fileNames[folder] = new Set();
  fs.readdirSync(folder).forEach((file) => {
    let ext = path.extname(file);
    if (folders[folder].includes(ext)) {
      let baseName = path.basename(file, ext);
      fileNames[folder].add(baseName);
      allFileNames.add(baseName);
    }
  });
}

for (let folder in fileNames) {
  console.log(`\nMissing files in ${folder}:`);
  allFileNames.forEach((file) => {
    if (!fileNames[folder].has(file)) {
      console.log(file);
    }
  });
}
