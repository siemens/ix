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

const excludeDevelopmentComponents = ['ix-playground'];

function getAngularConfig() {
  const excludeComponents = [
    ...excludeDevelopmentComponents,
    'ix-tab-panel',
    'ix-tab-panels',
    'ix-tree',
    'ix-icon',
  ];
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
  suppressReservedPublicNameWarnings: true,
  extras: {
    enableImportInjection: true,
    addGlobalStyleToComponents: false,
  },
  excludeComponents: excludeDevelopmentComponents,
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
      excludeComponents: excludeDevelopmentComponents,
    }),
    vueOutputTarget({
      componentCorePackage: corePackageName,
      proxiesFile: '../vue/src/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      excludeComponents: [
        ...excludeDevelopmentComponents,
        'ix-icon',
        'ix-tab-panel',
        'ix-tab-panels',
      ],
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
      excludeComponents: [
        ...excludeDevelopmentComponents,
        'ix-tab-panel',
        'ix-tab-panels',
        'ix-tree',
        'ix-tree-item',
        'ix-icon',
      ],
      hydrateModule: '@siemens/ix/hydrate',
      clientModule: '@siemens/ix',
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
      type: 'docs-readme',
      dir: './api-docs',
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
