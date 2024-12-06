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
      directivesProxyFile: '../angular/standalone/src/directives/proxies.ts',
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
  },
  testing: {
    testPathIgnorePatterns: ['/node_modules/', '/tests/', '/dist/', '/www/'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/utils/test/matchMedia.mock.js'],
    browserArgs: ['--no-sandbox', '--disable-stuid-sandbox'],
    browserHeadless: 'new',
  },
  namespace: 'siemens-ix',
  watchIgnoredRegex: [/scss/, /component-doc.json/],
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
      excludeComponents: ['ix-playground-internal', 'ix-icon'],
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
      // esModules: true,
      // hydrateModule: '@siemens/ix/hydrate',
      excludeComponents: ['ix-tree', 'ix-tree-item', 'ix-icon'],
    }),
    reactOutputTarget({
      stencilPackageName: corePackageName,
      outDir: '../react/src/ssr',
      // esModules: true,
      hydrateModule: '@siemens/ix/hydrate',
      excludeComponents: ['ix-tree', 'ix-tree-item', 'ix-icon'],
    }),
    // reactOutputTarget({
    //   stencilPackageName: corePackageName,
    //   outDir: '../react/src/components',
    //   esModules: true,
    //   hydrateModule: '@siemens/ix/hydrate',
    //   excludeComponents: ['ix-tree', 'ix-tree-item', 'ix-icon'],
    // }),
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
      includeGlobalScripts: false,
      externalRuntime: false,
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
