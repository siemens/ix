/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Method, Prop, Watch } from '@stencil/core';
import { TypedEvent } from '../utils/typed-event';
import { ToastConfig } from './toast-utils';

export type ShowToastResult = {
  onClose: TypedEvent<any | undefined>;
  close: (result?: any) => void;
};

@Component({
  tag: 'ix-toast-container',
  styleUrl: './styles/toast-container.scss',
  shadow: true,
})
export class ToastContainer {
  /**
   */
  @Prop() containerId = 'toast-container';

  /**
   */
  @Prop() containerClass = 'toast-container';

  /**
   */
  @Prop() position: 'bottom-right' | 'top-right' = 'bottom-right';

  private readonly PREFIX_POSITION_CLASS = 'toast-container--';

  get hostContainer() {
    return new Promise<HTMLElement>((resolve) => {
      const interval = setInterval(() => {
        const containerElement = document.getElementById(this.containerId);
        if (containerElement) {
          clearInterval(interval);
          resolve(containerElement);
        }
      });
    });
  }

  componentDidLoad() {
    if (!document.getElementById(this.containerId)) {
      const toastContainer = document.createElement('div');
      toastContainer.id = this.containerId;
      toastContainer.classList.add(this.containerClass);
      toastContainer.classList.add(
        `${this.PREFIX_POSITION_CLASS}${this.position}`
      );
      document.body.appendChild(toastContainer);
    }
  }

  @Watch('position')
  onPositionChange(newPosition: string, oldPosition: string) {
    const toastContainer = document.getElementById(this.containerId);
    if (!toastContainer) {
      console.warn('No toast container found, cannot configure toast position');
      return;
    }
    toastContainer.classList.remove(
      `${this.PREFIX_POSITION_CLASS}${oldPosition}`
    );
    toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
  }

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
    toast.autoClose = config.autoClose ?? true;
    toast.autoCloseDelay = config.autoCloseDelay ?? 5000;
    toast.icon = config.icon;
    toast.iconColor = config.iconColor;
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

    if (config.action && config.action instanceof HTMLElement) {
      config.action.slot = 'action';
      toast.appendChild(config.action);
    }

    (await this.hostContainer).appendChild(toast);

    return {
      onClose,
      close: (result?: any) => {
        removeToast(result);
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
