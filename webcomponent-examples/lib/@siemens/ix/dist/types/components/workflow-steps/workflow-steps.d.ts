import { EventEmitter } from '../../stencil-public-runtime';
export declare class WorkflowSteps {
  hostElement: HTMLIxWorkflowStepsElement;
  /**
   * Select orientation
   */
  vertical: boolean;
  /**
   * Select linear mode
   */
  linear: boolean;
  /**
   * Activate navigation click
   */
  clickable: boolean;
  /**
   * Activate navigation click
   */
  selectedIndex: number;
  /**
   * On step selected event
   */
  stepSelected: EventEmitter<number>;
  private getSteps;
  private deselectAll;
  componentDidRender(): void;
  componentWillRender(): void;
  render(): any;
}
