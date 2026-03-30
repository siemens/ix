import {
  ModalConfig as IxModalConfig,
  showModal as _showModal,
  showModalLoading as _showModalLoading,
  dismissModal as _dismissModal,
  closeModal as _closeModal,
  ModalInstance as IxModalInstance,
  ModalLoadingContext,
  ModalLoadingOptions,
} from '@siemens/ix';
import { VNode } from 'vue';
import { defineCustomElement } from '@siemens/ix/components/ix-modal.js';

export type { ModalLoadingOptions } from '@siemens/ix';

// call defineCustomElement once at module level
defineCustomElement();

export { default as Modal } from './Modal.vue';
export { default as IxOverlay } from './IxOverlay.vue';
export * from './constants';
export * from './modal-slot-props';

export type ModalConfig = {
  content: VNode;
};

export async function showModal(
  config: Omit<IxModalConfig, 'content'> & ModalConfig
) {
  return _showModal(config);
}

/** @deprecated Use ModalLoadingOptions object form instead */
export function showModalLoading(message: string): ModalLoadingContext;
export function showModalLoading(
  options: ModalLoadingOptions
): ModalLoadingContext;
export function showModalLoading(
  messageOrOptions: string | ModalLoadingOptions
): ModalLoadingContext {
  return typeof messageOrOptions === 'string'
    ? _showModalLoading(messageOrOptions)
    : _showModalLoading(messageOrOptions);
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
