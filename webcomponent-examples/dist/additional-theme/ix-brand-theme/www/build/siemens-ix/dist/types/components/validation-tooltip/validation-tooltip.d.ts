import { Placement } from '../dropdown/placement';
declare type Position = {
  x: number;
  y: number;
};
/**
 * @slot tooltip-message - Custom tooltip message with html support
 */
export declare class ValidationTooltip {
  hostElement: HTMLIxValidationTooltipElement;
  /**
   * Message of the tooltip
   */
  message: string;
  /**
   * Placement of the tooltip
   */
  placement: Placement;
  isInputValid: boolean;
  tooltipPosition: Position;
  arrowPosition: Position;
  private onSubmitBind;
  private onInputFocusBind;
  private autoUpdateCleanup;
  private observer;
  get arrow(): HTMLElement;
  get inputElement(): HTMLInputElement;
  get formElement(): HTMLFormElement;
  get tooltipElement(): HTMLElement;
  private destoryAutoUpdate;
  private applyTooltipPosition;
  componentDidLoad(): void;
  private onInputFocus;
  private onSubmit;
  disconnectedCallback(): void;
  validationChanged(): void;
  render(): any;
}
export {};
