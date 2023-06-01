import type { Components, JSX } from "../types/components";

interface IxToggle extends Components.IxToggle, HTMLElement {}
export const IxToggle: {
  prototype: IxToggle;
  new (): IxToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
