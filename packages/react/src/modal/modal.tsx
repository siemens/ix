/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { closeModal, dismissModal } from '@siemens/ix';
import React, { useImperativeHandle, useRef } from 'react';

export interface ModalRef {
  close: <T = any>(result: T) => void;
  dismiss: <T = any>(result?: T) => void;
  modalElement: HTMLIxModalElement | null;
}

export const Modal = React.forwardRef<
  ModalRef,
  {
    onClose?: <T = any>(result: T) => void;
    onDismiss?: <T = any>(result?: T) => void;
    htmlElement?: HTMLElement;
    children: React.ReactNode;
  }
>((props, ref: React.ForwardedRef<ModalRef>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    let htmlElement: HTMLIxModalElement | null = null;
    if (wrapperRef.current) {
      htmlElement = wrapperRef.current.closest('ix-modal');
    }
    return {
      close: (result: unknown) => {
        const modalElement = wrapperRef.current;
        if (!modalElement) {
          console.error('Modal cannot find modal reference');
          return;
        }
        closeModal(modalElement, result);
      },
      dismiss: (result?: unknown) => {
        const modalElement = wrapperRef.current;
        if (!modalElement) {
          console.error('Modal cannot find modal reference');
          return;
        }
        dismissModal(modalElement, result);
      },
      modalElement: htmlElement,
    };
  });

  return <div ref={wrapperRef}>{props.children}</div>;
});
