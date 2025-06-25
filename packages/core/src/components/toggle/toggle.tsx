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
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { IxFormComponent, HookValidationLifecycle } from '../utils/input';

/**
 * @form-ready
 */
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

  /**
   * An event will be dispatched each time the toggle is blurred.
   */
  @Event() ixBlur!: EventEmitter<void>;

  @State() lineClamp: number = 1;

  private touched = false;
  private resizeObserver!: ResizeObserver;

  onCheckedChange(newChecked: boolean) {
    if (this.disabled) {
      return;
    }

    const wasIndeterminate = this.indeterminate;
    const oldChecked = this.checked;

    if (this.indeterminate) {
      this.indeterminate = false;
    }

    this.checked = newChecked;

    const { defaultPrevented } = this.checkedChange.emit(this.checked);

    if (defaultPrevented) {
      this.indeterminate = wasIndeterminate;
      this.checked = oldChecked;
    }
  }

  componentWillLoad() {
    this.updateFormInternalValue();
  }

  componentDidLoad() {
    this.initializeDynamicLabelResize();
  }

  private calculateLineClamp() {
    const container = this.hostElement.shadowRoot!.querySelector('label');
    if (!container) return;
    const computedStyle = window.getComputedStyle(container);
    const lineHeight = computedStyle.lineHeight;
    const lineHeightInPx = parseFloat(lineHeight);
    const containerHeight = container.clientHeight;
    this.lineClamp = Math.floor(containerHeight / lineHeightInPx);
  }

  private initializeDynamicLabelResize() {
    const container = this.hostElement.shadowRoot?.querySelector('label');
    if (!container) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.calculateLineClamp();
    });

    this.resizeObserver.observe(container);
  }

  updateFormInternalValue(): void {
    if (this.checked) {
      this.formInternals.setFormValue(this.value);
    } else {
      this.formInternals.setFormValue(null);
    }
  }

  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  @Watch('checked')
  watchCheckedChange() {
    this.touched = true;
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

  /** @internal */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  @HookValidationLifecycle()
  updateClassMappings() {
    /** This function is intentionally empty */
  }

  render() {
    let toggleText = this.textOff;

    if (this.checked) {
      toggleText = this.textOn;
    }

    if (this.indeterminate) {
      toggleText = this.textIndeterminate;
    }
    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
        onBlur={() => this.ixBlur.emit()}
        onFocus={() => (this.touched = true)}
      >
        <label class="wrapper">
          <button
            role="switch"
            aria-checked={a11yBoolean(this.checked)}
            class={{
              switch: true,
              checked: this.checked,
              indeterminate: this.indeterminate,
            }}
            onClick={() => this.onCheckedChange(!this.checked)}
          >
            <div class="slider"></div>
          </button>
          <input
            type="checkbox"
            disabled={this.disabled}
            indeterminate={this.indeterminate}
            checked={this.checked}
            tabindex={0}
            aria-hidden={a11yBoolean(true)}
            aria-checked={a11yBoolean(this.checked)}
            onChange={(event) =>
              this.onCheckedChange((event.target as HTMLInputElement).checked)
            }
          />
          {!this.hideText && (
            <ix-typography
              class="label"
              style={{ '-webkit-line-clamp': `${this.lineClamp}` }}
            >
              {toggleText}
            </ix-typography>
          )}
        </label>
      </Host>
    );
  }
}
