export declare class EventList {
  private readonly mutationObserver;
  private static readonly fadeOutDuration;
  private static readonly fadeInDuration;
  el: HTMLIxEventListElement;
  /**
   * Determines the height of list items.
   * This can either be one of two predefined sizes ('S' or 'L') or an absolute pixel value.
   * In case a number is supplied it will get converted to rem internally.
   * Defaults to 'S'.
   */
  itemHeight: 'S' | 'L' | number;
  /**
   * Make event-list items more compact
   */
  compact: boolean;
  /**
   * Animate state change transitions. Defaults to 'true'.
   */
  animated: boolean;
  /**
   * Display a chevron icon in list items. Defaults to 'false'
   */
  chevron: boolean;
  componentDidLoad(): void;
  private onMutation;
  private setCustomHeight;
  private triggerFadeOut;
  private triggerFadeIn;
  render(): any;
}
