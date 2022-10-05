import { Buttons } from '../utils/button-variants';
export declare class Button {
  /**
   * Button varaint
   */
  variant: Buttons;
  /**
   * Outline button
   */
  outline: boolean;
  /**
   * Invisible button
   *
   * @deprecated use ghost property
   */
  invisible: boolean;
  /**
   * Button with no background or outline
   */
  ghost: boolean;
  /**
   * Show button as selected. Should be used with outline or invisible
   */
  selected: boolean;
  /**
   * Disable the button
   */
  disabled: boolean;
  /**
   * Type of the button
   */
  type: 'button' | 'submit';
  render(): any;
}
