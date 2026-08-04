/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/common/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  moduleNameMapper: {
    '^@fs/(.*)$': '<rootDir>/src/lib/$1',
  },
};
