import type { Components, JSX } from "../types/components";

interface IxFilterChip extends Components.IxFilterChip, HTMLElement {}
export const IxFilterChip: {
  prototype: IxFilterChip;
  new (): IxFilterChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
