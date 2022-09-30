import { EventEmitter } from '../../stencil-public-runtime';
export declare class GroupItem {
  hostElement: HTMLIxGroupItemElement;
  /**
   * Group item icon
   */
  icon: string;
  /**
   * Group item text
   */
  text: string;
  /**
   * Group item secondary text
   */
  secondaryText: string;
  /**
   * Supress the selection of the group
   */
  suppressSelection: boolean;
  /**
   * Show selected state
   */
  selected: boolean;
  /**
   * The elements tabindex attribute will get set accordingly.
   * If true tabindex will be 0, -1 otherwise.
   */
  focusable: boolean;
  /**
   * Selection changed
   */
  selectedChanged: EventEmitter<HTMLIxGroupItemElement>;
  /**
   * Index
   */
  index: number;
  clickListen(): void;
  render(): any;
}
