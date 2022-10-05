import type { Components, JSX } from "../types/components";

interface IxCounterPill extends Components.IxCounterPill, HTMLElement {}
export const IxCounterPill: {
  prototype: IxCounterPill;
  new (): IxCounterPill;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
