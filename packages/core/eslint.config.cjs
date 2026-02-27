/* eslint-disable */
/* tslint:disable */
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  {
    ignores: [
      'stencil.config.ts',
      'playwright.config.ts',
      'playwright-ct.config.ts',
      'src/components.d.ts',
      'scripts/build',
      'scripts/e2e',
    ],
  },
  ...compat.config({
    parserOptions: {
      project: './tsconfig.lint.json',
    },
    extends: [
      'plugin:@stencil-community/recommended',
      'eslint-config-ix/index.js',
    ],
    rules: {
      '@stencil-community/async-methods': 0,
      '@stencil-community/own-props-must-be-private': 0,
      '@stencil-community/own-methods-must-be-private': 0,
      '@stencil-community/strict-boolean-conditions': 0,
      '@stencil-community/ban-default-true': ['error'],
      '@stencil-community/decorators-style': [
        'error',
        { prop: 'inline', method: 'multiline' },
      ],
      'react/jsx-no-bind': 0,
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'off',
    },
  }),
];
