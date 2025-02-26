'use client';
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useImperativeHandle, useRef } from 'react';
import IxModal from '../components/IxModal';

export interface ModalRef {
  close: <T = any>(result: T) => void;
  dismiss: <T = any>(result?: T) => void;
  modalElement: HTMLIxModalElement | null;
}

export const Modal = React.forwardRef<ModalRef, React.PropsWithChildren>(
  (props, ref) => {
    const wrapperRef = useRef<HTMLIxModalElement | null>(null);

    useImperativeHandle(ref, () => ({
      close(result: unknown) {
        wrapperRef.current?.closeModal(result);
      },
      dismiss(result?: unknown) {
        wrapperRef.current?.dismissModal(result);
      },
      modalElement: null,
    }));

    return <IxModal ref={wrapperRef}>{props.children}</IxModal>;
  }
);
