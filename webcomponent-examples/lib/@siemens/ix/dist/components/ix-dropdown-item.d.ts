import type { Components, JSX } from "../types/components";

interface IxDropdownItem extends Components.IxDropdownItem, HTMLElement {}
export const IxDropdownItem: {
  prototype: IxDropdownItem;
  new (): IxDropdownItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
