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
  State,
  h,
} from '@stencil/core';
import { IxFieldComponent } from '../utils/field';
import { InputElement } from './input-element';

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
  @Prop() required = false;

  /**
   * tbd
   */
  @Prop({ reflect: true }) helperText: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) label: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) errorText: string;

  /**
   * tbd
   */
  @Event() valueChanged: EventEmitter<string>;

  @State() isInvalid = false;

  classObserver = new MutationObserver(() => this.checkClassList());

  componentWillLoad() {
    this.updateFormInternalValue(this.value);
    this.checkClassList();
  }

  componentDidLoad(): void {
    this.classObserver.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  updateFormInternalValue(value: string) {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  disconnectedCallback(): void {
    if (this.classObserver) {
      this.classObserver.disconnect();
    }
  }

  private checkClassList() {
    this.isInvalid = this.hostElement.classList.contains('ix-invalid');
  }

  render() {
    return (
      <Host>
        <ix-helper-text-wrapper
          helperText={this.helperText}
          label={this.label}
          errorText={this.errorText}
          isInvalid={this.isInvalid}
        >
          <InputElement field={this} type="text"></InputElement>
        </ix-helper-text-wrapper>
      </Host>
    );
  }
}
