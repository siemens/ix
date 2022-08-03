/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, Element, h, Host, Method } from '@stencil/core';
import { Modal } from '../modal/cw-modal';
import { ModalConfig, ModalContainerEvents } from '../modal/modal';
import { Disposable, TypedEvent } from '../utils/typed-event';

@Component({
  tag: 'cw-modal-container',
  styleUrl: 'modal-container.scss',
  scoped: true,
})
export class ModalContainer {
  @Element() hostElement: HTMLCwModalContainerElement;

  // eslint-disable-next-line @stencil/own-props-must-be-private
  public static readonly DOM_TAG_EVENT_BUS = 'cui-modal-event-bus';

  private disposable: Disposable;

  public static get modalEvents(): { [key: string]: TypedEvent<any> } {
    return document[ModalContainer.DOM_TAG_EVENT_BUS];
  }

  componentDidLoad() {
    if (!ModalContainer.modalEvents) {
      document[ModalContainer.DOM_TAG_EVENT_BUS] = {
        onModalOpened: new TypedEvent<Modal>(),
        onShowModal: new TypedEvent(),
      } as ModalContainerEvents;
    }

    this.disposable = ModalContainer.modalEvents.onShowModal.on(
      this.showModal.bind(this)
    );
  }

  disconnectedCallback() {
    this.disposable?.dispose();
  }

  /**
   * Display modal dialog
   *
   * @param config
   */
  @Method()
  async showModal(config: ModalConfig): Promise<void> {
    const modal = document.createElement('cw-modal');
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

    modal.addEventListener('closed', () => this.hostElement.removeChild(modal));
    modal.addEventListener('dismissed', () =>
      this.hostElement.removeChild(modal)
    );

    ModalContainer.modalEvents.onModalOpened.emit(modal);
  }

  render() {
    return <Host></Host>;
  }
}
