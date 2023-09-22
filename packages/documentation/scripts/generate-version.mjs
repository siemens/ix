/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import execa from 'execa';
import fsExtra from 'fs-extra';
import path from 'path';

const __dirname = path.resolve();
const version = process.argv[2];

if (!version) {
  console.error('Not version defined', version);
  throw Error('Not version defined');
}

/**
 * Replace local asset refs with cdn links
 * @param {string} source
 */
function replaceAssetsWithCDN(source) {
  const cdnLoadLibrary = `<script type="module">
      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@siemens/ix@${version}/loader/index.es2017.js';
      defineCustomElements();
    </script>
    <script type="module">
      import { defineCustomElements } from './../additional-theme/ix-brand-theme/loader/index.es2017.js';
      defineCustomElements();
    </script>`;

  const cdnLoadSyles = `<link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@siemens/ix@${version}/dist/siemens-ix/siemens-ix.css"
    />
    <link
      rel="stylesheet"
      href="./../additional-theme/ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css"
    />`;

  let code = source.replace(
    /<script.*src=".*assets.*index.*<\/script>/g,
    cdnLoadLibrary
  );
  code = code.replace(/<script.*src=".*assets.*init.*<\/script>/g, '');

  code = code.replace(/<link.*href=".*assets.*index.*\.css">/g, cdnLoadSyles);
  code = code.replace(/<link.*href=".*assets.*init.*\.css">/g, '');
  return code;
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

  const previewCodeTargetPath = path.join(
    versionedPreviewCodePath,
    'dist',
    'preview-examples'
  );

  fsExtra.copySync(previewCodePath, versionedPreviewCodePath, {
    filter: (path) => {
      const excludeAssets = !path.includes(
        '/webcomponent-examples/dist/assets/'
      );
      return excludeAssets;
    },
  });
  const previewOutputFiles = fsExtra
    .readdirSync(previewCodeTargetPath)
    .filter((f) => f.endsWith('.html'));

  await Promise.all([
    ...previewOutputFiles.map(async (previewFile) => {
      const targetPath = path.join(previewCodeTargetPath, previewFile);
      const code = (await fsExtra.readFile(targetPath)).toString();
      const codeWithCDN = replaceAssetsWithCDN(code);
      return fsExtra.writeFile(targetPath, codeWithCDN);
    }),
  ]);
})(version);
