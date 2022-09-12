/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Method } from '@stencil/core';
import { ModalConfig } from '../modal/modal-utils';
import { TypedEvent } from '../utils/typed-event';

@Component({
  tag: 'ix-modal-container',
  styleUrl: 'modal-container.scss',
  scoped: true,
})
export class ModalContainer {
  @Element() hostElement: HTMLIxModalContainerElement;

  /**
   * Display modal dialog
   *
   * @param config
   */
  @Method()
  async showModal(config: ModalConfig) {
    const onClose = new TypedEvent<any>();
    const onDismiss = new TypedEvent<any>();

    const modal = document.createElement('ix-modal');
    let { title, content, ...modifiedConfig } = config;
    Object.assign(modal, { headerTitle: title, ...modifiedConfig });

    if (typeof content === 'string') {
      const template = document.createElement('template');
      content = content.trim();
      template.innerHTML = content;
      modal.appendChild(template.content.firstChild);
    } else {
      modal.appendChild(content);
    }

    this.hostElement.appendChild(modal);

    modal.addEventListener('closed', (event: CustomEvent<any>) => {
      this.hostElement.removeChild(modal);
      onClose.emit(event.detail);
    });
    modal.addEventListener('dismissed', (event: CustomEvent<any>) => {
      this.hostElement.removeChild(modal);
      onDismiss.emit(event.detail);
    });

    return {
      onClose,
      onDismiss,
    };
  }

  render() {
    return <Host></Host>;
  }
}
