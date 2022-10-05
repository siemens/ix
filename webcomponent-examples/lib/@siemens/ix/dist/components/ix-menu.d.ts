import type { Components, JSX } from "../types/components";

interface IxMenu extends Components.IxMenu, HTMLElement {}
export const IxMenu: {
  prototype: IxMenu;
  new (): IxMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
