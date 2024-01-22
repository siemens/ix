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
  Listen,
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import { ComponentInterface } from '@stencil/core/internal';
import {
  addDisposableEventListener,
  dropdownController,
  DropdownInterface,
} from './dropdown-controller';
import { AlignedPlacement } from './placement';

let sequenceId = 0;

@Component({
  tag: 'ix-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown implements ComponentInterface, DropdownInterface {
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
  private localUId = `dropdown-${sequenceId++}`;
  private assignedSubmenu: string[] = [];

  connectedCallback(): void {
    dropdownController.connected(this);
  }

  @Listen('ix-assign-sub-menu')
  test({ detail }: CustomEvent<string>) {
    this.assignedSubmenu.push(detail);
  }

  disconnectedCallback() {
    dropdownController.disconnected(this);
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }

  getAssignedSubmenuIds() {
    return this.assignedSubmenu;
  }

  isPresent(): boolean {
    return this.show;
  }

  present(): void {
    this.show = true;
  }

  dismiss(): void {
    this.show = false;
  }

  getId(): string {
    return this.localUId;
  }

  willDismiss(): boolean {
    const { defaultPrevented } = this.showChanged.emit(false);
    return !defaultPrevented;
  }

  willPresent(): boolean {
    const { defaultPrevented } = this.showChanged.emit(true);
    return !defaultPrevented;
  }

  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-dropdown-item'));
  }

  get slotElement() {
    return this.hostElement.shadowRoot.querySelector('slot');
  }

  private disposeListener?: Function;

  private addEventListenersFor() {
    const stopEventDispatching = (event: Event) => {
      // Prevent default and stop event bubbling to window, otherwise controller will close all dropdowns
      if (this.triggerElement.hasAttribute('data-ix-dropdown-trigger')) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const toggleController = () => {
      if (!this.isPresent()) {
        dropdownController.present(this);
      } else {
        dropdownController.dismiss(this);
      }
    };

    this.disposeListener = addDisposableEventListener(
      this.triggerElement,
      'click',
      (event) => {
        stopEventDispatching(event);
        toggleController();
      }
    );
    this.triggerElement.setAttribute('data-ix-dropdown-trigger', this.localUId);
  }

  private removeEventListenersFor() {
    this.disposeListener?.();
    this.triggerElement.removeAttribute('data-ix-dropdown-trigger');
  }

  private async registerListener(
    element: string | HTMLElement | Promise<HTMLElement>
  ) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      this.addEventListenersFor();

      this.triggerElement.dispatchEvent(
        new CustomEvent('ix-assign-sub-menu', {
          bubbles: true,
          composed: false,
          cancelable: true,
          detail: this.localUId,
        })
      );
    }
  }

  private async unregisterListener(
    element: string | HTMLElement | Promise<HTMLElement>
  ) {
    await this.resolveElement(element);
    this.removeEventListenersFor();
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

  private isAnchorSubmenu() {
    const anchor = this.anchorElement?.closest('ix-dropdown-item');
    if (!anchor) {
      return false;
    }

    return true;
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

  private onDropdownClick(event: PointerEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (this.show === false || this.closeBehavior === false) {
      return;
    }

    switch (this.closeBehavior) {
      case 'inside':
        if (this.isClickInsideDropdown(event)) {
          dropdownController.dismiss(this);
        }
        break;
      case 'outside':
        if (!this.isClickInsideDropdown(event)) {
          dropdownController.dismiss(this);
        }
        break;
      case 'both':
      default:
        dropdownController.dismissAll();
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
        onClick={(event: PointerEvent) => this.onDropdownClick(event)}
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
