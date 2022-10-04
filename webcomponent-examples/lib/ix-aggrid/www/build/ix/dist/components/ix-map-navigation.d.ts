import type { Components, JSX } from "../types/components";

interface IxMapNavigation extends Components.IxMapNavigation, HTMLElement {}
export const IxMapNavigation: {
  prototype: IxMapNavigation;
  new (): IxMapNavigation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
