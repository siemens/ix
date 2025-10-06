import {
  ModalConfig as IxModalConfig,
  showModal as _showModal,
  dismissModal as _dismissModal,
  ModalInstance as IxModalInstance,
} from '@siemens/ix';
import { VNode } from 'vue';

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

export function dismissModal(modalInstance: IxModalInstance) {
  if (modalInstance?.htmlElement) {
    _dismissModal(modalInstance.htmlElement);
  }
}
