import type { Components, JSX } from "../types/components";

interface IxEventList extends Components.IxEventList, HTMLElement {}
export const IxEventList: {
  prototype: IxEventList;
  new (): IxEventList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
