/* eslint-disable */
/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** @type {import('eslint').ESLint.Plugin} */
module.exports = {
  meta: {
    name: 'eslint-plugin-ix',
  },
  rules: {
    'no-luxon-calendar-ordinals': require('./rules/no-luxon-calendar-ordinals'),
  },
};
