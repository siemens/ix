/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
  Fragment,
  h,
  Host,
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { IxFormComponent } from '../utils/input';

/**
 * @form-ready 2.4.0
 * */
@Component({
  tag: 'ix-toggle',
  styleUrl: 'toggle.scss',
  shadow: true,
  formAssociated: true,
})
export class Toggle implements IxFormComponent<string> {
  @AttachInternals() formInternals!: ElementInternals;

  @Element() hostElement!: HTMLIxToggleElement;

  /**
   * Name of the checkbox component
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Value of the checkbox component
   */
  @Prop({ reflect: true }) value: string = 'on';

  /**
   * Whether the slide-toggle element is checked or not.
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * Whether the slide-toggle element is disabled or not.
   */
  @Prop() disabled = false;

  /**
   * If true the control is in indeterminate state
   */
  @Prop({ mutable: true, reflect: true }) indeterminate = false;

  /**
   * Text for on state
   */
  @Prop() textOn = 'On';

  /**
   * Text for off state
   */
  @Prop() textOff = 'Off';

  /**
   * Text for indeterminate state
   */
  @Prop() textIndeterminate = 'Mixed';

  /**
   * Hide `on` and `off` text
   */
  @Prop() hideText = false;

  /**
   * Required state of the checkbox component.
   *
   * If true, checkbox needs to be checked to be valid
   */
  @Prop({ reflect: true }) required = false;

  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  @Event() checkedChange!: EventEmitter<boolean>;

  /** @internal */
  @Event() valueChange!: EventEmitter<string>;

  onCheckedChange(newChecked: boolean) {
    if (this.indeterminate) {
      this.indeterminate = false;
    }
    this.checked = newChecked;
    this.checkedChange.emit(this.checked);
  }

  componentWillLoad() {
    this.updateFormInternalValue();
  }

  updateFormInternalValue(): void {
    if (this.checked) {
      this.formInternals.setFormValue(this.value);
    } else {
      this.formInternals.setFormValue(null);
    }
  }

  @Watch('checked')
  watchCheckedChange() {
    this.updateFormInternalValue();
  }

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(this.checked);
  }

  /** @internal */
  @Method()
  getAssociatedFormElement(): Promise<HTMLFormElement | null> {
    return Promise.resolve(this.formInternals.form);
  }

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
        onClick={() => this.onCheckedChange(!this.checked)}
      >
        <input
          disabled={this.disabled}
          indeterminate={this.indeterminate}
          checked={this.checked}
          role="switch"
          tabindex={0}
          type="checkbox"
          aria-checked={a11yBoolean(this.checked)}
          onChange={(event) =>
            this.onCheckedChange((event.target as HTMLInputElement).checked)
          }
        ></input>
        <label class="switch" tabIndex={-1}>
          <span class="slider"></span>
        </label>
        {!this.hideText ? (
          <Fragment>
            {!this.indeterminate ? (
              <span class={'toggle-text'} aria-hidden={a11yBoolean(true)}>
                {this.checked ? this.textOn : this.textOff}
              </span>
            ) : (
              <span class={'toggle-text'} aria-hidden={a11yBoolean(true)}>
                {this.textIndeterminate}
              </span>
            )}
          </Fragment>
        ) : null}
      </Host>
    );
  }
}
