import type { Components, JSX } from "../types/components";

interface IxButton extends Components.IxButton, HTMLElement {}
export const IxButton: {
  prototype: IxButton;
  new (): IxButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
