import type { Components, JSX } from "../types/components";

interface IxDropdownButton extends Components.IxDropdownButton, HTMLElement {}
export const IxDropdownButton: {
  prototype: IxDropdownButton;
  new (): IxDropdownButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
