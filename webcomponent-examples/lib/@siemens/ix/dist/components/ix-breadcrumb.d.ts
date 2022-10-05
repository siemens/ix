import type { Components, JSX } from "../types/components";

interface IxBreadcrumb extends Components.IxBreadcrumb, HTMLElement {}
export const IxBreadcrumb: {
  prototype: IxBreadcrumb;
  new (): IxBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
