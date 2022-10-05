import { EventEmitter } from '../../stencil-public-runtime';
export declare class MenuAbout {
  /**
   *
   */
  i18nImprintLabel: string;
  /**
   * Active tab
   */
  activeTabLabel: string;
  /**
   * Label of first tab
   */
  label: string;
  /**
   * Internal
   */
  show: boolean;
  el: HTMLIxMenuAboutElement;
  /**
   * About and Legal closed
   */
  close: EventEmitter<MouseEvent>;
  labels: string[];
  get aboutItems(): HTMLIxMenuAboutItemElement[];
  private setTab;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentWillRender(): void;
  private updateLabels;
  watchActiveTabLabel(value: string): void;
  private getSelectedTabIndex;
  render(): any;
}
