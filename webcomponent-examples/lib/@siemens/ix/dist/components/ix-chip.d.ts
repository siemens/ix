import type { Components, JSX } from "../types/components";

interface IxChip extends Components.IxChip, HTMLElement {}
export const IxChip: {
  prototype: IxChip;
  new (): IxChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
