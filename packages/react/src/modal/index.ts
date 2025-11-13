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
  showModalLoading as _showModalLoading,
  dismissModal as _dismissModal,
  closeModal as _closeModal,
  ModalInstance as IxModalInstance,
} from '@siemens/ix';
import { defineCustomElement } from '@siemens/ix/components/ix-modal.js';
export * from './modal';

export type ModalConfig = {
  content: React.ReactNode | string;
};

export type ModalLoadingContext = {
  update: (text: string) => string;
  finish: (text?: string, timeout?: number) => void;
};

export async function showModal(
  config: Omit<IxModalConfig, 'content'> & ModalConfig
) {
  defineCustomElement();

  return _showModal(config);
}

export function showModalLoading(message: string): ModalLoadingContext {
  defineCustomElement();

  return _showModalLoading(message);
}

export function dismissModal(modalInstance: IxModalInstance) {
  if (modalInstance?.htmlElement) {
    _dismissModal(modalInstance.htmlElement);
  }
}

export function closeModal<T = any>(
  modalInstance: IxModalInstance,
  reason?: T
) {
  if (modalInstance?.htmlElement) {
    _closeModal(modalInstance.htmlElement, reason);
  }
}
