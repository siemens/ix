/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxButton,
  IxModalContent,
  IxModalFooter,
  IxModalHeader,
  Modal,
  ModalRef,
  showModal,
} from '@siemens/ix-react';
import { useRef } from 'react';

function CustomModal() {
  const modalRef = useRef<ModalRef>(null);

  const close = () => {
    modalRef.current?.close('close payload!');
  };
  const dismiss = () => {
    modalRef.current?.dismiss('dismiss payload');
  };

  return (
    <Modal ref={modalRef}>
      <IxModalHeader onCloseClick={() => dismiss()}>
        Message headline
      </IxModalHeader>
      <IxModalContent>Message text lorem ipsum</IxModalContent>
      <IxModalFooter>
        <IxButton outline onClick={() => dismiss()}>
          Cancel
        </IxButton>
        <IxButton onClick={() => close()}>OK</IxButton>
      </IxModalFooter>
    </Modal>
  );
}

export default () => {
  async function show() {
    await showModal({
      content: <CustomModal />,
    });
  }

  return (
    <>
      <IxButton onClick={show}>Show modal</IxButton>
    </>
  );
};
