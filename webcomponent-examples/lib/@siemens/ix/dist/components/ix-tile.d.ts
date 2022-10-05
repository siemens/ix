import type { Components, JSX } from "../types/components";

interface IxTile extends Components.IxTile, HTMLElement {}
export const IxTile: {
  prototype: IxTile;
  new (): IxTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
