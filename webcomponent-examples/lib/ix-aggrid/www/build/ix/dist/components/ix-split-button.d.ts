import type { Components, JSX } from "../types/components";

interface IxSplitButton extends Components.IxSplitButton, HTMLElement {}
export const IxSplitButton: {
  prototype: IxSplitButton;
  new (): IxSplitButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
