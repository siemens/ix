import type { Components, JSX } from "../types/components";

interface IxModalContainer extends Components.IxModalContainer, HTMLElement {}
export const IxModalContainer: {
  prototype: IxModalContainer;
  new (): IxModalContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
