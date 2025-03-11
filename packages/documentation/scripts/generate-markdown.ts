/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs-extra';
import { Listr } from 'listr2';
import path from 'path';
import { writeApi } from './api-tasks';
import { writeTypeScriptFiles } from './ts-class-tasks';
import rimraf from 'rimraf';

const rootPath = path.join(__dirname, '../');

const staticPath = path.join(rootPath, 'static');

const componentDocPath = path.join(
  rootPath,
  '..',
  'core',
  'component-doc.json'
);

const examplePath = path.join(rootPath, `..`);

const htmlTestAppPath = path.join(
  examplePath,
  'html-test-app',
  'src',
  'preview-examples'
);

const reactTestAppPath = path.join(
  examplePath,
  'react-test-app',
  'src',
  'preview-examples'
);

const angularTestAppPath = path.join(
  examplePath,
  'angular-test-app',
  'src',
  'preview-examples'
);

const vueTestAppPath = path.join(
  examplePath,
  'vue-test-app',
  'src',
  'preview-examples'
);

const docsPath = path.join(rootPath, 'docs', 'auto-generated');

const iframeExampleCodePath = path.join(staticPath, 'webcomponent-examples');

const docsStaticExamples = path.join(staticPath, 'auto-generated', 'previews');
const docsStaticWebComponentExamples = path.join(
  docsStaticExamples,
  'web-components'
);
const docsStaticAngularExamples = path.join(docsStaticExamples, 'angular');
const docsStaticReactExamples = path.join(docsStaticExamples, 'react');
const docsStaticVueExamples = path.join(docsStaticExamples, 'vue');
const docsStaticStyleExamples = path.join(docsStaticExamples, 'styles');

const iframeFrameDist = path.join(iframeExampleCodePath, 'dist');

const ionicTestAppPath = path.join(rootPath, 'node_modules', 'ionic-test-app');
const ionicTestAppDistPath = path.join(ionicTestAppPath, 'dist');

const docsIonicPreviewPath = path.join(staticPath, 'ionic-preview');

const optionalThemeForPreview = path.join(
  iframeFrameDist,
  'additional-theme',
  'ix-brand-theme'
);

const optionalThemeForIonicPreview = path.join(
  docsIonicPreviewPath,
  'additional-theme',
  'ix-brand-theme'
);

interface Context {
  names: string[];
  htmlExamples: string[];
  reactExamples: string[];
  angularExamples: string[];
  vueExamples: string[];
}

const tasks = new Listr<Context>(
  [
    {
      title: 'Setup',
      task: async () => {
        await fs.ensureDir(docsPath);

        rimraf.sync(docsStaticExamples);
        await fs.ensureDir(docsStaticWebComponentExamples);
        await fs.ensureDir(docsStaticAngularExamples);
        await fs.ensureDir(docsStaticReactExamples);
        await fs.ensureDir(docsStaticVueExamples);
        await fs.ensureDir(docsStaticStyleExamples);

        rimraf.sync(iframeExampleCodePath);
        await fs.ensureDir(iframeExampleCodePath);
        await fs.ensureDir(iframeFrameDist);

        rimraf.sync(docsIonicPreviewPath);
        await fs.ensureDir(docsIonicPreviewPath);

        rimraf.sync(optionalThemeForPreview);
        await fs.ensureDir(optionalThemeForPreview);

        rimraf.sync(optionalThemeForIonicPreview);
        await fs.ensureDir(optionalThemeForIonicPreview);
      },
    },
    {
      title: 'Generate API Docs',
      task: async () => {
        const componentDocRaw = (
          await fs.readFile(componentDocPath)
        ).toString();
        const componentDoc = JSON.parse(componentDocRaw) as {
          components: any[];
        };

        const { components } = componentDoc;

        return Promise.all(
          components.map(async (component) => writeApi(component, docsPath))
        );
      },
    },
    {
      title: 'Generate Typescript class docs',
      task: async () => {
        await writeTypeScriptFiles(
          [
            path.join(
              rootPath,
              '..',
              'core',
              'src',
              'components',
              'utils',
              'modal',
              'modal.ts'
            ),
          ],
          docsPath
        );
      },
    },
    {
      title: 'Copy html-test-app preview to documentation',
      task: async () => {
        const copy = [
          fs.copy(htmlTestAppPath, docsStaticWebComponentExamples),
          fs.copy(
            path.join(examplePath, 'html-test-app', 'dist'),
            iframeFrameDist
          ),
          fs.copy(angularTestAppPath, docsStaticAngularExamples),
          fs.copy(reactTestAppPath, docsStaticReactExamples),
          fs.copy(vueTestAppPath, docsStaticVueExamples),
        ];

        return Promise.all(copy);
      },
    },
    {
      title: 'Copy ionic-test-app preview to documentation',
      task: async () => {
        return fs.copy(ionicTestAppDistPath, docsIonicPreviewPath);
      },
    },
    {
      title: 'Copy optional brand theme',
      task: async () => {
        const copy = [];

        const additionalThemeSource = path.join(
          rootPath,
          '.build-temp',
          'package'
        );

        if (fs.pathExistsSync(additionalThemeSource)) {
          copy.push(fs.copy(additionalThemeSource, optionalThemeForPreview));

          copy.push(
            fs.copy(additionalThemeSource, optionalThemeForIonicPreview)
          );

          return Promise.all(copy);
        }
      },
    },
    {
      title: "Copy ix-icons to documentation's static folder",
      task: async () => {
        const iconsPath = path.join(staticPath, 'svg');

        if (!fs.existsSync(iconsPath)) {
          await fs.mkdir(iconsPath);
        }

        await fs.emptyDir(iconsPath);
        const nodeIcons = require.resolve('@siemens/ix-icons');
        const svg = path.join(nodeIcons, '..', '..', 'svg');
        fs.copy(svg, iconsPath);
      },
    },
  ],
  { concurrent: false }
);

(async () => {
  try {
    await tasks.run();
  } catch (e) {
    console.error(e);
  }
})();
