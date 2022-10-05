import { EventEmitter } from '../../stencil-public-runtime';
export declare class SplitButtonItem {
  /**
   * Dropdown icon
   */
  icon: string;
  /**
   * Dropdown label
   */
  label: string;
  /**
   * Dropdown item clicked
   */
  itemClick: EventEmitter<MouseEvent>;
  hostElement: HTMLIxSplitButtonItemElement;
  render(): any;
}
