/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Method, Prop, Watch } from '@stencil/core';
import { TypedEvent } from '../utils/typed-event';
import { ToastConfig } from './toast-utils';

@Component({
  tag: 'ix-toast-container',
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
    return document.getElementById(this.containerId);
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
  async showToast(config: ToastConfig) {
    const toast = document.createElement('ix-toast');

    const onClose = new TypedEvent<any | undefined>();

    function removeToast(result?: any) {
      toast.remove();
      onClose.emit(result);
    }

    toast.toastTitle = config.title;
    toast.type = config.type;
    toast.autoClose = config.autoClose;
    toast.autoCloseDelay = config.autoCloseDelay;
    toast.icon = config.icon;
    toast.iconColor = config.iconColor;
    toast.addEventListener(
      'closeToast',
      (event: CustomEvent<any | undefined>) => {
        const { detail } = event;
        removeToast(detail);
      }
    );

    if (typeof config.message === 'string') {
      toast.innerText = config.message;
    } else {
      toast.appendChild(config.message);
    }

    this.hostContainer.appendChild(toast);

    return {
      onClose,
      close: (result?: any) => {
        removeToast(result);
      },
    };
  }

  render() {
    return <Host></Host>;
  }
}
