import type { Components, JSX } from "../types/components";

interface IxDropdown extends Components.IxDropdown, HTMLElement {}
export const IxDropdown: {
  prototype: IxDropdown;
  new (): IxDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
