import type { Components, JSX } from "../types/components";

interface IxIconButton extends Components.IxIconButton, HTMLElement {}
export const IxIconButton: {
  prototype: IxIconButton;
  new (): IxIconButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
