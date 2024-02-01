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
  CloseBehaviour,
  dropdownController,
  DropdownInterface,
  hasDropdownItemWrapperImplemented,
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
  @Prop() closeBehavior: CloseBehaviour = 'both';

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
   * @internal
   * If initialisation of this dropdown is expected to be defered submenu discovery will have to be re-run globally by the controller.
   * This property indicates the need for that to the controller.
   */
  @Prop() discoverAllSubmenus = false;

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
  cacheSubmenuId(event: CustomEvent<string>) {
    event.stopImmediatePropagation();
    event.preventDefault();

    const { detail } = event;

    if (this.assignedSubmenu.indexOf(detail) === -1) {
      this.assignedSubmenu.push(detail);
    }
  }

  disconnectedCallback() {
    this.disposeListener?.();
    dropdownController.disconnected(this);
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }

  getAssignedSubmenuIds() {
    return this.assignedSubmenu;
  }

  isPresent() {
    return this.show;
  }

  present() {
    this.show = true;
  }

  dismiss() {
    this.show = false;
  }

  getId() {
    return this.localUId;
  }

  willDismiss() {
    const { defaultPrevented } = this.showChanged.emit(false);
    return !defaultPrevented;
  }

  willPresent() {
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
    this.disposeListener?.();

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
        dropdownController.dismissPath(this.getId());
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

  /** @internal */
  @Method()
  discoverSubmenu() {
    this.triggerElement?.dispatchEvent(
      new CustomEvent('ix-assign-sub-menu', {
        bubbles: true,
        composed: false,
        cancelable: true,
        detail: this.localUId,
      })
    );
  }

  private async registerListener(
    element: string | HTMLElement | Promise<HTMLElement>
  ) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      this.addEventListenersFor();
      this.discoverSubmenu();
    }
  }

  private async resolveElement(
    element: string | HTMLElement | Promise<HTMLElement>
  ) {
    const el = await this.findElement(element);

    return this.checkForSubmenuAnchor(el);
  }

  private async checkForSubmenuAnchor(element: Element) {
    if (hasDropdownItemWrapperImplemented(element)) {
      const dropdownItem = await element.getDropdownItemElement();
      dropdownItem.isSubMenu = true;
      this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;

      return dropdownItem;
    }

    if (element.tagName === 'IX-DROPDOWN-ITEM') {
      (element as HTMLIxDropdownItemElement).isSubMenu = true;
      this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
    }

    return element;
  }

  private findElement(
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
        // await this.checkForSubmenuAnchor();
      }
    }
  }

  @Watch('trigger')
  changedTrigger(newTriggerValue: string | HTMLElement | Promise<HTMLElement>) {
    this.registerListener(newTriggerValue);
  }

  private isAnchorSubmenu(): boolean {
    if (!hasDropdownItemWrapperImplemented(this.anchorElement)) {
      // Is no official dropdown-item, but check if any dropdown-item
      // is placed somewhere up the DOM
      return !!this.anchorElement?.closest('ix-dropdown-item');
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
    this.changedTrigger(this.trigger);

    // Event listener to check if a dropdown is inside another dropdown
    // Cancellation of the event will prevent the closing of the parent dropdown
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
  }

  private onDropdownClick(event: PointerEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (this.closeBehavior === 'inside' || this.closeBehavior === 'both') {
      dropdownController.dismiss(this);
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
        <div style={{ display: 'contents' }}>
          {this.header && <div class="dropdown-header">{this.header}</div>}

          <slot></slot>
        </div>
      </Host>
    );
  }
}
