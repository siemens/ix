/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NotificationColor } from '../utils/notification-color';
import { TypedEvent } from '../utils/typed-event';

export interface ModalConfig<TReason = any> {
  animation?: boolean;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  backdrop?: boolean | 'static';
  backdropClass?: string;
  beforeDismiss?: (reason?: TReason) => boolean | Promise<boolean>;
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

export interface ModalInstance<TReason = any> {
  htmlElement: HTMLIxModalElement;
  onClose: TypedEvent<TReason>;
  onDismiss: TypedEvent<TReason>;
}

function getModalContainer() {
  const containerList = Array.from(
    document.querySelectorAll('ix-modal-container')
  );
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn(
      'Multiple modal containers were found. The one instatiated first will be used.'
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

export async function modal<TReson = any>(
  config: ModalConfig<TReson>
): Promise<ModalInstance<TReson>> {
  const modalContainer = getModalContainer();
  const modalInstance = await modalContainer.showModal(config);

  return modalInstance;
}

function getIxModal(element: Element) {
  return element.closest('ix-modal');
}

export function closeModal<TClose = any>(
  element: Element,
  closeResult: TClose
) {
  getIxModal(element).close(closeResult);
}

export function dismissModal(element: Element, dismissResult?: any) {
  getIxModal(element).dismiss(dismissResult);
}
