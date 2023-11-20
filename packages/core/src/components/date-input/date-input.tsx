/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { IxDatePickerReworkCustomEvent } from 'src/components';
import { DateChangeEventRework } from '../date-picker-rework/date-picker-rework';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';
import { DateValidatorParam } from '../utils/validators/datetime-input/date-input-validators';
import { InputValidator, Validator } from '../utils/validators/validator';
import {
  convertInputValidators,
  DATE_VALIDATORS,
  getValidator,
  ValidatorName,
} from '../utils/validators/validator.factory';

export interface DateInputEvent {
  InputName: string;
  Event: Event;
}

/**
 * @since 2.1.0
 */
@Component({
  tag: 'ix-date-input',
  styleUrl: 'date-input.scss',
  shadow: true,
})
export class DateInput {
  @Element() hostElement: HTMLIxDateInputElement;

  /**
   * Label for the input
   */
  @Prop() label: string;

  /**
   * Position of the label
   */
  @Prop() labelPosition: 'top' | 'left' | 'inside' = 'top';

  /**
   * Date format string.
   * See {@link "https://day.js.org/docs/en/display/format"} for all available tokens.
   */
  @Prop() format: string = 'YYYY/MM/DD';

  /**
   * If true a date range can be selected (from/to).
   */
  @Prop() range: boolean = true;

  /**
   * Corner style
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  /**
   * The selected starting date. If the date-picker is not in range mode this is the selected date.
   * Format has to match the `format` property.
   */
  @Prop() from: string | undefined;

  @Watch('from')
  watchFromPropHandler(newValue: string) {
    this._from = newValue;
  }

  /**
   * The selected end date. If the the date-picker is not in range mode this property has no impact.
   * Format has to match the `format` property.
   */
  @Prop() to: string | undefined;

  @Watch('to')
  watchToPropHandler(newValue: string) {
    this._to = newValue;
  }

  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() minDate: string;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() maxDate: string;

  /**
   * Text of the button that confirms date selection.
   */
  @Prop() i18nSelectDate = 'Done';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   */
  @Prop() weekStartIndex = 0;

  /**
   * Suppresses the error message that displays below the input if validation failed.
   */
  @Prop() suppressErrorMessage: boolean = false;

  /**
   * Array of validators that are active when the date input is part of a form
   */
  @Prop() validators: InputValidator[] | string[] = [
    'validDate',
    'toAfterFrom',
    'withinMinMax',
  ];

  /**
   * Triggers if the date selection changes.
   */
  @Event() dateChange: EventEmitter<DateChangeEventRework>;

  /**
   * Date selection confirmed via button action
   */
  @Event() dateSelect: EventEmitter<DateChangeEventRework>;

  /**
   * Triggers if one of the inputs changes
   * @emits DateInputEvent
   */
  @Event() ixChange: EventEmitter<DateInputEvent>;

  /**
   * Triggers if one of the inputs gets focus
   * @emits DateInputEvent
   */
  @Event() ixFocus: EventEmitter<DateInputEvent>;

  /**
   * Triggers if one of the inputs loses focus
   * @emits DateInputEvent
   */
  @Event() ixBlur: EventEmitter<DateInputEvent>;

  /**
   * Triggers if the inputs get cleared by pressing the clear button
   * @emits void
   */
  @Event() ixClear: EventEmitter<void>;

  /**
   * Gets the current input
   * @returns DateChangeEvent
   */
  @Method()
  async getCurrentInput(): Promise<DateChangeEventRework> {
    return {
      from: this._from,
      to: this._to,
    };
  }

  @Listen('dateSelect')
  dateSelectHandler() {
    this.hostElement.shadowRoot.querySelector('ix-dropdown').show = false;
  }

  @State() private dateInputDiv: HTMLDivElement;
  @State() private errorMessage: string;
  @State() private _from: string;
  @State() private _to: string;

  private firstInput: HTMLInputElement;
  private secondInput: HTMLInputElement;
  private focusedInput!: HTMLInputElement;
  private datePicker!: HTMLIxDatePickerReworkElement;
  private validator: Validator<DateValidatorParam>;
  private wasValidated: boolean;

  private getFocusedInputName(): string {
    if (this.focusedInput === this.firstInput) {
      return 'from';
    }

    if (this.focusedInput === this.secondInput) {
      return 'to';
    }
  }

  private onInputFocus = (event: FocusEvent) => {
    this.focusedInput = event.target as HTMLInputElement;

    this.ixFocus.emit({
      InputName: this.getFocusedInputName(),
      Event: event,
    });
  };

  private onInputBlur = (event: FocusEvent) => {
    const relatedElem = event.relatedTarget as HTMLElement;
    if (relatedElem?.tagName === this.datePicker.tagName) {
      this.focusedInput.focus();
      return;
    }

    this.ixBlur.emit({
      InputName: this.getFocusedInputName(),
      Event: event,
    });
  };

  private onDateChange(
    event: IxDatePickerReworkCustomEvent<DateChangeEventRework>
  ) {
    this._from = event.detail.from;
    this._to = event.detail.to;

    this.dateChange.emit({
      from: this._from,
      to: this._to,
    });

    this.updateValidity();
  }

