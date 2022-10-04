import type { Components, JSX } from "../types/components";

interface IxToast extends Components.IxToast, HTMLElement {}
export const IxToast: {
  prototype: IxToast;
  new (): IxToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
