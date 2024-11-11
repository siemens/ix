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

export const config: Config = {
  tsconfig: 'tsconfig.lib.json',
  globalScript: './src/setup.ts',
  extras: {
    appendChildSlotFix: true,
    slotChildNodesFix: true,
    enableImportInjection: true,
    scopedSlotTextContentFix: true,
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
    storybookOutputTarget({
      dist: '../storybook-docs/.storybook/define-custom-elements.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@siemens/ix',
      proxiesFile: '../vue/src/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      excludeComponents: ['ix-playground-internal', 'ix-icon'],
    }),
    angularOutputTarget({
      componentCorePackage: '@siemens/ix',
      directivesProxyFile: '../angular/src/components.ts',
      directivesArrayFile: '../angular/src/declare-components.ts',
      excludeComponents: ['ix-playground-internal', 'ix-tree', 'ix-icon'],
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
    }),
    reactOutputTarget({
      componentCorePackage: '@siemens/ix',
      proxiesFile: '../react/src/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
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
