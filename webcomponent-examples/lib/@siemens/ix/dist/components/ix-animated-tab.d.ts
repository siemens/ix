import type { Components, JSX } from "../types/components";

interface IxAnimatedTab extends Components.IxAnimatedTab, HTMLElement {}
export const IxAnimatedTab: {
  prototype: IxAnimatedTab;
  new (): IxAnimatedTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
