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
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
  Method,
  Element,
} from '@stencil/core';
import { makeRef } from '../utils/make-ref';
import { IxFormComponent } from '../utils/field';

@Component({
  tag: 'ix-radio',
  styleUrl: 'radio.scss',
  shadow: true,
  formAssociated: true,
})
export class Radio implements IxFormComponent<string> {
  @Element() hostElement: HTMLIxRadioElement;

  @AttachInternals() formInternals: ElementInternals;

  /**
   * Name of the radio component
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Value of the radio component
   */
  @Prop({ reflect: true }) value?: string;

  /**
   * Label for the radio component
   */
  @Prop() label: string;

  /**
   * Checked state of the radio component
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;

  /**
   * Event emitted when the checked state of the radio changes
   */
  @Event() checkedChange!: EventEmitter<boolean>;

  /**
   * Event emitted when the value of the radio changes
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Single radio cannot be required
   * */
  required = false;

  private inputRef = makeRef<HTMLInputElement>((radiobuttonRef) => {
    radiobuttonRef.checked = this.checked;
  });

  private setCheckedState(newChecked: boolean) {
    if (this.checked) {
      return;
    }
    const result = this.checkedChange.emit(newChecked);
    if (result.defaultPrevented) {
      return;
    }

    this.checked = newChecked;
  }

  @Watch('checked')
  async onCheckedChange() {
    const radiobuttonRef = await this.inputRef.waitForCurrent();
    radiobuttonRef.checked = this.checked;

    this.updateFormInternalValue();
  }

  @Watch('value')
  onValueChange() {
    this.valueChange.emit(this.value);
  }

  componentWillLoad() {
    this.updateFormInternalValue();
  }

  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value);
    } else {
      this.formInternals.setFormValue(undefined);
    }
  }

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  /** @internal */
  @Method()
  getAssociatedFormElement(): Promise<HTMLFormElement> {
    throw new Error('Method not implemented.');
  }

  render() {
    return (
      <Host>
        <label>
          <input
            ref={this.inputRef}
            type="radio"
            onChange={() => {
              const ref = this.inputRef.current;
              this.setCheckedState(ref.checked);
            }}
          />
          <button
            class={{
              checked: this.checked,
            }}
            onClick={() => this.setCheckedState(!this.checked)}
          >
            {this.checked && <div class="checkmark"></div>}
          </button>
          {this.label}
          <slot></slot>
        </label>
      </Host>
    );
  }
}
