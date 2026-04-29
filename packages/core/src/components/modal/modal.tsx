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
import { animate } from 'animejs';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import Animation from '../utils/animation';
import { tryFocusElement } from '../utils/focus/focus-utilities';
import { IX_MODAL_AUTOFOCUS_SELECTOR } from '../utils/modal/modal';
import { waitForElement } from '../utils/waitForElement';
import { IxModalSize } from './modal.types';

@Component({
  tag: 'ix-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  private ariaAttributes: A11yAttributes = {};
  private isMouseDownInsideDialog = false;
  @Element() hostElement!: HTMLIxModalElement;

  /**
   * Modal size
   */
  @Prop() size: IxModalSize = '360';

  /**
   * Should the modal animation be disabled
   */
  @Prop() disableAnimation = false;

  /**
   * Hide the backdrop behind the modal dialog
   */
  @Prop() hideBackdrop = false;

  /**
   * Dismiss modal on backdrop click (outside the dialog panel).
   * Ignored when **`isNonBlocking`** is `true`.
   */
  @Prop() closeOnBackdropClick = false;

  /**
   * Is called before the modal is dismissed.
   *
   * - Return `true` to proceed in dismissing the modal
   * - Return `false` to abort in dismissing the modal
   */
  @Prop() beforeDismiss?: (reason?: unknown) => boolean | Promise<boolean>;

  /**
   * Centered modal
   */
  @Prop() centered = false;

  /**
   * Non-modal dialog: page stays interactive, no lightbox or focus trap; `aria-modal` is `false`.
   * Set before calling `showModal()`; changing while open is unsupported.
   */
  @Prop({ reflect: true }) isNonBlocking = false;

  /**
   * Dialog close
   */
  @Event() dialogClose!: EventEmitter;

  /**
   * Dialog cancel
   */
  @Event() dialogDismiss!: EventEmitter;

  @State() modalVisible = false;

  get dialog() {
    return this.hostElement.shadowRoot!.querySelector('dialog');
  }

  private slideInModal() {
    const dialog = this.dialog!;
    dialog.classList.remove('modal-open-settled');
    const duration = this.disableAnimation ? 0 : Animation.mediumTime;
    const translateY = this.centered ? ['-90%', '-50%'] : [0, 40];

    const markEntranceSettled = () =>
      dialog.classList.add('modal-open-settled');

    animate(dialog, {
      duration,
      opacity: [0, 1],
      translateY,
      translateX: ['-50%', '-50%'],
      easing: 'easeOutSine',
      complete: markEntranceSettled,
    });

    if (duration === 0) {
      markEntranceSettled();
    }
  }

  private slideOutModal(completeCallback: Function) {
    const dialog = this.dialog!;
    dialog.classList.remove('modal-open-settled');
    const duration = this.disableAnimation ? 0 : Animation.mediumTime;
    const translateY = this.centered ? ['-50%', '-90%'] : [40, 0];

    animate(dialog, {
      duration,
      opacity: [1, 0],
      translateY,
      translateX: ['-50%', '-50%'],
      easing: 'easeInSine',
      complete: () => {
        if (completeCallback) {
          completeCallback();
        }
      },
    });
  }

  private closeDialog<T = unknown>(
    type: 'dismiss' | 'close',
    reason: T,
    emitter: EventEmitter
  ) {
    this.slideOutModal(() => {
      this.modalVisible = false;
      this.dialog!.close(JSON.stringify({ type, reason }, null, 2));
      emitter.emit(reason);
    });
  }

  private isInsideDialog(event: MouseEvent) {
    if (!this.dialog) {
      return false;
    }

    const path = event.composedPath();

    if (!path.includes(this.dialog)) {
      return false;
    }

    if (event.target !== this.dialog) {
      return true;
    }

    const rect = this.dialog.getBoundingClientRect();
    const { clientX, clientY } = event;

    return (
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom
    );
  }

  private onMouseDown(event: MouseEvent) {
    this.isMouseDownInsideDialog = this.isInsideDialog(event);
  }

  private onMouseUp(event: MouseEvent) {
    const isMouseUpInsideDialog = this.isInsideDialog(event);

    if (
      this.closeOnBackdropClick &&
      !this.isNonBlocking &&
      !this.isMouseDownInsideDialog &&
      !isMouseUpInsideDialog
    ) {
      void this.dismissModal();
    }
  }

  private async scheduleInitialAutofocus() {
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const direct = this.hostElement.querySelector<HTMLElement>(
            IX_MODAL_AUTOFOCUS_SELECTOR
          );
          if (direct) {
            tryFocusElement(direct, { focusVisible: true });
          }
          resolve();
        });
      });
    });
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

      if (this.isNonBlocking) {
        dialog.show();
      } else {
        dialog.showModal();
      }

      this.slideInModal();

      await this.scheduleInitialAutofocus();
    } catch {
      console.error('HTMLDialogElement not existing');
    }
  }

  /**
   * Dismiss the dialog
   */
  @Method()
  async dismissModal<T = unknown>(reason?: T) {
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

    this.closeDialog('dismiss', reason, this.dialogDismiss);
  }

  /**
   * Close the dialog
   */
  @Method()
  async closeModal<T = unknown>(reason: T) {
    if (!this.modalVisible) {
      return;
    }

    this.closeDialog('close', reason, this.dialogClose);
  }

  componentWillLoad() {
    this.ariaAttributes = a11yHostAttributes(this.hostElement);
  }

  render() {
    return (
      <Host
        class={{
          visible: this.modalVisible,
          'no-backdrop': this.hideBackdrop,
          'align-center': this.centered,
          'non-blocking': this.isNonBlocking,
        }}
      >
        <div class="dialog-backdrop">
          <dialog
            aria-modal={a11yBoolean(!this.isNonBlocking)}
            aria-describedby={this.ariaAttributes['aria-describedby']}
            aria-labelledby={this.ariaAttributes['aria-labelledby']}
            class={{
              modal: true,
              [`modal-size-${this.size}`]: true,
            }}
            onClose={() => this.dismissModal()}
            onMouseDown={(event) => this.onMouseDown(event)}
            onMouseUp={(event) => this.onMouseUp(event)}
            onKeyDown={(e: KeyboardEvent) => {
              // Non-blocking uses dialog.show(); Escape is not guaranteed to fire cancel like showModal().
              if (this.isNonBlocking && e.key === 'Escape') {
                e.preventDefault();
                void this.dismissModal();
              }
            }}
            onCancel={(e) => {
              e.preventDefault();
              void this.dismissModal();
            }}
          >
            <slot></slot>
          </dialog>
        </div>
      </Host>
    );
  }
}
