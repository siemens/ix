/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxModalSize } from '@siemens/ix';
import { IxButton, Modal, ModalRef, showModal } from '@siemens/ix-react';
import React, { useRef } from 'react';
export default () => {
  const modalRef = useRef<ModalRef>(null);

  const open = (size: IxModalSize) => {
    showModal({
      size: size,
      content: (
        <Modal ref={modalRef}>
          <IxButton onClick={() => modalRef.current?.close(null)}>
            Modal with size = {size}
          </IxButton>
        </Modal>
      ),
    });
  };

  return (
    <div className="modal-sizes-example">
      <IxButton onClick={() => open('360')}>Show Modal size 360</IxButton>
      <IxButton onClick={() => open('480')}>Show Modal size 480</IxButton>
      <IxButton onClick={() => open('600')}>Show Modal size 600</IxButton>
      <IxButton onClick={() => open('720')}>Show Modal size 720</IxButton>
      <IxButton onClick={() => open('840')}>Show Modal size 840</IxButton>
      <IxButton onClick={() => open('full-width')}>
        Show Modal size full-width
      </IxButton>
    </div>
  );
};
