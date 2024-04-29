/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-form-field',
  styleUrl: 'form-field.scss',
  shadow: true,
})
export class FormField {
  @Element() hostElement!: HTMLIxFormFieldElement;

  /**
   * Label
   */
  @Prop() label?: string;

  private get inputElement() {
    return this.hostElement.querySelector('input');
  }

  render() {
    return (
      <Host>
        {this.label ? (
          <label htmlFor={this.inputElement!.id}>{this.label}</label>
        ) : null}
        <slot></slot>
      </Host>
    );
  }
}
