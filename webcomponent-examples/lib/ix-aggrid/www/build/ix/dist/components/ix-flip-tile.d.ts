import type { Components, JSX } from "../types/components";

interface IxFlipTile extends Components.IxFlipTile, HTMLElement {}
export const IxFlipTile: {
  prototype: IxFlipTile;
  new (): IxFlipTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
