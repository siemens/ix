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
