/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './modal-sizes.scoped.css';

import { IxModalSize } from '@siemens/ix';
import { IxButton, Modal, ModalRef, showModal } from '@siemens/ix-react';
import { useRef } from 'react';

export default () => {
  const modalRef = useRef<ModalRef>(null);

  const open = (size: IxModalSize) => {
    showModal({
      size: size,
      content: (
        <Modal ref={modalRef}>
          <IxButton onClick={() => modalRef.current?.close(null)}>
            Modal with size {size}
          </IxButton>
        </Modal>
      ),
    });
  };

  return (
    <div className="modal-sizes">
      <IxButton onClick={() => open('360')}>Show modal size 360</IxButton>
      <IxButton onClick={() => open('480')}>Show modal size 480</IxButton>
      <IxButton onClick={() => open('600')}>Show modal size 600</IxButton>
      <IxButton onClick={() => open('720')}>Show modal size 720</IxButton>
      <IxButton onClick={() => open('840')}>Show modal size 840</IxButton>
      <IxButton onClick={() => open('full-width')}>
        Show modal size full-width
      </IxButton>
      <IxButton onClick={() => open('full-screen')}>
        Show modal size full-screen
      </IxButton>
    </div>
  );
};
