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
  Method,
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

/**
 * Transient notification message that appears temporarily.
 *
 * @documentation https://ix.siemens.io//docs/components/toast/guide.md
 *
 * @slot - Toast message content.
 * @slot action - Toast action content.
 */
@Component({
  tag: 'ix-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class Toast {
  /**
   * Toast type
   */
  @Prop({ reflect: true }) type: ToastType = 'info';

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
  @Prop() preventAutoClose = false;

  /**
   * Icon of toast
   */
  @Prop() icon?: string;

  /**
   * Icon color as a CSS custom property name, for example
   * `--si-sys-color-text-primary`.
   */
  @Prop() iconColor?: string;

  /**
   * Allows to hide the icon in the toast.
   */
  @Prop() hideIcon: boolean = false;

  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelCloseIconButton?: string = 'Close toast';

  /**
   * Toast closed
   */
  @Event() closeToast!: EventEmitter;

  @State() progress = 0;
  @State() touched = false;
  @State() paused = false;

  @Element() hostElement!: HTMLIxToastElement;

  private getIcon() {
    if (this.icon) {
      return (
        <ix-icon
          data-testid="toast-icon"
          aria-hidden="true"
          name={this.icon}
          color={this.iconColor}
        />
      );
    }

    switch (this.type) {
      case 'info':
        return (
          <ix-icon
            data-testid="toast-icon"
            aria-hidden="true"
            name={iconInfo}
            color="--si-sys-color-background-information"
          />
        );

      case 'error':
        return (
          <ix-icon
            data-testid="toast-icon"
            aria-hidden="true"
            name={iconError}
            color="--si-sys-color-text-danger"
          />
        );

      case 'success':
        return (
          <ix-icon
            data-testid="toast-icon"
            aria-hidden="true"
            name={iconSuccess}
            color="--si-sys-color-text-success"
          />
        );

      case 'warning':
        return (
          <ix-icon
            data-testid="toast-icon"
            aria-hidden="true"
            name={iconWarning}
            color="--si-sys-color-text-warning"
          />
        );

      default:
        return '';
    }
  }

  private isClosing = false;

  private close() {
    if (this.isClosing) {
      return;
    }
    this.isClosing = true;

    let closed = false;
    const emitClose = () => {
      if (closed) {
        return;
      }
      closed = true;
      this.hostElement.removeEventListener('animationend', onAnimationEnd);
      this.closeToast.emit();
    };
    const onAnimationEnd = (event: AnimationEvent) => {
      if (
        event.target === this.hostElement &&
        event.animationName === 'toast-fade-out'
      ) {
        emitClose();
      }
    };

    this.hostElement.addEventListener('animationend', onAnimationEnd);
    this.hostElement.classList.add('toast-fade-out');

    // Fallback in case `animationend` is not fired (e.g. no animation applied)
    const fallbackMs = this.getAnimationDurationMs() + 50;
    setTimeout(emitClose, fallbackMs);
  }

  private getAnimationDurationMs() {
    const { animationDuration } = window.getComputedStyle(this.hostElement);
    const value = parseFloat(animationDuration);

    if (!Number.isFinite(value)) {
      return 0;
    }

    return animationDuration.trim().endsWith('ms') ? value : value * 1000;
  }

  /**
   * Pause the toast's auto-close progress bar and timer.
   */
  @Method()
  async pause() {
    this.paused = true;
  }

  /**
   * Resume the toast's auto-close progress bar and timer if previously paused.
   */
  @Method()
  async resume() {
    this.paused = false;
  }

  /**
   * Returns whether the toast is currently paused (auto-close is paused).
   */
  @Method()
  async isPaused(): Promise<boolean> {
    return this.paused || this.touched;
  }

  render() {
    let progressBarStyle: Record<string, string> = {};

    const progressBarClass = ['toast-progress-bar'];

    progressBarStyle = {
      animationDuration: `${this.autoCloseDelay}ms`,
      animationPlayState: this.touched || this.paused ? 'paused' : 'running',
    };

    progressBarClass.push('toast-progress-bar--animated');

    return (
      <Host role="alert" aria-live="polite" aria-atomic="true">
        <div
          class="toast-body"
          onPointerLeave={() => {
            this.touched = false;
          }}
          onPointerEnter={() => {
            this.touched = true;
          }}
        >
          {(this.type || this.icon) && !this.hideIcon ? (
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
              iconColor="--si-sys-color-text-secondary"
              variant="tertiary"
              onClick={() => this.closeToast.emit()}
              aria-label={this.ariaLabelCloseIconButton}
            />
          </div>
        </div>
        {!this.preventAutoClose && (
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
        )}
      </Host>
    );
  }
}
