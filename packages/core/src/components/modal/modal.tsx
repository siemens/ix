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
import anime from 'animejs';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import Animation from '../utils/animation';
import { OnListener } from '../utils/listener';
import { waitForElement } from '../utils/waitForElement';
import { IxModalSize } from './modal.types';

@Component({
  tag: 'ix-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  private ariaAttributes: A11yAttributes = {};
  private isMouseUpInsideDialog = false;
  private isMouseDownInsideDialog = false;
  @Element() hostElement!: HTMLIxModalElement;

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
   * - Return `false` to abort in dismissing the modal
   */
  @Prop() beforeDismiss?: (reason?: any) => boolean | Promise<boolean>;

  /**
   * Centered modal
   */
  @Prop() centered = false;

  /**
   * If set to true the modal can be closed by pressing the Escape key
   */
  @Prop() closeOnEscape = true;

  /**
   * Dialog close
   */
  @Event() dialogClose!: EventEmitter;

  /**
   * Dialog cancel
   */
  @Event() dialogDismiss!: EventEmitter;

  @State() modalVisible = false;

  @OnListener<Modal>('keydown', (self) => !self.closeOnEscape)
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
    }
  }

  get dialog() {
    return this.hostElement.shadowRoot!.querySelector('dialog');
  }

  private slideInModal() {
    const duration = this.animation ? Animation.mediumTime : 0;

    let transformY = this.centered ? '-50%' : 40;

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

    let transformY = this.centered ? '-50%' : 40;

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

  private onMouseDown(event: MouseEvent) {
    this.isMouseDownInsideDialog = this.isPointInsideDialog(
      event.clientX,
      event.clientY
    );
  }

  private onMouseUp(event: MouseEvent) {
    this.isMouseUpInsideDialog = this.isPointInsideDialog(
      event.clientX,
      event.clientY
    );

    if (
      this.closeOnBackdropClick &&
      !this.isMouseDownInsideDialog &&
      !this.isMouseUpInsideDialog
    ) {
      this.dismissModal();
    }
  }

  private isPointInsideDialog(x: number, y: number): boolean {
    const rect = this.dialog!.getBoundingClientRect();
    return (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    );
  }
  /**
   * Show the dialog
   */
  @Method()
  async showModal() {
    try {
      const dialog = await waitForElement<HTMLDialogElement>(
        'dialog',
        this.hostElement.shadowRoot
      );
      this.modalVisible = true;
      dialog.showModal();
    } catch (e) {
      console.error('HTMLDialogElement not existing');
    }
  }

  /**
   * Dismiss the dialog
   */
  @Method()
  async dismissModal<T = any>(reason?: T) {
    if (!this.modalVisible) {
      return;
    }

    let allowDismiss = true;

    if (this.beforeDismiss !== undefined) {
      allowDismiss = await this.beforeDismiss(reason);
    }
    if (!allowDismiss) {
      return;
    }

    this.slideOutModal(() => {
      this.modalVisible = false;
      this.dialog!.close(
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
    if (!this.modalVisible) {
      return;
    }

    this.slideOutModal(() => {
      this.modalVisible = false;
      this.dialog!.close(
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

  componentWillLoad() {
    this.ariaAttributes = a11yHostAttributes(this.hostElement);
  }

  render() {
    return (
      <Host
        class={{
          visible: this.modalVisible,
          'no-backdrop': this.backdrop === false,
          'align-center': this.centered,
        }}
      >
        <div class="dialog-backdrop">
          <dialog
            aria-modal={a11yBoolean(true)}
            aria-describedby={this.ariaAttributes['aria-describedby']}
            aria-labelledby={this.ariaAttributes['aria-labelledby']}
            class={{
              modal: true,
              [`modal-size-${this.size}`]: true,
            }}
            onClose={() => this.dismissModal()}
            onMouseDown={(event) => this.onMouseDown(event)}
            onMouseUp={(event) => this.onMouseUp(event)}
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
