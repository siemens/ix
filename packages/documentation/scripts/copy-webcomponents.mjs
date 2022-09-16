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

import { createRequire } from 'module';

const __dirname = path.resolve();
const libDestPath = path.join(
  __dirname,
  'static',
  'webcomponent-examples',
  'lib'
);

const ix_path = path.join(__dirname, '..', 'core');
const ix_dest_path = path.join(libDestPath, 'ix');

const ix_brand_theme_path = path.join(
  __dirname,
  '../../',
  'node_modules',
  '@siemens/ix-brand-theme'
);
const ix_brand_theme_dest_path = path.join(libDestPath, 'ix-brand-theme');

const ix_aggrid_path = path.join(__dirname, '..', 'aggrid');
const ix_aggrid_dest_path = path.join(libDestPath, 'ix-aggrid');

const icon_path = path.join(
  __dirname,
  '../../',
  'node_modules',
  '@siemens/ix-icons'
);
const icon_dest_path = path.join(libDestPath, 'ix-icons');

const { resolve } = createRequire(import.meta.url);

async function loadLib(libName) {
  const distName = '/dist';
  const libPath = resolve(libName);
  const distPath = libPath.substring(
    0,
    libPath.indexOf(distName) + distName.length
  );

  return fsExtra.copy(distPath, path.join(libDestPath, libName));
}

function filter(fileName) {
  return !fileName.includes('node_modules');
}

(async () => {
  console.log('Start copy');
  await Promise.all([
    fsExtra.copy(ix_path, ix_dest_path, { filter }),
    fsExtra.copy(ix_aggrid_path, ix_aggrid_dest_path, { filter }),
    fsExtra.copy(icon_path, icon_dest_path),
    fsExtra.pathExistsSync(ix_brand_theme_path)
      ? fsExtra.copy(ix_brand_theme_path, ix_brand_theme_dest_path, {
          filter: (path) => !path.includes('ix-brand-theme/node_modules'),
        })
      : Promise.resolve(),
    loadLib('@siemens/ix-echarts'),
  ]);
  console.log('Copy finished!');
})();
