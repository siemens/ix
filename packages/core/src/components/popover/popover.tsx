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
} from '../utils/focus/focus-trap';
import { makeRef } from '../utils/make-ref';
import { popoverController, PopoverInterface } from './popover-controller';

type ArrowPosition = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const ARROW_OFFSET = -6;
const POPOVER_OFFSET = 12;

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
   * Show the arrow/spike pointing at the trigger
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
  private focusTrap?: FocusTrapResult;
  private hideTimeout?: ReturnType<typeof setTimeout>;

  private hasFocusableContent = false;

  private get arrowElement(): HTMLElement | null {
    return this.hostElement.shadowRoot!.querySelector('.arrow');
  }

  getId(): string {
    return this.uid;
  }

  getAssignedSubmenuIds(): string[] {
    return [];
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

  dismiss(): void {
    this.closePopover();
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
    this.focusTrap?.destroy();
    popoverController.disconnected(this);
    this.clearTriggerAria();
  }

  private async openPopover() {
    const dialog = await this.dialogRef.waitForCurrent();
    if (!dialog) {
      return;
    }

    this.show = true;
    dialog.showPopover();

    this.detectFocusableContent();

    if (this.triggerElement) {
      this.applyPopoverPosition(this.triggerElement, dialog);
      this.updateTriggerAria(true);
    }

    if (this.hasFocusableContent) {
      this.focusTrap = await addFocusTrap(this.hostElement, {
        trapFocusInShadowDom: true,
      });
      this.focusFirstElement();
    }

    requestAnimationFrame(() => {
      this.showChanged.emit(true);
    });
  }

  private async closePopover() {
    const dialog = await this.dialogRef.waitForCurrent();
    if (!dialog) {
      return;
    }

    this.disposeAutoUpdate?.();
    this.disposeAutoUpdate = undefined;

    this.focusTrap?.destroy();
    this.focusTrap = undefined;

    if (this.hasFocusableContent && this.triggerElement) {
      this.triggerElement.focus();
    }

    dialog.hidePopover();
    this.show = false;
    this.updateTriggerAria(false);

    requestAnimationFrame(() => {
      this.showChanged.emit(false);
    });
  }

  private detectFocusableContent() {
    const focusableSelectors =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const focusable = this.hostElement.querySelector(focusableSelectors);
    this.hasFocusableContent = focusable !== null;
  }

  private focusFirstElement() {
    const focusableSelectors =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    requestAnimationFrame(() => {
      const first =
        this.hostElement.querySelector<HTMLElement>(focusableSelectors);
      first?.focus();
    });
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
            callback: () => this.scheduleHide(),
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
            callback: () => this.scheduleHide(),
          },
        ]);
      }
    } catch {
      // Trigger element not found yet
    }
  }

  private togglePopover() {
    if (this.show) {
      popoverController.dismiss(this);
    } else {
      popoverController.present(this);
    }
  }

  private scheduleHide() {
    this.clearHideTimeout();
    this.hideTimeout = setTimeout(() => {
      if (this.show) {
        popoverController.dismiss(this);
      }
    }, 150);
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

  private computeArrowPosition({
    placement,
    middlewareData,
  }: ComputePositionReturn): ArrowPosition | undefined {
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
        bottom: numberToPixel(ARROW_OFFSET),
      };
    }

    if (placement.startsWith('right')) {
      return {
        ...resetPosition,
        left: numberToPixel(ARROW_OFFSET),
        top: numberToPixel(y),
      };
    }

    if (placement.startsWith('bottom')) {
      return {
        ...resetPosition,
        left: numberToPixel(x),
        top: numberToPixel(ARROW_OFFSET),
      };
    }

    if (placement.startsWith('left')) {
      return {
        ...resetPosition,
        right: numberToPixel(ARROW_OFFSET),
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

    if (this.hasSpike && this.arrowElement) {
      middleware.push(arrow({ element: this.arrowElement }));
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
          popoverController.dismiss(this);
          return;
        }

        if (this.hasSpike && result.middlewareData.arrow) {
          const arrowPos = this.computeArrowPosition(result);
          if (arrowPos && this.arrowElement) {
            Object.assign(this.arrowElement.style, arrowPos);
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
          {this.hasSpike ? <div class="arrow"></div> : null}
        </dialog>
      </Host>
    );
  }
}
