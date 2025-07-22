/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  forceUpdate,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import type { Composition } from '../pane/pane.types';
import { applicationLayoutService } from '../utils/application-layout';
import { matchBreakpoint } from '../utils/breakpoints';

@Component({
  tag: 'ix-pane-layout',
  styleUrl: 'pane-layout.scss',
  shadow: true,
})
export class Panes {
  @Element() hostElement!: HTMLIxPaneLayoutElement;

  /**
   * Choose the layout of the panes.
   * When set to 'full-vertical' the vertical panes (left, right) will get the full height.
   * When set to 'full-horizontal' the horizontal panes (top, bottom) will get the full width.
   */
  @Prop() layout: 'full-vertical' | 'full-horizontal' = 'full-vertical';

  /**
   * Set the default variant for all panes in the layout
   */
  @Prop() variant: 'floating' | 'inline' = 'inline';

  /**
   * Set the default border state for all panes in the layout
   */
  @Prop() borderless: boolean = false;

  @State() private isMobile = false;
  @State() private paneElements = 0;

  private panes: Array<{
    slot: string;
    hideOnCollapse: boolean;
    floating: boolean;
  }> = [];

  private observer?: MutationObserver;

  get currentPanes() {
    return this.hostElement.querySelectorAll('ix-pane');
  }

