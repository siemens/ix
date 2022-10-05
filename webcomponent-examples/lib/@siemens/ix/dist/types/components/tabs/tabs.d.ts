export declare class Tabs {
  hostElement: HTMLIxTabsElement;
  /**
   * Set tab items to small size
   */
  small: boolean;
  /**
   * Set rounded tabs
   */
  rounded: boolean;
  /**
   * Set default selected tab by index
   */
  selected: number;
  /**
   * Set layout width style
   */
  layout: 'auto' | 'stretched';
  /**
   * Set placement style
   */
  placement: 'bottom' | 'top';
  totalItems: number;
  currentScrollAmount: number;
  scrollAmount: number;
  scrollActionAmount: number;
  private clickAction;
  onWindowResize(): number;
  private getTabs;
  private getTab;
  private getTabsWrapper;
  private showArrows;
  private showPreviousArrow;
  private showNextArrow;
  private getArrowStyle;
  private move;
  private moveTabToView;
  private setSelected;
  private clickTab;
  private dragStart;
  private dragMove;
  private dragStop;
  componentDidRender(): void;
  componentDidLoad(): void;
  render(): any;
}
