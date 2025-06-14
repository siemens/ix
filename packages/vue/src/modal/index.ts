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
