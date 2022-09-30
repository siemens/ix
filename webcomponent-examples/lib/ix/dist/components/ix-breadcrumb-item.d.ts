import type { Components, JSX } from "../types/components";

interface IxBreadcrumbItem extends Components.IxBreadcrumbItem, HTMLElement {}
export const IxBreadcrumbItem: {
  prototype: IxBreadcrumbItem;
  new (): IxBreadcrumbItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
