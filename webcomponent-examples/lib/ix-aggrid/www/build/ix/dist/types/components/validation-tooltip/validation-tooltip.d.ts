import '@popperjs/core';
import { Placement } from '@popperjs/core';
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
  private popper?;
  private onSubmitBind;
  private onInputFocusBind;
  private observer;
  get arrow(): Element;
  get inputElement(): HTMLInputElement;
  get formElement(): HTMLFormElement;
  get tooltipElement(): HTMLElement;
  componentDidLoad(): void;
  private onInputFocus;
  private onSubmit;
  disconnectedCallback(): void;
  validationChanged(): void;
  render(): any;
}
