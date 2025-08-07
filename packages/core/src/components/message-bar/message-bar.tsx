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
import {
  iconClose,
  iconError,
  iconInfo,
  iconNotification,
  iconSuccess,
  iconWarning,
  iconWarningRhomb,
} from '@siemens/ix-icons/icons';

interface MessageTypeConfig {
  icon?: string;
  color: NotificationColor;
}

@Component({
  tag: 'ix-message-bar',
  styleUrl: 'message-bar.scss',
  shadow: true,
})
export class MessageBar {
  /**
   * Specifies the type of the alert.
   * @deprecated Type `danger` will be removed in 4.0. Use `alarm` instead.
   */
  @Prop() type:
    | 'alarm'
    | 'danger'
    | 'critical'
    | 'warning'
    | 'success'
    | 'info'
    | 'neutral'
    | 'primary' = 'info';

  /**
   * If true, close button is enabled and alert can be dismissed by the user
   */
  @Prop() dismissible = true;

  /**
   * An event emitted when the close button is clicked
   */
  @Event() closedChange!: EventEmitter;

  /**
   * An event emitted when the close animation is completed
   */
  @Event() closeAnimationCompleted!: EventEmitter;

  @State() icon?: string;
  @State() color?: NotificationColor;

  private static readonly duration = 300;
  private static readonly messageTypeConfigs: Record<
    string,
    MessageTypeConfig
  > = {
    alarm: { icon: iconError, color: 'color-alarm' },
    danger: { icon: iconError, color: 'color-alarm' },
    critical: { icon: iconWarningRhomb, color: 'color-critical' },
    warning: { icon: iconWarning, color: 'color-warning' },
    success: { icon: iconSuccess, color: 'color-success' },
    info: { icon: iconInfo, color: 'color-info' },
    neutral: { icon: iconNotification, color: 'color-neutral' },
    primary: { icon: iconNotification, color: 'color-primary' },
  };

  private divElement?: HTMLElement;

  componentWillRender() {
    const config = MessageBar.messageTypeConfigs[this.type];
    if (config) {
      this.icon = config.icon;
      this.color = config.color;
    }
  }

  private closeAlert(el: HTMLElement) {
    const { defaultPrevented } = this.closedChange.emit();

    if (!defaultPrevented) {
      anime({
        targets: el,
        duration: MessageBar.duration,
        opacity: [1, 0],
        easing: 'easeOutSine',
        complete: () => {
          el.classList.add('message-bar-hidden');
          this.closeAnimationCompleted.emit();
        },
      });
    }
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
              icon={iconClose}
              iconColor="color-soft-text"
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
