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
import { OnListener } from '../utils/listener';
import { tooltipController } from './tooltip-controller';
import { IxOverlayComponent } from '../utils/overlay';

type ArrowPosition = {
  top?: string;
  left?: string;
  right?: string;
};

const numberToPixel = (value: number) => (value != null ? `${value}px` : '');

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
export class Tooltip implements IxOverlayComponent {
  /**
   * CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`
   */
  @Prop() for?: string | HTMLElement | Promise<HTMLElement>;

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

  @State() visible = false;

  @Element() hostElement!: HTMLIxTooltipElement;

  private observer?: MutationObserver;
  private hideTooltipTimeout?: NodeJS.Timeout;
  private showTooltipTimeout?: NodeJS.Timeout;
  private disposeAutoUpdate?: () => void;
  private disposeListener?: () => void;

  private get arrowElement(): HTMLElement {
    return this.hostElement.shadowRoot.querySelector('.arrow');
  }

  private destroyAutoUpdate() {
    if (this.disposeAutoUpdate !== undefined) {
      this.disposeAutoUpdate();
    }
  }

  /** @internal */
  @Method()
  async showTooltip(anchorElement: Element) {
    clearTimeout(this.hideTooltipTimeout);
    await this.applyTooltipPosition(anchorElement);

    this.showTooltipTimeout = setTimeout(() => {
      tooltipController.present(this);
      // Need to compute and apply tooltip position after initial render,
      // because arrow has no valid bounding rect before that
      this.applyTooltipPosition(anchorElement);
    }, this.showDelay);
  }

  /** @internal */
  @Method()
  async hideTooltip() {
    clearTimeout(this.showTooltipTimeout);
    let hideDelay = 50;

    if (this.interactive && this.hideDelay === hideDelay) {
      hideDelay = 150;
    }

    this.hideTooltipTimeout = setTimeout(() => {
      tooltipController.dismiss(this);
    }, hideDelay);
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
        left: numberToPixel(-6),
        top: numberToPixel(y),
      };
    }

    if (placement.startsWith('bottom')) {
      return {
        left: numberToPixel(x),
        top: numberToPixel(-6),
      };
    }

    if (placement.startsWith('left')) {
      return {
        right: numberToPixel(-6),
        top: numberToPixel(y),
      };
    }
  }

  private async computeTooltipPosition(target: Element) {
    return computePosition(target, this.hostElement, {
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

  private async applyTooltipPosition(target: Element) {
    if (!target) {
      return;
    }

    return new Promise<ComputePositionReturn>((resolve) => {
      this.destroyAutoUpdate();
      this.disposeAutoUpdate = autoUpdate(
        target,
        this.hostElement,
        async () => {
          setTimeout(async () => {
            const computeResponse = await this.computeTooltipPosition(target);

            const isHidden =
              computeResponse.middlewareData.hide?.referenceHidden;

            if (isHidden) {
              setTimeout(() => this.hideTooltip());
              resolve(computeResponse);
            }

            if (computeResponse.middlewareData.arrow) {
              this.applyTooltipArrowPosition(computeResponse);
            }

            const { x, y } = computeResponse;
            Object.assign(this.hostElement.style, {
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

  private clearHideTimeout() {
    if (this.interactive) {
      clearTimeout(this.hideTooltipTimeout);
    }
  }

  private async queryAnchorElements(): Promise<Array<HTMLElement> | undefined> {
    if (typeof this.for === 'string') {
      return Promise.resolve(Array.from(document.querySelectorAll(this.for)));
    }

    if (this.for instanceof HTMLElement) {
      return Promise.resolve([this.for]);
    }

    if (this.for instanceof Promise) {
      const element = await this.for;
      return [element];
    }
  }

  private async registerTriggerListener() {
    const triggerElementList = await this.queryAnchorElements();

    if (this.disposeListener) {
      this.disposeListener();
    }

    if (!triggerElementList) {
      return;
    }

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

      this.disposeListener = () => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
        element.removeEventListener('focusin', onFocusIn);
        element.removeEventListener('focusout', onFocusOut);
      };
    });
  }

  private registerTooltipListener() {
    const { hostElement } = this;
    hostElement.addEventListener('mouseenter', () => this.clearHideTimeout());
    hostElement.addEventListener('focusin', () => this.clearHideTimeout());

    hostElement.addEventListener('mouseleave', () => this.hideTooltip());
    hostElement.addEventListener('focusout', () => this.hideTooltip());
  }

  @OnListener<Tooltip>('keydown', (self) => self.visible)
  async onKeydown(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.hideTooltip();
    }
  }

  componentWillLoad() {
    this.registerTriggerListener();
  }

  componentDidLoad() {
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

  connectedCallback() {
    tooltipController.connected(this);
  }

  disconnectedCallback() {
    this.observer?.disconnect();
    this.destroyAutoUpdate();
    tooltipController.disconnected(this);
  }

  isPresent(): boolean {
    return this.visible;
  }

  present(): void {
    this.visible = true;
  }

  dismiss(): void {
    this.visible = false;
  }

  render() {
    return (
      <Host
        class={{
          visible: this.visible,
          'tooltip-container': true,
        }}
        role="tooltip"
        style={{ background: 'var(--theme-tootlip--background)' }}
      >
        <div class={'tooltip-title'}>
          <slot name="title-icon"></slot>
          <ix-typography variant="default-title">
            {this.titleContent}
            <slot name="title-content"></slot>
          </ix-typography>
        </div>
        <div class={'tooltip-content'}>
          <slot></slot>
        </div>
        <div class="arrow"></div>
      </Host>
    );
  }
}
