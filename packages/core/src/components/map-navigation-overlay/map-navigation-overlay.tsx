// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-map-navigation-overlay',
  styleUrl: 'map-navigation-overlay.scss',
  scoped: true,
})
export class MapNavigationOverlay {
  /**
   * Title of overlay
   */
  @Prop() name: string;

  /**
   * Icon of overlay
   */
  @Prop() icon: string;

  /**
   * Color of icon
   */
  @Prop() color: string;

  /**
   * Event closed
   */
  @Event() closeClick: EventEmitter;

  render() {
    return (
      <Host>
        <div class="overlay-header">
          <div
            class={{
              'color-indicator': true,
              'd-none': this.color === 'undefined' || this.color === undefined,
            }}
            style={{
              'background-color': this.color
                ? `var(--theme-${this.color})`
                : '',
            }}
          ></div>
          <div class="overlay-header-content">
            <ix-icon size="32" name={this.icon}></ix-icon>
            <span class="overlay-header-title" title={this.name}>
              {this.name}
            </span>
          </div>
          <ix-icon-button
            class="overlay-close"
            invisible
            icon="close"
            size="24"
            onClick={() => this.closeClick.emit()}
          ></ix-icon-button>
        </div>

        <slot></slot>
      </Host>
    );
  }
}
