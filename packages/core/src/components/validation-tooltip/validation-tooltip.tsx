// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import '@popperjs/core';
import { createPopper, Instance as Popper, Placement } from '@popperjs/core';
import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';

/**
 * @slot tooltip-message - Custom tooltip message with html support
 */
@Component({
  tag: 'ix-validation-tooltip',
  styleUrl: 'validation-tooltip.scss',
  scoped: true,
})
export class ValidationTooltip {
  @Element() hostElement: HTMLIxValidationTooltipElement;

  /**
   * Message of the tooltip
   */
  @Prop() message: string;

  /**
   * Placement of the tooltip
   */
  @Prop() placement: Placement = 'top';

  @State() isInputValid = true;

  private popper?: Popper;

  private onSubmitBind = this.onSubmit.bind(this);
  private onInputFocusBind = this.onInputFocus.bind(this);

  private observer: MutationObserver;

  get arrow() {
    return this.hostElement.querySelector('#arrow');
  }

  get inputElement() {
    return this.hostElement.querySelector('input');
  }

  get formElement() {
    return this.inputElement.form;
  }

  get tooltipElement(): HTMLElement {
    return this.hostElement.querySelector('.validation-tooltip');
  }

  componentDidLoad() {
    if (!this.inputElement) {
      throw Error(
        'Validation tooltip is only working with an direct input child.'
      );
    }

    if (!this.formElement) {
      throw Error('Validation tooltip is only working with an form element.');
    }

    this.formElement.addEventListener('submit', this.onSubmitBind);
    this.inputElement.addEventListener('focus', this.onInputFocusBind);

    this.observer = new MutationObserver(() => {
      if (this.inputElement.classList.contains('is-invalid')) {
        this.isInputValid = false;
        this.validationChanged();
      }
    });

    this.observer.observe(this.inputElement, {
      childList: false,
      subtree: false,
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  private onInputFocus() {
    this.isInputValid = true;
  }

  private onSubmit() {
    if (this.formElement.classList.contains('needs-validation')) {
      this.isInputValid = this.inputElement.validity.valid;
    }
  }

  disconnectedCallback() {
    this.observer?.disconnect();
    this.popper?.destroy();

    this.formElement.removeEventListener('submit', this.onSubmitBind);
    this.inputElement.removeEventListener('focus', this.onInputFocusBind);
  }

  @Watch('isInputValid')
  validationChanged() {
    if (!this.isInputValid) {
      this.tooltipElement.style.display = 'block';
      this.popper = createPopper(
        this.inputElement,
        this.tooltipElement as HTMLElement,
        {
          placement: this.placement,
          strategy: 'absolute',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
            {
              name: 'arrow',
              options: {
                element: this.arrow,
              },
            },
          ],
        }
      );
    } else {
      this.tooltipElement.style.display = 'none';
      this.popper.destroy();
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <div
          role="tooltip"
          style={{ display: 'none' }}
          class="validation-tooltip text-default"
        >
          {this.message}
          <slot name="tooltip-message"></slot>
          <div id="arrow" data-popper-arrow></div>
        </div>
      </Host>
    );
  }
}
