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
  autoPlacement,
  autoUpdate,
  computePosition,
  offset,
  shift,
} from '@floating-ui/dom';
import { Component, Element, h, Host, Prop, State } from '@stencil/core';

/**
 * @since 1.3.0
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
   * Define if the user can access the tooltip via mouse.
   */
  @Prop() interactive = false;

  /**
   * Title of the tooltip
   */
  @Prop() titleContent: string;

  /**
   * Title icon of the tooltip
   */
  @Prop() titleIcon: string;

  @State() visible = false;

  @Element() hostElement: HTMLIxTooltipElement;

  private observer: MutationObserver;
  private hideTooltipTimeout: NodeJS.Timeout;
  private onMouseEnterBind = this.showTooltip.bind(this);
  private onMouseLeaveBind = this.hideTooltip.bind(this);
  private disposeAutoUpdate?: () => void;
  private tooltipCloseTimeInMS = 50;

  private get arrowElement() {
    return this.hostElement.shadowRoot.querySelector('.arrow') as HTMLElement;
  }

  private destroyAutoUpdate() {
    if (this.disposeAutoUpdate) {
      this.disposeAutoUpdate();
    }
  }

  private showTooltip(e: any) {
    clearTimeout(this.hideTooltipTimeout);
    this.visible = true;
    this.computeTooltipPosition(e.target);
  }

  private hideTooltip() {
    this.hideTooltipTimeout = setTimeout(() => {
      this.visible = false;
    }, this.tooltipCloseTimeInMS);
    this.destroyAutoUpdate();
  }

  private async computeTooltipPosition(target: HTMLElement) {
    this.disposeAutoUpdate = autoUpdate(
      target,
      this.hostElement,
      async () => {
        const computeResponse = await computePosition(
          target,
          this.hostElement,
          {
            strategy: 'absolute',
            placement: 'top',
            middleware: [
              shift(),
              offset(8),
              arrow({
                element: this.arrowElement,
              }),
              autoPlacement({
                alignment: 'start',
                allowedPlacements: ['top', 'bottom', 'right', 'left'],
              }),
            ],
          }
        );

        if (computeResponse.middlewareData.arrow) {
          const { x, y } = computeResponse.middlewareData.arrow;

          Object.assign(this.arrowElement.style, {
            left: x != null ? `${x}px` : '',
            top: y != null ? `${y}px` : '',
          });
        }

        const { x, y } = computeResponse;
        Object.assign(this.hostElement.style, {
          left: x !== null ? `${x}px` : '',
          top: y !== null ? `${y}px` : '',
        });
      },
      {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
      }
    );
  }

  private queryAnchorElements() {
    return Array.from(document.querySelectorAll(this.for));
  }

  private registerTriggerListener() {
    const elements = this.queryAnchorElements();
    elements.forEach((e) => {
      e.addEventListener('mouseenter', this.onMouseEnterBind);
      e.addEventListener('mouseleave', this.onMouseLeaveBind);
    });
  }

  private registerTooltipListener() {
    this.hostElement.addEventListener('mouseenter', () => {
      if (this.interactive) {
        clearTimeout(this.hideTooltipTimeout);
      }
    });
    this.hostElement.addEventListener('mouseleave', () => {
      this.hideTooltip();
    });
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

    this.registerTriggerListener();
    this.registerTooltipListener();
  }

  disconnectedCallback() {
    this.observer.disconnect();
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
      >
        <div class={'tooltip-title'}>
          {this.titleIcon ? (
            <ix-icon size="12" name={this.titleIcon}></ix-icon>
          ) : null}
          {(
            <ix-typography variant="default-title">
              {this.titleContent}
              <slot name="title"></slot>
            </ix-typography>
          ) ?? null}
        </div>
        <div class={tooltipContentClass}>
          <slot></slot>
        </div>
        <div class="arrow"></div>
      </Host>
    );
  }
}
