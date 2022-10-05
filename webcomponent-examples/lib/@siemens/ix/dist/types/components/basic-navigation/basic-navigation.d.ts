export declare class BasicNavigation {
  hostElement: HTMLIxBasicNavigationElement;
  /**
   * Application name
   */
  applicationName: string;
  /**
   * Hide application header
   */
  hideHeader: boolean;
  get menu(): HTMLIxMenuElement;
  componentDidRender(): void;
  private appendMenu;
  private adjustMenuHeight;
  render(): any;
}
