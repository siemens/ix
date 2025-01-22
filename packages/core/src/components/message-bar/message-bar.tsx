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
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import anime from 'animejs';
import { NotificationColor } from '../utils/notification-color';

@Component({
  tag: 'ix-message-bar',
  styleUrl: 'message-bar.scss',
  shadow: true,
})
export class MessageBar {
  /**
   * Specifies the type of the alert.
   */
  @Prop() type: 'danger' | 'warning' | 'info' = 'info';

  /**
   * If true, close button is enabled and alert can be dismissed by the user
   */
  @Prop() dismissible = true;

  /**
   * An event emitted when the close button is clicked
   */
  @Event() closedChange!: EventEmitter;

  @State() icon?: 'error' | 'warning' | 'info';

  @State() color?: NotificationColor;

  private static readonly duration = 300;

  private divElement?: HTMLElement;

  componentWillRender() {
    if (this.type === 'danger') {
      this.icon = 'error';
      this.color = 'color-alarm';
    }

    if (this.type === 'info') {
      this.icon = 'info';
      this.color = 'color-info';
    }

    if (this.type === 'warning') {
      this.icon = 'warning';
      this.color = 'color-warning';
    }
  }

  private closeAlert(el: HTMLElement) {
    anime({
      targets: el,
      duration: MessageBar.duration,
      opacity: [1, 0],
      easing: 'easeOutSine',
      complete: () => {
        el.classList.add('d-none');
      },
    });
    this.closedChange.emit();
  }

  render() {
    return (
      <Host>
        <div
          class={{ 'message-container': true, [this.type]: true }}
          role="alert"
          ref={(el) => (this.divElement = el as HTMLElement)}
        >
          <ix-icon color={this.color} name={this.icon}></ix-icon>
          <div class="message-content">
            <slot></slot>
          </div>
          {this.dismissible ? (
            <ix-icon-button
              icon={'close'}
              size="24"
              ghost={true}
              onClick={() => {
                if (this.divElement) {
                  this.closeAlert(this.divElement);
                }
              }}
              data-testid="close-btn"
            ></ix-icon-button>
          ) : (
            ''
          )}
        </div>
      </Host>
    );
  }
}
