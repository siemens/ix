/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createVNode, render, type Component } from 'vue';
import {
  showModal as _showModal,
  closeModal as _closeModal,
  dismissModal as _dismissModal,
  type ModalConfig as IxModalConfig,
  type IxModalSize as _IxModalSize,
  type ModalInstance as _ModalInstance,
} from '@siemens/ix';

export type IxModalSize = _IxModalSize;
export type ModalInstance = _ModalInstance;

export const closeModal = _closeModal;
export const dismissModal = _dismissModal;

export type ModalConfigWithProps = Partial<IxModalConfig> & {
  props?: Record<string, any>;
};

export async function showModal(
  component: Component,
  config?: ModalConfigWithProps
): Promise<ModalInstance> {
  const container = document.createElement('div');
  const vnode = createVNode(component, config?.props);
  render(vnode, container);

  return _showModal({
    ...config,
    content: container,
  });
}
