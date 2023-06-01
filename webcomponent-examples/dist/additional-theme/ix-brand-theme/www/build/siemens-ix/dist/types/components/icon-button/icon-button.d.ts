import { Button } from '../button/button';
export declare class IconButton implements Button {
  /**
   * Variant of button
   */
  variant: 'Primary' | 'Secondary';
  /**
   * Button outline
   */
  outline: boolean;
  /**
   * Button invisible
   *
   * @deprecated Use ghost property
   */
  invisible: boolean;
  /**
   * Button invisible
   */
  ghost: boolean;
  /**
   * Button in oval shape
   */
  oval: boolean;
  /**
   * Button icon
   */
  icon: string;
  /**
   * Size of icon in button
   */
  size: '32' | '24' | '16' | '12';
  /**
   * Color of icon in  button
   */
  color: string;
  /**
   * Selected state only working with outline or invisible
   */
  selected: boolean;
  /**
   * Disabled
   */
  disabled: boolean;
  /**
   * Type of the button
   */
  type: 'button' | 'submit';
  private getIconButtonClasses;
  render(): any;
}
