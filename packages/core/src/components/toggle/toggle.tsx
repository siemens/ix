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
import { debounce } from '../utils/debounce';

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

  @State() webkitLineClamp!: number | undefined;

  private touched = false;
  private resizeObserver: ResizeObserver | null = null;
  private typography: HTMLElement | null = null;
  private readonly DEBOUNCE_TIME = 100;

  debouncedOnResize = debounce(
    this.calculateLineClamp.bind(this),
    this.DEBOUNCE_TIME
  );

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
    this.initializeLineClampObserver();
  }

  private initializeLineClampObserver() {
    this.typography =
      this.hostElement.shadowRoot?.querySelector('ix-typography') || null;

    if (!this.typography) {
      console.warn('Typography element not found');
      return;
    }
    this.calculateLineClamp();
    this.setupResizeObserver();
  }

  private calculateLineClamp() {
    if (!this.typography) {
      return;
    }
    const parentHeight = this.hostElement.parentElement?.clientHeight;
    if (!parentHeight) {
      return;
    }
    const typographyStyle = window.getComputedStyle(this.typography);
    const hostStyle = window.getComputedStyle(this.hostElement);

    const hostMargin =
      parseFloat(hostStyle.marginTop) + parseFloat(hostStyle.marginBottom);
    const lineHeight = parseFloat(typographyStyle.lineHeight);
    if (parentHeight && lineHeight) {
      this.webkitLineClamp = Math.floor(
        (parentHeight - hostMargin) / lineHeight
      );
    }
  }

  private setupResizeObserver() {
    this.cleanupResizeObserver();
    if (!this.typography) {
      console.warn('Typography element not found');
      return;
    }

    this.resizeObserver = new ResizeObserver(() => this.debouncedOnResize());
    this.resizeObserver.observe(this.typography);
  }

  private cleanupResizeObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }

  updateFormInternalValue(): void {
    if (this.checked) {
      this.formInternals.setFormValue(this.value);
    } else {
      this.formInternals.setFormValue(null);
    }
  }

  disconnectedCallback() {
    this.cleanupResizeObserver();
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
              style={{ '-webkit-line-clamp': `${this.webkitLineClamp}` }}
            >
              {toggleText}
            </ix-typography>
          )}
        </label>
      </Host>
    );
  }
}
