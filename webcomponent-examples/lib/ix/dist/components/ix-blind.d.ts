import type { Components, JSX } from "../types/components";

interface IxBlind extends Components.IxBlind, HTMLElement {}
export const IxBlind: {
  prototype: IxBlind;
  new (): IxBlind;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
