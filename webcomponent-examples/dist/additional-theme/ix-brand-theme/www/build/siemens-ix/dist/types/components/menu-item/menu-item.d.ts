export declare class MenuItem {
  /**
   * Move the Tab to a top position.
   */
  home: boolean;
  /**
   * Caution: this is no longer working. Please use slot="bottom" instead.
   *
   * Place tab on bottom
   *
   * @deprecated Will be removed in 2.0.0. Replaced by slot based implementation
   */
  bottom: boolean;
  /**
   * Icon name from @siemens/ix-icons
   */
  tabIcon: string;
  /**
   * Show notification cound on tab
   */
  notifications: number;
  /**
   * State to display active
   */
  active: boolean;
  /**
   * Disable tab and remove event handlers
   */
  disabled: boolean;
  hostElement: HTMLIxMenuItemElement;
  title: string;
  get tabLabel(): Element;
  componentDidRender(): void;
  render(): any;
}
