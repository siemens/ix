import type { Components, JSX } from "../types/components";

interface IxAgGrid extends Components.IxAgGrid, HTMLElement {}
export const IxAgGrid: {
  prototype: IxAgGrid;
  new (): IxAgGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
