import { EventEmitter } from '../../stencil-public-runtime';
export declare class Menu {
  hostElement: HTMLIxMenuElement;
  /**
   * Is settings tab visible
   */
  showSettings: boolean;
  /**
   * Is about tab visible
   */
  showAbout: boolean;
  /**
   * Show toggle between light and dark variant. Only if the provided theme have implemented both!
   */
  enableToggleTheme: boolean;
  /**
   * Is settings tab is visible
   */
  enableSettings: boolean;
  /**
   * Internal
   */
  enableMapExpand: boolean;
  /**
   * Should only be set if you use ix-menu standalone
   */
  applicationName: string;
  /**
   * Should only be set if you use ix-menu standalone
   */
  applicationDescription: string;
  /**
   * Maximum number of menu items to show in case enough vertical space is available.
   * Extra menu items will be collapsed to 'show more' menu item.
   */
  maxVisibleMenuItems: number;
  /**
   */
  i18nLegal: string;
  /**
   */
  i18nSettings: string;
  /**
   */
  i18nToggleTheme: string;
  /**
   */
  i18nExpand: string;
  /**
   */
  i18nCollapse: string;
  /**
   */
  i18nMore: string;
  /**
   * Expand menu
   */
  expand: boolean;
  /**
   * Menu expanded
   */
  expandChange: EventEmitter<boolean>;
  /**
   * Map Sidebar expanded
   */
  mapExpandChange: EventEmitter<boolean>;
  showMoreItems: boolean;
  visibleMenuItems: number;
  countMoreNotifications: number;
  mapExpand: boolean;
  activeTab: HTMLIxMenuItemElement;
  isMoreTabEmpty: boolean;
  private readonly domObserver;
  onWindowResize(): void;
  private handleNodeMutation;
  private onDomChange;
  private readonly isVisible;
  get popoverArea(): Element;
  get overlayContainer(): Element;
  get invisibleContainer(): Element;
  get menu(): Element;
  get menuItems(): Element[];
  get menuBottomItems(): Element[];
  get homeTab(): Element;
  get moreItemsDropdown(): HTMLElement;
  get isMoreItemsDropdownEmpty(): boolean;
  get moreItemsDropdownItems(): NodeListOf<Element>;
  get activeMoreTabContainer(): Element;
  get activeMoreTab(): Element;
  get aboutPopoverContainer(): HTMLElement;
  get aboutPopover(): HTMLIxMenuAboutNewsElement;
  get aboutTab(): HTMLElement;
  get about(): HTMLIxMenuAboutElement;
  get settings(): HTMLIxMenuSettingsElement;
  get isSettingsEmpty(): boolean;
  get avatarItem(): HTMLIxMenuAvatarElement;
  get tabsContainer(): HTMLDivElement;
  private showTab;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  componentWillRender(): void;
  componentDidRender(): void;
  private appendFragments;
  private resetActiveTab;
  private isMenuItemActive;
  private appendTabs;
  private appendAvatar;
  private getAboutPopoverVerticalPosition;
  private appendAboutNewsPopover;
  private appendSettings;
  private appendAbout;
  private getMoreNotificationsCount;
  private getAvailableHeight;
  private getMaxTabCount;
  /**
   * Toggle map sidebar expand
   * @param show
   */
  toggleMapExpand(show?: boolean): Promise<void>;
  private skipAllOverlayAnimations;
  private skipOverlayAnimationFor;
  /**
   * Toggle menu
   * @param show
   */
  toggleMenu(show?: boolean): Promise<void>;
  /**
   * Toggle Settings tabs
   * @param show
   */
  toggleSettings(show: boolean): Promise<void>;
  /**
   * Toggle About tabs
   * @param show
   */
  toggleAbout(show: boolean): Promise<void>;
  private resetOverlay;
  private showMoreButton;
  private getCollapseText;
  private getCollapseIcon;
  private isMenuItemClicked;
  render(): any;
}
