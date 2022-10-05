import type { Components, JSX } from "../types/components";

interface IxIcon extends Components.IxIcon, HTMLElement {}
export const IxIcon: {
  prototype: IxIcon;
  new (): IxIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
