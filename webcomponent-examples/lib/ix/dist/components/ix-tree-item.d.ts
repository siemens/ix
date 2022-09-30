import type { Components, JSX } from "../types/components";

interface IxTreeItem extends Components.IxTreeItem, HTMLElement {}
export const IxTreeItem: {
  prototype: IxTreeItem;
  new (): IxTreeItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
