import { EventEmitter } from '../../stencil-public-runtime';
export declare class MenuAbout {
  /**
   * active tab
   */
  activeTabLabel: string;
  /**
   * Label
   */
  label: string;
  /**
   * Internal
   */
  show: boolean;
  el: HTMLIxMenuSettingsElement;
  /**
   * Popover closed
   */
  close: EventEmitter<MouseEvent>;
  get settingsItems(): HTMLIxMenuSettingsItemElement[];
  private setTab;
  componentWillLoad(): void;
  componentDidLoad(): void;
  watchActiveTabLabel(value: string): void;
  private getTabItems;
  render(): any;
}