  componentWillLoad() {
    this.paneElements = this.currentPanes.length;

    this.observer = new MutationObserver((mutations) => {
      if (mutations[0].addedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.paneElements += 1;
      } else if (mutations[0].removedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.paneElements -= 1;
      }
    });
    this.observer.observe(this.hostElement, {
      childList: true,
    });

    this.isMobile = matchBreakpoint('sm');
    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint('sm');
    });
  }

  componentDidLoad() {
    this.setPanes(this.currentPanes);
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }

  private setPaneVariant(pane: HTMLIxPaneElement) {
    if (!pane.ignoreLayoutSettings) {
      pane.variant = this.variant;
    }
  }

  private setPaneBorder(pane: HTMLIxPaneElement) {
    if (!pane.ignoreLayoutSettings) {
      if (this.borderless) {
        pane.borderless = true;
      } else {
        const hasVisibleLeftPane = !!this.panes.find(
          (pane) => pane.slot === 'left' && !pane.hideOnCollapse
        );
        if (
          pane.variant === 'floating' &&
          this.layout === 'full-vertical' &&
          hasVisibleLeftPane &&
          (pane.composition === 'top' || pane.composition === 'bottom')
        ) {
          pane.borderless = true;
        } else {
          pane.borderless = false;
        }
      }
    }
  }

  private setPaneZIndex(pane: HTMLIxPaneElement) {
    const isTop = pane.slot === 'top';
    const isBottom = pane.slot === 'bottom';
    const isLeft = pane.slot === 'left';
    const isRight = pane.slot === 'right';

    let zIndex = 1;
    if (this.isMobile) {
      if (isBottom || isTop) {
        zIndex = 3;
      }
    } else {
      if (this.layout === 'full-vertical') {
        if (isLeft || isRight) {
          zIndex = 3;
        }
      } else {
        if (isBottom || isTop) {
          zIndex = 3;
        }
      }
    }
    pane.style.zIndex = zIndex.toString();
  }

  private setPanes(panes: NodeListOf<HTMLIxPaneElement>) {
    this.panes = [];
    panes.forEach((pane) => {
      this.panes.push({
        slot: pane.slot,
        hideOnCollapse: pane.hideOnCollapse,
        floating: pane.variant === 'floating',
      });
    });
  }

  private closeFloatingPanes() {
    this.currentPanes.forEach((pane) => {
      if (pane.expanded && pane.variant === 'floating') {
        pane.expanded = false;
      }
    });
  }

  private configurePanes() {
    let topCount = 0;
    let bottomCount = 0;
    let leftCount = 0;
    let rightCount = 0;

    this.currentPanes.forEach((pane) => {
      const isTop = pane.slot === 'top';
      const isBottom = pane.slot === 'bottom';
      const isLeft = pane.slot === 'left';
      const isRight = pane.slot === 'right';

      if (isLeft) {
        if (leftCount) {
          pane.slot = '';
          return;
        }
        leftCount++;
      } else if (isRight) {
        if (rightCount) {
          pane.slot = '';
          return;
        }
        rightCount++;
      } else if (isTop) {
        if (topCount) {
          pane.slot = '';
          return;
        }
        topCount++;
      } else if (isBottom) {
        if (bottomCount) {
          pane.slot = '';
          return;
        }
        bottomCount++;
      } else {
        pane.slot = '';
        return;
      }

      this.setPaneVariant(pane);
      this.setPaneBorder(pane);
      this.setPaneZIndex(pane);
    });

    this.setPanes(this.currentPanes);
    forceUpdate(this.hostElement);
  }

  @Listen('slotChanged')
  onSlotChanged() {
    this.configurePanes();
  }

  @Listen('hideOnCollapseChanged')
  onCollapsibleChanged(event: CustomEvent) {
    const { slot, hideOnCollapse } = event.detail;

    this.panes.forEach((currentSlot) => {
      if (currentSlot.slot === slot) {
        currentSlot.hideOnCollapse = hideOnCollapse;
      }
    });

    forceUpdate(this.hostElement);
  }

  @Listen('variantChanged')
  onVariantChanged(event: CustomEvent) {
    const { slot, variant } = event.detail;

    this.panes.forEach((currentSlot) => {
      if (currentSlot.slot === slot) {
        currentSlot.floating = variant === 'floating';
      }
    });

    forceUpdate(this.hostElement);
  }

  @Watch('paneElements')
  onPaneElementsChange() {
    this.configurePanes();
  }

  @Watch('variant')
  onVariableChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneVariant(pane);
      this.setPaneBorder(pane);
    });

    this.setPanes(this.currentPanes);
    forceUpdate(this.hostElement);
  }

  @Watch('borderless')
  onBorderChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneBorder(pane);
    });
  }

  @Watch('layout')
  onLayoutChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneBorder(pane);
      this.setPaneZIndex(pane);
    });
  }

  @Watch('isMobile')
  onMobileChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneZIndex(pane);
    });
  }

  private hasPadding(composition: Composition) {
    const pane = this.panes.find((pane) => pane.slot === composition);
    return pane ? !pane.hideOnCollapse && pane.floating : false;
  }

  private hasPaddingMobile(composition: Composition) {
    const pane = this.panes.find((pane) => pane.slot === composition);
    return pane && !pane.hideOnCollapse;
  }

  private slotExists(composition: Composition) {
    const pane = this.panes.find((pane) => pane.slot === composition);
    return !!pane;
  }

  private isFloating(composition: Composition) {
    const pane = this.panes.find((pane) => pane.slot === composition);
    return pane ? pane.floating : false;
  }

  render() {
    return (
      <Host>
        {!this.isMobile ? (
          this.layout == 'full-vertical' ? (
            <div class="side-panes-wrapper">
              <div
                class={{
                  row: true,
                  'padding-left': this.hasPadding('left'),
                  'padding-right': this.hasPadding('right'),
                }}
              >
                <div
                  key="left"
                  class={{ 'absolute-left': this.isFloating('left') }}
                >
                  <slot name="left"></slot>
                </div>
                <div
                  class={{
                    col: true,
                    'padding-top': this.hasPadding('top'),
                    'padding-bottom': this.hasPadding('bottom'),
                  }}
                >
                  <div
                    key="top"
                    class={{ 'absolute-top': this.isFloating('top') }}
                  >
                    <slot name="top"></slot>
                  </div>
                  <div
                    key="content"
                    class="content"
                    onClick={() => this.closeFloatingPanes()}
                  >
                    <slot name="content"></slot>
                    <slot></slot>
                  </div>
                  <div
                    key="bottom"
                    class={{ 'absolute-bottom': this.isFloating('bottom') }}
                  >
                    <slot name="bottom"></slot>
                  </div>
                </div>
                <div
                  key="right"
                  class={{ 'absolute-right': this.isFloating('right') }}
                >
                  <slot name="right"></slot>
                </div>
              </div>
            </div>
          ) : (
            <div class="side-panes-wrapper">
              <div
                class={{
                  col: true,
                  'padding-top': this.hasPadding('top'),
                  'padding-bottom': this.hasPadding('bottom'),
                }}
              >
                <div
                  key="top"
                  class={{ 'absolute-top': this.isFloating('top') }}
                >
                  <slot name="top"></slot>
                </div>
                <div
                  class={{
                    row: true,
                    'padding-left': this.hasPadding('left'),
                    'padding-right': this.hasPadding('right'),
                  }}
                >
                  <div
                    key="left"
                    class={{ 'absolute-left': this.isFloating('left') }}
                  >
                    <slot name="left"></slot>
                  </div>
                  <div
                    key="content"
                    class="content"
                    onClick={() => this.closeFloatingPanes()}
                  >
                    <slot name="content"></slot>
                    <slot></slot>
                  </div>
                  <div
                    key="right"
                    class={{ 'absolute-right': this.isFloating('right') }}
                  >
                    <slot name="right"></slot>
                  </div>
                </div>
                <div
                  key="bottom"
                  class={{ 'absolute-bottom': this.isFloating('bottom') }}
                >
                  <slot name="bottom"></slot>
                </div>
              </div>
            </div>
          )
        ) : (
          <div class="col">
            <div
              key="top"
              style={{
                minHeight: this.hasPaddingMobile('top') ? '48px' : '0',
                display: this.slotExists('top') ? 'block' : 'none',
              }}
            >
              <slot name="top"></slot>
            </div>
            <div
              key="left"
              style={{
                minHeight: this.hasPaddingMobile('left') ? '48px' : '0',
                display: this.slotExists('left') ? 'block' : 'none',
              }}
            >
              <slot name="left"></slot>
            </div>
            <div
              key="content"
              class="content"
              onClick={() => this.closeFloatingPanes()}
            >
              <slot name="content"></slot>
              <slot></slot>
            </div>
            <div
              key="right"
              style={{
                minHeight: this.hasPaddingMobile('right') ? '48px' : '0',
                display: this.slotExists('right') ? 'block' : 'none',
              }}
            >
              <slot name="right"></slot>
            </div>
            <div
              key="bottom"
              style={{
                minHeight: this.hasPaddingMobile('bottom') ? '48px' : '0',
                display: this.slotExists('bottom') ? 'block' : 'none',
              }}
            >
              <slot name="bottom"></slot>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
