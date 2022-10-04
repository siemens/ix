import type { Components, JSX } from "../types/components";

interface IxMenuSettings extends Components.IxMenuSettings, HTMLElement {}
export const IxMenuSettings: {
  prototype: IxMenuSettings;
  new (): IxMenuSettings;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
