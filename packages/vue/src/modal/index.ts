import {
  ModalConfig as IxModalConfig,
  showModal as _showModal,
  showModalLoading as _showModalLoading,
  dismissModal as _dismissModal,
  closeModal as _closeModal,
  ModalInstance as IxModalInstance,
} from '@siemens/ix';
import { VNode } from 'vue';
import { defineCustomElement } from '@siemens/ix/components/ix-modal.js';

export { default as Modal } from './Modal.vue';
export { default as IxOverlay } from './IxOverlay.vue';
export * from './constants';
export * from './modal-slot-props';

export type ModalConfig = {
  content: VNode;
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
