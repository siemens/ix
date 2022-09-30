import type { Components, JSX } from "../types/components";

interface IxSelect extends Components.IxSelect, HTMLElement {}
export const IxSelect: {
  prototype: IxSelect;
  new (): IxSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
