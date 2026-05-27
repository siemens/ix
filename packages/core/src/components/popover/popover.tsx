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
  Prop,
  Watch,
} from '@stencil/core';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import {
  addDisposableEventListenerAsArray,
  DisposableEventListener,
} from '../utils/disposable-event-listener';
import { ElementReference } from '../utils/element-reference';
import { findElement } from '../utils/find-element';
import {
  addFocusTrap,
  FocusTrapResult,
  TRAP_FOCUS_INCLUDE_ATTRIBUTE,
} from '../utils/focus/focus-trap';
import {
  focusableQueryString,
  focusFirstDescendant,
  queryElements,
} from '../utils/focus/focus-utilities';
import { makeRef } from '../utils/make-ref';
import {
  popoverController,
  PopoverCloseFocus,
  PopoverInterface,
} from './popover-controller';

type SpikePosition = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const SPIKE_OFFSET = -6;

/** Matches `addFocusTrap` focusable discovery for this component. */
const popoverFocusableQuery = `${focusableQueryString}, [${TRAP_FOCUS_INCLUDE_ATTRIBUTE}]`;
const POPOVER_OFFSET = 12;
const HOVER_HIDE_DELAY_MS = 150;

const numberToPixel = (value?: number | null) =>
  value !== null ? `${value}px` : '';

let popoverInstance = 0;

@Component({
  tag: 'ix-popover',
  styleUrl: 'popover.scss',
  shadow: true,
})
export class Popover implements PopoverInterface {
  @Element() hostElement!: HTMLIxPopoverElement;

  /**
   * Element that toggles the popover.
   * CSS selector string or DOM element reference.
   */
  @Prop() trigger?: ElementReference;

  /**
   * Show/hide state
   */
  @Prop({ mutable: true, reflect: true }) show = false;

  /**
   * Preferred placement relative to trigger
   */
  @Prop() placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  /**
   * Show the spike pointing at the trigger
   */
  @Prop() hasSpike = false;

  /**
   * Interaction that opens the popover
   */
  @Prop() triggerMode: 'click' | 'hover' = 'click';

  /**
   * Dismiss when clicking outside the popover and trigger
   */
  @Prop() closeOnClickOutside = false;

  /**
   * Fires before visibility changes. Cancel to prevent.
   */
  @Event() showChange!: EventEmitter<boolean>;

  /**
   * Fires after visibility has changed
   */
  @Event() showChanged!: EventEmitter<boolean>;

  private ariaAttributes: A11yAttributes = {};
  private readonly uid = `popover-${popoverInstance++}`;
  private readonly dialogRef = makeRef<HTMLDialogElement>();

  private triggerElement?: HTMLElement;
  private disposeAutoUpdate?: () => void;
  private disposeTriggerListener?: DisposableEventListener;
  private disposeDialogListener?: DisposableEventListener;
  private focusTrap?: FocusTrapResult;
  private hideTimeout?: ReturnType<typeof setTimeout>;

  private assignedNestedPopoverIds: string[] = [];
  private hasFocusableContent = false;
  private suppressShowWatch = false;
  private isOpeningPopover = false;
  private closeFocus: PopoverCloseFocus = 'restore-trigger';

  private get spikeElement(): HTMLElement | null {
    return this.hostElement.shadowRoot!.querySelector('.spike');
  }

  getId(): string {
    return this.uid;
  }

  getNestedPopoverIds(): string[] {
    return this.assignedNestedPopoverIds;
  }

