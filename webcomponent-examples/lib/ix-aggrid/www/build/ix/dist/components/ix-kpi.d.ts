import type { Components, JSX } from "../types/components";

interface IxKpi extends Components.IxKpi, HTMLElement {}
export const IxKpi: {
  prototype: IxKpi;
  new (): IxKpi;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
