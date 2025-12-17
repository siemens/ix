/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { IxModalSize } from '../../modal/modal.types';
import { getCoreDelegate, resolveDelegate } from '../delegate';
import { TypedEvent } from '../typed-event';

/**
 * Set accessibility attributes on modal element
 */
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
  /**
   * Enable modal animation
   */
  animation?: boolean;
  /**
   * ID of element describing the modal
   */
  ariaDescribedby?: string;
  /**
   * ID of element labeling the modal
   */
  ariaLabelledby?: string;
  /**
   * Show backdrop behind modal
   */
  backdrop?: boolean;
  /**
   * Dismiss modal on backdrop click
   */
  closeOnBackdropClick?: boolean;
  /**
   * Called before modal is dismissed
   */
  beforeDismiss?: (reason?: TReason) => boolean | Promise<boolean>;
  /**
   * Center modal vertically
   */
  centered?: boolean;
  /**
   * Element to attach modal to
   *
   * @deprecated This has no effect anymore and will be removed with 5.0.0
   */
  container?: string | HTMLElement;
  /**
   * Modal content
   */
  content: CONTENT | string;
  /**
   * Allow closing with Escape key
   *
   * @deprecated This has no effect anymore and will be removed with 5.0.0
   */
  keyboard?: boolean;
  /**
   * Modal size
   */
  size?: IxModalSize;
  /**
   * Modal title
   *
   * @deprecated This has no effect anymore and will be removed with 5.0.0
   */
  title?: string;
}

export interface ModalInstance<TReason = any> {
  /**
   * The Modal HTML Element
   */
  htmlElement: HTMLIxModalElement;
  /**
   * Event that fires when closing the modal
   */
  onClose: TypedEvent<TReason>;
  /**
   * Event that fires when dismissing the modal
   */
  onDismiss: TypedEvent<TReason>;
}

function getIxModal(element: Element) {
  return element.closest('ix-modal');
}

/**
 * Close closest ix-modal relative to a provided element
 */
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

/**
 * Dismiss closest ix-modal relative to a provided element
 */
export function dismissModal(element: Element, dismissResult?: any) {
  const dialog = getIxModal(element);
  if (dialog) {
    dialog.dismissModal(dismissResult);
    return;
  }
}

/**
 * Show modal with given configuration
 */
export async function showModal<T>(
  config: ModalConfig<T>
): Promise<ModalInstance<T>> {
  const delegate = resolveDelegate();
  let dialogRef: HTMLIxModalElement | undefined;
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

  requestAnimationFrame(() => {
    const autofocusElement = dialogRef.querySelector(
      '[autofocus],[auto-focus]'
    );

    if (autofocusElement) {
      (autofocusElement as HTMLIxButtonElement).focus();
    }
  });

  return {
    htmlElement: dialogRef,
    onClose,
    onDismiss,
  };
}