  @Listen('ix-assign-sub-popover')
  cacheNestedPopoverId(event: CustomEvent<string>) {
    event.stopImmediatePropagation();
    event.preventDefault();

    const { detail } = event;

    if (
      detail !== this.uid &&
      this.assignedNestedPopoverIds.indexOf(detail) === -1
    ) {
      this.assignedNestedPopoverIds.push(detail);
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

  present(): void {
    this.openPopover();
  }

  dismiss(closeFocus: PopoverCloseFocus = 'restore-trigger'): void {
    this.closeFocus = closeFocus;
    void this.closePopover();
  }

  /**
   * Open the popover programmatically
   */
  @Method()
  async showPopover() {
    popoverController.present(this);
  }

  /**
   * Close the popover programmatically
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
      this.openPopover();
    } else {
      this.closePopover();
    }
  }

  componentWillLoad() {
    this.ariaAttributes = a11yHostAttributes(this.hostElement);
  }

  componentDidLoad() {
    popoverController.connected(this);
    this.registerTriggerListener();
  }

  disconnectedCallback() {
    this.clearHideTimeout();
    this.disposeAutoUpdate?.();
    this.disposeTriggerListener?.();
    this.disposeDialogListener?.();
    this.focusTrap?.destroy();
    popoverController.disconnected(this);
    this.clearTriggerAria();
  }

  private async openPopover() {
    if (this.isOpeningPopover || this.show) {
      return;
    }

    this.isOpeningPopover = true;

    try {
      const dialog = await this.dialogRef.waitForCurrent();
      if (!dialog) {
        return;
      }

      this.suppressShowWatch = true;
      this.show = true;
      this.suppressShowWatch = false;

      dialog.showPopover();
      this.registerHoverDialogListener(dialog);

      this.detectFocusableContent();

      if (this.triggerElement) {
        this.applyPopoverPosition(this.triggerElement, dialog);
        this.updateTriggerAria(true);
      }

      if (this.hasFocusableContent) {
        this.focusTrap = await addFocusTrap(this.hostElement, {
          trapFocusInShadowDom: true,
        });
        if (this.triggerMode !== 'hover') {
          this.focusFirstElement();
        }
      }

      requestAnimationFrame(() => {
        this.showChanged.emit(true);
      });
    } finally {
      this.isOpeningPopover = false;
    }
  }

  private async closePopover() {
    if (!this.show) {
      return;
    }

    const dialog = await this.dialogRef.waitForCurrent();
    if (!dialog) {
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

    this.suppressShowWatch = true;
    this.show = false;
    this.suppressShowWatch = false;
    this.closeFocus = 'restore-trigger';

    this.updateTriggerAria(false);

    requestAnimationFrame(() => {
      this.showChanged.emit(false);
    });
  }

  private getPopoverFocusRoot(): HTMLElement | ShadowRoot {
    return this.hostElement.shadowRoot ?? this.hostElement;
  }

  private detectFocusableContent() {
    const focusable = queryElements(
      this.getPopoverFocusRoot(),
      popoverFocusableQuery
    );
    this.hasFocusableContent = focusable.length > 0;
  }

  private focusFirstElement() {
    const root = this.getPopoverFocusRoot();

    requestAnimationFrame(() => {
      focusFirstDescendant(root as HTMLElement);
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

    this.triggerElement.focus();
  }

  /** Pointer-driven hover dismiss: avoid a focus ring on the trigger. */
  private releasePopoverFocus() {
    const active = document.activeElement;

    if (active instanceof HTMLElement && this.containsPopoverTarget(active)) {
      active.blur();
      return;
    }

    if (this.triggerElement && active === this.triggerElement) {
      this.triggerElement.blur();
    }
  }

  private async registerTriggerListener() {
    this.disposeTriggerListener?.();
    this.clearTriggerAria();

    if (!this.trigger) {
      return;
    }

    try {
      const el = (await findElement(
        this.trigger,
        this.hostElement
      )) as HTMLElement;
      this.triggerElement = el;
      el.setAttribute('data-ix-popover-trigger', '');
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
        detail: this.uid,
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
      requestAnimationFrame(() => {
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

  private updateTriggerAria(expanded: boolean) {
    if (!this.triggerElement) {
      return;
    }
    this.triggerElement.setAttribute('aria-expanded', String(expanded));
    this.triggerElement.setAttribute('aria-controls', this.uid);
  }

  private clearTriggerAria() {
    if (!this.triggerElement) {
      return;
    }
    this.triggerElement.removeAttribute('aria-expanded');
    this.triggerElement.removeAttribute('aria-controls');
    this.triggerElement.removeAttribute('data-ix-popover-trigger');
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

  private applyPopoverPosition(target: Element, dialog: HTMLDialogElement) {
    this.disposeAutoUpdate?.();

    this.disposeAutoUpdate = autoUpdate(
      target,
      dialog,
      async () => {
        const result = await this.computePopoverPosition(target, dialog);

        const isHidden = result.middlewareData.hide?.referenceHidden;
        if (isHidden) {
          popoverController.dismiss(this, 'release');
          return;
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
      },
      {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
      }
    );
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

  render() {
    const role = this.ariaAttributes['role'] ?? 'dialog';

    return (
      <Host class={{ visible: this.show }} id={this.uid}>
        <dialog
          ref={this.dialogRef}
          class="dialog"
          popover="manual"
          inert={!this.show}
          role={role}
          aria-modal={a11yBoolean(this.hasFocusableContent)}
          aria-label={this.ariaAttributes['aria-label']}
          aria-describedby={this.ariaAttributes['aria-describedby']}
          onMouseEnter={() => this.onDialogMouseEnter()}
          onMouseLeave={() => this.onDialogMouseLeave()}
        >
          <div class="popover-container">
            <slot></slot>
          </div>
          {this.hasSpike ? <div class="spike"></div> : null}
        </dialog>
      </Host>
    );
  }
}
