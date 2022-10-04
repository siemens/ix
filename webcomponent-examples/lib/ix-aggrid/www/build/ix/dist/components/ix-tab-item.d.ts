import type { Components, JSX } from "../types/components";

interface IxTabItem extends Components.IxTabItem, HTMLElement {}
export const IxTabItem: {
  prototype: IxTabItem;
  new (): IxTabItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
