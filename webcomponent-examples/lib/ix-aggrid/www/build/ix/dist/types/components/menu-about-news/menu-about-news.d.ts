import { EventEmitter } from '../../stencil-public-runtime';
export declare class MenuAboutNews {
  /**
   * Show about news
   */
  show: boolean;
  /**
   * Title of the about news
   */
  label: string;
  /**
   *
   */
  i18nShowMore: string;
  /**
   * Subtitle of the about news
   */
  aboutItemLabel: string;
  /**
   * Bottom offset
   */
  offsetBottom: number;
  /**
   * Show More button is pressed
   */
  showMore: EventEmitter<MouseEvent>;
  /**
   * Popover closed
   */
  closePopover: EventEmitter<void>;
  /**
   * Internal
   */
  expanded: boolean;
  render(): any;
}
