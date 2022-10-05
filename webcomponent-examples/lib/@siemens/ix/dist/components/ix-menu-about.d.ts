import type { Components, JSX } from "../types/components";

interface IxMenuAbout extends Components.IxMenuAbout, HTMLElement {}
export const IxMenuAbout: {
  prototype: IxMenuAbout;
  new (): IxMenuAbout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
