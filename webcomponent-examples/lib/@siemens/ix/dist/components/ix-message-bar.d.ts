import type { Components, JSX } from "../types/components";

interface IxMessageBar extends Components.IxMessageBar, HTMLElement {}
export const IxMessageBar: {
  prototype: IxMessageBar;
  new (): IxMessageBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
