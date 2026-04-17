/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Method, Prop } from '@stencil/core';
import { TypedEvent } from '../utils/typed-event';
import type { ShowToastResult } from './toast-container.types';
import { ToastConfig } from './toast-utils';

@Component({
  tag: 'ix-toast-container',
  styleUrl: './toast-container.scss',
  shadow: true,
})
export class ToastContainer {
  @Element() hostElement!: HTMLIxToastContainerElement;

  /**
   * Position of the toast container. Determines where the toasts will be displayed on the screen.
   */
  @Prop() position: 'bottom-right' | 'top-right' = 'bottom-right';

  /**
   * Display a toast message
   * @param config
   */
  @Method()
  async showToast(config: ToastConfig): Promise<ShowToastResult> {
    const toast = document.createElement('ix-toast');
    const onClose = new TypedEvent<any | undefined>();

    function removeToast(result?: any) {
      toast.remove();
      onClose.emit(result);
    }

    toast.toastTitle = config.title;
    toast.type = config.type ?? 'info';
    toast.preventAutoClose = config.autoClose === false;
    toast.autoCloseDelay = config.autoCloseDelay ?? 5000;
    toast.icon = config.icon;
    toast.iconColor = config.iconColor;
    toast.hideIcon = config.hideIcon ?? false;

    toast.addEventListener(
      'closeToast',
      (event: CustomEvent<any | undefined>) => {
        const { detail } = event;
        removeToast(detail);
      }
    );

    if (config.message) {
      if (typeof config.message === 'string') {
        toast.innerText = config.message;
      } else {
        toast.appendChild(config.message);
      }
    }

    if (config.action && config.action instanceof HTMLElement) {
      config.action.slot = 'action';
      toast.appendChild(config.action);
    }

    this.hostElement.appendChild(toast);

    return {
      onClose,
      close: (result?: any) => {
        removeToast(result);
      },
      pause: () => {
        toast.pause();
      },
      resume: () => {
        toast.resume();
      },
      isPaused: () => {
        return toast.isPaused();
      },
    };
  }

  render() {
    return (
      <Host
        class={{
          'toast-container--bottom-right': this.position === 'bottom-right',
          'toast-container--top-right': this.position === 'top-right',
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
