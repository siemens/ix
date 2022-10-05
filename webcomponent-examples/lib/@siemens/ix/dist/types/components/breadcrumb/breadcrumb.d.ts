import { EventEmitter } from '../../stencil-public-runtime';
export declare class Breadcrumb {
  /**
   * Excess items will get hidden inside of dropdown
   */
  visibleItemCount: number;
  /**
   * Items will be accessible through a dropdown
   */
  nextItems: string[];
  /**
   * Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)
   */
  ghost: boolean;
  /**
   * Crumb item clicked event
   */
  itemClick: EventEmitter<string>;
  /**
   * Next item clicked event
   */
  nextClick: EventEmitter<{
    event: UIEvent;
    item: string;
  }>;
  previousButtonRef: HTMLElement;
  nextButtonRef: HTMLElement;
  hostElement: HTMLIxBreadcrumbElement;
  get breadcrumbItems(): HTMLIxBreadcrumbItemElement[];
  get crumbItems(): Element[];
  items: {
    label: string;
    icon?: string;
  }[];
  private mutationObserver;
  private onItemClick;
  componentDidLoad(): void;
  componentWillLoad(): void;
  private getItems;
  disconnectedCallback(): void;
  private animationFadeOut;
  private animationFadeIn;
  private handleLastButtonRef;
  private sliceHiddenItems;
  private clickItem;
  private renderBreadcrumbItems;
  render(): any;
}
