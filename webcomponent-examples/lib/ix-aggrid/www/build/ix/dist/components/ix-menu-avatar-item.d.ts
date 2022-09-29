import type { Components, JSX } from "../types/components";

interface IxMenuAvatarItem extends Components.IxMenuAvatarItem, HTMLElement {}
export const IxMenuAvatarItem: {
  prototype: IxMenuAvatarItem;
  new (): IxMenuAvatarItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
