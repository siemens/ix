/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fsExtra from 'fs-extra';
import path from 'path';
import rimraf from 'rimraf';

const __dirname = path.resolve();

export const examplePathPath = path.join(
  __dirname,
  'static',
  'webcomponent-examples'
);

export const blueprintDistPath = path.join(
  __dirname,
  'static',
  'react-test-app'
);
const node_modules = path.join(__dirname, '../../', 'node_modules');

function deleteFolder(path: string) {
  return new Promise((r) => rimraf(path, r));
}

async function loadLib(libName, destPath) {
  await deleteFolder(destPath);
  const libPath = path.join(node_modules, libName);
  const pkg = JSON.parse(
    fsExtra.readFileSync(`${libPath}/package.json`).toString()
  );
  return Promise.all(
    pkg.files.map(async (file) => {
      try {
        await fsExtra.copy(`${libPath}/${file}`, path.join(destPath));
      } catch (e) {
        console.warn('Cannot copy resource', file, e);
      }
    })
  );
}

export default async () => {
  console.log('Start copy');
  fsExtra.ensureDirSync(blueprintDistPath);
  await Promise.all([
    loadLib('@siemens/html-test-app', examplePathPath),
    loadLib('@siemens/react-test-app', blueprintDistPath),
  ]);
  console.log('Copy finished!');
};
