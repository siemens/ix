/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { postcss } from '@stencil-community/postcss';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import autoprefixer from 'autoprefixer';
import { customComponentDocGenerator, getDevAssets } from './scripts/build/dev';
import { storybookOutputTarget } from './scripts/build/storybook';

const corePackageName = '@siemens/ix';

function getAngularConfig() {
  const excludeComponents = ['ix-tree', 'ix-icon'];
  const config = [
    angularOutputTarget({
      componentCorePackage: corePackageName,
      directivesProxyFile: '../angular/src/components.ts',
      directivesArrayFile: '../angular/src/declare-components.ts',
      excludeComponents,
      outputType: 'component',
      valueAccessorConfigs: [
        /** Value accessors should not be generated */
      ],
    }),
    angularOutputTarget({
      componentCorePackage: corePackageName,
      directivesProxyFile: '../angular/standalone/src/components.ts',
      excludeComponents,
      outputType: 'standalone',
    }),
  ];

  return config;
}

export const config: Config = {
  tsconfig: 'tsconfig.lib.json',
  globalScript: './src/setup.ts',
  extras: {
    enableImportInjection: true,
    addGlobalStyleToComponents: false,
  },
  testing: {
    testPathIgnorePatterns: ['/node_modules/', '/tests/', '/dist/', '/www/'],
    setupFilesAfterEnv: [],
    browserArgs: ['--no-sandbox', '--disable-stuid-sandbox'],
    browserHeadless: 'shell',
  },
  namespace: 'siemens-ix',
  watchIgnoredRegex: [/component-doc.json/],
  globalStyle: './scss/ix.scss',
  minifyCss: false,
  plugins: [
    sass({
      includePaths: ['./scss'],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    storybookOutputTarget({
      dist: '../storybook-docs/.storybook/define-custom-elements.ts',
    }),
    vueOutputTarget({
      componentCorePackage: corePackageName,
      proxiesFile: '../vue/src/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      excludeComponents: ['ix-icon'],
      componentModels: [
        {
          elements: [
            'ix-select',
            'ix-input',
            'ix-textarea',
            'ix-number-input',
            'ix-date-input',
          ],
          event: 'valueChange',
          targetAttr: 'value',
        },
        {
          elements: ['ix-checkbox'],
          event: 'checkedChange',
          targetAttr: 'checked',
        },
      ],
    }),
    ...getAngularConfig(),
    reactOutputTarget({
      stencilPackageName: corePackageName,
      outDir: '../react/src',
      excludeComponents: ['ix-tree', 'ix-tree-item', 'ix-icon'],
      hydrateModule: '@siemens/ix/hydrate',
      serializeShadowRoot: { scoped: [], default: 'declarative-shadow-dom' },
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      externalRuntime: false,
      includeGlobalScripts: false,
    },
    {
      type: 'docs-custom',
      generator: customComponentDocGenerator,
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: getDevAssets(),
    },
    {
      type: 'dist-hydrate-script',
      dir: './hydrate',
    },
  ],
};
