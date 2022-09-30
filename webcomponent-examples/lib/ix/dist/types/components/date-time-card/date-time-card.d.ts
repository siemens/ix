export declare type DateTimeCardCorners = 'rounded' | 'left' | 'right';
export declare class DateTimeCard {
  hostElement: HTMLIxDateTimeCardElement;
  /**
   * set styles
   */
  individual: boolean;
  /**
   * Set corners style
   */
  corners: DateTimeCardCorners;
  private cardClasses;
  render(): any;
}
