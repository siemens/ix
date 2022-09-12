// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component, Element, h, Host, Method, Prop } from '@stencil/core';
import { TypedEvent } from '../utils/typed-event';
import { ToastConfig } from './toast-utils';

@Component({
  tag: 'ix-toast-container',
  scoped: true,
})
export class ToastContainer {
  @Element() host!: HTMLIxToastContainerElement;

  /**
   */
  @Prop() containerId = 'toast-container';

  /**
   */
  @Prop() containerClass = 'toast-container';

  /**
   */
  @Prop() position = 'bottom-right';

  get hostContainer() {
    return document.getElementById(this.containerId);
  }

  componentDidLoad() {
    if (!document.getElementById(this.containerId)) {
      const toastContainer = document.createElement('div');
      toastContainer.id = this.containerId;
      toastContainer.classList.add(this.containerClass);
      toastContainer.classList.add(`toast-container--${this.position}`);
      document.body.appendChild(toastContainer);
    }
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
