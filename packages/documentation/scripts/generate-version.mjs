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
import execa from 'execa';

console.log(process.argv);

const __dirname = path.resolve();
const version = process.argv[2];

if (!version) {
  console.error('Not version defined', version);
  throw Error('Not version defined');
}

(async (version) => {
  /**
   * Generate docusaurus version
   */

  await execa('npm', ['run', 'docusaurus', 'docs:version', version]);

  /**
   * Copy preview to version
   */

  const previewCodePath = path.join(
    __dirname,
    'static',
    'webcomponent-examples'
  );

  const versionedPreviewCodePath = path.join(
    __dirname,
    'static',
    'versioned_examples',
    `version-${version}`,
    'webcomponent-examples'
  );

  fsExtra.copySync(previewCodePath, versionedPreviewCodePath);
})(version);
