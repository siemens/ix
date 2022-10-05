import type { Components, JSX } from "../types/components";

interface MyComponent extends Components.MyComponent, HTMLElement {}
export const MyComponent: {
  prototype: MyComponent;
  new (): MyComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
