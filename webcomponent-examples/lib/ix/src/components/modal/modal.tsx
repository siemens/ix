/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
} from '@stencil/core';
import anime from 'animejs';
import Animation from '../utils/animation';
import { NotificationColor } from '../utils/notification-color';

@Component({
  tag: 'ix-modal',
  styleUrl: 'modal.scss',
  scoped: true,
})
export class Modal {
  @Element() hostElement: HTMLIxModalElement;

  /**
   * Should the modal be animtated
   */
  @Prop() animation = true;

  /**
   *
   */
  @Prop() ariaDescribedBy: string;

  /**
   *
   */
  @Prop() ariaLabelledBy = 'modal-title';

  /**
   * Adds a dimming layer to the modal.
   * This should only be used when it it necessary to focus the user's attention to the dialog content (e.g. errors, warnings, complex tasks).
   */
  @Prop() backdrop: boolean | 'static' = true;

  /**
   * Backdrop class
   */
  @Prop() backdropClass: string;

  /**
   * BeforeDismiss callback
   */
  @Prop() beforeDismiss: (reason?: any) => boolean | Promise<boolean>;

  /**
   * Centered modal
   */
  @Prop() centered = false;

  /**
   * Content of modal
   */
  @Prop() content: HTMLElement | string;

  /**
   * ESC close modal dialog
   */
  @Prop() keyboard = true;

  /**
   * Optional icon displayed next to the title
   */
  @Prop() icon: string;

  /**
   * Color of the header {@link icon}
   */
  @Prop() iconColor: NotificationColor = 'color-std-text';

  /**
   * Modal dialog class
   */
  @Prop() modalDialogClass: string;

  /**
   * Modal scollable
   */
  @Prop() scrollable = true;

  /**
   * Modal size
   */
  @Prop() size: 'sm' | 'lg' | 'xl' = 'sm';

  /**
   * Header title
   */
  @Prop() headerTitle: string;

  /**
   * Window class
   */
  @Prop() windowClass: string;

  /**
   * Modal closed
   */
  @Event() closed: EventEmitter;

  /**
   * Modal dismissed
   */
  @Event() dismissed: EventEmitter;

  private readonly onKeydown = this.handleKeydown.bind(this);

  get modal() {
    return this.hostElement.querySelector('.modal');
  }

  get modalDialog() {
    return this.modal.querySelector('.modal-dialog');
  }

  get modalContent() {
    return this.modalDialog.querySelector('.modal-content');
  }

  get modalBackdrop() {
    return this.hostElement.querySelector('.backdrop');
  }

  private slideDown(modal: any) {
    const duration = this.animation ? Animation.mediumTime : 0;

    anime({
      targets: modal,
      duration,
      opacity: [0, 1],
      translateY: ['-100%', 0],
      easing: 'easeOutSine',
    });
  }

  private slideUp(modal: any, completeCallback?: any) {
    const duration = this.animation ? Animation.mediumTime : 0;

    anime({
      targets: modal,
      duration,
      opacity: [1, 0],
      translateY: [0, '-100%'],
      easing: 'easeInSine',
      complete: () => {
        if (completeCallback) {
          completeCallback();
        }
      },
    });
  }

  componentDidLoad() {
    if (this.backdrop === 'static') {
      this.modalBackdrop.addEventListener('click', this.dismiss.bind(this));
    }

    if (this.backdropClass) {
      this.modalBackdrop.classList.add(this.backdropClass);
    }

    if (this.modalDialogClass) {
      this.modalDialog.classList.add(this.modalDialogClass);
    }

    if (this.windowClass) {
      this.modal.classList.add(this.windowClass);
    }

    if (this.keyboard) {
      window.addEventListener('keydown', this.onKeydown);
    }

    this.slideDown(this.modalContent);
  }

  private handleKeydown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.dismiss(ev.key);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.onKeydown);
  }

  /**
   * Dismiss modal instance
   * @param reason
   */
  @Method()
  async dismiss(reason?: any) {
    if (this.beforeDismiss) {
      const result = await this.beforeDismiss(reason);
      if (result !== false) {
        this.slideUp(this.modalContent, () => this.dismissed.emit(reason));
      }
    } else {
      this.slideUp(this.modalContent, () => this.dismissed.emit(reason));
    }
  }

  /**
   * Close modal
   * @param result
   */
  @Method()
  async close(result: any) {
    this.slideUp(this.modalContent, () => this.closed.emit(result));
  }

  render() {
    return (
      <Host>
        <div
          class={{
            animation: this.animation,
            modal: true,
            backdrop: this.backdrop === 'static' || this.backdrop,
            'align-items-center': this.centered,
            scrollable: this.scrollable,
          }}
          aria-describedby={this.ariaDescribedBy}
          aria-labelledby={this.ariaLabelledBy}
        >
          <div
            class={{
              'modal-dialog': true,
              'modal-sm': this.size === 'sm',
              'modal-lg': this.size === 'lg',
              'modal-xl': this.size === 'xl',
            }}
          >
            <div class="modal-content">
              {this.icon === undefined || this.icon === '' ? (
                ''
              ) : (
                <div class="state-icon-container">
                  <ix-icon
                    name={this.icon}
                    size="32"
                    color={this.iconColor}
                  ></ix-icon>
                </div>
              )}
              <div class="slot-container">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
