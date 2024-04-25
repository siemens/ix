/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core';
import { IxFieldComponent } from '../utils/field';
import { InputElement } from './input-element';

function formValidation(field: IxFieldComponent) {
  const form = field.formInternals.form;

  const onSubmit = () => {
    console.log('form submitted check validation for field: ', field.name);
  };

  form.addEventListener('submit', onSubmit);

  return () => {
    form.removeEventListener('submit', onSubmit);
  };
}

@Component({
  tag: 'ix-text-field',
  styleUrl: 'text-field.scss',
  shadow: true,
  formAssociated: true,
})
export class TextField implements IxFieldComponent<string> {
  @Element() hostElement: HTMLIxTextFieldElement;
  @AttachInternals() formInternals: ElementInternals;

  /**
   * tbd
   */
  @Prop({ reflect: true }) name: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * tbd
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * tbd
   */
  @Prop() isInvalid = false;

  /**
   * tbd
   */
  @Prop() required = false;

  /**
   * tbd
   */
  @Event() valueChanged: EventEmitter<string>;

  private disposeFormValidation: () => void;

  connectedCallback() {
    this.disposeFormValidation = formValidation(this);
  }

  disconnectedCallback() {
    if (this.disposeFormValidation) {
      this.disposeFormValidation();
    }
  }

  componentWillLoad() {
    this.updateFormInternalValue(this.value);
  }

  updateFormInternalValue(value: string) {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  render() {
    return (
      <Host>
        <InputElement field={this} type="text"></InputElement>
      </Host>
    );
  }
}
