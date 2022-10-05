import type { Components, JSX } from "../types/components";

interface IxMenuItem extends Components.IxMenuItem, HTMLElement {}
export const IxMenuItem: {
  prototype: IxMenuItem;
  new (): IxMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
