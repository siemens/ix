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
   * Anchor point to show tooltip
   */
  @Prop() anchor: string;

  /**
   * Define if the user can access the tooltip via mouse.
   */
  @Prop() tooltipSelectable = false;

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
    return Array.from(
      document.querySelectorAll(`[data-ix-tooltip="${this.anchor}"]`)
    );
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
      if (this.tooltipSelectable) {
        clearTimeout(this.hideTooltipTimeout);
      }
    });
    this.hostElement.addEventListener('mouseleave', () => {
      this.hideTooltip();
    });
  }

  componentDidLoad() {
    if (this.tooltipSelectable) {
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
    return (
      <Host
        class={{
          visible: this.visible,
        }}
      >
        <slot></slot>
        <div class="arrow"></div>
      </Host>
    );
  }
}
