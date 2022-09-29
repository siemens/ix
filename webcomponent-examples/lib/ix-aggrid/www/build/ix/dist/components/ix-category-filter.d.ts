import type { Components, JSX } from "../types/components";

interface IxCategoryFilter extends Components.IxCategoryFilter, HTMLElement {}
export const IxCategoryFilter: {
  prototype: IxCategoryFilter;
  new (): IxCategoryFilter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
