import { Buttons } from '../utils/button-variants';
/**
 * @since 1.3.0
 */
export declare class DropdownButton {
  /**
   * Button varaint
   */
  variant: Buttons;
  /**
   * Outline button
   */
  outline: boolean;
  /**
   * Button with no background or outline
   */
  ghost: boolean;
  /**
   * Active button
   */
  active: boolean;
  /**
   * Disable button
   */
  disabled: boolean;
  /**
   * Set label
   */
  label: string;
  /**
   * Button icon
   */
  icon: string;
  dropdownAnchor: HTMLElement;
  private getTriangle;
  render(): any;
}
