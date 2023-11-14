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

type DisposeDropdown = () => void;
type DropdownDisposerEntry = {
  element: HTMLIxDropdownElement;
  child: HTMLIxDropdownElement;
  dispose: DisposeDropdown;
};
const dropdownDisposer = new Map<string, DropdownDisposerEntry>();
let sequenceId = 0;

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
  @Prop() trigger: string | HTMLElement;

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

  private localUId = `dropdown-${sequenceId++}-${new Date().valueOf()}`;

  constructor() {
    this.toggleBind = this.toggle.bind(this);
    this.openBind = this.open.bind(this);

    if (dropdownDisposer.has(this.localUId)) {
      console.warn('Dropdown with duplicated id detected');
    }

    dropdownDisposer.set(this.localUId, {
      dispose: this.close.bind(this),
      element: this.hostElement,
      child: null,
    });

    const parentDropdown = this.closestPassShadow(
      this.hostElement.parentNode,
      'ix-dropdown'
    );
    if (parentDropdown) {
      for (let entry of dropdownDisposer.values()) {
        if (entry.element === parentDropdown) {
          entry.child = this.hostElement;
        }
      }
    }
  }

  closestPassShadow(node, selector) {
    if (!node) {
      return null;
    }

    if (node instanceof ShadowRoot) {
      return this.closestPassShadow(node.host, selector);
    }

    if (node instanceof HTMLElement) {
      if (node.matches(selector)) {
        return node;
      } else {
        return this.closestPassShadow(node.parentNode, selector);
      }
    }

    return this.closestPassShadow(node.parentNode, selector);
  }

  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-dropdown-item'));
  }

  get slotElement() {
    return this.hostElement.shadowRoot.querySelector('slot');
  }

  private addEventListenersFor(triggerEvent: DropdownTriggerEvent) {
    switch (triggerEvent) {
      case 'click':
        this.triggerElement.addEventListener('click', this.openBind);
        break;

      case 'hover':
        this.triggerElement.addEventListener('mouseenter', this.openBind);
        break;

      case 'focus':
        this.triggerElement.addEventListener('focusin', this.openBind);
        break;
    }
  }

  private removeEventListenersFor(
    triggerEvent: DropdownTriggerEvent,
    triggerElement: Element
  ) {
    switch (triggerEvent) {
      case 'click':
        if (this.closeBehavior === 'outside') {
          triggerElement.removeEventListener('click', this.openBind);
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
  }

  private async registerListener(element: string | HTMLElement) {
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

  private async unregisterListener(element: string | HTMLElement) {
    const trigger = await this.resolveElement(element);
    if (Array.isArray(this.triggerEvent)) {
      this.triggerEvent.forEach((triggerEvent) => {
        this.removeEventListenersFor(triggerEvent, trigger);
      });
    } else {
      this.removeEventListenersFor(this.triggerEvent, trigger);
    }
  }

  private resolveElement(element: string | HTMLElement): Promise<Element> {
    if (typeof element !== 'string') {
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

    if (newShow) {
      dropdownDisposer.forEach((entry, id) => {
        if (
          id !== this.localUId &&
          !this.isAnchorSubmenu() &&
          entry.child !== this.hostElement
        ) {
          entry.dispose();
        }
      });
    }
  }

  @Watch('trigger')
  changedTrigger(
    newTriggerValue: string | HTMLElement,
    oldTriggerValue: string | HTMLElement
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

    if (event.defaultPrevented) {
      return;
    }

    if (
      this.show === false ||
      this.closeBehavior === false ||
      this.anchorElement?.contains(target) ||
      this.triggerElement?.contains(target)
    ) {
      return;
    }

    const clickInsideDropdown = this.isClickInsideDropdown(event);

    switch (this.closeBehavior) {
      case 'outside':
        if (!clickInsideDropdown || this.anchor === target) {
          this.close();
        }
        break;
      case 'inside':
        if (clickInsideDropdown && this.hostElement !== target) {
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
    if (this.show === true && event.code === 'Escape') {
      this.close();
    }
  }

  private isNestedDropdown(element: Element) {
    return element.closest('ix-dropdown');
  }

  private isAnchorSubmenu() {
    const anchor = this.anchorElement?.closest('ix-dropdown-item');
    if (!anchor) {
      return false;
    }

    return true;
  }

  private toggle(event: Event) {
    event.preventDefault();

    if (this.isNestedDropdown(event.target as HTMLElement)) {
      event.stopPropagation();
    }

    const { defaultPrevented } = this.showChanged.emit(this.show);

    if (!defaultPrevented) {
      this.show = !this.show;
    }
  }

  private open(event: Event) {
    event.preventDefault();

    if (this.isNestedDropdown(event.target as HTMLElement)) {
      event.stopPropagation();
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

  async componentDidLoad() {
    this.changedTrigger(this.trigger, null);
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

    if (dropdownDisposer.has(this.localUId)) {
      dropdownDisposer.delete(this.localUId);
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
        <div style={{ display: 'contents' }}>
          {this.header ? <div class="dropdown-header">{this.header}</div> : ''}

          <slot></slot>
        </div>
      </Host>
    );
  }
}
