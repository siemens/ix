import type { Components, JSX } from "../types/components";

interface IxSiemensLogo extends Components.IxSiemensLogo, HTMLElement {}
export const IxSiemensLogo: {
    prototype: IxSiemensLogo;
    new (): IxSiemensLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
