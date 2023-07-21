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
  Method,
  Prop,
} from '@stencil/core';
import anime from 'animejs';
import Animation from '../utils/animation';

export type IxModalFixedSize = '360' | '480' | '600' | '720' | '840';
export type IxModalDynamicSize = 'full-width';
export type IxModalSize = IxModalFixedSize | IxModalDynamicSize;

@Component({
  tag: 'ix-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  @Element() hostElement!: HTMLIxModalElement;

  /**
   *
   */
  @Prop() modalType: 'dialog' | 'message' = 'dialog';

  /**
   * Modal size
   */
  @Prop() size: IxModalSize = '360';

  /**
   * Should the modal be animated
   */
  @Prop() animation = true;

  /**
   * Show a backdrop behind the modal dialog
   */
  @Prop() backdrop = true;

  /**
   * Dismiss modal on backdrop click
   */
  @Prop() closeOnBackdropClick = false;

  /**
   * Is called before the modal is dismissed.
   *
   * - Return `true` to proceed in dismissing the modal
   * - Return `false` to about in dismissing the modal
   */
  @Prop() beforeDismiss: (reason?: any) => boolean | Promise<boolean>;

  /**
   * Centered modal
   */
  @Prop() centered = false;

  /**
   * Use ESC to dismiss the modal
   */
  @Prop() keyboard = true;

  /**
   *
   */
  @Event() dialogClose: EventEmitter;

  /**
   *
   */
  @Event() dialogDismiss: EventEmitter;

  get dialog() {
    return this.hostElement.shadowRoot.querySelector('dialog');
  }

  private slideInModal() {
    const duration = this.animation ? Animation.mediumTime : 0;

    let transformY = this.centered ? '-50' : 40;

    anime({
      targets: this.dialog,
      duration,
      opacity: [0, 1],
      translateY: [0, transformY],
      translateX: ['-50%', '-50%'],
      easing: 'easeOutSine',
    });
  }

  private slideOutModal(completeCallback: Function) {
    const duration = this.animation ? Animation.mediumTime : 0;

    let transformY = this.centered ? '-50' : 40;

    anime({
      targets: this.dialog,
      duration,
      opacity: [1, 0],
      translateY: [transformY, 0],
      translateX: ['-50%', '-50%'],
      easing: 'easeInSine',
      complete: () => {
        if (completeCallback) {
          completeCallback();
        }
      },
    });
  }

  /**
   * Show the dialog
   */
  @Method()
  async showModal() {
    this.dialog.showModal();
  }

  /**
   * Dismiss the dialog
   */
  @Method()
  async dismissModal<T = any>(reason?: T) {
    let allowDismiss = true;

    if (this.beforeDismiss !== undefined) {
      allowDismiss = await this.beforeDismiss(reason);
    }
    if (!allowDismiss) {
      return;
    }

    this.slideOutModal(() => {
      this.dialog.close(
        JSON.stringify(
          {
            type: 'dismiss',
            reason,
          },
          null,
          2
        )
      );

      this.dialogDismiss.emit(reason);
    });
  }

  /**
   * Close the dialog
   */
  @Method()
  async closeModal<T = any>(reason: T) {
    this.slideOutModal(() => {
      this.dialog.close(
        JSON.stringify(
          {
            type: 'close',
            reason,
          },
          null,
          2
        )
      );

      this.dialogClose.emit(reason);
    });
  }

  componentDidLoad() {
    this.slideInModal();
  }

  render() {
    return (
      <Host
        class={{
          'no-backdrop': this.backdrop === false,
          'align-center': this.centered,
        }}
      >
        <div class="dialog-backdrop">
          <dialog
            class={`modal modal-size-${this.size} modal-type-${this.modalType}`}
            onKeyDown={(e) => {
              if (e.key === 'Escape' && this.keyboard === false) {
                e.preventDefault();
              }
            }}
            onClick={(event) => {
              const rect = this.dialog.getBoundingClientRect();
              const isClickOutside =
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width;
              if (!isClickOutside && this.closeOnBackdropClick) {
                this.dismissModal();
              }
            }}
            onCancel={(e) => {
              e.preventDefault();
              this.dismissModal();
            }}
          >
            <slot></slot>
          </dialog>
        </div>
      </Host>
    );
  }
}
