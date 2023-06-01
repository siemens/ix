import type { Components, JSX } from "../types/components";

interface IxTimePicker extends Components.IxTimePicker, HTMLElement {}
export const IxTimePicker: {
  prototype: IxTimePicker;
  new (): IxTimePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
