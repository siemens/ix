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
   * Variant of the side pane
   */
  @Prop() variant: 'floating' | 'inline' = 'inline';

  /**
   * Choose the layout of the panes
   */
  @Prop({ reflect: true }) layout:
    | 'full-height-left-right'
    | 'full-width-top-bottom' = 'full-height-left-right';

  /**
   * Toggle border
   */
  @Prop() borderless: boolean = false;

  @State() private isMobile = false;
  @State() private paneElements = 0;
  @State() private floating = false;
  @State() private slots: Array<string> = [];

  private observer: MutationObserver;

  componentWillLoad() {
    this.floating = this.variant === 'floating';

    const panes = this.hostElement.querySelectorAll('ix-pane');

    // set initial pane amount
    this.paneElements = panes.length;

    // set initial slots
    this.setSlots(panes);

    // recognize inserted or removed panes
    this.observer = new MutationObserver((mutations) => {
      if (mutations[0].addedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.paneElements += 1;
        this.setSlots(this.hostElement.querySelectorAll('ix-pane'));
      } else if (mutations[0].removedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.paneElements -= 1;
        this.setSlots(this.hostElement.querySelectorAll('ix-pane'));
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

  disconnectedCallback() {
    this.observer.disconnect();
  }

  private setSlots(panes: NodeListOf<HTMLIxPaneElement>) {
    panes.forEach((pane) => {
      this.slots.push(pane.slot);
    });
  }

  @Listen('slotChanged')
  onSlotChanged(event: CustomEvent) {
    const { oldSlot, newSlot } = event.detail;

    this.slots = this.slots.filter((slot) => slot !== oldSlot);
    this.slots.push(newSlot);
  }

  @Watch('variant')
  onVariantChange(value: 'inline' | 'floating') {
    this.floating = value === 'floating';

    this.configureLayout();
  }

  @Watch('borderless')
  @Watch('layout')
  @Watch('paneElements')
  @Watch('isMobile')
  configureLayout() {
    let topCount = 0;
    let bottomCount = 0;
    let leftCount = 0;
    let rightCount = 0;

    const panes = Array.from(
      this.hostElement.querySelectorAll('ix-pane')
    ).reverse();

    panes.forEach((sidePanelElement) => {
      const isTop = sidePanelElement.slot === 'top';
      const isBottom = sidePanelElement.slot === 'bottom';
      const isLeft = sidePanelElement.slot === 'left';
      const isRight = sidePanelElement.slot === 'right';

      if (isLeft) {
        if (leftCount) {
          sidePanelElement.slot = undefined;
          return;
        }
        leftCount++;
      } else if (isRight) {
        if (rightCount) {
          sidePanelElement.slot = undefined;
          return;
        }
        rightCount++;
      } else if (isTop) {
        if (topCount) {
          sidePanelElement.slot = undefined;
          return;
        }
        topCount++;
      } else if (isBottom) {
        if (bottomCount) {
          sidePanelElement.slot = undefined;
          return;
        }
        bottomCount++;
      }

      if (this.isMobile) {
        sidePanelElement.style.removeProperty('z-index');
      } else {
        let zIndex = 1;

        if (this.layout === 'full-height-left-right') {
          if (isLeft || isRight) {
            zIndex = 2;
          }
        } else {
          if (isBottom || isTop) {
            zIndex = 2;
          }
        }

        sidePanelElement.style.zIndex = zIndex.toString();
      }

      sidePanelElement.position = sidePanelElement.slot as Position;
      sidePanelElement.variant = this.variant;

      if (!sidePanelElement.getAttribute('borderless')) {
        if (this.borderless) {
          sidePanelElement.borderless = true;
        } else {
          if (
            this.layout === 'full-height-left-right' &&
            (sidePanelElement.position === 'top' ||
              sidePanelElement.position === 'bottom')
          ) {
            sidePanelElement.borderless = true;
          } else {
            sidePanelElement.borderless = false;
          }
        }
      }
    });
  }

  private getContentContainerClasses() {
    return {
      'padding-top': this.slots.includes('top'),
      'padding-bottom': this.slots.includes('bottom'),
      'padding-left': this.slots.includes('left'),
      'padding-right': this.slots.includes('right'),
      absolute: true,
    };
  }

  render() {
    return (
      <Host>
        {this.layout == 'full-height-left-right' && !this.isMobile ? (
          <div class="side-panes-wrapper">
            <div class="row">
              <div>
                <slot name="left"></slot>
              </div>
              <div class="col">
                <div>
                  <slot name="top"></slot>
                </div>
                {!this.floating ? (
                  <div class="content">
                    <slot name="content"></slot>
                  </div>
                ) : null}
                <div>
                  <slot name="bottom"></slot>
                </div>
              </div>
              <div>
                <slot name="right"></slot>
              </div>
              {this.floating ? (
                <div class={this.getContentContainerClasses()}>
                  <div class="content">
                    <slot name="content"></slot>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        {this.layout == 'full-width-top-bottom' && !this.isMobile ? (
          <div class="side-panes-wrapper">
            <div class="col">
              <div>
                <slot name="top"></slot>
              </div>
              <div class="row">
                <div>
                  <slot name="left"></slot>
                </div>
                {!this.floating ? (
                  <div class="content">
                    <slot name="content"></slot>
                  </div>
                ) : null}
                <div>
                  <slot name="right"></slot>
                </div>
              </div>
              <div>
                <slot name="bottom"></slot>
              </div>
              {this.floating ? (
                <div class={this.getContentContainerClasses()}>
                  <div class="content">
                    <slot name="content"></slot>
                  </div>
                </div>
              ) : null}
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
