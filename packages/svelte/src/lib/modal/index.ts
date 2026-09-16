/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  type ModalConfig as IxModalConfig,
  type ModalInstance as IxModalInstance,
  type ModalLoadingContext,
  type ModalLoadingOptions,
} from '@siemens/ix';
import {
  closeModal as _closeModal,
  createShowModalLoading,
  dismissModal as _dismissModal,
  showModal as _showModal,
} from '@siemens/ix/components';
import { defineCustomElement as defineIxModal } from '@siemens/ix/components/ix-modal.js';
import { defineCustomElement as defineIxModalLoading } from '@siemens/ix/components/ix-modal-loading.js';
import type { SvelteView } from '../delegate.js';

export type { ModalLoadingOptions } from '@siemens/ix';

const showModalWithDependencies = _showModal.withDependencies([
  { tag: 'ix-modal', define: defineIxModal },
]);

const showModalLoadingWithDependencies = createShowModalLoading([
  { tag: 'ix-modal', define: defineIxModal },
  { tag: 'ix-modal-loading', define: defineIxModalLoading },
]);

export { default as Modal } from './Modal.svelte';
export * from './constants.js';
export * from './modal-slot-props.js';

export type ModalConfig = {
  /**
   * The Svelte component to render inside the modal. It has to render an
   * `IxModal` (or the `Modal` wrapper) at its root.
   */
  content: SvelteView;
};

export async function showModal(
  config: Omit<IxModalConfig, 'content'> & ModalConfig
) {
  return showModalWithDependencies(config as unknown as IxModalConfig);
}

export function showModalLoading(
  options: ModalLoadingOptions
): Promise<ModalLoadingContext> {
  return showModalLoadingWithDependencies(options);
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
