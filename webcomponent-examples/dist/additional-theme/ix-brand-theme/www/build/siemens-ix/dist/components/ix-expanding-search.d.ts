import type { Components, JSX } from "../types/components";

interface IxExpandingSearch extends Components.IxExpandingSearch, HTMLElement {}
export const IxExpandingSearch: {
  prototype: IxExpandingSearch;
  new (): IxExpandingSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
