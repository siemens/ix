import type { Components, JSX } from "../types/components";

interface IxGroupItem extends Components.IxGroupItem, HTMLElement {}
export const IxGroupItem: {
  prototype: IxGroupItem;
  new (): IxGroupItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
