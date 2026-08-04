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
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['turbo', 'prettier'],
  plugins: ['turbo', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'no-inline-comments': 'error',
  },
};
