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
import { Position } from '../pane/pane';
import { applicationLayoutService } from '../utils/application-layout';
import { matchBreakpoint } from '../utils/breakpoints';

/**
 * @since 2.1.0
 */
@Component({
  tag: 'ix-pane-layout',
  styleUrl: 'pane-layout.scss',
  shadow: true,
})
export class Panes {
  @Element() hostElement: HTMLIxPaneLayoutElement;

  /**
   * Choose the layout of the panes
   */
  @Prop({ reflect: true }) layout:
    | 'full-height-left-right'
    | 'full-width-top-bottom' = 'full-height-left-right';

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
  @State() private panes: Array<{
    paneId: string;
    slot: string;
    collapsible: boolean;
    floating: boolean;
  }> = [];

  private observer: MutationObserver;

  get currentPanes() {
    return this.hostElement.querySelectorAll('ix-pane');
  }

  componentWillLoad() {
    // set initial pane amount
    this.paneElements = this.currentPanes.length;

    // recognize inserted or removed panes
    this.observer = new MutationObserver((mutations) => {
      if (mutations[0].addedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.setPanes(this.currentPanes);
        this.paneElements += 1;
      } else if (mutations[0].removedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.setPanes(this.currentPanes);
        this.paneElements -= 1;
      }
    });
    this.observer.observe(this.hostElement, {
      childList: true,
    });

    // set isMobile and add observer
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

  private setPaneBorder(pane: HTMLIxPaneElement) {
    if (this.borderless) {
      pane.borderless = true;
    } else {
      const hasCollapsibleLeftPane = this.panes.find(
        (pane) => pane.slot === 'left' && pane.collapsible
      );
      if (
        pane.variant === 'floating' &&
        this.layout === 'full-height-left-right' &&
        hasCollapsibleLeftPane &&
        (pane.position === 'top' || pane.position === 'bottom')
      ) {
        pane.borderless = true;
      } else {
        pane.borderless = false;
      }
    }
  }

  private setPanes(panes: NodeListOf<HTMLIxPaneElement>) {
    this.panes = [];
    panes.forEach((pane) => {
      this.panes.push({
        paneId: pane.identifier,
        slot: pane.slot,
        collapsible: pane.collapsible,
        floating: pane.variant === 'floating',
      });
    });
  }

  @Listen('slotChanged')
  onSlotChanged(event: CustomEvent) {
    const { paneId, newSlot } = event.detail;

    this.panes.forEach((currentSlot) => {
      if (currentSlot.paneId === paneId) {
        currentSlot.slot = newSlot;
      }
    });

    this.configureLayout();
    forceUpdate(this.hostElement);
  }

  @Listen('collapsibleChanged')
  onCollapsibleChanged(event: CustomEvent) {
    const { paneId, collapsible } = event.detail;

    this.panes.forEach((currentSlot) => {
      if (currentSlot.paneId === paneId) {
        currentSlot.collapsible = collapsible;
      }
    });

    forceUpdate(this.hostElement);
  }

  @Listen('variantChanged')
  onVariantChanged(event: CustomEvent) {
    const { paneId, variant } = event.detail;

    this.panes.forEach((currentSlot) => {
      if (currentSlot.paneId === paneId) {
        currentSlot.floating = variant === 'floating';
      }
    });

    forceUpdate(this.hostElement);
  }

  @Watch('variant')
  setVariant() {
    this.currentPanes.forEach((pane) => {
      pane.variant = this.variant;
    });
  }

  @Watch('borderless')
  setBorders() {
    this.currentPanes.forEach((pane) => {
      this.setPaneBorder(pane);
    });
  }

  @Watch('layout')
  @Watch('paneElements')
  @Watch('isMobile')
  configureLayout() {
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
          pane.slot = undefined;
          return;
        }
        leftCount++;
      } else if (isRight) {
        if (rightCount) {
          pane.slot = undefined;
          return;
        }
        rightCount++;
      } else if (isTop) {
        if (topCount) {
          pane.slot = undefined;
          return;
        }
        topCount++;
      } else if (isBottom) {
        if (bottomCount) {
          pane.slot = undefined;
          return;
        }
        bottomCount++;
      } else {
        pane.slot = undefined;
        return;
      }

      let zIndex = 1;
      if (this.isMobile) {
        if (isBottom || isTop) {
          zIndex = 3;
        }
      } else {
        if (this.layout === 'full-height-left-right') {
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

      if (pane.variant === undefined) {
        pane.variant = this.variant;
      }

      if (pane.borderless === undefined) {
        this.setPaneBorder(pane);
      }
    });
  }

  private hasPadding(position: Position) {
    const pane = this.panes.find((pane) => pane.slot === position);
    return pane ? pane.collapsible && pane.floating : false;
  }

  private isFloating(position: Position) {
    const pane = this.panes.find((pane) => pane.slot === position);
    return pane ? pane.floating : false;
  }

  render() {
    return (
      <Host>
        {this.layout == 'full-height-left-right' && !this.isMobile ? (
          <div class="side-panes-wrapper">
            <div
              class={{
                row: true,
                'padding-left': this.hasPadding('left'),
                'padding-right': this.hasPadding('right'),
              }}
            >
              <div class={{ 'absolute-left': this.isFloating('left') }}>
                <slot name="left"></slot>
              </div>
              <div
                class={{
                  col: true,
                  'padding-top': this.hasPadding('top'),
                  'padding-bottom': this.hasPadding('bottom'),
                }}
              >
                <div class={{ 'absolute-top': this.isFloating('top') }}>
                  <slot name="top"></slot>
                </div>
                <div class="content">
                  <slot name="content"></slot>
                </div>
                <div class={{ 'absolute-bottom': this.isFloating('bottom') }}>
                  <slot name="bottom"></slot>
                </div>
              </div>
              <div class={{ 'absolute-right': this.isFloating('right') }}>
                <slot name="right"></slot>
              </div>
            </div>
          </div>
        ) : null}
        {this.layout == 'full-width-top-bottom' && !this.isMobile ? (
          <div class="side-panes-wrapper">
            <div
              class={{
                col: true,
                'padding-top': this.hasPadding('top'),
                'padding-bottom': this.hasPadding('bottom'),
              }}
            >
              <div class={{ 'absolute-top': this.isFloating('top') }}>
                <slot name="top"></slot>
              </div>
              <div
                class={{
                  row: true,
                  'padding-left': this.hasPadding('left'),
                  'padding-right': this.hasPadding('right'),
                }}
              >
                <div class={{ 'absolute-left': this.isFloating('left') }}>
                  <slot name="left"></slot>
                </div>
                <div class="content">
                  <slot name="content"></slot>
                </div>
                <div class={{ 'absolute-right': this.isFloating('right') }}>
                  <slot name="right"></slot>
                </div>
              </div>
              <div class={{ 'absolute-bottom': this.isFloating('bottom') }}>
                <slot name="bottom"></slot>
              </div>
            </div>
          </div>
        ) : null}
        {this.isMobile ? (
          <div class="col">
            <div>
              <slot name="top"></slot>
            </div>
            <div>
              <slot name="left"></slot>
            </div>
            <div class="content">
              <slot name="content"></slot>
            </div>
            <div>
              <slot name="right"></slot>
            </div>
            <div>
              <slot name="bottom"></slot>
            </div>
          </div>
        ) : null}
      </Host>
    );
  }
}
