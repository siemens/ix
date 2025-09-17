import {
  ModalConfig as IxModalConfig,
  showModal as _showModal,
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

/**
 * Dismisses a modal instance returned by showModal.
 * @param modalInstance The modal instance returned by showModal
 * @param dismissResult Optional result to pass to the dismiss event
 */
export function dismissModal(
  modalInstance: { htmlElement: any },
  dismissResult?: any
) {
  modalInstance?.htmlElement?.dismissModal?.(dismissResult);
}
