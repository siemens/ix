import type { Components, JSX } from "../types/components";

interface IxGroup extends Components.IxGroup, HTMLElement {}
export const IxGroup: {
  prototype: IxGroup;
  new (): IxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
