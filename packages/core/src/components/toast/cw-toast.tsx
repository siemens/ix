/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { ToastType } from './toast';

@Component({
  tag: 'cw-toast',
  styleUrl: 'cw-toast.scss',
  scoped: true,
})
export class CwToast {
  /**
   * Toast type
   */
  @Prop() type: ToastType;

  /**
   * Toast title
   */
  @Prop() toastTitle: string;

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
  @Prop() icon: string;

  /**
   * Icon color of toast
   */
  @Prop() iconColor: string;

  /**
   * Toast closed
   */
  @Event() closeToast: EventEmitter;

  @State() progress = 0;
  @State() isRunning = true;
  @State() touched = false;

  @Element() host!: HTMLCwToastElement;

  private getIcon() {
    if (this.icon) {
      return <cw-icon name={this.icon} color={this.iconColor} size="24" />;
    }

    switch (this.type) {
      case 'info':
        return <cw-icon name={'info'} size="24" color="color-std-text" />;

      case 'error':
        return <cw-icon name={'error'} size="24" color="color-alarm" />;

      case 'success':
        return <cw-icon name={'success'} size="24" color="color-success" />;

      case 'warning':
        return <cw-icon name={'warning'} size="24" color="color-warning" />;

      default:
        return '';
    }
  }

  private close() {
    if (this.host) {
      this.host.classList.add('animate__fadeOut');
    }
    setTimeout(() => {
      this.closeToast.emit();
    }, 250);
  }

  render() {
    let progressBarElement: HTMLElement;
    let progressBarStyle: Record<string, string> = {};

    const progressBarClass = [`toast-progress-bar`];

    if (!this.touched) {
      progressBarStyle = {
        animationDuration: `${this.autoCloseDelay}ms`,
        animationPlayState: this.isRunning ? 'running' : 'paused',
      };

      progressBarClass.push('toast-progress-bar--animated');
    } else {
      progressBarClass.push('toast-progress-bar--touched');
    }

    const updateProgress = () => {
      if (progressBarElement) {
        progressBarElement.style.transform = `scaleX(${this.progress})`;
      }
    };

    return (
      <Host class="animate__animated animate__fadeIn">
        <div
          class="toast-body"
          onPointerLeave={() => {
            this.progress = 0;
            updateProgress();
          }}
          onPointerEnter={() => {
            this.isRunning = false;
            this.touched = true;
            this.progress = 1;
            updateProgress();
          }}
        >
          {this.type || this.icon ? <div class="toast-icon">{this.getIcon()}</div> : null}
          <div class="toast-content">
            {this.toastTitle ? <div class="toast-title text-default-title-single">{this.toastTitle}</div> : null}
            <div class="toast-message text-default">
              <slot></slot>
            </div>
          </div>
          <div class="toast-close">
            <cw-icon-button icon="close" size="24" ghost onClick={() => this.closeToast.emit()} />
          </div>
        </div>
        {this.autoClose ? (
          <div
            class={progressBarClass.join(' ')}
            style={progressBarStyle}
            ref={r => (progressBarElement = r)}
            onAnimationEnd={() => this.close()}
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
