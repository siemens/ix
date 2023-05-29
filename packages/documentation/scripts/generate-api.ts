/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs, { readFileSync } from 'fs';
import fse from 'fs-extra';
import fsp from 'fs/promises';
import path from 'path';
import rimraf from 'rimraf';
import copyLib, { examplePathPath } from './copy-webcomponents';
import { writeApi } from './renderer/api-renderer';
import { writeAngularPreviews } from './write-angular-preview';

(async function () {
  const __dirname = path.resolve();

  const htmlPreviewPath = path.join(
    __dirname,
    '../html-test-app/src/preview-examples'
  );

  const staticPath = path.join(
    __dirname,
    'static',
    'auto-generated',
    'previews'
  );

  const docsGenerationPath = path.join(__dirname, 'docs', 'auto-generated');

  function autoGenerationWarning(previewPath) {
    // unix/win normalization
    previewPath = previewPath.replace(/\\/g, '/');

    const copyright = `<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT
-->
`;

    return [
      copyright,
      `<!-- Auto generated! Please edit here: ${previewPath.substring(
        previewPath.indexOf('packages/')
      )} -->`,
    ].join('\n');
  }

  function generateMarkdown(previewPath, type, code) {
    let sourceCode = code.replace(/\/\*.*SPD.*\*\/\n\n/gms, '');
    sourceCode = sourceCode.replace(/<!-.*SPD.*-->\n\n/gms, '');

    return `${autoGenerationWarning(
      previewPath
    )}\n\`\`\`${type}\n${sourceCode.trimEnd()}\n\`\`\`\n`;
  }

  function readComponents() {
    const raw = readFileSync(
      path.join(__dirname, '..', 'core', 'component-doc.json')
    ).toString();

    return JSON.parse(raw);
  }

  async function writeWebComponentPreviews() {
    const htmlPreviewSourceCodePath = path.join(staticPath, 'javascript');
    fse.ensureDirSync(htmlPreviewSourceCodePath);

    const webComponentPreviews = fs.readdirSync(htmlPreviewPath);

    await Promise.all(
      webComponentPreviews.flatMap((previewPath) => {
        const writePath = path.join(
          __dirname,
          'docs',
          'auto-generated',
          'previews',
          'web-component'
        );
        fse.ensureDirSync(writePath);

        let code = fs
          .readFileSync(path.join(htmlPreviewPath, previewPath))
          .toString();
        const CODE_SPLIT = '<!-- Preview code -->\n';
        const splitHtmlContent = code.split(CODE_SPLIT);
        if (splitHtmlContent?.length === 3) {
          code = splitHtmlContent[1]
            .split('\n')
            .map((line) => line.replace(/[ ]{4}/, ''))
            .join('\n')
            .trimEnd();
        }

        const markdown = generateMarkdown(previewPath, 'html', code);
        return [
          fsp.writeFile(
            path.join(
              writePath,
              `${previewPath.substring(0, previewPath.lastIndexOf('.'))}.md`
            ),
            markdown
          ),
          fsp.writeFile(
            path.join(htmlPreviewSourceCodePath, `${previewPath}.txt`),
            code
          ),
        ];
      })
    );
  }

  async function writeReactPreviews() {
    const reactPreviewSourceCodePath = path.join(staticPath, 'react');
    fse.ensureDirSync(reactPreviewSourceCodePath);

    const reactPreviewPath = path.join(
      __dirname,
      '../react-test-app/src/preview-examples'
    );
    const reactPreviews = fs.readdirSync(reactPreviewPath);
    await Promise.all(
      reactPreviews.flatMap((previewPath) => {
        const name = previewPath.substring(0, previewPath.lastIndexOf('.'));
        const writePath = path.join(
          __dirname,
          'docs',
          'auto-generated',
          'previews',
          'react'
        );
        fse.ensureDirSync(writePath);
        const code = fs
          .readFileSync(path.join(reactPreviewPath, previewPath))
          .toString();
        const markdown = generateMarkdown(previewPath, 'tsx', code);

        return [
          fsp.writeFile(path.join(writePath, `${name}.md`), markdown),
          fsp.writeFile(
            path.join(staticPath, 'react', `${previewPath}.txt`),
            code
          ),
        ];
      })
    );
  }

  async function writeVuePreviews() {
    const vuePreviewSourceCodePath = path.join(staticPath, 'vue');
    fse.ensureDirSync(vuePreviewSourceCodePath);

    const vuePreviewPath = path.join(
      __dirname,
      '../vue-test-app/src/preview-examples'
    );
    const vuePreviews = fs.readdirSync(vuePreviewPath);
    await Promise.all(
      vuePreviews.flatMap((previewPath) => {
        const name = previewPath.substring(0, previewPath.lastIndexOf('.'));
        const writePath = path.join(
          __dirname,
          'docs',
          'auto-generated',
          'previews',
          'vue'
        );
        fse.ensureDirSync(writePath);
        const code = fs
          .readFileSync(path.join(vuePreviewPath, previewPath))
          .toString();
        const markdown = generateMarkdown(previewPath, 'html', code);

        return [
          fsp.writeFile(path.join(writePath, `${name}.md`), markdown),
          fsp.writeFile(
            path.join(staticPath, 'vue', `${previewPath}.txt`),
            code
          ),
        ];
      })
    );
  }

  function clearDirectories() {
    const paths = [staticPath, docsGenerationPath, examplePathPath];

    return Promise.all(
      paths.map((p) => {
        return new Promise((r) => {
          rimraf(p, r);
        });
      })
    );
  }

  await clearDirectories();
  await copyLib();

  const { components } = readComponents();
  await Promise.all(
    components.map((component: any) => writeApi(component, docsGenerationPath))
  );

  await writeWebComponentPreviews();
  await writeReactPreviews();
  await writeAngularPreviews(
    staticPath,
    htmlPreviewPath,
    __dirname,
    generateMarkdown
  );
  await writeVuePreviews();
})();
