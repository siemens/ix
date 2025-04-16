import {
  IxButton,
  IxModalContent,
  IxModalFooter,
  IxModalHeader,
  Modal,
  ModalRef,
  showModal,
  IxInput,
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
        Create Resource
      </IxModalHeader>
      <IxModalContent>
        <form
          id="create-resource-form"
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <IxInput label="Name" type="text" id="name" name="name"></IxInput>
        </form>
      </IxModalContent>
      <IxModalFooter>
        <IxButton outline onClick={() => dismiss()}>
          Cancel
        </IxButton>
        <IxButton form="create-resource-form" type="submit">
          Submit
        </IxButton>
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

  return <IxButton onClick={show}>Show modal</IxButton>;
};
