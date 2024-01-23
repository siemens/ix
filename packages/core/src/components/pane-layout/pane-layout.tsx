/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { Position } from '../pane/pane';
import { applicationLayoutService } from '../utils/application-layout';
import { matchBreakpoint } from '../utils/breakpoints';

@Component({
  tag: 'ix-pane-layout',
  styleUrl: 'pane-layout.scss',
  shadow: true,
})
export class Panes {
  @Element() hostElement: HTMLIxPaneLayoutElement;

  /**
   * Behaviour of the side pane
   */
  @Prop() variant: 'floating' | 'inline' = 'inline';

  /**
   * Choose the layout of the panes
   */
  @Prop() layout: 'full-height-left-right' | 'full-width-top-bottom' =
    'full-height-left-right';

  @State() isMobile: boolean = false;

  @State() paneElements: number = 0;

  private inline: boolean = null;
  private floating: boolean = null;
  private observer: MutationObserver = null;

  componentWillLoad() {
    this.inline = this.variant === 'inline';
    this.floating = this.variant === 'floating';

    // set initial pane amount
    this.paneElements = this.hostElement.querySelectorAll('ix-pane').length;

    // recognize inserted or removed panes
    this.observer = new MutationObserver((mutations) => {
      if (mutations[0].addedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.paneElements += 1;
      } else if (mutations[0].removedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.paneElements -= 1;
      }
    });
    this.observer.observe(this.hostElement, { childList: true });

    // set isMobile and add observer
    this.isMobile = matchBreakpoint('sm');
    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint('sm');
    });
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

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
    });
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
                {this.inline ? (
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
                <div class="content absolute">
                  <slot name="content"></slot>
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
                {this.inline ? (
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
                <div class="content absolute">
                  <slot name="content"></slot>
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
