import { EventEmitter } from '../../stencil-public-runtime';
export declare class MapNavigation {
  private static readonly defaultTime;
  private static readonly slowTime;
  hostElement: HTMLIxMapNavigationElement;
  /**
   * Application name
   */
  applicationName: string;
  /**
   * Navigation title
   */
  navigationTitle: string;
  /**
   * Hide the sidebar context menu button when set to true
   */
  hideContextMenu: boolean;
  isSidebarOpen: boolean;
  /**
   * Navigation toggled
   */
  navigationToggled: EventEmitter<boolean>;
  /**
   * Context menu clicked
   */
  contextMenuClick: EventEmitter<void>;
  get menu(): HTMLIxMenuElement;
  get menuOverlay(): Element;
  get mapNavMenu(): Element;
  get sidebar(): Element;
  get overlay(): Element;
  componentDidRender(): void;
  private appendMenu;
  private toggleSidebar;
  private closeSidebar;
  private openSidebar;
  /**
   * Open a overlay inside content area
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   *
   * @param name
   * @param component
   * @param icon
   * @param color
   */
  openOverlay(name: string, component: HTMLElement, icon?: string, color?: string): Promise<void>;
  /**
   * Close current shown overlay
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   */
  closeOverlay(): Promise<void>;
  render(): any;
}
