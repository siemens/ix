import type { Components, JSX } from "../types/components";

interface IxGroupContextMenu extends Components.IxGroupContextMenu, HTMLElement {}
export const IxGroupContextMenu: {
  prototype: IxGroupContextMenu;
  new (): IxGroupContextMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
