/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MessageContent } from '../modal-message/modal-message';
import { IxModalSize } from '../modal/modal';
import { getCoreDelegate, resolveDelegate } from './delegate';
import { NotificationColor } from './notification-color';
import { TypedEvent } from './typed-event';

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
  htmlElement: HTMLIxModalElement;
  onClose: TypedEvent<TReason>;
  onDismiss: TypedEvent<TReason>;
}

function getIxModal(element: Element) {
  return element.closest('ix-modal');
}

export function closeModal<TClose = any>(
  element: Element,
  closeResult: TClose
) {
  const dialog = getIxModal(element);
  if (dialog) {
    dialog.closeModal(closeResult);
    return;
  }
}

export function dismissModal(element: Element, dismissResult?: any) {
  const dialog = getIxModal(element);
  if (dialog) {
    dialog.dismissModal(dismissResult);
    return;
  }
}

export async function showMessage<T>(config: MessageContent) {
  const onMessageAction = new TypedEvent<T>();
  const message = document.createElement('ix-modal-message');
  Object.assign(message, config);

  const dialog = document.createElement('ix-modal');
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
  let dialogRef: HTMLIxModalElement;
  const onClose = new TypedEvent<T>();
  const onDismiss = new TypedEvent<T>();

  if (typeof config.content === 'string') {
    const dialog = document.createElement('ix-modal');
    dialog.innerText = config.content;
    dialogRef = await getCoreDelegate().attachView(dialog);
  }

  if (
    config.content instanceof HTMLElement &&
    config.content.tagName !== 'IX-MODAL'
  ) {
    const dialog = document.createElement('ix-modal');
    dialog.appendChild(config.content);
    dialogRef = await getCoreDelegate().attachView(dialog);
  }

  if (!dialogRef) {
    dialogRef = await delegate.attachView<HTMLIxModalElement>(config.content);
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
