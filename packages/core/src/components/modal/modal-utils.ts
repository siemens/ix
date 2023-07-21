/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MessageContent } from '../modal-message/modal-message';
import { getCoreDelegate, resolveDelegate } from '../utils/delegate';
import { NotificationColor } from '../utils/notification-color';
import { TypedEvent } from '../utils/typed-event';
import { IxModalSize } from './dialog';

export interface ModalConfig<TReason = any, C = any> {
  animation?: boolean;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  backdrop?: boolean;
  closeOnBackdropClick?: boolean;
  beforeDismiss?: (reason?: TReason) => boolean | Promise<boolean>;
  centered?: boolean;
  container?: string | HTMLElement;
  content: C;
  keyboard?: boolean;
  modalDialogClass?: string;
  scrollable?: boolean;
  size?: IxModalSize;
  title?: string;
  windowClass?: string;
  icon?: string;
  iconColor?: NotificationColor;
}

export interface ModalInstance<TReason = any> {
  htmlElement: HTMLIxModalElement | HTMLIxDialogElement;
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

export async function modal<T = any>(
  config: ModalConfig<T>
): Promise<ModalInstance<T>> {
  const modalContainer = getModalContainer();
  const modalInstance = await modalContainer.showModal<T>(config);

  return modalInstance;
}

function getIxModal(element: Element) {
  return element.closest('ix-modal');
}

export function closeModal<TClose = any>(
  element: Element,
  closeResult: TClose
) {
  if (element.tagName === 'IX-DIALOG') {
    (element as HTMLIxDialogElement).closeModal(closeResult);
    return;
  }
  getIxModal(element).close(closeResult);
}

export function dismissModal(element: Element, dismissResult?: any) {
  if (element.tagName === 'IX-DIALOG') {
    (element as HTMLIxDialogElement).dismissModal(dismissResult);
    return;
  }
  getIxModal(element).dismiss(dismissResult);
}

export async function showMessage<T>(config: MessageContent) {
  const onMessageAction = new TypedEvent<T>();
  const message = document.createElement('ix-modal-message');
  Object.assign(message, config);

  const dialog = document.createElement('ix-dialog');
  dialog.appendChild(message);
  const dialogRef = await getCoreDelegate().attachView(dialog);

  dialogRef.addEventListener('dialogClose', (event: CustomEvent<T>) => {
    onMessageAction.emit(event.detail);
    dialogRef.remove();
  });

  dialogRef.addEventListener('dialogDismiss', () => {
    dialogRef.remove();
  });

  return onMessageAction;
}

export async function showModal<T>(
  config: ModalConfig<T>
): Promise<ModalInstance<T>> {
  const delegate = resolveDelegate();
  let dialogRef: HTMLIxDialogElement;
  const onClose = new TypedEvent<T>();
  const onDismiss = new TypedEvent<T>();

  if (typeof config.content === 'string') {
    const dialog = document.createElement('ix-dialog');
    dialog.innerText = config.content;
    dialogRef = await getCoreDelegate().attachView(dialog);
  }

  if (
    config.content instanceof HTMLElement &&
    config.content.tagName !== 'IX-DIALOG'
  ) {
    const dialog = document.createElement('ix-dialog');
    dialog.appendChild(config.content);
    dialogRef = await getCoreDelegate().attachView(dialog);
  }

  if (!dialogRef) {
    dialogRef = await delegate.attachView<HTMLIxDialogElement>(config.content);
  }

  Object.assign(dialogRef, config);
  dialogRef.showModal();
  dialogRef.addEventListener('dialogClose', async ({ detail }: CustomEvent) => {
    onClose.emit(detail);
    await delegate.removeView(dialogRef);
  });

  dialogRef.addEventListener(
    'dialogDismiss',
    async ({ detail }: CustomEvent) => {
      onDismiss.emit(detail);
      await delegate.removeView(dialogRef);
    }
  );

  return {
    htmlElement: dialogRef,
    onClose,
    onDismiss,
  };
}
