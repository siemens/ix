import { Placement, PositioningStrategy } from '@popperjs/core';
import { EventEmitter } from '../../stencil-public-runtime';
export declare class Dropdown {
  hostElement: HTMLIxDropdownElement;
  /**
   * Show dropdown
   */
  show: boolean;
  /**
   * Define an element that triggers the dropdown.
   * A trigger can either be a string that will be interprated as id attribute or a DOM element.
   */
  trigger: string | HTMLElement;
  /**
   * Define an anchor element
   */
  anchor: string | HTMLElement;
  /**
   * Close behavior
   */
  closeBehavior: 'inside' | 'outside' | 'both' | boolean;
  /**
   * Placement of the dropdown
   */
  placement: Placement;
  /**
   * Position strategy
   */
  positioningStrategy: PositioningStrategy;
  /**
   * Adjust dropdown width to the parent width
   * @deprecated - property has a typo and will get removed in the next major version. Use `adjustDropdownWidthToReferenceWidth` instead.
   */
  adjustDropdownWidthToReferenceWith: boolean;
  /**
   * Adjust dropdown width to the parent width
   */
  adjustDropdownWidthToReferenceWidth: boolean;
  /**
   * An optional header shown at the top of the dropdown
   */
  header?: string;
  /**
   * Fire event after visibility of dropdown has changed
   */
  showChanged: EventEmitter<boolean>;
  private popperInstance;
  private triggerElement?;
  private anchorElement?;
  private dropdownRef;
  private openBind;
  constructor();
  get dropdownItems(): HTMLIxDropdownItemElement[];
  private resolveElement;
  componentDidLoad(): Promise<void>;
  private registerListener;
  private unregisterListener;
  componentDidRender(): void;
  changedShow(newShow: boolean): Promise<void>;
  changedTrigger(newTriggerValue: string | HTMLElement, oldTriggerValue: string | HTMLElement): void;
  clickOutside(event: Event): void;
  private open;
  private close;
  disconnectedCallback(): void;
  /**
   * Update position of dropdown
   */
  updatePosition(): Promise<void>;
  render(): any;
}
