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
  close: (result: any) => void;
  dismiss: (result?: any) => void;
}

export const Modal = React.forwardRef<
  ModalRef,
  React.PropsWithChildren<{
    onClose?: (result: any) => void;
    onDismiss?: (result?: any) => void;
  }>
>((props, ref) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    close: (result: any) => {
      closeModal(modalRef.current!, result);
    },
    dismiss: (result?: any) => {
      dismissModal(modalRef.current!, result);
    },
  }));

  return <div ref={modalRef}>{props.children}</div>;
});
