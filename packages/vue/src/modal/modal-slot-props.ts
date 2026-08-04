export type ModalSlotProps = {
  closeModal: <T>(reason?: T) => void;
  dismissModal: <T>(reason?: T) => void;
};
