/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ModalConfig as IxModalConfig,
  showModal as _showModal,
} from '@siemens/ix';
export * from './modal';

export type ModalConfig = {
  content: React.ReactNode | string;
};

export async function showModal(
  config: Omit<IxModalConfig, 'content'> & ModalConfig
) {
  return _showModal(config);
}
