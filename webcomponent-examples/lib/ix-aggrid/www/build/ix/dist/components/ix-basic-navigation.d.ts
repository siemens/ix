import type { Components, JSX } from "../types/components";

interface IxBasicNavigation extends Components.IxBasicNavigation, HTMLElement {}
export const IxBasicNavigation: {
  prototype: IxBasicNavigation;
  new (): IxBasicNavigation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
