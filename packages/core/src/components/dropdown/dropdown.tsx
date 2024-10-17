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
  CloseBehavior,
  dropdownController,
  DropdownInterface,
  hasDropdownItemWrapperImplemented,
} from './dropdown-controller';
import { AlignedPlacement } from './placement';
import {
  addDisposableEventListener,
  DisposableEventListener,
} from '../utils/disposable-event-listener';
import { ElementReference } from 'src/components';

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
  @Prop() trigger?: ElementReference;

  /**
   * Define an anchor element
   */
  @Prop() anchor?: ElementReference;

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
  @Prop() offset?: {
    mainAxis?: number;
    crossAxis?: number;
    alignmentAxis?: number;
  };

  /**
   * @internal
   */
  @Prop() overwriteDropdownStyle?: (delegate: {
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
  @Event() showChanged!: EventEmitter<boolean>;

  private autoUpdateCleanup?: () => void;

  private triggerElement?: Element;
  private anchorElement?: Element;

  private localUId = `dropdown-${sequenceId++}`;
  private assignedSubmenu: string[] = [];

  private arrowFocusController?: ArrowFocusController;

  private itemObserver? = new MutationObserver(() => {
    if (this.arrowFocusController) {
      this.arrowFocusController.items = this.dropdownItems;
    }
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

    if (this.arrowFocusController) {
      this.arrowFocusController?.disconnect();
      this.arrowFocusController = undefined;
    }

    if (this.itemObserver) {
      this.itemObserver.disconnect();
      this.itemObserver = undefined;
    }

    if (this.disposeClickListener) {
      this.disposeClickListener();
      this.disposeClickListener = undefined;
    }

    if (this.disposeKeyListener) {
      this.disposeKeyListener();
      this.disposeKeyListener = undefined;
    }

    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = undefined;
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
    return this.hostElement.shadowRoot!.querySelector('slot');
  }

  private disposeClickListener?: DisposableEventListener;
  private disposeKeyListener?: DisposableEventListener;

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

    if (!this.triggerElement) {
      return;
    }

    this.disposeClickListener = addDisposableEventListener(
      this.triggerElement,
      'click',
      (event: Event) => {
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
      ((event: KeyboardEvent) => {
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
      }) as EventListener
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

  private async checkForSubmenuAnchor(element?: Element) {
    if (!element) {
      return undefined;
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
  ): Promise<Element | undefined> {
    if (element instanceof Promise) {
      return element;
    }

    if (typeof element === 'object') {
      return Promise.resolve(element);
    }

    if (typeof element != 'string') {
      return Promise.resolve(undefined);
    }

    const selector = `#${element}`;
    return new Promise((resolve) => {
      const el = document.querySelector(selector);
      if (el !== null) {
        return resolve(el);
      }

      const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
          resolve(el);
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  private async resolveAnchorElement() {
    if (this.anchor) {
      this.anchorElement = await this.resolveElement(this.anchor);
    } else if (this.trigger) {
      this.anchorElement = await this.resolveElement(this.trigger);
    }
  }

  @Watch('show')
  async changedShow(newShow: boolean) {
    if (newShow) {
      await this.resolveAnchorElement();

      if (this.anchorElement) {
        this.applyDropdownPosition();
      }

      this.arrowFocusController = new ArrowFocusController(
        this.dropdownItems,
        this.hostElement,
        (index) => this.focusDropdownItem(index)
      );

      this.itemObserver?.observe(this.hostElement, {
        childList: true,
        subtree: true,
      });

      this.registerKeyListener();
    } else {
      this.destroyAutoUpdate();
      this.arrowFocusController?.disconnect();
      this.itemObserver?.disconnect();
      this.disposeKeyListener?.();
    }
  }

  @Watch('trigger')
  changedTrigger(newTriggerValue: string | HTMLElement | Promise<HTMLElement>) {
    this.registerListener(newTriggerValue);
  }

  private destroyAutoUpdate() {
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = undefined;
    }
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
    const isSubmenu = this.isAnchorSubmenu();

    let positionConfig: Partial<ComputePositionConfig> = {
      strategy: this.positioningStrategy,
      middleware: [],
    };

    if (!this.suppressAutomaticPlacement) {
      positionConfig.middleware?.push(
        flip({ fallbackStrategy: 'initialPlacement' })
      );
    }

    positionConfig.placement = isSubmenu ? 'right-start' : this.placement;

    positionConfig.middleware = [
      ...(positionConfig.middleware?.filter(Boolean) || []),
      inline(),
      shift(),
    ];

    if (this.offset) {
      positionConfig.middleware.push(offset(this.offset));
    }

    this.destroyAutoUpdate();

    if (!this.anchorElement) {
      return;
    }

    this.autoUpdateCleanup = autoUpdate(
      this.anchorElement,
      this.hostElement,
      async () => {
        if (this.anchorElement) {
          const computeResponse = await computePosition(
            this.anchorElement,
            this.hostElement,
            positionConfig
          );
          Object.assign(this.hostElement.style, {
            top: '0',
            left: '0',
            transform: `translate(${Math.round(
              computeResponse.x
            )}px,${Math.round(computeResponse.y)}px)`,
          });
        }
        if (this.overwriteDropdownStyle) {
          const overwriteStyle = await this.overwriteDropdownStyle({
            dropdownRef: this.hostElement,
            triggerRef: this.triggerElement as HTMLElement,
          });

          Object.assign(this.hostElement.style, overwriteStyle);
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
      const button =
        this.dropdownItems[index]?.shadowRoot?.querySelector('button');

      if (button) {
        button.focus();
      }
    });
  }

  async componentDidLoad() {
    if (!this.trigger) {
      return;
    }

    this.changedTrigger(this.trigger);
  }

  async componentDidRender() {
    await this.applyDropdownPosition();
    await this.resolveAnchorElement();
  }

  private isTriggerElement(element: HTMLElement) {
    const trigger = !!element.hasAttribute('data-ix-dropdown-trigger');

    return trigger;
  }

  private onDropdownClick(event: PointerEvent) {
    const target = dropdownController.pathIncludesTrigger(event.composedPath());
    if (target) {
      if (target !== this.triggerElement) {
        event.preventDefault();
      }

      if (this.isTriggerElement(target)) {
        if (this.closeBehavior === 'outside') {
          event.preventDefault();
        }
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
          {this.show && <slot></slot>}
        </div>
      </Host>
    );
  }
}
