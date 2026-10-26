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
import { a11yBoolean } from '../utils/a11y';
import { animate, Easing } from '../utils/animate';
import { NotificationColor } from '../utils/notification-color';
import type { StatusVariant } from '../utils/status.types';
import {
  iconAlarm,
  iconClose,
  iconError,
  iconInfo,
  iconNotification,
  iconSuccess,
  iconWarning,
  iconWarningOctagon,
  iconWarningRhomb,
} from '@siemens/ix-icons/icons';

/**
 * Message bar status values (emphasis set plus Figma `error`; no `base`).
 * Order in demos follows Figma: error, danger, warning, caution, success, information, neutral, accent, critical.
 *
 * @since 6.0.0
 */
export type MessageBarType = Exclude<StatusVariant, 'base'> | 'error';

interface MessageTypeConfig {
  icon?: string;
  color: NotificationColor;
}

/**
 * Inline bar that displays a contextual message or notification.
 *
 * @documentation https://ix.siemens.io//docs/components/messagebar/code.md
 * @figma-main-component-id 103814:17693
 *
 * @slot - Message content.
 */
@Component({
  tag: 'ix-message-bar',
  styleUrl: 'message-bar.scss',
  shadow: true,
})
export class MessageBar {
  /**
   * Specifies the type of the alert.
   */
  @Prop() type: MessageBarType = 'information';

  /**
   * If true, close button is disabled and alert cannot be dismissed by the user
   */
  @Prop() persistent = false;

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
    MessageBarType,
    MessageTypeConfig
  > = {
    error: { icon: iconError, color: '--si-sys-color-text-danger' },
    danger: { icon: iconAlarm, color: '--si-sys-color-text-danger' },
    warning: { icon: iconWarning, color: '--si-sys-color-text-warning' },
    caution: { icon: iconWarningRhomb, color: '--si-sys-color-text-caution' },
    success: { icon: iconSuccess, color: '--si-sys-color-text-success' },
    information: {
      icon: iconInfo,
      color: '--si-sys-color-text-information',
    },
    neutral: {
      icon: iconNotification,
      color: '--si-sys-color-text-secondary',
    },
    accent: { icon: iconNotification, color: '--si-sys-color-text-accent' },
    critical: {
      icon: iconWarningOctagon,
      color: '--si-sys-color-text-critical',
    },
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
      animate(el, [{ opacity: 1 }, { opacity: 0 }], {
        duration: MessageBar.duration,
        easing: Easing.easeOutQuad,
        onComplete: () => {
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
          <ix-icon
            color={this.color}
            name={this.icon}
            aria-hidden={a11yBoolean(true)}
          ></ix-icon>
          <div class="message-content">
            <slot></slot>
          </div>
          {!this.persistent && (
            <ix-icon-button
              icon={iconClose}
              iconColor="--si-sys-color-text-secondary"
              variant="tertiary"
              onClick={() => {
                if (this.divElement) {
                  this.closeAlert(this.divElement);
                }
              }}
              data-testid="close-btn"
            ></ix-icon-button>
          )}
        </div>
      </Host>
    );
  }
}
