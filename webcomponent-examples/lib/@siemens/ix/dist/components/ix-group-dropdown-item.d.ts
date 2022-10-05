import type { Components, JSX } from "../types/components";

interface IxGroupDropdownItem extends Components.IxGroupDropdownItem, HTMLElement {}
export const IxGroupDropdownItem: {
  prototype: IxGroupDropdownItem;
  new (): IxGroupDropdownItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
