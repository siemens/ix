import type { Components, JSX } from "../types/components";

interface IxTree extends Components.IxTree, HTMLElement {}
export const IxTree: {
  prototype: IxTree;
  new (): IxTree;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
