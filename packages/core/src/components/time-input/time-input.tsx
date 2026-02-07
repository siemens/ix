/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconClock } from '@siemens/ix-icons/icons';
import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { IxTimePickerCustomEvent } from '../../components';
import { Slot } from '../input/input.fc';
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
  getValidationText,
  shouldSuppressInternalValidation,
  watchValue,
  renderFieldWrapper,
  onInput,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
} from '../utils/input';
import {
  handleIconClick,
  createInputRenderer,
  createRenderConfig,
  createInputConfig,
} from '../utils/input/picker-input.util';
import { BasePickerInput } from '../utils/input/base-picker-input';
import { makeRef } from '../utils/make-ref';
import type { TimeInputValidityState } from './time-input.types';

/**
 * @since 3.2.0
 * @form-ready
 * @slot start - Element will be displayed at the start of the input
 * @slot end - Element will be displayed at the end of the input
 */
@Component({
  tag: 'ix-time-input',
  styleUrl: 'time-input.scss',
  shadow: true,
  formAssociated: true,
})
export class TimeInput
  extends BasePickerInput
  implements IxInputFieldComponent<string>
{
  @Element() hostElement!: HTMLIxTimeInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  @State() isInputInvalid: boolean = false;
  @State() protected show = false;
  @State() protected suppressValidation = false;
  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() protected focus = false;

  /**
   * Name of the input element
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Placeholder of the input element
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * Value of the input element
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  @Watch('value') watchValuePropHandler(newValue: string) {
    watchValue({
      newValue,
      required: this.required,
      onInput: (value: string) => void this.onInput(value),
      setTouched: (touched: boolean) => (this.touched = touched),
      isClearing: this.isClearing,
    });
  }

  /**
   * Format of time string
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() format: string = 'TT';

  /**
   * Required attribute
   */
  @Prop() required?: boolean;

  @Watch('required')
  onRequiredChange() {
    this.syncValidationClasses();
  }

  /**
   * Helper text below the input field
   */
  @Prop() helperText?: string;

  /**
   * Label of the input field
   */
  @Prop() label?: string;

  /**
   * Error text below the input field
   */
  @Prop({ reflect: true }) invalidText?: string;

  /**
   * Readonly attribute
   */
  @Prop() readonly: boolean = false;

  /**
   * Disabled attribute
   */
  @Prop() disabled: boolean = false;

  /**
   * Info text below the input field
   */
  @Prop() infoText?: string;

  /**
   * Warning text below the input field
   */
  @Prop() warningText?: string;

  /**
   * Valid text below the input field
   */
  @Prop() validText?: string;

  /**
   * Show text as tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * I18n string for the error message when the time is not parsable
   */
  @Prop({ attribute: 'i18n-error-time-unparsable' }) i18nErrorTimeUnparsable =
    'Time is not valid';

  /**
   * Interval for hour selection
   */
  @Prop() hourInterval: number = 1;

  /**
   * Interval for minute selection
   */
  @Prop() minuteInterval: number = 1;

  /**
   * Interval for second selection
   */
  @Prop() secondInterval: number = 1;

  /**
   * Interval for millisecond selection
   */
  @Prop() millisecondInterval: number = 100;

  /**
   * Text of time-picker time select button
   */
  @Prop({ attribute: 'i18n-select-time' }) i18nSelectTime: string = 'Confirm';

  /**
   * Text for time-picker top label
   */
  @Prop({ attribute: 'i18n-time' }) i18nTime: string = 'Time';

  /**
   * Text for time-picker hour column header
   */
  @Prop({ attribute: 'i18n-hour-column-header' }) i18nHourColumnHeader: string =
    'hr';

  /**
   * Text for time-picker minute column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-minute-column-header' })
  i18nMinuteColumnHeader: string = 'min';

  /**
   * Text for time-picker second column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-second-column-header' })
  i18nSecondColumnHeader: string = 'sec';

  /**
   * Text for time-picker millisecond column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-millisecond-column-header' })
  i18nMillisecondColumnHeader: string = 'ms';

  /**
   * If false, pressing Enter will submit the form (if inside a form).
   * Set to true to suppress submit on Enter.
   */
  @Prop({ reflect: true }) suppressSubmitOnEnter: boolean = false;

  /**
   * Hides the header of the picker.
   *
   * @since 4.0.0
   */
  @Prop() hideHeader: boolean = false;

  /**
   * Text alignment within the time input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
   */
  @Prop() textAlignment: 'start' | 'end' = 'start';

  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * Input change event.
   */
  @Event({ cancelable: false }) valueChange!: EventEmitter<string>;

  /**
   * Validation state change event.
   */
  @Event() validityStateChange!: EventEmitter<TimeInputValidityState>;

  /** @internal */
  @Event() ixFocus!: EventEmitter<void>;

  /** @internal */
  @Event() ixBlur!: EventEmitter<void>;

  @State() time: string | null = null;

  private readonly timePickerRef = makeRef<HTMLIxTimePickerElement>();

  connectedCallback(): void {
    this.initializeObservers();
  }

  componentWillLoad(): void {
    if (!this.value) {
      const now = DateTime.now();
      if (now.isValid) {
        this.value = now.toFormat(this.format);
      }
    }

    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.time = null;
    } else {
      this.watchValue();
    }

    this.updateFormInternalValue(this.value);
  }

  componentDidLoad(): void {
    this.syncValidationClasses();
  }

  disconnectedCallback(): void {
    this.destroyObservers();
  }

  @Watch('value')
  watchValue() {
    this.time = this.value;
  }

  @Watch('isInputInvalid')
  async onInputValidationChange() {
    return this.pickerMethods.onInputValidationChange();
  }

  @HookValidationLifecycle()
  hookValidationLifecycle(results: ValidationResults) {
    this.pickerMethods.hookValidationLifecycle(results);
  }

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(!!this.value);
  }

  /** @internal */
  @Method()
  getAssociatedFormElement(): Promise<HTMLFormElement | null> {
    return Promise.resolve(this.formInternals.form);
  }

  async onInput(value: string) {
    this.value = value;

    this.suppressValidation = await shouldSuppressInternalValidation(this);

    if (!value) {
      this.isInputInvalid = false;
      this.invalidReason = undefined;
      this.emitChangesAndSyncValue(value);
      return;
    }

    if (!this.format) {
      return;
    }

    if (this.suppressValidation) {
      this.isInputInvalid = false;
      this.invalidReason = undefined;
      this.emitChangesAndSyncValue(value);
      return;
    }

    const time = DateTime.fromFormat(value, this.format);
    this.isInputInvalid = !time.isValid;
    this.invalidReason = time.isValid ? undefined : time.invalidReason;

    this.emitChangesAndSyncValue(value);
  }

  async onTimeIconClick(event: Event) {
    await handleIconClick(
      event,
      this.show,
      () => this.dropdownMethods.openDropdown(),
      this.inputElementRef
    );
  }

  updateFormInternalValue(value: string): void {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  beforeOpenDropdown(): void {
    this.time = this.value;
  }

  private emitChangesAndSyncValue(value: string): void {
    this.emitChangesAndSync(
      value,
      this.valueChange,
      (val) => this.updateFormInternalValue(val),
      this.required
    );
  }

  private renderInput() {
    const renderPickerInputFn = createInputRenderer(h, Slot);
    const config = createInputConfig(
      this,
      <ix-icon-button
        data-testid="open-time-picker"
        class={{ 'time-icon-hidden': this.disabled || this.readonly }}
        variant="subtle-tertiary"
        icon={iconClock}
        onClick={(event) => this.onTimeIconClick(event)}
        aria-label="Toggle time picker"
        aria-expanded={this.show}
      ></ix-icon-button>
    );
    const eventConfig = this.getEventConfig();
    return renderPickerInputFn(config, {
      onInput: onInput(eventConfig),
      onClick: onClick(eventConfig),
      onFocus: onFocus(eventConfig),
      onBlur: onBlur(eventConfig),
      onKeyDown: onKeyDown(eventConfig),
    });
  }

  render() {
    const invalidText = getValidationText(
      this.isInputInvalid,
      this.invalidText,
      this.i18nErrorTimeUnparsable
    );

    const config = createRenderConfig(
      this,
      this.renderInput(),
      <ix-time-picker
        ref={this.timePickerRef}
        format={this.format}
        time={this.time ?? ''}
        hourInterval={this.hourInterval}
        minuteInterval={this.minuteInterval}
        secondInterval={this.secondInterval}
        millisecondInterval={this.millisecondInterval}
        embedded
        hideHeader={this.hideHeader}
        i18nConfirmTime={this.i18nSelectTime}
        i18nHeader={this.i18nTime}
        i18nHourColumnHeader={this.i18nHourColumnHeader}
        i18nSecondColumnHeader={this.i18nSecondColumnHeader}
        i18nMinuteColumnHeader={this.i18nMinuteColumnHeader}
        i18nMillisecondColumnHeader={this.i18nMillisecondColumnHeader}
        onTimeSelect={(event: IxTimePickerCustomEvent<string>) => {
          this.onInput(event.detail);
          this.show = false;
        }}
      ></ix-time-picker>,
      'time-dropdown'
    );

    config.invalidText = invalidText;

    return renderFieldWrapper(config);
  }
}
