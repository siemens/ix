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

const corePackageName = '@siemens/ix';

function getAngularConfig() {
  const excludeComponents = ['ix-playground-internal', 'ix-tree', 'ix-icon'];
  const config = [
    angularOutputTarget({
      componentCorePackage: corePackageName,
      directivesProxyFile: '../angular/src/components.ts',
      directivesArrayFile: '../angular/src/declare-components.ts',
      valueAccessorConfigs: [
        {
          elementSelectors:
            'ix-select[ngModel],ix-select[formControlName],ix-select[formControl]',
          event: 'valueChange',
          targetAttr: 'value',
          type: 'select',
        },
        {
          elementSelectors:
            'ix-toggle[ngModel],ix-toggle[formControlName],ix-toggle[formControl]',
          event: 'checkedChange',
          targetAttr: 'checked',
          type: 'boolean',
        },
      ],
      excludeComponents,
      outputType: 'component',
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
  globalScript: './src/setup.ts',
  extras: {
    enableImportInjection: true,
  },
  testing: {
    testPathIgnorePatterns: ['/node_modules/', '/tests/', '/dist/'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/utils/test/matchMedia.mock.js'],
    browserArgs: ['--no-sandbox', '--disable-stuid-sandbox'],
    browserHeadless: 'new',
  },
  namespace: 'siemens-ix',
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
    vueOutputTarget({
      componentCorePackage: corePackageName,
      proxiesFile: '../vue/src/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      excludeComponents: ['ix-playground-internal', 'ix-icon'],
    }),
    ...getAngularConfig(),
    reactOutputTarget({
      stencilPackageName: corePackageName,
      outDir: '../react/src',
      excludeComponents: [
        'ix-playground-internal',
        'ix-tree',
        'ix-tree-item',
        'ix-icon',
      ],
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
    },
  ],
};
