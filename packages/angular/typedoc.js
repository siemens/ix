/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
  json: 'component-docs.json',
  tsconfig: 'tsconfig.docs.json',
  entryPoints: [
    /**
     * Modal
     **/
    './src/modal/modal.config.ts',
    './src/modal/modal.service.ts',
  ],
};
