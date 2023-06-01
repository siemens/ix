import type { Components, JSX } from "../types/components";

interface IxValidationTooltip extends Components.IxValidationTooltip, HTMLElement {}
export const IxValidationTooltip: {
  prototype: IxValidationTooltip;
  new (): IxValidationTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
