/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  autoUpdate,
  computePosition,
  ComputePositionConfig,
  flip,
  inline,
  offset,
  shift,
} from '@floating-ui/dom';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import { OnListener } from '../utils/listener';
import { AlignedPlacement } from './placement';

/**
 * @internal
 */
export type DropdownTriggerEvent = 'click' | 'hover' | 'focus';
let sequenceId = 0;

let dropdownTracePath = [];

@Component({
  tag: 'ix-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown {
  @Element() hostElement!: HTMLIxDropdownElement;

  /**
   * Suppress the automatic placement of the dropdown.
   *
   * @since 2.0.0
   */
  @Prop() suppressAutomaticPlacement = false;

  /**
   * Show dropdown
   */
  @Prop({ mutable: true, reflect: true }) show = false;

  /**
   * Define an element that triggers the dropdown.
   * A trigger can either be a string that will be interpreted as id attribute or a DOM element.
   */
  @Prop() trigger: string | HTMLElement | Promise<HTMLElement>;

  /**
   * Define an anchor element
   */
  @Prop() anchor: string | HTMLElement;

  /**
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   */
  @Prop() closeBehavior: 'inside' | 'outside' | 'both' | boolean = 'both';

  /**
   * Placement of the dropdown
   */
  @Prop() placement: AlignedPlacement = 'bottom-start';

  /**
   * Position strategy
   */
  @Prop() positioningStrategy: 'absolute' | 'fixed' = 'fixed';

  /**
   * An optional header shown at the top of the dropdown
   */
  @Prop() header?: string;

  /**
   * Move dropdown along main axis of alignment
   *
   * @internal
   */
  @Prop() offset: {
    mainAxis?: number;
    crossAxis?: number;
    alignmentAxis?: number;
  };

  /**
   * Define one or more events to open dropdown
   * @internal
   */
  @Prop() triggerEvent: DropdownTriggerEvent | DropdownTriggerEvent[] = 'click';

  /**
   * @internal
   */
  @Prop() overwriteDropdownStyle: (delegate: {
    dropdownRef: HTMLElement;
    triggerRef?: HTMLElement;
  }) => Promise<Partial<CSSStyleDeclaration>>;

  /**
   * Fire event after visibility of dropdown has changed
   */
  @Event() showChanged: EventEmitter<boolean>;

  private autoUpdateCleanup: () => void = null;

  private triggerElement?: Element;
  private anchorElement?: Element;

  private dropdownRef: HTMLElement;

  private toggleBind: any;
  private openBind: any;
  private focusInBind: any;
  private focusOutBind: any;

  private localUId = `dropdown-${sequenceId++}`;

  private latestSubMenu: string;

  constructor() {
    this.toggleBind = this.toggle.bind(this);
    this.openBind = this.open.bind(this);
    this.focusInBind = this.focusIn.bind(this);
    this.focusOutBind = this.focusOut.bind(this);
  }

  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-dropdown-item'));
  }

  get slotElement() {
    return this.hostElement.shadowRoot.querySelector('slot');
  }

  private hasFocusTrigger() {
    return (
      Array.isArray(this.triggerEvent) &&
      this.triggerEvent.indexOf('focus') != -1
    );
  }

  private addEventListenersFor(triggerEvent: DropdownTriggerEvent) {
    switch (triggerEvent) {
      case 'click':
        if (this.hasFocusTrigger()) {
          // Delay mouse handler registration to prevent events from immediately closing dropdown again
          this.triggerElement.addEventListener('focusin', this.focusInBind);
          this.triggerElement.addEventListener('focusout', this.focusOutBind);
        } else {
          this.triggerElement.addEventListener('click', this.toggleBind);
        }
        break;

      case 'hover':
        this.triggerElement.addEventListener('mouseenter', this.openBind);
        break;

      case 'focus':
        this.triggerElement.addEventListener('focusin', this.openBind);
        break;
    }

    this.triggerElement.setAttribute('data-ix-dropdown-trigger', this.localUId);
  }

  private removeEventListenersFor(
    triggerEvent: DropdownTriggerEvent,
    triggerElement: Element
  ) {
    switch (triggerEvent) {
      case 'click':
        if (this.hasFocusTrigger()) {
          this.triggerElement.removeEventListener('focusin', this.focusInBind);
          this.triggerElement.removeEventListener(
            'focusout',
            this.focusOutBind
          );
        } else {
          triggerElement.removeEventListener('click', this.toggleBind);
        }
        break;

      case 'hover':
        triggerElement.removeEventListener('mouseenter', this.openBind);
        break;

      case 'focus':
        triggerElement.removeEventListener('focusin', this.openBind);
        break;
    }

    this.triggerElement.removeAttribute('data-ix-dropdown-trigger');
  }

  private async registerListener(
    element: string | HTMLElement | Promise<HTMLElement>
  ) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      if (Array.isArray(this.triggerEvent)) {
        this.triggerEvent.forEach((triggerEvent) => {
          this.addEventListenersFor(triggerEvent);
        });
      } else {
        this.addEventListenersFor(this.triggerEvent);
      }
    }
  }

  private async unregisterListener(
    element: string | HTMLElement | Promise<HTMLElement>
  ) {
    const trigger = await this.resolveElement(element);
    if (Array.isArray(this.triggerEvent)) {
      this.triggerEvent.forEach((triggerEvent) => {
        this.removeEventListenersFor(triggerEvent, trigger);
      });
    } else {
      this.removeEventListenersFor(this.triggerEvent, trigger);
    }
  }

  private resolveElement(
    element: string | HTMLElement | Promise<HTMLElement>
  ): Promise<Element> {
    if (element instanceof Promise) {
      return element;
    }

    if (typeof element === 'object') {
      return Promise.resolve(element);
    }

    const selector = `#${element}`;
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  @Watch('show')
  async changedShow(newShow: boolean) {
    if (newShow) {
      this.anchorElement = await (this.anchor
        ? this.resolveElement(this.anchor)
        : this.resolveElement(this.trigger));

      if (this.anchorElement) {
        this.applyDropdownPosition();
      }
    }

    if (!newShow) {
      this.latestSubMenu = undefined;
    }
  }

  @Watch('trigger')
  changedTrigger(
    newTriggerValue: string | HTMLElement | Promise<HTMLElement>,
    oldTriggerValue: string | HTMLElement | Promise<HTMLElement>
  ) {
    if (newTriggerValue) {
      this.registerListener(newTriggerValue);
    }

    if (oldTriggerValue) {
      this.unregisterListener(oldTriggerValue);
    }
  }

  @OnListener<Dropdown>('click', (self) => self.show)
  clickOutside(event: PointerEvent) {
    const target = event.target as HTMLElement;

    const xxx = this.isDropdownInsideAnotherDropdown(target);

    console.log(
      'clickOutside usDropdownInisdeParent',
      xxx,
      'latest sub menu',
      this.latestSubMenu,
      'from',
      this.localUId
    );
    if (xxx && this.latestSubMenu === undefined) {
      this.close();
    }

    if (event.defaultPrevented) {
      return;
    }

    if (this.show === false || this.closeBehavior === false) {
      return;
    }

    const clickInsideDropdown = this.isClickInsideDropdown(event);
    switch (this.closeBehavior) {
      case 'outside':
        if (!clickInsideDropdown) {
          this.close();
        }
        break;
      case 'inside':
        if (clickInsideDropdown) {
          this.close();
        }
        break;
      case 'both':
        if (this.hostElement !== target) {
          this.close();
        }
        break;
      default:
        this.close();
    }
  }

  @OnListener<Dropdown>('keydown', (self) => self.show)
  keydown(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.close();
    }
  }

  private isAnchorSubmenu() {
    const anchor = this.anchorElement?.closest('ix-dropdown-item');
    if (!anchor) {
      return false;
    }

    return true;
  }

  private toggle(event: Event) {
    const target = event.target as HTMLElement;

    if (this.isDropdownInsideAnotherDropdown(target)) {
      event.preventDefault();
    }

    const { defaultPrevented } = this.showChanged.emit(!this.show);

    if (!defaultPrevented) {
      this.show = !this.show;
    }
  }

  private open(event: Event) {
    const target = event.target as HTMLElement;

    if (this.isDropdownInsideAnotherDropdown(target)) {
      event.preventDefault();
    }

    const { defaultPrevented } = this.showChanged.emit(true);

    if (!defaultPrevented) {
      this.show = true;
    }
  }

  private close() {
    const { defaultPrevented } = this.showChanged.emit(false);

    if (!defaultPrevented) {
      this.show = false;
    }
  }

  private focusIn() {
    this.triggerElement.addEventListener('mousedown', this.toggleBind);
  }

  private focusOut() {
    this.triggerElement.removeEventListener('mousedown', this.toggleBind);
  }

  private async applyDropdownPosition() {
    if (!this.anchorElement) {
      return;
    }
    if (!this.dropdownRef) {
      return;
    }
    const isSubmenu = this.isAnchorSubmenu();

    let positionConfig: Partial<ComputePositionConfig> = {
      strategy: this.positioningStrategy,
      middleware: [],
    };

    if (!this.suppressAutomaticPlacement) {
      positionConfig.middleware.push(
        flip({ fallbackStrategy: 'initialPlacement' })
      );
    }

    positionConfig.placement = isSubmenu ? 'right-start' : this.placement;

    positionConfig.middleware = [
      ...positionConfig.middleware,
      inline(),
      shift(),
    ];

    if (this.offset) {
      positionConfig.middleware.push(offset(this.offset));
    }

    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = null;
    }

    this.autoUpdateCleanup = autoUpdate(
      this.anchorElement,
      this.dropdownRef,
      async () => {
        const computeResponse = await computePosition(
          this.anchorElement,
          this.dropdownRef,
          positionConfig
        );

        Object.assign(this.dropdownRef.style, {
          top: '0',
          left: '0',
          transform: `translate(${Math.round(computeResponse.x)}px,${Math.round(
            computeResponse.y
          )}px)`,
        });
        if (this.overwriteDropdownStyle) {
          const overwriteStyle = await this.overwriteDropdownStyle({
            dropdownRef: this.dropdownRef,
            triggerRef: this.triggerElement as HTMLElement,
          });

          Object.assign(this.dropdownRef.style, overwriteStyle);
        }
      },
      {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
      }
    );
  }

  private isDropdownInsideAnotherDropdown(element: HTMLElement) {
    return (
      element.hasAttribute('data-ix-dropdown-trigger') &&
      !element.dispatchEvent(
        new CustomEvent('check-nested-dropdown', {
          bubbles: true,
          composed: true,
          cancelable: true,
          detail: this.localUId,
        })
      )
    );
  }

  async componentDidLoad() {
    this.changedTrigger(this.trigger, null);

    // Event listener to check if a dropdown is inside another dropdown
    // cancellation of the event will prevent the closing of the parent dropdown
    this.hostElement.addEventListener(
      'check-nested-dropdown',
      (event: CustomEvent<string>) => {
        if (event.detail === this.localUId) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        console.log('parent', this.localUId, 'sub menu', event.detail);

        this.latestSubMenu = event.detail;
      }
    );
  }

  async componentDidRender() {
    await this.applyDropdownPosition();
    this.anchorElement = await (this.anchor
      ? this.resolveElement(this.anchor)
      : this.resolveElement(this.trigger));

    if (
      this.isAnchorSubmenu() &&
      this.anchorElement?.tagName === 'IX-DROPDOWN-ITEM'
    ) {
      (this.anchorElement as HTMLIxDropdownItemElement).isSubMenu = true;
    }
  }

  private isClickInsideDropdown(event: PointerEvent) {
    const rect = this.dropdownRef.getBoundingClientRect();
    return (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
  }

  disconnectedCallback() {
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }

  /**
   * Update position of dropdown
   */
  @Method()
  async updatePosition() {
    this.applyDropdownPosition();
  }

  render() {
    return (
      <Host
        data-ix-dropdown={this.localUId}
        ref={(ref) => (this.dropdownRef = ref)}
        class={{
          'dropdown-menu': true,
          show: this.show,
          overflow: true,
        }}
        style={{
          margin: '0',
          minWidth: '0px',
          position: this.positioningStrategy,
        }}
        role="list"
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '1rem',
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            zIndex: '1000000000',
          }}
        >
          {this.localUId}
        </div>
        <div style={{ display: 'contents' }}>
          {this.header && <div class="dropdown-header">{this.header}</div>}

          <slot></slot>
        </div>
      </Host>
    );
  }
}
