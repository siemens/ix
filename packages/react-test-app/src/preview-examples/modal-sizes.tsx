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
            Modal with size {size}
          </IxButton>
        </Modal>
      ),
    });
  };

  const styles = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    width: 'auto',
    margin: '0.25rem',
  };

  const buttonStyles = {
    marginBottom: '0.5rem'
  };

  return (
    <div className="modal-sizes-example" style={styles}>
      <IxButton onClick={() => open('360')} style={buttonStyles}>Show modal size 360</IxButton>
      <IxButton onClick={() => open('480')} style={buttonStyles}>Show modal size 480</IxButton>
      <IxButton onClick={() => open('600')} style={buttonStyles}>Show modal size 600</IxButton>
      <IxButton onClick={() => open('720')} style={buttonStyles}>Show modal size 720</IxButton>
      <IxButton onClick={() => open('840')} style={buttonStyles}>Show modal size 840</IxButton>
      <IxButton onClick={() => open('full-width')} style={buttonStyles}>
        Show modal size full-width
      </IxButton>
      <IxButton onClick={() => open('full-screen')} style={buttonStyles}>
        Show modal size full-screen
      </IxButton>
    </div>
  );
};
