/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
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
import { Component, Element, h, Host, Method, Prop } from '@stencil/core';
import { resolveSelector } from '../utils/find-element';
import { ElementReference } from 'src/components';
import { makeRef } from '../utils/make-ref';

type ArrowPosition = {
  top?: string;
  left?: string;
  right?: string;
};

const numberToPixel = (value?: number | null) =>
  value != null ? `${value}px` : '';

let tooltipInstance = 0;

/**
 * @slot title-icon - Icon of tooltip title
 * @slot title-content - Content of tooltip title
 *
 * @since 1.4.0
 */
@Component({
  tag: 'ix-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip {
  /**
   * CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`
   */
  @Prop() for?: ElementReference;

  /**
   * Title of the tooltip
   */
  @Prop() titleContent?: string;

  /**
   * Define if the user can access the tooltip via mouse.
   */
  @Prop() interactive = false;

  /**
   * Initial placement of the tooltip.
   * If the selected placement doesn't have enough space, the tooltip will be repositioned to another location.
   * @since 1.5.0
   */
  @Prop() placement: 'top' | 'right' | 'bottom' | 'left' = 'top';

  /** @internal */
  @Prop() showDelay = 0;

  /** @internal */
  @Prop() hideDelay = 50;

  /** @internal */
  @Prop() animationFrame = false;

  @Element() hostElement!: HTMLIxTooltipElement;

  private hideTooltipTimeout?: NodeJS.Timeout;
  private showTooltipTimeout?: NodeJS.Timeout;

  private disposeAutoUpdate?: () => void;
  private disposeTriggerListener?: () => void;
  private disposeTooltipListener?: () => void;
  private disposeDomChangeListener?: () => void;

  private instance = tooltipInstance++;
  private visible = false;

  private readonly dialogRef = makeRef<HTMLDialogElement>();

  private get arrowElement(): HTMLElement {
    return this.hostElement.shadowRoot!.querySelector('.arrow')!;
  }

  /** @internal */
  @Method()
  async showTooltip(anchorElement: Element): Promise<void> {
    if (this.showTooltipTimeout || this.visible) {
      return;
    }

    this.visible = true;
    this.clearHideTimeout();

    const dialog = await this.dialogRef.waitForCurrent();

    this.showTooltipTimeout = setTimeout(() => {
      this.applyTooltipPosition(anchorElement, dialog);
      dialog.showPopover();
    }, this.showDelay);
  }

  /** @internal */
  @Method()
  async hideTooltip(hideDelay: number = 50): Promise<void> {
    if (this.hideTooltipTimeout || !this.visible) {
      return;
    }

    this.visible = false;
    this.clearShowTimeout();

    if (this.interactive && this.hideDelay === hideDelay) {
      hideDelay = 150;
    }

    const dialog = await this.dialogRef.waitForCurrent();

    this.hideTooltipTimeout = setTimeout(() => {
      dialog.hidePopover();
    }, hideDelay);

    this.disposeAutoUpdate?.();
  }

  private computeArrowPosition({
    placement,
    middlewareData,
  }: ComputePositionReturn): ArrowPosition | undefined {
    let { x, y } = middlewareData.arrow!;
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
        top: numberToPixel(y),
      };
    }

    if (placement.startsWith('right')) {
      return {
        ...resetPosition,
        left: numberToPixel(-6),
        top: numberToPixel(y),
      };
    }

    if (placement.startsWith('bottom')) {
      return {
        ...resetPosition,
        left: numberToPixel(x),
        top: numberToPixel(-6),
      };
    }

    if (placement.startsWith('left')) {
      return {
        ...resetPosition,
        right: numberToPixel(-6),
        top: numberToPixel(y),
      };
    }
  }

  private async computeTooltipPosition(
    target: Element,
    dialog: HTMLDialogElement
  ): Promise<ComputePositionReturn> {
    return computePosition(target, dialog, {
      strategy: 'fixed',
      placement: this.placement,
      middleware: [
        shift(),
        offset(12),
        arrow({
          element: this.arrowElement,
        }),
        flip({
          fallbackStrategy: 'initialPlacement',
          fallbackAxisSideDirection: 'end',
          padding: 10,
        }),
        hide(),
      ],
    });
  }

  private applyTooltipArrowPosition(
    computeResponse: ComputePositionReturn
  ): void {
    const arrowPosition = this.computeArrowPosition(computeResponse);
    Object.assign(this.arrowElement.style, arrowPosition);
  }

  private async applyTooltipPosition(
    target: Element,
    dialog: HTMLDialogElement
  ): Promise<ComputePositionReturn | undefined> {
    if (!target) {
      return;
    }

    return new Promise<ComputePositionReturn>((resolve) => {
      this.disposeAutoUpdate?.();

      this.disposeAutoUpdate = autoUpdate(
        target,
        dialog,
        async () => {
          setTimeout(async () => {
            const computeResponse = await this.computeTooltipPosition(
              target,
              dialog
            );

            if (computeResponse.middlewareData.arrow) {
              this.applyTooltipArrowPosition(computeResponse);
            }

            const { x, y } = computeResponse;
            Object.assign(dialog.style, {
              left: x !== null ? `${x}px` : '',
              top: y !== null ? `${y}px` : '',
            });

            resolve(computeResponse);
          });
        },
        {
          ancestorResize: true,
          ancestorScroll: true,
          elementResize: true,
          animationFrame: this.animationFrame,
        }
      );
    });
  }

  private async queryAnchorElements(): Promise<Array<HTMLElement> | undefined> {
    if (typeof this.for === 'string') {
      return resolveSelector(this.for, this.hostElement);
    }

    if (this.for instanceof HTMLElement) {
      return Promise.resolve([this.for]);
    }

    if (this.for instanceof Promise) {
      const element = await this.for;
      return [element];
    }
  }

  private async registerTriggerListener(): Promise<void> {
    this.disposeTriggerListener?.();

    const triggerElementList = await this.queryAnchorElements();

    if (!triggerElementList) {
      return;
    }

    const listeners: (() => void)[] = [];
    triggerElementList.forEach((element) => {
      const onMouseEnter = () => {
        this.showTooltip(element);
      };

      const onMouseLeave = () => {
        this.hideTooltip();
      };

      const onFocusIn = () => {
        if (this.showTooltipTimeout !== undefined) {
          clearTimeout(this.showTooltipTimeout);
        }

        onMouseEnter();
      };

      const onFocusOut = () => {
        this.hideTooltip();
      };

      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);
      element.addEventListener('focusin', onFocusIn);
      element.addEventListener('focusout', onFocusOut);

      listeners.push(() => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
        element.removeEventListener('focusin', onFocusIn);
        element.removeEventListener('focusout', onFocusOut);
      });
    });

    this.disposeTriggerListener = () => {
      listeners.forEach((listener) => listener());
    };
  }

  private async registerTooltipListener(): Promise<void> {
    const dialog = await this.dialogRef.waitForCurrent();

    const onMouseEnter = () => {
      if (this.interactive) {
        this.clearHideTimeout();
      }
    };

    const onMouseLeave = () => {
      if (this.interactive) {
        this.hideTooltip();
      }
    };

    const onFocusIn = () => {
      if (this.interactive) {
        this.clearHideTimeout();
      }
    };

    const onFocusOut = () => {
      if (this.interactive) {
        console.log('B onFocusOut');
        this.hideTooltip();
      }
    };

    dialog.addEventListener('mouseenter', onMouseEnter);
    dialog.addEventListener('focusin', onFocusIn);

    dialog.addEventListener('mouseleave', onMouseLeave);
    dialog.addEventListener('focusout', onFocusOut);
  }

  private registerDomChangeListener(): void {
    const observer = new MutationObserver(() => {
      this.registerTriggerListener();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-ix-tooltip'],
      childList: true,
      subtree: true,
    });

    this.disposeDomChangeListener = () => {
      observer.disconnect();
    };
  }

  private clearHideTimeout() {
    clearTimeout(this.hideTooltipTimeout);
    this.hideTooltipTimeout = undefined;
  }

  private clearShowTimeout() {
    clearTimeout(this.showTooltipTimeout);
    this.showTooltipTimeout = undefined;
  }

  componentWillLoad() {
    this.registerTriggerListener();
  }

  componentDidLoad() {
    this.registerDomChangeListener();
    this.registerTooltipListener();
  }

  disconnectedCallback() {
    this.clearHideTimeout();
    this.clearShowTimeout();

    this.disposeAutoUpdate?.();
    this.disposeTriggerListener?.();
    this.disposeTooltipListener?.();
    this.disposeDomChangeListener?.();
  }

  render() {
    return (
      <Host role="tooltip">
        <dialog
          ref={this.dialogRef}
          id={'tooltip-' + this.instance}
          class="dialog"
          popover="manual"
        >
          <div class="tooltip-container">
            <div class={'tooltip-title'}>
              <slot name="title-icon"></slot>
              <ix-typography format="h5">
                {this.titleContent}
                <slot name="title-content"></slot>
              </ix-typography>
            </div>
            <div class={'tooltip-content'}>
              <slot></slot>
            </div>
            <div class="arrow"></div>
          </div>
        </dialog>
      </Host>
    );
  }
}
