/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  arrow,
  autoUpdate,
  computePosition,
  ComputePositionReturn,
  flip,
  hide,
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
  Mixin,
  Prop,
  Watch,
} from '@stencil/core';
import {
  addDisposableEventListenerAsArray,
  DisposableEventListener,
} from '../utils/disposable-event-listener';
import { ElementReference } from '../utils/element-reference';
import { findElement } from '../utils/find-element';
import {
  addFocusTrap,
  focusFirstFocusTrapElement,
  FocusTrapResult,
  getFocusTrapFocusables,
} from '../utils/focus/focus-trap';
import { DefaultMixins } from '../utils/internal/component';
import {
  InheritAriaAttributesMixin,
  InheritAriaAttributesMixinContract,
} from '../utils/internal/mixins/accessibility/inherit-aria-attributes.mixin';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';
import { removeVisibleFocus } from '../utils/internal/mixins/setup.mixin';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import {
  PopoverCloseFocus,
  popoverController,
  PopoverInterface,
} from './popover-controller';

type SpikePosition = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const SPIKE_OFFSET = -6;

const POPOVER_OFFSET = 12;
const HOVER_HIDE_DELAY_MS = 150;

const numberToPixel = (value?: number | null) =>
  value == null ? '' : `${value}px`;

/**
 * Floating panel anchored to a trigger element.
 *
 * @slot - Child sections in order: `ix-popover-header`, `ix-popover-image`, `ix-popover-content`, and `ix-popover-footer`.
 *
 * @since 5.1.0
 */
