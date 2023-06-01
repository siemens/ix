import type { Components, JSX } from "../types/components";

interface IxMenuAvatar extends Components.IxMenuAvatar, HTMLElement {}
export const IxMenuAvatar: {
  prototype: IxMenuAvatar;
  new (): IxMenuAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
