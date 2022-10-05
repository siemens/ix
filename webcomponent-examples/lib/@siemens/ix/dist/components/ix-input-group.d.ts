import type { Components, JSX } from "../types/components";

interface IxInputGroup extends Components.IxInputGroup, HTMLElement {}
export const IxInputGroup: {
  prototype: IxInputGroup;
  new (): IxInputGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
