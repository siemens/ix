import { EventEmitter } from '../../stencil-public-runtime';
import { Placement } from '../dropdown/placement';
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
   * @deprecated Will be removed in 2.0.0. Use ghost property
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
  private triggerElement;
  private dropdownElement;
  get splitItems(): HTMLIxSplitButtonItemElement[];
  private linkTriggerRef;
  componentDidLoad(): void;
  render(): any;
}
