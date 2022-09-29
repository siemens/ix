import type { Components, JSX } from "../types/components";

interface IxMenuSettingsItem extends Components.IxMenuSettingsItem, HTMLElement {}
export const IxMenuSettingsItem: {
  prototype: IxMenuSettingsItem;
  new (): IxMenuSettingsItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
