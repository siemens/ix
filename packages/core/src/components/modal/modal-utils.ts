/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { NotificationColor } from '../utils/notification-color';

export interface ModalConfig {
  animation?: boolean;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  backdrop?: boolean | 'static';
  backdropClass?: string;
  beforeDismiss?: (reason?: any) => boolean | Promise<boolean>;
  centered?: boolean;
  container?: string | HTMLElement;
  content: string | HTMLElement;
  keyboard?: boolean;
  modalDialogClass?: string;
  scrollable?: boolean;
  size?: 'sm' | 'lg' | 'xl';
  title: string;
  windowClass?: string;
  icon?: string;
  iconColor?: NotificationColor;
}

function getModalContainer() {
  const containerList = Array.from(
    document.querySelectorAll('ix-modal-container')
  );
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn(
      'Multiple modal container are found. Only there first is used.'
    );
    return container;
  }
  if (!container) {
    const modalContainer = document.createElement('ix-modal-container');
    document.body.appendChild(modalContainer);

    return modalContainer;
  }
  return container;
}

export async function modal(config: ModalConfig) {
  const modalContainer = getModalContainer();
  const modalInstance = await modalContainer.showModal(config);

  return modalInstance;
}

function getIxModal(element: Element) {
  return element.closest('ix-modal');
}

export function closeModal(element: Element, closeResult: any) {
  getIxModal(element).close(closeResult);
}

export function dismissModal(element: Element, dismissResult?: any) {
  getIxModal(element).dismiss(dismissResult);
}
