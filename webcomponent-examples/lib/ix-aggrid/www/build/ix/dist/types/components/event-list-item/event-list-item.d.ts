import { EventEmitter } from '../../stencil-public-runtime';
export declare class EventListItem {
  el: HTMLIxEventListItemElement;
  /**
   * Color of the status indicator.
   * Allowed values are all Core UI color names.
   */
  color: string;
  /**
   * Show event list item as selected
   */
  selected: boolean;
  /**
   * Disable event list item
   */
  disabled: boolean;
  /**
   * Show chevron on right side of the event list item
   */
  chevron: boolean;
  /**
   * Opacity of the status indicator.
   * Defaults to 1.0
   *
   * @deprecated Will be removed in 7.0.0. Use color with alpha value.
   */
  opacity: number;
  /**
   * Event list item click
   */
  itemClick: EventEmitter;
  handleItemClick(): void;
  render(): any;
}
