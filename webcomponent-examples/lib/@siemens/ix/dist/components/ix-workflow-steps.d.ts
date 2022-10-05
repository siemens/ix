import type { Components, JSX } from "../types/components";

interface IxWorkflowSteps extends Components.IxWorkflowSteps, HTMLElement {}
export const IxWorkflowSteps: {
  prototype: IxWorkflowSteps;
  new (): IxWorkflowSteps;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
