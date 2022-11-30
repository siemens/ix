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
}

export const Modal = React.forwardRef<
  ModalRef,
  React.PropsWithChildren<{
    onClose?: <T = any>(result: T) => void;
    onDismiss?: <T = any>(result?: T) => void;
  }>
>((props, ref) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    close: (result: unknown) => {
      const modalElement = modalRef.current;
      if (!modalElement) {
        console.error('Modal cannot find modal reference');
        return;
      }
      closeModal(modalElement, result);
    },
    dismiss: (result?: unknown) => {
      const modalElement = modalRef.current;
      if (!modalElement) {
        console.error('Modal cannot find modal reference');
        return;
      }
      dismissModal(modalElement, result);
    },
  }));

  return <div ref={modalRef}>{props.children}</div>;
});
