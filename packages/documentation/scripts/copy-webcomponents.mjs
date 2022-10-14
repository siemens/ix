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

const __dirname = path.resolve();
const examplePathPath = path.join(__dirname, 'static', 'webcomponent-examples');

const libDestPath = path.join(examplePathPath, 'lib');

const node_modules = path.join(__dirname, '../../', 'node_modules');

async function loadLib(libName, destPath) {
  const libPath = path.join(node_modules, libName);
  const pkg = JSON.parse(fsExtra.readFileSync(`${libPath}/package.json`));
  return Promise.all(
    pkg.files.map(async (file) => {
      try {
        await fsExtra.copy(
          `${libPath}/${file}`,
          destPath
            ? path.join(examplePathPath, file)
            : path.join(libDestPath, libName, file)
        );
      } catch (e) {
        console.warn('Cannot copy resource', file, e);
      }
    })
  );
}

(async () => {
  console.log('Start copy');
  await Promise.all([loadLib('@siemens/html-test-app', examplePathPath)]);
  console.log('Copy finished!');
})();
