import type { Components, JSX } from "../types/components";

interface IxMenuAboutItem extends Components.IxMenuAboutItem, HTMLElement {}
export const IxMenuAboutItem: {
  prototype: IxMenuAboutItem;
  new (): IxMenuAboutItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
