import { EventEmitter } from '../../stencil-public-runtime';
export declare class MapNavigationOverlay {
  private static readonly slowTime;
  hostElement: HTMLIxMapNavigationOverlayElement;
  /**
   * Title of overlay
   */
  name: string;
  /**
   * Icon of overlay
   */
  icon: string;
  /**
   * Color of icon
   */
  color: string;
  /**
   * Event closed
   */
  closeClick: EventEmitter;
  componentWillLoad(): void;
  private closeOverlay;
  render(): any;
}
