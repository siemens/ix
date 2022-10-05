export declare class WorkflowStep {
  hostElement: HTMLIxWorkflowStepElement;
  /**
   * Select orientation
   */
  vertical: boolean;
  /**
   * Set disabled
   */
  disabled: boolean;
  /**
   * Set status
   */
  status: 'open' | 'success' | 'done' | 'warning' | 'error';
  /**
   * Activate navigation click
   */
  clickable: boolean;
  /**
   * Set selected
   */
  selected: boolean;
  /**
   * Activate navigation click
   */
  position: 'first' | 'last' | 'undefined';
  iconName: 'circle' | 'circle-dot' | 'success' | 'warning' | 'error';
  iconColor: string;
  private customIconSlot;
  private select;
  selectedHandler(): void;
  watchPropHandler(): void;
  componentDidLoad(): void;
  render(): any;
}
