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
  Mixin,
} from '@stencil/core';
import { A11yAttributes } from '../utils/a11y';
import {
  addDisposableEventListener,
  DisposableEventListener,
} from '../utils/disposable-event-listener';
import { ElementReference } from '../utils/element-reference';
import { findElement } from '../utils/find-element';
import {
  addFocusTrap,
  FocusTrapOptions,
  FocusTrapResult,
} from '../utils/focus/focus-trap';
import {
  focusElementInContext,
  focusFirstDescendant,
  focusLastDescendant,
  queryElements,
} from '../utils/focus/focus-utilities';
import { DefaultMixins } from '../utils/internal/component';
import {
  hasKeyboardMode,
  removeVisibleFocus,
} from '../utils/internal/mixins/setup.mixin';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import {
  CloseBehavior,
  dropdownController,
  DropdownInterface,
  hasDropdownItemWrapperImplemented,
} from './dropdown-controller';
import { configureKeyboardInteraction } from './dropdown-focus';
import { AlignedPlacement } from './placement';

let sequenceId = 0;

@Component({
  tag: 'ix-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown
  extends Mixin(...DefaultMixins)
  implements DropdownInterface
{
  @Element() override hostElement!: HTMLIxDropdownElement;

  /**
   * Suppress the automatic placement of the dropdown.
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
   * Suppress automatic focus when the dropdown is shown
   *
   * @since 4.3.0
   */
  @Prop() disableFocusHandling = false;

  /**
   * Close dropdown when tabbing away, and do not trap focus inside dropdown
   *
   * @since 4.3.0
   */
  @Prop() disableFocusTrap = false;

  /**
   * Enable Popover API rendering for top-layer positioning.
   *
   * @default false in v4.x, will default to true in v5.0.0
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
   *
   * @since 5.0.0
   */
  @Prop() focusCheckedItem: boolean = false;

  /**
   * Keys that will open the dropdown when the trigger is focused
   *
   * @internal
   */
  @Prop() keyboardActivationKeys: string[] = [
    'Home',
    'End',
    'ArrowDown',
    'ArrowUp',
    'Enter',
    ' ',
  ];

  /**
   * Keys that will open the dropdown when the trigger is focused
   *
   * @internal
   */
  @Prop() keyboardItemTriggerKeys: string[] = ['Enter', ' '];

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
   * If initialization of this dropdown is expected to be deferred submenu discovery will have to be re-run globally by the controller.
   * This property indicates the need for that to the controller.
   */
  @Prop() discoverAllSubmenus = false;

  /** @internal */
  @Prop() ignoreRelatedSubmenu = false;

  /** @internal */
  @Prop() suppressOverflowBehavior = false;

  /** @internal */
  @Prop() focusHost?: HTMLElement;

  /** @internal */
  @Prop() focusTrapOptions?: FocusTrapOptions;

  /**
   * @internal
   * Called instead of the default focus-on-open logic when the dropdown is
   * opened via keyboard. When not set, default behavior is used.
   */
  @Prop() callbackFocusElement?: (event: KeyboardEvent) => void;

  /**
   * Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
   */
  @Event() showChange!: EventEmitter<boolean>;

  /**
   * Fire event after visibility of dropdown has changed
   */
  @Event() showChanged!: EventEmitter<boolean>;

  /**
   * Will be fired only after dropdown changed visibility to "true"
   *
   * @internal
   */
  @Event() experimentalRequestFocus!: EventEmitter<{
    keyEvent: KeyboardEvent;
  }>;

  /**
   * @internal
   */
  @Event() experimentalFocusNextElement!: EventEmitter<void>;

  private autoUpdateCleanup?: () => void;

  private triggerElement?: Element;
  private anchorElement?: Element;

  private forwardQueryElement: HTMLElement | null = null;

  private dropdownElementId = `dropdown-${sequenceId++}`;
  private assignedSubmenu: string[] = [];

  private keyboardNavigationCleanup?: () => void;

  private focusUtilities?: FocusTrapResult;

  private readonly dialogRef = makeRef<HTMLDialogElement>();

  override connectedCallback(): void {
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

  override disconnectedCallback() {
    dropdownController.dismiss(this);
    dropdownController.disconnected(this);

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
    return this.dropdownElementId;
  }

  willDismiss() {
    const { defaultPrevented } = this.showChange.emit(false);
    return !defaultPrevented;
  }

  willPresent() {
    const { defaultPrevented } = this.showChange.emit(true);
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

  private toggleController() {
    if (!this.isPresent()) {
      dropdownController.present(this);
    } else {
      dropdownController.dismiss(this);
    }

    dropdownController.dismissOthers(this.getId());
  }

  private readonly onTriggerClick = (event: Event) =>
    this.handleTriggerClick(event);

  private handleTriggerClick(event: Event) {
    if (!event.defaultPrevented) {
      this.toggleController();
    }
  }

  private readonly onTriggerKeydown = (event: KeyboardEvent) =>
    this.handleTriggerKeydown(event);

  private handleTriggerKeydown(event: KeyboardEvent) {
    console.log('handleTriggerKeydown', event.key);
    const focusFirst = (element: HTMLElement) =>
      requestAnimationFrameNoNgZone(() => {
        if (this.callbackFocusElement) {
          this.callbackFocusElement(event);
          event.defaultPrevented;
        }

        if (event.defaultPrevented) {
          return;
        }

        focusFirstDescendant(element, undefined, {
          focusCheckedItem: this.focusCheckedItem,
        });
      });

    const focusLast = (element: HTMLElement) =>
      requestAnimationFrameNoNgZone(() => {
        if (this.callbackFocusElement) {
          this.callbackFocusElement(event);
        }

        if (event.defaultPrevented) {
          return;
        }

        focusLastDescendant(element);
      });

    const shouldCloseOnTab =
      this.disableFocusTrap === true && event.key === 'Tab';

    if ((event.key === 'Escape' || shouldCloseOnTab) && this.show) {
      dropdownController.dismiss(this);
      return;
    }

    if (this.show) {
      return;
    }

    const navigationKeys = this.keyboardActivationKeys ?? [
      'Home',
      'End',
      'ArrowUp',
      'ArrowDown',
      ' ',
      'Enter',
    ];

    if (!navigationKeys.includes(event.key)) {
      return;
    }

    // If dropdown is not yet shown, try to open it
    if (!this.isAnchorSubmenu()) {
      if (!event.defaultPrevented) {
        this.toggleController();
      }

      if (this.disableFocusHandling) {
        event.stopImmediatePropagation();
        event.preventDefault();
      } else {
        // Focus first item for all keys except ArrowUp (which focuses last)
        if (event.altKey) {
          return;
        }

        if (event.key === 'ArrowUp' || event.key === 'End') {
          focusLast(this.hostElement);
        } else {
          focusFirst(this.hostElement);
        }
      }
    } else if (!this.disableFocusHandling) {
      // Dropdown is already open - handle focus navigation
      if (this.callbackFocusElement) {
        this.callbackFocusElement(event);
      } else if (event.key === 'ArrowUp' || event.key === 'End') {
        focusLast(this.hostElement);
      } else {
        focusFirst(this.hostElement);
      }
    }

    this.experimentalRequestFocus.emit({
      keyEvent: event,
    });

    // Prevent click listener from also toggling the dropdown, which would close it again
    event.preventDefault();
  }

  private addEventListenersFor() {
    if (!this.triggerElement) {
      return;
    }

    if (!this.disposeClickListener) {
      this.disposeClickListener = addDisposableEventListener(
        this.triggerElement,
        'click',
        this.onTriggerClick
      );
    }

    if (!this.disposeKeyListener) {
      this.disposeKeyListener = addDisposableEventListener(
        this.triggerElement,
        'keydown',
        this.onTriggerKeydown as EventListener
      );
    }

    this.triggerElement?.setAttribute(
      'data-ix-dropdown-trigger',
      this.dropdownElementId
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
        detail: this.dropdownElementId,
      })
    );
  }

  private registerKeyListener() {
    if (!this.triggerElement) {
      return;
    }
  }

  private async registerListener(element: ElementReference) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      this.addEventListenersFor();
      this.discoverSubmenu();
    }
  }

  private async resolveElement(element: ElementReference) {
    const el = await findElement(element);

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

  private async resolveAnchorElement() {
    if (this.anchor) {
      this.anchorElement = await this.resolveElement(this.anchor);
    } else if (this.trigger) {
      this.anchorElement = await this.resolveElement(this.trigger);
    }
  }

  @Watch('show')
  async changedShow(newShow: boolean) {
    if (!newShow) {
      if (
        this.triggerElement &&
        this.triggerElement.ariaHasPopup === 'menu' &&
        this.triggerElement.tagName === 'IX-DROPDOWN-ITEM'
      ) {
        this.triggerElement.ariaExpanded = 'false';
      }
      this.cleanupOnHide();

      if (this.enableTopLayer) {
        await this.hideDialog();
      }

      return;
    }

    await this.resolveAnchorElement();
    this.registerKeyListener();
    if (!this.disableFocusHandling && !this.callbackFocusElement) {
      this.keyboardNavigationCleanup = configureKeyboardInteraction(
        () => this.forwardQueryElement ?? this.focusHost ?? this.hostElement,
        {
          getEventListenerTarget: () =>
            (this.triggerElement as HTMLElement) ??
            (this.anchorElement as HTMLElement),
          onItemActivation: (event, activeElement) => {
            event.preventDefault();
            activeElement?.click();
          },
          itemTriggerKeys: this.keyboardItemTriggerKeys,
        }
      );
    }

    if (!this.disableFocusTrap) {
      addFocusTrap(
        this.focusHost ?? this.hostElement,
        this.focusTrapOptions
      ).then((focusTrap) => {
        this.focusUtilities = focusTrap;
      });
    }

    if (
      this.triggerElement &&
      this.triggerElement.ariaHasPopup === 'menu' &&
      this.triggerElement.tagName === 'IX-DROPDOWN-ITEM'
    ) {
      this.triggerElement.ariaExpanded = 'true';
    }

    if (this.enableTopLayer) {
      const popover = await this.dialogRef.waitForCurrent();
      if (!popover) {
        return;
      }

      popover.showPopover();
    }

    this.applyDropdownPosition();
  }

  @Watch('show')
  async emitShowChanged(newShow: boolean) {
    requestAnimationFrameNoNgZone(() => this.showChanged.emit(newShow));
  }

  @Watch('trigger')
  changedTrigger(
    newTriggerValue: ElementReference,
    oldTriggerValue: ElementReference | undefined
  ) {
    if (newTriggerValue && newTriggerValue !== oldTriggerValue) {
      this.disposeClickListener?.();
      this.disposeClickListener = undefined;
      this.disposeKeyListener?.();
      this.disposeKeyListener = undefined;
    }

    this.registerListener(newTriggerValue);
  }

  private applyFallbackPosition(element: HTMLElement) {
    requestAnimationFrameNoNgZone(() => {
      const referenceElement =
        this.hostElement.parentElement || this.hostElement;
      const refRect = referenceElement.getBoundingClientRect();

      const transform = `translate(${Math.round(
        refRect.left
      )}px, ${Math.round(refRect.top)}px)`;

      Object.assign(element.style, {
        top: '0',
        left: '0',
        transform,
      });
    });
  }

  private async hideDialog() {
    const popover = await this.dialogRef.waitForCurrent();
    if (popover?.matches(':popover-open')) {
      popover.hidePopover();
    }
  }

  private cleanupOnHide() {
    this.destroyAutoUpdate();
    this.keyboardNavigationCleanup?.();
    this.focusUtilities?.destroy();
    this.resetForwardQueryElement();

    removeVisibleFocus();

    if (!this.disableFocusTrap && hasKeyboardMode()) {
      // Restore focus to trigger element
      requestAnimationFrameNoNgZone(() => {
        (this.triggerElement as HTMLElement)?.focus();
      });
    }
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
    const targetElement: HTMLElement = this.enableTopLayer
      ? await this.dialogRef.waitForCurrent()
      : this.hostElement;

    if (!this.show) {
      return;
    }

    if (!targetElement) {
      return;
    }

    if (!this.anchorElement) {
      this.applyFallbackPosition(targetElement);
      return;
    }

    const referenceElement = this.anchorElement;
    const isSubmenu = this.isAnchorSubmenu();

    let strategy: 'fixed' | 'absolute' = this.positioningStrategy;

    if (this.enableTopLayer) {
      // Popover API only supports fixed positioning
      strategy = 'fixed';
    }

    let positionConfig: Partial<ComputePositionConfig> = {
      strategy,
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

    this.autoUpdateCleanup = autoUpdate(
      referenceElement,
      targetElement,
      async () => {
        const computeResponse = await computePosition(
          referenceElement,
          targetElement,
          positionConfig
        );
        Object.assign(targetElement.style, {
          top: '0',
          left: '0',
          transform: `translate(${Math.round(computeResponse.x)}px,${Math.round(
            computeResponse.y
          )}px)`,
        });

        if (this.overwriteDropdownStyle) {
          const overwriteStyle = await this.overwriteDropdownStyle({
            dropdownRef: targetElement,
            triggerRef: this.triggerElement as HTMLElement,
          });

          Object.assign(targetElement.style, overwriteStyle);
        }
      },
      {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
      }
    );
  }

  override async componentDidLoad() {
    if (!this.trigger) {
      return;
    }

    this.changedTrigger(this.trigger, undefined);
  }

  override async componentDidRender() {
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

  @Listen('ix-open-submenu')
  openSubmenu(event: CustomEvent<{ activeElement: HTMLElement }>) {
    const submenuIds = this.getAssignedSubmenuIds();

    if (submenuIds.length === 0) {
      return;
    }

    event.detail.activeElement.classList.add(
      'ix-dropdown-submenu-trigger-active'
    );
    dropdownController.present(
      dropdownController.getDropdownById(submenuIds[0])!
    );

    this.forwardQueryElement = dropdownController.getDropdownById(
      submenuIds[0]
    )!.hostElement;

    requestAnimationFrameNoNgZone(() => {
      focusFirstDescendant(
        dropdownController.getDropdownById(submenuIds[0])!.hostElement
      );
    });
  }

  @Listen('ix-close-submenu')
  closeSubmenu() {
    const parent = dropdownController.getParentDropdownId(this.getId());

    if (parent) {
      const parentDropdown = dropdownController.getDropdownById(parent);
      const activeTriggers = queryElements(
        parentDropdown?.hostElement,
        '.ix-dropdown-submenu-trigger-active'
      );

      dropdownController.dismissChildren(parent);

      if (parentDropdown && activeTriggers.length > 0) {
        const activeTrigger = activeTriggers[0];
        activeTrigger.classList.remove('ix-dropdown-submenu-trigger-active');

        (
          parentDropdown.hostElement as HTMLIxDropdownElement
        ).resetForwardQueryElement();

        requestAnimationFrameNoNgZone(() => {
          focusElementInContext(activeTrigger, parentDropdown.hostElement);
        });
      }
    }
  }

  /**@internal */
  @Method()
  async resetForwardQueryElement() {
    this.forwardQueryElement = null;
  }

  override render() {
    const ariaAttributes: A11yAttributes = {};
    if (
      this.triggerElement &&
      this.triggerElement.tagName === 'IX-DROPDOWN-ITEM'
    ) {
      ariaAttributes['aria-labelledby'] = this.triggerElement.id;
      ariaAttributes['aria-owns'] = this.triggerElement.id;
      ariaAttributes['role'] = 'menu';
    }
    return (
      <Host
        {...ariaAttributes}
        aria-modal="true"
        data-ix-dropdown={this.dropdownElementId}
        data-ix-focus-trap
        class={{
          'dropdown-menu': true,
          show: this.show,
          // overflow handling not needed when using top-layer
          overflow: !this.suppressOverflowBehavior && !this.enableTopLayer,
        }}
        style={
          this.enableTopLayer
            ? {}
            : {
                margin: '0',
                minWidth: '0px',
                position: this.positioningStrategy,
              }
        }
        onClick={(event: PointerEvent) => this.onDropdownClick(event)}
      >
        {this.enableTopLayer ? (
          <dialog
            role="presentation"
            ref={this.dialogRef}
            class={{
              dialog: true,
              overflow: !this.suppressOverflowBehavior,
            }}
            popover="manual"
            tabindex={-1}
            onClick={(event: PointerEvent) => this.onDropdownClick(event)}
          >
            <div class="dropdown-container">
              {this.header && <div class="dropdown-header">{this.header}</div>}
              {this.show && <slot></slot>}
            </div>
          </dialog>
        ) : (
          <div style={{ display: 'contents' }} role="presentation">
            {this.header && <div class="dropdown-header">{this.header}</div>}
            {this.show && <slot></slot>}
          </div>
        )}
      </Host>
    );
  }
}
