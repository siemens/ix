/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxModalSize } from '../../modal/modal';
import { getCoreDelegate, resolveDelegate } from '../delegate';
import { TypedEvent } from '../typed-event';

export function setA11yAttributes(element: HTMLElement, config: ModalConfig) {
  const ariaDescribedby = config.ariaDescribedby;
  const ariaLabelledby = config.ariaLabelledby;

  delete config['ariaDescribedby'];
  delete config['ariaLabelledby'];

  if (ariaDescribedby) {
    element.setAttribute('aria-describedby', ariaDescribedby);
  }

  if (ariaLabelledby) {
    element.setAttribute('aria-labelledby', ariaLabelledby);
  }
}

export interface ModalConfig<TReason = any, CONTENT = any> {
  animation?: boolean;
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  backdrop?: boolean;
  closeOnBackdropClick?: boolean;
  beforeDismiss?: (reason?: TReason) => boolean | Promise<boolean>;
  centered?: boolean;
  container?: string | HTMLElement;
  content: CONTENT | string;
  keyboard?: boolean;
  size?: IxModalSize;
  title?: string;
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

export async function showModal<T>(
  config: ModalConfig<T>
): Promise<ModalInstance<T>> {
  const delegate = resolveDelegate();
  let dialogRef: HTMLIxModalElement | null = null;
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

  setA11yAttributes(dialogRef, config);
  Object.assign(dialogRef, config);

  await dialogRef.showModal();
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
