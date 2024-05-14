/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconErrorFilled } from '@siemens/ix-icons/icons';
import {
  AttachInternals,
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import { makeRef } from '../utils/make-ref';
import { IxFormComponent } from '../utils/field';

@Component({
  tag: 'ix-radiobutton',
  styleUrl: 'radiobutton.scss',
  shadow: true,
  formAssociated: true,
})
export class Radiobutton implements IxFormComponent<string> {
  @AttachInternals() formInternals: ElementInternals;

  /**
   * Name of the radiobutton component
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Value of the radiobutton component
   */
  @Prop({ reflect: true }) value?: string;

  /**
   * Label for the radiobutton component
   */
  @Prop() label: string;

  /**
   * Checked state of the radiobutton component
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;

  /**
   * Event emitted when the checked state of the radiobutton changes
   */
  @Event() checkedChange!: EventEmitter<boolean>;

  /**
   * Event emitted when the value of the radiobutton changes
   */
  @Event() valueChange!: EventEmitter<string>;

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
  onCheckedChange() {
    const radiobuttonRef = this.inputRef.current;
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
            {this.checked && (
              <ix-icon name={iconErrorFilled} size="12"></ix-icon>
            )}
          </button>
          {this.label}
          <slot></slot>
        </label>
      </Host>
    );
  }
}
