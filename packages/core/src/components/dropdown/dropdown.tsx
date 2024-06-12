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
import { ArrowFocusController } from '../utils/focus';
import {
  addDisposableEventListener,
  CloseBehavior,
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
   * If the dropdown is a child of another one, it will be closed with the parent, regardless of its own close behavior.
   */
  @Prop() closeBehavior: CloseBehavior = 'both';

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

  /** @internal */
  @Prop() ignoreRelatedSubmenu = false;

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

  private arrowFocusController: ArrowFocusController;
  private focusDropdownItemBind = this.focusDropdownItem.bind(this);

  private itemObserver = new MutationObserver(() => {
    this.arrowFocusController.items = this.dropdownItems;
  });

  connectedCallback(): void {
    dropdownController.connected(this);

    if (this.trigger != undefined) {
      this.registerListener(this.trigger);
    }
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
    dropdownController.dismiss(this);
    dropdownController.disconnected(this);

    if (this.disposeClickListener) {
      this.disposeClickListener();
    }

    if (this.disposeKeyListener) {
      this.disposeKeyListener();
    }

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

  private disposeClickListener?: () => void;
  private disposeKeyListener?: () => void;

  private addEventListenersFor() {
    this.disposeClickListener?.();
    this.disposeKeyListener?.();

    const toggleController = () => {
      if (!this.isPresent()) {
        dropdownController.present(this);
      } else {
        dropdownController.dismiss(this);
      }

      dropdownController.dismissOthers(this.getId());
    };

    this.disposeClickListener = addDisposableEventListener(
      this.triggerElement,
      'click',
      (event: PointerEvent) => {
        if (!event.defaultPrevented) {
          toggleController();
        }
      }
    );

    this.triggerElement?.setAttribute(
      'data-ix-dropdown-trigger',
      this.localUId
    );
  }

  /** @internal */
  @Method()
  async discoverSubmenu() {
    this.triggerElement?.dispatchEvent(
      new CustomEvent('ix-assign-sub-menu', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: this.localUId,
      })
    );
  }

  private registerKeyListener() {
    if (!this.triggerElement) {
      return;
    }

    this.disposeKeyListener = addDisposableEventListener(
      this.triggerElement,
      'keydown',
      (event: KeyboardEvent) => {
        if (event.key !== 'ArrowDown') {
          return;
        }

        if (document.activeElement !== this.triggerElement) {
          return;
        }

        dropdownController.present(this);

        setTimeout(() => {
          this.focusDropdownItem(0);
        });
      }
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
    if (!element) {
      return null;
    }

    if (hasDropdownItemWrapperImplemented(element)) {
      const dropdownItem = await element.getDropdownItemElement();
      dropdownItem.isSubMenu = true;
      this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
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

    if (typeof element != 'string') {
      return;
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

      this.arrowFocusController = new ArrowFocusController(
        this.dropdownItems,
        this.dropdownRef,
        this.focusDropdownItemBind
      );

      this.itemObserver.observe(this.dropdownRef, {
        childList: true,
        subtree: true,
      });

      this.registerKeyListener();
    } else {
      this.arrowFocusController.disconnect();
      this.itemObserver.disconnect();
      this.disposeKeyListener?.();
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
    if (!this.show) {
      return;
    }
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

  private focusDropdownItem(index: number) {
    requestAnimationFrame(() => {
      this.dropdownItems[index]?.shadowRoot.querySelector('button').focus();
    });
  }

  async componentDidLoad() {
    this.changedTrigger(this.trigger);
  }

  async componentDidRender() {
    await this.applyDropdownPosition();
    this.anchorElement = await (this.anchor
      ? this.resolveElement(this.anchor)
      : this.resolveElement(this.trigger));
  }

  private isTriggerElement(element: HTMLElement) {
    const trigger = !!element.hasAttribute('data-ix-dropdown-trigger');

    return trigger;
  }

  private onDropdownClick(event: PointerEvent) {
    const target = dropdownController.pathIncludesTrigger(event.composedPath());
    if (target) {
      event.preventDefault();

      if (this.isTriggerElement(target)) {
        return;
      }
    }

    if (
      !event.defaultPrevented &&
      (this.closeBehavior === 'inside' || this.closeBehavior === 'both')
    ) {
      dropdownController.dismissAll([this.getId()], this.ignoreRelatedSubmenu);
      return;
    }

    dropdownController.dismissOthers(this.getId());
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
