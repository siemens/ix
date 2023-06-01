import type { Components, JSX } from "../types/components";

interface IxModal extends Components.IxModal, HTMLElement {}
export const IxModal: {
  prototype: IxModal;
  new (): IxModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
