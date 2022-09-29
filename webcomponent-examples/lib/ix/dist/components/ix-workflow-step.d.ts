import type { Components, JSX } from "../types/components";

interface IxWorkflowStep extends Components.IxWorkflowStep, HTMLElement {}
export const IxWorkflowStep: {
  prototype: IxWorkflowStep;
  new (): IxWorkflowStep;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
