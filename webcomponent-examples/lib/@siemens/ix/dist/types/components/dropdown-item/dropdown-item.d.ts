import { EventEmitter } from '../../stencil-public-runtime';
export declare class DropdownItem {
  hostElement: HTMLIxDropdownItemElement;
  /**
   * Label of dropdown item
   */
  label: string;
  /**
   * Icon of dropdown item
   */
  icon: string;
  /**
   * Display hover state
   */
  hover: boolean;
  /**
   * Disable item and remove event listeners
   */
  disabled: boolean;
  /**
   * Whether the item is checked or not. If true a checkmark will mark the item as checked.
   */
  checked: boolean;
  /**
   * Click on item
   */
  itemClick: EventEmitter<HTMLIxDropdownItemElement>;
  /**
   * Internal usage only
   */
  emitItemClick(): Promise<void>;
  render(): any;
}
