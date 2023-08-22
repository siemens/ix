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
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import anime from 'animejs';

@Component({
  tag: 'ix-map-navigation-overlay',
  styleUrl: 'map-navigation-overlay.scss',
  shadow: true,
})
export class MapNavigationOverlay {
  private static readonly slowTime = 500;

  @Element() hostElement: HTMLIxMapNavigationOverlayElement;

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

  componentWillLoad() {
    anime({
      targets: this.hostElement,
      duration: MapNavigationOverlay.slowTime,
      backdropFilter: [0, 'blur(1rem)'],
      translateX: ['-4rem', 0],
      opacity: [0, 1],
      easing: 'easeOutSine',
      begin: () => {
        this.hostElement.classList.remove('d-none');
      },
    });
  }

  private closeOverlay() {
    anime({
      targets: this.hostElement,
      duration: MapNavigationOverlay.slowTime,
      backdropFilter: ['blur(1rem)', 0],
      translateX: [0, '-4rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        this.closeClick.emit();
        this.hostElement.classList.add('d-none');
      },
    });
  }

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
            ghost
            icon="close"
            size="24"
            onClick={() => this.closeOverlay()}
          ></ix-icon-button>
        </div>

        <slot></slot>
      </Host>
    );
  }
}
