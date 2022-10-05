export declare class TabItem {
  /**
   * Set selected tab
   */
  selected: boolean;
  /**
   * Set disabled tab
   */
  disabled: boolean;
  /**
   * Set small size tab
   */
  small: boolean;
  /**
   * Set icon only tab
   */
  icon: boolean;
  /**
   * Set rounded tab
   */
  rounded: boolean;
  /**
   * Set counter value
   */
  counter: number;
  /**
   * Set layout width style
   */
  layout: 'auto' | 'stretched';
  /**
   * Set selected placement
   */
  placement: 'bottom' | 'top';
  private tabItemClasses;
  render(): any;
}
