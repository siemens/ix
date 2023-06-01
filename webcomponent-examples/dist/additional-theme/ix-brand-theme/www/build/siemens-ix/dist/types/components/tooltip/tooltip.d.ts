/**
 * @since 1.3.0
 */
export declare class Tooltip {
  /**
   * CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`
   */
  for: string;
  /**
   * Define if the user can access the tooltip via mouse.
   */
  interactive: boolean;
  /**
   * Title of the tooltip
   */
  titleContent: string;
  /**
   * Title icon of the tooltip
   */
  titleIcon: string;
  visible: boolean;
  hostElement: HTMLIxTooltipElement;
  private observer;
  private hideTooltipTimeout;
  private onMouseEnterBind;
  private onMouseLeaveBind;
  private disposeAutoUpdate?;
  private tooltipCloseTimeInMS;
  private get arrowElement();
  private destroyAutoUpdate;
  private showTooltip;
  private hideTooltip;
  private computeTooltipPosition;
  private queryAnchorElements;
  private registerTriggerListener;
  private registerTooltipListener;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
