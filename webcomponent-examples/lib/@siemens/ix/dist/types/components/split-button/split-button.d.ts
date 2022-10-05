import { Placement } from '@popperjs/core';
import { EventEmitter } from '../../stencil-public-runtime';
import { Buttons } from '../utils/button-variants';
export declare class SplitButton {
  hostElement: HTMLIxSplitButtonElement;
  /**
   * Color variant of button
   */
  variant: Buttons;
  /**
   * Button outline variant
   */
  outline: boolean;
  /**
   * Button invisible
   *
   * @deprecated use ghost property
   */
  invisible: boolean;
  /**
   * Button invisible
   */
  ghost: boolean;
  /**
   * Button label
   */
  label: string;
  /**
   * Button icon
   */
  icon: string;
  /**
   * Splitbutton icon
   */
  splitIcon: string;
  /**
   * Disabled
   */
  disabled: boolean;
  /**
   * Placement of the dropdown
   */
  placement: Placement;
  toggle: boolean;
  /**
   * Button clicked
   */
  buttonClick: EventEmitter<MouseEvent>;
  private popover;
  private popperInstance;
  get splitItems(): HTMLIxSplitButtonItemElement[];
  private clickOutside;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private toggleDropdown;
  render(): any;
}
