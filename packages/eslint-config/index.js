/* eslint-disable */
/* tslint:disable */
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['prettier'],
  extends: ['turbo', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
    'no-inline-comments': 'error',
  },
};
