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
import {
  ClassFieldMappingResult,
  IxFieldComponent,
  OnClassField,
} from '../utils/field';
import { makeRef } from '../utils/make-ref';

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
  @Prop({ reflect: true }) required: boolean;

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
  @Prop() errorText: string;

  /**
   * tbd
   */
  @Event() valueChange: EventEmitter<string>;

  @State() isInvalid = false;

  private inputRef = makeRef<HTMLInputElement>();

  @OnClassField()
  updateClassMappings({ isInvalid }: ClassFieldMappingResult) {
    this.isInvalid = isInvalid;
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
        <ix-helper-text-wrapper
          helperText={this.helperText}
          errorText={this.errorText}
          label={this.label}
          isInvalid={this.isInvalid}
        >
          <input
            ref={this.inputRef}
            type="text"
            class={{
              'is-invalid': this.isInvalid,
            }}
            required={this.required}
            value={this.value}
            placeholder={this.placeholder}
            onChange={(changeEvent) => {
              const target = changeEvent.target as HTMLInputElement;
              this.valueChange.emit(target.value);
            }}
            onInput={(inputEvent) => {
              const target = inputEvent.target as HTMLInputElement;
              this.updateFormInternalValue(target.value);
            }}
          ></input>
        </ix-helper-text-wrapper>
      </Host>
    );
  }
}
