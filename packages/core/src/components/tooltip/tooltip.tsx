/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
import { OnListener } from '../utils/listener';

type ArrowPosition = {
  top?: string;
  left?: string;
  right?: string;
};

const numberToPixel = (value: number) => (value != null ? `${value}px` : '');

let sequentialInstanceId = 0;

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
  @Prop() for: string;

  /**
   * Title of the tooltip
   */
  @Prop() titleContent: string;

  /**
   * Define if the user can access the tooltip via mouse.
   */
  @Prop() interactive = false;

  /**
   * Initial placement of the tooltip. If the placement don"t have enough space,
   * the tooltip will placed on another location.
   *
   * @since 1.5.0
   */
  @Prop() placement: 'top' | 'right' | 'bottom' | 'left' = 'top';

  /** @internal */
  @Prop() animationFrame = false;

  @State() visible = false;

  @Element() hostElement: HTMLIxTooltipElement;

  private id = ++sequentialInstanceId;
  private observer: MutationObserver;
  private hideTooltipTimeout: NodeJS.Timeout;
  private onEnterElementBind = this.onTooltipShow.bind(this);
  private onLeaveElementBind = this.onTooltipHide.bind(this);
  private disposeAutoUpdate?: () => void;
  private tooltipCloseTimeInMS = 50;

  private get arrowElement() {
    return this.hostElement.shadowRoot.querySelector('.arrow') as HTMLElement;
  }

  private destroyAutoUpdate() {
    if (this.disposeAutoUpdate !== undefined) {
      this.disposeAutoUpdate();
    }
  }

  private onTooltipShow(e: Event) {
    this.showTooltip(e.target as Element);
  }

  private onTooltipHide() {
    this.hideTooltip();
  }

  /** @internal */
  @Method()
  async showTooltip(anchorElement: any) {
    clearTimeout(this.hideTooltipTimeout);
    this.computeTooltipPosition(anchorElement).then(() => {
      this.visible = true;
    });
  }

  /** @internal */
  @Method()
  async hideTooltip() {
    this.hideTooltipTimeout = setTimeout(() => {
      this.visible = false;
    }, this.tooltipCloseTimeInMS);
    this.destroyAutoUpdate();
  }

  private computeArrowPosition({
    placement,
    middlewareData,
  }: ComputePositionReturn): ArrowPosition {
    let { x, y } = middlewareData.arrow;

    if (placement.startsWith('top')) {
      return {
        left: numberToPixel(x),
        top: numberToPixel(y),
      };
    }

    if (placement.startsWith('right')) {
      return {
        left: numberToPixel(-4),
        top: numberToPixel(y),
      };
    }

    if (placement.startsWith('bottom')) {
      return {
        left: numberToPixel(x),
        top: numberToPixel(-4),
      };
    }

    if (placement.startsWith('left')) {
      return {
        right: numberToPixel(-4),
        top: numberToPixel(y),
      };
    }
  }

  private async computeTooltipPosition(target: Element) {
    if (!target) {
      return;
    }

    return new Promise<void>((resolve) => {
      this.disposeAutoUpdate = autoUpdate(
        target,
        this.hostElement,
        async () => {
          setTimeout(async () => {
            const computeResponse = await computePosition(
              target,
              this.hostElement,
              {
                strategy: 'fixed',
                placement: this.placement,
                middleware: [
                  shift(),
                  offset(8),
                  arrow({
                    element: this.arrowElement,
                  }),
                  flip({
                    fallbackStrategy: 'initialPlacement',
                    padding: 10,
                  }),
                ],
              }
            );

            if (computeResponse.middlewareData.arrow) {
              const arrowPosition = this.computeArrowPosition(computeResponse);
              Object.assign(this.arrowElement.style, arrowPosition);
            }

            const { x, y } = computeResponse;
            Object.assign(this.hostElement.style, {
              left: x !== null ? `${x}px` : '',
              top: y !== null ? `${y}px` : '',
            });

            resolve();
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

  private clearHideTimeout() {
    if (this.interactive) {
      clearTimeout(this.hideTooltipTimeout);
    }
  }

  private queryAnchorElements() {
    return Array.from(document.querySelectorAll(this.for));
  }

  private updateAriaDescribedBy(element: Element, describedBy: string) {
    const oldDescribedBy = element.getAttribute('aria-describedby');

    if (oldDescribedBy.indexOf(describedBy) != -1) {
      return;
    }

    const newDescribedBy = `${oldDescribedBy} ${describedBy}`;
    element.setAttribute('aria-describedby', newDescribedBy);
  }

  private getTooltipId() {
    return this.hostElement.id || 'ix-tooltip-' + this.id;
  }

  private registerTriggerListener() {
    const elements = this.queryAnchorElements();
    elements.forEach((e) => {
      e.addEventListener('mouseenter', this.onEnterElementBind);
      e.addEventListener('mouseleave', this.onLeaveElementBind);
      e.addEventListener('focusin', this.onEnterElementBind);
      e.addEventListener('focusout', this.onLeaveElementBind);
      this.updateAriaDescribedBy(e, this.getTooltipId());
    });
  }

  private registerTooltipListener() {
    const { hostElement } = this;
    hostElement.addEventListener('mouseenter', () => this.clearHideTimeout());
    hostElement.addEventListener('focusin', () => this.clearHideTimeout());
    hostElement.addEventListener('mouseleave', () => this.onTooltipHide());
    hostElement.addEventListener('focusout', () => this.onTooltipHide());
  }

  @OnListener<Tooltip>('keydown', (self) => self.visible)
  async onKeydown(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.onTooltipHide();
    }
  }

  componentWillLoad() {
    this.registerTriggerListener();
  }

  componentDidLoad() {
    if (this.interactive) {
      this.tooltipCloseTimeInMS = 150;
    }

    this.observer = new MutationObserver(() => {
      this.registerTriggerListener();
    });

    this.observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-ix-tooltip'],
      childList: true,
      subtree: true,
    });

    this.registerTooltipListener();
  }

  disconnectedCallback() {
    this.observer?.disconnect();
    this.destroyAutoUpdate();
  }

  render() {
    const tooltipContentClass = {
      'tooltip-content': true,
    };

    return (
      <Host
        class={{
          visible: this.visible,
        }}
        id={this.getTooltipId()}
        role="tooltip"
      >
        <div class={'tooltip-title'}>
          <slot name="title-icon"></slot>
          <ix-typography variant="default-title">
            {this.titleContent}
            <slot name="title-content"></slot>
          </ix-typography>
        </div>
        <div class={tooltipContentClass}>
          <slot></slot>
        </div>
        <div class="arrow"></div>
      </Host>
    );
  }
}
