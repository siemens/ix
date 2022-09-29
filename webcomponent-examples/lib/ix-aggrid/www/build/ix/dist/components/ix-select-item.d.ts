import type { Components, JSX } from "../types/components";

interface IxSelectItem extends Components.IxSelectItem, HTMLElement {}
export const IxSelectItem: {
  prototype: IxSelectItem;
  new (): IxSelectItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