@Component({
  tag: 'ix-popover',
  styleUrl: 'popover.scss',
  shadow: true,
})
export class Popover
  extends Mixin(...DefaultMixins, InheritAriaAttributesMixin, ComponentIdMixin)
  implements
    PopoverInterface,
    InheritAriaAttributesMixinContract,
    ComponentIdMixinContract
{
  @Element() override hostElement!: HTMLIxPopoverElement;

  /**
   * Element that toggles the popover.
   * String values are resolved as the trigger element `id`, not as CSS selectors.
   * Also accepts a DOM element reference.
   *
   * @since 5.1.0
   */
  @Prop() trigger?: ElementReference;

  /**
   * Show/hide state
   *
   * @since 5.1.0
   */
  @Prop({ mutable: true, reflect: true }) show = false;

  /**
   * Preferred placement relative to trigger
   *
   * @since 5.1.0
   */
  @Prop() placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  /**
   * Show the spike pointing at the trigger
   *
   * @since 5.1.0
   */
  @Prop() hasSpike = false;

  /**
   * Interaction that opens the popover
   *
   * @since 5.1.0
   */
  @Prop() triggerMode: 'click' | 'hover' = 'click';

  /**
   * Dismiss when clicking outside the popover and trigger
   *
   * @since 5.1.0
   */
  @Prop() closeOnClickOutside = false;

  /**
   * Fires before visibility changes. Cancel to prevent.
   *
   * @since 5.1.0
   */
  @Event({ bubbles: true, cancelable: true })
  showChange!: EventEmitter<boolean>;

  /**
   * Fires after visibility has changed
   *
   * @since 5.1.0
   */
  @Event() showChanged!: EventEmitter<boolean>;

  private readonly dialogRef = makeRef<HTMLDialogElement>();

  private triggerElement?: HTMLElement;
  private disposeAutoUpdate?: () => void;
  private disposeTriggerListener?: DisposableEventListener;
  private disposeDialogListener?: DisposableEventListener;
  private focusTrap?: FocusTrapResult;
  private hideTimeout?: ReturnType<typeof setTimeout>;

  private readonly assignedNestedPopoverIds: string[] = [];
  private hasFocusableContent = false;
  private suppressShowWatch = false;
  private isOpeningPopover = false;
  private closeFocus: PopoverCloseFocus = 'restore-trigger';
  private hasDisconnected = false;
  private triggerRegistryId = 0;
  /**
   * Hover mode: skip `present()` on the trigger `focus` handler while
   * `schedulePostCloseFocus()` refocuses the trigger (e.g. after Escape).
   */
  private suppressFocusPresent = false;

  private get spikeElement(): HTMLElement | null {
    return this.hostElement.shadowRoot!.querySelector('.spike');
  }

  private getFocusTrapOptions() {
    return {
      trapFocusInShadowDom: 'both' as const,
      listenOnDocument: true,
      shouldDeferTabTrap: (trapHost: HTMLElement) =>
        !popoverController.isTopmostPresentedHost(trapHost),
    };
  }

  /** Top-layer dialog id; kept separate from host `id` when the host has a custom id. */
  private get popoverPanelId(): string {
    return `ix-component-ix-popover-${this.$internal_id}`;
  }

  getId(): string {
    return this.getHostElementId();
  }

  getNestedPopoverIds(): string[] {
    return this.assignedNestedPopoverIds;
  }

  @Listen('ix-assign-sub-popover')
  cacheNestedPopoverId(event: CustomEvent<string>) {
    const { detail } = event;

    if (
      detail !== this.getId() &&
      !this.assignedNestedPopoverIds.includes(detail)
    ) {
      this.assignedNestedPopoverIds.push(detail);
      popoverController.syncNestedPopoverIds(this);
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }

  isPresent(): boolean {
    return this.show;
  }

  willPresent(): boolean {
    const event = this.showChange.emit(true);
    return !event.defaultPrevented;
  }

  willDismiss(): boolean {
    const event = this.showChange.emit(false);
    return !event.defaultPrevented;
  }

  present(): Promise<void> {
    return this.openPopover();
  }

  dismiss(closeFocus: PopoverCloseFocus = 'restore-trigger'): void {
    this.closeFocus = closeFocus;
    void this.closePopover();
  }

  /**
   * Open the popover programmatically
   *
   * @since 5.1.0
   */
  @Method()
  async showPopover() {
    await popoverController.presentAndWait(this);
  }

  /**
   * Close the popover programmatically
   *
   * @since 5.1.0
   */
  @Method()
  async hidePopover() {
    popoverController.dismiss(this);
  }

  @Watch('trigger')
  onTriggerChange() {
    this.registerTriggerListener();
  }

  @Watch('triggerMode')
  onTriggerModeChange() {
    this.registerTriggerListener();
  }

  @Watch('show')
  onShowChange(newValue: boolean) {
    if (this.suppressShowWatch) {
      return;
    }

    if (newValue) {
      void this.openPopover({ fromShowWatch: true });
    } else {
      void this.closePopover({ fromShowWatch: true });
    }
  }

  override connectedCallback() {
    if (this.hasDisconnected) {
      popoverController.connected(this);
      void this.initializePopover();
    }
  }

  override componentDidLoad() {
    popoverController.connected(this);
    void this.initializePopover();
  }

  private async initializePopover() {
    await this.registerTriggerListener();

    if (this.show) {
      await this.openPopover({ fromShowWatch: true });
    }
  }

  override disconnectedCallback() {
    this.hasDisconnected = true;
    this.clearHideTimeout();
    this.disposeAutoUpdate?.();
    this.disposeTriggerListener?.();
    this.disposeDialogListener?.();
    this.focusTrap?.destroy();
    popoverController.disconnected(this);
    this.clearTriggerAria();
  }

  private async openPopover(options?: { fromShowWatch?: boolean }) {
    if (this.isOpeningPopover) {
      return;
    }

    if (!options?.fromShowWatch && this.show) {
      return;
    }

    this.isOpeningPopover = true;

    try {
      const dialog = await this.dialogRef.waitForCurrent();
      if (!dialog || !this.hostElement.isConnected) {
        return;
      }

      this.suppressShowWatch = true;
      this.show = true;
      this.suppressShowWatch = false;

      dialog.showPopover();
      this.registerHoverDialogListener(dialog);

      this.detectFocusableContent();

      if (!this.triggerElement && this.trigger) {
        await this.registerTriggerListener();
      }

      if (this.triggerElement) {
        await this.applyPopoverPosition(this.triggerElement, dialog);
        this.updateTriggerAria(true);
      }

      if (this.hasFocusableContent) {
        const trap = await addFocusTrap(
          this.hostElement,
          this.getFocusTrapOptions()
        );
        if (!this.hostElement.isConnected || !this.show) {
          trap.destroy();
        } else {
          this.focusTrap = trap;
          if (this.triggerMode !== 'hover') {
            this.focusFirstElement();
          }
        }
      }

      requestAnimationFrameNoNgZone(() => {
        this.showChanged.emit(true);
      });
    } finally {
      this.isOpeningPopover = false;
    }
  }

  private async closePopover(options?: { fromShowWatch?: boolean }) {
    if (!options?.fromShowWatch && !this.show) {
      return;
    }

    const dialog = await this.dialogRef.waitForCurrent();
    if (!dialog || !this.hostElement.isConnected) {
      return;
    }

    this.disposeAutoUpdate?.();
    this.disposeAutoUpdate = undefined;
    this.disposeDialogListener?.();
    this.disposeDialogListener = undefined;

    this.focusTrap?.destroy();
    this.focusTrap = undefined;

    this.applyCloseFocus();

    dialog.hidePopover();

    if (this.closeFocus === 'release') {
      this.blurTriggerElement();
    }

    this.schedulePostCloseFocus();

    this.suppressShowWatch = true;
    this.show = false;
    this.suppressShowWatch = false;
    this.closeFocus = 'restore-trigger';

    this.updateTriggerAria(false);

    requestAnimationFrameNoNgZone(() => {
      this.showChanged.emit(false);
    });
  }

  private detectFocusableContent() {
    this.hasFocusableContent =
      getFocusTrapFocusables(this.hostElement, this.getFocusTrapOptions())
        .length > 0;
  }

  private focusFirstElement() {
    const focusTrapOptions = this.getFocusTrapOptions();
    requestAnimationFrameNoNgZone(() => {
      focusFirstFocusTrapElement(this.hostElement, focusTrapOptions);
    });
  }

  private applyCloseFocus() {
    if (!this.hasFocusableContent || !this.triggerElement) {
      return;
    }

    if (this.triggerMode === 'hover' && this.closeFocus === 'release') {
      this.releasePopoverFocus();
      return;
    }

    removeVisibleFocus();
  }

  /**
   * Run after `hidePopover()` so browser popover focus restoration can be
   * corrected (pointer dismiss) or overridden (keyboard dismiss).
   */
  private schedulePostCloseFocus() {
    if (!this.hasFocusableContent || !this.triggerElement) {
      return;
    }

    if (this.triggerMode === 'hover' && this.closeFocus === 'release') {
      return;
    }

    const restoreTriggerFocus = this.closeFocus === 'restore-trigger';

    requestAnimationFrameNoNgZone(() => {
      if (restoreTriggerFocus) {
        if (this.triggerMode === 'hover') {
          this.suppressFocusPresent = true;
        }
        this.triggerElement?.focus();
        requestAnimationFrameNoNgZone(() => {
          this.suppressFocusPresent = false;
        });
        return;
      }

      this.releasePopoverFocus();
      requestAnimationFrameNoNgZone(() => {
        this.blurTriggerElement();
      });
    });
  }

  /** Pointer-driven dismiss: avoid a focus ring on the trigger. */
  private releasePopoverFocus() {
    const active = document.activeElement;

    if (active instanceof HTMLElement && this.containsPopoverTarget(active)) {
      active.blur();
    }

    this.blurTriggerElement();
  }

  private blurTriggerElement() {
    if (!this.triggerElement) {
      return;
    }

    const innerButton =
      this.triggerElement.shadowRoot?.querySelector<HTMLElement>(
        'button, a[role="button"]'
      );

    innerButton?.blur();
    if (this.triggerElement !== innerButton) {
      this.triggerElement.blur();
    }
  }

  private async registerTriggerListener() {
    this.disposeTriggerListener?.();
    this.clearTriggerAria();

    if (!this.trigger) {
      return;
    }

    const registryId = ++this.triggerRegistryId;
    const currentTrigger = this.trigger;
    const currentTriggerMode = this.triggerMode;

    try {
      const el = (await findElement(
        currentTrigger,
        this.hostElement
      )) as HTMLElement;

      if (
        registryId !== this.triggerRegistryId ||
        this.trigger !== currentTrigger ||
        this.triggerMode !== currentTriggerMode ||
        !this.hostElement.isConnected
      ) {
        return;
      }

      this.triggerElement = el;
      el.dataset.ixPopoverTrigger = '';
      this.updateTriggerAria(this.show);
      this.discoverNestedPopover();

      if (this.triggerMode === 'click') {
        this.disposeTriggerListener = addDisposableEventListenerAsArray([
          {
            element: el,
            eventType: 'click',
            callback: () => this.togglePopover(),
          },
          {
            element: el,
            eventType: 'keydown',
            callback: (event: Event) => {
              const key = (event as KeyboardEvent).key;
              if (key === 'Enter' || key === ' ') {
                event.preventDefault();
                this.togglePopover();
              }
            },
          },
        ]);
      } else {
        this.disposeTriggerListener = addDisposableEventListenerAsArray([
          {
            element: el,
            eventType: 'mouseenter',
            callback: () => {
              this.clearHideTimeout();
              if (!this.show) {
                popoverController.present(this);
              }
            },
          },
          {
            element: el,
            eventType: 'mouseleave',
            callback: (event: Event) => this.scheduleHideFromTrigger(event),
          },
          {
            element: el,
            eventType: 'focus',
            callback: () => {
              this.clearHideTimeout();
              if (!this.show) {
                if (this.suppressFocusPresent) {
                  return;
                }
                popoverController.present(this);
              }
            },
          },
          {
            element: el,
            eventType: 'focusout',
            callback: (event: Event) => this.scheduleHideFromTrigger(event),
          },
        ]);
      }
    } catch {
      // Trigger element not found yet
    }
  }

  private discoverNestedPopover() {
    this.triggerElement?.dispatchEvent(
      new CustomEvent('ix-assign-sub-popover', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: this.getId(),
      })
    );
  }

  private togglePopover() {
    if (this.show) {
      popoverController.dismiss(this);
    } else {
      popoverController.present(this);
    }
  }

  private containsPopoverTarget(target: EventTarget | null): boolean {
    if (!(target instanceof Node)) {
      return false;
    }

    if (target === this.hostElement) {
      return true;
    }

    if (this.hostElement.contains(target)) {
      return true;
    }

    const shadowRoot = this.hostElement.shadowRoot;
    if (shadowRoot?.contains(target)) {
      return true;
    }

    return false;
  }

  private scheduleHideFromTrigger(event: Event) {
    const related = (event as MouseEvent | FocusEvent).relatedTarget;
    if (this.containsPopoverTarget(related)) {
      return;
    }

    if (event.type === 'focusout') {
      // showPopover() can move focus into the top-layer dialog without relatedTarget.
      requestAnimationFrameNoNgZone(() => {
        if (this.containsPopoverTarget(document.activeElement)) {
          return;
        }
        this.scheduleHide();
      });
      return;
    }

    this.scheduleHide();
  }

  private scheduleHide() {
    this.clearHideTimeout();
    this.hideTimeout = setTimeout(() => {
      if (this.show) {
        popoverController.dismiss(this, 'release');
      }
    }, HOVER_HIDE_DELAY_MS);
  }

  private clearHideTimeout() {
    if (this.hideTimeout !== undefined) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }
  }

  private getTriggerAriaTarget(): HTMLElement | undefined {
    const el = this.triggerElement;
    if (!el) {
      return undefined;
    }

    if (el.tagName === 'IX-BUTTON' || el.tagName === 'IX-ICON-BUTTON') {
      const inner = el.shadowRoot?.querySelector<HTMLElement>(
        'button, a[role="button"]'
      );
      if (inner) {
        return inner;
      }
    }
    return el;
  }

  private clearTriggerAriaAttributes(element: HTMLElement) {
    element.removeAttribute('aria-expanded');
    element.removeAttribute('aria-controls');
    element.removeAttribute('aria-haspopup');
  }

  private updateTriggerAria(expanded: boolean) {
    const triggerElement = this.triggerElement;
    const target = this.getTriggerAriaTarget();
    if (!triggerElement || !target) {
      return;
    }

    target.setAttribute('aria-haspopup', 'dialog');
    target.setAttribute('aria-expanded', String(expanded));
    target.setAttribute('aria-controls', this.popoverPanelId);

    if (target !== triggerElement) {
      this.clearTriggerAriaAttributes(triggerElement);
    }
  }

  private clearTriggerAria() {
    if (!this.triggerElement) {
      return;
    }

    this.clearTriggerAriaAttributes(this.triggerElement);

    const inner = this.triggerElement.shadowRoot?.querySelector<HTMLElement>(
      'button, a[role="button"]'
    );
    if (inner) {
      this.clearTriggerAriaAttributes(inner);
    }

    delete this.triggerElement.dataset.ixPopoverTrigger;
    this.triggerElement = undefined;
  }

  private computeSpikePosition({
    placement,
    middlewareData,
  }: ComputePositionReturn): SpikePosition | undefined {
    if (!middlewareData.arrow) {
      return undefined;
    }

    const { x, y } = middlewareData.arrow;
    const resetPosition = {
      top: 'unset',
      right: 'unset',
      bottom: 'unset',
      left: 'unset',
    };

    if (placement.startsWith('top')) {
      return {
        ...resetPosition,
        left: numberToPixel(x),
        bottom: numberToPixel(SPIKE_OFFSET),
      };
    }

    if (placement.startsWith('right')) {
      return {
        ...resetPosition,
        left: numberToPixel(SPIKE_OFFSET),
        top: numberToPixel(y),
      };
    }

    if (placement.startsWith('bottom')) {
      return {
        ...resetPosition,
        left: numberToPixel(x),
        top: numberToPixel(SPIKE_OFFSET),
      };
    }

    if (placement.startsWith('left')) {
      return {
        ...resetPosition,
        right: numberToPixel(SPIKE_OFFSET),
        top: numberToPixel(y),
      };
    }
  }

  private async computePopoverPosition(
    target: Element,
    dialog: HTMLDialogElement
  ): Promise<ComputePositionReturn> {
    const middleware = [
      offset(POPOVER_OFFSET),
      flip({ fallbackStrategy: 'initialPlacement' }),
      shift({ padding: 10 }),
    ];

    if (this.hasSpike && this.spikeElement) {
      middleware.push(arrow({ element: this.spikeElement }));
    }

    middleware.push(hide());

    return computePosition(target, dialog, {
      strategy: 'fixed',
      placement: this.placement,
      middleware,
    });
  }

  private async applyPopoverPosition(
    target: Element,
    dialog: HTMLDialogElement
  ) {
    this.disposeAutoUpdate?.();

    const updatePosition = async () => {
      if (!this.show) {
        return;
      }

      const result = await this.computePopoverPosition(target, dialog);

      if (!this.show) {
        return;
      }

      const isHidden = result.middlewareData.hide?.referenceHidden;
      if (isHidden) {
        popoverController.dismiss(this, 'release');
        return result;
      }

      if (this.hasSpike && result.middlewareData.arrow) {
        const spikePos = this.computeSpikePosition(result);
        if (spikePos && this.spikeElement) {
          Object.assign(this.spikeElement.style, spikePos);
        }
      }

      Object.assign(dialog.style, {
        left: numberToPixel(result.x),
        top: numberToPixel(result.y),
      });

      return result;
    };

    await updatePosition();

    if (!this.show || !this.hostElement.isConnected) {
      return;
    }

    this.disposeAutoUpdate = autoUpdate(target, dialog, updatePosition, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true,
    });
  }

  private registerHoverDialogListener(dialog: HTMLDialogElement) {
    this.disposeDialogListener?.();

    if (this.triggerMode !== 'hover') {
      return;
    }

    this.disposeDialogListener = addDisposableEventListenerAsArray([
      {
        element: dialog,
        eventType: 'click',
        callback: (event: Event) => {
          // Align with ix-tooltip: keep clicks inside the panel from reaching window
          // listeners (top-layer dialog may omit IX-POPOVER from composedPath).
          event.stopPropagation();
        },
      },
    ]);
  }

  private onDialogMouseEnter() {
    if (this.triggerMode === 'hover') {
      this.clearHideTimeout();
    }
  }

  private onDialogMouseLeave() {
    if (this.triggerMode === 'hover') {
      this.scheduleHide();
    }
  }

  override render() {
    return (
      <Host
        class={{ visible: this.show }}
        data-ix-popover={this.popoverPanelId}
      >
        <dialog
          ref={this.dialogRef}
          id={this.popoverPanelId}
          class="dialog"
          popover="manual"
          inert={!this.show}
          {...this.inheritAriaAttributes}
          role={this.inheritAriaAttributes['role'] ?? 'dialog'}
          onMouseEnter={() => this.onDialogMouseEnter()}
          onMouseLeave={() => this.onDialogMouseLeave()}
        >
          <div class="popover-container">
            <div class="popover-body">
              <slot></slot>
            </div>
            {this.hasSpike ? <div class="spike"></div> : null}
          </div>
        </dialog>
      </Host>
    );
  }
}
