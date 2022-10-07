<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/react-test-app/src/preview-examples/modal.tsx -->
```tsx
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxButton,
  IxIconButton,
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
      <div className="modal-header">
        Message headline
        <IxIconButton
          data-button-close
          ghost
          icon="close"
          onClick={() => dismiss()}
        ></IxIconButton>
      </div>
      <div className="modal-body">Message text lorem ipsum</div>
      <div className="modal-footer">
        <IxButton outline onClick={() => dismiss()}>
          Cancel
        </IxButton>
        <IxButton onClick={() => close()}>OK</IxButton>
      </div>
    </Modal>
  );
}

export const ModalExample: React.FC = () => {
  function show() {
    showModal({
      title: 'test',
      content: <CustomModal />,
    });
  }

  return (
    <>
      <IxButton onClick={show}>Show modal</IxButton>
    </>
  );
};
```
