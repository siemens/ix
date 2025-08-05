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
import {
  Component,
  Element,
  h,
  Host,
  Method,
  Prop,
  State,
} from '@stencil/core';
import { resolveSelector } from '../utils/find-element';
import { ElementReference } from 'src/components';
import { makeRef } from '../utils/make-ref';
import { addDisposableEventListenerAsArray } from '../utils/disposable-event-listener';

type ArrowPosition = {
  top?: string;
  left?: string;
  right?: string;
};

const numberToPixel = (value?: number | null) =>
  value !== null ? `${value}px` : '';

let tooltipInstance = 0;

/**
 * @slot title-icon - Icon of tooltip title
 * @slot title-content - Content of tooltip title
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
  @Prop() for?: ElementReference | ElementReference[];

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
   */
  @Prop() placement: 'top' | 'right' | 'bottom' | 'left' = 'top';

  /** @internal */
  @Prop() showDelay = 0;

  /** @internal */
  @Prop() hideDelay = 50;

  /** @internal */
  @Prop() animationFrame = false;

  @Element() hostElement!: HTMLIxTooltipElement;

  @State() private visible = false;

  private hideTooltipTimeout?: NodeJS.Timeout;
  private showTooltipTimeout?: NodeJS.Timeout;
  private visibleFor?: Element;

  private disposeAutoUpdate?: () => void;
  private disposeTriggerListener?: () => void;
  private disposeTooltipListener?: () => void;
  private disposeDomChangeListener?: () => void;

  private readonly instance = tooltipInstance++;

  private readonly dialogRef = makeRef<HTMLDialogElement>();

  private get arrowElement(): HTMLElement {
    return this.hostElement.shadowRoot!.querySelector('.arrow')!;
  }

  /** @internal */
  @Method()
  async showTooltip(anchorElement: Element) {
    this.clearTimeouts();

    if (this.showTooltipTimeout || this.visibleFor === anchorElement) {
      return;
    }

    const dialog = await this.dialogRef.waitForCurrent();

    this.showTooltipTimeout = setTimeout(() => {
      this.setAnchorElement(anchorElement);
      dialog.showPopover();
      this.applyTooltipPosition(anchorElement, dialog);
      this.registerTooltipListener(dialog);
    }, this.showDelay);
  }

  /** @internal */
  @Method()
  async hideTooltip(hideDelay: number = this.hideDelay) {
    this.clearTimeouts();

    if (this.hideTooltipTimeout || !this.visible) {
      return;
    }

    if (this.interactive && hideDelay === 50) {
      hideDelay = 150;
    }

    const dialog = await this.dialogRef.waitForCurrent();

    this.hideTooltipTimeout = setTimeout(() => {
      this.setAnchorElement();
      dialog.hidePopover();
      this.disposeAutoUpdate?.();
      this.disposeTooltipListener?.();
    }, hideDelay);
  }

  private setAnchorElement(anchorElement?: Element) {
    if (!anchorElement) {
      this.visibleFor = undefined;
      this.visible = false;
    } else {
      this.visibleFor = anchorElement;
      this.visible = true;
    }
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

  private applyTooltipArrowPosition(computeResponse: ComputePositionReturn) {
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
          const computeResponse = await this.computeTooltipPosition(
            target,
            dialog
          );

          const isHidden = computeResponse.middlewareData.hide?.referenceHidden;

          if (isHidden) {
            this.hideTooltip(0);
            resolve(computeResponse);
          }

          if (computeResponse.middlewareData.arrow) {
            this.applyTooltipArrowPosition(computeResponse);
          }

          const { x, y } = computeResponse;
          Object.assign(dialog.style, {
            left: numberToPixel(x),
            top: numberToPixel(y),
          });

          resolve(computeResponse);
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

  private async queryAnchorElements(): Promise<HTMLElement[] | undefined> {
    if (this.for) {
      if (Array.isArray(this.for)) {
        return this.resolveElements(this.for);
      } else {
        return this.resolveElements([this.for]);
      }
    }
  }

  private async resolveElements(
    references: ElementReference[]
  ): Promise<HTMLElement[]> {
    const elements: HTMLElement[] = [];

    await Promise.all(
      references.map(async (reference) => {
        if (typeof reference === 'string') {
          const resolvedElements = await resolveSelector(
            reference,
            this.hostElement
          );

          if (resolvedElements) {
            elements.push(...resolvedElements);
          }
        } else if (reference instanceof HTMLElement) {
          elements.push(reference);
        } else if (reference instanceof Promise) {
          elements.push(await reference);
        }
      })
    );

    return elements;
  }

  private async registerTriggerListener() {
    this.disposeTriggerListener?.();

    const triggerElementList = await this.queryAnchorElements();

    if (!triggerElementList) {
      return;
    }

    const listeners: {
      element: Element | Window | Document;
      eventType: string;
      callback: EventListenerOrEventListenerObject;
    }[] = [];

    triggerElementList.forEach((element) => {
      listeners.push(
        ...[
          {
            element: element,
            eventType: 'mouseenter',
            callback: () => {
              this.showTooltip(element);
            },
          },
          {
            element: element,
            eventType: 'mouseleave',
            callback: () => {
              this.hideTooltip();
            },
          },
          {
            element: element,
            eventType: 'focus',
            callback: () => {
              this.showTooltip(element);
            },
          },
          {
            element: element,
            eventType: 'focusout',
            callback: () => {
              this.hideTooltip();
            },
          },
        ]
      );
    });

    this.disposeTriggerListener = addDisposableEventListenerAsArray(listeners);
  }

  private registerTooltipListener(dialog: HTMLDialogElement) {
    this.disposeTooltipListener?.();

    this.disposeTooltipListener = addDisposableEventListenerAsArray([
      {
        element: dialog,
        eventType: 'mouseenter',
        callback: () => {
          if (this.interactive) {
            this.clearHideTimeout();
          }
        },
      },
      {
        element: dialog,
        eventType: 'focus',
        callback: () => {
          if (this.interactive) {
            this.clearHideTimeout();
          }
        },
      },
      {
        element: dialog,
        eventType: 'mouseleave',
        callback: () => {
          this.hideTooltip();
        },
      },
      {
        element: dialog,
        eventType: 'focusout',
        callback: () => {
          this.hideTooltip();
        },
      },
      {
        element: dialog,
        eventType: 'click',
        callback: (event: Event) => {
          event.stopPropagation();
        },
      },
      {
        element: document,
        eventType: 'keydown',
        callback: (event: Event) => {
          if ((event as KeyboardEvent).key === 'Escape') {
            this.hideTooltip();
          }
        },
      },
    ]);
  }

  private registerDomChangeListener() {
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

  private clearTimeouts() {
    this.clearHideTimeout();
    this.clearShowTimeout();
  }

  componentWillLoad() {
    this.registerTriggerListener();
  }

  componentDidLoad() {
    this.registerDomChangeListener();
  }

  disconnectedCallback() {
    this.clearTimeouts();

    this.disposeAutoUpdate?.();
    this.disposeTriggerListener?.();
    this.disposeTooltipListener?.();
    this.disposeDomChangeListener?.();
  }

  render() {
    return (
      <Host role="tooltip" class={{ visible: this.visible }}>
        <dialog
          ref={this.dialogRef}
          id={'tooltip-' + this.instance}
          class="dialog"
          popover="manual"
          inert={!this.visible}
        >
          <div class="tooltip-container">
            <div class="content-wrapper">
              <div class={'tooltip-title'}>
                <slot name="title-icon"></slot>
                <ix-typography format="h5">
                  {this.titleContent}
                  <slot name="title-content"></slot>
                </ix-typography>
              </div>
              <slot></slot>
              <div class="arrow"></div>
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
