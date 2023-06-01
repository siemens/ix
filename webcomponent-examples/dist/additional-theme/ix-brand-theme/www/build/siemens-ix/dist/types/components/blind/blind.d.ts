import { EventEmitter } from '../../stencil-public-runtime';
export declare class Blind {
  /**
   * Collapsed state
   */
  collapsed: boolean;
  /**
   * Label of blind
   */
  label: string;
  /**
   * Collapsed state changed
   */
  collapsedChange: EventEmitter<boolean>;
  hostElement: HTMLIxBlindElement;
  private chevronRef;
  constructor();
  private onHeaderClick;
  componentDidLoad(): void;
  get content(): Element;
  animation(isCollapsed: boolean): void;
  private animateCollapse;
  private rotateChevronDown;
  private rotateChevronRight;
  render(): any;
}
