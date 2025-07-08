/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  State,
} from '@stencil/core';
import { ToastType } from './toast-utils';
import {
  iconClose,
  iconError,
  iconInfo,
  iconSuccess,
  iconWarning,
} from '@siemens/ix-icons/icons';

@Component({
  tag: 'ix-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class Toast {
  /**
   * Toast type
   */
  @Prop() type: ToastType = 'info';

  /**
   * Toast title
   */
  @Prop() toastTitle?: string;

  /**
   * Autoclose title after delay
   */
  @Prop() autoCloseDelay = 5000;

  /**
   * Autoclose behavior
   */
  @Prop() autoClose = true;

  /**
   * Icon of toast
   */
  @Prop() icon?: string;

  /**
   * Icon color of toast
   */
  @Prop() iconColor?: string;

  /**
   * Toast closed
   */
  @Event() closeToast!: EventEmitter;

  @State() progress = 0;
  @State() touched = false;

  @Element() hostElement!: HTMLIxToastElement;

  private getIcon() {
    if (this.icon) {
      return (
        <ix-icon
          data-testid="toast-icon"
          name={this.icon}
          color={this.iconColor}
          size="24"
        />
      );
    }

    switch (this.type) {
      case 'info':
        return (
          <ix-icon
            data-testid="toast-icon"
            name={iconInfo}
            size="24"
            color="color-std-text"
          />
        );

      case 'error':
        return (
          <ix-icon
            data-testid="toast-icon"
            name={iconError}
            size="24"
            color="color-alarm"
          />
        );

      case 'success':
        return (
          <ix-icon
            data-testid="toast-icon"
            name={iconSuccess}
            size="24"
            color="color-success"
          />
        );

      case 'warning':
        return (
          <ix-icon
            data-testid="toast-icon"
            name={iconWarning}
            size="24"
            color="color-warning"
          />
        );

      default:
        return '';
    }
  }

  private close() {
    if (this.hostElement) {
      this.hostElement.classList.add('animate__fadeOut');
    }
    setTimeout(() => {
      this.closeToast.emit();
    }, 250);
  }

  render() {
    let progressBarStyle: Record<string, string> = {};

    const progressBarClass = ['toast-progress-bar'];

    progressBarStyle = {
      animationDuration: `${this.autoCloseDelay}ms`,
      animationPlayState: this.touched ? 'paused' : 'running',
    };

    progressBarClass.push('toast-progress-bar--animated');

    return (
      <Host class="animate__animated animate__fadeIn">
        <div
          class="toast-body"
          onPointerLeave={() => {
            this.touched = false;
          }}
          onPointerEnter={() => {
            this.touched = true;
          }}
        >
          {this.type || this.icon ? (
            <div class="toast-icon">{this.getIcon()}</div>
          ) : null}
          <div class="toast-content">
            {this.toastTitle ? (
              <ix-typography class="toast-title" format="h5">
                {this.toastTitle}
              </ix-typography>
            ) : null}
            <div class="toast-message">
              <slot></slot>
            </div>
            <div class="toast-action">
              <slot name="action"></slot>
            </div>
          </div>
          <div class="toast-close">
            <ix-icon-button
              icon={iconClose}
              size="24"
              ghost
              onClick={() => this.closeToast.emit()}
            />
          </div>
        </div>
        {this.autoClose ? (
          <div
            class={progressBarClass.join(' ')}
            style={progressBarStyle}
            onAnimationEnd={() => {
              this.close();
            }}
            onTransitionEnd={() => {
              if (this.progress === 0) {
                this.close();
              }
            }}
          ></div>
        ) : null}
      </Host>
    );
  }
}
