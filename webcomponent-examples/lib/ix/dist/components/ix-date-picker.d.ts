import type { Components, JSX } from "../types/components";

interface IxDatePicker extends Components.IxDatePicker, HTMLElement {}
export const IxDatePicker: {
  prototype: IxDatePicker;
  new (): IxDatePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
