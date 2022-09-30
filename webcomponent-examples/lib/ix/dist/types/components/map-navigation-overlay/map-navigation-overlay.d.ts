import { EventEmitter } from '../../stencil-public-runtime';
export declare class MapNavigationOverlay {
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
  render(): any;
}
