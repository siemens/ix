/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, State } from '@stencil/core';
import { getSlottedElements } from '../utils/shadow-dom';

@Component({
  tag: 'ix-input-group',
  styleUrl: 'input-group.scss',
  shadow: true,
})
export class InputGroup {
  @Element() hostElement!: HTMLIxInputGroupElement;

  @State() inputPaddingLeft = 0;
  @State() inputPaddingRight = 0;

  private get inputElement() {
    return this.hostElement.querySelector('input') as HTMLInputElement;
  }

  private observer: MutationObserver;

  componentWillLoad() {
    const { valid } = this.inputElement.validity;
    this.inputElement.addEventListener('valid', () => {
      this.onValidInput();
    });
    this.inputElement.addEventListener('invalid', () => {
      this.onInvalidInput();
    });
    this.inputElement.addEventListener('input', () => {
      this.startSlotChanged();
    });

    this.inputElement.form?.addEventListener('submit', () => {
      this.startSlotChanged();
    });

    valid ? this.onValidInput() : this.onInvalidInput();

    this.observer = new MutationObserver(() => {
      this.startSlotChanged();
      this.endSlotChanged();
    });

    this.observer.observe(this.hostElement, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });
  }

  componentDidRender() {
    this.prepareInputElement();
  }

  private onValidInput() {
    this.startSlotChanged();
  }

  private onInvalidInput() {
    this.startSlotChanged();
  }

  private prepareInputElement() {
    if (this.inputElement) {
      this.inputElement.style.width = '100%';

      if (this.inputPaddingRight !== 0) {
        this.inputElement.style.paddingRight = this.inputPaddingRight + 'px';
      } else {
        this.inputElement.style.paddingRight = '0.5rem';
      }

      if (this.inputPaddingLeft !== 0) {
        this.inputElement.style.paddingLeft = this.inputPaddingLeft + 'px';
      } else {
        this.inputElement.style.paddingLeft = '0.5rem';
      }
    } else {
      console.warn(
        'You used the ix-input-group without an input tag, e.g. <input class="form-control" />'
      );
    }
  }

  private startSlotChanged() {
    const slot = this.hostElement.shadowRoot.querySelector(
      'slot[name="input-start"]'
    );

    setTimeout(() => {
      const startPadding = this.getChildrenWidth(slot);

      if (startPadding !== 0) {
        this.inputPaddingLeft = 15 + startPadding;
      } else {
        this.inputPaddingLeft = 0;
      }

      if (!this.inputElement) {
        return;
      }

      const isInputInvalid =
        !this.inputElement.validity.valid ||
        this.inputElement.classList.contains('is-invalid');

      const formWasValidated =
        this.inputElement.form?.classList.contains('was-validated') ||
        this.inputElement.form?.noValidate === false;

      if (formWasValidated && isInputInvalid) {
        const left = this.inputPaddingLeft !== 0 ? this.inputPaddingLeft : 8;
        this.inputElement.style.backgroundPosition = `left ${left}px center`;
        this.inputPaddingLeft += 32;
      }
    });
  }

  private endSlotChanged() {
    const slot = this.hostElement.shadowRoot.querySelector(
      'slot[name="input-end"]'
    );

    setTimeout(() => {
      this.inputPaddingRight = 15 + this.getChildrenWidth(slot);
    });
  }

  private getChildrenWidth(slotElement: Element) {
    if (!slotElement) {
      return 0;
    }

    const endElements = getSlottedElements<HTMLElement>(slotElement);
    if (endElements.length === 0) {
      return 0;
    }

    let width = 0;

    endElements.forEach((element) => {
      width += element.getBoundingClientRect().width;
    });

    return width;
  }

  render() {
    return (
      <Host>
        <div class="group group-start">
          <slot name="input-start"></slot>
        </div>
        <slot></slot>
        <div class="group group-end">
          <slot name="input-end"></slot>
        </div>
      </Host>
    );
  }
}
