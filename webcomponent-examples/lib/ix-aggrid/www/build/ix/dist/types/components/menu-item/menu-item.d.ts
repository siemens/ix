export declare class MenuItem {
  /**
   * Move the Tab to a top position.
   */
  home: boolean;
  /**
   * Place tab on bottom
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