  private readonly clear = () => {
    this._from = undefined;
    this._to = undefined;
    this.firstInput.value = '';
    this.secondInput.value = '';

    this.firstInput.focus();
    this.ixClear.emit();
    this.updateValidity();
  };

  onFromInputChange(event) {
    if (this._from !== event.target.value) this._from = event.target.value;
    this.onInputChange(event, 'from');
  }

  onToInputChange(event) {
    if (this._to !== event.target.value) this._to = event.target.value;
    this.onInputChange(event, 'to');
  }

  onInputChange(event: InputEvent, input: string) {
    this.ixChange.emit({
      InputName: input,
      Event: event,
    });

    this.updateValidity();
  }

  private updateValidity() {
    if (this.wasValidated) {
      this.setInputValidity();
    }
  }

  private readonly setInputValidity = () => {
    const param: DateValidatorParam = {
      from: this.firstInput.value,
      to: this.secondInput.value,
      format: this.format,
      min: this.minDate,
      max: this.maxDate,
    };

    const isValid = this.validator.validate(param);
    if (!isValid) {
      this.firstInput.setCustomValidity(this.validator.errorMessage);
      this.secondInput.setCustomValidity(this.validator.errorMessage);
    } else {
      this.firstInput.setCustomValidity('');
      this.secondInput.setCustomValidity('');
    }

    this.dateInputDiv.classList.toggle('is-invalid', !isValid);
    this.hostElement.classList.toggle('invalid', !isValid);
    this.hostElement.classList.toggle('is-valid', isValid);

    this.wasValidated = true;
    this.errorMessage = this.validator.errorMessage;
  };

  componentWillLoad() {
    this._from = this.from;
    this._to = this.to;

    const validatorEntries = convertInputValidators(this.validators).filter(
      (v) => DATE_VALIDATORS.includes(v.name as ValidatorName)
    );
    this.validator = getValidator(validatorEntries);

    const hiddenInput = document.createElement('input');
    hiddenInput.style.display = 'none';
    this.hostElement.appendChild(hiddenInput);

    hiddenInput.form.addEventListener('submit', this.setInputValidity);
  }

  renderRangeInput(): any {
    return (
      <Fragment>
        <input
          id="firstInput"
          ref={(ref) => (this.firstInput = ref as HTMLInputElement)}
          type="text"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._from}
          onInput={(event) => this.onFromInputChange(event)}
          required
        />
        <span class="vertical-align">
          <ix-icon name="arrow-right"></ix-icon>
        </span>
        <input
          id="secondInput"
          ref={(ref) => (this.secondInput = ref as HTMLInputElement)}
          type="text"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._to}
          onInput={(event) => this.onToInputChange(event)}
          required
        />
      </Fragment>
    );
  }

  renderSingleInput(): any {
    return (
      <Fragment>
        <input
          ref={(ref) => (this.firstInput = ref as HTMLInputElement)}
          id="firstInput"
          type="text"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._from}
          onInput={(event) => this.onFromInputChange(event)}
        />
      </Fragment>
    );
  }

  renderLabel(isInsideInput: boolean): any {
    if (
      !this.label ||
      (isInsideInput && !(this.labelPosition === 'inside')) ||
      (!isInsideInput && this.labelPosition === 'inside')
    ) {
      return '';
    }

    return (
      <span
        id="date-input-label"
        class={{
          'vertical-align':
            this.labelPosition === 'left' || this.labelPosition === 'inside',
          'left-position': this.labelPosition === 'left',
          'inside-position': this.labelPosition === 'inside',
        }}
      >
        {this.label}
      </span>
    );
  }

  render() {
    return (
      <Host class={{ 'label-flex': this.labelPosition === 'left' }}>
        {/* renders if position is top/left */}
        {this.renderLabel(false)}
        <div
          class="date-input"
          aria-labelledby="date-input-label"
          ref={(ref) => (this.dateInputDiv = ref)}
        >
          {/* renders if position is inside */}
          {this.renderLabel(true)}
          {this.range ? this.renderRangeInput() : this.renderSingleInput()}
          <span
            class={{
              'icon-button': true,
              clear: true,
            }}
          >
            <ix-icon-button
              ghost
              icon="clear"
              class={{ hidden: !this._from && !this._to }}
              onClick={this.clear}
            ></ix-icon-button>
          </span>
          <span class="icon-button">
            <ix-icon-button ghost icon="chevron-down-small"></ix-icon-button>
          </span>
        </div>
        <ix-dropdown
          trigger={this.dateInputDiv}
          closeBehavior="outside"
          onClick={(event) => event.stopPropagation()}
          class="dropdown"
        >
          <ix-date-picker-rework
            tabIndex={0}
            ref={(ref) =>
              (this.datePicker = ref as HTMLIxDatePickerReworkElement)
            }
            corners={this.corners}
            range={this.range}
            onDateChange={(event) => this.onDateChange(event)}
            from={this._from}
            to={this._to}
            format={this.format}
            minDate={this.minDate}
            maxDate={this.maxDate}
            weekStartIndex={this.weekStartIndex}
            onClick={(event) => event.stopPropagation()}
          ></ix-date-picker-rework>
        </ix-dropdown>
        {!this.suppressErrorMessage && (
          <div class="invalid-feedback">{this.errorMessage}</div>
        )}
      </Host>
    );
  }
}
