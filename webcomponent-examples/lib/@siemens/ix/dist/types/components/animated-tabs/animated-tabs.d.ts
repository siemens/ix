import { EventEmitter } from '../../stencil-public-runtime';
export declare class AnimatedTabs {
  hostElement: HTMLIxAnimatedTabsElement;
  tabs: HTMLIxAnimatedTabElement[];
  activeIndex: number;
  /**
   * @deprecated - For debugging purposes only
   */
  disableAnimations: boolean;
  /**
   * Current selected tab index
   */
  selectedIndex: number;
  /**
   * Placement of the tabs
   */
  tabPlacement: 'top' | 'bottom';
  /**
   * Tab navigated
   */
  tabClick: EventEmitter;
  private easing;
  private firstRender;
  private observer;
  onTabSelectionChange(newSelectionIndex: number, oldSelectionIndex: number): void;
  onMouseDown(): void;
  get animatedTabs(): HTMLIxAnimatedTabElement[];
  get tabsContainer(): Element;
  get contentContainer(): Element;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private disconnectCallback;
  private isSelected;
  private showTab;
  private hideTab;
  private slideOutLeft;
  private slideOutRight;
  private slideInLeft;
  private slideInRight;
  private updateTabAnimation;
  private onTabClick;
  private onTabMouseDown;
  render(): any;
}
