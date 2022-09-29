import type { Components, JSX } from "../types/components";

interface IxModalExample extends Components.IxModalExample, HTMLElement {}
export const IxModalExample: {
  prototype: IxModalExample;
  new (): IxModalExample;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
