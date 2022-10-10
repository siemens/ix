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
const libDestPath = path.join(
  __dirname,
  'static',
  'webcomponent-examples',
  'lib'
);

const node_modules = path.join(__dirname, '../../', 'node_modules');
const ix_brand_theme_path = path.join(node_modules, '@siemens/ix-brand-theme');

async function loadLib(libName) {
  const libPath = path.join(node_modules, libName);
  const pkg = JSON.parse(fsExtra.readFileSync(`${libPath}/package.json`));
  return Promise.all(
    pkg.files.map(async (file) => {
      try {
        await fsExtra.copy(
          `${libPath}/${file}`,
          path.join(libDestPath, libName, file)
        );
      } catch (e) {
        console.warn('Cannot copy resource', file);
      }
    })
  );
}

(async () => {
  console.log('Start copy');
  await Promise.all([
    loadLib('@siemens/ix'),
    loadLib('@siemens/ix-icons'),
    loadLib('@siemens/ix-aggrid'),
    fsExtra.pathExistsSync(ix_brand_theme_path)
      ? loadLib('@siemens/ix-brand-theme')
      : Promise.resolve(),
    loadLib('@siemens/ix-echarts'),
  ]);
  console.log('Copy finished!');
})();
