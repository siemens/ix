/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { applicationLayoutService } from '../utils/application-layout';
import { matchBreakpoint } from '../utils/breakpoints';

@Component({
  tag: 'ix-side-pane-group',
  styleUrl: 'side-pane-group.scss',
  shadow: true,
})
export class SidePaneGroup {
  @Element() hostElement: HTMLIxSidePaneGroupElement;

  /**
   * Behaviour of the side pane
   */
  @Prop() behaviour: 'floating' | 'inline' = 'inline';

  /**
   * Choose the variant of the panes
   */
  @Prop() variant: '1' | '2' = '2';

  @State() isMobile: boolean = false;

  private inline: boolean = null;
  private floating: boolean = null;

  get sidePanels() {
    return this.hostElement.querySelectorAll('ix-side-pane');
  }

  componentWillLoad() {
    this.inline = this.behaviour === 'inline';
    this.floating = this.behaviour === 'floating';

    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint('sm');
    });
  }

  componentDidRender() {
    const sidePanels = this.sidePanels;
    sidePanels.forEach((sidePanelElement) => {
      sidePanelElement.behaviour = this.behaviour;
    });
  }

  configureLayout() {
    const sidePanels = this.sidePanels;
    sidePanels.forEach((sidePanelElement) => {
      let zIndex = '1';
      const isBottomTop =
        sidePanelElement.position === 'top' ||
        sidePanelElement.position === 'bottom';

      if (this.isMobile) {
        sidePanelElement.style.removeProperty('z-index');
        return;
      } else if (this.variant === '1') {
        if (!isBottomTop) {
          zIndex = '2';
        }
      } else {
        if (isBottomTop) {
          zIndex = '2';
        }
      }

      sidePanelElement.style.zIndex = zIndex;
    });
  }

  render() {
    return (
      <Host>
        {this.variant == '1' && !this.isMobile ? (
          <ix-row class="row">
            <slot name="left"></slot>
            <ix-col class="col">
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
            </ix-col>
            <slot name="right"></slot>
            {this.floating ? (
              <div class="content absolute">
                <slot name="content"></slot>
              </div>
            ) : null}
          </ix-row>
        ) : null}
        {this.variant == '2' && !this.isMobile ? (
          <div class="side-panes-wrapper">
            <ix-col
              class={{
                col: true,
                'col-floating': this.floating,
              }}
            >
              <div>
                <slot name="top"></slot>
              </div>
              <div class="row">
                <div class="side-pane-wrapper-vertical">
                  <slot name="left"></slot>
                </div>
                {this.inline ? (
                  <div class="content">
                    <slot name="content"></slot>
                  </div>
                ) : null}
                <div class="side-pane-wrapper-vertical">
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
            </ix-col>
          </div>
        ) : null}
        {this.isMobile ? (
          <ix-col class="col">
            <div>
              <slot name="top"></slot>
              <slot name="left"></slot>
            </div>
            <div class="content">
              <slot name="content"></slot>
            </div>
            <div>
              <slot name="right"></slot>
              <slot name="bottom"></slot>
            </div>
          </ix-col>
        ) : null}
      </Host>
    );
  }
}
