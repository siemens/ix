/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useContext, useState } from 'react';
import { IxDialog } from '../components';
import { IxContext } from '../context';

let modalId = 0;

export function useModal() {
  const [id] = useState('ix-modal-' + modalId++);
  const ctx = useContext(IxContext);
  const _id = 'ix-modal-' + id;

  return {
    id,
    showModal: (ModalContent: JSX.Element) => {
      ctx?.addOverlay(id, <IxDialog id={_id}>{ModalContent}</IxDialog>);
      setTimeout(() => {
        const modalRef = document.querySelector(
          `ix-dialog#${_id}`
        ) as HTMLDialogElement;

        modalRef.showModal();
      });
    },
    dismissModal: (modalId?: string) => {
      ctx?.removeOverlay(modalId ?? id);
    },
  };
}
