import type { Components, JSX } from "../types/components";

interface IxTooltip extends Components.IxTooltip, HTMLElement {}
export const IxTooltip: {
  prototype: IxTooltip;
  new (): IxTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
