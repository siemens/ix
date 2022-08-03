/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, Element, h, Host, Method, Prop } from '@stencil/core';
import { Disposable, TypedEvent } from '../utils/typed-event';
import { ToastConfig } from './toast';

@Component({
  tag: 'cw-toast-container',
  scoped: true,
})
export class CwToastContainer {
  @Element() host!: HTMLCwToastContainerElement;

  /**
   */
  @Prop() containerId = 'toast-container';

  /**
   */
  @Prop() containerClass = 'toast-container';

  /**
   */
  @Prop() position = 'bottom-right';

  private disposable: Disposable;
  private readonly onShowToast = new TypedEvent<ToastConfig>();

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

    this.disposable = this.onShowToast.on((config) => this.showToast(config));
  }

  disconnectedCallback() {
    this.disposable?.dispose();
  }

  /**
   * Internal
   * Get event notifier from container element
   * @returns
   */
  @Method()
  async getEvents() {
    return this.onShowToast;
  }

  /**
   * Display a toast message
   * @param config
   */
  @Method()
  async showToast(config: ToastConfig) {
    const toast = document.createElement('cw-toast');

    function removeToast() {
      toast.remove();
    }

    toast.toastTitle = config.title;
    toast.type = config.type;
    toast.autoClose = config.autoClose;
    toast.autoCloseDelay = config.autoCloseDelay;
    toast.icon = config.icon;
    toast.iconColor = config.iconColor;
    toast.addEventListener('closeToast', () => {
      removeToast();
    });

    if (typeof config.message === 'string') {
      toast.innerText = config.message;
    } else {
      toast.appendChild(config.message);
    }

    this.hostContainer.appendChild(toast);
  }

  render() {
    return <Host></Host>;
  }
}
