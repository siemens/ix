<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/modal.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
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
