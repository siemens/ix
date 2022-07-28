/**
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { TypedEvent } from '../utils/typed-event';
import { ModalContainer } from '../..';
import { Modal } from './cw-modal';

export interface ModalConfig {
  animation?: boolean;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  backdrop?: boolean | 'static';
  backdropClass?: string;
  beforeDismiss?: () => boolean | Promise<boolean>;
  centered?: boolean;
  container?: string | HTMLElement;
  content: string | HTMLElement;
  keyboard?: boolean;
  modalDialogClass?: string;
  scrollable?: boolean;
  size?: 'sm' | 'lg' | 'xl';
  title: string;
  windowClass?: string;
}

export interface ModalContainerEvents {
  onShowModal: TypedEvent<ModalConfig>;
}

function getModalContext() {
  if (!ModalContainer.modalEvents) {
    throw Error('No modal container found');
  }

  return ModalContainer.modalEvents;
}

function modal(config: ModalConfig): Promise<Modal> {
  const result = new Promise<Modal>(resolve => {
    getModalContext().onModalOpened.on(m => resolve(m));
  });
  getModalContext().onShowModal.emit(config);
  return result;
}

export { modal };
